import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useViewport, useReactFlow } from "@xyflow/react";
import type { BubbleNode } from "./types.ts";
import { ringGlyphs, SUMMARY_TIMING } from "./ring.ts";
export function SummaryRing({
  node,
  text,
  source,
  reduced,
  onEnter,
  onLeave,
  onViewAdjust,
}: {
  node: Pick<BubbleNode, "id" | "position" | "data">;
  text: string;
  source: string;
  reduced: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onViewAdjust?: () => void;
}) {
  const viewport = useViewport(),
    flow = useReactFlow(),
    root = useRef<HTMLDivElement>(null),
    readable = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 1440, height: 900 });
  useLayoutEffect(() => {
    const canvas = root.current?.parentElement;
    if (!canvas) return;
    const update = () => {
      const rect = canvas.getBoundingClientRect();
      setSize((old) =>
        old.width === rect.width && old.height === rect.height
          ? old
          : { width: rect.width, height: rect.height },
      );
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);
  const radius = Math.min(
    Math.max(68, 37 * viewport.zoom + 28),
    Math.max(28, (size.height - 120) / 2),
    Math.max(28, (size.width - 32) / 2),
  );
  const cardWidth = Math.min(250, Math.max(60, size.width - 24)),
    cardHeight = Math.min(120, Math.max(44, size.height - 2 * radius - 54));
  const cx = node.position.x * viewport.zoom + viewport.x + 72 * viewport.zoom;
  const cy = node.position.y * viewport.zoom + viewport.y + 37 * viewport.zoom;
  useEffect(() => {
    const canvas = root.current?.parentElement;
    if (!canvas) return;
    const adjust = () => {
      const { width, height } = canvas.getBoundingClientRect(),
        card = readable.current?.getBoundingClientRect();
      const marginX = Math.min(
          Math.max(radius + 14, (card?.width ?? cardWidth) / 2 + 12),
          width / 2,
        ),
        top = radius + 14,
        bottom = radius + 18 + (card?.height ?? cardHeight) + 12;
      const dx = Math.max(marginX, Math.min(width - marginX, cx)) - cx,
        dy = Math.max(top, Math.min(height - bottom, cy)) - cy;
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        onViewAdjust?.();
        void flow.setViewport({
          ...viewport,
          x: viewport.x + dx,
          y: viewport.y + dy,
        });
      }
    };
    adjust();
    const observer = new ResizeObserver(adjust);
    observer.observe(canvas);
    if (readable.current) observer.observe(readable.current);
    return () => observer.disconnect();
  }, [cx, cy, radius, flow, viewport, cardWidth, cardHeight, onViewAdjust]);
  return (
    <div
      ref={root}
      className={
        "wg-summary-overlay nodrag nopan" + (reduced ? " is-static" : "")
      }
      style={
        {
          left: cx,
          top: cy,
          "--wg-orbit-duration": SUMMARY_TIMING.revolutionSeconds + "s",
        } as React.CSSProperties
      }
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <svg
        className="wg-ring-hit"
        width={2 * radius + 80}
        height={2 * radius + 80}
        style={{ left: -radius - 40, top: -radius - 40 }}
        aria-hidden="true"
      >
        <circle
          cx={radius + 40}
          cy={radius + 40}
          r={radius}
          fill="none"
          stroke="transparent"
          strokeWidth={64}
        />
      </svg>
      <div className="wg-ring-orbit" aria-hidden="true">
        {ringGlyphs(text, radius).map((g, i) => (
          <span
            className="wg-ring-slot"
            key={i}
            style={{ left: g.x, top: g.y }}
          >
            <span className="wg-ring-glyph">{g.text}</span>
          </span>
        ))}
      </div>
      <div
        ref={readable}
        className="wg-summary-readable"
        role="note"
        tabIndex={0}
        style={{
          top: radius + 18,
          left: -cardWidth / 2,
          width: cardWidth,
          maxHeight: cardHeight,
        }}
      >
        <span>{source}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
