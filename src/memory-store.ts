import type { DatabaseSync } from "node:sqlite";
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import type { MemoryItem, MemoryLink, MemorySnapshot } from "./memory.ts";

export interface MemoryWorkspace {
  id: string;
  path: string;
  sessionIds: readonly string[];
}
interface RecordRow {
  workspace_id: string;
  id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  origin_workspace: string | null;
  source_session: string | null;
}
interface UsageRow {
  workspace_id: string;
  memory_id: string;
  use_count: number;
  last_used_at: string | null;
}
const pathKey = (path: string) =>
  (/^[a-z]:[/\\]/i.test(path) || path.startsWith("\\\\")
    ? path.replaceAll("\\", "/")
    : path
  ).replace(/\/+$/, "") || (path.startsWith("/") ? "/" : "");
function uniqueIndex<T>(
  rows: readonly T[],
  key: (row: T) => readonly string[],
) {
  const index = new Map<string, T | undefined>();
  for (const row of rows)
    for (const value of key(row))
      index.set(value, index.has(value) ? undefined : row);
  return index;
}
function open(file: string) {
  // Lazy loading lets hosts without node:sqlite keep the base graph usable.
  const { DatabaseSync } = createRequire(import.meta.url)(
    "node:sqlite",
  ) as typeof import("node:sqlite");
  const db = new DatabaseSync(file, { readOnly: true });
  db.exec("PRAGMA query_only = ON; BEGIN");
  return db;
}
function readRows(db: DatabaseSync) {
  const rows = db
    .prepare(
      "SELECT workspace_id,id,title,description,type,status,origin_workspace,source_session FROM memories",
    )
    .all() as unknown as RecordRow[];
  if (
    !rows.every(
      (row) =>
        [
          row.workspace_id,
          row.id,
          row.title,
          row.description,
          row.type,
          row.status,
        ].every((value) => typeof value === "string") &&
        [row.origin_workspace, row.source_session].every(
          (value) => value === null || typeof value === "string",
        ),
    )
  )
    throw new Error("Invalid memory metadata");
  return rows;
}
function readUsage(db: DatabaseSync) {
  const rows = db
    .prepare(
      "SELECT workspace_id,memory_id,use_count,last_used_at FROM memory_usage WHERE use_count > 0",
    )
    .all() as unknown as UsageRow[];
  if (
    !rows.every(
      (row) =>
        typeof row.workspace_id === "string" &&
        typeof row.memory_id === "string" &&
        Number.isSafeInteger(row.use_count) &&
        row.use_count > 0 &&
        (row.last_used_at === null || typeof row.last_used_at === "string"),
    )
  )
    throw new Error("Invalid memory usage");
  return rows;
}
// continual-evolve partitions by raw string. Never merge two spelling variants.
// A unique alias is only a fallback when the exact host path has no records.
function partition(path: string, rows: RecordRow[], usages: UsageRow[]) {
  const roots = new Set([
    ...rows.map((row) => row.workspace_id),
    ...usages.map((row) => row.workspace_id),
  ]);
  if (roots.has(path)) return path;
  const aliases = [...roots].filter(
    (root) => root !== "" && pathKey(root) === pathKey(path),
  );
  return aliases.length === 1 ? aliases[0] : path;
}
function visible(rows: RecordRow[], path: string) {
  const local = rows.filter(
    (r) => r.workspace_id === path && r.status !== "archived",
  );
  const shadowed = new Set(local.map((r) => r.id));
  return [
    ...local,
    ...rows.filter(
      (r) =>
        r.workspace_id === "" && r.status !== "archived" && !shadowed.has(r.id),
    ),
  ].filter((r) => r.status === "active");
}
export function readMemorySnapshot(
  file: string,
  workspaces: readonly MemoryWorkspace[],
): MemorySnapshot {
  if (!existsSync(file))
    return {
      status: "missing",
      message:
        "尚无记忆数据库；在此宿主启用 dsh-continual-evolve 后可显示记忆。",
      items: [],
      links: [],
    };
  let db: DatabaseSync | undefined;
  try {
    db = open(file);
    const columns = (table: string) =>
      new Set(
        (
          db!.prepare("PRAGMA table_info(" + table + ")").all() as {
            name: string;
          }[]
        ).map((r) => r.name),
      );
    const memoryColumns = columns("memories"),
      usageColumns = columns("memory_usage");
    if (
      ![
        "workspace_id",
        "id",
        "title",
        "description",
        "type",
        "status",
        "origin_workspace",
        "source_session",
      ].every((x) => memoryColumns.has(x)) ||
      !["workspace_id", "memory_id", "use_count", "last_used_at"].every((x) =>
        usageColumns.has(x),
      )
    )
      return {
        status: "incompatible",
        message: "记忆数据库结构不兼容；请更新 dsh-continual-evolve。",
        items: [],
        links: [],
      };
    const rows = readRows(db);
    const usages = readUsage(db);
    const paths = uniqueIndex(workspaces, (w) => [pathKey(w.path)]);
    const sessions = uniqueIndex(workspaces, (w) => w.sessionIds);
    const items: MemoryItem[] = [],
      links = new Map<string, MemoryLink>();
    for (const workspace of workspaces) {
      if (paths.get(pathKey(workspace.path)) !== workspace) continue;
      const root = partition(workspace.path, rows, usages);
      const usage = new Map(
        usages
          .filter((u) => u.workspace_id === root)
          .map((u) => [u.memory_id, u]),
      );
      for (const row of visible(rows, root)) {
        const source =
          row.workspace_id !== ""
            ? workspace
            : row.origin_workspace
              ? paths.get(pathKey(row.origin_workspace))
              : row.source_session
                ? sessions.get(row.source_session)
                : undefined;
        const used = usage.get(row.id);
        const item: MemoryItem = {
          workspaceId: workspace.id,
          id: row.id,
          title: row.title,
          description: row.description,
          type: row.type,
          scope: row.workspace_id === "" ? "global" : "project",
          ...(source ? { sourceWorkspaceId: source.id } : {}),
          useCount: used?.use_count ?? 0,
          lastUsedAt: used?.last_used_at ?? null,
        };
        items.push(item);
        if (!used || !source || source.id === workspace.id) continue;
        const key = JSON.stringify([workspace.id, source.id]);
        const link = links.get(key) ?? {
          readerId: workspace.id,
          sourceId: source.id,
          count: 0,
          lastReadAt: "",
          memoryIds: [],
        };
        link.count += used.use_count;
        if ((used.last_used_at ?? "") > link.lastReadAt)
          link.lastReadAt = used.last_used_at!;
        link.memoryIds.push(row.id);
        links.set(key, link);
      }
    }
    for (const link of links.values()) link.memoryIds.sort();
    return { status: "available", items, links: [...links.values()] };
  } catch {
    return {
      status: "error",
      message: "无法读取记忆数据库；图谱仍可使用，请稍后刷新。",
      items: [],
      links: [],
    };
  } finally {
    db?.close();
  }
}
export function readMemoryBody(
  file: string,
  workspaces: readonly MemoryWorkspace[],
  workspaceId: string,
  id: string,
): string {
  const workspace = workspaces.find((w) => w.id === workspaceId);
  if (!workspace || !id || id.length > 512)
    throw new Error("无效的工作区或记忆标识");
  const db = open(file);
  try {
    const rows = readRows(db);
    const root = partition(workspace.path, rows, readUsage(db));
    const row = visible(rows, root).find((r) => r.id === id);
    if (!row) throw new Error("记忆已移除或当前工作区不可见");
    const result = db
      .prepare(
        "SELECT body FROM memories WHERE workspace_id = ? AND id = ? AND status = 'active'",
      )
      .get(row.workspace_id, row.id) as { body: string } | undefined;
    if (!result || typeof result.body !== "string")
      throw new Error("记忆正文损坏或已移除");
    return result.body;
  } finally {
    db.close();
  }
}
