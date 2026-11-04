var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// src/host.ts
import {
  Remote,
  RemoteError,
  TypertRemoteService
} from "@deepseek-ai/dsh-typert-protocol";
import { join } from "node:path";
import { homedir } from "node:os";

// src/memory-rpc.ts
var MEMORY_NAMESPACE = "workspaceGraphMemory";
function memoryAccessAllowed(peer, signal) {
  return !!peer && peer.principal.kind === "owner" && !peer.signal.aborted && !signal.aborted;
}

// src/memory-store.ts
import { createRequire } from "node:module";
import { existsSync } from "node:fs";
var pathKey = (path) => (/^[a-z]:[/\\]/i.test(path) || path.startsWith("\\\\") ? path.replaceAll("\\", "/") : path).replace(/\/+$/, "") || (path.startsWith("/") ? "/" : "");
function uniqueIndex(rows, key) {
  const index = /* @__PURE__ */ new Map();
  for (const row of rows)
    for (const value of key(row))
      index.set(value, index.has(value) ? void 0 : row);
  return index;
}
function open(file) {
  const { DatabaseSync } = createRequire(import.meta.url)(
    "node:sqlite"
  );
  const db = new DatabaseSync(file, { readOnly: true });
  db.exec("PRAGMA query_only = ON; BEGIN");
  return db;
}
function readRows(db) {
  const rows = db.prepare(
    "SELECT workspace_id,id,title,description,type,status,origin_workspace,source_session FROM memories"
  ).all();
  if (!rows.every(
    (row) => [
      row.workspace_id,
      row.id,
      row.title,
      row.description,
      row.type,
      row.status
    ].every((value) => typeof value === "string") && [row.origin_workspace, row.source_session].every(
      (value) => value === null || typeof value === "string"
    )
  ))
    throw new Error("Invalid memory metadata");
  return rows;
}
function readUsage(db) {
  const rows = db.prepare(
    "SELECT workspace_id,memory_id,use_count,last_used_at FROM memory_usage WHERE use_count > 0"
  ).all();
  if (!rows.every(
    (row) => typeof row.workspace_id === "string" && typeof row.memory_id === "string" && Number.isSafeInteger(row.use_count) && row.use_count > 0 && (row.last_used_at === null || typeof row.last_used_at === "string")
  ))
    throw new Error("Invalid memory usage");
  return rows;
}
function partition(path, rows, usages) {
  const roots = /* @__PURE__ */ new Set([
    ...rows.map((row) => row.workspace_id),
    ...usages.map((row) => row.workspace_id)
  ]);
  if (roots.has(path)) return path;
  const aliases = [...roots].filter(
    (root) => root !== "" && pathKey(root) === pathKey(path)
  );
  return aliases.length === 1 ? aliases[0] : path;
}
function visible(rows, path) {
  const local = rows.filter(
    (r) => r.workspace_id === path && r.status !== "archived"
  );
  const shadowed = new Set(local.map((r) => r.id));
  return [
    ...local,
    ...rows.filter(
      (r) => r.workspace_id === "" && r.status !== "archived" && !shadowed.has(r.id)
    )
  ].filter((r) => r.status === "active");
}
function readMemorySnapshot(file, workspaces) {
  if (!existsSync(file))
    return {
      status: "missing",
      message: "\u5C1A\u65E0\u8BB0\u5FC6\u6570\u636E\u5E93\uFF1B\u5728\u6B64\u5BBF\u4E3B\u542F\u7528 dsh-continual-evolve \u540E\u53EF\u663E\u793A\u8BB0\u5FC6\u3002",
      items: [],
      links: []
    };
  let db;
  try {
    db = open(file);
    const columns = (table) => new Set(
      db.prepare("PRAGMA table_info(" + table + ")").all().map((r) => r.name)
    );
    const memoryColumns = columns("memories"), usageColumns = columns("memory_usage");
    if (![
      "workspace_id",
      "id",
      "title",
      "description",
      "type",
      "status",
      "origin_workspace",
      "source_session"
    ].every((x) => memoryColumns.has(x)) || !["workspace_id", "memory_id", "use_count", "last_used_at"].every(
      (x) => usageColumns.has(x)
    ))
      return {
        status: "incompatible",
        message: "\u8BB0\u5FC6\u6570\u636E\u5E93\u7ED3\u6784\u4E0D\u517C\u5BB9\uFF1B\u8BF7\u66F4\u65B0 dsh-continual-evolve\u3002",
        items: [],
        links: []
      };
    const rows = readRows(db);
    const usages = readUsage(db);
    const paths = uniqueIndex(workspaces, (w) => [pathKey(w.path)]);
    const sessions = uniqueIndex(workspaces, (w) => w.sessionIds);
    const items = [], links = /* @__PURE__ */ new Map();
    for (const workspace of workspaces) {
      if (paths.get(pathKey(workspace.path)) !== workspace) continue;
      const root = partition(workspace.path, rows, usages);
      const usage = new Map(
        usages.filter((u) => u.workspace_id === root).map((u) => [u.memory_id, u])
      );
      for (const row of visible(rows, root)) {
        const source = row.workspace_id !== "" ? workspace : row.origin_workspace ? paths.get(pathKey(row.origin_workspace)) : row.source_session ? sessions.get(row.source_session) : void 0;
        const used = usage.get(row.id);
        const item = {
          workspaceId: workspace.id,
          id: row.id,
          title: row.title,
          description: row.description,
          type: row.type,
          scope: row.workspace_id === "" ? "global" : "project",
          ...source ? { sourceWorkspaceId: source.id } : {},
          useCount: used?.use_count ?? 0,
          lastUsedAt: used?.last_used_at ?? null
        };
        items.push(item);
        if (!used || !source || source.id === workspace.id) continue;
        const key = JSON.stringify([workspace.id, source.id]);
        const link = links.get(key) ?? {
          readerId: workspace.id,
          sourceId: source.id,
          count: 0,
          lastReadAt: "",
          memoryIds: []
        };
        link.count += used.use_count;
        if ((used.last_used_at ?? "") > link.lastReadAt)
          link.lastReadAt = used.last_used_at;
        link.memoryIds.push(row.id);
        links.set(key, link);
      }
    }
    for (const link of links.values()) link.memoryIds.sort();
    return { status: "available", items, links: [...links.values()] };
  } catch {
    return {
      status: "error",
      message: "\u65E0\u6CD5\u8BFB\u53D6\u8BB0\u5FC6\u6570\u636E\u5E93\uFF1B\u56FE\u8C31\u4ECD\u53EF\u4F7F\u7528\uFF0C\u8BF7\u7A0D\u540E\u5237\u65B0\u3002",
      items: [],
      links: []
    };
  } finally {
    db?.close();
  }
}
function readMemoryBody(file, workspaces, workspaceId, id) {
  const workspace = workspaces.find((w) => w.id === workspaceId);
  if (!workspace || !id || id.length > 512)
    throw new Error("\u65E0\u6548\u7684\u5DE5\u4F5C\u533A\u6216\u8BB0\u5FC6\u6807\u8BC6");
  const db = open(file);
  try {
    const rows = readRows(db);
    const root = partition(workspace.path, rows, readUsage(db));
    const row = visible(rows, root).find((r) => r.id === id);
    if (!row) throw new Error("\u8BB0\u5FC6\u5DF2\u79FB\u9664\u6216\u5F53\u524D\u5DE5\u4F5C\u533A\u4E0D\u53EF\u89C1");
    const result = db.prepare(
      "SELECT body FROM memories WHERE workspace_id = ? AND id = ? AND status = 'active'"
    ).get(row.workspace_id, row.id);
    if (!result || typeof result.body !== "string")
      throw new Error("\u8BB0\u5FC6\u6B63\u6587\u635F\u574F\u6216\u5DF2\u79FB\u9664");
    return result.body;
  } finally {
    db.close();
  }
}

