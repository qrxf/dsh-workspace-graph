import { chromium } from "playwright";
import { createServer } from "vite";
import assert from "node:assert/strict";
import { writeFile, mkdir } from "node:fs/promises";
const server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
await server.listen();
const browser = await chromium.launch({
    channel: process.env.BROWSER_CHANNEL || undefined,
    headless: true,
  }),
  page = await browser.newPage({ viewport: { width: 1440, height: 1000 } }),
  errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.addInitScript(() => {
  const raf = window.requestAnimationFrame.bind(window),
    cancel = window.cancelAnimationFrame.bind(window),
    frames = new Set(),
    timers = new Set(),
    intervals = new Set();
  window.requestAnimationFrame = (callback) => {
    let id;
    const tracked = callback.name === "tick";
    id = raf((time) => {
      frames.delete(id);
      callback(time);
    });
    if (tracked) frames.add(id);
    return id;
  };
  window.cancelAnimationFrame = (id) => {
    frames.delete(id);
    cancel(id);
  };
  const timeout = window.setTimeout.bind(window),
    clear = window.clearTimeout.bind(window),
    every = window.setInterval.bind(window),
    stop = window.clearInterval.bind(window);
  const fromGraph = () =>
    /\/src\/(GraphPage|SummaryRing|useGraphPhysics)\.tsx?/.test(
      new Error().stack ?? "",
    );
  window.setTimeout = (callback, delay, ...args) => {
    if (typeof callback !== "function")
      return timeout(callback, delay, ...args);
    const tracked = fromGraph();
    let id;
    id = timeout(() => {
      timers.delete(id);
      callback(...args);
    }, delay);
    if (tracked) timers.add(id);
    return id;
  };
  window.clearTimeout = (id) => {
    timers.delete(id);
    clear(id);
  };
  window.setInterval = (callback, delay, ...args) => {
    const id = every(callback, delay, ...args);
    if (fromGraph()) intervals.add(id);
    return id;
  };
  window.clearInterval = (id) => {
    intervals.delete(id);
    stop(id);
  };
  window.__graphResources = () => ({
    frames: frames.size,
    timers: timers.size,
    intervals: intervals.size,
  });
});
try {
  await page.goto(server.resolvedUrls.local[0]);
  await page.locator('[data-id="workspace:product"]').waitFor();
  await page.waitForTimeout(700);
  await page.locator('[data-id="workspace:product"]').focus();
  await page.keyboard.press("Enter");
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 6,
  );
  await page.keyboard.press("Space");
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 4,
  );
  await page.getByLabel("关闭详情").click();
  await page.locator('[data-id="workspace:product"] .wg-orb').click();
  await page.waitForTimeout(100);
  const before = await page.evaluate(() => window.__graphResources());
  assert.ok(
    before.frames > 0 && before.intervals > 0,
    "must observe active physics and a real component timer",
  );
  await page
    .getByRole("button", { name: "演示：离开图谱", exact: true })
    .click();
  await page.locator(".wg-root").waitFor({ state: "detached" });
  const after = await page.evaluate(() => window.__graphResources());
  assert.deepEqual(after, { frames: 0, timers: 0, intervals: 0 });
  await page.waitForTimeout(400);
  assert.deepEqual(await page.evaluate(() => window.__graphResources()), after);
  await page
    .getByRole("button", { name: "演示：重新进入图谱", exact: true })
    .click();
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 4,
  );
  assert.deepEqual(errors, []);
  await mkdir("artifacts", { recursive: true });
  await writeFile(
    "artifacts/lifecycle-results.json",
    JSON.stringify(
      {
        keyboardWorkspaceToggle: true,
        beforeUnmount: before,
        afterUnmount: after,
        remountCollapsed: true,
        pageErrors: errors,
      },
      null,
      2,
    ),
  );
  console.log(
    "PASS keyboard workspace toggle, active physics unmount cleanup, collapsed remount",
    before,
    after,
  );
} finally {
  await browser.close();
  await server.close();
}
