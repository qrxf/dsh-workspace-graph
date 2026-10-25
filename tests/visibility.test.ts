import { test } from "node:test";
import assert from "node:assert/strict";
import { projectGraph } from "../src/model.ts";
import { emptyLayout } from "../src/layout.ts";
import { defaultFilters as defaults } from "../src/types.ts";
import type { GraphCatalog } from "../src/types.ts";
const defaultFilters = { ...defaults, recency: "all" as const };
test("parallel current, running and pending sessions bypass collapse, pagination and every filter", () => {
  const c: GraphCatalog = {
    loading: false,
    archivedSessionIds: ["a"],
    currentSessionIds: ["a", "b"],
    workspaces: ["a", "b", "c"].map((id) => ({
      id,
      title: id,
      path: "/" + id,
      sessionIds: [id],
    })),
    sessions: ["a", "b", "c", "d"].map((id) => ({
      id,
      title: id,
      updatedAt: 1,
      running: id === "c",
      pending: id === "d",
      blank: id === "a",
      parentId: id === "d" ? "c" : undefined,
    })),
  };
  const g = projectGraph(
    c,
    {
      ...defaultFilters,
      workspace: "missing",
      query: "nothing",
      kind: "workspace",
      status: "idle",
      recency: "recent",
    },
    emptyLayout(),
    { a: 0 },
  );
  assert.deepEqual(
    g.nodes
      .filter((n) => n.data.kind === "session")
      .map((n) => n.data.entityId)
      .sort(),
    ["a", "b", "c", "d"],
  );
  assert.deepEqual(
    g.nodes
      .filter((n) => n.data.current && n.data.kind === "session")
      .map((n) => n.data.entityId)
      .sort(),
    ["a", "b"],
  );
  assert.deepEqual(
    g.nodes
      .filter((n) => n.data.current && n.data.kind === "workspace")
      .map((n) => n.data.entityId)
      .sort(),
    ["a", "b"],
  );
  assert.equal(g.matched, 0);
  assert.ok(
    g.edges.every(
      (e) =>
        g.nodes.some((n) => n.id === e.source) &&
        g.nodes.some((n) => n.id === e.target),
    ),
  );
  const ended = projectGraph(
    {
      ...c,
      currentSessionIds: [],
      sessions: c.sessions.map((s) => ({
        ...s,
        pending: false,
        running: undefined,
      })),
    },
    defaultFilters,
    emptyLayout(),
  );
  assert.equal(
    ended.nodes.some((n) => n.data.kind === "session"),
    false,
  );
});
const catalog: GraphCatalog = {
  loading: false,
  archivedSessionIds: [],
  workspaces: [
    { id: "w", title: "W", path: "/w", sessionIds: ["a", "b", "a"] },
    { id: "z", title: "Z", path: "/z", sessionIds: ["c", "a"] },
  ],
  sessions: ["a", "b", "c"].map((id) => ({
    id,
    title: id,
    updatedAt: 1,
    running: false,
  })),
};
const ids = (c = catalog, expanded = new Set<string>()) =>
  projectGraph(c, defaultFilters, emptyLayout(), {}, expanded).nodes.map(
    (n) => n.id,
  );

