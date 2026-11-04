import { useCallback, useEffect, useState } from "react";
import type { MemoryProvider, MemorySnapshot } from "./memory.ts";

export function useMemory(provider?: MemoryProvider) {
  const [snapshot, setSnapshot] = useState<MemorySnapshot>();
  const [loading, setLoading] = useState(false);
  const [revision, setRevision] = useState(0);
  const refresh = useCallback(() => setRevision((n) => n + 1), []);
  useEffect(() => {
    if (!provider) {
      setSnapshot(undefined);
      return;
    }
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    const load = async () => {
      setLoading(true);
      try {
        const result = await provider.snapshot(controller.signal);
        if (!controller.signal.aborted) setSnapshot(result);
      } catch {
        if (!controller.signal.aborted)
          setSnapshot({
            status: "error",
            message: "记忆连接不可用，请刷新重试。",
            items: [],
            links: [],
          });
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
          timer = setTimeout(() => void load(), 15000);
        }
      }
    };
    void load();
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [provider, revision]);
  return { snapshot, loading, refresh };
}
