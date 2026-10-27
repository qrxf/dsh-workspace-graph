import assert from "node:assert/strict";
import { graphBrowser } from "./graph-browser-helpers.mjs";
const g = await graphBrowser();
try {
  const p = g.page;
  await p.getByRole("button", { name: "运行中 2", exact: true }).waitFor();
  await p.getByRole("button", { name: "新结果 1", exact: true }).waitFor();
  const viewport = () =>
    p.locator(".react-flow__viewport").evaluate((el) => el.style.transform);
  await g.stable();
  const originalViewport = await viewport();
  await p.getByLabel("搜索工作区和会话").fill("文献阅读");
  const results = p.getByRole("region", { name: "会话导航", exact: true });
  await results.getByRole("button", { name: /定位 文献阅读与摘要/ }).click();
  await g.node("session:s4").waitFor();
  await g.stable();
  assert.notEqual(await viewport(), originalViewport);
  const target = await g.node("session:s4").locator(".wg-orb").boundingBox();
  const canvas = await p.locator(".wg-canvas").boundingBox();
  assert.ok(
    target.x > canvas.x && target.x + target.width < canvas.x + canvas.width,
    "located node stays in canvas",
  );
  await p.getByRole("button", { name: "返回定位前视角" }).click();
  await p.waitForFunction(
    (value) =>
      document.querySelector(".react-flow__viewport").style.transform === value,
    originalViewport,
  );
  await p.getByRole("button", { name: "清除筛选", exact: true }).click();
  assert.equal(await p.getByLabel("时间分类").inputValue(), "all");
  await g.fit();
  await g.node("workspace:product").locator(".wg-orb").click();
  assert.equal(
    await g.node("workspace:product").locator(".is-expanded").count(),
    1,
  );
  await p.getByRole("button", { name: "恢复默认视图", exact: true }).click();
  assert.equal(await p.getByLabel("时间分类").inputValue(), "recent");
  assert.equal(
    await g.node("workspace:product").locator(".is-expanded").count(),
    0,
  );
  await p.getByRole("button", { name: /等待回应 1/ }).click();
  await results.getByRole("button", { name: /定位 探索图谱布局/ }).click();
  await g.node("session:s5").waitFor();
  await p.getByRole("button", { name: "列表视图", exact: true }).click();
  assert.equal(await results.isVisible(), true);
  await p.setViewportSize({ width: 780, height: 1000 });
  const nav = await results.boundingBox(),
    details = await p.locator(".wg-details").boundingBox();
  assert.ok(
    nav.y + nav.height <= details.y || details.y + details.height <= nav.y,
    "list and details must not overlap vertically",
  );
  await p.setViewportSize({ width: 1440, height: 1000 });
  await p.getByRole("button", { name: "备份与恢复", exact: true }).click();
  const backup = {
    schemaVersion: 1,
    revision: 0,
    positions: {},
    collapsed: [],
    views: {},
    settings: {
      theme: "#123456",
      reducedMotion: false,
      manualSummaries: { s4: "恢复的概括" },
      pinned: ["s4"],
    },
  };
  await p.getByLabel("搜索工作区和会话").fill("文献阅读");
  await p.getByLabel("选择图谱备份").setInputFiles({
    name: "backup.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(backup)),
  });
  await p.waitForTimeout(400); // A pending local search save must not invalidate its own import preview.
  await p.getByRole("button", { name: "确认导入备份", exact: true }).click();
  await p.waitForFunction(() => {
    const raw = localStorage.getItem("dsh-workspace-graph:demo:v1");
    return (
      JSON.parse(raw)?.settings?.manualSummaries?.s4 === "恢复的概括" ||
      document.querySelector(".wg-alert")?.textContent.includes("导入未完成")
    );
  });
  assert.equal(
    await p.locator(".wg-alert").count(),
    0,
    await p.locator(".wg-alert").allTextContents(),
  );
  await p.getByRole("button", { name: "导出图谱备份", exact: true }).waitFor();
  await p.getByRole("button", { name: "图谱视图", exact: true }).click();
  await p.getByLabel("搜索工作区和会话").fill("恢复的概括");
  await results.getByRole("button", { name: /定位 文献阅读与摘要/ }).waitFor();
  assert.deepEqual(g.errors, []);
  await p.screenshot({
    path: "artifacts/navigation-recovery.png",
    fullPage: true,
  });
  console.log(
    "PASS search/reveal/return, clear/default, attention/list and backup import/export UI",
  );
} finally {
  await g.close();
}
