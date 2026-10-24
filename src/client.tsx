import type { RemoteEndpoint } from "@deepseek-ai/dsh-api-remote-access/client";
import React from "react";
import type { Context } from "@deepseek-ai/cordis";
import type {} from "@deepseek-ai/dsh-client-ui-renderer/client";
import type {} from "@deepseek-ai/dsh-client-ui-sidebar/client";
import type {} from "@deepseek-ai/dsh-client-ui-layout/client";
import type {} from "@deepseek-ai/dsh-client-ui-workspace/client";
import type {} from "@deepseek-ai/dsh-api-workspace-controller/client";
import type { WorkspaceId } from "@deepseek-ai/dsh-api-workspace-controller/client";
import type { SessionId } from "@deepseek-ai/dsh-session/types";
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots";
import { GraphPage } from "./GraphPage.tsx";
import { toCatalog } from "./adapter.ts";
import { LayoutRepository } from "./layout.ts";
import type { GraphActions } from "./types.ts";
import css from "./styles.css";
import flowCss from "@xyflow/react/dist/style.css";
const PANEL = "workspace-graph";
const identity = <T,>(snapshot: T): T => snapshot;
interface Injected {
  actions: GraphActions;
  repository: LayoutRepository;
}
function NativePanel(props: PropsRuntime<"main"> & Injected) {
  const workspaces = props.useWorkspaces(identity),
    sessions = props.useSessions(identity),
    statuses = props.useSessionStatus(identity);
  const catalog = React.useMemo(
    () => toCatalog(workspaces, sessions, statuses),
    [workspaces, sessions, statuses],
  );
  return (
    <GraphPage
      catalog={catalog}
      actions={props.actions}
      repository={props.repository}
      access={{
        useCreate: () =>
          props.useRemoteAccess("session/create" as RemoteEndpoint),
        useWorkspace: (id, action) =>
          props.useWorkspaceAccess(id as WorkspaceId, action as RemoteEndpoint),
        useSession: (id, action) =>
          props.useSessionAccess(id as SessionId, action as RemoteEndpoint),
      }}
    />
  );
}
function PanelIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="m7 8 5 7m0 0 7-7M7 8h12" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="19" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
    </svg>
  );
}
export const inject = [
  "slots",
  "uiWorkspace",
  "uiSession",
  "workspaces",
  "sessions",
];
export function apply(ctx: Context) {
  // The browser origin and native UUIDs isolate layout identity. No credentials, history or API calls are stored.
  let storage: Pick<Storage, "getItem" | "setItem">;
  try {
    storage = window.localStorage;
  } catch {
    storage = {
      getItem() {
        throw new Error("Browser storage is unavailable");
      },
      setItem() {
        throw new Error("Browser storage is unavailable");
      },
    };
  }
  const repository = new LayoutRepository(storage, "dsh-workspace-graph:v1");
  const actions: GraphActions = {
    openSession: (id) => ctx.uiWorkspace.openSession(id as SessionId),
    openWorkspace: (id) => ctx.uiWorkspace.openWorkspace(id as WorkspaceId),
    newSession: (id) =>
      ctx.uiWorkspace.startSession(id as WorkspaceId | undefined),
    archive: (id) => ctx.uiWorkspace.archiveSession(id as SessionId),
    restore: (id) => ctx.uiWorkspace.unarchiveSession(id as SessionId),
    renameWorkspace: async (id, title) => {
      await ctx.workspaces.rename(id as WorkspaceId, title);
    },
  };
  ctx.effect(() => {
    const style = document.createElement("style");
    style.dataset.plugin = "dsh-workspace-graph";
    style.textContent = "@scope (.wg-root) { " + flowCss + " }" + css;
    document.head.append(style);
    return () => style.remove();
  });
  ctx.slots.inject("main", () =>
    ctx.slots.register(
      { name: "main", key: PANEL, inject: () => ({ actions, repository }) },
      NativePanel,
    ),
  );
  ctx.slots.inject("sidebar.panellist", () =>
    ctx.slots.register(
      { name: "sidebar.panellist", id: PANEL, order: 85, label: "工作区图谱" },
      PanelIcon,
    ),
  );
}
