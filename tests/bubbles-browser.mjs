import { chromium } from "playwright";
import { createServer } from "vite";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
let server, browser, context, page;
const errors = [],
  checks = [],
  key = "dsh-workspace-graph:demo:v1";
let baseURL = process.env.DEMO_URL;
const capture = process.env.WG_CAPTURE_DIR ?? "artifacts/bubbles";
await mkdir(capture, { recursive: true });
const mark = (name) => {
  checks.push(name);
  console.log("PASS " + name);
};
try {
  if (!baseURL) {
    server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
    await server.listen();
    baseURL = server.resolvedUrls.local[0];
  }
  browser = await chromium.launch({
    channel: process.env.BROWSER_CHANNEL || undefined,
    headless: true,
  });
  context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    locale: "zh-CN",
    recordVideo: process.env.WG_SKIP_VIDEO
      ? undefined
      : {
          dir: capture + "/video",
          size: { width: 1440, height: 1000 },
        },
  });
  page = await context.newPage();
  page.on("pageerror", (e) => errors.push(String(e)));
  page.setDefaultTimeout(15000);
  const node = (id) => page.locator(`[data-id="${id}"]`);
  const count = async (n) => {
    await page.waitForFunction(
      (n) => document.querySelectorAll(".react-flow__node").length === n,
      n,
    );
  };
  const stable = async () => {
    await page.waitForFunction(
      () => {
        const current = [...document.querySelectorAll(".react-flow__node")]
          .map((n) => n.style.transform)
          .join("|");
        if (window.__lastGraph === current)
          window.__stableGraph = (window.__stableGraph ?? 0) + 1;
        else window.__stableGraph = 0;
        window.__lastGraph = current;
        return window.__stableGraph >= 8;
      },
      undefined,
      { polling: 100 },
    );
  };
  const expand = async (id) => {
    await stable();
    await node("workspace:" + id)
      .locator(".wg-orb")
      .click();
    await stable();
  };
  const close = async () => {
    if (await page.getByLabel("关闭详情").count())
      await page.getByLabel("关闭详情").click();
  };
  const leave = async () => {
    await page.mouse.move(600, 100);
    await page.waitForTimeout(220);
  };
  await page.goto(baseURL);
  await count(7);
  await stable();
  assert.equal(await node("session:s1").locator(".is-current").count(), 1);
  await page.getByLabel("演示当前会话").selectOption("s4");
  await count(7);
  assert.equal(await node("session:s1").count(), 0);
  await page.getByLabel("演示当前会话").selectOption("");
  await count(6);
  await page.getByLabel("演示当前会话").selectOption("s1");
  await count(7);
  mark("collapsed entry, absent current and cross-group current switch");
  await expand("product");
  await count(8);
  await close();
  await page.getByRole("button", { name: "运行中", exact: true }).click();
  await count(7);
  await page.getByRole("button", { name: "新结果", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "运行中", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "空闲", exact: true }).click();
  await count(8);
  await page.getByRole("button", { name: "全部", exact: true }).first().click();
  await count(8);
  await page.getByLabel("搜索工作区和会话").fill("不存在的标题");
  await count(7);
  assert.match(await page.locator(".wg-no-match").innerText(), /没有匹配/);
  await page.getByRole("button", { name: "清除筛选", exact: true }).click();
  await count(8);
  mark("multi-status union, reset, unmatched current and workspace anchors");
  await stable();
  const before = await page.locator(".react-flow__node").evaluateAll((ns) =>
    Object.fromEntries(
      ns.map((n) => {
        const m = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(
          n.style.transform,
        );
        return [n.dataset.id, { x: Number(m?.[1]), y: Number(m?.[2]) }];
      }),
    ),
  );
  const orb = await node("session:s2").locator(".wg-orb").boundingBox();
  assert.ok(orb);
  await page.mouse.move(orb.x + orb.width / 2, orb.y + orb.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    orb.x + orb.width / 2 - 210,
    orb.y + orb.height / 2 - 330,
    { steps: 28 },
  );
  await page.waitForTimeout(500);
  await page.mouse.up();
  await leave();
  await stable();
  const after = await page.locator(".react-flow__node").evaluateAll((ns) =>
    Object.fromEntries(
      ns.map((n) => {
        const m = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(
          n.style.transform,
        );
        return [n.dataset.id, { x: Number(m?.[1]), y: Number(m?.[2]) }];
      }),
    ),
  );
  assert.notDeepEqual(after["session:s2"], before["session:s2"]);
  assert.notDeepEqual(after["workspace:product"], before["workspace:product"]);
  assert.deepEqual(after["workspace:research"], before["workspace:research"]);
  assert.equal(await node("session:s3").count(), 1);
  mark("elastic drag, unrelated groups stationary and no toggle after drag");
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await stable();
  await page.locator(".wg-theme summary").click();
  await page.getByLabel("主题 HEX").fill("#ffffff");
  await page.getByRole("button", { name: "应用颜色", exact: true }).click();
  await page.waitForFunction(
    (k) => JSON.parse(localStorage.getItem(k)).settings.theme === "#ffffff",
    key,
  );
  const bg = await node("workspace:product")
    .locator(".wg-orb")
    .evaluate((el) => getComputedStyle(el).backgroundColor);
  await page.getByLabel("主题 HEX").fill("invalid");
  await page.getByRole("button", { name: "应用颜色", exact: true }).click();
  assert.equal(
    await page.getByLabel("主题 HEX").getAttribute("aria-invalid"),
    "true",
  );
  assert.equal(
    await node("workspace:product")
      .locator(".wg-orb")
      .evaluate((el) => getComputedStyle(el).backgroundColor),
    bg,
  );
  await page.getByRole("button", { name: "恢复默认色", exact: true }).click();
  await page.getByRole("checkbox", { name: /减少动态效果/ }).check();
  await page.waitForFunction(() =>
    document.querySelector(".wg-root").classList.contains("wg-reduced"),
  );
  mark("theme validation, persistence and reduced-motion setting");
  await stable();
  await node("session:s3").locator(".wg-orb").click();
  await leave();
  await page.getByRole("button", { name: "置顶会话", exact: true }).click();
  await page
    .getByLabel("手动短概括")
    .fill("中文 English 👨‍👩‍👧‍👦 é 安全显示 <img src=x>");
  await page.getByRole("button", { name: "保存概括", exact: true }).click();
  await close();
  await stable();
  await node("session:s3").locator(".wg-orb").hover();
  await page.waitForTimeout(300);
  assert.equal(
    await page.locator(".wg-summary-overlay, .wg-ring-orbit").count(),
    0,
  );
  await node("session:s3").locator(".wg-orb").click();
  assert.match(
    await page.getByLabel("手动短概括").inputValue(),
    /中文 English/,
  );
  assert.equal(await page.locator(".wg-details img").count(), 0);
  await close();
  await page.getByRole("checkbox", { name: /减少动态效果/ }).uncheck();
  await page.screenshot({
    path: capture + "/workspace-bubbles.png",
    fullPage: true,
  });
  mark("manual summary retained in details; hover has no orbit text");
  await leave();
  await page.getByLabel("时间分类").selectOption("early");
  await count(7);
  await page.getByLabel("时间分类").selectOption("all");
  await page.getByLabel("频率分类").selectOption("accumulating");
  await count(8);
  await page.getByRole("button", { name: "清除筛选", exact: true }).click();
  await stable();
  await node("session:s3").dblclick();
  await page.waitForFunction(
    () => document.documentElement.dataset.opened === "session:s3",
  );
  await page.waitForFunction(
    (k) =>
      JSON.parse(localStorage.getItem(k)).settings.usage?.s3?.visits.length ===
      1,
    key,
  );
  await page.getByRole("button", { name: "打开会话 ↗", exact: true }).click();
  await stable();
  assert.equal(
    await page.evaluate(
      (k) =>
        JSON.parse(localStorage.getItem(k)).settings.usage.s3.visits.length,
      key,
    ),
    1,
  );
  await close();
  await page
    .getByRole("button", { name: "演示：全部任务结束", exact: true })
    .click();
  await page.waitForFunction(
    () => document.querySelectorAll(".is-working").length === 0,
  );
  mark(
    "classification, explicit visit count, deduplication and running-state completion",
  );
  await stable();
  const stored = await page.evaluate(
    (k) => JSON.parse(localStorage.getItem(k)).settings,
    key,
  );
  await page.reload();
  await count(7);
  assert.deepEqual(
    await page.evaluate(
      (k) => JSON.parse(localStorage.getItem(k)).settings,
      key,
    ),
    stored,
  );
  mark(
    "reload restores settings, pins, summaries and visits; expansion resets",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await node("session:s1").focus();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".wg-summary-overlay").count(), 0);
  await leave();
  await page.keyboard.press("Tab");
  await page.setViewportSize({ width: 640, height: 760 });
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await stable();
  await page.screenshot({
    path: capture + "/workspace-bubbles-small.png",
    fullPage: true,
  });
  mark("keyboard focus, system reduced motion and narrow viewport");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expand("build");
  await close();
  await page.getByText("归档", { exact: true }).click();
  await stable();
  await node("session:s8").locator(".wg-orb").click();
  await leave();
  await page.getByRole("button", { name: "恢复会话", exact: true }).click();
  await page.waitForFunction(
    () => !document.querySelector('[data-id="session:s8"] .is-archived'),
  );
  mark("archive restore remains functional");
  const other = await context.newPage();
  other.on("pageerror", (e) => errors.push(String(e)));
  await other.goto(baseURL);
  await other.evaluate((k) => localStorage.setItem(k, "{broken"), key);
  await other.reload();
  await other.getByRole("alert").first().waitFor();
  assert.match(await other.getByRole("alert").first().innerText(), /无法读取/);
  assert.equal(
    await other.evaluate((k) => localStorage.getItem(k), key),
    "{broken",
  );
  await other
    .getByRole("button", { name: "重置本地布局", exact: true })
    .click();
  await other.getByRole("button", { name: "确认重置", exact: true }).click();
  await other.waitForFunction(
    (k) => JSON.parse(localStorage.getItem(k)).schemaVersion === 1,
    key,
  );
  mark("corrupted storage preserved until explicit reset");
  assert.deepEqual(errors, []);
  await writeFile(
    capture + "/browser-results.json",
    JSON.stringify({ browser: browser.version(), checks, errors }, null, 2),
  );
} catch (error) {
  if (page) {
    console.log(
      "NODE DIAGNOSTICS",
      await page.locator(".react-flow__node").evaluateAll((nodes) =>
        nodes.map((n) => ({
          id: n.dataset.id,
          style: n.getAttribute("style"),
          text: n.textContent,
          rect: n.getBoundingClientRect().toJSON(),
        })),
      ),
      errors,
    );
    await page.screenshot({ path: capture + "/failure.png", fullPage: true });
    console.log((await page.locator("body").innerText()).slice(-4000));
  }
  throw error;
} finally {
  const video = page?.video();
  await context?.close();
  if (video) await video.saveAs(capture + "/workspace-bubbles.webm");
  await browser?.close();
  await server?.close();
}
