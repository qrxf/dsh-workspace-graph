export const MEMORY_CHANNEL = "/api";
export const MEMORY_NAMESPACE = "workspaceGraphMemory";
interface Peer {
  principal: { kind: string };
  signal: AbortSignal;
}
export function memoryAccessAllowed(
  peer: Peer | undefined,
  signal: AbortSignal,
): boolean {
  return (
    !!peer &&
    peer.principal.kind === "owner" &&
    !peer.signal.aborted &&
    !signal.aborted
  );
}
