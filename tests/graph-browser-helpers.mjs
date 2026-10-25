import { chromium } from "playwright";
import { createServer } from "vite";
import { mkdir } from "node:fs/promises";
export async function graphBrowser(query = "") {
  const server = await createServer({ server: { host: "127.0.0.1", port: 0 } });
  await server.listen();
  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      channel: process.env.BROWSER_CHANNEL || undefined,
    });
  } catch (error) {
    await server.close();
    throw error;
  }
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.route("**/favicon.ico", (r) => r.fulfill({ status: 204 }));
  await mkdir("artifacts/layout-interaction", { recursive: true });
  await page.goto(server.resolvedUrls.local[0] + query);
  await page.locator(".react-flow__node").first().waitFor();
  const node = (id) => page.locator(`.react-flow__node[data-id="${id}"]`);
  const fit = async () => {
    if (await page.getByLabel("关闭详情").count())
      await page.getByLabel("关闭详情").click();
    await page.getByRole("button", { name: "适应画布", exact: true }).click();
    await page.waitForTimeout(250);
  };
  const positions = () =>
    page.locator(".react-flow__node").evaluateAll((nodes) =>
      Object.fromEntries(
        nodes.map((n) => {
          const m = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(
            n.style.transform,
          );
          return [n.dataset.id, { x: Number(m?.[1]), y: Number(m?.[2]) }];
        }),
      ),
    );
  const stable = async () => {
    await page.waitForFunction(
      () => {
        const key = [...document.querySelectorAll(".react-flow__node")]
          .map((n) => n.style.transform)
          .join("|");
        window.__stableCount =
          key === window.__stableKey ? (window.__stableCount ?? 0) + 1 : 0;
        window.__stableKey = key;
        return window.__stableCount >= 20;
      },
      null,
      { timeout: 20000 },
    );
  };
  return {
    page,
    node,
    errors,
    fit,
    positions,
    stable,
    close: async () => {
      await browser.close();
      await server.close();
    },
  };
}
