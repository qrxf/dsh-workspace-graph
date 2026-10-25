import { chromium } from "playwright";
import { createServer } from "vite";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
const server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
await server.listen();
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || undefined,
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
try {
  await page.goto(server.resolvedUrls.local[0]);
  const node = page.locator('[data-id="session:s1"]');
  await node.waitFor();
  await page.waitForTimeout(800);
  await node.locator(".wg-orb").click();
  await page.getByLabel("手动短概括").fill("Long 中文 👨‍👩‍👧‍👦 ".repeat(80));
  await page.getByRole("button", { name: "保存概括", exact: true }).click();
  await page.getByLabel("关闭详情").click();
  await page.locator(".wg-dock-heading").click();
  await page.mouse.move(900, 200);
  await page.waitForTimeout(500);
  const orb = await node.locator(".wg-orb").boundingBox(),
    canvas = await page.locator(".wg-canvas").boundingBox();
  await page.mouse.down();
  await page.mouse.move(
    900 + 70 - orb.x - orb.width / 2,
    200 + canvas.y + canvas.height - 90 - orb.y - orb.height / 2,
    { steps: 15 },
  );
  await page.mouse.up();
  const before = await page
    .locator(".react-flow__viewport")
    .getAttribute("style");
  await node.focus();
  await page.waitForTimeout(250);
  assert.equal(await page.locator(".wg-summary-overlay").count(), 0);
  assert.equal(
    await page.locator(".react-flow__viewport").getAttribute("style"),
    before,
    "focusing a bubble near the canvas edge must not move the camera",
  );
  await mkdir("artifacts/bubbles", { recursive: true });
  await page.screenshot({ path: "artifacts/bubbles/summary-edge.png" });
  console.log("PASS edge focus preserves viewport and has no orbit overlay");
} finally {
  await browser.close();
  await server.close();
}
