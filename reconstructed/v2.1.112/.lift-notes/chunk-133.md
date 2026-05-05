# Chunk #133 — src/utils/* (gitDiff, gitSettings, github/*, glob, gracefulShutdown, handlePromptSubmit, heapDumpService, heatmap)

**Files lifted:** 9
**Confidence:** high

## Per-file notes

### gitDiff.ts
- bytes out: ~5,300
- decls reconstructed: ~11
- drift: low — 11 decls jac=1,cos=1; 3 decls no v112 match (boundary inits).
- v112 changes:
  - One decl [8700540,8700760] has cos=0.993 (`generateSyntheticDiff`) — byte difference is the `MAX_DIFF_SIZE_BYTES` constant inlined as `SMK` in the minified. Semantics unchanged.
  - Three v88 decls have no v112 match: [8696616,8696638] (init), [8701062,8701115] (init), [8701115,8701157] (init) — all boundary artifacts.
- unresolved symbols: none.

### gitSettings.ts
- bytes out: ~1,000
- decls reconstructed: 2
- drift: verbatim (jac=0.962,cos=1 for the large decl is actually a claudemd.ts boundary overlap; the real `shouldIncludeGitInstructions` is jac=1,cos=1).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.
- note: The first v88 decl [5021704,5025021] is a claudemd.ts boundary artifact (the `getMemoryFiles` block). The actual `shouldIncludeGitInstructions` decl [5025021,5025166] is jac=1,cos=1. One init decl [5025166,5025193] has no v112 match.

### github/ghAuthStatus.ts
- bytes out: ~800
- decls reconstructed: 1
- drift: verbatim (jac=1,cos=1 for the matched decl).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.
- note: One v88 decl has no v112 match [10855368,10855605] — boundary artifact from heapDumpService.ts.

### githubRepoPathMapping.ts
- bytes out: ~5,400
- decls reconstructed: 6
- drift: low — one decl jac=0.8,cos=0.998; rest jac=1,cos=1.
- v112 changes (jac=0.8 on `updateGithubRepoPathMapping`):
  - `getOriginalCwd()` and `findGitRoot(cwd)` inlined: v112 computes `let K=Y7(),z=ez(K)??K` directly instead of separate `cwd`/`gitRoot`/`basePath` vars. Semantics identical.
  - One v88 decl [12366773,12366825] has no v112 match (init boundary artifact).
- unresolved symbols: none.

### glob.ts
- bytes out: ~4,300
- decls reconstructed: 2
- drift: low — one decl jac=1,cos=1; one jac=1,cos=0.999.
- v112 changes (cos=0.999 on `glob`):
  - Minified shows two extra unused locals (`X=null,M,P=!1`) before the `ripGrep` call. No semantic change.
  - Two v88 decls have no v112 match: [8754870,8754897] (init), [8755907,8755950] (init) — boundary artifacts.
- unresolved symbols: none.

### gracefulShutdown.ts
- bytes out: ~17,500
- decls reconstructed: ~7
- drift: medium — most decls jac=1,cos=1; one jac=0.733,cos=0.998; one jac=0.4,cos=0.87.
- v112 changes:
  - `cleanupTerminalModes` (jac=1,cos=1): unchanged.
  - `printResumeHint` (jac=1,cos=1): unchanged.
  - New decl `jPA` (jac=0.4,cos=0.87) at v112 [13639397,13639504] — writes `SHOW_CURSOR` to stderr/stdout. This is a NEW helper in v112 (not in v88). Lifted as a stub with TODO.
  - `forceExit` (jac=1,cos=1): v112 removed `process.env.NODE_ENV === 'test'` guard before SIGKILL fallback; always SIGKILL on throw. Also removed the test-only `return undefined as never` path and always throws `Error("unreachable")`.
  - `gracefulShutdownSync` (jac=1,cos=1): unchanged.
  - `setupGracefulShutdown` (jac=1,cos=1): uncaughtException and unhandledRejection handlers now add `...Ln1(error)` / `...Ln1(reason)` spread to analytics events.
  - `gracefulShutdown` (jac=0.733,cos=0.998): adds `options?.suppressResumeHint` guard that sets `resumeHintPrinted = true` early. Analytics shutdown now uses dynamic imports (`Promise.resolve().then(...)`) for `shutdown1PEventLogging` and `shutdownDatadog`.
  - Two v88 decls have no v112 match: [7011325,7011351] (init), [7012109,7012147] (init) — boundary artifacts.
