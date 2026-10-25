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
  const sessionParent = sessionParents(catalog.sessions);
  const allById = new Map(catalog.sessions.map((s) => [s.id, s]));
  const archived = new Set(catalog.archivedSessionIds);
  const sessions = catalog.sessions.filter(
    (s) =>
      s.id === catalog.currentSessionId ||
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
  const workspacePositions = new Map<string, Point>();
  const workspacePosition = (id: string): Point => {
    const saved =
      layout.positions["workspace:" + id] ?? workspacePositions.get(id);
    if (saved) return saved;
    const parentId = workspaceParent.get(id);
    const index = groups.findIndex((w) => w.id === id);
    let position: Point;
    if (parentId) {
      const parent = workspacePosition(parentId);
      const slot = groups
        .filter((w) => workspaceParent.get(w.id) === parentId)
        .findIndex((w) => w.id === id);
      position = { x: parent.x + 300, y: parent.y + 180 + slot * 240 };
    } else
      position = {
        x: (index % 3) * 540 + 280,
        y: Math.floor(index / 3) * 620 + 290,
      };
    workspacePositions.set(id, position);
    return position;
  };
  const sessionPositions = new Map<string, Point>();
  const sessionPosition = (s: SessionRow): Point => {
    const saved =
      layout.positions["session:" + s.id] ?? sessionPositions.get(s.id);
    if (saved) return saved;
    const parentId = sessionParent.get(s.id);
    let position: Point;
    if (parentId) {
      const parent = sessionPosition(allById.get(parentId)!);
      const slot = catalog.sessions
        .filter((row) => sessionParent.get(row.id) === parentId)
        .findIndex((row) => row.id === s.id);
      const column = slot === 0 ? 0 : Math.ceil(slot / 2) * (slot % 2 ? -1 : 1);
      position = {
        x: parent.x + column * 150,
        y: parent.y - 190 - Math.floor(slot / 6) * 130,
      };
    } else {
      const groupId = owner.get(s.id) ?? "__ungrouped__";
      const parent = workspacePosition(groupId);
      const index = Math.max(
        0,
        groupById.get(groupId)?.sessionIds.indexOf(s.id) ?? 0,
      );
      const radius = 185 + Math.floor(index / 12) * 120;
      const angle = index * 2.399963229728653 - Math.PI / 2;
      position = {
        x: parent.x + Math.cos(angle) * radius + 14,
        y: parent.y + Math.sin(angle) * radius + 14,
      };
    }
    sessionPositions.set(s.id, position);
    return position;
  };
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
      current: s.id === catalog.currentSessionId,
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
    const resident = children.find((s) => s.id === catalog.currentSessionId);
    if (resident && !visible.some((s) => s.id === resident.id))
      visible.push(resident);
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
