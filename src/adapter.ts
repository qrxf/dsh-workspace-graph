import type { GraphCatalog } from "./types.ts";
import type { WorkspaceSnapshot } from "@deepseek-ai/dsh-api-workspace-controller/client";
import type { SessionListState } from "@deepseek-ai/dsh-api-session-controller/client";
import type { SessionStatusSnapshot } from "@deepseek-ai/dsh-client-ui-session/client";
export function toCatalog(
  workspaces: unknown,
  sessions: unknown,
  statuses: unknown,
): GraphCatalog {
  const w = workspaces as WorkspaceSnapshot | undefined,
    s = sessions as SessionListState | undefined,
    status = statuses as SessionStatusSnapshot | undefined;
  return {
    loading: w?.phase !== "ready" || s?.phase !== "ready",
    error: w?.error?.message,
    workspaces: (w?.items ?? []).map((row) => ({
      id: row.workspaceId,
      title: row.title,
      path: row.path,
      sessionIds: row.sessionIds,
    })),
    archivedSessionIds: [...(w?.archivedSessionIds ?? [])],
    sessions: (s?.ids ?? []).flatMap((id) => {
      const row = s?.byId[id];
      if (!row) return [];
      const live = status?.get(id);
      return [
        {
          id,
          title: row.title || row.displayTitle || "未命名会话",
          cwd: row.cwd,
          updatedAt: row.updatedAt,
          running: live?.running ?? row.running,
          pending: !!live?.pendingInteraction,
          unread: live?.completionUnread,
          blank: row.blank,
          origin: row.origin,
        },
      ];
    }),
  };
}
