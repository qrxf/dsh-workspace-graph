import { PhysicsWorld } from "../src/physics.ts";
import os from "node:os";
import { performance } from "node:perf_hooks";
import { writeFileSync, mkdirSync } from "node:fs";
import assert from "node:assert/strict";
import type { BubbleNode } from "../src/types.ts";
const results = [];
for (const count of [10, 50, 100]) {
  const nodes: BubbleNode[] = Array.from({ length: count }, (_, i) => ({
    id: String(i),
    type: "bubble",
    position: { x: (i % 10) * 45, y: Math.floor(i / 10) * 45 },
    data: {
      kind: i === 0 ? "workspace" : "session",
      entityId: String(i),
      title: String(i),
      status: "idle",
    },
  }));
  const edges = nodes.slice(1).map((n) => ({ source: "0", target: n.id }));
  const world = new PhysicsWorld();
  world.sync(nodes, edges);
  let frames = 0;
  const times = [];
  const start = performance.now();
  while (world.active && frames++ < 3600) {
    const t = performance.now();
    world.step(1 / 60);
    times.push(performance.now() - t);
  }
  let overlap = 0;
  let excessPenetration = 0;
  const b = [...world.bodies.values()];
  for (let i = 0; i < b.length; i++)
    for (let j = i + 1; j < b.length; j++) {
      overlap = Math.max(
        overlap,
        b[i].radius +
          b[j].radius -
          Math.hypot(b[i].x - b[j].x, b[i].y - b[j].y),
      );
      excessPenetration = Math.max(
        excessPenetration,
        (b[i].radius + b[j].radius) * 0.8 -
          Math.hypot(b[i].x - b[j].x, b[i].y - b[j].y),
      );
    }
  times.sort((a, b) => a - b);
  results.push({
    nodes: count,
    frames,
    elapsedMs: performance.now() - start,
    meanStepMs: times.reduce((a, b) => a + b, 0) / times.length,
    p95StepMs: times[Math.floor(times.length * 0.95)],
    asleep: !world.active,
    maxOverlap: overlap,
    excessPenetration,
  });
  assert.equal(world.active, false, "physics must sleep");
  assert.ok(overlap < 1, "resting bubbles must be fully separated");
  assert.ok(
    excessPenetration < 0.5,
    "soft contacts must prevent deep internal overlap",
  );
}
const report = {
  device: {
    cpu: os.cpus()[0]?.model,
    logicalCores: os.cpus().length,
    platform: os.platform(),
    arch: os.arch(),
    node: process.version,
  },
  results,
};
mkdirSync("artifacts", { recursive: true });
writeFileSync(
  "artifacts/physics-performance.json",
  JSON.stringify(report, null, 2),
);
console.log(JSON.stringify(report, null, 2));
