import assert from "node:assert/strict";
import { graphBrowser } from "./graph-browser-helpers.mjs";
const g = await graphBrowser("?nodes=10");
try {
  await g.stable();
  await g.fit();
  await g.node("workspace:density").locator(".wg-orb").click();
  await g.stable();
  await g.fit();
  const before = await g.positions(),
    id = "workspace:density";
  const children = Object.keys(before).filter((id) =>
    id.startsWith("session:"),
  );
  const radius =
    children.reduce(
      (sum, k) =>
        sum +
        Math.hypot(before[k].x - before[id].x, before[k].y - before[id].y - 16),
      0,
    ) / children.length;
  const orb = await g.node(id).locator(".wg-orb").boundingBox();
  await g.page.mouse.move(orb.x + orb.width / 2, orb.y + orb.height / 2);
  await g.page.mouse.down();
  // Cross React Flow's 5px activation threshold before the fast input sample.
  await g.page.mouse.move(orb.x + orb.width / 2 - 8, orb.y + orb.height / 2);
  await g.page.mouse.move(
    orb.x + orb.width / 2 - 600,
    orb.y + orb.height / 2 + 60,
    { steps: 1 },
  );
  await g.page.mouse.up(); // Release immediately after the single fast pointer move.
  const released = await g.positions();
  await g.page.mouse.move(600, 80);
  await g.stable();
  const final = await g.positions();
  const cx = children.reduce((s, k) => s + final[k].x, 0) / children.length;
  const cy =
    children.reduce((s, k) => s + final[k].y - 16, 0) / children.length;
  console.log(
    JSON.stringify({
      before: before[id],
      released: released[id],
      final: final[id],
      start: orb,
      radius,
      maximumFollowing: Math.max(
        ...children.map((k) =>
          Math.hypot(final[k].x - released[k].x, final[k].y - released[k].y),
        ),
      ),
    }),
  );
  assert.ok(
    Math.hypot(final[id].x - cx, final[id].y - cy) < radius * 0.35,
    "physical fast drag does not strand hub at edge of ring",
  );
  assert.ok(
    children.some(
      (k) =>
        Math.hypot(final[k].x - released[k].x, final[k].y - released[k].y) > 5,
    ),
    "neighbours move after immediate release",
  );
  assert.ok(
    Math.hypot(final[id].x - before[id].x, final[id].y - before[id].y) > 300,
    "actual large drag occurred",
  );
  assert.deepEqual(g.errors, []);
  await g.fit();
  await g.page.screenshot({
    path: "artifacts/dense-ring-release.png",
    fullPage: true,
  });
  console.log(
    "PASS real single-move pointer drag + immediate release with surrounding ring",
  );
} finally {
  await g.close();
}
