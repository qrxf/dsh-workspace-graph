import { useCallback, useEffect, useRef, useState } from "react";
import type { Node } from "@xyflow/react";
import type { BubbleData, GraphProjection, Point } from "./types.ts";
import { PhysicsWorld } from "./physics.ts";
import type { DragMode } from "./physics.ts";
export function useGraphPhysics(
  projection: GraphProjection,
  reduced: boolean,
  onSettled: (p: Record<string, Point>) => void,
) {
  const [nodes, setNodes] = useState<Node<BubbleData>[]>([]);
  const [ropes, setRopes] = useState<
    Record<string, { softness: number; stretch: number }>
  >({});
  const world = useRef(new PhysicsWorld()),
    frame = useRef<number>(),
    last = useRef(0),
    settled = useRef(onSettled),
    dragged = useRef<string>(),
    hovered = useRef<string>();
  const forcePositions = useRef(false);
  const savedPositions = useRef(new WeakSet<Point>());
  settled.current = onSettled;
  const savePositions = useCallback(() => {
    const positions = world.current.positions();
    // LayoutRepository keeps these point objects. Recognize our own snapshots
    // even if the async save returns after physics has advanced another frame.
    for (const position of Object.values(positions))
      savedPositions.current.add(position);
    settled.current(positions);
  }, []);
  const publish = useCallback(() => {
    const positions = world.current.positions();
    setRopes(
      Object.fromEntries(
        world.current.links.map((l) => [
          JSON.stringify([l.source, l.target]),
          world.current.ropeState(l.source, l.target),
        ]),
      ),
    );
    setNodes((old) =>
      old.map((n) => {
        const position = positions[n.id];
        return position &&
          (position.x !== n.position.x || position.y !== n.position.y)
          ? { ...n, position }
          : n;
      }),
    );
  }, []);
  const wake = useCallback(() => {
    if (frame.current !== undefined) return;
    last.current = performance.now();
    const tick = (now: number) => {
      world.current.step((now - last.current) / 1000);
      last.current = now;
      publish();
      if (world.current.active) frame.current = requestAnimationFrame(tick);
      else {
        frame.current = undefined;
        savePositions();
      }
    };
    frame.current = requestAnimationFrame(tick);
  }, [publish, savePositions]);
  useEffect(() => {
    world.current.reduced = reduced;
  }, [reduced]);
  useEffect(() => {
    const changed = world.current.sync(
      projection.nodes,
      projection.edges,
      forcePositions.current,
      savedPositions.current,
    );
    forcePositions.current = false;
    const positions = world.current.positions();
    setNodes((old) => {
      const byId = new Map(old.map((n) => [n.id, n]));
      return projection.nodes.map((n) => ({
        ...byId.get(n.id),
        ...n,
        position: positions[n.id] ?? n.position,
      }));
    });
    if (changed) wake();
  }, [projection, wake]);
  useEffect(
    () => () => {
      if (frame.current !== undefined) cancelAnimationFrame(frame.current);
    },
    [],
  );
  const hover = useCallback(
    (id?: string) => {
      if (hovered.current && hovered.current !== dragged.current)
        world.current.unpin(hovered.current);
      hovered.current = id;
      if (id && !dragged.current) {
        const p = world.current.positions()[id];
        if (p) world.current.pin(id, p);
      }
      if (world.current.active) wake();
    },
    [wake],
  );
  const drag = useCallback(
    (id: string, p: Point, mode: DragMode = "elastic") => {
      hover();
      dragged.current = id;
      world.current.drag(id, p, mode);
      publish();
      wake();
    },
    [hover, publish, wake],
  );
  const release = useCallback(
    (id: string) => {
      world.current.release(id);
      dragged.current = undefined;
      savePositions();
      wake();
    },
    [savePositions, wake],
  );
  useEffect(() => {
    const mode = (event: KeyboardEvent) => {
      const id = dragged.current;
      if (!id || event.key !== "Control") return;
      const p = world.current.positions()[id];
      if (p) drag(id, p, event.type === "keydown" ? "free" : "elastic");
    };
    const cancel = () => {
      if (dragged.current) release(dragged.current);
    };
    window.addEventListener("keydown", mode);
    window.addEventListener("keyup", mode);
    window.addEventListener("blur", cancel);
    window.addEventListener("pointercancel", cancel);
    return () => {
      window.removeEventListener("keydown", mode);
      window.removeEventListener("keyup", mode);
      window.removeEventListener("blur", cancel);
      window.removeEventListener("pointercancel", cancel);
    };
  }, [drag, release]);
  return {
    nodes,
    ropes,
    setNodes,
    drag,
    release,
    hover,
    world: world.current,
    forceNextSync: () => {
      forcePositions.current = true;
    },
  };
}
