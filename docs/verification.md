# Verification — 2026-10-24

Target: DeepSeek Harness 0.2.1-rc.2, Node.js 24.21.0, Windows. Tests used a separate Harness home and synthetic workspaces. No real conversation history or API credentials were used.

- Unit suite: 15 tests cover native catalog adaptation, status precedence, membership, stable positions across filters and archives, bounded expansion, malformed layouts, explicit reset, stale revisions, initial-position merging and storage errors.
- TypeScript: strict typecheck passes after loading the remote-access contract; native endpoint strings are explicitly typed at the adapter boundary.
- Independent browser: Chromium, 1440×960. Drag/save/reload, workspace and status filters, search, callback identity, archive restore, malformed-storage visibility and explicit reset pass.
- Real Harness: ModuleLoader loads the built plugin, sidebar entry opens the graph, native workspace snapshots appear, workspace rename updates both native sidebar and graph, and new-session navigation succeeds. No browser page errors or console errors were observed in the final integration run.
- Review: independent source review found unstable initial positioning, corrupted-storage recovery, persistence warnings being cleared by management actions, and scope viewport overwrites; corrected with regression coverage. Initialization writes now merge only missing positions under a browser lock; deferred native actions check the page lifetime.
- Packaging: committed client bundle shares the host React/ReactDOM instance; no runtime npm dependencies, model tools or file operations. Dist includes third-party license notices.

Limits: layouts are browser-local. Older hosts and desktop builds have not been tested. Multi-window coordination uses browser Web Locks plus revision checks; this run unit-tested stale writes and merge semantics, but did not exhaustively test every simultaneous multi-window UI schedule. Full 200-node performance measurement is deferred. Disabling the plugin removes slot registrations/styles by lifecycle; this was code-reviewed, not exercised by toggling the plugin in a running host.

# Regression — 2026-10-25: bubbles could not be dragged on a live host

Symptom: on a running Harness the graph opened, but holding and moving a bubble did not drag it — the bubble stayed at its saved position until the pointer was released.

Cause: `GraphInner` rebuilt every React Flow node from the saved projection whenever the catalog changed. The rebuild replaced the node object, so the `dragging` flag React Flow sets during a gesture was dropped and the position was taken from the saved layout again. The native page receives new workspace/session snapshots continuously (a streaming session publishes several per second), so the grabbed bubble was pushed back to its saved spot on each snapshot. The demo never refreshed its catalog, so neither the unit suite nor the browser suite could see it.

Fix: `src/GraphPage.tsx` records the held ids between `onNodeDragStart` and `onNodeDragStop` and keeps their live position and `dragging` flag across projection rebuilds; node lookup became a `Map` instead of a per-node `find`. `src/demo.tsx` accepts `?churn=<ms>` to publish catalog snapshots while the graph is in use, and `tests/browser.mjs` drags with `?churn=60`, asserting that the bubble follows the pointer mid-gesture and that the released position is saved. Against the unfixed source the new assertion fails; with the fix it passes.

`scripts/build.mjs` now inlines CSS as LF text so a Windows checkout (`core.autocrlf=true`) produces the same committed bundle bytes as the LF CI build.

Verification on Windows 11 / Node 24.21.0 / Edge (Chromium), 1440×960: `npm run typecheck`, `npm test` (15 tests), `npm run build` (repeat build byte-identical) and `npm run test:browser` pass. The live-host symptom was reproduced and cleared in the demo harness; the running Harness page itself was not re-driven, because its launch-token URL is only available to the browser that opened it.
