import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { graphBrowser } from "./graph-browser-helpers.mjs";
const g = await graphBrowser();
try {
  await g.node("workspace:product").locator(".wg-orb").click();
  await g.node("session:s3").waitFor();
  await g.stable();
  await g.fit();
  const members = ["session:s1", "session:s2", "session:s3"],
    before = await g.positions();
  const orb = await g
      .node("workspace:product")
      .locator(".wg-orb")
      .boundingBox(),
    start = { x: orb.x + orb.width / 2, y: orb.y + orb.height / 2 };
  await g.page.mouse.move(start.x, start.y);
  await g.page.mouse.down();
  await g.page.mouse.move(start.x - 100, start.y - 60, { steps: 18 });
  const during = await g.positions(),
    shift = (id) =>
      Math.hypot(during[id].x - before[id].x, during[id].y - before[id].y),
    grabbed = shift("workspace:product");
  assert.ok(grabbed > 50);
  for (const id of members) {
    assert.ok(shift(id) > 1, `${id} follows`);
    assert.ok(shift(id) < grabbed - 1, `${id} lags`);
  }
  const path = () =>
    g.page
      .locator(
        '[data-id="workspace:product->session:s1"] .react-flow__edge-path',
      )
      .getAttribute("d");
  const softPath = await path();
  await g.page.waitForTimeout(1500);
  assert.notEqual(await path(), softPath);
  await g.page.mouse.move(start.x - 180, start.y - 100, { steps: 3 });
  await g.page.mouse.up();
  await g.page.mouse.move(1000, 110);
  const samples = [];
  for (const [label, wait] of [
    ["release", 0],
    ["120ms", 120],
    ["600ms", 480],
    ["1200ms", 600],
  ]) {
    if (wait) await g.page.waitForTimeout(wait);
    const geometry = await g.page.locator(".wg-orb").evaluateAll((ns) =>
      ns.map((el) => {
        const b = el.getBoundingClientRect();
        return { x: b.x + b.width / 2, y: b.y + b.height / 2, r: b.width / 2 };
      }),
    );
    let overlap = 0;
    for (let i = 0; i < geometry.length; i++)
      for (let j = i + 1; j < geometry.length; j++) {
        const a = geometry[i],
          b = geometry[j];
        overlap = Math.max(
          overlap,
          a.r + b.r - Math.hypot(a.x - b.x, a.y - b.y),
        );
      }
    assert.ok(overlap <= 1, `${label} overlap ${overlap}`);
    samples.push({ label, overlap, positions: await g.positions() });
    await g.page.screenshot({
      path: `artifacts/layout-interaction/flex-${label}.png`,
    });
  }
  await g.stable();
  const final = await g.positions();
  assert.ok(
    Math.hypot(
      final["workspace:product"].x - before["workspace:product"].x,
      final["workspace:product"].y - before["workspace:product"].y,
    ) > 100,
  );
  assert.deepEqual(
    await g.page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1"))
          .positions,
    ),
    {},
  );
  assert.deepEqual(g.errors, []);
  await writeFile(
    "artifacts/layout-interaction/flex-results.json",
    JSON.stringify(
      { before, during, final, samples, errors: g.errors },
      null,
      2,
    ),
  );
  console.log(
    "PASS elastic lag, held-pointer hardening, partial recovery, enlarged collisions and runtime layout",
  );
} finally {
  await g.close();
}