- unresolved symbols:
  - `Ln1` at byte ~5718230 — error-info spread helper used in uncaughtException/unhandledRejection analytics.

### handlePromptSubmit.ts
- bytes out: ~14,200
- decls reconstructed: 2
- drift: medium — both matched decls have jac~0.96,cos=1; 3 v88 decls unmatched.
- v112 changes:
  - `handlePromptSubmit` adds `getAppState` to destructured params and forwards it to `executeUserInput`.
  - Exit fallback changed from local `exit()` (gracefulShutdownSync) to external `SzA()` — unresolved.
  - `executeUserInput` (renamed Az5 in minified) adds `getAppState` param.
  - Pre-computes `historyString` from primary command value using `s5` (unresolved string-join utility).
  - File-history snapshot now uses `getAppState()` to read current state before updating, avoiding stale closures.
  - `onQuery` call gains 9th arg `stopHookActive` (derived from `commands.some(c => c.stopHookActive)`).
  - Finally block adds `Uc()` call (unresolved UI cleanup helper) after `setUserInputOnProcessing(undefined)`.
  - Three v88 decls have no v112 match: [12144465,12144546] (init), [12144546,12144567] (init), [12149222,12149308] (init) — boundary artifacts.
- unresolved symbols:
  - `SzA` at byte ~12490739 — exit fallback (replaces gracefulShutdownSync).
  - `s5` at byte ~12493603 — string/join utility for history string.
  - `Uc` at byte ~12495584 — post-completion UI cleanup.

### heapDumpService.ts
- bytes out: ~11,500
- decls reconstructed: 4
- drift: low-medium — jac 0.9–0.962, cos~1.
- v112 changes:
  - `captureMemoryDiagnostics` adds `objectTypeCounts?: Record<string, number>` field via `await import('bun:jsc')` `heapStats().objectTypeCounts` (Bun-only).
  - `maxRSS` conversion: macOS now uses `* 1` (already bytes), Linux still `* 1024`. v88 always used `* 1024`.
  - `performHeapDump` now returns `diagnostics` in the success payload (`HeapDumpResult`).
  - One v88 decl [10859169,10859226] has no v112 match (init boundary artifact).
- unresolved symbols: none.

### heatmap.ts
- bytes out: ~6,400
- decls reconstructed: 2
- drift: verbatim (jac=1,cos=1 for both matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.
- note: Five v88 decls have no v112 match — all are boundary artifacts (inits and adjacent-file overlaps).

## Cross-file observations

- **gracefulShutdown forceExit simplification**: v112 removed the test-mode special-casing in `forceExit` and always throws `Error("unreachable")` after SIGKILL fallback. This may break test mocks that relied on the old return path.
- **handlePromptSubmit getAppState threading**: v112 threads `getAppState` through both `handlePromptSubmit` and `executeUserInput`, and uses it for file-history snapshots. Callers need to provide this.
- **heapDumpService bun:jsc enrichment**: v112 adds Bun-specific `objectTypeCounts` from `bun:jsc` heapStats, and fixes macOS `maxRSS` units. These are additive changes.
- **gracefulShutdown suppressResumeHint**: New option to suppress the resume hint during shutdown, likely used by non-interactive or programmatic exit paths.

## Lifter

`lifter-133` (kimi-for-coding, team v112-lift). Chunk #133.
