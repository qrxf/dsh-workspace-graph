import { spawnSync } from "node:child_process";
const tests = [
  "initial-focus-browser",
  "navigation-browser",
  "large-catalog-browser",
  "dense-ring-browser",
  "rope-edge-browser",
  "ctrl-drag-browser",
  "flex-drag-browser",
  "drag-release-browser",
  "runtime-layout-browser",
  "hidden-layout-browser",
  "hierarchy-browser",
  "interaction-regressions",
  "lifecycle-browser",
];
for (const name of tests) {
  console.log("Running " + name);
  const result = spawnSync(process.execPath, ["tests/" + name + ".mjs"], {
    stdio: "inherit",
    env: process.env,
    windowsHide: true,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
