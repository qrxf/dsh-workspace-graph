import { test } from "node:test";
import assert from "node:assert/strict";
import { LayoutRepository, emptyLayout } from "../src/layout.ts";
const memory = () => {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => {
      m.set(k, v);
    },
  };
};
test("new application ignores old positions/viewports and preserves all durable settings", () => {
  const store = memory(),
    old = emptyLayout();
  old.positions = { a: { x: 900, y: -500 } };
  old.views = {
    all: {
      viewport: { x: -800, y: 600, zoom: 2 },
      filters: {
        workspace: "all",
        status: "all",
        kind: "all",
        archived: false,
        query: "keep",
      },
    },
  };
  old.settings = {
    theme: "#123456",
    reducedMotion: true,
    pinned: ["s"],
    manualSummaries: { s: "keep me" },
    usage: { s: { since: 1, visits: [2] } },
  };
  store.setItem("x", JSON.stringify(old));
  const repo = new LayoutRepository(store, "x"),
    loaded = repo.load();
  assert.deepEqual(loaded.positions, {});
  assert.equal(loaded.views.all.viewport, undefined);
  assert.equal(loaded.settings?.manualSummaries?.s, "keep me");
  assert.equal(loaded.views.all.filters?.query, "keep");
  const moved = repo.savePatch(
    {
      positions: { a: { x: 10, y: 20 } },
      views: { all: { viewport: { x: 0, y: 0, zoom: 0.8 } } },
    },
    loaded.revision,
  );
  assert.deepEqual(repo.load(), moved);
  assert.deepEqual(new LayoutRepository(store, "x").load().positions, {});
});
test("runtime movements neither write storage nor overwrite another window, settings still synchronize", () => {
  const store = memory(),
    a = new LayoutRepository(store, "x"),
    b = new LayoutRepository(store, "x");
  a.load();
  b.load();
  a.savePatch({ positions: { a: { x: 10, y: 20 } } }, 0);
  assert.equal(store.getItem("x"), null);
  b.savePatch({ positions: { b: { x: 30, y: 40 } } }, 0);
  a.savePatch(
    { settings: { theme: "#abcdef", manualSummaries: { s: "hello" } } },
    a.load().revision,
  );
  const state = b.load();
  assert.deepEqual(state.positions, { b: { x: 30, y: 40 } });
  assert.equal(state.settings?.theme, "#abcdef");
  assert.deepEqual(JSON.parse(store.getItem("x")!).positions, {});
  assert.throws(
    () => b.savePatch({ settings: { theme: "#ffffff" } }, 1),
    /conflict/i,
  );
});
test("another window's settings update never rejects an in-flight runtime-only patch", () => {
  const store = memory(),
    a = new LayoutRepository(store, "x"),
    b = new LayoutRepository(store, "x");
  const before = a.load();
  b.load();
  b.savePatch({ settings: { theme: "#abcdef" } }, 0);
  const moved = a.savePatch(
    {
      positions: { a: { x: 500, y: 600 } },
      views: { all: { viewport: { x: 10, y: 20, zoom: 0.8 } } },
    },
    before.revision,
  );
  assert.deepEqual(moved.positions.a, { x: 500, y: 600 });
  assert.equal(moved.settings?.theme, "#abcdef");
  assert.equal(b.load().settings?.theme, "#abcdef");
});
