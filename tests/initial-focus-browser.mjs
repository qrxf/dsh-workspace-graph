import assert from "node:assert/strict";
import { graphBrowser } from "./graph-browser-helpers.mjs";
for (const query of ["", "?loading=1"]) {
  const g = await graphBrowser(query);
  try {
    const p = g.page;
    await p.waitForFunction(() => !document.querySelector(".wg-empty"));
    await g.stable();
    const canvas = await p.locator(".wg-canvas").boundingBox();
    const orb = await g.node("session:s1").locator(".wg-orb").boundingBox();
    assert.ok(
      Math.abs(orb.x + orb.width / 2 - canvas.x - canvas.width / 2) < 2,
      "current session centered horizontally on first entry",
    );
    assert.ok(
      Math.abs(orb.y + orb.height / 2 - canvas.y - canvas.height / 2) < 2,
      "current session centered vertically on first entry",
    );
    await p.screenshot({
      path: "artifacts/initial-current-center.png",
      fullPage: true,
    });
    const viewport = () =>
      p.locator(".react-flow__viewport").getAttribute("style");
    await g.fit();
    const moved = await viewport();
    await p
      .getByRole("button", { name: "演示：离开图谱", exact: true })
      .click();
    await p
      .getByRole("button", { name: "演示：重新进入图谱", exact: true })
      .click();
    await g.stable();
    assert.equal(
      await viewport(),
      moved,
      "panel remount preserves runtime viewport",
    );
    await p
      .getByRole("button", { name: "演示：并行当前会话", exact: true })
      .click();
    await g.stable();
    assert.equal(
      await viewport(),
      moved,
      "later current/status updates do not move the camera",
    );
    assert.deepEqual(g.errors, []);
    console.log(
      "PASS initial current-session center, runtime remount and stable later updates",
    );
  } finally {
    await g.close();
  }
}
