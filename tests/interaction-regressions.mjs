import { chromium } from "playwright";
import { createServer } from "vite";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

const server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
await server.listen();
const browser = await chromium.launch({
  headless: true,
  channel: process.env.BROWSER_CHANNEL || undefined,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
try {
  await page.goto(server.resolvedUrls.local[0] + "?nodes=100");
  await page.locator('[data-id="workspace:density"]').waitFor();
  await page.waitForTimeout(700);
  const viewport = () =>
    page.locator(".react-flow__viewport").getAttribute("style");
  const before = await viewport();
  await page.locator('[data-id="workspace:density"] .wg-orb').click();
  await page.waitForTimeout(1200);
  assert.equal(await viewport(), before, "expansion must not move the camera");
  assert.equal(await page.getByLabel("时间").inputValue(), "recent");
  await page.locator('[data-id="session:density-0"]').focus();
  await page.waitForTimeout(500);
  assert.equal(
    await page.locator(".wg-summary-overlay, .wg-ring-orbit").count(),
    0,
  );
  assert.equal(await viewport(), before, "focus must not pan the camera");
  await page
    .getByRole("button", { name: "再显示 20 个会话", exact: true })
    .click();
  await page.waitForTimeout(500);
  assert.equal(await viewport(), before, "pagination must not move the camera");
  await page.getByLabel("关闭详情").click();
  await page.locator('[data-id="workspace:density"] .wg-orb').click();
  await page.waitForTimeout(500);
  assert.equal(await viewport(), before, "collapse must not move the camera");
  assert.equal(await page.locator(".react-flow__node").count(), 2);
  assert.deepEqual(errors, []);
  await mkdir("artifacts/bubble-fixes", { recursive: true });
  await writeFile(
    "artifacts/bubble-fixes/interaction-results.json",
    JSON.stringify(
      {
        checks: [
          "stable expansion/collapse/focus/pagination viewport",
          "recent default",
          "no orbit text",
        ],
        errors,
      },
      null,
      2,
    ),
  );
  console.log("PASS stable viewport, recent default, no orbit text");
} finally {
  await browser.close();
  await server.close();
}
