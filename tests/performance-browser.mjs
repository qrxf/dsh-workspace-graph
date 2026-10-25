import { chromium } from "playwright";
import { createServer } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import assert from "node:assert/strict";
const server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
await server.listen();
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || undefined,
  headless: true,
});
const results = [];
try {
  for (const count of [10, 50, 100]) {
    const context = await browser.newContext({
        viewport: { width: 1440, height: 1000 },
      }),
      page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(String(e)));
    page.setDefaultTimeout(30000);
    try {
      await page.goto(server.resolvedUrls.local[0] + "?nodes=" + count);
      await page.locator('[data-id="workspace:density"]').waitFor();
      await page.waitForTimeout(600);
      await page.evaluate(() => {
        window.__expansionFrames = [];
        let last, start;
        const sample = (now) => {
          start ??= now;
          if (last !== undefined) window.__expansionFrames.push(now - last);
          last = now;
          if (now - start < 700) requestAnimationFrame(sample);
        };
        requestAnimationFrame(sample);
      });
      await page.locator('[data-id="workspace:density"] .wg-orb').click();
      for (let limit = 20; limit < count - 1; limit += 20)
        await page
          .getByRole("button", { name: "再显示 20 个会话", exact: true })
          .click();
      await page.waitForFunction(
        (n) => document.querySelectorAll(".react-flow__node").length === n,
        count,
      );
      await page.getByLabel("关闭详情").click();
      await page.getByRole("button", { name: "适应画布", exact: true }).click();
      await page.waitForTimeout(100);
      const sample = page.evaluate(
        () =>
          new Promise((resolve) => {
            const start = performance.now(),
              intervals = [],
              before = [...document.querySelectorAll(".react-flow__node")]
                .map((n) => n.style.transform)
                .join("|");
            let last;
            const tick = (now) => {
              if (last !== undefined) intervals.push(now - last);
              last = now;
              if (now - start < 2000) requestAnimationFrame(tick);
              else
                resolve({
                  intervals,
                  moving:
                    before !==
                    [...document.querySelectorAll(".react-flow__node")]
                      .map((n) => n.style.transform)
                      .join("|"),
                });
            };
            requestAnimationFrame(tick);
          }),
      );
      const orb = await page
        .locator('[data-id="session:density-0"] .wg-orb')
        .boundingBox();
      await page.mouse.move(orb.x + orb.width / 2, orb.y + orb.height / 2);
      await page.mouse.down();
      await page.mouse.move(
        orb.x + orb.width / 2 - 140,
        orb.y + orb.height / 2 - 150,
        { steps: 24 },
      );
      await page.mouse.up();
      await page.mouse.move(700, 100);
      const metrics = await sample;
      await page.waitForFunction(
        () => {
          const s = [...document.querySelectorAll(".react-flow__node")]
            .map((n) => n.style.transform)
            .join("|");
          window.__stable =
            s === window.__snapshot ? (window.__stable ?? 0) + 1 : 0;
          window.__snapshot = s;
          return window.__stable >= 10;
        },
        undefined,
        { polling: 100 },
      );
      const revision = await page.evaluate(
        () =>
          JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1"))
            .revision,
      );
      await page.waitForTimeout(700);
      assert.equal(
        await page.evaluate(
          () =>
            JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1"))
              .revision,
        ),
        revision,
        "idle layout must stop writing",
      );
      const geometry = await page.locator(".wg-orb").evaluateAll((orbs) =>
        orbs.map((el) => {
          const b = el.getBoundingClientRect();
          return {
            x: b.x + b.width / 2,
            y: b.y + b.height / 2,
            r: b.width / 2,
          };
        }),
      );
      let overlap = 0;
      for (let i = 0; i < geometry.length; i++)
        for (let j = i + 1; j < geometry.length; j++)
          overlap = Math.max(
            overlap,
            geometry[i].r +
              geometry[j].r -
              Math.hypot(
                geometry[i].x - geometry[j].x,
                geometry[i].y - geometry[j].y,
              ),
          );
      const excessPenetration = Math.max(
        0,
        ...geometry.flatMap((a, i) =>
          geometry
            .slice(i + 1)
            .map((b) => (a.r + b.r) * 0.8 - Math.hypot(a.x - b.x, a.y - b.y)),
        ),
      );
      assert.ok(overlap < 1, "resting bubbles must be fully separated");
      assert.deepEqual(errors, []);
      metrics.intervals.sort((a, b) => a - b);
      const mean =
        metrics.intervals.reduce((a, b) => a + b, 0) / metrics.intervals.length;
      results.push({
        nodes: count,
        sampledFrames: metrics.intervals.length,
        meanFrameMs: mean,
        p95FrameMs:
          metrics.intervals[Math.floor(metrics.intervals.length * 0.95)],
        meanFps: 1000 / mean,
        movingDuringSample: metrics.moving,
        staticLayoutStable: true,
        maxInternalOrbOverlapPx: overlap,
        excessPenetrationPx: excessPenetration,
        expansionP95FrameMs: await page.evaluate(() => {
          const frames = window.__expansionFrames.sort((a, b) => a - b);
          return frames[Math.floor(frames.length * 0.95)];
        }),
        pageErrors: errors,
      });
      console.log(JSON.stringify(results.at(-1)));
    } finally {
      await context.close();
    }
  }
  await mkdir("artifacts", { recursive: true });
  await writeFile(
    "artifacts/browser-performance.json",
    JSON.stringify(
      {
        device: {
          cpu: os.cpus()[0]?.model,
          logicalCores: os.cpus().length,
          node: process.version,
          browser: browser.version(),
          viewport: { width: 1440, height: 1000 },
          mode: "headless; requestAnimationFrame intervals during real graph motion, includes browser rendering/input",
        },
        results,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
  await server.close();
}
