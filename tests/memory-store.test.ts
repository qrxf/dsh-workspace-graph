import { test } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import { mkdtempSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { readMemorySnapshot, readMemoryBody } from "../src/memory-store.ts";

const workspaces = [
  { id: "a", path: "D:\\A", sessionIds: ["sa"] },
  { id: "b", path: "D:\\B", sessionIds: ["sb"] },
  { id: "c", path: "/Case", sessionIds: [] },
  { id: "d", path: "/case", sessionIds: [] },
];
function fixture() {
  const file = join(mkdtempSync(join(tmpdir(), "wg-memory-")), "memory.db");
  const db = new DatabaseSync(file);
  db.exec(`CREATE TABLE memories (workspace_id TEXT, id TEXT, title TEXT, description TEXT, type TEXT, body TEXT, status TEXT, origin_workspace TEXT, source_session TEXT, updated_at TEXT);
    CREATE TABLE memory_usage (workspace_id TEXT, memory_id TEXT, use_count INTEGER, last_used_at TEXT);
    CREATE TABLE injection_log (workspace_id TEXT, memory_ids TEXT);`);
  const memory = (
    root: string,
    id: string,
    origin: string | null = null,
    session: string | null = null,
    status = "active",
  ) =>
    db
      .prepare("INSERT INTO memories VALUES (?,?,?,?,?,?,?,?,?,?)")
      .run(
        root,
        id,
        id + " title",
        "description",
        "reference",
        "body:" + id,
        status,
        origin,
        session,
        "2026-11-03",
      );
  const use = (root: string, id: string, count = 1) =>
    db
      .prepare("INSERT INTO memory_usage VALUES (?,?,?,?)")
      .run(root, id, count, "2026-11-03T12:00:00Z");
  return { file, db, memory, use };
}
test("actual body reads link reader to origin; injection alone, self and unknown origins do not", () => {
  const f = fixture();
  f.memory("", "shared", "D:/B");
  f.use("D:/A", "shared", 3);
  f.memory("", "index-only", "D:/B");
  f.db
    .prepare("INSERT INTO injection_log VALUES (?,?)")
    .run("D:/A", '["index-only"]');
  f.memory("D:/A", "own");
  f.use("D:/A", "own");
  f.memory("", "unknown");
  f.use("D:/A", "unknown");
  f.memory("", "session-source", null, "sb");
  f.use("D:/A", "session-source", 2);
  f.db.close();
  const before = readFileSync(f.file);
  const s = readMemorySnapshot(f.file, workspaces);
  assert.equal(s.status, "available");
  assert.equal(s.links.length, 1);
  assert.deepEqual(s.links[0], {
    readerId: "a",
    sourceId: "b",
    count: 5,
    lastReadAt: "2026-11-03T12:00:00Z",
    memoryIds: ["session-source", "shared"],
  });
  assert.equal(
    s.items.find((x) => x.workspaceId === "a" && x.id === "shared")?.useCount,
    3,
  );
  assert.equal(
    "body" in s.items[0],
    false,
    "snapshot must not transport bodies",
  );
  assert.equal(
    readMemoryBody(f.file, workspaces, "a", "shared"),
    "body:shared",
  );
  assert.deepEqual(
    readFileSync(f.file),
    before,
    "viewing never changes store or counters",
  );
});
test("local IDs shadow globals, archived promotion pointers do not; directions remain independent", () => {
  const f = fixture();
  f.memory("", "collision", "D:/B");
  f.memory("D:/A", "collision");
  f.use("D:/A", "collision");
  f.memory("", "promoted", "D:/B");
  f.memory("D:/A", "promoted", null, null, "archived");
  f.use("D:/A", "promoted");
  f.memory("", "reverse", "D:/A");
  f.use("D:/B", "reverse");
  f.db.close();
  const s = readMemorySnapshot(f.file, workspaces);
  assert.deepEqual(
    s.links.map((x) => [x.readerId, x.sourceId, x.memoryIds]),
    [
      ["a", "b", ["promoted"]],
      ["b", "a", ["reverse"]],
    ],
  );
  assert.equal(
    s.items.find((x) => x.workspaceId === "a" && x.id === "collision")?.scope,
    "project",
  );
  assert.throws(() =>
    readMemoryBody(f.file, workspaces, "missing", "collision"),
  );
});
test("POSIX case stays distinct; ambiguous duplicate host paths never invent ownership", () => {
  const f = fixture();
  f.memory("", "case", "/Case");
  f.use("/case", "case");
  f.db.close();
  assert.equal(readMemorySnapshot(f.file, workspaces).links[0]?.sourceId, "c");
  assert.equal(
    readMemorySnapshot(f.file, [
      ...workspaces,
      { id: "duplicate", path: "/Case", sessionIds: [] },
    ]).links.length,
    0,
  );
});
test("missing store is not created and incompatible or broken stores degrade", () => {
  const file = join(mkdtempSync(join(tmpdir(), "wg-no-memory-")), "absent.db");
  assert.equal(readMemorySnapshot(file, workspaces).status, "missing");
  assert.equal(existsSync(file), false);
  writeFileSync(file, "broken database");
  assert.equal(readMemorySnapshot(file, workspaces).status, "error");
  const f = fixture();
  f.db.exec("DROP TABLE memory_usage");
  f.db.close();
  assert.equal(readMemorySnapshot(f.file, workspaces).status, "incompatible");
});
test("filesystem root is distinct from the global partition and its local IDs shadow globals", () => {
  const f = fixture();
  f.memory("", "collision", "/Case");
  f.memory("/", "collision");
  f.use("/", "collision");
  f.db.close();
  const snapshot = readMemorySnapshot(f.file, [
    ...workspaces,
    { id: "root", path: "/", sessionIds: [] },
  ]);
  assert.equal(
    snapshot.items.filter(
      (x) => x.workspaceId === "root" && x.id === "collision",
    ).length,
    1,
  );
  assert.equal(snapshot.links.length, 0);
});
test("exact raw partition wins over Windows aliases for metadata, counters and body", () => {
  const f = fixture();
  f.memory("D:/A", "same");
  f.memory("D:\\A", "same");
  f.db
    .prepare("UPDATE memories SET body = ? WHERE workspace_id = ?")
    .run("slash body", "D:/A");
  f.db
    .prepare("UPDATE memories SET body = ? WHERE workspace_id = ?")
    .run("backslash body", "D:\\A");
  f.use("D:/A", "same", 2);
  f.use("D:\\A", "same", 3);
  f.db.close();
  const snapshot = readMemorySnapshot(f.file, workspaces);
  assert.equal(
    snapshot.items.filter((x) => x.workspaceId === "a" && x.id === "same")
      .length,
    1,
  );
  assert.equal(
    snapshot.items.find((x) => x.workspaceId === "a" && x.id === "same")
      ?.useCount,
    3,
  );
  assert.equal(
    readMemoryBody(f.file, workspaces, "a", "same"),
    "backslash body",
  );
});
test("an exact usage partition with no local row must still read the global memory", () => {
  const f = fixture();
  f.memory("D:/A", "same");
  f.memory("", "same", "D:/B");
  f.use("D:\\A", "same", 2);
  f.db.close();
  const snapshot = readMemorySnapshot(f.file, workspaces);
  assert.equal(
    snapshot.items.find((x) => x.workspaceId === "a" && x.id === "same")?.scope,
    "global",
  );
  assert.equal(snapshot.links[0]?.sourceId, "b");
});
test("corrupt scalar metadata degrades instead of transporting objects into React", () => {
  const f = fixture();
  f.memory("D:/A", "bad");
  f.db.prepare("UPDATE memories SET title = ?").run(new Uint8Array([65, 66]));
  f.db.close();
  assert.equal(readMemorySnapshot(f.file, workspaces).status, "error");
});
test("corrupt body values are refused at the storage boundary", () => {
  const f = fixture();
  f.memory("D:/A", "bad");
  f.db.prepare("UPDATE memories SET body = ?").run(new Uint8Array([65, 66]));
  f.db.close();
  assert.throws(() => readMemoryBody(f.file, workspaces, "a", "bad"));
});
