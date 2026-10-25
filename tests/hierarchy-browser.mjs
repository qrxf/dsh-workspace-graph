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
page.on("console", (m) => {
  if (m.type() === "warning" || m.type() === "error") errors.push(m.text());
});
const node = (id) => page.locator(`.react-flow__node[data-id="${id}"]`);
const edge = (id) => page.locator(`.react-flow__edge[data-id="${id}"]`);
try {
  await page.route("**/favicon.ico", (route) => route.fulfill({ status: 204 }));
  await page.goto(server.resolvedUrls.local[0] + "?hierarchy=1");
  await edge("workspace:home->workspace:codex")
    .locator(".react-flow__edge-path")
    .waitFor({ state: "attached" });
  await edge("workspace:codex->workspace:nested")
    .locator(".react-flow__edge-path")
    .waitFor({ state: "attached" });
  await page.waitForTimeout(1000);
  const viewport = () =>
    page.locator(".react-flow__viewport").getAttribute("style");
  const before = await viewport();
  await node("workspace:codex").locator(".wg-orb").click();
  await node("session:original").waitFor();
  await page.waitForTimeout(1200);
  assert.equal(await viewport(), before);
  await edge("session:original->session:fork").waitFor({ state: "attached" });
  await edge("session:fork->session:second-fork").waitFor({
    state: "attached",
  });
  assert.equal(await edge("workspace:codex->session:fork").count(), 0);
  assert.equal(await edge("workspace:codex->session:second-fork").count(), 0);
  assert.match(await node("session:original").innerText(), /来源/);
  await page.getByLabel("关闭详情").click();
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await page.waitForTimeout(300);
  const source = await node("session:original").boundingBox(),
    branch = await node("session:fork").boundingBox();
  const endpoint = await edge("session:original->session:fork")
    .locator(".react-flow__edge-path")
    .evaluate((el) => {
      const p = el.getPointAtLength(0),
        screen = new DOMPoint(p.x, p.y).matrixTransform(el.getScreenCTM());
      const b = document
        .querySelector('[data-id="session:original"] .wg-orb')
        .getBoundingClientRect();
      return Math.abs(
        Math.hypot(
          screen.x - b.x - b.width / 2,
          screen.y - b.y - b.height / 2,
        ) -
          b.width / 2,
      );
    });
  assert.ok(endpoint < 2, "branch connects at source circle perimeter");
  await page.getByLabel("搜索工作区和会话").fill("后续方案");
  await node("session:fork").waitFor();
  await node("session:original").waitFor();
  await page.getByLabel("搜索工作区和会话").fill("");
  await page.getByLabel("选择工作区").selectOption("home");
  await node("session:second-fork").waitFor();
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await page.waitForTimeout(400);
  await mkdir("artifacts/hierarchy", { recursive: true });
  await page.screenshot({
    path: "artifacts/hierarchy/workspaces-and-branches.png",
    fullPage: true,
  });
  await node("session:fork").dblclick();
  await page.waitForFunction(
    () => document.documentElement.dataset.opened === "session:fork",
  );
  assert.deepEqual(errors, []);
  await writeFile(
    "artifacts/hierarchy/results.json",
    JSON.stringify(
      {
        checks: [
          "nested workspace edges",
          "branch chain edges and circle perimeter",
          "older source retained under recent/search filters",
          "parent scope includes descendants",
          "stable expansion viewport",
          "branch navigation",
        ],
        errors,
      },
      null,
      2,
    ),
  );
  console.log(
    "PASS nested workspace hierarchy, circular branch edges, filtering and navigation",
  );
} finally {
  await browser.close();
  await server.close();
}
