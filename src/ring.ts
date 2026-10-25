export const SUMMARY_TIMING = {
  enterMs: 200,
  leaveMs: 150,
  viewGraceMs: 600,
  revolutionSeconds: 45,
  fontSize: 12,
};
export function graphemes(text: string): string[] {
  return [
    ...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text),
  ].map((s) => s.segment);
}
export function ringGlyphs(
  text: string,
  radius: number,
  fontSize = SUMMARY_TIMING.fontSize,
) {
  const capacity = Math.max(
      1,
      Math.floor((2 * Math.PI * radius) / (fontSize + 3)),
    ),
    parts = graphemes(text);
  const visible =
    parts.length > capacity
      ? [...parts.slice(0, Math.max(0, capacity - 1)), "…"]
      : parts;
  return visible.map((text, i) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / visible.length;
    return { text, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
  });
}
