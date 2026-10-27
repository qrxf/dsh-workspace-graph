import type {
  Filters,
  LayoutDocument,
  LayoutPatch,
  Point,
  ViewState,
} from "./types.ts";
import { DEFAULT_THEME, normalizeColor } from "./theme.ts";
export const emptyLayout = (): LayoutDocument => ({
  schemaVersion: 1,
  revision: 0,
  positions: {},
  collapsed: [],
  views: {},
});
const safeKey = (key: string) =>
  !["__proto__", "prototype", "constructor"].includes(key) && key.length < 1000;
const record = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === "object" && !Array.isArray(v);
const point = (v: unknown): v is Point =>
  record(v) &&
  typeof v.x === "number" &&
  typeof v.y === "number" &&
  Number.isFinite(v.x) &&
  Number.isFinite(v.y) &&
  Math.abs(v.x) < 1e8 &&
  Math.abs(v.y) < 1e8;
function validFilters(v: unknown): v is Filters {
  return (
    record(v) &&
    typeof v.workspace === "string" &&
    (v.recency === undefined ||
      ["all", "recent", "early", "unknown"].includes(String(v.recency))) &&
    (v.frequency === undefined ||
      ["all", "frequent", "infrequent", "accumulating"].includes(
        String(v.frequency),
      )) &&
    (v.statuses === undefined ||
      (Array.isArray(v.statuses) &&
        v.statuses.every((s) =>
          ["running", "waiting", "unread", "idle", "unknown"].includes(s),
        ))) &&
    ["all", "running", "waiting", "unread", "idle", "unknown"].includes(
      String(v.status),
    ) &&
    ["all", "workspace", "session"].includes(String(v.kind)) &&
    typeof v.archived === "boolean" &&
    typeof v.query === "string"
  );
}
function validate(v: unknown): asserts v is LayoutDocument {
  if (
    !record(v) ||
    v.schemaVersion !== 1 ||
    !Number.isSafeInteger(v.revision) ||
    Number(v.revision) < 0 ||
    !record(v.positions) ||
    !Array.isArray(v.collapsed) ||
    !record(v.views)
  )
    throw new Error("Invalid layout format or unsupported version");
  for (const [key, value] of Object.entries(v.positions))
    if (!safeKey(key) || !point(value))
      throw new Error("Invalid layout position");
  if (!v.collapsed.every((id) => typeof id === "string" && safeKey(id)))
    throw new Error("Invalid layout collapse state");
  for (const [key, value] of Object.entries(v.views)) {
    if (!safeKey(key) || !record(value)) throw new Error("Invalid layout view");
    if (
      value.viewport !== undefined &&
      (!point(value.viewport) ||
        typeof (value.viewport as unknown as { zoom: unknown }).zoom !==
          "number" ||
        !Number.isFinite(
          (value.viewport as unknown as { zoom: number }).zoom,
        ) ||
        (value.viewport as unknown as { zoom: number }).zoom < 0.1 ||
        (value.viewport as unknown as { zoom: number }).zoom > 3)
    )
      throw new Error("Invalid layout viewport");
    if (value.filters !== undefined && !validFilters(value.filters))
      throw new Error("Invalid layout filters");
  }
}
export class LayoutRepository {
  private positions: Record<string, Point> = {};
  private viewports: Record<string, ViewState> = {};
  private revision = 0;
  private storedRevision?: number;
  storage: Pick<Storage, "getItem" | "setItem">;
  key: string;
  constructor(storage: Pick<Storage, "getItem" | "setItem">, key: string) {
    this.storage = storage;
    this.key = key;
  }
  private loadStored(): LayoutDocument {
    const raw = this.storage.getItem(this.key);
    if (raw === null) return emptyLayout();
    let value: unknown;
    try {
      value = JSON.parse(raw);
    } catch {
      throw new Error("Invalid layout JSON");
    }
    validate(value);
    const settings: Record<string, unknown> = record(value.settings)
      ? value.settings
      : {};
    const manualSummaries = Object.fromEntries(
      Object.entries(
        record(settings.manualSummaries) ? settings.manualSummaries : {},
      )
        .filter(([id, text]) => safeKey(id) && typeof text === "string")
        .map(([id, text]) => [id, (text as string).slice(0, 4000)]),
    );
    const usage = Object.fromEntries(
      Object.entries(record(settings.usage) ? settings.usage : {})
        .filter(
          ([id, v]) =>
            safeKey(id) &&
            record(v) &&
            Number.isFinite(v.since) &&
            Number(v.since) >= 0 &&
            Array.isArray(v.visits) &&
            v.visits.every(
              (t) => typeof t === "number" && Number.isFinite(t) && t >= 0,
            ),
        )
        .map(([id, v]) => [
          id,
          {
            since: (v as { since: number }).since,
            visits: (v as { visits: number[] }).visits
              .slice(-2000)
              .sort((a, b) => a - b),
          },
        ]),
    );
    value.settings = {
      theme: normalizeColor(settings.theme) ?? DEFAULT_THEME,
      reducedMotion: settings.reducedMotion === true,
      pinned: Array.isArray(settings.pinned)
        ? settings.pinned.filter(
            (id): id is string => typeof id === "string" && safeKey(id),
          )
        : [],
      usage,
      manualSummaries,
    };
    return value;
  }
  load(): LayoutDocument {
    const stored = this.loadStored();
    if (
      this.storedRevision !== undefined &&
      stored.revision !== this.storedRevision
    )
      this.revision++;
    this.storedRevision = stored.revision;
    const views = Object.fromEntries(
      Object.entries(stored.views).map(([id, v]) => [
        id,
        { filters: v.filters },
      ]),
    );
    for (const [id, view] of Object.entries(this.viewports))
      views[id] = { ...views[id], ...view };
    return {
      ...stored,
      revision: this.revision,
      positions: this.positions,
      views,
    };
  }
  initializePositions(positions: Record<string, Point>): LayoutDocument {
    const current = this.load();
    const missing = Object.fromEntries(
      Object.entries(positions).filter(([id]) => !current.positions[id]),
    );
    return Object.keys(missing).length
      ? this.savePatch({ positions: missing }, current.revision)
      : current;
  }
  reset(expectedRaw: string | null): LayoutDocument {
    if (this.storage.getItem(this.key) !== expectedRaw)
      throw new Error(
        "Layout conflict: another window changed the saved layout",
      );
    const next = emptyLayout();
    this.storage.setItem(this.key, JSON.stringify(next));
    this.positions = {};
    this.viewports = {};
    this.revision = 0;
    this.storedRevision = 0;
    return next;
  }
  previewBackup(raw: string): LayoutDocument {
    if (raw.length > 5 * 1024 * 1024) throw new Error("备份超过 5 MB");
    return new LayoutRepository(
      { getItem: () => raw, setItem() {} },
      this.key,
    ).loadStored();
  }
  importBackup(raw: string, expectedRaw: string | null): LayoutDocument {
    const imported = this.previewBackup(raw);
    if (this.storage.getItem(this.key) !== expectedRaw)
      throw new Error(
        "Layout conflict: another window changed the saved layout",
      );
    // Write first: quota/permission failures must leave the runtime untouched.
    let previousRevision = this.storedRevision ?? 0;
    try {
      previousRevision = Math.max(previousRevision, this.loadStored().revision);
    } catch {
      /* Explicit import can recover malformed existing storage. */
    }
    const storedRevision = previousRevision + 1;
    this.storage.setItem(
      this.key,
      JSON.stringify({
        ...imported,
        revision: storedRevision,
        positions: {},
        views: Object.fromEntries(
          Object.entries(imported.views).map(([id, v]) => [
            id,
            { filters: v.filters },
          ]),
        ),
      }),
    );
    this.positions = imported.positions;
    this.viewports = Object.fromEntries(
      Object.entries(imported.views)
        .filter(([, v]) => v.viewport)
        .map(([id, v]) => [id, { viewport: v.viewport }]),
    );
    this.storedRevision = storedRevision;
    this.revision++;
    return this.load();
  }
  savePatch(patch: LayoutPatch, expectedRevision: number): LayoutDocument {
    const current = this.load();
    const durable =
      patch.settings !== undefined ||
      patch.collapsed !== undefined ||
      Object.values(patch.views ?? {}).some((v) => v.filters !== undefined);
    if (durable && current.revision !== expectedRevision)
      throw new Error("Layout conflict: another window saved a newer layout");
    const views: Record<string, ViewState> = { ...current.views };
    for (const [scope, view] of Object.entries(patch.views ?? {}))
      views[scope] = { ...views[scope], ...view };
    const next: LayoutDocument = {
      schemaVersion: 1,
      revision: current.revision + 1,
      positions: { ...current.positions, ...patch.positions },
      collapsed: patch.collapsed ?? current.collapsed,
      views,
      settings: {
        theme: DEFAULT_THEME,
        reducedMotion: false,
        ...current.settings,
        ...patch.settings,
      },
    };
    validate(next);
    if (durable) {
      const stored: LayoutDocument = {
        ...next,
        revision: (this.storedRevision ?? 0) + 1,
        positions: {},
        views: Object.fromEntries(
          Object.entries(views).map(([id, v]) => [id, { filters: v.filters }]),
        ),
      };
      this.storage.setItem(this.key, JSON.stringify(stored));
      this.storedRevision = stored.revision;
    }
    this.positions = next.positions;
    this.viewports = Object.fromEntries(
      Object.entries(views)
        .filter(([, v]) => v.viewport)
        .map(([id, v]) => [id, { viewport: v.viewport }]),
    );
    this.revision = next.revision;
    return next;
  }
}
