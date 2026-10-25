import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { graphBrowser } from "./graph-browser-helpers.mjs";
const g = await graphBrowser("?hierarchy=1");
try {
  await g.node("workspace:codex").locator(".wg-orb").click();
  await g.node("session:fork").waitFor();
  await g.stable();
  await g.fit();
  const samples = [];
  const measure = () =>
    g.page.locator(".react-flow__edge").evaluateAll((edges) =>
      edges.flatMap((edge) => {
        const [source, target] = edge.dataset.id.split("->"),
          path = edge.querySelector(".react-flow__edge-path");
        if (!path) return [];
        return [source, target].map((id, i) => {
          const orb = document
            .querySelector(`.react-flow__node[data-id="${id}"] .wg-orb`)
            .getBoundingClientRect();
          const p = path.getPointAtLength(i ? path.getTotalLength() : 0);
          const screen = new DOMPoint(p.x, p.y).matrixTransform(
            path.getScreenCTM(),
          );
          return {
            id,
            error: Math.abs(
              Math.hypot(
                screen.x - orb.x - orb.width / 2,
                screen.y - orb.y - orb.height / 2,
              ) -
                orb.width / 2,
            ),
          };
        });
      }),
    );
  for (const wheel of [0, -600, 1200]) {
    if (wheel) {
      await g.page.mouse.move(1000, 350);
      await g.page.mouse.wheel(0, wheel);
      await g.page.waitForTimeout(400);
    }
    samples.push(...(await measure()));
  }
  await g.fit();
  const box = await g.node("session:fork").locator(".wg-orb").boundingBox();
  await g.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await g.page.mouse.down();
  for (const [dx, dy] of [
    [80, 0],
    [100, 60],
    [-40, 100],
  ]) {
    await g.page.mouse.move(
      box.x + box.width / 2 + dx,
      box.y + box.height / 2 + dy,
      { steps: 5 },
    );
    samples.push(...(await measure()));
  }
  await g.page.mouse.up();
  await g.stable();
  assert.ok(samples.length >= 20);
  assert.ok(
    samples.every((s) => s.error <= 2),
    JSON.stringify(samples),
  );
  assert.deepEqual(g.errors, []);
  await g.page.screenshot({ path: "artifacts/layout-interaction/ropes.png" });
  await writeFile(
    "artifacts/layout-interaction/edge-errors.json",
    JSON.stringify(samples, null, 2),
  );
  console.log(
    "PASS all circular endpoints during zoom and drag; maximum screen error",
    Math.max(...samples.map((s) => s.error)),
  );
} finally {
  await g.close();
}
