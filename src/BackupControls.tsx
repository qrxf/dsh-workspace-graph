import React, { useState } from "react";
import type { LayoutDocument } from "./types.ts";
import type { LayoutRepository } from "./layout.ts";

export function BackupControls({
  repository,
  snapshot,
  prepareImport,
  onImport,
  onError,
}: {
  repository: LayoutRepository;
  snapshot: () => LayoutDocument;
  prepareImport: () => Promise<string | null>;
  onImport: (raw: string, expected: string | null) => Promise<void>;
  onError: (message: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState<{
    raw: string;
    expected: string | null;
    doc: LayoutDocument;
  }>();
  return (
    <div className="wg-backup">
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        备份与恢复
      </button>
      {open && (
        <div className="wg-backup-panel" role="region" aria-label="备份与恢复">
          <p>备份包含概括、置顶、主题、使用记录、筛选和当前布局。</p>
          <button
            onClick={() => {
              const url = URL.createObjectURL(
                new Blob([JSON.stringify(snapshot(), null, 2)], {
                  type: "application/json",
                }),
              );
              const a = document.createElement("a");
              a.href = url;
              a.download = "workspace-graph-backup.json";
              a.click();
              setTimeout(() => URL.revokeObjectURL(url), 1000);
            }}
          >
            导出图谱备份
          </button>
          <label className="wg-backup-file">
            导入备份（JSON，最多 5 MB）
            <input
              type="file"
              accept=".json,application/json"
              aria-label="选择图谱备份"
              disabled={busy}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                setPreview(undefined);
                if (!file) return;
                setBusy(true);
                try {
                  if (file.size > 5 * 1024 * 1024)
                    throw new Error("备份超过 5 MB");
                  const raw = await file.text(),
                    doc = repository.previewBackup(raw);
                  const expected = await prepareImport();
                  setPreview({ raw, doc, expected });
                } catch (error) {
                  onError("无法读取备份：" + String(error));
                } finally {
                  setBusy(false);
                }
              }}
            />
          </label>
          {preview && (
            <div role="status">
              <p>
                将替换本地设置：
                {
                  Object.keys(preview.doc.settings?.manualSummaries ?? {})
                    .length
                }{" "}
                条概括、{preview.doc.settings?.pinned?.length ?? 0}{" "}
                个置顶。建议先导出当前备份。导入的位置仅在本次运行保留。
              </p>
              <button
                disabled={busy}
                onClick={async () => {
                  setBusy(true);
                  try {
                    await onImport(preview.raw, preview.expected);
                    setPreview(undefined);
                  } catch (error) {
                    onError("导入未完成：" + String(error));
                  } finally {
                    setBusy(false);
                  }
                }}
              >
                确认导入备份
              </button>
              <button disabled={busy} onClick={() => setPreview(undefined)}>
                取消导入
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
