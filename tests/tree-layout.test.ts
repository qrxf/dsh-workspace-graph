import { test } from "node:test";
import assert from "node:assert/strict";
import { defaultTreePositions } from "../src/treeLayout.ts";
import { bubbleGeometry } from "../src/geometry.ts";
import type { GraphCatalog } from "../src/types.ts";
import { projectGraph } from "../src/model.ts";
import { emptyLayout } from "../src/layout.ts";
import { defaultFilters } from "../src/types.ts";
const fixture = (): GraphCatalog => ({
  loading: false,
  archivedSessionIds: [],
  workspaces: [
    { id: "root", path: "/r", title: "R", sessionIds: [] },
    { id: "child", path: "/r/c", title: "C", sessionIds: ["a", "b", "c"] },
    { id: "other", path: "/o", title: "O", sessionIds: [] },
  ],
  sessions: [
    { id: "a", title: "A", updatedAt: 1 },
    { id: "b", title: "B", updatedAt: 1, parentId: "a" },
    { id: "c", title: "C", updatedAt: 1, parentId: "b" },
    { id: "missing", title: "M", updatedAt: 1, parentId: "deleted" },
  ],
});
test("radial tree is stable under reordered input and descendants grow outward", () => {
  const c = fixture(),
    p = defaultTreePositions(c);
  assert.deepEqual(
    defaultTreePositions({
      ...c,
      workspaces: [...c.workspaces]
        .reverse()
        .map((w) => ({ ...w, sessionIds: [...w.sessionIds].reverse() })),
      sessions: [...c.sessions].reverse(),
    }),
    p,
  );
  const center = (id: string) => {
    const g = bubbleGeometry(
      id.startsWith("workspace:") ? "workspace" : "session",
    );
    return { x: p[id].x + g.offset.x, y: p[id].y + g.offset.y };
  };
  for (const [parent, child, grand] of [
    ["workspace:root", "workspace:child", "session:a"],
    ["workspace:child", "session:a", "session:b"],
    ["session:a", "session:b", "session:c"],
  ]) {
    const a = center(parent),
      b = center(child),
      d = center(grand);
    assert.ok((d.x - b.x) * (b.x - a.x) + (d.y - b.y) * (b.y - a.y) > 0);
  }
  assert.ok(p["workspace:__ungrouped__"]);
});
test("wide trees, empty workspaces and cyclic/missing parents have finite non-overlapping defaults", () => {
  const c = fixture();
  c.sessions.push(
    ...Array.from({ length: 100 }, (_, i) => ({
      id: "wide" + i,
      title: "W",
      updatedAt: 1,
    })),
  );
  c.workspaces[1].sessionIds = [
    ...c.workspaces[1].sessionIds,
    ...c.sessions.filter((s) => s.id.startsWith("wide")).map((s) => s.id),
  ];
  c.sessions[0].parentId = "c";
  const p = defaultTreePositions(c);
  assert.ok(Object.values(p).every((v) => Number.isFinite(v.x + v.y)));
  const ids = Object.keys(p);
  for (let i = 0; i < ids.length; i++)
    for (let j = i + 1; j < ids.length; j++) {
      const a = p[ids[i]],
        b = p[ids[j]];
      assert.ok(
        Math.hypot(a.x - b.x, a.y - b.y) > 90,
        `${ids[i]} overlaps ${ids[j]}`,
      );
    }
});
test("first expansion and newly added children inherit their moved workspace's current offset", () => {
  const c = fixture(),
    defaults = defaultTreePositions(c),
    layout = emptyLayout();
  layout.positions["workspace:root"] = { ...defaults["workspace:root"] };
  layout.positions["workspace:child"] = {
    x: defaults["workspace:child"].x,
    y: defaults["workspace:child"].y - 1000,
  };
  layout.positions["workspace:__ungrouped__"] = {
    x: defaults["workspace:__ungrouped__"].x + 300,
    y: defaults["workspace:__ungrouped__"].y,
  };
  const graph = projectGraph(
    c,
    { ...defaultFilters, recency: "all" },
    layout,
    {},
    new Set(["child"]),
  );
  for (const id of ["a", "b", "c"]) {
    const p = graph.nodes.find((n) => n.id === "session:" + id)!.position;
    assert.ok(Math.abs(p.y - (defaults["session:" + id].y - 1000)) < 0.01);
  }
  assert.equal(
    graph.nodes.find((n) => n.id === "workspace:__ungrouped__")?.position.x,
    defaults["workspace:__ungrouped__"].x + 300,
  );
  const ungrouped = projectGraph(
    c,
    { ...defaultFilters, recency: "all" },
    layout,
    {},
    new Set(["__ungrouped__"]),
  );
  assert.equal(
    ungrouped.nodes.find((n) => n.id === "session:missing")?.position.x,
    defaults["session:missing"].x + 300,
  );
});
