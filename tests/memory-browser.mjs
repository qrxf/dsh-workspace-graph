import { chromium } from "playwright";
import { createServer } from "vite";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
const server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
await server.listen();
let browser;
try {
  browser = await chromium.launch({
    headless: true,
    channel: process.env.BROWSER_CHANNEL || undefined,
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(server.resolvedUrls.local[0] + "?memory=1");
  await page.locator(".wg-memory-edge").first().waitFor({ state: "attached" });
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await page
    .locator(".wg-memory-edge path.react-flow__edge-path")
    .first()
    .waitFor();
  assert.equal(
    await page.locator(".wg-memory-edge").count(),
    2,
    "bidirectional reads keep both directions",
  );
  const edge = page.locator(".wg-memory-edge").first();
  assert.ok(
    await edge.locator("path.react-flow__edge-path").getAttribute("marker-end"),
  );
  const orb = page.locator('[data-id="workspace:product"] .wg-orb');
  await orb.click();
  await page.getByRole("heading", { name: "工作区记忆" }).waitFor();
  await page.getByRole("button", { name: "查看正文：共享研究结论" }).click();
  await page
    .getByText("示例记忆正文：研究结论供产品工作区使用。", { exact: true })
    .waitFor();
  await page.getByRole("button", { name: "刷新记忆", exact: true }).click();
  await page.getByRole("button", { name: "查看正文：共享研究结论" }).waitFor();
  const pathBefore = await edge
    .locator("path.react-flow__edge-path")
    .getAttribute("d");
  const box = await orb.boundingBox();
  await page.keyboard.down("Control");
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    box.x + box.width / 2 + 85,
    box.y + box.height / 2 + 60,
    { steps: 12 },
  );
  await page.mouse.up();
  await page.keyboard.up("Control");
  assert.notEqual(
    await edge.locator("path.react-flow__edge-path").getAttribute("d"),
    pathBefore,
  );
  await page.getByRole("button", { name: "关闭详情" }).click();
  await page.locator('[data-id="workspace:research"] .wg-orb').click();
  assert.equal(
    await page
      .getByText("示例记忆正文：研究结论供产品工作区使用。", { exact: true })
      .count(),
    0,
  );
  assert.deepEqual(errors, []);
  await mkdir("artifacts/v0.2.0", { recursive: true });
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "artifacts/v0.2.0/memory.png" });
  await page.goto(server.resolvedUrls.local[0] + "?memory=slow");
  await page.locator('[data-id="workspace:product"] .wg-orb').click();
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "查看正文：共享研究结论" }).click();
  await page.getByRole("button", { name: "关闭详情" }).click();
  await page.locator('[data-id="workspace:research"] .wg-orb').click();
  await page.waitForTimeout(2200);
  assert.equal(
    await page
      .getByText("示例记忆正文：研究结论供产品工作区使用。", { exact: true })
      .count(),
    0,
    "late body cannot cross workspace selection",
  );
  for (const mode of ["missing", "error"]) {
    await page.goto(server.resolvedUrls.local[0] + "?memory=" + mode);
    await page.locator('[data-id="workspace:product"] .wg-orb').click();
    await page
      .getByText(
        mode === "missing" ? "尚无记忆数据库" : "记忆连接不可用，请刷新重试。",
        { exact: true },
      )
      .waitFor();
    assert.equal(await page.locator(".wg-memory-edge").count(), 0);
    assert.ok(
      (await page.locator(".react-flow__node").count()) > 0,
      "base graph survives unavailable memory",
    );
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS directed memory overlay, details/body, refresh, selection isolation and live drag endpoints",
  );
} catch (error) {
  const page = browser?.contexts()[0]?.pages()[0];
  if (page)
    console.log(
      "memory browser diagnostic",
      await page
        .evaluate(() => ({
          nodes: [...document.querySelectorAll(".react-flow__node")].map(
            (node) => node.getAttribute("data-id"),
          ),
          edges: [...document.querySelectorAll(".wg-memory-edge")].map(
            (edge) => ({
              id: edge.getAttribute("data-id"),
              path: edge.querySelector("path")?.getAttribute("d"),
              width: edge.getBoundingClientRect().width,
              height: edge.getBoundingClientRect().height,
            }),
          ),
          text: document.body.innerText.slice(0, 1500),
        }))
        .catch(() => "page unavailable"),
    );
  throw error;
} finally {
  await browser?.close();
  await server.close();
}
