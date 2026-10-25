import React from "react";
import { BaseEdge, useInternalNode } from "@xyflow/react";
import type { EdgeProps, Node } from "@xyflow/react";
import type { BubbleData } from "./types.ts";
import { bubbleGeometry, circleEndpoints } from "./geometry.ts";

export function RopeEdge({ id, source, target, style, data }: EdgeProps) {
  const a = useInternalNode<Node<BubbleData>>(source),
    b = useInternalNode<Node<BubbleData>>(target);
  if (!a || !b) return null;
  const circle = (n: typeof a) => {
    const g = bubbleGeometry(n.data.kind),
      p = n.internals.positionAbsolute;
    return { x: p.x + g.offset.x, y: p.y + g.offset.y, radius: g.radius };
  };
  const p = circleEndpoints(circle(a), circle(b));
  const dx = p.target.x - p.source.x,
    dy = p.target.y - p.source.y,
    length = Math.hypot(dx, dy);
  const softness = Number(data?.softness ?? 0),
    bend = Math.min(48, length * 0.15) * softness;
  const cx = (p.source.x + p.target.x) / 2 - (length ? dy / length : 0) * bend;
  const cy = (p.source.y + p.target.y) / 2 + (length ? dx / length : 0) * bend;
  return (
    <BaseEdge
      id={id}
      path={`M ${p.source.x},${p.source.y} Q ${cx},${cy} ${p.target.x},${p.target.y}`}
      style={style}
    />
  );
}
