import React, { useMemo, useState } from "react";
import type { BubbleNode, Status } from "./types.ts";
export function NavigationPanel({
  rows,
  title,
  onLocate,
}: {
  rows: BubbleNode[];
  title: string;
  onLocate: (id: string) => void;
}) {
  const [limit, setLimit] = useState(50);
  // Reset pagination for a new result set without mounting thousands of rows.
  const key = rows;
  const visible = useMemo(() => rows.slice(0, limit), [key, limit]);
  const labels: Record<Status, string> = {
    running: "运行中",
    waiting: "等待回应",
    unread: "新结果",
    idle: "空闲",
    unknown: "未知",
  };
  return (
    <section className="wg-navigation" aria-label="会话导航">
      <h2>
        {title} <span>{rows.length} 个会话</span>
      </h2>
      {!rows.length && <p>没有匹配会话，可调整时间、状态或搜索条件。</p>}
      <div className="wg-result-list">
        {visible.map((n) => (
          <button
            key={n.id}
            aria-label={"定位 " + n.data.title}
            onClick={() => onLocate(n.data.entityId)}
          >
            <strong>
              {n.data.pinned ? "★ " : ""}
              {n.data.title}
            </strong>
            <span>
              {labels[n.data.status]}
              {n.data.current ? " · 当前" : ""}
            </span>
            {n.data.path && <small>{n.data.path}</small>}
          </button>
        ))}
      </div>
      {rows.length > limit && (
        <button onClick={() => setLimit(limit + 50)}>再显示 50 条结果</button>
      )}
    </section>
  );
}
