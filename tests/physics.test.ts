import { test } from "node:test";
import assert from "node:assert/strict";
import { PhysicsWorld } from "../src/physics.ts";
import type { BubbleNode } from "../src/types.ts";
const node = (
  id: string,
  x: number,
  y: number,
  kind: "workspace" | "session" = "session",
): BubbleNode => ({
  id,
  type: "bubble",
  position: { x, y },
  data: { kind, entityId: id, title: id, status: "idle" },
});
const settle = (w: PhysicsWorld) => {
  let frames = 0;
  while (w.active && frames++ < 2400) w.step(1 / 60);
  return frames;
};
test("drag transmits tension through its connected component without moving unrelated groups", () => {
  const w = new PhysicsWorld();
  w.sync(
    [
      node("a", 0, 0, "workspace"),
      node("b", 300, 0),
      node("c", 600, 0),
      node("free", 2000, 0),
    ],
    [
      { source: "a", target: "b" },
      { source: "b", target: "c" },
    ],
  );
  w.pin("a", { x: -900, y: 0 });
  for (let i = 0; i < 120; i++) w.step(1 / 60);
  assert.deepEqual(w.positions().a, { x: -900, y: 0 });
  assert.ok(w.positions().b.x < 200);
  assert.ok(w.positions().c.x < 500);
  assert.equal(w.positions().free.x, 2000);
  w.unpin("a");
  assert.ok(settle(w) < 2400);
  assert.equal(w.active, false);
});
test("different-size collisions separate, the grabbed node stays put, hidden nodes are removed", () => {
  const w = new PhysicsWorld();
  w.sync([node("a", 0, 0, "workspace"), node("b", 0, 0)], []);
  w.pin("a", { x: 0, y: 0 });
  settle(w);
  assert.deepEqual(w.positions().a, { x: 0, y: 0 });
  const a = w.bodies.get("a")!,
    b = w.bodies.get("b")!;
  assert.ok(Math.hypot(a.x - b.x, a.y - b.y) >= a.radius + b.radius - 0.2);
  w.sync([node("a", 0, 0, "workspace")], []);
  assert.equal(w.bodies.has("b"), false);
});
test("reduced motion still resolves overlap and finite canvas constraints prevent runaway coordinates", () => {
  const w = new PhysicsWorld();
  w.reduced = true;
  w.sync([node("a", -999999, 0), node("b", -999999, 0)], []);
  settle(w);
  for (const p of Object.values(w.positions()))
    assert.ok(Number.isFinite(p.x) && Math.abs(p.x) <= 100000);
  assert.equal(w.active, false);
});
test("time-stepped internal and external contacts give comparable results at 30 and 120 Hz", () => {
  const run = (hz: number, grouped: boolean) => {
    const w = new PhysicsWorld();
    w.sync(
      [node("a", 0, 0), node("b", 20, 0)],
      grouped ? [{ source: "a", target: "b" }] : [],
    );
    for (let i = 0; i < hz * 3; i++) w.step(1 / hz);
    return w.positions();
  };
  for (const grouped of [false, true])
    assert.ok(Math.abs(run(30, grouped).b.x - run(120, grouped).b.x) < 2);
});
test("contact gives a bounded bounce while reduced motion omits the impulse", () => {
  const run = (reduced: boolean) => {
    const w = new PhysicsWorld();
    w.reduced = reduced;
    w.sync([node("a", 0, 0), node("b", 20, 0)], []);
    w.step(1 / 60);
    return w;
  };
  assert.ok(Math.abs(run(false).bodies.get("b")!.vx) > 0);
  assert.equal(run(true).bodies.get("b")!.vx, 0);
  const changed = run(false);
  changed.reduced = true;
  changed.step(1 / 60);
  assert.equal(changed.bodies.get("b")!.vx, 0);
});
test("metadata-only sync preserves active simulated positions; actual external edits still apply", () => {
  const initial = [node("a", 0, 0), node("b", 300, 0)];
  const links = [{ source: "a", target: "b" }];
  const w = new PhysicsWorld();
  w.sync(initial, links);
  w.pin("a", { x: -900, y: 0 });
  for (let i = 0; i < 100; i++) w.step(1 / 60);
  const before = w.positions().b;
  w.sync(
    initial.map((n) => ({ ...n, data: { ...n.data, status: "running" } })),
    links,
  );
  assert.deepEqual(w.positions().b, before);
  w.sync([initial[0], node("b", 1234, 567)], links);
  assert.deepEqual(w.positions().b, { x: 1234, y: 567 });
});

