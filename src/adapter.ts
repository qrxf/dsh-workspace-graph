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
  const currentSessionId = Object.values(s?.byId ?? {}).find(
    (row) => (row.retainedBy?.mainView ?? 0) > 0,
  )?.id;
  return {
    currentSessionId,
    loading: w?.phase !== "ready" || s?.phase !== "ready",
    error: w?.error?.message,
    workspaces: (w?.items ?? []).map((row) => ({
      id: row.workspaceId,
      title: row.title,
      path: row.path,
      sessionIds: row.sessionIds,
    })),
    archivedSessionIds: [...(w?.archivedSessionIds ?? [])],
    sessions: [
      ...new Set([
        ...(s?.ids ?? []),
        ...(currentSessionId ? [currentSessionId] : []),
      ]),
    ].flatMap((id) => {
      const row = s?.byId[id];
      if (!row) return [];
      const live = status?.get(id);
      return [
        {
          id,
          title: row.title || row.displayTitle || "未命名会话",
          cwd: row.cwd,
          parentId: row.parentId,
          updatedAt: row.updatedAt,
          running:
            s?.phase === "ready"
              ? live
                ? live.running
                : row.running
              : undefined,
          pending: !!live?.pendingInteraction,
          unread: live?.completionUnread,
          blank: row.blank,
          origin: row.origin,
        },
      ];
    }),
  };
}
