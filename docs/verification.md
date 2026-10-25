# Verification — 2026-10-24

Target: DeepSeek Harness 0.2.1-rc.2, Node.js 24.21.0, Windows. Tests used a separate Harness home and synthetic workspaces. No real conversation history or API credentials were used.

- Unit suite: 15 tests cover native catalog adaptation, status precedence, membership, stable positions across filters and archives, bounded expansion, malformed layouts, explicit reset, stale revisions, initial-position merging and storage errors.
- TypeScript: strict typecheck passes after loading the remote-access contract; native endpoint strings are explicitly typed at the adapter boundary.
- Independent browser: Chromium, 1440×960. Drag/save/reload, workspace and status filters, search, callback identity, archive restore, malformed-storage visibility and explicit reset pass.
- Real Harness: ModuleLoader loads the built plugin, sidebar entry opens the graph, native workspace snapshots appear, workspace rename updates both native sidebar and graph, and new-session navigation succeeds. No browser page errors or console errors were observed in the final integration run.
- Review: independent source review found unstable initial positioning, corrupted-storage recovery, persistence warnings being cleared by management actions, and scope viewport overwrites; corrected with regression coverage. Initialization writes now merge only missing positions under a browser lock; deferred native actions check the page lifetime.
- Packaging: committed client bundle shares the host React/ReactDOM instance; no runtime npm dependencies, model tools or file operations. Dist includes third-party license notices.

Limits: layouts are browser-local. Older hosts and desktop builds have not been tested. Multi-window coordination uses browser Web Locks plus revision checks; this run unit-tested stale writes and merge semantics, but did not exhaustively test every simultaneous multi-window UI schedule. Full 200-node performance measurement is deferred. Disabling the plugin removes slot registrations/styles by lifecycle; this was code-reviewed, not exercised by toggling the plugin in a running host.
