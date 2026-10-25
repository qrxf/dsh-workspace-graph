import type { GraphCatalog, Point, SessionRow, WorkspaceRow } from "./types.ts";

// Match DSH's owningParentFolder: host spelling is case-sensitive; normalize
// Windows separators only, and require a complete directory boundary.
const folderPath = (path: string) =>
  (/^[A-Za-z]:[/\\]/.test(path) || path.startsWith("\\\\")
    ? path.replaceAll("\\", "/")
    : path
  ).replace(/\/+$/, "");

export function workspaceParents(workspaces: readonly WorkspaceRow[]) {
  const paths = workspaces.map((w) => ({ id: w.id, path: folderPath(w.path) }));
  const parents = new Map<string, string>();
  for (const child of paths) {
    let length = -1;
    for (const parent of paths) {
      if (
        parent.id !== child.id &&
        parent.path.length > length &&
        child.path !== parent.path &&
        child.path.startsWith(parent.path + "/")
      ) {
        parents.set(child.id, parent.id);
        length = parent.path.length;
      }
    }
  }
  return parents;
}

export function sessionParents(sessions: readonly SessionRow[]) {
  const byId = new Map(sessions.map((s) => [s.id, s]));
  const parents = new Map<string, string>();
  for (const session of sessions) {
    if (!session.parentId || !byId.has(session.parentId)) continue;
    const seen = new Set([session.id]);
    let id: string | undefined = session.parentId;
    while (id && byId.has(id) && !seen.has(id)) {
      seen.add(id);
      id = byId.get(id)!.parentId;
    }
    if (!id || !seen.has(id)) parents.set(session.id, session.parentId);
  }
  return parents;
}

/** Translate saved, hidden descendants with their closest moving parent. */
export function carryHiddenPositions(
  catalog: GraphCatalog,
  previous: Record<string, Point>,
  moved: Record<string, Point>,
) {
  const parents = new Map<string, string>();
  for (const [child, parent] of workspaceParents(catalog.workspaces))
    parents.set("workspace:" + child, "workspace:" + parent);
  for (const w of catalog.workspaces)
    for (const id of w.sessionIds)
      if (!parents.has("session:" + id))
        parents.set("session:" + id, "workspace:" + w.id);
  for (const session of catalog.sessions)
    if (!parents.has("session:" + session.id))
      parents.set("session:" + session.id, "workspace:__ungrouped__");
  for (const [child, parent] of sessionParents(catalog.sessions))
    parents.set("session:" + child, "session:" + parent);
  const result = { ...moved };
  const resolve = (id: string): Point | undefined => {
    if (result[id]) return result[id];
    const before = previous[id],
      parentId = parents.get(id);
    if (!before || !parentId) return before;
    const parentBefore = previous[parentId],
      parentAfter = resolve(parentId);
    if (!parentBefore || !parentAfter) return before;
    return (result[id] = {
      x: before.x + parentAfter.x - parentBefore.x,
      y: before.y + parentAfter.y - parentBefore.y,
    });
  };
  for (const id of parents.keys()) if (previous[id]) resolve(id);
  return result;
}
