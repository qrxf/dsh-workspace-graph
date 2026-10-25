import { test } from "node:test";
import assert from "node:assert/strict";
import { projectGraph as project, sessionStatus } from "../src/model.ts";
import { emptyLayout } from "../src/layout.ts";
import { defaultFilters as defaults } from "../src/types.ts";
import type { GraphCatalog, SessionRow } from "../src/types.ts";
const defaultFilters = { ...defaults, recency: "all" as const };
const projectGraph = (
  catalog: GraphCatalog,
  filters: Parameters<typeof project>[1],
  layout: Parameters<typeof project>[2],
  limits = {},
) =>
  project(
    catalog,
    filters,
    layout,
    limits,
    new Set(
      [...catalog.workspaces.map((w) => w.id), "__ungrouped__"].filter(
        (id) => !layout.collapsed.includes(id),
      ),
    ),
  );
const session = (id: string, extra: Partial<SessionRow> = {}): SessionRow => ({
  id,
  title: id,
  updatedAt: 1,
  running: false,
  ...extra,
});
const fixture = (): GraphCatalog => ({
  loading: false,
  workspaces: [
    {
      id: "w",
      title: "Same",
      path: "/work/a",
      sessionIds: ["a", "b", "unloaded"],
    },
    { id: "w2", title: "Same", path: "/work/b", sessionIds: ["c"] },
  ],
  sessions: [
    session("a", { title: "Design" }),
    session("b", { running: true }),
    session("c"),
    session("free"),
    session("blank", { blank: true }),
    session("sub", { origin: "subagent" }),
  ],
  archivedSessionIds: ["c"],
});
test("pending interaction takes precedence over running; absent facts remain unknown", () => {
  assert.equal(
    sessionStatus(session("a", { running: true, pending: true })),
    "waiting",
  );
  assert.equal(sessionStatus(session("a", { running: undefined })), "unknown");
  assert.equal(sessionStatus(session("a", { unread: true })), "unread");
});
test("uses stable membership ids, retains ungrouped sessions and excludes blank, subagent and archived rows", () => {
  const g = projectGraph(fixture(), defaultFilters, emptyLayout());
  assert.deepEqual(
    g.nodes
      .filter((n) => n.data.kind === "session")
      .map((n) => n.id)
      .sort(),
    ["session:a", "session:b", "session:free"],
  );
  assert.ok(
    g.edges.some((e) => e.source === "workspace:w" && e.target === "session:a"),
  );
  assert.ok(
    g.edges.some(
      (e) =>
        e.source === "workspace:__ungrouped__" && e.target === "session:free",
    ),
  );
  assert.equal(
    g.nodes.filter((n) => n.data.kind === "workspace" && !n.data.virtual)
      .length,
    2,
  );
});
test("search or status matches retain the owning parent as context", () => {
  const g = projectGraph(
    fixture(),
    { ...defaultFilters, query: "design" },
    emptyLayout(),
  );
  assert.deepEqual(
    g.nodes.map((n) => n.id),
    [
      "workspace:w",
      "session:a",
      "session:b",
      "workspace:w2",
      "workspace:__ungrouped__",
    ],
  );
  const running = projectGraph(
    fixture(),
    { ...defaultFilters, status: "running" },
    emptyLayout(),
  );
  assert.deepEqual(
    running.nodes.map((n) => n.id),
    ["workspace:w", "session:b", "workspace:w2", "workspace:__ungrouped__"],
  );
});
test("filters do not alter input, saved positions or other workspace identities", () => {
  const layout = emptyLayout();
  layout.positions["session:b"] = { x: 90, y: 60 };
  const catalog = fixture();
  const before = JSON.stringify({ layout, catalog });
  const g = projectGraph(
    catalog,
    { ...defaultFilters, workspace: "w" },
    layout,
  );
  assert.deepEqual(g.nodes.find((n) => n.id === "session:b")?.position, {
    x: 90,
    y: 60,
  });
  assert.equal(JSON.stringify({ layout, catalog }), before);
  assert.equal(
    g.nodes.some((n) => n.id === "workspace:w2"),
    true,
  );
});
test("caps each expanded workspace and allows an explicit increase without changing existing positions", () => {
  const cat: GraphCatalog = {
    loading: false,
    archivedSessionIds: [],
    workspaces: [
      {
        id: "w",
        title: "w",
        path: "/w",
        sessionIds: Array.from({ length: 35 }, (_, i) => String(i)),
      },
    ],
    sessions: Array.from({ length: 35 }, (_, i) => session(String(i))),
  };
  const a = projectGraph(cat, defaultFilters, emptyLayout());
  const b = projectGraph(cat, defaultFilters, emptyLayout(), { w: 40 });
  assert.equal(a.nodes.length, 21);
  assert.equal(a.hidden, 15);
  assert.equal(b.nodes.length, 36);
  assert.deepEqual(
    b.nodes.find((n) => n.id === "session:0")?.position,
    a.nodes.find((n) => n.id === "session:0")?.position,
  );
});
test("collapsed parent has no visible child edges; archived session is only shown when requested", () => {
  const l = emptyLayout();
  l.collapsed = ["w"];
  const g = projectGraph(fixture(), { ...defaultFilters, archived: true }, l);
  assert.ok(g.nodes.some((n) => n.id === "session:c"));
  assert.equal(
    g.nodes.some((n) => n.id === "session:a"),
    false,
  );
  assert.equal(
    g.edges.some((e) => e.target === "session:a"),
    false,
  );
});

test("showing archived siblings does not move a visible sibling without a saved position", () => {
  const c = fixture();
  c.archivedSessionIds = ["a"];
  const before = projectGraph(c, defaultFilters, emptyLayout());
  const after = projectGraph(
    c,
    { ...defaultFilters, archived: true },
    emptyLayout(),
  );
  assert.deepEqual(
    before.nodes.find((n) => n.id === "session:b")?.position,
    after.nodes.find((n) => n.id === "session:b")?.position,
  );
});
