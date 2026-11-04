import React, { useEffect, useRef, useState } from "react";
import type { MemoryProvider, MemorySnapshot } from "./memory.ts";
import type { WorkspaceRow } from "./types.ts";

export function MemoryDetails({
  workspaceId,
  workspaces,
  provider,
  snapshot,
  loading,
  refresh,
}: {
  workspaceId: string;
  workspaces: readonly WorkspaceRow[];
  provider?: MemoryProvider;
  snapshot?: MemorySnapshot;
  loading: boolean;
  refresh(): void;
}) {
  const [body, setBody] = useState<{ id: string; text: string }>();
  const request = useRef<AbortController | undefined>(undefined);
  useEffect(() => () => request.current?.abort(), []);
  const names = new Map(workspaces.map((w) => [w.id, w.title]));
  const items =
    snapshot?.items.filter((item) => item.workspaceId === workspaceId) ?? [];
  const links =
    snapshot?.links.filter(
      (link) => link.readerId === workspaceId || link.sourceId === workspaceId,
    ) ?? [];
  return (
    <section className="wg-memory-details" aria-label="工作区记忆">
      <div className="wg-memory-heading">
        <h3>工作区记忆</h3>
        <button disabled={!provider || loading} onClick={refresh}>
          刷新记忆
        </button>
      </div>
      {!provider ? (
        <p>此宿主未提供记忆连接。</p>
      ) : !snapshot ? (
        <p role="status">正在读取记忆…</p>
      ) : snapshot.status !== "available" ? (
        <p role="status">{snapshot.message}</p>
      ) : (
        <>
          <p className="wg-small-note">
            紫色箭头：读取方 → 记忆来源方。只统计按 ID
            打开的正文，索引注入不连线。关系按现有来源与累计记录解析，无法还原来源变更前的完整历史。
          </p>
          {links.map((link) => (
            <p
              className="wg-memory-relation"
              key={JSON.stringify([link.readerId, link.sourceId])}
            >
              {names.get(link.readerId)} → {names.get(link.sourceId)} ·{" "}
              {link.count} 次读取 · {link.memoryIds.length} 条记忆
            </p>
          ))}
          {!items.length && <p>此工作区尚无可见记忆。</p>}
          {items.map((item) => (
            <article key={item.id} className="wg-memory-item">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <small>
                {item.scope === "global" ? "全局共享" : "工作区"} · {item.type}{" "}
                · 来源：
                {item.sourceWorkspaceId
                  ? (names.get(item.sourceWorkspaceId) ?? "未知")
                  : "未记录"}
              </small>
              <small>
                正文读取 {item.useCount} 次
                {item.lastUsedAt
                  ? " · 最近 " + new Date(item.lastUsedAt).toLocaleString()
                  : ""}
              </small>
              <button
                aria-label={"查看正文：" + item.title}
                onClick={async () => {
                  request.current?.abort();
                  const controller = new AbortController();
                  request.current = controller;
                  setBody({ id: item.id, text: "正在读取…" });
                  try {
                    const text = await provider.body(
                      workspaceId,
                      item.id,
                      controller.signal,
                    );
                    if (!controller.signal.aborted)
                      setBody({ id: item.id, text });
                  } catch {
                    if (!controller.signal.aborted)
                      setBody({ id: item.id, text: "正文暂不可用，请重试。" });
                  }
                }}
              >
                查看正文
              </button>
              {body?.id === item.id && (
                <pre className="wg-memory-body">{body.text}</pre>
              )}
            </article>
          ))}
        </>
      )}
    </section>
  );
}
