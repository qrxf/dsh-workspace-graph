import { test } from "node:test";
import assert from "node:assert/strict";
import {
  recency,
  frequency,
  recordVisit,
  observeSessions,
} from "../src/activity.ts";
const day = 86400000,
  now = 40 * day;
test("activity age and usage are independent, with explicit seven-day boundary and unknown time", () => {
  assert.equal(recency(now - 7 * day, now), "recent");
  assert.equal(recency(now - 7 * day - 1, now), "early");
  assert.equal(recency(NaN, now), "unknown");
  assert.equal(
    frequency(
      { since: 0, visits: [now - 1, now - 2, now - 3, now - 4, now - 5] },
      now,
    ),
    "frequent",
  );
  assert.equal(frequency(undefined, now), "accumulating");
  assert.equal(
    frequency({ since: now - day, visits: [] }, now),
    "accumulating",
  );
  assert.equal(
    frequency({ since: 0, visits: [now - 30 * day - 1] }, now),
    "infrequent",
  );
});
test("observing a session establishes coverage without inventing a visit", () => {
  const a = observeSessions({}, ["a"], now);
  assert.deepEqual(a.a, { since: now, visits: [] });
  assert.equal(frequency(a.a, now), "accumulating");
  assert.equal(frequency(a.a, now + 31 * day), "infrequent");
  assert.deepEqual(observeSessions(a, ["a"], now + day), a);
});
test("only explicit visits count, duplicate entries within thirty minutes do not, rolling visits survive reload", () => {
  const a = recordVisit(undefined, now),
    b = recordVisit(a, now + 29 * 60000);
  assert.deepEqual(b.visits, [now]);
  assert.deepEqual(recordVisit(b, now + 30 * 60000).visits, [
    now,
    now + 30 * 60000,
  ]);
  assert.deepEqual(
    recordVisit({ since: 0, visits: [1, now - day] }, now).visits,
    [now - day, now],
  );
});
