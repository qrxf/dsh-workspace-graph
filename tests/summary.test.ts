import { test } from "node:test";
import assert from "node:assert/strict";
import { SummaryCache, selectSummary } from "../src/summary.ts";
import type { SummaryProvider } from "../src/summary.ts";
const row = (id: string, updatedAt = 1) => ({
  id,
  title: "标题 " + id,
  updatedAt,
});
test("manual summary wins; no provider uses a clearly marked title fallback", async () => {
  const cache = new SummaryCache();
  cache.sync([row("a")]);
  assert.deepEqual(await cache.resolve(row("a"), "手动概括"), {
    text: "手动概括",
    source: "manual",
  });
  assert.deepEqual(await cache.resolve(row("a")), {
    text: "标题 a",
    source: "title",
  });
});
test("UI rejects an old content version even when its activity timestamp is unchanged", () => {
  const next = { ...row("a"), contentVersion: "new" };
  assert.deepEqual(
    selectSummary(next, undefined, {
      id: "a",
      version: "old",
      value: { source: "plugin", text: "旧摘要" },
    }),
    { source: "title", text: "标题 a" },
  );
  assert.deepEqual(
    selectSummary(next, "新手动摘要", {
      id: "a",
      version: "new",
      value: { source: "plugin", text: "插件" },
    }),
    { source: "manual", text: "新手动摘要" },
  );
});
test("provider calls deduplicate and cache by session and content version, empty or failed results fall back", async () => {
  let calls = 0;
  const provider: SummaryProvider = {
    id: "verified",
    read: async (r) => {
      calls++;
      return { ...r, text: r.sessionId === "empty" ? "" : "插件概括" };
    },
  };
  const cache = new SummaryCache(provider);
  cache.sync([row("a"), row("empty")]);
  const [a, b] = await Promise.all([
    cache.resolve(row("a")),
    cache.resolve(row("a")),
  ]);
  assert.equal(calls, 1);
  assert.equal(a.text, "插件概括");
  assert.deepEqual(a, b);
  await cache.resolve(row("a"));
  assert.equal(calls, 1);
  assert.equal((await cache.resolve(row("empty"))).source, "title");
  cache.sync([row("a", 2)]);
  await cache.resolve(row("a", 2));
  assert.equal(calls, 3);
});
test("late old versions, wrong session results and deleted conversations cannot populate the cache", async () => {
  const pending = new Map<string, (v: unknown) => void>();
  const provider: SummaryProvider = {
    id: "async",
    read: (r) =>
      new Promise((resolve) =>
        pending.set(
          r.sessionId + ":" + r.version,
          resolve as (v: unknown) => void,
        ),
      ),
  };
  const cache = new SummaryCache(provider);
  cache.sync([row("a"), row("b")]);
  const a = cache.resolve(row("a")),
    b = cache.resolve(row("b"));
  await Promise.resolve();
  pending.get("b:activity:1")!({
    sessionId: "b",
    version: "activity:1",
    text: "B 概括",
  });
  assert.equal((await b).text, "B 概括");
  cache.sync([row("b")]);
  pending.get("a:activity:1")!({
    sessionId: "a",
    version: "activity:1",
    text: "已删除的 A",
  });
  assert.equal((await a).source, "title");
  cache.sync([row("a", 2)]);
  const wrong = cache.resolve(row("a", 2));
  await Promise.resolve();
  pending.get("a:activity:2")!({
    sessionId: "b",
    version: "activity:2",
    text: "串话",
  });
  assert.equal((await wrong).source, "title");
  cache.dispose();
});
test("timeouts and absent reliable versions do not block title fallback or trigger repeated requests", async () => {
  let calls = 0;
  const cache = new SummaryCache(
    {
      id: "slow",
      read: async () => {
        calls++;
        return new Promise(() => {});
      },
    },
    10,
  );
  cache.sync([row("a"), row("b", 0)]);
  assert.equal((await cache.resolve(row("a"))).source, "title");
  await cache.resolve(row("a"));
  await cache.resolve(row("b", 0));
  assert.equal(calls, 1);
  cache.dispose();
});
