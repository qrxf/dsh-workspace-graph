import type { Point } from "./types.ts";
export type Circle = Point & { radius: number };
export function bubbleGeometry(kind: "workspace" | "session") {
  const radius = kind === "workspace" ? 53 : 37;
  return { offset: { x: 72, y: radius }, radius };
}
export function circleEndpoints(a: Circle, b: Circle) {
  const dx = b.x - a.x,
    dy = b.y - a.y,
    length = Math.hypot(dx, dy);
  const nx = length > 1e-9 ? dx / length : 1,
    ny = length > 1e-9 ? dy / length : 0;
  return {
    source: { x: a.x + nx * a.radius, y: a.y + ny * a.radius },
    target: { x: b.x - nx * b.radius, y: b.y - ny * b.radius },
  };
}
