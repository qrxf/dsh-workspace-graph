import { mkdtemp, writeFile, readFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import assert from "node:assert/strict";

if (!process.env.npm_execpath)
  throw new Error("Run through npm run test:package");
const metadata = JSON.parse(await readFile("package.json", "utf8"));
const tarball = resolve(metadata.name + "-" + metadata.version + ".tgz");
// Outside the source tree so its devDependencies cannot mask missing runtime imports.
const home = await mkdtemp(join(tmpdir(), "workspace-graph-package-"));
const install = spawnSync(
  process.execPath,
  [
    process.env.npm_execpath,
    "install",
    "--prefix",
    home,
    tarball,
    "--omit=dev",
    "--ignore-scripts",
    "--no-audit",
    "--fetch-retries=0",
    "--fetch-timeout=20000",
  ],
  { windowsHide: true, encoding: "utf8" },
);
assert.equal(install.status, 0, install.stdout + install.stderr);
const packageRoot = join(home, "node_modules", metadata.name);
const load = spawnSync(
  process.execPath,
  [
    "--input-type=module",
    "-e",
    `const plugin = await import(${JSON.stringify(pathToFileURL(join(packageRoot, "dist", "host.js")).href)}); if (typeof plugin.apply !== "function") throw new Error("missing host entry");`,
  ],
  { cwd: home, windowsHide: true, encoding: "utf8" },
);
assert.equal(load.status, 0, load.stdout + load.stderr);
await mkdir("artifacts", { recursive: true });
await writeFile(
  "artifacts/package-fixture.json",
  JSON.stringify({ packageRoot }, null, 2),
);
console.log(
  "PASS production tarball install and host import outside source tree; fixture: artifacts/package-fixture.json",
);
