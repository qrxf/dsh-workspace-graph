import { test } from "node:test";
import assert from "node:assert/strict";
import { PhysicsWorld } from "../src/physics.ts";
import type { BubbleNode } from "../src/types.ts";
const node = (
  id: string,
  x: number,
  y = 0,
  kind: "workspace" | "session" = "session",
): BubbleNode => ({
  id,
  type: "bubble",
  position: { x, y },
  data: { kind, entityId: id, title: id, status: "idle" },
});
const make = () => {
  const w = new PhysicsWorld();
  w.sync(
    [node("a", 0), node("b", 220), node("c", 440), node("other", 2000)],
    [
      { source: "a", target: "b" },
      { source: "b", target: "c" },
    ],
  );
  return w;
};
const tick = (w: PhysicsWorld, seconds = 3, hz = 60) => {
  for (let i = 0; i < seconds * hz; i++) w.step(1 / hz);
};
test("free dragging removes rope influence but preserves internal and external collision", () => {
  const w = make();
  w.drag("a", { x: -300, y: 100 }, "free");
  tick(w, 1);
  assert.deepEqual(w.positions().b, { x: 220, y: 0 });
  w.drag("a", { x: 220, y: 0 }, "free");
  tick(w, 0.1);
  const a = w.bodies.get("a")!,
    b = w.bodies.get("b")!;
  assert.ok(
    Math.hypot(a.x - b.x, a.y - b.y) >= (a.radius + b.radius + 2) * 1.075 - 1,
  );
  w.drag("a", { x: 2000, y: 0 }, "free");
  tick(w, 0.1);
  assert.ok(w.positions().other.x > 2000);
  w.release("a");
  tick(w, 5);
  assert.ok(Math.abs(w.positions().a.x - 2000) < 1);
  assert.equal(w.active, false);
});
test("elastic ropes transmit through neighbours, harden while held still and partially recover after release", () => {
  const w = make();
  w.drag("a", { x: 0, y: 0 });
  w.drag("a", { x: -200, y: 120 });
  w.step(1 / 60);
  const near = Math.hypot(w.positions().b.x - 220, w.positions().b.y),
    far = Math.hypot(w.positions().c.x - 440, w.positions().c.y);
  assert.ok(near > far && far > 0);
  const soft = w.ropeState("a", "b").softness;
  tick(w, 0.7);
  const mid = w.ropeState("a", "b").softness;
  tick(w, 1);
  assert.ok(soft > mid && mid >= w.ropeState("a", "b").softness);
  w.drag("a", { x: -300, y: 150 });
  w.step(1 / 60);
  const stop = w.positions();
  w.release("a");
  tick(w, 8);
  const end = w.positions();
  assert.ok(Math.abs(end.a.x + 300) < 1);
  const stopVec = stop.b.x - stop.a.x,
    endVec = end.b.x - end.a.x;
  assert.ok(Math.abs(endVec - 220) < Math.abs(stopVec - 220));
  assert.ok(Math.abs(endVec - 220) > 0.5, "keep some deformation");
  assert.equal(w.active, false);
});
test("mode changes do not teleport and free layout becomes the new rope basis", () => {
  const w = make();
  w.drag("b", { x: 240, y: 150 }, "free");
  tick(w, 0.3);
  const before = w.positions();
  w.drag("b", before.b, "elastic");
  assert.deepEqual(w.positions(), before);
  w.release("b");
  tick(w, 5);
  assert.ok(w.positions().b.y > 100);
});
test("fast free dragging sweeps contacts and all frame rates settle without penetration", () => {
  for (const hz of [30, 60, 120]) {
    const w = make();
    w.drag("a", { x: 0, y: 0 }, "free");
    w.drag("a", { x: 700, y: 0 }, "free");
    assert.ok(
      w.positions().b.x > 220,
      "swept contact must push even if endpoint has passed",
    );
    w.release("a");
    tick(w, 8, hz);
    assert.equal(w.active, false);
    const bodies = [...w.bodies.values()];
    for (let i = 0; i < bodies.length; i++)
      for (let j = i + 1; j < bodies.length; j++) {
        const a = bodies[i],
          b = bodies[j];
        assert.ok(Number.isFinite(a.x + a.y));
        assert.ok(
          Math.hypot(a.x - b.x, a.y - b.y) >=
            (a.radius + b.radius + 2) * 1.25 - 1,
        );
      }
  }
});
test("dense stars relax infeasible rope lengths and eventually sleep", () => {
  const w = new PhysicsWorld();
  const nodes = Array.from({ length: 100 }, (_, i) =>
    node(String(i), (i % 10) * 45, Math.floor(i / 10) * 45),
  );
  w.sync(
    nodes,
    nodes.slice(1).map((n) => ({ source: "0", target: n.id })),
  );
  tick(w, 12);
  assert.equal(w.active, false);
});
test("free collisions cannot transmit rope tension through a separate connected component", () => {
  const w = new PhysicsWorld();
  w.sync(
    [node("a", 0), node("b", 400), node("c", 400, 500)],
    [{ source: "b", target: "c" }],
  );
  w.drag("a", { x: 0, y: 0 }, "free");
  w.drag("a", { x: 1500, y: 0 }, "free");
  tick(w, 1);
  assert.deepEqual(w.positions().c, { x: 400, y: 500 });
  w.release("a");
  tick(w, 5);
  assert.deepEqual(w.positions().c, { x: 400, y: 500 });
});