test("default view shows recent conversations while retaining the current older conversation", () => {
  const now = Date.now();
  const c = {
    ...catalog,
    currentSessionId: "c",
    sessions: catalog.sessions.map((s) => ({
      ...s,
      updatedAt: s.id === "a" ? now - 1000 : now - 10 * 86400000,
    })),
  };
  assert.equal(defaults.recency, "recent");
  const view = projectGraph(
    c,
    defaults,
    emptyLayout(),
    {},
    new Set(["w", "z"]),
    now,
  );
  assert.deepEqual(
    view.nodes.filter((n) => n.data.kind === "session").map((n) => n.id),
    ["session:a", "session:c"],
  );
});
test("entry is collapsed and only an existing current session is resident", () => {
  assert.deepEqual(ids(), ["workspace:w", "workspace:z"]);
  assert.deepEqual(ids({ ...catalog, currentSessionId: "deleted" }), [
    "workspace:w",
    "workspace:z",
  ]);
  assert.deepEqual(ids({ ...catalog, currentSessionId: "a" }), [
    "workspace:w",
    "session:a",
    "workspace:z",
  ]);
});
test("current changes across workspaces and collapse never duplicates or retains an old resident", () => {
  assert.deepEqual(ids({ ...catalog, currentSessionId: "c" }, new Set(["w"])), [
    "workspace:w",
    "session:a",
    "session:b",
    "workspace:z",
    "session:c",
  ]);
  assert.deepEqual(ids({ ...catalog, currentSessionId: "c" }), [
    "workspace:w",
    "workspace:z",
    "session:c",
  ]);
  assert.equal(
    ids({ ...catalog, currentSessionId: "a" }, new Set(["w", "z"])).filter(
      (id) => id === "session:a",
    ).length,
    1,
  );
});
test("current blank or archived session is retained despite filters, while deleted sessions leave no edges", () => {
  const c = {
    ...catalog,
    currentSessionId: "a",
    archivedSessionIds: ["a"],
    sessions: catalog.sessions.map((s) =>
      s.id === "a" ? { ...s, blank: true } : s,
    ),
  };
  const g = projectGraph(
    c,
    { ...defaultFilters, status: "running", query: "nothing", workspace: "z" },
    emptyLayout(),
  );
  assert.ok(g.nodes.find((n) => n.id === "session:a")?.data.current);
  assert.equal(g.nodes.filter((n) => n.data.kind === "workspace").length, 2);
  const deleted = projectGraph(
    { ...c, sessions: [] },
    defaultFilters,
    emptyLayout(),
    {},
    new Set(["w", "z"]),
  );
  assert.equal(deleted.edges.length, 0);
});
test("status selections form a union; clearing means all and current bypasses the union", () => {
  const c = {
    ...catalog,
    currentSessionId: "c",
    sessions: catalog.sessions.map((s) => ({
      ...s,
      running: s.id === "a",
      unread: s.id === "b",
    })),
  };
  const union = projectGraph(
    c,
    { ...defaultFilters, statuses: ["running", "unread"] },
    emptyLayout(),
    {},
    new Set(["w", "z"]),
  );
  assert.deepEqual(
    union.nodes.filter((n) => n.data.kind === "session").map((n) => n.id),
    ["session:a", "session:b", "session:c"],
  );
  const running = projectGraph(
    c,
    { ...defaultFilters, statuses: ["running"] },
    emptyLayout(),
    {},
    new Set(["w", "z"]),
  );
  assert.deepEqual(
    running.edges.map((e) => e.target),
    ["session:a", "session:c"],
  );
  assert.equal(
    running.nodes.some((n) => n.id === "session:b"),
    false,
  );
  assert.equal(
    projectGraph(
      c,
      { ...defaultFilters, statuses: [] },
      emptyLayout(),
      {},
      new Set(["w", "z"]),
    ).matched,
    3,
  );
  assert.equal(
    projectGraph(
      c,
      { ...defaultFilters, statuses: ["unknown"] },
      emptyLayout(),
      {},
      new Set(["w", "z"]),
    ).matched,
    0,
  );
});
test("parallel running aggregate clears only after every running member ends or becomes unknown", () => {
  const c = {
    ...catalog,
    sessions: catalog.sessions.map((s) => ({ ...s, running: true })),
  };
  const state = (sessions: GraphCatalog["sessions"]) =>
    projectGraph({ ...c, sessions }, defaultFilters, emptyLayout()).nodes.find(
      (n) => n.id === "workspace:w",
    )!.data;
  assert.equal(state(c.sessions).working, true);
  assert.equal(
    state(c.sessions.map((s) => (s.id === "a" ? { ...s, running: false } : s)))
      .working,
    true,
  );
  assert.equal(
    state(c.sessions.map((s) => ({ ...s, running: false }))).working,
    false,
  );
  assert.equal(
    state(c.sessions.map((s) => ({ ...s, running: undefined }))).status,
    "unknown",
  );
});
