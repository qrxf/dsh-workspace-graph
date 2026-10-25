import { test } from "node:test";
import assert from "node:assert/strict";
import { deriveTheme, contrast, normalizeColor } from "../src/theme.ts";
import { LayoutRepository } from "../src/layout.ts";
test("extreme themes keep separate luminance tiers and readable text", () => {
  for (const color of ["#000000", "#ffffff", "#808080", "#ffff00", "#0000ff"]) {
    const t = deriveTheme(color);
    assert.ok(contrast(t.text, t.workspace) >= 4.5);
    assert.ok(contrast(t.text, t.expanded) >= 4.5);
    assert.ok(contrast(t.sessionText, t.session) >= 4.5);
    assert.notEqual(t.workspace, t.expanded);
    assert.notEqual(t.workspace, t.session);
  }
  assert.equal(normalizeColor("#abc"), "#aabbcc");
  assert.equal(normalizeColor("garbage"), undefined);
});
test("settings round-trip in the existing repository and malformed colors fall back without deleting positions", () => {
  let raw: string | null = null;
  const repo = new LayoutRepository(
    {
      getItem: () => raw,
      setItem: (_k, v) => {
        raw = v;
      },
    },
    "test",
  );
  repo.savePatch(
    {
      positions: { a: { x: 2, y: 3 } },
      settings: { theme: "#123456", reducedMotion: true },
    },
    0,
  );
  assert.equal(repo.load().settings?.theme, "#123456");
  raw = raw!.replace("#123456", "broken");
  assert.equal(repo.load().settings?.theme, "#6aabff");
  assert.deepEqual(repo.load().positions.a, { x: 2, y: 3 });
});
