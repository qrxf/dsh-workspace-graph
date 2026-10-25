import type { UsageHistory } from "./types.ts";
export const DAY = 86400000;
export function observeSessions(
  usage: Record<string, UsageHistory>,
  ids: readonly string[],
  now = Date.now(),
): Record<string, UsageHistory> {
  const next = { ...usage };
  for (const id of ids)
    if (!Object.hasOwn(next, id))
      Object.defineProperty(next, id, {
        value: { since: now, visits: [] },
        enumerable: true,
        writable: true,
        configurable: true,
      });
  return next;
}
export function recency(
  updatedAt: number,
  now = Date.now(),
): "recent" | "early" | "unknown" {
  if (!Number.isFinite(updatedAt) || updatedAt <= 0 || updatedAt > now + 60000)
    return "unknown";
  return now - updatedAt <= 7 * DAY ? "recent" : "early";
}
export function frequency(
  record: UsageHistory | undefined,
  now = Date.now(),
): "frequent" | "infrequent" | "accumulating" {
  if (!record) return "accumulating";
  const visits = record.visits.filter((t) => t >= now - 30 * DAY && t <= now);
  if (visits.length >= 5) return "frequent";
  return now - record.since >= 30 * DAY ? "infrequent" : "accumulating";
}
export function recordVisit(
  record: UsageHistory | undefined,
  now = Date.now(),
): UsageHistory {
  const visits = (record?.visits ?? []).filter(
    (t) => t >= now - 30 * DAY && t <= now,
  );
  if (!visits.length || now - visits[visits.length - 1] >= 30 * 60000)
    visits.push(now);
  return { since: record?.since ?? now, visits };
}
export const recencyLabels = {
  recent: "近期",
  early: "早期",
  unknown: "时间未知",
};
export const frequencyLabels = {
  frequent: "常用",
  infrequent: "不常用",
  accumulating: "使用记录积累中",
};
