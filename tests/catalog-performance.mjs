import assert from "node:assert/strict";
import { performance } from "node:perf_hooks";
import { mkdir, writeFile } from "node:fs/promises";
import { projectGraph } from "../src/model.ts";
import { emptyLayout } from "../src/layout.ts";
import { clearedFilters } from "../src/types.ts";
const samples = [];
for (const size of [1000, 5000]) {
  const sessions = Array.from({ length: size }, (_, i) => ({
    id: String(i),
    title: "历史会话 " + i,
    updatedAt: 1,
    running: false,
  }));
  const catalog = {
    loading: false,
    archivedSessionIds: [],
    sessions,
    workspaces: [
      {
        id: "w",
        title: "History",
        path: "/history",
        sessionIds: sessions.map((s) => s.id),
      },
    ],
  };
  const layout = emptyLayout(),
    times = [];
  const cold = performance.now();
  const collapsed = projectGraph(catalog, clearedFilters, layout);
  const coldMs = performance.now() - cold;
  assert.equal(collapsed.nodes.length, 1);
  assert.equal(collapsed.matches.length, size);
  for (let i = 0; i < 20; i++) {
    const start = performance.now();
    const g = projectGraph(
      catalog,
      { ...clearedFilters, query: i % 2 ? "历史" : "会话" },
      layout,
      {},
      new Set(["w"]),
    );
    times.push(performance.now() - start);
    assert.equal(g.nodes.length, 21);
    assert.equal(g.matches.length, size);
  }
  times.sort((a, b) => a - b);
  const p95Ms = times[Math.ceil(times.length * 0.95) - 1];
  assert.ok(
    p95Ms < 1000,
    "catalog projection exceeds a broad 1s regression budget",
  );
  samples.push({
    catalogSessions: size,
    collapsedVisible: 1,
    expandedVisible: 21,
    coldMs,
    warmP95Ms: p95Ms,
  });
}
await mkdir("artifacts", { recursive: true });
await writeFile(
  "artifacts/catalog-performance.json",
  JSON.stringify({ runtime: process.version, samples }, null, 2),
);
console.log(JSON.stringify(samples));
