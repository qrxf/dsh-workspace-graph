import { test } from "node:test";
import assert from "node:assert/strict";
import { ringGlyphs, graphemes } from "../src/ring.ts";
test("ring preserves grapheme clusters including joined emoji and combining accents", () => {
  assert.deepEqual(graphemes("中👨‍👩‍👧‍👦e\u0301"), ["中", "👨‍👩‍👧‍👦", "é"]);
  const g = ringGlyphs("甲乙丙丁", 80);
  assert.equal(g[0].text, "甲");
  assert.ok(Math.abs(g[0].x) < 0.001);
  assert.equal(g[0].y, -80);
  assert.equal(g[1].x, 80);
  assert.ok(Math.abs(g[2].x) < 0.001);
  assert.equal(g[2].y, 80);
});
test("long content truncates with ellipsis within physical capacity, short text does not shrink", () => {
  const g = ringGlyphs("很长的概括".repeat(100), 60);
  assert.ok(g.length <= 26);
  assert.equal(g.at(-1)?.text, "…");
  assert.equal(ringGlyphs("🙂", 60).length, 1);
  assert.equal(ringGlyphs("", 60).length, 0);
});