// src/host.ts
var _body_dec, _snapshot_dec, _a, _init;
var GraphMemoryService = class extends (_a = TypertRemoteService, _snapshot_dec = [Remote], _body_dec = [Remote], _a) {
  constructor(ctx) {
    super(ctx, MEMORY_NAMESPACE);
    __runInitializers(_init, 5, this);
    __publicField(this, "file");
    this.file = join(
      process.env.DSH_HOME?.trim() || join(homedir(), ".dsh"),
      "evolve",
      "memory.db"
    );
  }
  workspaces(signal) {
    const context = this.ctx;
    const peer = context.invocation?.peer;
    if (!memoryAccessAllowed(peer, signal))
      throw new RemoteError(
        "remote-access/denied",
        "\u8BB0\u5FC6\u8BE6\u60C5\u4EC5\u5BBF\u4E3B\u6240\u6709\u8005\u53EF\u8BBF\u95EE",
        { action: MEMORY_NAMESPACE, reason: "owner-only" }
      );
    return context.workspaceRegistry.list();
  }
  snapshot(signal) {
    return readMemorySnapshot(this.file, this.workspaces(signal));
  }
  body(workspaceId, id, signal) {
    return readMemoryBody(this.file, this.workspaces(signal), workspaceId, id);
  }
};
_init = __decoratorStart(_a);
__decorateElement(_init, 1, "snapshot", _snapshot_dec, GraphMemoryService);
__decorateElement(_init, 1, "body", _body_dec, GraphMemoryService);
__decoratorMetadata(_init, GraphMemoryService);
function apply(ctx) {
  ctx.inject(["workspaceRegistry"], (scoped) => {
    scoped.plugin(GraphMemoryService);
  });
}
export {
  apply
};
