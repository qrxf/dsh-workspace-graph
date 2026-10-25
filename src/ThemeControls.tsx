import React, { useEffect, useState } from "react";
import { DEFAULT_THEME, normalizeColor } from "./theme.ts";
export function ThemeControls({
  color,
  reduced,
  onColor,
  onReduced,
}: {
  color: string;
  reduced: boolean;
  onColor: (v: string) => void;
  onReduced: (v: boolean) => void;
}) {
  const [hex, setHex] = useState(color),
    [invalid, setInvalid] = useState(false);
  const [localReduced, setLocalReduced] = useState(reduced);
  useEffect(() => setLocalReduced(reduced), [reduced]);
  useEffect(() => {
    setHex(color);
    setInvalid(false);
  }, [color]);
  const submit = () => {
    const next = normalizeColor(hex);
    setInvalid(!next);
    if (next) onColor(next);
  };
  return (
    <details className="wg-theme">
      <summary>主题与动态效果</summary>
      <div className="wg-theme-controls">
        <label>
          主题色{" "}
          <input
            type="color"
            aria-label="主题色"
            value={color}
            onChange={(e) => onColor(e.target.value)}
          />
        </label>
        <input
          aria-label="主题 HEX"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          onBlur={submit}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          aria-invalid={invalid}
        />
        <button onClick={submit}>应用颜色</button>
        {["#6aabff", "#c084fc", "#2dd4bf", "#fb923c"].map((c) => (
          <button
            key={c}
            aria-label={"配色 " + c}
            onClick={() => onColor(c)}
            style={{ borderColor: c }}
          >
            ●
          </button>
        ))}
        <button onClick={() => onColor(DEFAULT_THEME)}>恢复默认色</button>
        {invalid && (
          <span role="alert">请输入有效的 HEX 色值，例如 #6aabff</span>
        )}
        <label className="wg-check">
          <input
            type="checkbox"
            checked={localReduced}
            onChange={(e) => {
              setLocalReduced(e.target.checked);
              onReduced(e.target.checked);
            }}
          />
          减少动态效果（也遵循系统设置）
        </label>
      </div>
    </details>
  );
}
