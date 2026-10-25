import { test } from "node:test";
import assert from "node:assert/strict";
import { toCatalog } from "../src/adapter.ts";
import { projectGraph } from "../src/model.ts";
import { defaultFilters } from "../src/types.ts";
import { emptyLayout } from "../src/layout.ts";
test("all mainView sessions including unlisted retained rows are preserved", () => {
  const cat = toCatalog(
    { phase: "ready" },
    {
      phase: "ready",
      ids: ["a"],
      byId: {
        a: { id: "a", updatedAt: 1, retainedBy: { mainView: 1 } },
        b: { id: "b", updatedAt: 1, retainedBy: { mainView: 2 } },
        cached: { id: "cached", updatedAt: 1, retainedBy: {} },
      },
    },
    new Map(),
  );
  assert.deepEqual(cat.currentSessionIds, ["a", "b"]);
  assert.deepEqual(
    cat.sessions.map((s) => s.id),
    ["a", "b"],
  );
});
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
test("mainView ownership identifies current session and disconnection clears stale running facts", () => {
  const s = {
    ids: ["a", "b"],
    byId: {
      a: {
        id: "a",
        displayTitle: "A",
        updatedAt: 42,
        running: true,
        retainedBy: { mainView: 1 },
      },
      b: {
        id: "b",
        displayTitle: "B",
        updatedAt: 43,
        running: true,
        retainedBy: {},
      },
    },
    phase: "ready",
  };
  assert.equal(
    toCatalog({ phase: "ready" }, s, new Map()).currentSessionId,
    "a",
  );
  assert.equal(
    toCatalog({ phase: "ready" }, { ...s, phase: "error" }, new Map())
      .sessions[0].running,
    undefined,
  );
});
test("verified current retained outside host ids stays visible, other unlisted rows do not", () => {
  const c = toCatalog(
    { phase: "ready", items: [] },
    {
      phase: "ready",
      ids: [],
      byId: {
        child: {
          id: "child",
          title: "Child",
          origin: "subagent",
          updatedAt: 1,
          running: false,
          retainedBy: { mainView: 1 },
        },
        other: {
          id: "other",
          title: "Other",
          origin: "subagent",
          updatedAt: 1,
          retainedBy: {},
        },
      },
    },
    new Map(),
  );
  assert.equal(c.currentSessionId, "child");
  assert.deepEqual(
    c.sessions.map((s) => s.id),
    ["child"],
  );
  assert.ok(
    projectGraph(c, defaultFilters, emptyLayout()).nodes.find(
      (n) => n.id === "session:child",
    )?.data.current,
  );
});
