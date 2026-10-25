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
import { carryHiddenPositions } from "./hierarchy.ts";
import { emptyLayout, LayoutRepository } from "./layout.ts";
import { DEFAULT_THEME, deriveTheme } from "./theme.ts";
import { ThemeControls } from "./ThemeControls.tsx";
import { useGraphPhysics } from "./useGraphPhysics.ts";
import { RopeEdge } from "./RopeEdge.tsx";
import { runtimeTreePositions } from "./treeLayout.ts";
import {
  recordVisit,
  observeSessions,
  frequencyLabels,
  recencyLabels,
} from "./activity.ts";
import type { SummaryProvider } from "./summary.ts";
import { SummaryEditor } from "./SummaryEditor.tsx";

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
        (data.collapsed === false ? " is-expanded" : "") +
        (data.current ? " is-current" : "") +
        (data.working ? " is-working" : "") +
        (data.archived ? " is-archived" : "")
      }
      style={{ "--bubble-color": colors[data.status] } as React.CSSProperties}
      title={data.title + (data.path ? " · " + data.path : "")}
    >
      <Handle type="target" position={Position.Top} isConnectable={false} />
      <div className="wg-orb">
        <span className="wg-orb-symbol">{workspace ? "◈" : "✦"}</span>
        {workspace && <span className="wg-orb-count">{data.total} 个会话</span>}
        {workspace && !!data.childWorkspaceCount && (
          <span className="wg-orb-count">
            {data.childWorkspaceCount} 个子工作区
          </span>
        )}
      </div>
      <div className="wg-node-title">{data.title}</div>
      <div className="wg-node-badges">
        {data.current && <span>当前</span>}
        {data.working && <strong>▶ 工作中</strong>}
        {data.parentWorkspaceId && <span>子工作区</span>}
        {data.parentSessionId && <span>分支</span>}
        {data.context && <span>来源</span>}
      </div>
      {!workspace && (
        <div className="wg-activity">
          {data.pinned ? "★ " : ""}
          {data.recency && recencyLabels[data.recency]} ·{" "}
          {data.frequency && frequencyLabels[data.frequency]}
        </div>
      )}
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
      {!workspace && (
        <>
          <Handle
            id="branch-source"
            type="source"
            position={Position.Top}
            isConnectable={false}
          />
          <Handle
            id="branch-target"
            type="target"
            position={Position.Bottom}
            isConnectable={false}
          />
        </>
      )}
    </div>
  );
}
const nodeTypes = { bubble: React.memo(Bubble) };
const edgeTypes = { rope: React.memo(RopeEdge) };
export interface GraphPageProps {
  summaryProvider?: SummaryProvider;
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
    [expanded, setExpanded] = useState<Set<string>>(() => new Set()),
    [limits, setLimits] = useState<Record<string, number>>({}),
    [dockOpen, setDockOpen] = useState(true);
  const [undo, setUndo] = useState<Record<string, Point>>();
  const [resetRaw, setResetRaw] = useState<{ raw: string | null }>();
  const [systemReduced, setSystemReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const reduced = !!layout.settings?.reducedMotion || systemReduced;
  const [now, setNow] = useState(Date.now);
  const flow = useReactFlow<Node<BubbleData>>();
  const canvasRef = useRef<HTMLDivElement>(null);
  const fitAvailable = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !flow.getNodes().length) return;
    const size = canvas.getBoundingClientRect(),
      dock = canvas.querySelector(".wg-dock")?.getBoundingClientRect();
    const left = size.width > 850 ? (dock?.width ?? 0) + 45 : 20;
    const bottom = size.width <= 850 ? (dock?.height ?? 0) + 35 : 35;
    const width = Math.max(180, size.width - left - 35),
      height = Math.max(120, size.height - bottom - 40);
    const bounds = flow.getNodesBounds(flow.getNodes());
    const zoom = Math.max(
      0.1,
      Math.min(1, width / (bounds.width + 100), height / (bounds.height + 100)),
    );
    void flow.setViewport({
      x: left + (width - bounds.width * zoom) / 2 - bounds.x * zoom,
      y: 20 + (height - bounds.height * zoom) / 2 - bounds.y * zoom,
      zoom,
    });
  }, [flow]);
  const alive = useRef(true),
    queue = useRef(Promise.resolve()),
    blocked = useRef(!!initial.error),
    pending = useRef(0),
    initializing = useRef(0),
    viewportTimer = useRef<ReturnType<typeof setTimeout>>();
  const filtersRef = useRef(filters);
  filtersRef.current = filters;
  const projection = useMemo(
    () => projectGraph(catalog, filters, layout, limits, expanded, now),
    [catalog, filters, layout, limits, expanded, now],
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
          const commit = () => {
            if (!alive.current || blocked.current) return;
            const revision = layoutRef.current.revision;
            const next = initial
              ? repository.initializePositions(patch.positions ?? {})
              : repository.savePatch(patch, revision);
            setDocument(next);
            setNotice(patch.settings ? "设置已保存" : "布局在本次运行保留");
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
  const physics = useGraphPhysics(projection, reduced, (positions) => {
    const previous = layoutRef.current.positions;
    const changed = Object.entries(positions).some(
      ([id, p]) =>
        !previous[id] ||
        Math.hypot(p.x - previous[id].x, p.y - previous[id].y) > 0.1,
    );
    if (!changed) return;
    save({ positions: carryHiddenPositions(catalog, previous, positions) });
  });
  const { nodes, setNodes } = physics;
  const edges = useMemo(
    () =>
      projection.edges.map((e) => ({
        ...e,
        type: "rope",
        data: physics.ropes[JSON.stringify([e.source, e.target])],
        style: { stroke: "#47719a", strokeWidth: 1.25, opacity: 0.56 },
      })),
    [projection.edges, physics.ropes],
  );
  useEffect(() => {
    if (catalog.loading || blocked.current) return;
    const usage = layoutRef.current.settings?.usage ?? {};
    const ids = catalog.sessions.map((s) => s.id);
    if (ids.some((id) => !Object.hasOwn(usage, id)))
      save({ settings: { usage: observeSessions(usage, ids) } });
  }, [catalog.sessions, catalog.loading, layout.settings?.usage, save]);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduced(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      clearTimeout(viewportTimer.current);
    };
  }, []);
  useEffect(() => {
    setNodes((old) =>
      old.map((n) => ({ ...n, selected: n.id === selectedId })),
    );
  }, [selectedId, setNodes]);
  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.key !== repository.key) return;
      try {
        const next = repository.load();
        setDocument(next);
        setNotice("设置已从另一窗口同步");
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
      else fitAvailable();
    }, 60);
    return () => clearTimeout(timer);
  }, [filters.workspace, catalog.loading, flow, fitAvailable]);
  useEffect(() => {
    if (catalog.loading || blocked.current) return;
    const missing = Object.entries(
      runtimeTreePositions(catalog, layoutRef.current.positions),
    ).filter(([id]) => !layoutRef.current.positions[id]);
    if (missing.length)
      save(
        {
          positions: Object.fromEntries(missing),
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
    physics.forceNextSync();
    const defaults = projectGraph(
      catalog,
      filters,
      emptyLayout(),
      limits,
      expanded,
    );
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
    perform(async () => {
      if (node.data.kind === "workspace") {
        if (!node.data.virtual) await actions.openWorkspace(node.data.entityId);
        return;
      }
      if (node.data.archived) throw new Error("请先恢复这个归档会话");
      const id = node.data.entityId;
      save({
        settings: {
          usage: {
            ...layoutRef.current.settings?.usage,
            [id]: recordVisit(layoutRef.current.settings?.usage?.[id]),
          },
        },
      });
      await queue.current;
      if (alive.current) await actions.openSession(id);
    });
  const hasFilters =
    filters.query ||
    !!filters.statuses?.length ||
    (filters.recency && filters.recency !== "all") ||
    (filters.frequency && filters.frequency !== "all") ||
    filters.status !== "all" ||
    filters.kind !== "all" ||
    filters.workspace !== "all" ||
    filters.archived;
  const theme = deriveTheme(layout.settings?.theme ?? DEFAULT_THEME);
  return (
    <section
      className={
        "wg-root" + (layout.settings?.reducedMotion ? " wg-reduced" : "")
      }
      style={
        {
          "--wg-workspace": theme.workspace,
          "--wg-expanded": theme.expanded,
          "--wg-session": theme.session,
          "--wg-session-text": theme.sessionText,
          "--wg-accent": theme.accent,
        } as React.CSSProperties
      }
      aria-label="工作区图谱"
    >
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
          <button onClick={fitAvailable}>适应画布</button>
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
      <div
        className="wg-canvas"
        ref={canvasRef}
        onKeyDown={(e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          const id = (e.target as HTMLElement)
            .closest(".react-flow__node")
            ?.getAttribute("data-id");
          const n = nodes.find((n) => n.id === id);
          if (n?.data.kind === "workspace") {
            e.preventDefault();
            setSelectedId(n.id);
            setExpanded((old) => {
              const next = new Set(old);
              next.has(n.data.entityId)
                ? next.delete(n.data.entityId)
                : next.add(n.data.entityId);
              return next;
            });
          }
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={(changes: NodeChange<Node<BubbleData>>[]) =>
            setNodes((ns) => applyNodeChanges(changes, ns))
          }
          onNodeDragStart={(e, node) => {
            physics.drag(
              node.id,
              node.position,
              e.ctrlKey ? "free" : "elastic",
            );
          }}
          onNodeDrag={(e, node) =>
            physics.drag(node.id, node.position, e.ctrlKey ? "free" : "elastic")
          }
          onNodeDragStop={(event, node) => {
            physics.drag(
              node.id,
              node.position,
              event.ctrlKey ? "free" : "elastic",
            );
            physics.release(node.id);
          }}
          autoPanOnNodeFocus={false}
          autoPanOnNodeDrag={false}
          zoomOnDoubleClick={false}
          nodeDragThreshold={5}
          onNodeClick={(_e, node) => {
            setSelectedId(node.id);
            if (node.data.kind === "workspace")
              setExpanded((old) => {
                const next = new Set(old);
                next.has(node.data.entityId)
                  ? next.delete(node.data.entityId)
                  : next.add(node.data.entityId);
                return next;
              });
          }}
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
          multiSelectionKeyCode={null}
          selectionKeyCode={null}
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
        {!catalog.loading && hasFilters && projection.matched === 0 && (
          <div className="wg-no-match" role="status">
            没有匹配的会话；工作区与当前会话仍保留。
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
                      className={
                        (
                          status === "all"
                            ? !(
                                filters.statuses ??
                                (filters.status === "all"
                                  ? []
                                  : [filters.status])
                              ).length
                            : (filters.statuses ?? [filters.status]).includes(
                                status,
                              )
                        )
                          ? "active"
                          : ""
                      }
                      aria-pressed={
                        status === "all"
                          ? !(
                              filters.statuses ??
                              (filters.status === "all" ? [] : [filters.status])
                            ).length
                          : (filters.statuses ?? [filters.status]).includes(
                              status,
                            )
                      }
                      onClick={() => {
                        const current =
                          filters.statuses ??
                          (filters.status === "all" ? [] : [filters.status]);
                        updateFilters({
                          status: "all",
                          statuses:
                            status === "all"
                              ? []
                              : current.includes(status)
                                ? current.filter((s) => s !== status)
                                : [...current, status],
                        });
                      }}
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
              <ThemeControls
                color={layout.settings?.theme ?? DEFAULT_THEME}
                reduced={!!layout.settings?.reducedMotion}
                onColor={(theme) => save({ settings: { theme } })}
                onReduced={(reducedMotion) =>
                  save({ settings: { reducedMotion } })
                }
              />
              <div className="wg-dock-foot">
                <label>
                  时间{" "}
                  <select
                    aria-label="时间分类"
                    value={filters.recency ?? "all"}
                    onChange={(e) =>
                      updateFilters({
                        recency: e.target.value as Filters["recency"],
                      })
                    }
                  >
                    <option value="all">全部时间</option>
                    {Object.entries(recencyLabels).map(([id, label]) => (
                      <option value={id} key={id}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  频率{" "}
                  <select
                    aria-label="频率分类"
                    value={filters.frequency ?? "all"}
                    onChange={(e) =>
                      updateFilters({
                        frequency: e.target.value as Filters["frequency"],
                      })
                    }
                  >
                    <option value="all">全部频率</option>
                    {Object.entries(frequencyLabels).map(([id, label]) => (
                      <option value={id} key={id}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                <span className="wg-small-note">
                  常用按图谱主动打开计数；30 天内 5 次，间隔 30
                  分钟。历史记录从本版本开始累计。
                </span>
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
              {selected.data.kind === "session" && (
                <>
                  <dt>分类</dt>
                  <dd>
                    {selected.data.recency &&
                      recencyLabels[selected.data.recency]}{" "}
                    ·{" "}
                    {selected.data.frequency &&
                      frequencyLabels[selected.data.frequency]}
                  </dd>
                  <dt>图谱主动打开（近 30 天）</dt>
                  <dd>
                    {layout.settings?.usage?.[
                      selected.data.entityId
                    ]?.visits.filter((t) => t >= Date.now() - 30 * 86400000)
                      .length ?? "记录积累中"}
                  </dd>
                </>
              )}
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
            {selected.data.kind === "session" && (
              <button
                onClick={() => {
                  const pinned = layoutRef.current.settings?.pinned ?? [];
                  save({
                    settings: {
                      pinned: pinned.includes(selected.data.entityId)
                        ? pinned.filter((id) => id !== selected.data.entityId)
                        : [...pinned, selected.data.entityId],
                    },
                  });
                }}
              >
                {selected.data.pinned ? "取消置顶" : "置顶会话"}
              </button>
            )}
            {selected.data.kind === "session" && (
              <SummaryEditor
                key={"summary:" + selected.id}
                value={
                  layout.settings?.manualSummaries?.[selected.data.entityId] ??
                  ""
                }
                onSave={(text) =>
                  save({
                    settings: {
                      manualSummaries: {
                        ...layoutRef.current.settings?.manualSummaries,
                        [selected.data.entityId]: text,
                      },
                    },
                  })
                }
              />
            )}
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
                  setExpanded((old) => {
                    const next = new Set(old);
                    next.has(selected.data.entityId)
                      ? next.delete(selected.data.entityId)
                      : next.add(selected.data.entityId);
                    return next;
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
        <div className="wg-canvas-hint">
          拖动柔性牵引 · Ctrl 自由拖动 · 滚轮缩放 · 双击打开
        </div>
        <div className="wg-save-status" role="status">
          {notice}
        </div>
        {undo && (
          <div className="wg-undo">
            已重排当前视图
            <button
              onClick={() => {
                physics.forceNextSync();
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
        位置在本次运行保留，重启恢复默认。活动会话保留显示。拖动不会改变会话所属。
      </p>
    </div>
  );
}
