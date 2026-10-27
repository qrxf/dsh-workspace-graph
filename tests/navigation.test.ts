import { test } from "node:test";
import assert from "node:assert/strict";
import { projectGraph } from "../src/model.ts";
import { emptyLayout } from "../src/layout.ts";
import { clearedFilters, defaultFilters } from "../src/types.ts";
import type { GraphCatalog } from "../src/types.ts";
const catalog: GraphCatalog = {
  loading: false,
  archivedSessionIds: [],
  workspaces: [
    {
      id: "w",
      title: "Project",
      path: "/project",
      sessionIds: ["source", "target"],
    },
  ],
  sessions: [
    { id: "source", title: "Source", updatedAt: 1, running: false },
    {
      id: "target",
      title: "Target",
      cwd: "/special-path",
      parentId: "source",
      updatedAt: 1,
      running: false,
    },
  ],
};
test("search matches summaries and paths independently from collapse and pagination", () => {
  const doc = emptyLayout();
  doc.settings = {
    theme: "#123456",
    reducedMotion: false,
    manualSummaries: { target: "独特概括" },
  };
  for (const query of ["独特概括", "special-path"]) {
    const g = projectGraph(catalog, { ...clearedFilters, query }, doc, {
      w: 0,
    });
    assert.deepEqual(
      g.matches.map((n) => n.id),
      ["session:target"],
    );
    assert.equal(
      g.nodes.some((n) => n.id === "session:target"),
      false,
    );
  }
});
test("explicit result reveal preserves actual source chain and marks filter exceptions", () => {
  const g = projectGraph(
    catalog,
    { ...clearedFilters, query: "nothing" },
    emptyLayout(),
    {},
    new Set(),
    Date.now(),
    "target",
  );
  assert.ok(
    g.nodes.find((n) => n.id === "session:target")?.data.outsideFilters,
  );
  assert.ok(g.nodes.find((n) => n.id === "session:source")?.data.context);
  assert.ok(
    g.edges.some(
      (e) => e.source === "session:source" && e.target === "session:target",
    ),
  );
  assert.equal(g.matched, 0);
});
test("clearing filters shows older sessions while restoring defaults keeps the recent preference", () => {
  assert.equal(defaultFilters.recency, "recent");
  assert.equal(clearedFilters.recency, "all");
  assert.equal(projectGraph(catalog, clearedFilters, emptyLayout()).matched, 2);
});
