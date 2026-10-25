import { spawn } from "node:child_process";
import { mkdir, writeFile, mkdtemp } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { chromium } from "playwright";
import assert from "node:assert/strict";
const cli = process.env.DSH_CLI;
if (!cli) throw new Error("Set DSH_CLI to the installed DSH bin.js path");
const root = process.cwd();
await mkdir("artifacts", { recursive: true });
const home = await mkdtemp(
  path.join(root, "artifacts", "workspace-graph-dsh-"),
);
const projectA = path.join(home, "sample-a"),
  projectB = path.join(projectA, "Codex");
await mkdir(projectA);
await mkdir(projectB);
await mkdir(path.join(home, "storages"));
const now = new Date().toISOString();
await writeFile(
  path.join(home, "storages", "workspace.json"),
  JSON.stringify({
    unit: { name: "workspace", version: 2 },
    global: {
      initialized: true,
      workspaceIds: ["test-a", "test-b"],
      archivedSessionIds: [],
      pinnedSessionIds: [],
    },
    tables: {
      workspaces: {
        "test-a": {
          path: projectA,
          title: "测试工作区 A",
          sessionIds: [],
          createdAt: now,
          updatedAt: now,
        },
        "test-b": {
          path: projectB,
          title: "测试工作区 B",
          sessionIds: [],
          createdAt: now,
          updatedAt: now,
        },
      },
    },
  }),
);
const patch = path.join(home, "graph.patch.yml");
// Test-only native client consumer: exercise real Session APIs and retention snapshots.
// This fixture is outside the shipped plugin and never starts a model request.
const probe = path.join(home, "native-probe");
await mkdir(probe);
await writeFile(
  path.join(probe, "package.json"),
  JSON.stringify({
    name: "dsh-graph-native-probe",
    version: "0.0.0",
    type: "module",
    main: "host.js",
    exports: { ".": "./host.js", "./client": "./client.js" },
    dsh: {
      client: {
        platform: "web",
        inject: [
          "@deepseek-ai/dsh-client-ui-workspace",
          "@deepseek-ai/dsh-client-ui-session",
        ],
      },
    },
  }),
);
await writeFile(path.join(probe, "host.js"), "export function apply() {}\n");
await writeFile(
  path.join(probe, "client.js"),
  `
window.__ModuleLoader__.load({id:"dsh-graph-native-probe",factory:function(require){
const inject = ["sessions", "uiWorkspace"];
function apply(ctx) {
  const held = [];
  window.__graphNativeProbe = {
    prepare: async () => {
      const a = await ctx.uiWorkspace.connectWorkspace("test-a");
      const b = await ctx.uiWorkspace.connectWorkspace("test-b");
      for (const id of [a, b]) {
        const reference = ctx.sessions.retain(id, { source: "mainView" });
        held.push(reference); await reference.ready;
      }
      return { a, b };
    },
    snapshot: () => ctx.sessions.list.getSnapshot(),
  };
  ctx.effect(() => () => { for (const reference of held) reference.release(); delete window.__graphNativeProbe; });
}
return {inject,apply};}});
`,
);
await writeFile(
  patch,
  "- insert:\n    - id: workspace-graph\n      name: " +
    JSON.stringify(path.join(root, "dist/host.js")) +
    "\n    - id: native-graph-probe\n      name: " +
    JSON.stringify(path.join(probe, "host.js")) +
    "\n",
);
const child = spawn(
  process.execPath,
  [cli, "--profile", "web", "--patch", patch, "--no-open", "--port", "0"],
  {
    cwd: home,
    env: { ...process.env, DSH_HOME: home },
    windowsHide: true,
    stdio: ["ignore", "pipe", "pipe"],
  },
);
let log = "",
  url;
