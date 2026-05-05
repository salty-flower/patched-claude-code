# Chunk #128 — utils/* collapse/combined/computerUse/concurrent

**Files lifted:** 19
**Confidence:** high

## Per-file notes

### collapseReadSearch.ts
- bytes out: ~37,900
- decls reconstructed: ~29
- drift: low — 22 of 29 decls jac=1,cos=1; 2 drifted (jac=1,cos=0.998 and jac=0.976,cos=1).
- v112 changes:
  - `feature('HISTORY_SNIP')` gate fully eliminated. The `SNIP_TOOL_NAME` require() and the absorbed-silently branch for Snip tool removed.
  - `getToolSearchOrReadInfo` now only checks `isFullscreenEnvEnabled() && toolName === TOOL_SEARCH_TOOL_NAME` for silently-absorbed meta-ops.
  - `feature('TEAMMEM')` flag-checks are gone from `collapseReadSearchGroups` and `createCollapsedGroup`, but the `teamMemOps?.` call paths remain (now unconditional — `teamMemOps` is still null when TEAMMEM is off at the bun:bundle level).
- unresolved symbols: none.

### combinedAbortSignal.ts
- bytes out: ~1,700
- decls reconstructed: 1
- drift: negligible — jac=0.955, cos=1 on `createCombinedAbortSignal`.
- v112 changes: none — minification differences only.
- unresolved symbols: none.

### commandLifecycle.ts
- bytes out: ~730
- decls reconstructed: 2 (with TODO)
- drift: high structural — v112_min for this file is only a 209-byte multi-file IIFE artifact; the actual `setCommandLifecycleListener` and `notifyCommandLifecycle` decls have no v112 match in this chunk's region.
- v112 changes: likely moved or inlined elsewhere.
- unresolved symbols:
  - `setCommandLifecycleListener`, `notifyCommandLifecycle` — no v112 byte range in this file; TODO marker added.

### commitAttribution.ts
- bytes out: ~29,600
- decls reconstructed: ~11
- drift: low — 7 of 11 decls jac=1,cos=1; 1 drifted (jac=0.917,cos=1 on `calculateCommitAttribution`).
- v112 changes: none significant — the 0.917 jac is from minor minification differences in the large async loop body.
- unresolved symbols: none.

### completionCache.ts
- bytes out: ~5,650
- decls reconstructed: 2
- drift: verbatim (jac=1,cos=1 for both matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### concurrentSessions.ts
- bytes out: ~6,800
- decls reconstructed: ~9
- drift: low — 4 of 9 decls jac=1,cos=1; 2 drifted (jac=0.973,cos=1 and jac=1,cos=0.995).
- v112 changes: none significant — minification/token differences only.
- unresolved symbols: none.

### computerUse/appNames.ts
- bytes out: ~6,600
- decls reconstructed: 6
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/cleanup.ts
- bytes out: ~3,300
- decls reconstructed: 1
- drift: low — jac=0.875,cos=0.999 on `cleanupComputerUseAfterTurn`.
- v112 changes: none significant — the 0.875 jac is from minor minification differences.
- unresolved symbols: none.

### computerUse/common.ts
- bytes out: ~2,600
- decls reconstructed: 3
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/computerUseLock.ts
- bytes out: ~7,100
- decls reconstructed: 9
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/drainRunLoop.ts
- bytes out: ~2,800
- decls reconstructed: 5
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/escHotkey.ts
- bytes out: ~2,000
- decls reconstructed: 3
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/gates.ts
- bytes out: ~2,600
- decls reconstructed: 5
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/hostAdapter.ts
- bytes out: ~2,800
- decls reconstructed: 2
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/inputLoader.ts
- bytes out: ~1,200
- decls reconstructed: 1
- drift: low — jac=0.8,cos=1 on `requireComputerUseInput`.
- v112 changes: none significant — minification differences only.
- unresolved symbols: none.

### computerUse/mcpServer.ts
- bytes out: ~4,100
- decls reconstructed: 4
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/setup.ts
- bytes out: ~2,000
- decls reconstructed: 2
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.

### computerUse/swiftLoader.ts
- bytes out: ~925
- decls reconstructed: 1
- drift: low — jac=0.818,cos=1 on `requireComputerUseSwift`.
- v112 changes: none significant — minification differences only.
- unresolved symbols: none.

### computerUse/wrapper.tsx
- bytes out: ~49,400
- decls reconstructed: 5
- drift: low — jac=0.962,cos=0.999 on `buildSessionContext`.
- v112 changes: none significant — the 0.962 jac is from minor minification differences in the large object literal.
- unresolved symbols: none.

## Cross-file observations

- **HISTORY_SNIP fully excised**: `collapseReadSearch.ts` confirms the Snip tool's `feature('HISTORY_SNIP')` gate and `SNIP_TOOL_NAME` require() were removed in v112. Only the `TOOL_SEARCH_TOOL_NAME` absorbed-silently branch remains.
- **commandLifecycle listener relocation**: The small `commandLifecycle.ts` module (set/notify listener) has no matching decls in v112's minified slice for this file. It was likely moved or inlined into another module (possibly `abortController.ts` or a shared lifecycle module).

## Lifter

`lifter-128` (kimi-for-coding, general-purpose, team v112-lift). Chunk #128.
