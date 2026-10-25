import assert from "node:assert/strict";
import { defaultTreePositions } from "../src/treeLayout.ts";
import { graphBrowser } from "./graph-browser-helpers.mjs";
const catalog = {
  loading: false,
  archivedSessionIds: [],
  workspaces: [
    { id: "home", title: "Home", path: "C:/Users/zengfeng", sessionIds: [] },
    {
      id: "codex",
      title: "Codex",
      path: "C:/Users/zengfeng/Codex",
      sessionIds: ["fork", "second-fork", "original"],
    },
    {
      id: "nested",
      title: "Nested",
      path: "C:/Users/zengfeng/Codex/graph",
      sessionIds: [],
    },
    { id: "separate", title: "Separate", path: "D:/Other", sessionIds: [] },
  ],
  sessions: [
    { id: "fork", title: "Fork", updatedAt: 1, parentId: "original" },
    { id: "second-fork", title: "Second", updatedAt: 1, parentId: "fork" },
    { id: "original", title: "Original", updatedAt: 1 },
  ],
};
const defaults = defaultTreePositions(catalog),
  g = await graphBrowser("?hierarchy=1");
try {
  await g.stable();
  await g.fit();
  const before = await g.positions();
  assert.equal(await g.node("session:fork").count(), 0);
  const id = "workspace:codex",
    b = await g.node(id).locator(".wg-orb").boundingBox();
  await g.page.keyboard.down("Control");
  await g.page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
  await g.page.mouse.down();
  await g.page.mouse.move(b.x + b.width / 2 + 100, b.y + b.height / 2, {
    steps: 16,
  });
  await g.page.mouse.up();
  await g.page.keyboard.up("Control");
  await g.page.mouse.move(1000, 110);
  await g.stable();
  const moved = await g.positions(),
    delta = { x: moved[id].x - before[id].x, y: moved[id].y - before[id].y };
  assert.ok(Math.hypot(delta.x, delta.y) > 50);
  await g.node(id).locator(".wg-orb").click();
  await g.node("session:second-fork").waitFor();
  await g.stable();
  const expanded = await g.positions();
  for (const session of ["original", "fork", "second-fork"]) {
    const key = "session:" + session,
      expected = { x: defaults[key].x + delta.x, y: defaults[key].y + delta.y };
    assert.ok(
      Math.hypot(expanded[key].x - expected.x, expanded[key].y - expected.y) <
        1,
      `${key} must inherit the moved parent's offset`,
    );
  }
  assert.deepEqual(g.errors, []);
  await g.fit();
  await g.page.screenshot({
    path: "artifacts/layout-interaction/first-expansion-after-drag.png",
  });
  console.log(
    "PASS hidden descendants inherit moved parent before first expansion and open at translated outward targets",
  );
} finally {
  await g.close();
}
