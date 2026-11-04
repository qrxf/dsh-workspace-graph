// Real DSH Gateway and Client Connection, with an in-process carrier and no HTTP server.
// Exercises the same /api unary path selected by the Electron/worker shell.
import assert from "node:assert/strict";
import { Context } from "@deepseek-ai/cordis";
import Registry from "@deepseek-ai/dsh-typert-registry";
import Gateway from "@deepseek-ai/dsh-api-gateway";
import { installConnection } from "@deepseek-ai/dsh-client-connection/client";
import { DatabaseSync } from "node:sqlite";
import { mkdtemp, mkdir } from "node:fs/promises";
import { join } from "node:path";
import * as graph from "../dist/host.js";
await mkdir("artifacts", { recursive: true });
const home = await mkdtemp(join(process.cwd(), "artifacts", "ipc-memory-"));
await mkdir(join(home, "evolve"));
const db = new DatabaseSync(join(home, "evolve", "memory.db"));
db.exec(`CREATE TABLE memories (workspace_id TEXT,id TEXT,title TEXT,description TEXT,type TEXT,body TEXT,status TEXT,origin_workspace TEXT,source_session TEXT);
CREATE TABLE memory_usage (workspace_id TEXT,memory_id TEXT,use_count INTEGER,last_used_at TEXT);`);
db.prepare("INSERT INTO memories VALUES (?,?,?,?,?,?,?,?,?)").run(
  "",
  "shared",
  "IPC memory",
  "fixture",
  "reference",
  "IPC body",
  "active",
  "/B",
  null,
);
db.prepare("INSERT INTO memory_usage VALUES (?,?,?,?)").run(
  "/A",
  "shared",
  1,
  "2026-11-03T12:00:00Z",
);
db.close();
const previousHome = process.env.DSH_HOME;
process.env.DSH_HOME = home;
const host = new Context(),
  client = new Context();
let graphFiber, gatewayFiber, registryFiber;
try {
  host.provide("workspaceRegistry", {
    list: () => [
      { id: "a", path: "/A", sessionIds: [] },
      { id: "b", path: "/B", sessionIds: [] },
    ],
  });
  host.provide("remoteAccess", {
    decide: () => ({ kind: "deny", reason: "no-allow" }),
  });
  registryFiber = await host.plugin(Registry);
  graphFiber = await host.plugin(graph);
  gatewayFiber = await host.plugin(Gateway);
  const owner = {
    id: "fixture-owner",
    ctx: host,
    principal: { kind: "owner" },
    signal: new AbortController().signal,
    interactions: "none",
    dispose: async () => {},
  };
  installConnection(client, {
    interactions: "none",
    transport: {
      ownsHost: true,
      rpc: {
        call: async (channel, endpoint, payload, signal) => {
          assert.equal(channel, "/api");
          const [namespace, method] = endpoint.split("/");
          return {
            ok: true,
            value: await host.typertGateway.invoke({
              namespace,
              method,
              args: payload.args,
              signal,
              peer: owner,
            }),
          };
        },
      },
    },
  });
  const snapshot = await client.connection.rpc.call(
    "/api",
    "workspaceGraphMemory/snapshot",
    { args: {} },
  );
  assert.equal(snapshot.value.status, "available");
  assert.deepEqual(
    snapshot.value.links.map((l) => [l.readerId, l.sourceId]),
    [["a", "b"]],
  );
  const body = await client.connection.rpc.call(
    "/api",
    "workspaceGraphMemory/body",
    { args: { workspaceId: "a", id: "shared" } },
  );
  assert.equal(body.value, "IPC body");
  await assert.rejects(
    host.typertGateway.invoke({
      namespace: "workspaceGraphMemory",
      method: "snapshot",
      args: {},
      peer: { ...owner, principal: { kind: "guest" } },
    }),
  );
  await assert.rejects(
    host.typertGateway.invoke({
      namespace: "workspaceGraphMemory",
      method: "body",
      args: { workspaceId: "unknown", id: "shared" },
      peer: owner,
    }),
  );
  await graphFiber.dispose();
  await assert.rejects(
    host.typertGateway.invoke({
      namespace: "workspaceGraphMemory",
      method: "snapshot",
      args: {},
      peer: owner,
    }),
  );
  console.log(
    "PASS native in-process Connection/Gateway: snapshot, body, access denial, unknown workspace and plugin disposal; no webServer/fetch",
  );
} finally {
  await graphFiber?.dispose();
  await gatewayFiber?.dispose();
  await registryFiber?.dispose();
  if (previousHome === undefined) delete process.env.DSH_HOME;
  else process.env.DSH_HOME = previousHome;
}
