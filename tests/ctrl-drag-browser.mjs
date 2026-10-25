import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { graphBrowser } from "./graph-browser-helpers.mjs";
const g = await graphBrowser("?hierarchy=1");
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
try {
  await g.node("workspace:codex").locator(".wg-orb").click();
  await g.node("session:second-fork").waitFor();
  await g.stable();
  await g.fit();
  const id = "session:second-fork",
    before = await g.positions(),
    orb = await g.node(id).locator(".wg-orb").boundingBox();
  const start = { x: orb.x + orb.width / 2, y: orb.y + orb.height / 2 };
  await g.page.keyboard.down("Control");
  await g.page.mouse.move(start.x, start.y);
  await g.page.mouse.down();
  await g.page.mouse.move(start.x - 100, start.y - 20, { steps: 12 });
  await g.page.waitForTimeout(200);
  const free = await g.positions();
  assert.ok(distance(free[id], before[id]) > 50);
  for (const other of Object.keys(before).filter((x) => x !== id))
    assert.ok(
      distance(free[other], before[other]) < 1,
      `${other} must not follow without contact`,
    );
  const switchBefore = await g.positions();
  await g.page.keyboard.up("Control");
  const switchAfter = await g.positions();
  assert.ok(distance(switchBefore[id], switchAfter[id]) < 1);
  await g.page.keyboard.down("Control");
  const target = await g.node("session:fork").locator(".wg-orb").boundingBox();
  await g.page.mouse.move(
    target.x + target.width / 2,
    target.y + target.height / 2,
    { steps: 12 },
  );
  const collided = await g.positions();
  assert.ok(
    distance(collided["session:fork"], before["session:fork"]) > 5,
    "same-tree node must yield on actual contact",
  );
  await g.page.mouse.up();
  await g.page.keyboard.up("Control");
  await g.page.mouse.move(1000, 110);
  await g.stable();
  const final = await g.positions();
  assert.ok(
    distance(final[id], collided[id]) < 2,
    "free layout remains at drop location",
  );
  // A cancelled input must leave a usable drag state.
  const b = await g.node(id).locator(".wg-orb").boundingBox();
  await g.page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
  await g.page.mouse.down();
  await g.page.mouse.move(b.x + b.width / 2 - 20, b.y + b.height / 2, {
    steps: 3,
  });
  await g.page.evaluate(() => window.dispatchEvent(new Event("blur")));
  await g.page.mouse.up();
  await g.stable();
  assert.deepEqual(g.errors, []);
  await g.page.screenshot({
    path: "artifacts/layout-interaction/ctrl-drag.png",
  });
  await writeFile(
    "artifacts/layout-interaction/ctrl-results.json",
    JSON.stringify(
      { before, free, collided, final, errors: g.errors },
      null,
      2,
    ),
  );
  console.log(
    "PASS Ctrl independent drag, mid-drag mode switch, internal collision, drop persistence and blur cleanup",
  );
} finally {
  await g.close();
}
