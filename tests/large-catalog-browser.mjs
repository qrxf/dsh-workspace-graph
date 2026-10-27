import assert from "node:assert/strict";
import { graphBrowser } from "./graph-browser-helpers.mjs";
import { writeFile } from "node:fs/promises";
const results = [];
for (const size of [1000, 5000]) {
  const start = performance.now();
  const g = await graphBrowser("?nodes=" + size);
  try {
    const p = g.page;
    await p.waitForFunction(() =>
      document.querySelector(".wg-brand p")?.textContent.includes("会话"),
    );
    assert.match(
      await p.locator(".wg-brand p").innerText(),
      new RegExp(String(size - 1) + " 个会话"),
    );
    assert.equal(await p.locator(".react-flow__node").count(), 2);
    await p.getByRole("button", { name: "列表视图", exact: true }).click();
    assert.equal(await p.locator(".wg-result-list button").count(), 50);
    const started = performance.now();
    await p.getByLabel("搜索工作区和会话").fill("演示会话 " + (size - 2));
    await p
      .getByRole("button", { name: "定位 演示会话 " + (size - 2), exact: true })
      .waitFor();
    const searchMs = performance.now() - started;
    await p
      .getByRole("button", { name: "定位 演示会话 " + (size - 2), exact: true })
      .click();
    await p.getByRole("button", { name: "图谱视图", exact: true }).click();
    await g.node("session:density-" + (size - 2)).waitFor();
    assert.equal(await p.locator(".react-flow__node").count(), 3);
    assert.deepEqual(g.errors, []);
    results.push({
      catalogSessions: size - 1,
      loadAndSetupMs: performance.now() - start,
      searchMs,
      maxRenderedResults: 50,
      revealedGraphNodes: 3,
    });
  } finally {
    await g.close();
  }
}
await writeFile(
  "artifacts/large-catalog-browser.json",
  JSON.stringify(results, null, 2),
);
console.log("PASS large catalog browser " + JSON.stringify(results));
