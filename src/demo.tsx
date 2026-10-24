import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "@xyflow/react/dist/style.css";
import "./styles.css";
import { GraphPage } from "./GraphPage.tsx";
import { LayoutRepository } from "./layout.ts";
import type { GraphCatalog, GraphActions } from "./types.ts";
export const demoCatalog: GraphCatalog = {
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
      updatedAt: 1792840000000,
      running: false,
      unread: true,
    },
    {
      id: "s2",
      title: "设计系统与配色",
      updatedAt: 1792838000000,
      running: true,
    },
    {
      id: "s3",
      title: "原型反馈整理",
      updatedAt: 1792836000000,
      running: false,
    },
    {
      id: "s4",
      title: "文献阅读与摘要",
      updatedAt: 1792835000000,
      running: false,
    },
    {
      id: "s5",
      title: "探索图谱布局",
      updatedAt: 1792834000000,
      running: true,
      pending: true,
    },
    {
      id: "s6",
      title: "灵感与随手记",
      updatedAt: 1792833000000,
      running: false,
    },
    { id: "s7", title: "插件开发", updatedAt: 1792832000000, running: true },
    { id: "s8", title: "最初的草图", updatedAt: 1792831000000, running: false },
    { id: "s9", title: "测试与发布", updatedAt: 1792830000000, running: false },
  ],
};
const repository = new LayoutRepository(
  localStorage,
  "dsh-workspace-graph:demo:v1",
);
function Demo() {
  const [catalog, setCatalog] = useState(demoCatalog);
  const actions: GraphActions = {
    openSession: (id) => {
      document.documentElement.dataset.opened = "session:" + id;
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
    <GraphPage
      catalog={catalog}
      actions={actions}
      repository={repository}
      demo
    />
  );
}
createRoot(document.getElementById("root")!).render(<Demo />);
