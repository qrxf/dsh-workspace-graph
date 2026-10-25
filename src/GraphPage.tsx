import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  Position,
  applyNodeChanges,
  useReactFlow,
} from "@xyflow/react";
import type { Node, NodeProps, NodeChange } from "@xyflow/react";
import type {
  BubbleData,
  BubbleNode,
  Filters,
  GraphActions,
  GraphCatalog,
  LayoutDocument,
  LayoutPatch,
  Point,
  Status,
} from "./types.ts";
import { defaultFilters } from "./types.ts";
import { projectGraph } from "./model.ts";
import { emptyLayout, LayoutRepository } from "./layout.ts";

export const statusLabels: Record<Status, string> = {
  running: "运行中",
  waiting: "等待回应",
  unread: "新结果",
  idle: "空闲",
  unknown: "未知",
};
const colors: Record<Status, string> = {
  running: "#6aabff",
  waiting: "#ffc56c",
  unread: "#5fe0b4",
  idle: "#9aaac5",
  unknown: "#748099",
};
function Bubble({ data, selected }: NodeProps<Node<BubbleData>>) {
  const workspace = data.kind === "workspace";
  return (
    <div
      className={
        "wg-bubble " +
        (workspace ? "is-workspace" : "is-session") +
        (selected ? " is-selected" : "") +
        (data.archived ? " is-archived" : "")
      }
      style={{ "--bubble-color": colors[data.status] } as React.CSSProperties}
      title={data.title + (data.path ? " · " + data.path : "")}
    >
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <div className="wg-orb">
        <span className="wg-orb-symbol">{workspace ? "◈" : "✦"}</span>
        {workspace && <span className="wg-orb-count">{data.total} 个会话</span>}
      </div>
      <div className="wg-node-title">{data.title}</div>
      <div className="wg-node-meta">
        <i />
        {workspace
          ? data.collapsed
            ? "已收起"
            : "工作区"
          : data.archived
            ? "已归档"
            : statusLabels[data.status]}
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} />
    </div>
  );
}
const nodeTypes = { bubble: React.memo(Bubble) };
export interface GraphPageProps {
  catalog: GraphCatalog;
  actions: GraphActions;
  repository: LayoutRepository;
  demo?: boolean;
  access?: {
    useCreate: () => boolean;
    useWorkspace: (id: string, action: string) => boolean;
    useSession: (id: string, action: string) => boolean;
  };
}
function useInitialLayout(repository: LayoutRepository) {
  return useState(() => {
    try {
      return { layout: repository.load(), error: "" };
    } catch (error) {
      return {
        layout: emptyLayout(),
        error: "无法读取已保存布局：" + String(error),
      };
    }
  })[0];
}
export function GraphPage(props: GraphPageProps) {
  return (
    <ReactFlowProvider>
      <GraphInner {...props} />
    </ReactFlowProvider>
  );
}
function GraphInner({
  catalog,
  actions,
  repository,
  demo,
  access,
}: GraphPageProps) {
  const initial = useInitialLayout(repository);
  const [layout, setLayout] = useState(initial.layout),
    layoutRef = useRef(layout);
  const [error, setError] = useState(initial.error),
    [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  const [filters, setFilters] = useState<Filters>(() => ({
    ...defaultFilters,
    ...initial.layout.views.all?.filters,
  }));
  const [selectedId, setSelectedId] = useState<string>(),
    [limits, setLimits] = useState<Record<string, number>>({}),
    [dockOpen, setDockOpen] = useState(true);
  const [undo, setUndo] = useState<Record<string, Point>>();
  const [resetRaw, setResetRaw] = useState<{ raw: string | null }>();
  const [nodes, setNodes] = useState<Node<BubbleData>[]>([]);
  const flow = useReactFlow<Node<BubbleData>>();
  const alive = useRef(true),
    queue = useRef(Promise.resolve()),
    blocked = useRef(!!initial.error),
    pending = useRef(0),
    initializing = useRef(0),
    viewportTimer = useRef<ReturnType<typeof setTimeout>>();
  const filtersRef = useRef(filters);
  filtersRef.current = filters;
  // Bubbles currently held by the pointer. The host keeps pushing fresh catalog
  // snapshots, and every snapshot rebuilds the nodes from the saved layout;
  // without this guard the grabbed bubble jumps back to its saved position
  // mid-gesture and the graph looks undraggable.
  const draggingIds = useRef(new Set<string>());
  const projection = useMemo(
    () => projectGraph(catalog, filters, layout, limits),
    [catalog, filters, layout, limits],
  );
  const setDocument = useCallback((next: LayoutDocument) => {
    layoutRef.current = next;
    setLayout(next);
  }, []);
  const save = useCallback(
    (patch: LayoutPatch, initial = false) => {
      if (blocked.current) return;
      pending.current++;
      if (initial) initializing.current++;
      queue.current = queue.current
        .then(async () => {
          if (!alive.current || blocked.current) return;
          const revision = layoutRef.current.revision;
          const commit = () => {
            if (!alive.current || blocked.current) return;
            const next = initial
              ? repository.initializePositions(patch.positions ?? {})
              : repository.savePatch(patch, revision);
            setDocument(next);
            setNotice("布局已保存");
          };
          if (navigator.locks)
            await navigator.locks.request(repository.key, commit);
          else commit();
        })
        .catch((err) => {
          blocked.current = true;
          if (alive.current) setError("布局未保存：" + String(err));
        })
        .finally(() => {
          pending.current--;
          if (initial) initializing.current--;
        });
    },
    [repository, setDocument],
  );
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      clearTimeout(viewportTimer.current);
    };
  }, []);
  useEffect(() => {
    setNodes((old) => {
      const current = new Map(old.map((node) => [node.id, node]));
      return projection.nodes.map((n) => {
        const live = current.get(n.id);
        const held = !!live && (live.dragging || draggingIds.current.has(n.id));
        return {
          ...live,
          ...n,
          selected: n.id === selectedId,
          dragging: held ? true : live?.dragging,
          position: held && live ? live.position : n.position,
        };
      });
    });
  }, [projection, selectedId]);
  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.key !== repository.key) return;
      if (pending.current > initializing.current) {
        blocked.current = true;
        setError("另一个窗口修改了布局。请重新载入，再继续拖动。");
        return;
      }
      try {
        const next = repository.load();
        setDocument(next);
        setNotice("布局已从另一窗口同步");
      } catch (err) {
        blocked.current = true;
        setError("无法同步布局：" + String(err));
      }
    };
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, [repository, setDocument]);
  useEffect(() => {
    if (catalog.loading) return;
    const saved = layoutRef.current.views[filters.workspace]?.viewport;
    const timer = setTimeout(() => {
      if (saved) flow.setViewport(saved);
      else flow.fitView({ padding: 0.12, maxZoom: 1 });
    }, 60);
    return () => clearTimeout(timer);
  }, [filters.workspace, catalog.loading, flow]);
  useEffect(() => {
    if (catalog.loading || blocked.current) return;
    const missing = projection.nodes.filter(
      (node) => !layoutRef.current.positions[node.id],
    );
    if (missing.length)
      save(
        {
          positions: Object.fromEntries(
            missing.map((node) => [node.id, node.position]),
          ),
        },
        true,
      );
  }, [catalog.loading, projection, save]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 2400);
    return () => clearTimeout(timer);
  }, [notice]);
  const perform = async (task: () => void | Promise<void>) => {
    setBusy(true);
    if (!blocked.current) setError("");
    try {
      clearTimeout(viewportTimer.current);
      save({
        views: {
          [filtersRef.current.workspace]: { viewport: flow.getViewport() },
        },
      });
      await queue.current;
      if (!alive.current) return;
      await task();
    } catch (err) {
      setError("操作未完成：" + String(err));
    } finally {
      if (alive.current) setBusy(false);
    }
  };
  const updateFilters = (patch: Partial<Filters>) => {
    const next = { ...filtersRef.current, ...patch };
    setFilters(next);
    save({ views: { all: { filters: next } } });
  };
  const chooseScope = (scope: string) => {
    clearTimeout(viewportTimer.current);
    const previous = filtersRef.current.workspace;
    save({
      views: {
        [previous]: { viewport: flow.getViewport() },
        all: {
          ...(previous === "all" ? { viewport: flow.getViewport() } : {}),
          filters: { ...filtersRef.current, workspace: scope },
        },
      },
    });
    setFilters((f) => ({ ...f, workspace: scope }));
    setSelectedId(undefined);
  };
  const selected = projection.nodes.find((n) => n.id === selectedId);
  const resetLayout = () => {
    const defaults = projectGraph(catalog, filters, emptyLayout(), limits);
    const previous = Object.fromEntries(nodes.map((n) => [n.id, n.position]));
    setUndo(previous);
    save({
      positions: Object.fromEntries(
        defaults.nodes.map((n) => [n.id, n.position]),
      ),
    });
    setTimeout(() => flow.fitView({ padding: 0.12, maxZoom: 1 }), 70);
  };
  const openNode = (node: BubbleNode | Node<BubbleData>) =>
    perform(() =>
      node.data.kind === "workspace"
        ? node.data.virtual
          ? undefined
          : actions.openWorkspace(node.data.entityId)
        : node.data.archived
          ? Promise.reject(new Error("请先恢复这个归档会话"))
          : actions.openSession(node.data.entityId),
    );
  const hasFilters =
    filters.query ||
    filters.status !== "all" ||
    filters.kind !== "all" ||
    filters.workspace !== "all" ||
    filters.archived;
  return (
    <section className="wg-root" aria-label="工作区图谱">
      <header className="wg-header">
        <div className="wg-brand">
          <span className="wg-logo">◈</span>
          <div>
            <h1>
              工作区图谱<span>WORKSPACE ATLAS</span>
            </h1>
            <p>
              {catalog.workspaces.length} 个工作区 · {projection.total} 个会话
              {demo ? " · 演示数据" : ""}
            </p>
          </div>
        </div>
        <div className="wg-top-actions">
          <label className="wg-search">
            <span>⌕</span>
            <input
              aria-label="搜索工作区和会话"
              placeholder="搜索工作区或会话…"
              value={filters.query}
              onChange={(e) => updateFilters({ query: e.target.value })}
            />
          </label>
          <button onClick={() => flow.fitView({ padding: 0.12, maxZoom: 1 })}>
            适应画布
          </button>
          <button onClick={resetLayout}>重置布局</button>
        </div>
      </header>
      {(error || catalog.error) && (
        <div className="wg-alert" role="alert">
          <span>{error || catalog.error}</span>
          {blocked.current && (
            <>
              <button onClick={() => location.reload()}>重新载入</button>
              <button
                onClick={() => {
                  try {
                    setResetRaw({
                      raw: repository.storage.getItem(repository.key),
                    });
                  } catch (err) {
                    setError(String(err));
                  }
                }}
              >
                重置本地布局
              </button>
              <button
                onClick={() => {
                  try {
                    const raw = repository.storage.getItem(repository.key);
                    const url = URL.createObjectURL(
                      new Blob([raw ?? ""], { type: "text/plain" }),
                    );
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "workspace-graph-layout-backup.txt";
                    a.click();
                    setTimeout(() => URL.revokeObjectURL(url), 1000);
                  } catch (err) {
                    setError(String(err));
                  }
                }}
              >
                导出已保存原文
              </button>
            </>
          )}
          <button
            onClick={() => {
              const blob = new Blob(
                [
                  JSON.stringify(
                    {
                      ...layoutRef.current,
                      positions: {
                        ...layoutRef.current.positions,
                        ...Object.fromEntries(
                          nodes.map((n) => [n.id, n.position]),
                        ),
                      },
                    },
                    null,
                    2,
                  ),
                ],
                { type: "application/json" },
              );
              const url = URL.createObjectURL(blob),
                a = document.createElement("a");
              a.href = url;
              a.download = "workspace-graph-layout.json";
              a.click();
              setTimeout(() => URL.revokeObjectURL(url), 1000);
            }}
          >
            导出当前布局
          </button>
        </div>
      )}
      {resetRaw && (
        <div className="wg-alert" role="alert">
          <span>这会清除当前浏览器的图谱位置和筛选。可先导出备份。</span>
          <button
            onClick={() => {
              try {
                const next = repository.reset(resetRaw.raw);
                blocked.current = false;
                setDocument(next);
                setError("");
                setFilters(defaultFilters);
                setResetRaw(undefined);
              } catch (err) {
                setError("无法重置：" + String(err));
              }
            }}
          >
            确认重置
          </button>
          <button onClick={() => setResetRaw(undefined)}>取消</button>
        </div>
      )}
      {demo && <div className="wg-demo-label">交互演示 · 数据仅用于预览</div>}
      <div className="wg-canvas">
        <ReactFlow
          nodes={nodes}
          edges={projection.edges.map((e) => ({
            ...e,
            type: "straight",
            style: { stroke: "#47719a", strokeWidth: 1.25, opacity: 0.56 },
          }))}
          nodeTypes={nodeTypes}
          onNodesChange={(changes: NodeChange<Node<BubbleData>>[]) =>
            setNodes((ns) => applyNodeChanges(changes, ns))
          }
          onNodeDragStart={(_e, node, dragged) => {
            for (const item of dragged?.length ? dragged : [node])
              draggingIds.current.add(item.id);
          }}
          onNodeDragStop={(_e, node, dragged) => {
            const touched = dragged?.length ? dragged : [node];
            for (const item of touched) draggingIds.current.delete(item.id);
            save({
              positions: Object.fromEntries(
                touched.map((n) => [n.id, n.position]),
              ),
            });
          }}
          onNodeClick={(_e, node) => setSelectedId(node.id)}
          onNodeDoubleClick={(_e, node) => void openNode(node)}
          onPaneClick={() => setSelectedId(undefined)}
          onMoveEnd={(_event, viewport) => {
            clearTimeout(viewportTimer.current);
            const scope = filtersRef.current.workspace;
            viewportTimer.current = setTimeout(
              () => save({ views: { [scope]: { viewport } } }),
              180,
            );
          }}
          minZoom={0.1}
          maxZoom={3}
          nodesConnectable={false}
          edgesReconnectable={false}
          deleteKeyCode={null}
          selectionOnDrag={false}
          proOptions={{ hideAttribution: false }}
          defaultViewport={layout.views[filters.workspace]?.viewport}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={26}
            size={1}
            color="#284061"
          />
          <Controls position="bottom-right" showInteractive={false} />
        </ReactFlow>
        {catalog.loading && (
          <div className="wg-empty" role="status">
            <span className="wg-empty-orb">◈</span>
            <h2>正在连接工作区</h2>
            <p>读取 Harness 的工作区与会话…</p>
          </div>
        )}
        {!catalog.loading && !projection.nodes.length && (
          <div className="wg-empty">
            <span className="wg-empty-orb">⌕</span>
            <h2>{hasFilters ? "没有匹配的节点" : "从一个工作区开始"}</h2>
            <p>
              {hasFilters
                ? "调整左下角的选择或清除搜索。"
                : "在 Harness 侧栏添加工作区后，这里会自动显示。"}
            </p>
            {hasFilters && (
              <button
                onClick={() => {
                  setFilters(defaultFilters);
                  save({ views: { all: { filters: defaultFilters } } });
                }}
              >
                清除筛选
              </button>
            )}
          </div>
        )}
        <div className={"wg-dock " + (!dockOpen ? "is-folded" : "")}>
          <button
            className="wg-dock-heading"
            onClick={() => setDockOpen(!dockOpen)}
            aria-expanded={dockOpen}
          >
            <span>☷　视图与筛选</span>
            <span>{dockOpen ? "−" : "+"}</span>
          </button>
          {dockOpen && (
            <>
              <label className="wg-field">
                <span>工作区</span>
                <select
                  aria-label="选择工作区"
                  value={filters.workspace}
                  onChange={(e) => chooseScope(e.target.value)}
                >
                  <option value="all">全部工作区</option>
                  {catalog.workspaces.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.title} ·{" "}
                      {w.path.split(/[\/]/).filter(Boolean).slice(-2).join("/")}
                    </option>
                  ))}
                  <option value="__ungrouped__">未分组</option>
                </select>
              </label>
              <div className="wg-filter-row">
                <span>状态</span>
                <div className="wg-chips">
                  {(
                    [
                      "all",
                      "running",
                      "waiting",
                      "unread",
                      "idle",
                      "unknown",
                    ] as const
                  ).map((status) => (
                    <button
                      key={status}
                      className={filters.status === status ? "active" : ""}
                      aria-pressed={filters.status === status}
                      onClick={() => updateFilters({ status })}
                    >
                      {status !== "all" && (
                        <i style={{ background: colors[status] }} />
                      )}
                      {status === "all" ? "全部" : statusLabels[status]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="wg-filter-row">
                <span>显示</span>
                <div className="wg-chips">
                  {(["all", "workspace", "session"] as const).map((kind) => (
                    <button
                      key={kind}
                      className={filters.kind === kind ? "active" : ""}
                      aria-pressed={filters.kind === kind}
                      onClick={() => updateFilters({ kind })}
                    >
                      {kind === "all"
                        ? "全部"
                        : kind === "workspace"
                          ? "工作区"
                          : "会话"}
                    </button>
                  ))}
                  <label className="wg-check">
                    <input
                      type="checkbox"
                      checked={filters.archived}
                      onChange={(e) =>
                        updateFilters({ archived: e.target.checked })
                      }
                    />
                    归档
                  </label>
                </div>
              </div>
              <div className="wg-dock-foot">
                <span>
                  {projection.nodes.length} 个可见节点
                  {projection.hidden > 0
                    ? " · " + projection.hidden + " 个会话未展开"
                    : ""}
                </span>
                <button
                  onClick={() => {
                    setFilters(defaultFilters);
                    save({ views: { all: { filters: defaultFilters } } });
                  }}
                >
                  清除筛选
                </button>
              </div>
            </>
          )}
        </div>
        {selected && (
          <aside className="wg-details" aria-label="节点详情">
            <div className="wg-detail-heading">
              <span>
                {selected.data.kind === "workspace" ? "工作区" : "会话"}
              </span>
              <button
                aria-label="关闭详情"
                onClick={() => setSelectedId(undefined)}
              >
                ×
              </button>
            </div>
            <h2>{selected.data.title}</h2>
            <div
              className="wg-status"
              style={{ color: colors[selected.data.status] }}
            >
              ● {statusLabels[selected.data.status]}
              {selected.data.archived ? " · 已归档" : ""}
            </div>
            <dl>
              <dt>路径</dt>
              <dd>{selected.data.path || "未记录目录"}</dd>
              <dt>标识</dt>
              <dd>{selected.data.entityId}</dd>
              {selected.data.updatedAt && (
                <>
                  <dt>最近更新</dt>
                  <dd>{new Date(selected.data.updatedAt).toLocaleString()}</dd>
                </>
              )}
            </dl>
            {selected.data.kind === "workspace" ? (
              <WorkspaceActions
                key={selected.id}
                node={selected}
                actions={actions}
                access={access}
                busy={busy}
                perform={perform}
                open={() => void openNode(selected)}
                collapse={() =>
                  save({
                    collapsed: selected.data.collapsed
                      ? layout.collapsed.filter(
                          (id) => id !== selected.data.entityId,
                        )
                      : [...layout.collapsed, selected.data.entityId],
                  })
                }
                more={() =>
                  setLimits((old) => ({
                    ...old,
                    [selected.data.entityId]:
                      (old[selected.data.entityId] ?? 20) + 20,
                  }))
                }
              />
            ) : (
              <SessionActions
                key={selected.id}
                node={selected}
                actions={actions}
                access={access}
                busy={busy}
                perform={perform}
                open={() => void openNode(selected)}
              />
            )}
          </aside>
        )}
        <div className="wg-canvas-hint">拖动气泡整理 · 滚轮缩放 · 双击打开</div>
        <div className="wg-save-status" role="status">
          {notice}
        </div>
        {undo && (
          <div className="wg-undo">
            已重排当前视图
            <button
              onClick={() => {
                save({ positions: undo });
                setUndo(undefined);
              }}
            >
              撤销
            </button>
            <button
              onClick={() => setUndo(undefined)}
              aria-label="关闭撤销提示"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
type ActionProps = {
  node: BubbleNode;
  actions: GraphActions;
  access: GraphPageProps["access"];
  busy: boolean;
  perform: (task: () => void | Promise<void>) => Promise<void>;
  open: () => void;
};
function WorkspaceActions({
  node,
  actions,
  access,
  busy,
  perform,
  open,
  collapse,
  more,
}: ActionProps & { collapse: () => void; more: () => void }) {
  const [editing, setEditing] = useState(false),
    [name, setName] = useState(node.data.title);
  const canCreate = access?.useCreate() ?? true;
  const canRename =
    access?.useWorkspace(node.data.entityId, "workspace/rename") ?? true;
  return (
    <div className="wg-detail-actions">
      {!node.data.virtual && (
        <>
          <button
            className="wg-primary"
            disabled={busy || !canCreate}
            onClick={open}
          >
            打开工作区 ↗
          </button>
          <button
            disabled={busy || !canCreate}
            onClick={() =>
              void perform(() => actions.newSession(node.data.entityId))
            }
          >
            新建会话
          </button>
          {canRename && (
            <button disabled={busy} onClick={() => setEditing(!editing)}>
              重命名工作区
            </button>
          )}
        </>
      )}
      {editing && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (name.trim())
              void perform(async () => {
                await actions.renameWorkspace(node.data.entityId, name.trim());
                setEditing(false);
              });
          }}
        >
          <input
            aria-label="工作区新名称"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button disabled={busy || !name.trim()}>保存名称</button>
        </form>
      )}
      <button onClick={collapse}>
        {node.data.collapsed ? "展开会话" : "收起会话"}
      </button>
      {!node.data.collapsed && <button onClick={more}>再显示 20 个会话</button>}
    </div>
  );
}
function SessionActions({
  node,
  actions,
  access,
  busy,
  perform,
  open,
}: ActionProps) {
  const canArchive =
    access?.useSession(node.data.entityId, "workspace/archiveSession") ?? true;
  const canRestore =
    access?.useSession(node.data.entityId, "workspace/unarchiveSession") ??
    true;
  return (
    <div className="wg-detail-actions">
      {node.data.archived ? (
        <button
          className="wg-primary"
          disabled={busy || !canRestore}
          onClick={() =>
            void perform(() => actions.restore(node.data.entityId))
          }
        >
          恢复会话
        </button>
      ) : (
        <>
          <button className="wg-primary" disabled={busy} onClick={open}>
            打开会话 ↗
          </button>
          <button
            disabled={busy || !canArchive}
            onClick={() =>
              void perform(() => actions.archive(node.data.entityId))
            }
          >
            归档会话
          </button>
        </>
      )}
      <p className="wg-small-note">
        位置保存在当前浏览器。拖动不会改变会话所属。
      </p>
    </div>
  );
}
