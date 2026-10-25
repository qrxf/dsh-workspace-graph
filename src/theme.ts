export const DEFAULT_THEME = "#6aabff";
export function normalizeColor(value: unknown): string | undefined {
  if (typeof value !== "string") return;
  const hex = value.trim().toLowerCase();
  if (/^#[\da-f]{6}$/.test(hex)) return hex;
  if (/^#[\da-f]{3}$/.test(hex))
    return "#" + [...hex.slice(1)].map((c) => c + c).join("");
}
const rgb = (hex: string) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const mix = (a: string, b: string, weight: number) =>
  "#" +
  rgb(a)
    .map((v, i) =>
      Math.round(v * (1 - weight) + rgb(b)[i] * weight)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("");
const luminance = (hex: string) =>
  rgb(hex)
    .map((v) => v / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
export function contrast(a: string, b: string) {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
export function deriveTheme(value: string) {
  const color = normalizeColor(value) ?? DEFAULT_THEME;
  return {
    workspace: mix(color, "#243247", 0.8),
    expanded: mix(color, "#080d17", 0.94),
    session: mix(color, "#ffffff", 0.82),
    text: "#ffffff",
    sessionText: "#111827",
    accent: mix(color, "#ffffff", 0.55),
  };
}
