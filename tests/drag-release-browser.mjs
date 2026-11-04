import assert from "node:assert/strict";
import { chromium } from "playwright";
import { createServer } from "vite";
import { mkdir, writeFile } from "node:fs/promises";

// Exercise the real hook and the layout feedback used by GraphPage. Controlling
// RAF lets a delayed layout save arrive after the next physics frame.
const server = await createServer({
  server: { host: "127.0.0.1", port: 0 },
  optimizeDeps: { include: ["react", "react-dom", "react-dom/client"] },
});
server.middlewares.use("/physics-hook-test", (_req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end('<!doctype html><div id="root"></div>');
});
await server.listen();
let browser;
try {
  browser = await chromium.launch({
    headless: true,
    channel: process.env.BROWSER_CHANNEL || undefined,
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  await page.goto(server.resolvedUrls.local[0] + "physics-hook-test");
  const results = await page.evaluate(async () => {
    const { default: React } =
        await import("/node_modules/.vite/deps/react.js"),
      {
        default: { createRoot },
      } = await import("/node_modules/.vite/deps/react-dom_client.js"),
      {
        default: { flushSync },
      } = await import("/node_modules/.vite/deps/react-dom.js"),
      { useGraphPhysics } = await import("/src/useGraphPhysics.ts");
    const frames = new Map();
    let frameId = 0;
    window.requestAnimationFrame = (callback) => {
      frames.set(++frameId, callback);
      return frameId;
    };
    window.cancelAnimationFrame = (id) => frames.delete(id);
    const results = [];
    for (const shape of ["line", "ring"])
      for (const hz of [30, 60, 120]) {
        let physics, updateProjection, pendingSave;
        const saves = [];
        const initial = {
          nodes: (shape === "line"
            ? [0, 220, 440]
            : Array.from({ length: 21 }, (_, i) => i)
          ).map((x, i) => ({
            id: String(i),
            type: "bubble",
            position:
              shape === "line" || i === 0
                ? { x: shape === "line" ? x : 0, y: 0 }
                : {
                    x: Math.cos(((i - 1) * Math.PI) / 10) * 320,
                    y: 16 + Math.sin(((i - 1) * Math.PI) / 10) * 320,
                  },
            data: {
              kind: shape === "ring" && i === 0 ? "workspace" : "session",
              entityId: String(i),
              title: String(i),
              status: "idle",
            },
          })),
          edges:
            shape === "ring"
              ? Array.from({ length: 20 }, (_, i) => ({
                  id: "0-" + (i + 1),
                  source: "0",
                  target: String(i + 1),
                }))
              : [
                  { id: "01", source: "0", target: "1" },
                  { id: "12", source: "1", target: "2" },
                ],
        };
        function Harness() {
          const [projection, setProjection] = React.useState(initial);
          updateProjection = setProjection;
          physics = useGraphPhysics(projection, false, (positions) => {
            saves.push(positions);
            // GraphPage saves through a promise queue and navigator.locks. Model
            // the save completing after the next RAF, while physics has advanced.
            pendingSave = positions;
          });
          return null;
        }
        const root = createRoot(document.getElementById("root"));
        flushSync(() => root.render(React.createElement(Harness)));
        let now = performance.now();
        const step = () => {
          const saved = pendingSave;
          pendingSave = undefined;
          const pending = [...frames.values()];
          frames.clear();
          now += 1000 / hz;
          flushSync(() => pending.forEach((callback) => callback(now)));
          if (saved)
            flushSync(() =>
              updateProjection((old) => ({
                ...old,
                nodes: old.nodes.map((node) => ({
                  ...node,
                  position: saved[node.id],
                })),
              })),
            );
        };
        flushSync(() => {
          physics.drag("0", { x: 0, y: 0 });
          physics.drag(
            "0",
            shape === "ring" ? { x: 2000, y: 200 } : { x: -300, y: 120 },
          );
        });
        step();
        flushSync(() => physics.release("0"));
        const release = physics.world.positions();
        const savesAtRelease = saves.length;
        for (let i = 0; i < hz / 2; i++) step();
        const after = physics.world.positions();
        let count = 0;
        while ((frames.size || pendingSave) && count++ < hz * 10) step();
        const final = physics.world.positions();
        const hub = physics.world.bodies.get("0"),
          children = [...physics.world.bodies.values()].filter(
            (b) => b.id !== "0",
          );
        results.push({
          shape,
          hubOffset:
            shape === "ring"
              ? Math.hypot(
                  hub.x -
                    children.reduce((s, b) => s + b.x, 0) / children.length,
                  hub.y -
                    children.reduce((s, b) => s + b.y, 0) / children.length,
                )
              : 0,
          hz,
          savesAtRelease,
          release,
          after,
          final,
          saves: saves.length,
          saved: saves.at(-1),
          active: physics.world.active,
          frames: frames.size,
        });
        flushSync(() => root.unmount());
      }
    return results;
  });
  await mkdir("artifacts/layout-interaction", { recursive: true });
  await writeFile(
    "artifacts/layout-interaction/drag-release-results.json",
    JSON.stringify(results, null, 2),
  );
  for (const r of results) {
    if (r.shape === "line")
      assert.ok(
        r.after["1"].x < r.release["1"].x - 20,
        `${r.hz}Hz: neighbours must keep following after an abrupt release`,
      );
    else {
      assert.ok(
        Math.hypot(
          r.after["1"].x - r.release["1"].x,
          r.after["1"].y - r.release["1"].y,
        ) > 30,
        "ring keeps following after immediate release",
      );
      assert.ok(
        r.hubOffset < 320 * 0.35,
        "hub stays near the recovered ring center",
      );
    }
    assert.equal(
      r.savesAtRelease,
      1,
      "preserve a drop snapshot for panel remounts",
    );
    assert.ok(
      Math.abs(r.final["0"].x - (r.shape === "ring" ? 2000 : -300)) < 1,
      "grabbed bubble stays at its drop point",
    );
    assert.equal(r.saves, 2, "also save once the physics actually settles");
    assert.deepEqual(
      r.saved,
      r.final,
      "saved layout matches the final simulation",
    );
    assert.equal(r.active, false);
    assert.equal(r.frames, 0);
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS line and dense-ring abrupt release, delayed layout feedback, central hub recovery and idle RAF at 30/60/120Hz",
  );
} finally {
  await browser?.close();
  await server.close();
}