test("dragging pulls every connected member with elastic lag before it catches up", () => {
  const w = new PhysicsWorld();
  w.sync(
    [
      node("a", 0, 0, "workspace"),
      node("b", 185, 0),
      node("c", 370, 0),
      node("free", 2000, 0),
    ],
    [
      { source: "a", target: "b" },
      { source: "b", target: "c" },
    ],
  );
  w.drag("a", { x: 0, y: 0 });
  w.drag("a", { x: 200, y: 0 });
  w.step(1 / 60);
  assert.ok(w.positions().b.x > 185, "the leading member must follow too");
  assert.ok(w.positions().b.x < 385, "it should still lag behind the rope");
  assert.ok(w.positions().c.x > 370, "the far member must follow too");
  let frames = 0;
  while (w.active && frames++ < 2400) w.step(1 / 60);
  const p = w.positions();
  assert.ok(w.active === false);
  assert.ok(Math.abs(p.a.x - 200) < 0.5);
  assert.ok(Math.abs(p.b.x - 385) < 0.5);
  assert.ok(Math.abs(p.c.x - 570) < 0.5);
  assert.equal(p.free.x, 2000);
});

test("child bubbles follow more softly than their upstream parent", () => {
  const w = new PhysicsWorld();
  w.sync(
    [
      node("parent", 0, 0, "workspace"),
      node("grab", 200, 0),
      node("child", 400, 0),
    ],
    [
      { source: "parent", target: "grab" },
      { source: "grab", target: "child" },
    ],
  );
  const before = w.positions();
  w.drag("grab", { x: 300, y: 0 });
  w.step(1 / 60);
  const moved = (id: string) => w.positions()[id].x - before[id].x;
  assert.ok(moved("parent") > moved("child"));
  assert.ok(moved("grab") > moved("parent"));
});

test("releasing a drag grows the contact volume until bubbles fully separate", () => {
  const w = new PhysicsWorld();
  w.sync([node("a", 0, 0), node("b", 0, 0)], [{ source: "a", target: "b" }]);
  w.beginDrag("a");
  assert.ok(w.contactScale < 1 && w.contactScale > 0.8);
  w.release("a");
  w.step(1 / 60);
  assert.ok(w.contactScale > 0.8 && w.contactScale < 1);
  const early = Math.hypot(
    w.bodies.get("a")!.x - w.bodies.get("b")!.x,
    w.bodies.get("a")!.y - w.bodies.get("b")!.y,
  );
  let frames = 0;
  while (w.active && frames++ < 1200) w.step(1 / 60);
  assert.equal(w.contactScale, 1);
  const late = Math.hypot(
    w.bodies.get("a")!.x - w.bodies.get("b")!.x,
    w.bodies.get("a")!.y - w.bodies.get("b")!.y,
  );
  assert.ok(
    early < 20,
    "the soft volume still allows overlap right after release",
  );
  assert.ok(late >= 37 + 37 + 2 - 0.1, "the bubbles end up fully separated");
});

test("same-group shallow overlaps settle to complete separation", () => {
  const w = new PhysicsWorld();
  w.sync([node("a", 0, 0), node("b", 65, 0)], [{ source: "a", target: "b" }]);
  assert.ok(settle(w) < 180);
  const p = w.positions();
  const distance = Math.hypot(
    w.bodies.get("a")!.x - w.bodies.get("b")!.x,
    w.bodies.get("a")!.y - w.bodies.get("b")!.y,
  );
  assert.ok(distance >= 37 + 37 + 2 - 0.1);
  assert.ok(p.b.x > 65, "a shallow overlap must still be pushed apart");
});

