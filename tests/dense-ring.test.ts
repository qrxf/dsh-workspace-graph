import { test } from "node:test";
import assert from "node:assert/strict";
import { PhysicsWorld } from "../src/physics.ts";
import type { BubbleNode } from "../src/types.ts";
const node = (
  id: string,
  x: number,
  y: number,
  kind: "session" | "workspace" = "session",
): BubbleNode => ({
  id,
  type: "bubble",
  position: { x, y },
  data: { kind, entityId: id, title: id, status: "idle" },
});
test("a dense surrounding ring follows an abrupt hub release without freezing a one-sided stretched layout", () => {
  for (const hz of [30, 60, 120])
    for (const count of [12, 24]) {
      const radius = (count * 100) / (2 * Math.PI),
        w = new PhysicsWorld();
      const nodes = [
        node("hub", 0, 0, "workspace"),
        ...Array.from({ length: count }, (_, i) =>
          node(
            String(i),
            radius * Math.cos((i * 2 * Math.PI) / count),
            16 + radius * Math.sin((i * 2 * Math.PI) / count),
          ),
        ),
      ];
      w.sync(
        nodes,
        nodes.slice(1).map((n) => ({ source: "hub", target: n.id })),
      );
      for (let i = 0; i < hz * 3; i++) w.step(1 / hz);
      w.drag("hub", w.positions().hub);
      w.drag("hub", { x: 2000, y: 200 });
      w.step(1 / hz);
      w.release("hub");
      const release = w.positions();
      for (let i = 0; i < hz * 12; i++) w.step(1 / hz);
      const hub = w.bodies.get("hub")!,
        kids = [...w.bodies.values()].filter((b) => b.id !== "hub");
      const centroid = {
        x: kids.reduce((sum, b) => sum + b.x, 0) / count,
        y: kids.reduce((sum, b) => sum + b.y, 0) / count,
      };
      assert.ok(
        Math.hypot(hub.x - centroid.x, hub.y - centroid.y) < radius * 0.35,
        `${hz}Hz/${count}: hub must remain near the center of its surrounding ring`,
      );
      assert.ok(
        Math.hypot(
          w.positions()["0"].x - release["0"].x,
          w.positions()["0"].y - release["0"].y,
        ) > 30,
        "neighbours continue moving after release",
      );
      assert.ok(
        Math.hypot(w.positions().hub.x - 2000, w.positions().hub.y - 200) < 1,
        "preserve drop point",
      );
      assert.equal(w.active, false, "eventually release RAF");
      for (const a of w.bodies.values())
        for (const b of w.bodies.values())
          if (a.id < b.id) {
            assert.ok(Number.isFinite(a.x + a.y));
            assert.ok(
              Math.hypot(a.x - b.x, a.y - b.y) >=
                (a.radius + b.radius + 2) * 1.25 - 1,
              "retain collision separation",
            );
          }
    }
});
