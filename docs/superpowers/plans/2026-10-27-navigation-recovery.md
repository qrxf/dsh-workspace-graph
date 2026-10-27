# Navigation and recovery implementation plan

> **For agentic workers:** Use superpowers:executing-plans task by task. Track completion below.

**Goal:** Make sessions easier to find, preserve local work during recovery, and verify navigation at realistic catalog sizes.

**Architecture:** Keep native catalog data authoritative. Add local backup controls and a navigation panel around the existing graph. Projection exposes matching sessions independently of graph pagination; explicit result selection temporarily reveals its source chain. Cache catalog-only tree defaults without caching mutable layout state.

**Tech Stack:** TypeScript, React, React Flow, Node test runner, Playwright, native DSH.

**Spec:** The six recommendations in the preceding review, authorized by the user's “开始”. This document records implementation choices for that scope.

## Global constraints

- Work in `D:\Project\dsh-workspace-graph`; preserve existing edits and status glow.
- Dragging and navigation never change workspace/session membership.
- Keep default entry recent and collapsed; clearing filters means all time.
- Runtime positions remain runtime-only; backup import explicitly restores positions for this run.
- No new dependencies, model requests, publication or commits.

## Review focus

- Invalid/future backups, quota failures and newer cross-window writes must leave existing data intact.
- Search must find summaries/paths and sessions beyond collapsed/paginated graph nodes.
- Current/running/waiting sessions remain visible and are marked when outside filters.
- Selecting and returning from a result preserves the previous graph viewport.
- Large hidden catalogs must not render thousands of nodes; disconnected status facts must not remain running.

## Task 1: Recovery and backup

Files: `src/layout.ts`, new `src/BackupControls.tsx`, `src/GraphPage.tsx`, `tests/layout.test.ts`.

- [x] Add failing tests for backup round-trip, malformed/future imports, stale writes, and quota atomicity; run them RED.
- [x] Add `previewBackup(raw)` and `importBackup(raw, expectedRaw)` with existing schema validation, normalized durable settings, runtime positions and guarded atomic write.
- [x] Add always-available export/import preview and confirmation; accurately label full local data deletion and its consequences.
- [x] Run layout tests GREEN.

## Task 2: Search and navigation

Files: `src/model.ts`, `src/types.ts`, new `src/NavigationPanel.tsx`, `src/GraphPage.tsx`, new `tests/navigation.test.ts`, new `tests/navigation-browser.mjs`.

- [x] Test summary/path search, matching results beyond pagination, explicit reveal with source context, and clear-vs-default filters RED.
- [x] Expose `GraphProjection.matches`, add optional reveal ID to projection, and include summary/path in search.
- [x] Add search results and graph/list switch; selecting a session reveals and centers it, with return to the captured viewport. Debounce search persistence rather than typing.
- [x] Clear all filters using `clearedFilters`; offer separate restore-default control.
- [x] Run navigation unit and browser tests GREEN.

## Task 3: Attention and readability

Files: `src/NavigationPanel.tsx`, `src/GraphPage.tsx`, `src/styles.css`, navigation tests.

- [x] Test global exclusive waiting/running/unread counts and result selection independently of graph filters RED.
- [x] Add global status shortcuts and explicit “筛选外活动” badges.
- [x] At zoom below 0.55 hide secondary node labels; retain title and status. List/search results remain readable at every zoom.
- [x] Run targeted browser checks GREEN.

## Task 4: Scale and regression automation

Files: `src/treeLayout.ts`, new `tests/catalog-performance.mjs`, `package.json`, `.github/workflows/ci.yml`, README and verification record.

- [x] Test catalog cache identity and invalidation; benchmark 1,000/5,000 catalog sessions with limited visible nodes.
- [x] Cache only immutable catalog-derived defaults; preserve layout movement and live metadata updates.
- [x] Add a portable sequential interaction suite, run it in CI, and add a pinned DSH native release/manual workflow.
- [x] Run unit/type/build/diff, main and targeted browser tests, isolated native integration and performance checks. Record any unavailable real-model scenarios explicitly.
- [x] Request a fresh final code review, fix material findings, and record final results here.

## Execution ledger

- Baseline: 73/73 units, typecheck and ten browser regression groups passed during the preceding review.
- In-place feature branch chosen to honor canonical-directory instructions and preserve five existing modified files.
- Task 1 complete: backup layout tests RED to GREEN, including stale-window revisions and quota failure; import preview waits for pending local filter saves.
- Tasks 2 and 3 complete: navigation browser RED to GREEN, real viewport return, exclusive status counters, default collapse, and narrow list/details separation.
- Task 4 complete: 81/81 units, typecheck/build/diff, ten main browser groups and all thirteen interaction scripts passed across full and targeted reruns. Local rc.2/rc.4 native tests passed; CI configuration is prepared but not run remotely.
- User steering complete: dense ring units and real hook at 30/60/120 Hz, physical fast drag plus immediate release, synchronous/asynchronous first-entry center and remount viewport preservation passed.
- Review: independent read-only review; two Important findings fixed with RED to GREEN regression tests. Focused physics/initial-view review had no material findings. Minor default-collapse and asynchronous-entry coverage also resolved.
- Rulings: canonical checkout retained; no commits. Native rc.2 cold startup required a 180s allowance after an initial 60s timeout. Real model and remote CI execution remain unverified, documented in docs/verification-2026-10-27.md.

## User steering: dense ring recovery and initial focus

- [x] Reproduce rapid central-node drag followed by immediate release with a full ring of children at 30/60/120 Hz; preserve collisions and presentation-only layout. Verify continued movement, parent remaining surrounded after recovery, finite positions and eventual sleep. Add a real hook/browser regression.
- [x] On first entry center the current session's actual orb in the canvas. Preserve a saved runtime viewport on panel remount. When several mainView sessions exist choose the host's first current session; no current session falls back to fit. Verify subsequent status/selection changes do not move the camera automatically.
