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
const node = (id) => page.locator(`.react-flow__node[data-id="${id}"]`);
const centers = () =>
  page.locator(".react-flow__node").evaluateAll((nodes) =>
    Object.fromEntries(
      nodes.map((n) => {
        const b = n.getBoundingClientRect();
        return [
          n.dataset.id,
          {
            x: b.x + b.width / 2,
            y: b.y + b.height / 2,
          },
        ];
      }),
    ),
  );
const positions = () =>
  page.locator(".react-flow__node").evaluateAll((nodes) =>
    Object.fromEntries(
      nodes.map((n) => {
        const match = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(
          n.style.transform,
        );
        return [
          n.dataset.id,
          { x: Number(match?.[1] ?? 0), y: Number(match?.[2] ?? 0) },
        ];
      }),
    ),
  );
const maxOverlap = () =>
  page.locator(".wg-orb").evaluateAll((elements) => {
    const orbs = elements.map((el) => {
      const b = el.getBoundingClientRect();
      return { x: b.x + b.width / 2, y: b.y + b.height / 2, r: b.width / 2 };
    });
    let overlap = 0;
    for (let i = 0; i < orbs.length; i++)
      for (let j = i + 1; j < orbs.length; j++)
        overlap = Math.max(
          overlap,
          orbs[i].r +
            orbs[j].r -
            Math.hypot(orbs[i].x - orbs[j].x, orbs[i].y - orbs[j].y),
        );
    return overlap;
  });
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
try {
  await page.route("**/favicon.ico", (route) => route.fulfill({ status: 204 }));
  await page.goto(server.resolvedUrls.local[0]);
  await node("workspace:product").waitFor();
  await stable();
  await node("workspace:product").locator(".wg-orb").click();
  await node("session:s2").waitFor();
  await stable();
  if (await page.getByLabel("关闭详情").count())
    await page.getByLabel("关闭详情").click();
  await page.getByRole("button", { name: "适应画布", exact: true }).click();
  await stable();
  await mkdir("artifacts/flex-drag", { recursive: true });

  const before = await centers();
  const beforePositions = await positions();
  const cluster = [
    "workspace:product",
    "session:s1",
    "session:s2",
    "session:s3",
  ];
  const shift = (current) =>
    Object.fromEntries(
      cluster.map((id) => [
        id,
        {
          x: current[id].x - before[id].x,
          y: current[id].y - before[id].y,
        },
      ]),
    );

  const orb = await node("workspace:product").locator(".wg-orb").boundingBox();
  const start = { x: orb.x + orb.width / 2, y: orb.y + orb.height / 2 };
  await page.mouse.move(start.x, start.y);
  await page.mouse.down();
  await page.mouse.move(start.x + 140, start.y, { steps: 24 });

  // Every connected bubble follows, but the rope lags during the gesture.
  const during = await centers();
  const immediate = shift(during);
  for (const id of cluster.slice(1))
    assert.ok(
      immediate[id].x > 35,
      `${id} must follow the drag immediately (${immediate[id].x})`,
    );
  for (const id of cluster.slice(1))
    assert.ok(
      immediate[id].x < immediate["workspace:product"].x - 15,
      `${id} must lag behind the grabbed bubble (${immediate[id].x} vs ${immediate["workspace:product"].x})`,
    );
  assert.ok(
    Math.hypot(
      during["workspace:research"].x - before["workspace:research"].x,
      during["workspace:research"].y - before["workspace:research"].y,
    ) < 0.75,
    "an unrelated workspace must stay put before contact",
  );
  await page.screenshot({
    path: "artifacts/flex-drag/following.png",
    fullPage: true,
  });

  // Once the pointer stops, the rope catches up and the cluster keeps its shape.
  await page.waitForTimeout(400);
  const caughtUp = shift(await centers());
  const caughtUpPositions = await positions();
  for (const id of cluster.slice(1))
    assert.ok(
      Math.abs(caughtUp[id].x - caughtUp["workspace:product"].x) < 3,
      `${id} must catch up while the pointer rests`,
    );
  for (const id of cluster.slice(1))
    assert.ok(
      Math.abs(
        caughtUpPositions[id].x -
          caughtUpPositions["workspace:product"].x -
          (beforePositions[id].x - beforePositions["workspace:product"].x),
      ) < 2,
      `${id} must recover its relative position`,
    );

  // Push the whole cluster into the other workspaces, then release.
  await page.mouse.move(start.x + 300, start.y, { steps: 30 });
  await page.waitForTimeout(250);
  const packed = await maxOverlap();
  await page.screenshot({
    path: "artifacts/flex-drag/during-drag.png",
    fullPage: true,
  });
  await page.mouse.up();
  const atRelease = await maxOverlap();
  await page.waitForTimeout(120);
  const after120 = await maxOverlap();
  await page.waitForTimeout(480);
  const after600 = await maxOverlap();
  await page.waitForTimeout(1200);
  const afterSettle = await maxOverlap();
  await stable();

  assert.ok(
    packed > 2,
    `soft contacts should allow overlap while dragging (${packed})`,
  );
  assert.ok(
    after120 > 1,
    `the collision volume should still be expanding after 120 ms (${after120})`,
  );
  assert.ok(
    after120 < packed,
    "the overlap must begin to shrink after release",
  );
  assert.ok(
    after600 < after120,
    "the overlap must keep shrinking while the volume grows",
  );
  assert.ok(
    afterSettle <= 1,
    `collision volume must end fully separated (${afterSettle})`,
  );
  assert.ok(
    atRelease - afterSettle > 2,
    "the overlap must shrink after release",
  );
  console.log(
    JSON.stringify({ packed, atRelease, after120, after600, afterSettle }),
  );

  const stored = await page.evaluate(
    () =>
      JSON.parse(localStorage.getItem("dsh-workspace-graph:demo:v1")).positions,
  );
  assert.ok(stored["workspace:product"], "positions must be saved");
  assert.deepEqual(errors, []);
  await page.screenshot({
    path: "artifacts/flex-drag/settled.png",
    fullPage: true,
  });
  await writeFile(
    "artifacts/flex-drag/results.json",
    JSON.stringify(
      {
        checks: [
          "every connected bubble follows with elastic lag",
          "the rope catches up and restores relative positions",
          "soft contacts overlap during drag",
          "collision volume expands until fully separated",
        ],
        overlap: { packed, atRelease, after120, after600, afterSettle },
        errors,
      },
      null,
      2,
    ),
  );
  console.log(
    "PASS elastic follow, soft contacts and post-drag full separation",
  );
} catch (error) {
  if (page) {
    await mkdir("artifacts/flex-drag", { recursive: true });
    await page.screenshot({
      path: "artifacts/flex-drag/failure.png",
      fullPage: true,
    });
  }
  throw error;
} finally {
  await browser.close();
  await server.close();
}