test("same-group deep overlaps ease apart to complete separation and go to sleep", () => {
  const w = new PhysicsWorld();
  w.sync([node("a", 0, 0), node("b", 0, 0)], [{ source: "a", target: "b" }]);
  w.pin("a", { x: 0, y: 0 });
  w.step(1 / 60);
  const a = w.bodies.get("a")!,
    b = w.bodies.get("b")!;
  const distance = () => Math.hypot(a.x - b.x, a.y - b.y);
  assert.ok(distance() > 0, "deep overlap must push back");
  assert.ok(
    distance() < (a.radius + b.radius) / 2,
    "separation should be gradual",
  );
  assert.ok(settle(w) < 240);
  assert.ok(distance() >= 37 + 37 + 2 - 0.1);
  assert.deepEqual(w.positions().a, { x: 0, y: 0 });
});

test("external collision moves a component together and preserves its internal layout", () => {
  const w = new PhysicsWorld();
  w.sync(
    [node("a", 0, 0, "workspace"), node("b", 100, 10), node("outside", 20, 0)],
    [{ source: "a", target: "b" }],
  );
  settle(w);
  const p = w.positions();
  assert.ok(Math.abs(p.b.x - p.a.x - 100) < 0.01);
  assert.ok(Math.abs(p.b.y - p.a.y - 10) < 0.01);
  const outside = w.bodies.get("outside")!;
  for (const id of ["a", "b"]) {
    const b = w.bodies.get(id)!;
    assert.ok(
      Math.hypot(b.x - outside.x, b.y - outside.y) >=
        b.radius + outside.radius - 0.2,
    );
  }
});

test("new children open at the live workspace centre and reach their saved offsets", () => {
  const w = new PhysicsWorld();
  const root = node("a", 100, 100, "workspace");
  w.sync([root], []);
  settle(w);
  w.sync([root, node("b", 250, 100)], [{ source: "a", target: "b" }]);
  const a = w.bodies.get("a")!,
    b = w.bodies.get("b")!;
  assert.ok(Math.hypot(a.x - b.x, a.y - b.y) < 0.01);
  w.step(1 / 60);
  assert.ok(Math.hypot(a.x - b.x, a.y - b.y) > 0);
  assert.ok(settle(w) < 90);
  assert.deepEqual(w.positions().a, root.position);
  assert.ok(Math.abs(w.positions().b.x - 250) < 0.1);
});

test("opening still collides with outsiders, and reduced motion skips the opening tween", () => {
  for (const reduced of [false, true]) {
    const w = new PhysicsWorld();
    w.reduced = reduced;
    const root = node("root", 0, 0, "workspace"),
      outside = node("outside", 170, 0);
    w.sync([root, outside], []);
    settle(w);
    w.sync(
      [root, outside, node("child", 170, 0)],
      [{ source: "root", target: "child" }],
    );
    assert.equal(!!w.bodies.get("child")!.opening, !reduced);
    assert.ok(settle(w) < 120);
    const external = w.bodies.get("outside")!;
    for (const id of ["root", "child"]) {
      const member = w.bodies.get(id)!;
      assert.ok(
        Math.hypot(member.x - external.x, member.y - external.y) >=
          member.radius + external.radius,
      );
    }
  }
});

test("a new branch opens from its new source even when the branch is listed first", () => {
  const w = new PhysicsWorld();
  const root = node("workspace", 0, 0, "workspace");
  w.sync([root], []);
  settle(w);
  w.sync(
    [root, node("branch", 0, -300), node("source", 0, -150)],
    [
      { source: "source", target: "branch" },
      { source: "workspace", target: "source" },
    ],
  );
  const parent = w.bodies.get("workspace")!,
    source = w.bodies.get("source")!,
    branch = w.bodies.get("branch")!;
  assert.equal(branch.x, source.x);
  assert.equal(branch.y, source.y);
  assert.equal(source.y, parent.y);
  w.step(1 / 60);
  assert.ok(branch.y < source.y);
  assert.ok(settle(w) < 120);
  assert.ok(Math.abs(w.positions().branch.y + 300) < 0.1);
});
