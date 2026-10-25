import assert from "node:assert/strict";
import { graphBrowser } from "./graph-browser-helpers.mjs";
const g = await graphBrowser();
try {
  await g.stable();
  await g.fit();
  const original = await g.positions();
  await g.page
    .getByRole("button", { name: "演示：并行当前会话", exact: true })
    .click();
  for (const id of ["s1", "s4"])
    assert.equal(
      await g
        .node("session:" + id)
        .locator(".is-current")
        .count(),
      1,
    );
  for (const id of ["s2", "s5", "s7"]) await g.node("session:" + id).waitFor();
  await g.stable();
  await g.fit();
  const id = "workspace:build",
    b = await g.node(id).locator(".wg-orb").boundingBox();
  await g.page.keyboard.down("Control");
  await g.page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
  await g.page.mouse.down();
  await g.page.mouse.move(b.x + b.width / 2 - 80, b.y + b.height / 2 - 50, {
    steps: 15,
  });
  await g.page.mouse.up();
  await g.page.keyboard.up("Control");
  await g.page.mouse.move(1000, 110);
  await g.stable();
  const moved = await g.positions();
  assert.notDeepEqual(moved[id], original[id]);
  await g.page
    .getByRole("button", { name: "演示：离开图谱", exact: true })
    .click();
  await g.page
    .getByRole("button", { name: "演示：重新进入图谱", exact: true })
    .click();
  await g.stable();
  const remount = await g.positions();
  assert.ok(
    Math.hypot(remount[id].x - moved[id].x, remount[id].y - moved[id].y) < 1,
  );
  await g.page.reload();
  await g.stable();
  const reset = await g.positions();
  assert.deepEqual(reset, original);
  const saved = await g.page.evaluate(() =>
    JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1")),
  );
  saved.positions = { [id]: { x: 9999, y: 9999 } };
  saved.views.all = {
    ...saved.views.all,
    viewport: { x: -9999, y: -9999, zoom: 3 },
  };
  saved.settings.manualSummaries = { s1: "persist me" };
  saved.settings.pinned = ["s1"];
  await g.page.evaluate(
    (v) =>
      localStorage.setItem("dsh-workspace-graph:demo:v1", JSON.stringify(v)),
    saved,
  );
  await g.page.reload();
  await g.stable();
  assert.deepEqual(await g.positions(), original);
  await g.node("session:s1").locator(".wg-orb").click();
  assert.equal(
    await g.page.getByLabel("手动短概括").inputValue(),
    "persist me",
  );
  await g.page.getByLabel("关闭详情").click();
  const other = await g.page.context().newPage();
  await other.goto(g.page.url());
  await other.locator(".react-flow__node").first().waitFor();
  const orb = await g.node(id).locator(".wg-orb").boundingBox();
  await g.page.keyboard.down("Control");
  await g.page.mouse.move(orb.x + orb.width / 2, orb.y + orb.height / 2);
  await g.page.mouse.down();
  await g.page.mouse.move(
    orb.x + orb.width / 2 - 40,
    orb.y + orb.height / 2 - 30,
    { steps: 8 },
  );
  await other.evaluate(() => {
    const key = "dsh-workspace-graph:demo:v1",
      v = JSON.parse(localStorage.getItem(key));
    v.revision++;
    v.settings.theme = "#123456";
    localStorage.setItem(key, JSON.stringify(v));
  });
  await g.page.mouse.move(
    orb.x + orb.width / 2 - 80,
    orb.y + orb.height / 2 - 40,
    { steps: 8 },
  );
  await g.page.mouse.up();
  await g.page.keyboard.up("Control");
  await g.page.mouse.move(1000, 110);
  await g.stable();
  assert.equal(await g.page.locator('.wg-root [role="alert"]').count(), 0);
  const afterOther = await g.positions();
  assert.notDeepEqual(afterOther[id], original[id]);
  assert.equal(await g.page.getByLabel("主题 HEX").inputValue(), "#123456");
  await other.close();
  assert.deepEqual(g.errors, []);
  await g.page.screenshot({
    path: "artifacts/layout-interaction/restarted.png",
  });
  console.log(
    "PASS parallel current/running visibility, runtime remount preservation, restart defaults, legacy migration and multi-window settings during drag",
  );
} finally {
  await g.close();
}
