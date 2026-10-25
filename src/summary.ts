import type { SessionRow } from "./types.ts";
export interface SummaryValue {
  text: string;
  source: "manual" | "plugin" | "title";
}
export interface SummaryProvider {
  /** Only supply an adapter whose data permission, version and cost are verified. */
  id: string;
  read(request: {
    sessionId: string;
    version: string;
    signal: AbortSignal;
  }): Promise<{ sessionId: string; version: string; text: string } | undefined>;
}
export const summaryVersion = (row: SessionRow) =>
  row.contentVersion ||
  (Number.isFinite(row.updatedAt) && row.updatedAt > 0
    ? "activity:" + row.updatedAt
    : undefined);
const version = summaryVersion;
const clean = (text: unknown) =>
  typeof text === "string" ? text.trim().slice(0, 4000) : "";
export function titleFallback(row: SessionRow): SummaryValue {
  return { text: clean(row.title) || "未命名对话", source: "title" };
}
export function selectSummary(
  row: SessionRow,
  manual?: string,
  resolved?: { id: string; version: string | undefined; value: SummaryValue },
): SummaryValue {
  const text = clean(manual);
  if (text) return { text, source: "manual" };
  return resolved?.id === row.id &&
    resolved.version === version(row) &&
    resolved.value.source === "plugin"
    ? resolved.value
    : titleFallback(row);
}
export const summarySourceLabels = {
  manual: "手动概括",
  plugin: "插件摘要",
  title: "原标题（未接入自动概括）",
};
export class SummaryCache {
  private versions = new Map<string, string | undefined>();
  private cache = new Map<string, SummaryValue>();
  private requests = new Map<
    string,
    {
      controller: AbortController;
      promise: Promise<SummaryValue>;
      id: string;
      version: string;
    }
  >();
  private provider: SummaryProvider | undefined;
  private timeout: number;
  constructor(provider?: SummaryProvider, timeout = 2500) {
    this.provider = provider;
    this.timeout = timeout;
  }
  sync(rows: readonly SessionRow[]) {
    this.versions = new Map(rows.map((row) => [row.id, version(row)]));
    for (const [key, r] of this.requests)
      if (!this.versions.has(r.id) || this.versions.get(r.id) !== r.version) {
        r.controller.abort();
        this.requests.delete(key);
      }
    const valid = new Set(
      rows.map((row) => JSON.stringify([row.id, version(row)])),
    );
    for (const key of this.cache.keys())
      if (!valid.has(key)) this.cache.delete(key);
  }
  async resolve(row: SessionRow, manual?: string): Promise<SummaryValue> {
    const hand = clean(manual);
    if (hand) return { text: hand, source: "manual" };
    const fallback = titleFallback(row),
      v = version(row);
    if (
      !v ||
      !this.provider ||
      !this.versions.has(row.id) ||
      this.versions.get(row.id) !== v
    )
      return fallback;
    const key = JSON.stringify([row.id, v]),
      cached = this.cache.get(key);
    if (cached) return cached.source === "title" ? fallback : cached;
    const existing = this.requests.get(key);
    if (existing) return existing.promise;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    const aborted = new Promise<never>((_resolve, reject) => {
      controller.signal.addEventListener(
        "abort",
        () => reject(new Error("Summary cancelled")),
        { once: true },
      );
      timer = setTimeout(() => controller.abort(), this.timeout);
    });
    const promise = Promise.race([
      Promise.resolve().then(() =>
        this.provider!.read({
          sessionId: row.id,
          version: v,
          signal: controller.signal,
        }),
      ),
      aborted,
    ])
      .then((result) => {
        const text = clean(result?.text);
        const value: SummaryValue =
          result?.sessionId === row.id && result.version === v && text
            ? { text, source: "plugin" }
            : fallback;
        if (!controller.signal.aborted && this.versions.get(row.id) === v) {
          this.cache.set(key, value);
          if (this.cache.size > 500)
            this.cache.delete(this.cache.keys().next().value!);
        }
        return this.versions.get(row.id) === v ? value : fallback;
      })
      .catch(() => {
        if (this.versions.get(row.id) === v) this.cache.set(key, fallback);
        return fallback;
      })
      .finally(() => {
        clearTimeout(timer!);
        if (this.requests.get(key)?.controller === controller)
          this.requests.delete(key);
      });
    this.requests.set(key, { controller, promise, id: row.id, version: v });
    return promise;
  }
  dispose() {
    for (const r of this.requests.values()) r.controller.abort();
    this.requests.clear();
    this.cache.clear();
  }
}
