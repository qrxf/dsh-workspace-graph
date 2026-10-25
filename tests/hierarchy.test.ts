import { test } from "node:test";
import assert from "node:assert/strict";
import { projectGraph } from "../src/model.ts";
import { toCatalog } from "../src/adapter.ts";
import { emptyLayout } from "../src/layout.ts";
import { carryHiddenPositions, workspaceParents } from "../src/hierarchy.ts";
import { defaultFilters } from "../src/types.ts";
import type { GraphCatalog } from "../src/types.ts";

const fixture = (): GraphCatalog => ({
  loading: false,
  archivedSessionIds: [],
  workspaces: [
    {
      id: "home",
      title: "zengfeng",
      path: "C:\\Users\\zengfeng",
      sessionIds: [],
    },
    {
      id: "codex",
      title: "Codex",
      path: "C:/Users/zengfeng/Codex/",
      sessionIds: ["fork", "original"],
    },
    {
      id: "project",
      title: "Project",
      path: "C:\\Users\\zengfeng\\Codex\\project",
      sessionIds: [],
    },
    { id: "other", title: "Other", path: "C:/Users/zengfeng2", sessionIds: [] },
  ],
  sessions: [
    { id: "fork", title: "分支", updatedAt: Date.now(), parentId: "original" },
    { id: "original", title: "来源", updatedAt: 1 },
  ],
});

test("adapter preserves native branch source", () => {
  const cat = toCatalog(
    { phase: "ready", items: [] },
    {
      phase: "ready",
      ids: ["fork"],
      byId: {
        fork: {
          id: "fork",
          displayTitle: "Fork",
          parentId: "original",
          updatedAt: 1,
        },
      },
    },
    new Map(),
  );
  assert.equal(cat.sessions[0].parentId, "original");
});

test("nested workspaces link to their nearest registered ancestor, not a path-prefix sibling", () => {
  const graph = projectGraph(fixture(), defaultFilters, emptyLayout());
  assert.ok(
    graph.edges.some(
      (e) => e.source === "workspace:home" && e.target === "workspace:codex",
    ),
  );
  assert.ok(
    graph.edges.some(
      (e) => e.source === "workspace:codex" && e.target === "workspace:project",
    ),
  );
  assert.equal(
    graph.edges.some((e) => e.target === "workspace:other"),
    false,
  );
  assert.equal(
    graph.edges.some(
      (e) => e.source === "workspace:home" && e.target === "workspace:project",
    ),
    false,
  );
  assert.equal(
    graph.nodes.find((n) => n.id === "workspace:codex")?.data.parentWorkspaceId,
    "home",
  );
  assert.equal(
    graph.nodes.filter((n) => n.data.kind === "workspace").length,
    4,
  );
});

test("recent branch keeps its older source visible, attaches above it, and keeps membership unchanged", () => {
  const catalog = fixture(),
    before = structuredClone(catalog);
  const graph = projectGraph(
    catalog,
    defaultFilters,
    emptyLayout(),
    {},
    new Set(["codex"]),
  );
  const branch = graph.nodes.find((n) => n.id === "session:fork")!;
  const original = graph.nodes.find((n) => n.id === "session:original");
  assert.ok(
    original,
    "source must remain visible even if excluded by the recent filter",
  );
  const edge = graph.edges.find((e) => e.target === branch.id)!;
  assert.equal(edge.source, original.id);
  assert.equal(edge.sourceHandle, "branch-source");
  assert.equal(edge.targetHandle, "branch-target");
  assert.ok(branch.position.y < original.position.y);
  assert.equal(branch.data.workspaceId, "codex");
  assert.deepEqual(catalog, before);
});

test("parent workspace scope includes sessions owned by its nested workspaces", () => {
  const graph = projectGraph(
    fixture(),
    { ...defaultFilters, workspace: "home" },
    emptyLayout(),
    {},
    new Set(["codex"]),
  );
  assert.ok(graph.nodes.some((n) => n.id === "session:fork"));
});

test("branch chains survive search, pagination and saved positions; missing parents and cycles stay finite", () => {
  const catalog = fixture();
  catalog.sessions.push({
    id: "leaf",
    title: "Leaf",
    parentId: "fork",
    updatedAt: Date.now(),
  });
  catalog.workspaces[1].sessionIds = ["leaf", "fork", "original"];
  const layout = emptyLayout();
  layout.positions["session:original"] = { x: 700, y: 800 };
  const graph = projectGraph(
    catalog,
    { ...defaultFilters, query: "Leaf" },
    layout,
    { codex: 1 },
    new Set(["codex"]),
  );
  assert.equal(graph.nodes.filter((n) => n.data.kind === "session").length, 3);
  assert.deepEqual(
    graph.nodes.find((n) => n.id === "session:original")!.position,
    { x: 700, y: 800 },
  );
  assert.equal(
    graph.edges.find((e) => e.target === "session:leaf")!.source,
    "session:fork",
  );
  catalog.sessions[1].parentId = "leaf";
  const cyclic = projectGraph(
    catalog,
    { ...defaultFilters, recency: "all" },
    emptyLayout(),
    {},
    new Set(["codex"]),
  );
  for (const n of cyclic.nodes)
    assert.ok(Number.isFinite(n.position.x) && Number.isFinite(n.position.y));
  catalog.sessions[0].parentId = "deleted";
  const missing = projectGraph(
    catalog,
    defaultFilters,
    emptyLayout(),
    {},
    new Set(["codex"]),
  );
  assert.equal(
    missing.edges.some((e) => e.source === "session:deleted"),
    false,
  );
});

test("hidden branches follow the source session, not an independently moving workspace", () => {
  const catalog = fixture();
  const previous = {
    "workspace:codex": { x: 0, y: 0 },
    "session:original": { x: 100, y: 200 },
    "session:fork": { x: 100, y: 10 },
  };
  const moved = {
    "workspace:codex": { x: 50, y: 50 },
    "session:original": { x: 120, y: 230 },
  };
  const result = carryHiddenPositions(catalog, previous, moved);
  assert.deepEqual(result["session:fork"], { x: 120, y: 40 });
  assert.deepEqual(previous["session:fork"], { x: 100, y: 10 });
});

test("workspace paths follow native boundary, case and POSIX backslash rules", () => {
  const paths = [
    "/",
    "/a",
    "/a/b",
    "/ab",
    "/A/b",
    "/a\\b",
    "\\\\server\\share",
    "\\\\server\\share\\child",
  ];
  const parents = workspaceParents(
    paths.map((path) => ({ id: path, path, title: path, sessionIds: [] })),
  );
  assert.equal(parents.get("/a/b"), "/a");
  assert.equal(parents.get("/ab"), "/");
  assert.equal(parents.get("/A/b"), "/");
  assert.equal(parents.get("/a\\b"), "/");
  assert.equal(parents.get("\\\\server\\share\\child"), "\\\\server\\share");
});

test("an ancestor revealed for a branch is not still counted as hidden by pagination", () => {
  const catalog = fixture();
  catalog.sessions[1].updatedAt = Date.now();
  const graph = projectGraph(
    catalog,
    defaultFilters,
    emptyLayout(),
    { codex: 1 },
    new Set(["codex"]),
  );
  assert.equal(graph.nodes.filter((n) => n.data.kind === "session").length, 2);
  assert.equal(graph.hidden, 0);
});