let browser, page;
const errors = [];
try {
  console.log("native: booting isolated DSH");
  url = await new Promise((resolve, reject) => {
    const timer = setTimeout(
      () =>
        reject(
          new Error(
            "DSH boot timeout: " +
              log.replace(/token=[^\s]+/g, "token=[redacted]"),
          ),
        ),
      60000,
    );
    const onData = (data) => {
      log += data.toString();
      const match = log.match(/dsh web: (http[^\s]+)/);
      if (match) {
        clearTimeout(timer);
        resolve(match[1]);
      }
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", onData);
    child.on("exit", (code) => {
      clearTimeout(timer);
      reject(
        new Error(
          "DSH exited " +
            code +
            ": " +
            log.replace(/token=[^\s]+/g, "token=[redacted]"),
        ),
      );
    });
  });
  console.log("native: host ready");
  browser = await chromium.launch({
    headless: true,
    channel: process.env.BROWSER_CHANNEL || undefined,
  });
  page = await browser.newPage({
    viewport: { width: 1440, height: 960 },
    locale: "zh-CN",
  });
  page.on("pageerror", (error) => errors.push(String(error)));
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type()))
      errors.push(message.text());
  });
  page.setDefaultTimeout(12000);
  console.log("native: opening host page");
  await page.goto(url);
  console.log("native: host page loaded");
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: "工作区图谱", exact: true })
    .waitFor({ timeout: 30000 });
  await page.getByRole("button", { name: "继续", exact: true }).waitFor();
  await page.getByRole("button", { name: "继续", exact: true }).click();
  await page.getByRole("button", { name: "登录", exact: true }).waitFor();
  if (await page.getByRole("button", { name: /关闭|Close/i }).count())
    await page
      .getByRole("button", { name: /关闭|Close/i })
      .first()
      .click();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "工作区图谱", exact: true }).click();
  await page.getByRole("region", { name: "工作区图谱" }).waitFor();
  console.log("native: graph mounted");
  await page.waitForFunction(() => !!window.__graphNativeProbe);
  const parallel = await page.evaluate(() =>
    window.__graphNativeProbe.prepare(),
  );
  for (const id of Object.values(parallel)) {
    await page.locator(`[data-id="session:${id}"] .is-current`).waitFor();
  }
  const nativeSnapshot = await page.evaluate(() =>
    window.__graphNativeProbe.snapshot(),
  );
  for (const id of Object.values(parallel))
    assert.ok(nativeSnapshot.byId[id].retainedBy.mainView > 0);
  console.log(
    "native: two actual mainView retentions displayed together while collapsed",
  );
  const geometry = await page.locator(".wg-orb").evaluateAll((orbs) =>
    orbs.map((el) => {
      const b = el.getBoundingClientRect(),
        style = getComputedStyle(el);
      return { width: b.width, height: b.height, radius: style.borderRadius };
    }),
  );
  await writeFile(
    "artifacts/layout-interaction/native-geometry.json",
    JSON.stringify(geometry, null, 2),
  );
  assert.ok(
    geometry.every(
      (g) => g.radius === "50%" && Math.abs(g.width - g.height) < 0.01,
    ),
  );
  const endpointErrors = await page
    .locator(".react-flow__edge-path")
    .evaluateAll((paths) =>
      paths.flatMap((el) => {
        const edge = el.closest("[data-id]"),
          [source, target] = edge.dataset.id.split("->");
        return [source, target].map((id, i) => {
          const orb = document
            .querySelector(`.react-flow__node[data-id="${id}"] .wg-orb`)
            .getBoundingClientRect();
          const p = el.getPointAtLength(i ? el.getTotalLength() : 0),
            screen = new DOMPoint(p.x, p.y).matrixTransform(el.getScreenCTM());
          return Math.abs(
            Math.hypot(
              screen.x - orb.x - orb.width / 2,
              screen.y - orb.y - orb.height / 2,
            ) -
              orb.width / 2,
          );
        });
      }),
    );
  assert.ok(
    endpointErrors.length > 0 && endpointErrors.every((error) => error < 2),
  );
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length >= 2,
  );
  await page
    .locator('[data-id="workspace:test-a->workspace:test-b"]')
    .locator(".react-flow__edge-path")
    .waitFor({ state: "attached" });
  assert.match(
    await page.locator('[data-id="workspace:test-b"]').innerText(),
    /子工作区/,
  );
  console.log("native: nested workspace visible and linked to its parent");
  await page
    .getByLabel("选择工作区")
    .selectOption(
      await page
        .getByRole("option", { name: /测试工作区 A/ })
        .getAttribute("value"),
    );
  await page.locator(".react-flow__node").first().click();
  await page.getByRole("button", { name: "重命名工作区", exact: true }).click();
  await page.getByLabel("工作区新名称").fill("图谱验证 A");
  await page.getByRole("button", { name: "保存名称", exact: true }).click();
  await page.waitForFunction(
    () =>
      document.querySelector(".wg-details h2")?.textContent === "图谱验证 A",
  );
  await page
    .locator(".wg-details")
    .getByRole("button", { name: "新建会话", exact: true })
    .click();
  await page.waitForFunction(() => !document.querySelector(".wg-root"));
  await page.getByRole("button", { name: "工作区图谱", exact: true }).click();
  await page.waitForFunction(
    () =>
      document.querySelectorAll(
        '.react-flow__node-session .is-current, .react-flow__node[data-id^="session:"] .is-current',
      ).length >= 2,
  );
  console.log(
    "native: actual retained blank current session remains visible while collapsed",
  );
  await page.getByRole("button", { name: "重置布局", exact: true }).click();
  await page.waitForTimeout(700);
  const position = () =>
    page.locator('[data-id="workspace:test-b"]').evaluate((el) => {
      const m = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(
        el.style.transform,
      );
      return { x: Number(m?.[1]), y: Number(m?.[2]) };
    });
  const defaults = await position();
  const orb = await page
    .locator('[data-id="workspace:test-b"] .wg-orb')
    .boundingBox();
  await page.keyboard.down("Control");
  await page.mouse.move(orb.x + orb.width / 2, orb.y + orb.height / 2);
  await page.mouse.down();
  await page.mouse.move(orb.x + orb.width / 2 + 110, orb.y + orb.height / 2, {
    steps: 16,
  });
  await page.mouse.up();
  await page.keyboard.up("Control");
  await page.mouse.move(1000, 110);
  await page.waitForTimeout(3200);
  const moved = await position();
  assert.ok(Math.hypot(moved.x - defaults.x, moved.y - defaults.y) > 50);
  assert.deepEqual(
    await page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("dsh-workspace-graph:v1")).positions,
    ),
    {},
  );
  await page.reload();
  await page
    .getByRole("button", { name: "工作区图谱", exact: true })
    .waitFor({ timeout: 30000 });
  if (!(await page.locator(".wg-root").count()))
    await page.getByRole("button", { name: "工作区图谱", exact: true }).click();
  await page.locator('[data-id="workspace:test-b"]').waitFor();
  await page.waitForTimeout(1000);
  const restarted = await position();
  await page.keyboard.press("Escape");
  const dismiss = page.getByRole("button", { name: /关闭|Close/i });
  if (await dismiss.count()) await dismiss.first().click();
  await page.keyboard.press("Escape");
  assert.ok(Math.hypot(restarted.x - moved.x, restarted.y - moved.y) > 10);
  await page.getByRole("button", { name: "重置布局", exact: true }).click();
  await page.waitForTimeout(700);
  const reset = await position();
  assert.ok(Math.hypot(restarted.x - reset.x, restarted.y - reset.y) < 1);
  console.log(
    "native: Ctrl drag and default layout after real host page restart verified",
  );
  assert.deepEqual(errors, []);
  await mkdir("artifacts", { recursive: true });
  await page.screenshot({
    path: "artifacts/native-integration.png",
    fullPage: true,
  });
  console.log(
    "PASS native DSH: dynamic client load, native workspace snapshots, rename, current-session retention, Ctrl drag, restart defaults and navigation; no page errors.",
  );
} catch (error) {
  console.log(
    "native failure",
    errors.map((error) => error.split("\n")[0]),
  );
  console.log("graph nodes", await page?.locator(".wg-root").count());
  if (page) {
    console.log((await page.locator("body").innerText()).slice(0, 2500));
    await page.screenshot({ path: "artifacts/native-failure.png" });
  }
  throw new Error(
    String(error) +
      "\nDSH: " +
      log.replace(/token=[^\s]+/g, "token=[redacted]"),
  );
} finally {
  await browser?.close();
  child.kill();
}
