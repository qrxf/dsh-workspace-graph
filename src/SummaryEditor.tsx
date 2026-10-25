import React, { useState, useEffect } from "react";
import { graphemes } from "./ring.ts";
export function SummaryEditor({
  value,
  onSave,
}: {
  value: string;
  onSave: (text: string) => void;
}) {
  const [text, setText] = useState(value);
  useEffect(() => setText(value), [value]);
  return (
    <form
      className="wg-summary-editor"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(text.trim());
      }}
    >
      <label>
        手动短概括
        <textarea
          aria-label="手动短概括"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={4000}
          placeholder="建议 12–24 字；留空使用插件摘要或原标题"
        />
      </label>
      <p className="wg-small-note">
        {graphemes(text).length} 个字符 · 仅保存在当前浏览器
      </p>
      <button>保存概括</button>
    </form>
  );
}
