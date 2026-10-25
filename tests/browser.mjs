import { chromium } from "playwright";
import { createServer } from "vite";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
let server;
let baseURL = process.env.DEMO_URL;
if (!baseURL) {
  server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
  await server.listen();
  baseURL = server.resolvedUrls.local[0];
}
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || undefined,
  headless: true,
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 960 },
  locale: "zh-CN",
});
const page = await context.newPage(),
  errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
const key = "dsh-workspace-graph:demo:v1";
try {
  await page.goto(baseURL);
  await page.locator(".react-flow__node").first().waitFor();
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 11,
  );
  await page.getByLabel("选择工作区").selectOption("product");
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 4,
  );
  const node = page.locator('[data-id="session:s1"]');
  await node.waitFor();
  await page.waitForFunction(
    () =>
      !!JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1") ?? "{}")
        .views?.all?.filters,
  );
  const beforeDrag = await page.evaluate(
    (k) => JSON.parse(localStorage.getItem(k)).positions["session:s1"],
    key,
  );
  const box = await node.locator(".wg-orb").boundingBox();
  assert.ok(box);
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    box.x + box.width / 2 + 85,
    box.y + box.height / 2 + 40,
    { steps: 12 },
  );
  await page.mouse.up();
  await page.waitForFunction(
    () =>
      !!JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1") ?? "{}")
        .positions?.["session:s1"],
  );
  await page.waitForFunction(
    ({ key, before }) => {
      const p = JSON.parse(localStorage.getItem(key) ?? "{}").positions?.[
        "session:s1"
      ];
      return p && (p.x !== before.x || p.y !== before.y);
    },
    { key, before: beforeDrag },
  );
  const position = await page.evaluate(
    (k) => JSON.parse(localStorage.getItem(k)).positions["session:s1"],
    key,
  );
  assert.ok(Number.isFinite(position.x));
  await page.reload();
  await page.locator('[data-id="session:s1"]').waitFor();
  assert.deepEqual(
    await page.evaluate(
      (k) => JSON.parse(localStorage.getItem(k)).positions["session:s1"],
      key,
    ),
    position,
  );
  await page.getByRole("button", { name: "运行中", exact: true }).click();
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 2,
  );
  assert.equal(await page.locator('[data-id="session:s2"]').count(), 1);
  await page.getByRole("button", { name: "清除筛选", exact: true }).click();
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 11,
  );
  await page.getByLabel("搜索工作区和会话").fill("文献");
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length === 2,
  );
  assert.equal(await page.locator('[data-id="workspace:research"]').count(), 1);
  // Selecting a bubble re-renders the graph, so select it first and only then
  // double-click: a double-click straight on an unselected node can lose its
  // second click to that re-render and never reach the open handler.
  await page.locator('[data-id="session:s4"]').click();
  await page.waitForTimeout(200);
  await page.locator('[data-id="session:s4"]').dblclick();
  await page.waitForFunction(
    () => document.documentElement.dataset.opened === "session:s4",
  );
  await page.getByRole("button", { name: "清除筛选", exact: true }).click();
  await page.getByLabel("选择工作区").selectOption("build");
  await page.getByText("归档", { exact: true }).click();
  await page.locator('[data-id="session:s8"]').click();
  await page.getByRole("button", { name: "恢复会话", exact: true }).click();
  await page.waitForFunction(
    () => !document.querySelector('[data-id="session:s8"] .is-archived'),
  );
  await page.getByRole("button", { name: "关闭详情", exact: true }).click();
  await page.getByRole("button", { name: "清除筛选", exact: true }).click();
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve)),
      ),
  );
  await page.locator('[data-id="workspace:product"]').click();
  await mkdir("docs/screenshots", { recursive: true });
  await page.screenshot({
    path: "docs/screenshots/workspace-atlas.png",
    fullPage: true,
  });
  // A fresh page reads malformed storage without silently overwriting it.
  const other = await context.newPage();
  await other.goto(baseURL);
  await other.evaluate((k) => localStorage.setItem(k, "{broken"), key);
  await other.reload();
  await other.getByRole("alert").waitFor();
  assert.match(await other.getByRole("alert").innerText(), /无法读取/);
  assert.equal(
    await other.evaluate((k) => localStorage.getItem(k), key),
    "{broken",
  );
  await other
    .getByRole("button", { name: "重置本地布局", exact: true })
    .click();
  await other.getByRole("button", { name: "确认重置", exact: true }).click();
  await other.waitForFunction(
    () =>
      JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1") ?? "{}")
        .schemaVersion === 1,
  );
  assert.equal(await other.getByRole("alert").count(), 0);
  // The native host keeps publishing fresh catalog snapshots (a streaming
  // session does it several times a second). A grabbed bubble must keep
  // following the pointer across those snapshots instead of snapping back to
  // its saved position, which is what made the graph look undraggable.
  const live = await context.newPage();
  live.on("pageerror", (e) => errors.push(String(e)));
  await live.goto(baseURL + "?churn=60");
  const held = live.locator('[data-id="workspace:product"]');
  await held.waitFor();
  await live.waitForTimeout(600);
  const storedBefore = await live.evaluate(
    (k) =>
      JSON.parse(localStorage.getItem(k) ?? "{}").positions?.[
        "workspace:product"
      ],
    key,
  );
  const orb = await held.locator(".wg-orb").boundingBox();
  assert.ok(orb);
  const start = { x: orb.x + orb.width / 2, y: orb.y + orb.height / 2 };
  const beforeBox = await held.boundingBox();
  await live.mouse.move(start.x, start.y);
  await live.mouse.down();
  await live.mouse.move(start.x + 70, start.y + 35, { steps: 10 });
  await live.waitForTimeout(400);
  const duringBox = await held.boundingBox();
  assert.ok(
    duringBox.x - beforeBox.x > 40 && duringBox.y - beforeBox.y > 20,
    "a grabbed bubble must follow the pointer while the catalog keeps updating",
  );
  await live.mouse.move(start.x + 120, start.y + 60, { steps: 8 });
  await live.mouse.up();
  await live.waitForTimeout(600);
  const storedAfter = await live.evaluate(
    (k) =>
      JSON.parse(localStorage.getItem(k) ?? "{}").positions?.[
        "workspace:product"
      ],
    key,
  );
  assert.ok(storedAfter);
  assert.ok(
    !storedBefore ||
      storedAfter.x !== storedBefore.x ||
      storedAfter.y !== storedBefore.y,
    "the dragged position must still be saved",
  );
  await live.close();
  assert.deepEqual(errors, []);
  console.log(
    "PASS browser: drag/save/reload, workspace/status/search filters, native callback identity, restore, storage errors; screenshot captured.",
  );
} finally {
  await browser.close();
  await server?.close();
}
