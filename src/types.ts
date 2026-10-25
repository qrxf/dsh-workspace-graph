export type Status = "running" | "waiting" | "unread" | "idle" | "unknown";
export interface Point {
  x: number;
  y: number;
}
export interface Viewport extends Point {
  zoom: number;
}
export interface WorkspaceRow {
  id: string;
  title: string;
  path: string;
  sessionIds: readonly string[];
}
export interface SessionRow {
  parentId?: string;
  contentVersion?: string;
  id: string;
  title: string;
  cwd?: string;
  updatedAt: number;
  running?: boolean;
  pending?: boolean;
  unread?: boolean;
  blank?: boolean;
  origin?: string;
}
export interface GraphCatalog {
  currentSessionId?: string;
  workspaces: WorkspaceRow[];
  sessions: SessionRow[];
  archivedSessionIds: string[];
  loading: boolean;
  error?: string;
}
export interface Filters {
  recency?: "all" | "recent" | "early" | "unknown";
  frequency?: "all" | "frequent" | "infrequent" | "accumulating";
  statuses?: Status[];
  workspace: string;
  status: "all" | Status;
  kind: "all" | "workspace" | "session";
  archived: boolean;
  query: string;
}
export interface ViewState {
  viewport?: Viewport;
  filters?: Filters;
}
export interface LayoutDocument {
  settings?: GraphSettings;
  schemaVersion: 1;
  revision: number;
  positions: Record<string, Point>;
  collapsed: string[];
  views: Record<string, ViewState>;
}
export interface LayoutPatch {
  settings?: Partial<GraphSettings>;
  positions?: Record<string, Point>;
  collapsed?: string[];
  views?: Record<string, ViewState>;
}
export interface GraphSettings {
  theme: string;
  reducedMotion: boolean;
  pinned?: string[];
  usage?: Record<string, UsageHistory>;
  manualSummaries?: Record<string, string>;
}
export interface UsageHistory {
  since: number;
  visits: number[];
}
export interface BubbleData extends Record<string, unknown> {
  parentWorkspaceId?: string;
  parentSessionId?: string;
  childWorkspaceCount?: number;
  context?: boolean;
  pinned?: boolean;
  recency?: "recent" | "early" | "unknown";
  frequency?: "frequent" | "infrequent" | "accumulating";
  current?: boolean;
  working?: boolean;
  kind: "workspace" | "session";
  entityId: string;
  title: string;
  status: Status;
  path?: string;
  workspaceId?: string;
  archived?: boolean;
  count?: number;
  total?: number;
  virtual?: boolean;
  updatedAt?: number;
  collapsed?: boolean;
}
export interface BubbleNode {
  id: string;
  type: "bubble";
  position: Point;
  data: BubbleData;
}
export interface GraphProjection {
  nodes: BubbleNode[];
  edges: {
    id: string;
    source: string;
    target: string;
    sourceHandle?: string;
    targetHandle?: string;
  }[];
  matched: number;
  total: number;
  hidden: number;
}
export interface GraphActions {
  openSession(id: string): void | Promise<void>;
  openWorkspace(id: string): void | Promise<void>;
  newSession(id?: string): void | Promise<void>;
  archive(id: string): Promise<void>;
  restore(id: string): Promise<void>;
  renameWorkspace(id: string, title: string): Promise<void>;
}
export const defaultFilters: Filters = {
  recency: "recent",
  workspace: "all",
  status: "all",
  kind: "all",
  archived: false,
  query: "",
};
