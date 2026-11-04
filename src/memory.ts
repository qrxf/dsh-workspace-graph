import type { BubbleNode } from "./types.ts";

export interface MemoryItem {
  workspaceId: string;
  id: string;
  title: string;
  description: string;
  type: string;
  scope: "project" | "global";
  sourceWorkspaceId?: string;
  useCount: number;
  lastUsedAt: string | null;
}
export interface MemoryLink {
  readerId: string;
  sourceId: string;
  count: number;
  lastReadAt: string;
  memoryIds: string[];
}
export interface MemorySnapshot {
  status: "available" | "missing" | "incompatible" | "error";
  message?: string;
  items: MemoryItem[];
  links: MemoryLink[];
}
export interface MemoryProvider {
  snapshot(signal?: AbortSignal): Promise<MemorySnapshot>;
  body(workspaceId: string, id: string, signal?: AbortSignal): Promise<string>;
}
/** Render-only overlay: deliberately excluded from GraphProjection and physics. */
export function projectMemoryLinks(
  snapshot: MemorySnapshot | undefined,
  nodes: readonly BubbleNode[],
) {
  const visible = new Set(nodes.map((n) => n.id));
  return (snapshot?.links ?? []).filter(
    (link) =>
      visible.has("workspace:" + link.readerId) &&
      visible.has("workspace:" + link.sourceId),
  );
}
