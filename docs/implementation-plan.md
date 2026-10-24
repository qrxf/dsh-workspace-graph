# Workspace Graph Implementation Plan

> For agentic workers: use superpowers:executing-plans inline. User approved the framework and implementation/publication on 2026-10-24.

**Goal:** An installable DSH graph plugin with draggable bubbles, filters and persistent layout.
**Architecture:** Native client snapshots feed a pure graph model. An independent browser repository stores only layout. Native actions perform navigation and management.
**Tech Stack:** TypeScript, React 18, React Flow 12, esbuild, Node tests, Playwright.
**Spec:** design.md

## Global constraints
Target DSH 0.2.1-rc.2. Preserve native directory/membership/history. No model calls. Use stable IDs and native statuses. Externalize React/ReactDOM. Publish publicly to qrxf/dsh-workspace-graph. Work in this new isolated repository, without changing the installed DSH profile.

## Review focus
Hidden node coordinates; absent/archived/blank/subagent catalog entries; conflicting storage writes; lifecycle teardown; correct native object navigation. Cover these in behavioral and browser tests.

## Task 1: graph model and persistence
Files: src/types.ts, src/model.ts, src/layout.ts, tests/model.test.ts, tests/layout.test.ts.
Interfaces: projectGraph(catalog, filters, layout); LayoutRepository.load/savePatch.
- [x] Write and run failing behavior tests.
- [x] Implement projection, filtering, stable initial positions and bounded expansion.
- [x] Implement validated storage, revision conflicts and patch merge that preserves hidden nodes.
- [x] Run the complete unit suite and commit.

## Task 2: native panel and interaction
Files: src/GraphPage.tsx, src/client.tsx, src/styles.css, src/host.ts, scripts/build.mjs.
Interfaces: GraphPage consumes GraphCatalog, actions and repository. Add main/sidebar.panellist with one matching ID using slots.inject.
- [x] Implement drag, pan/zoom, fit, bottom-left selection/filters, search, details, native actions.
- [x] Verify exact host types and build a ModuleLoader bundle with shared React externals.
- [x] Add a demo using the same page with clearly identified fixtures.

## Task 3: verify and publish
Files: tests/browser.mjs, tests/plugin.test.ts, README.md, CI workflow, dist.
- [x] Browser tests for drag/reload, filtering, navigation and storage errors.
- [x] Real Cordis lifecycle and isolated DSH profile integration.
- [x] Typecheck, full suite, build, package/secret review, independent code review.
- [x] Publish to the user-created public GitHub repository and verify remote contents.

## Ledger
Environment: Node 24.21.0, installed DSH 0.2.1-rc.2. New repository; no existing source changes. User authorized inline execution and public publication.

2026-10-24: unit, browser and native integration verified. Independent review findings fixed. User supplied qrxf/dsh-workspace-graph; connector now reports push=true. Published commit 41fdf6cabea1fe073cde18c04a5a8e322fc6ca76; GitHub Actions run 40095766800 succeeded.
