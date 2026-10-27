import type { GraphCatalog, Point } from "./types.ts";
import {
  workspaceParents,
  sessionParents,
  carryHiddenPositions,
} from "./hierarchy.ts";
import { bubbleGeometry } from "./geometry.ts";
// Native adapter and demo publish immutable catalog snapshots. Never cache
// runtime positions: dragging changes those independently of the catalog.
const defaultsCache = new WeakMap<GraphCatalog, Record<string, Point>>();

/** Stable radial forest. Coordinates are generated from the complete catalog. */
export function defaultTreePositions(
  catalog: GraphCatalog,
): Record<string, Point> {
  const cached = defaultsCache.get(catalog);
  if (cached) return cached;
  const parents = new Map<string, string>(),
    kinds = new Map<string, "workspace" | "session">();
  const owner = new Map<string, string>();
  for (const w of [...catalog.workspaces].sort((a, b) =>
    a.id.localeCompare(b.id),
  )) {
    kinds.set("workspace:" + w.id, "workspace");
    for (const id of w.sessionIds) if (!owner.has(id)) owner.set(id, w.id);
  }
  for (const [child, parent] of workspaceParents(catalog.workspaces))
    parents.set("workspace:" + child, "workspace:" + parent);
  const branches = sessionParents(catalog.sessions);
  for (const s of catalog.sessions) {
    const id = "session:" + s.id;
    kinds.set(id, "session");
    const workspace = owner.get(s.id) ?? "__ungrouped__";
    if (workspace === "__ungrouped__")
      kinds.set("workspace:__ungrouped__", "workspace");
    parents.set(
      id,
      branches.has(s.id)
        ? "session:" + branches.get(s.id)
        : "workspace:" + workspace,
    );
  }
  const children = new Map<string, string[]>();
  for (const id of kinds.keys()) {
    const parent = parents.get(id);
    if (!parent || !kinds.has(parent)) continue;
    if (!children.has(parent)) children.set(parent, []);
    children.get(parent)!.push(id);
  }
  for (const rows of children.values()) rows.sort();
  const weights = new Map<string, number>();
  const weight = (id: string): number => {
    if (weights.has(id)) return weights.get(id)!;
    const value = Math.max(
      1,
      (children.get(id) ?? []).reduce((sum, child) => sum + weight(child), 0),
    );
    weights.set(id, value);
    return value;
  };
  const result: Record<string, Point> = {};
  let cursor = 280;
  const roots = [...kinds.keys()]
    .filter((id) => !parents.has(id) || !kinds.has(parents.get(id)!))
    .sort();
  for (const root of roots) {
    const local = new Map<string, Point>();
    const place = (
      id: string,
      x: number,
      y: number,
      direction: number,
      span: number,
    ) => {
      local.set(id, { x, y });
      const rows = children.get(id) ?? [],
        total = rows.reduce((sum, child) => sum + weight(child), 0);
      const distance = Math.max(225, (total * 165) / span);
      let angle = direction - span / 2;
      for (const child of rows) {
        const sector = (span * weight(child)) / total,
          mid = angle + sector / 2;
        place(
          child,
          x + Math.cos(mid) * distance,
          y + Math.sin(mid) * distance,
          mid,
          Math.min(Math.PI * 0.8, sector),
        );
        angle += sector;
      }
    };
    place(root, 0, 0, -Math.PI / 2, 2 * Math.PI);
    const minX = Math.min(...[...local.values()].map((p) => p.x)),
      maxX = Math.max(...[...local.values()].map((p) => p.x));
    for (const [id, p] of local) {
      const g = bubbleGeometry(kinds.get(id)!);
      result[id] = {
        x: p.x - minX + cursor - g.offset.x,
        y: p.y + 290 - g.offset.y,
      };
    }
    cursor += maxX - minX + 360;
  }
  for (const point of Object.values(result)) Object.freeze(point);
  Object.freeze(result);
  defaultsCache.set(catalog, result);
  return result;
}

/** Missing descendants inherit the closest saved ancestor's live displacement. */
export function runtimeTreePositions(
  catalog: GraphCatalog,
  saved: Record<string, Point>,
): Record<string, Point> {
  const defaults = defaultTreePositions(catalog);
  return { ...defaults, ...carryHiddenPositions(catalog, defaults, saved) };
}
