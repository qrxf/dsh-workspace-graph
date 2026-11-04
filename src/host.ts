import type { Context } from "@deepseek-ai/cordis";
import {
  Remote,
  RemoteError,
  TypertRemoteService,
} from "@deepseek-ai/dsh-typert-protocol";
import { join } from "node:path";
import { homedir } from "node:os";
import { MEMORY_NAMESPACE, memoryAccessAllowed } from "./memory-rpc.ts";
import { readMemorySnapshot, readMemoryBody } from "./memory-store.ts";
import type { MemoryWorkspace } from "./memory-store.ts";
class GraphMemoryService extends TypertRemoteService {
  private readonly file: string;
  constructor(ctx: Context) {
    super(ctx, MEMORY_NAMESPACE);
    this.file = join(
      process.env.DSH_HOME?.trim() || join(homedir(), ".dsh"),
      "evolve",
      "memory.db",
    );
  }
  private workspaces(signal: AbortSignal): MemoryWorkspace[] {
    const context = this.ctx as unknown as {
      invocation?: {
        peer: { principal: { kind: string }; signal: AbortSignal };
      };
      workspaceRegistry: { list(): MemoryWorkspace[] };
    };
    const peer = context.invocation?.peer;
    if (!memoryAccessAllowed(peer, signal))
      throw new RemoteError(
        "remote-access/denied",
        "记忆详情仅宿主所有者可访问",
        { action: MEMORY_NAMESPACE, reason: "owner-only" },
      );
    return context.workspaceRegistry.list();
  }
  @Remote
  snapshot(signal: AbortSignal) {
    return readMemorySnapshot(this.file, this.workspaces(signal));
  }
  @Remote
  body(workspaceId: string, id: string, signal: AbortSignal) {
    return readMemoryBody(this.file, this.workspaces(signal), workspaceId, id);
  }
}
/** Optional owner-only Remote service: same /api gateway on Web and desktop IPC. */
export function apply(ctx: Context): void {
  ctx.inject(["workspaceRegistry"], (scoped) => {
    scoped.plugin(GraphMemoryService);
  });
}
