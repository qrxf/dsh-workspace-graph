import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "@xyflow/react/dist/style.css";
import "./styles.css";
import { GraphPage } from "./GraphPage.tsx";
import { LayoutRepository } from "./layout.ts";
import type { GraphCatalog, GraphActions } from "./types.ts";
export const demoCatalog: GraphCatalog = {
  currentSessionId: "s1",
  loading: false,
  archivedSessionIds: ["s8"],
  workspaces: [
    {
      id: "product",
      title: "产品设计",
      path: "/Projects/product-design",
      sessionIds: ["s1", "s2", "s3"],
    },
    {
      id: "research",
      title: "研究与探索",
      path: "/Projects/research",
      sessionIds: ["s4", "s5", "s6"],
    },
    {
      id: "build",
      title: "工作区图谱插件",
      path: "/Projects/dsh-workspace-graph",
      sessionIds: ["s7", "s8", "s9"],
    },
  ],
  sessions: [
    {
      id: "s1",
      title: "交互方案梳理",
      updatedAt: Date.now() - 1 * 3600000,
      running: false,
      unread: true,
    },
    {
      id: "s2",
      title: "设计系统与配色",
      updatedAt: Date.now() - 2 * 3600000,
      running: true,
    },
    {
      id: "s3",
      title: "原型反馈整理",
      updatedAt: Date.now() - 3 * 3600000,
      running: false,
    },
    {
      id: "s4",
      title: "文献阅读与摘要",
      updatedAt: Date.now() - 4 * 3600000,
      running: false,
    },
    {
      id: "s5",
      title: "探索图谱布局",
      updatedAt: Date.now() - 5 * 3600000,
      running: true,
      pending: true,
    },
    {
      id: "s6",
      title: "灵感与随手记",
      updatedAt: Date.now() - 6 * 3600000,
      running: false,
    },
    {
      id: "s7",
      title: "插件开发",
      updatedAt: Date.now() - 7 * 3600000,
      running: true,
    },
    {
      id: "s8",
      title: "最初的草图",
      updatedAt: Date.now() - 8 * 3600000,
      running: false,
    },
    {
      id: "s9",
      title: "测试与发布",
      updatedAt: Date.now() - 9 * 3600000,
      running: false,
    },
  ],
};
const repository = new LayoutRepository(
  localStorage,
  "dsh-workspace-graph:demo:v1",
);
const density = Number(new URLSearchParams(location.search).get("nodes"));
const hierarchyCatalog: GraphCatalog = {
  loading: false,
  archivedSessionIds: [],
  workspaces: [
    {
      id: "home",
      title: "zengfeng",
      path: "C:/Users/zengfeng",
      sessionIds: [],
    },
    {
      id: "codex",
      title: "Codex",
      path: "C:/Users/zengfeng/Codex",
      sessionIds: ["fork", "second-fork", "original"],
    },
    {
      id: "nested",
      title: "图谱项目",
      path: "C:/Users/zengfeng/Codex/graph",
      sessionIds: [],
    },
    { id: "separate", title: "独立工作区", path: "D:/Other", sessionIds: [] },
  ],
  sessions: [
    {
      id: "fork",
      title: "气泡交互分支",
      parentId: "original",
      updatedAt: Date.now(),
      running: false,
    },
    {
      id: "second-fork",
      title: "分支的后续方案",
      parentId: "fork",
      updatedAt: Date.now(),
      running: false,
    },
    {
      id: "original",
      title: "原始图谱会话",
      updatedAt: Date.now() - 20 * 86400000,
      running: false,
    },
  ],
};
const initialCatalog: GraphCatalog = new URLSearchParams(location.search).has(
  "hierarchy",
)
  ? hierarchyCatalog
  : [10, 50, 100, 1000, 5000].includes(density)
    ? {
        loading: false,
        currentSessionId: "density-0",
        archivedSessionIds: [],
        workspaces: [
          {
            id: "density",
            title: "密度演示 " + density + " 节点",
            path: "/demo/density",
            sessionIds: Array.from(
              { length: density - 1 },
              (_, i) => "density-" + i,
            ),
          },
        ],
        sessions: Array.from({ length: density - 1 }, (_, i) => ({
          id: "density-" + i,
          title: "演示会话 " + i,
          updatedAt: Date.now(),
          running: false,
        })),
      }
    : demoCatalog;
function Demo() {
  const [catalog, setCatalog] = useState(() =>
    new URLSearchParams(location.search).has("loading")
      ? { ...initialCatalog, loading: true }
      : initialCatalog,
  );
  useEffect(() => {
    if (!new URLSearchParams(location.search).has("loading")) return;
    const timer = setTimeout(
      () => setCatalog((c) => ({ ...c, loading: false })),
      300,
    );
    return () => clearTimeout(timer);
  }, []);
  const [visible, setVisible] = useState(true);
  const actions: GraphActions = {
    openSession: (id) => {
      document.documentElement.dataset.opened = "session:" + id;
      setCatalog((c) => ({ ...c, currentSessionId: id }));
    },
    openWorkspace: (id) => {
      document.documentElement.dataset.opened = "workspace:" + id;
    },
    newSession: async (id) => {
      const sid = "s" + Date.now();
      setCatalog((c) => ({
        ...c,
        workspaces: c.workspaces.map((w) =>
          w.id === id ? { ...w, sessionIds: [...w.sessionIds, sid] } : w,
        ),
        sessions: [
          ...c.sessions,
          { id: sid, title: "新的会话", updatedAt: Date.now(), running: false },
        ],
      }));
    },
    archive: async (id) =>
      setCatalog((c) => ({
        ...c,
        archivedSessionIds: [...c.archivedSessionIds, id],
      })),
    restore: async (id) =>
      setCatalog((c) => ({
        ...c,
        archivedSessionIds: c.archivedSessionIds.filter((x) => x !== id),
      })),
    renameWorkspace: async (id, title) =>
      setCatalog((c) => ({
        ...c,
        workspaces: c.workspaces.map((w) =>
          w.id === id ? { ...w, title } : w,
        ),
      })),
  };
  return (
    <>
      <div className="wg-demo-tools">
        <button
          onClick={() =>
            setCatalog((c) => ({ ...c, currentSessionIds: ["s1", "s4"] }))
          }
        >
          演示：并行当前会话
        </button>
        <label>
          演示当前会话{" "}
          <select
            aria-label="演示当前会话"
            value={catalog.currentSessionId ?? ""}
            onChange={(e) =>
              setCatalog((c) => ({
                ...c,
                currentSessionId: e.target.value || undefined,
                currentSessionIds: e.target.value ? [e.target.value] : [],
              }))
            }
          >
            <option value="">无当前会话</option>
            {catalog.sessions.map((s) => (
              <option value={s.id} key={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={() =>
            setCatalog((c) => ({
              ...c,
              sessions: c.sessions.map((s) => ({
                ...s,
                running: false,
                pending: false,
              })),
            }))
          }
        >
          演示：全部任务结束
        </button>
        <button onClick={() => setVisible((v) => !v)}>
          {visible ? "演示：离开图谱" : "演示：重新进入图谱"}
        </button>
      </div>
      {visible && (
        <GraphPage
          catalog={catalog}
          actions={actions}
          repository={repository}
          demo
        />
      )}
    </>
  );
}
createRoot(document.getElementById("root")!).render(<Demo />);
