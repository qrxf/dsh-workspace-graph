import { chromium } from "playwright";
import { createServer } from "vite";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
const server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
await server.listen();
let browser;
try {
  browser = await chromium.launch({
    channel: process.env.BROWSER_CHANNEL || undefined,
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  await page.goto(server.resolvedUrls.local[0]);
  await page.waitForSelector(".is-current .wg-orb");
  for (const width of [1440, 850, 720, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    const hint = page.locator(".wg-canvas-hint");
    assert.equal(
      await page
        .locator(".wg-attention")
        .evaluate((el) => getComputedStyle(el).pointerEvents),
      "none",
      "toolbar whitespace must not block graph clicks",
    );
    if (await hint.isVisible()) {
      const h = await hint.boundingBox();
      for (const b of await page.locator(".wg-attention button").all()) {
        const r = await b.boundingBox();
        assert.ok(
          h.y + h.height <= r.y ||
            r.y + r.height <= h.y ||
            h.x + h.width <= r.x ||
            r.x + r.width <= h.x,
          `hint overlaps status at ${width}`,
        );
      }
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const state of [
    "current",
    "status-running",
    "status-waiting",
    "status-unread",
  ]) {
    const orb = page.locator(".wg-orb").first();
    const result = await orb.evaluate((el, state) => {
      el.parentElement.className = "wg-bubble is-session is-" + state;
      const css = getComputedStyle(el, "::before");
      return {
        shadow: css.boxShadow,
        opacity: css.opacity,
        isolation: getComputedStyle(el).isolation,
      };
    }, state);
    assert.equal(
      result.isolation,
      "isolate",
      "glow must stay above bubble stacking background",
    );
    assert.notEqual(result.shadow, "none");
    assert.ok(Number(result.opacity) >= 0.8);
  }
  await page.reload();
  await page.waitForSelector(".is-current .wg-orb");
  await mkdir("artifacts/v0.1.2", { recursive: true });
  await page.screenshot({ path: "artifacts/v0.1.2/visual.png" });
  console.log(
    "PASS hint/status separation at 4 widths; current/running/waiting/unread glow layers",
  );
} finally {
  await browser?.close();
  await server.close();
}
