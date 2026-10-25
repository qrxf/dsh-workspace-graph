import type {
  GraphCatalog,
  Filters,
  LayoutDocument,
  GraphProjection,
  SessionRow,
  Status,
  BubbleNode,
  WorkspaceRow,
} from "./types.ts";
import { runtimeTreePositions } from "./treeLayout.ts";
import { recency, frequency } from "./activity.ts";
import { workspaceParents, sessionParents } from "./hierarchy.ts";
import type { Point } from "./types.ts";

export function sessionStatus(row: SessionRow): Status {
  if (row.pending) return "waiting";
  if (row.running === true) return "running";
  if (row.unread) return "unread";
  return row.running === false ? "idle" : "unknown";
}
export function projectGraph(
  catalog: GraphCatalog,
  filters: Filters,
  layout: LayoutDocument,
  limits: Record<string, number> = {},
  expanded: ReadonlySet<string> = new Set(),
  now = Date.now(),
): GraphProjection {
  const workspaceParent = workspaceParents(catalog.workspaces);
  const currentIds = new Set(
    catalog.currentSessionIds ??
      (catalog.currentSessionId ? [catalog.currentSessionId] : []),
  );
  const active = (s: SessionRow) =>
    currentIds.has(s.id) || s.running === true || s.pending === true;
  const sessionParent = sessionParents(catalog.sessions);
  const allById = new Map(catalog.sessions.map((s) => [s.id, s]));
  const archived = new Set(catalog.archivedSessionIds);
  const sessions = catalog.sessions.filter(
    (s) =>
      active(s) ||
      (!s.blank &&
        s.origin !== "subagent" &&
        (filters.archived || !archived.has(s.id))),
  );
  const byId = new Map(sessions.map((s) => [s.id, s]));
  const owned = new Set(catalog.workspaces.flatMap((w) => [...w.sessionIds]));
  const ungrouped = sessions.filter((s) => !owned.has(s.id));
  const groups: (WorkspaceRow & { virtual?: boolean })[] = [
    ...catalog.workspaces,
  ];
  if (
    ungrouped.length ||
    [...sessionParent.values()].some((id) => !owned.has(id))
  )
    groups.push({
      id: "__ungrouped__",
      title: "未分组",
      path: "",
      sessionIds: ungrouped.map((s) => s.id),
      virtual: true,
    });
  const nodes: BubbleNode[] = [],
    edges: GraphProjection["edges"] = [];
  const query = filters.query.trim().toLocaleLowerCase();
  const statuses =
    filters.statuses ?? (filters.status === "all" ? [] : [filters.status]);
  let matched = 0;
  const matchingIds = new Set<string>();
  const emitted = new Set<string>();
  const owner = new Map<string, string>();
  for (const group of groups)
    for (const id of group.sessionIds)
      if (!owner.has(id)) owner.set(id, group.id);
  const groupById = new Map(groups.map((w) => [w.id, w]));
  const defaults = runtimeTreePositions(catalog, layout.positions);
  const workspacePosition = (id: string): Point =>
    layout.positions["workspace:" + id] ??
    defaults["workspace:" + id] ?? { x: 280, y: 290 };
  const sessionPosition = (s: SessionRow): Point =>
    layout.positions["session:" + s.id] ??
    defaults["session:" + s.id] ?? { x: 280, y: 290 };
  const sessionNode = (s: SessionRow, context = false): BubbleNode => ({
    id: "session:" + s.id,
    type: "bubble",
    position: sessionPosition(s),
    data: {
      kind: "session",
      entityId: s.id,
      title: s.title,
      status: sessionStatus(s),
      path: s.cwd,
      workspaceId: owner.get(s.id) ?? "__ungrouped__",
      parentSessionId: sessionParent.get(s.id),
      context,
      archived: archived.has(s.id),
      updatedAt: s.updatedAt,
      current: currentIds.has(s.id),
      working: s.running === true,
      pinned: layout.settings?.pinned?.includes(s.id),
      recency: recency(s.updatedAt, now),
      frequency: frequency(layout.settings?.usage?.[s.id], now),
    },
  });
  groups.forEach((w) => {
    let scopeId: string | undefined = w.id;
    while (scopeId && scopeId !== filters.workspace)
      scopeId = workspaceParent.get(scopeId);
    const inScope =
      filters.workspace === "all" || scopeId === filters.workspace;
    const children = [...new Set(w.sessionIds)].flatMap((id) =>
      byId.has(id) && owner.get(id) === w.id ? [byId.get(id)!] : [],
    );
    const groupMatch =
      !query || (w.title + " " + w.path).toLocaleLowerCase().includes(query);
    const candidates = children
      .filter(
        (s) =>
          inScope &&
          (groupMatch || s.title.toLocaleLowerCase().includes(query)) &&
          (!statuses.length || statuses.includes(sessionStatus(s))) &&
          (!filters.recency ||
            filters.recency === "all" ||
            recency(s.updatedAt, now) === filters.recency) &&
          (!filters.frequency ||
            filters.frequency === "all" ||
            frequency(layout.settings?.usage?.[s.id], now) ===
              filters.frequency),
      )
      .sort(
        (a, b) =>
          Number(layout.settings?.pinned?.includes(b.id) ?? false) -
          Number(layout.settings?.pinned?.includes(a.id) ?? false),
      );
    const states = children.map(sessionStatus);
    const aggregate =
      (["waiting", "running", "unread", "idle"] as Status[]).find((s) =>
        states.includes(s),
      ) ?? "unknown";
    const rootId = "workspace:" + w.id;
    const collapsed = !expanded.has(w.id);
    // Workspace anchors stay visible even when their conversations do not match.
    nodes.push({
      id: rootId,
      type: "bubble",
      position: workspacePosition(w.id),
      data: {
        kind: "workspace",
        entityId: w.id,
        title: w.title,
        path: w.path,
        status: aggregate,
        count: candidates.length,
        total: children.length,
        virtual: w.virtual,
        parentWorkspaceId: workspaceParent.get(w.id),
        childWorkspaceCount: groups.filter(
          (child) => workspaceParent.get(child.id) === w.id,
        ).length,
        collapsed,
        current: children.some((s) => currentIds.has(s.id)),
        working: children.some((s) => s.running === true),
      },
    });
    const parentWorkspaceId = workspaceParent.get(w.id);
    if (parentWorkspaceId)
      edges.push({
        id: "workspace:" + parentWorkspaceId + "->" + rootId,
        source: "workspace:" + parentWorkspaceId,
        target: rootId,
      });
    matched += candidates.length;
    for (const s of candidates) matchingIds.add(s.id);
    const limit = limits[w.id] ?? 20;
    const visible =
      collapsed || filters.kind === "workspace"
        ? []
        : candidates.slice(0, limit);
    for (const resident of children.filter(active))
      if (!visible.some((s) => s.id === resident.id)) visible.push(resident);
    visible.forEach((s) => {
      if (emitted.has(s.id)) return;
      emitted.add(s.id);
      nodes.push(sessionNode(s));
    });
  });
  // A filtered/paginated branch still needs its actual source, never a replacement workspace edge.
  for (const id of emitted) {
    const parentId = sessionParent.get(id);
    if (parentId && !emitted.has(parentId)) {
      emitted.add(parentId);
      nodes.push(sessionNode(allById.get(parentId)!, true));
    }
  }
  for (const id of emitted) {
    const parentId = sessionParent.get(id);
    const source = parentId
      ? "session:" + parentId
      : "workspace:" + (owner.get(id) ?? "__ungrouped__");
    const target = "session:" + id;
    edges.push({
      id: source + "->" + target,
      source,
      target,
      ...(parentId
        ? { sourceHandle: "branch-source", targetHandle: "branch-target" }
        : {}),
    });
  }
  return {
    nodes,
    edges,
    matched,
    total: sessions.length,
    hidden: [...matchingIds].filter((id) => !emitted.has(id)).length,
  };
}
