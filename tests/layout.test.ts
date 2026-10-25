import { test } from "node:test";
import assert from "node:assert/strict";
import { LayoutRepository } from "../src/layout.ts";
const memory = () => {
  const map = new Map<string, string>();
  return {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => {
      map.set(k, v);
    },
  };
};
test("merges changed positions without erasing hidden nodes or another scope viewport", () => {
  const store = memory(),
    repo = new LayoutRepository(store, "x");
  repo.savePatch(
    {
      positions: { a: { x: 1, y: 2 }, hidden: { x: 9, y: 8 } },
      views: { w: { viewport: { x: 0, y: 0, zoom: 1 } } },
    },
    0,
  );
  const next = repo.savePatch({ positions: { a: { x: 3, y: 4 } } }, 1);
  assert.deepEqual(next.positions, {
    a: { x: 3, y: 4 },
    hidden: { x: 9, y: 8 },
  });
  assert.equal(next.views.w.viewport?.zoom, 1);
  assert.deepEqual(new LayoutRepository(store, "x").load().positions, {});
});
test("stale revision refuses write and leaves a newer layout intact", () => {
  const s = memory(),
    a = new LayoutRepository(s, "x"),
    b = new LayoutRepository(s, "x");
  a.load();
  b.load();
  a.savePatch(
    { positions: { a: { x: 1, y: 2 } }, settings: { theme: "#123456" } },
    0,
  );
  assert.throws(
    () => b.savePatch({ settings: { theme: "#ffffff" } }, 0),
    /conflict/i,
  );
  assert.deepEqual(a.load().positions, { a: { x: 1, y: 2 } });
});
test("malformed or future-version storage is reported without automatic overwrite", () => {
  const s = memory(),
    r = new LayoutRepository(s, "x");
  s.setItem("x", "{broken");
  assert.throws(() => r.load(), /layout/i);
  assert.equal(s.getItem("x"), "{broken");
  s.setItem("x", JSON.stringify({ schemaVersion: 99 }));
  assert.throws(() => r.load(), /layout/i);
});
test("invalid coordinates, zoom and prototype keys cannot enter the stored layout", () => {
  const s = memory(),
    r = new LayoutRepository(s, "x");
  assert.throws(
    () => r.savePatch({ positions: { a: { x: NaN, y: 2 } } }, 0),
    /layout/i,
  );
  s.setItem(
    "x",
    JSON.stringify({
      schemaVersion: 1,
      revision: 0,
      positions: JSON.parse('{"__proto__":{"x":1,"y":2}}'),
      collapsed: [],
      views: {},
    }),
  );
  assert.throws(() => r.load(), /layout/i);
});
test("storage access and quota failures propagate rather than claim saved", () => {
  const r = new LayoutRepository(
    {
      getItem: () => null,
      setItem: () => {
        throw new Error("quota");
      },
    },
    "x",
  );
  assert.throws(
    () => r.savePatch({ settings: { theme: "#ffffff" } }, 0),
    /quota/,
  );
});

test("explicit reset recovers corrupted storage, but refuses to erase a newer value", () => {
  const s = memory(),
    r = new LayoutRepository(s, "x");
  s.setItem("x", "{broken");
  const next = r.reset("{broken");
  assert.deepEqual(next.positions, {});
  assert.equal(r.load().schemaVersion, 1);
  s.setItem("x", "newer");
  assert.throws(() => r.reset("{broken"), /conflict/i);
  assert.equal(s.getItem("x"), "newer");
});

test("initial positions merge into the latest revision without overwriting another window", () => {
  const s = memory(),
    r = new LayoutRepository(s, "x");
  r.savePatch({ positions: { a: { x: 40, y: 50 } } }, 0);
  const next = r.initializePositions({ a: { x: 0, y: 0 }, b: { x: 1, y: 2 } });
  assert.deepEqual(next.positions, { a: { x: 40, y: 50 }, b: { x: 1, y: 2 } });
  assert.equal(
    r.initializePositions({ a: { x: 0, y: 0 } }).revision,
    next.revision,
  );
});
