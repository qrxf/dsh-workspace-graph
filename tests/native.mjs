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
  projectB = path.join(home, "sample-b");
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
await writeFile(
  patch,
  "- insert:\n    - id: workspace-graph\n      name: " +
    JSON.stringify(path.join(root, "dist/host.js")) +
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
  browser = await chromium.launch({ headless: true });
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
  await page.waitForFunction(
    () => document.querySelectorAll(".react-flow__node").length >= 2,
  );
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
  assert.deepEqual(errors, []);
  await mkdir("artifacts", { recursive: true });
  await page.screenshot({
    path: "artifacts/native-integration.png",
    fullPage: true,
  });
  console.log(
    "PASS native DSH: dynamic client load, native workspace snapshots, rename, new-session navigation; no page errors.",
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
