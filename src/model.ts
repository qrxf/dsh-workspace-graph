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
): GraphProjection {
  const archived = new Set(catalog.archivedSessionIds);
  const sessions = catalog.sessions.filter(
    (s) =>
      !s.blank &&
      s.origin !== "subagent" &&
      (filters.archived || !archived.has(s.id)),
  );
  const byId = new Map(sessions.map((s) => [s.id, s]));
  const owned = new Set(catalog.workspaces.flatMap((w) => [...w.sessionIds]));
  const ungrouped = sessions.filter((s) => !owned.has(s.id));
  const groups: (WorkspaceRow & { virtual?: boolean })[] = [
    ...catalog.workspaces,
  ];
  if (ungrouped.length)
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
  let matched = 0,
    hidden = 0;
  groups.forEach((w, groupIndex) => {
    if (filters.workspace !== "all" && filters.workspace !== w.id) return;
    const children = w.sessionIds.flatMap((id) =>
      byId.has(id) ? [byId.get(id)!] : [],
    );
    const groupMatch =
      !query || (w.title + " " + w.path).toLocaleLowerCase().includes(query);
    const candidates = children.filter(
      (s) =>
        (groupMatch || s.title.toLocaleLowerCase().includes(query)) &&
        (filters.status === "all" || sessionStatus(s) === filters.status),
    );
    const states = children.map(sessionStatus);
    const aggregate =
      (["waiting", "running", "unread", "idle"] as Status[]).find((s) =>
        states.includes(s),
      ) ?? "unknown";
    const parentOnlyMatch =
      groupMatch && (filters.status === "all" || aggregate === filters.status);
    if (!candidates.length && !parentOnlyMatch) return;
    const rootId = "workspace:" + w.id;
    const centre = {
      x: (groupIndex % 3) * 540 + 280,
      y: Math.floor(groupIndex / 3) * 620 + 290,
    };
    const collapsed = layout.collapsed.includes(w.id);
    // A session-only view intentionally omits the parent and its edges.
    if (filters.kind !== "session")
      nodes.push({
        id: rootId,
        type: "bubble",
        position: layout.positions[rootId] ?? centre,
        data: {
          kind: "workspace",
          entityId: w.id,
          title: w.title,
          path: w.path,
          status: aggregate,
          count: candidates.length,
          total: children.length,
          virtual: w.virtual,
          collapsed,
        },
      });
    if (filters.kind === "workspace") return;
    matched += candidates.length;
    const limit = limits[w.id] ?? 20;
    const visible = collapsed ? [] : candidates.slice(0, limit);
    hidden += candidates.length - visible.length;
    visible.forEach((s) => {
      // Slot depends on the full membership list, so filtering and expansion never shift existing bubbles.
      const index = w.sessionIds.indexOf(s.id);
      const ring = Math.floor(index / 12),
        angle = index * 2.399963229728653 - Math.PI / 2;
      const radius = 185 + ring * 120;
      const id = "session:" + s.id;
      nodes.push({
        id,
        type: "bubble",
        position: layout.positions[id] ?? {
          x: centre.x + Math.cos(angle) * radius + 14,
          y: centre.y + Math.sin(angle) * radius + 14,
        },
        data: {
          kind: "session",
          entityId: s.id,
          title: s.title,
          status: sessionStatus(s),
          path: s.cwd,
          workspaceId: w.id,
          archived: archived.has(s.id),
          updatedAt: s.updatedAt,
        },
      });
      if (filters.kind !== "session")
        edges.push({ id: rootId + "->" + id, source: rootId, target: id });
    });
  });
  return { nodes, edges, matched, total: sessions.length, hidden };
}
