import { test } from "node:test";
import assert from "node:assert/strict";
import { toCatalog } from "../src/adapter.ts";
test("reads host-list membership, stable workspace ids and runtime interaction precedence without retaining sessions", () => {
  const cat = toCatalog(
    {
      items: [
        { workspaceId: "w", title: "Project", path: "/p", sessionIds: ["a"] },
      ],
      archivedSessionIds: ["z"],
      phase: "ready",
      state: "idle",
      error: null,
    },
    {
      ids: ["a"],
      byId: {
        a: {
          id: "a",
          displayTitle: "A",
          running: true,
          blank: false,
          updatedAt: 42,
        },
        extra: {
          id: "extra",
          displayTitle: "Not listed",
          running: false,
          blank: false,
          updatedAt: 1,
        },
      },
      phase: "ready",
    },
    new Map([
      [
        "a",
        {
          running: true,
          pendingInteraction: { kind: "approval", key: "q", sessionId: "a" },
          completionUnread: false,
        },
      ],
    ]),
  );
  assert.equal(cat.sessions.length, 1);
  assert.equal(cat.sessions[0].pending, true);
  assert.equal(cat.workspaces[0].id, "w");
  assert.deepEqual(cat.archivedSessionIds, ["z"]);
  assert.equal(cat.loading, false);
});
