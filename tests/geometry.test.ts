import { test } from "node:test";
import assert from "node:assert/strict";
import { bubbleGeometry, circleEndpoints } from "../src/geometry.ts";

test("circle endpoints stay on visible circles for all directions and coincident centres", () => {
  for (const [x, y] of [
    [300, 0],
    [0, -200],
    [150, 200],
    [0, 0],
    [1e-12, 0],
  ]) {
    const a = { x: 0, y: 0, radius: 53 },
      b = { x, y, radius: 37 };
    const p = circleEndpoints(a, b);
    assert.ok(Math.abs(Math.hypot(p.source.x, p.source.y) - a.radius) < 1e-6);
    assert.ok(
      Math.abs(Math.hypot(p.target.x - x, p.target.y - y) - b.radius) < 1e-6,
    );
    assert.ok(Object.values(p).every((q) => Number.isFinite(q.x + q.y)));
  }
  assert.deepEqual(bubbleGeometry("workspace"), {
    offset: { x: 72, y: 53 },
    radius: 53,
  });
  assert.equal(bubbleGeometry("session").radius, 37);
});
