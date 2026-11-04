import { test } from "node:test";
import assert from "node:assert/strict";
import { memoryAccessAllowed } from "../src/memory-rpc.ts";
test("native memory service refuses non-owner, absent, cancelled and disposed peers", () => {
  for (const peer of [
    { principal: { kind: "guest" }, signal: new AbortController().signal },
    { principal: { kind: "owner" }, signal: AbortSignal.abort() },
  ]) {
    assert.equal(
      memoryAccessAllowed(peer, new AbortController().signal),
      false,
    );
  }
  const owner = {
    principal: { kind: "owner" },
    signal: new AbortController().signal,
  };
  assert.equal(memoryAccessAllowed(owner, owner.signal), true);
  assert.equal(memoryAccessAllowed(owner, AbortSignal.abort()), false);
  assert.equal(memoryAccessAllowed(undefined, owner.signal), false);
});
