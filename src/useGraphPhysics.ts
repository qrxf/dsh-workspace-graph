import { useCallback, useEffect, useRef, useState } from "react";
import type { Node } from "@xyflow/react";
import type { BubbleData, GraphProjection, Point } from "./types.ts";
import { PhysicsWorld } from "./physics.ts";
export function useGraphPhysics(
  projection: GraphProjection,
  reduced: boolean,
  onSettled: (p: Record<string, Point>) => void,
) {
  const [nodes, setNodes] = useState<Node<BubbleData>[]>([]);
  const world = useRef(new PhysicsWorld()),
    frame = useRef<number>(),
    last = useRef(0),
    settled = useRef(onSettled),
    dragged = useRef<string>(),
    hovered = useRef<string>();
  const forcePositions = useRef(false);
  settled.current = onSettled;
  const publish = useCallback(() => {
    const positions = world.current.positions();
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
        settled.current(world.current.positions());
      }
    };
    frame.current = requestAnimationFrame(tick);
  }, [publish]);
  useEffect(() => {
    world.current.reduced = reduced;
  }, [reduced]);
  useEffect(() => {
    const changed = world.current.sync(
      projection.nodes,
      projection.edges,
      forcePositions.current,
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
    (id: string, p: Point) => {
      hover();
      dragged.current = id;
      world.current.drag(id, p);
      publish();
      wake();
    },
    [hover, publish, wake],
  );
  const release = useCallback(
    (id: string) => {
      world.current.release(id);
      dragged.current = undefined;
      settled.current(world.current.positions());
      wake();
    },
    [wake],
  );
  return {
    nodes,
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
