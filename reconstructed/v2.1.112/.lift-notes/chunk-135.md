# Chunk #135 — hooks/* + utils (horizontalScroll through imagePaste)

**Files lifted:** 19 (6 by previous agent, 13 by lifter-135b)
**Confidence:** medium-high for verbatim files, medium for reconstructed files

## Per-file notes

### hookHelpers.ts (written by previous agent)
- bytes out: ~3,800
- decls reconstructed: ~6
- drift: low — most decls jac=1, cos=1.
- v112 changes: minor byte-level renames only.
- unresolved symbols: none.

### hooksSettings.ts (written by previous agent)
- bytes out: ~2,400
- decls reconstructed: ~4
- drift: verbatim (jac=1, cos=1 for matched decls).
- v112 changes: none.
- unresolved symbols: none.

### postSamplingHooks.ts (written by previous agent)
- bytes out: ~1,800
- decls reconstructed: ~3
- drift: low — matched decls jac=1, cos=1.
- v112 changes: none significant.
- unresolved symbols: none.

### registerFrontmatterHooks.ts (written by previous agent)
- bytes out: ~2,200
- decls reconstructed: ~4
- drift: low — matched decls jac=1, cos=1.
- v112 changes: none significant.
- unresolved symbols: none.

### registerSkillHooks.ts (written by previous agent)
- bytes out: ~3,500
- decls reconstructed: ~5
- drift: low — matched decls jac=1, cos=1.
- v112 changes: none significant.
- unresolved symbols: none.

### sessionHooks.ts (written by previous agent)
- bytes out: ~2,800
- decls reconstructed: ~4
- drift: low — matched decls jac=1, cos=1.
- v112 changes: none significant.
- unresolved symbols: none.

### execAgentHook.ts
- bytes out: ~12,485
- decls reconstructed: 1 main function + stubs
- drift: medium — region.json shows jac=0.966 for main decl but v112 offsets proved unreliable.
- v112 changes (verified by manual bundle inspection):
  - Function minified to `k65` in v112 bundle at ~11790741.
  - `query()` call pattern unchanged; `createAbortController` renamed to `F5()` in minified.
  - `tengu_agent_stop_hook_error` analytics event preserved.
  - Structured output tool name `iW` in minified (was `SYNTHETIC_OUTPUT_TOOL_NAME`).
- unresolved symbols:
  - `iW` at byte ~11790741 — structured output tool name in agent hook context.
  - `F5` at byte ~11790741 — abort controller factory.

### execHttpHook.ts
- bytes out: ~8,871
- decls reconstructed: 6 functions + stubs
- drift: low — region.json claims jac=1,cos=1 for 6/9 decls but v112 offsets were cross-mapped to unrelated code.
- v112 changes (verified by manual bundle inspection at ~11796599):
  - `getSandboxProxyConfig` minified to `ReY`; uses `Promise.resolve().then(() => (yY(),zJ4))` dynamic import pattern.
  - `getHttpHookPolicy` minified to `SeY`; reads from `v7()` (merged settings).
  - `urlMatchesPattern` minified to `CeY`; uses `.replaceAll("*",".*")` instead of `.replace(/\*/g,'.*')`.
  - `sanitizeBody` minified to `beY`; identical logic.
  - `interpolateEnvVars` minified to `IeY`; identical logic.
  - `execHttpHook` minified to `tH7`; axios call structure unchanged.
- unresolved symbols: none critical.

### execPromptHook.ts
- bytes out: ~6,822
- decls reconstructed: 1 main function + stubs
- drift: medium — region.json shows jac=0.815 for main decl; v112 offsets unreliable.
- v112 changes (verified by manual bundle inspection at ~11785678):
  - Function minified to `v65`.
  - Signature unchanged (8 params).
  - `queryModelWithoutStreaming` renamed to `JW6` in minified.
  - Stop-condition prompt text unchanged.
  - `veY=0.7` constant (temperature?) added near function end.
- unresolved symbols:
  - `JW6` at byte ~11785678 — query model without streaming.
  - `GeY` at byte ~11785678 — randomUUID equivalent.

### fileChangedWatcher.ts
- bytes out: ~5,028
- decls reconstructed: 6 exports + 4 internals
- drift: **high** — v112 heavily refactored from v88. Only 2/12 v88 decls matched in region.json.
- v112 changes:
  - Converted from module-level state + exported functions to **factory pattern** `M0z()`.
  - v112 singleton: `zx8=M0z()` with destructured exports `db4=zx8.initialize`, `Fi1=zx8.setEnvHookNotifier`, etc.
  - Added `updateWatchPaths` and `onCwdChanged` as explicit exports (were inline in v88).
  - `dispose()` added for cleanup registry integration.
  - `handleFileEvent` extracted from inline anonymous handler.
  - `restartWatching` extracted from inline logic.
- reconstruction approach: Used v88 structure as skeleton, applied v112 factory-pattern semantics from minified bytes ~5916489. Added `updateWatchPaths`, `onCwdChanged`, `dispose` exports. Preserved chokidar options and hook execution flow.
- unresolved symbols:
  - `oa` at byte ~5916489 — chokidar watcher import (bundler aliased).
  - `N18` at byte ~5916489 — `executeFileChangedHooks` minified name.
  - `MC4` at byte ~5916489 — `clearCwdEnvFiles` minified name.
  - `k18` at byte ~5916489 — `executeCwdChangedHooks` minified name.

### hooksConfigSnapshot.ts
- bytes out: ~5,064
- decls reconstructed: 4 functions + state
- drift: low — 4/9 decls matched with jac=1,cos=1 (or 0.998).
- v112 changes:
  - Module state changed from `let initialHooksConfig` to object `_x8=H0z()` where `H0z()` returns `{initialHooksConfig:null}`.
  - `isRestrictedToPluginOnly` (v88 `pluginOnlyPolicy.ts`) and `isDisableAllHooksInPolicy` appear co-located in v112 minified as `Ey()` and `Kt()`. This may be bundler inlining rather than a source move.
  - `resetHooksConfigSnapshot` (v112 `KR6`) now also calls `u0()` (`resetSdkInitState`).
- unresolved symbols: none.

### ssrfGuard.ts
- bytes out: ~8,732
- decls reconstructed: 5 functions + helpers
- drift: low — 5/8 decls matched with jac=1,cos=1.
- v112 changes:
  - `isIP` imported as `L65` from `net` (minified alias).
  - `isPrivateIP` minified to `E65`; `isLinkLocal` logic merged into `E65`.
  - IPv4 check `h65` and IPv6 check `EeY` are separate minified functions.
  - `parseIPv6` minified to `yeY`; `ipv6ToIPv4` minified to `LeY`.
  - `ssrfGuardedLookup` minified to `R65`; `ssrfError` minified to `y65`.
  - All logic identical to v88; only names changed.
- unresolved symbols: none.

### horizontalScroll.ts
- bytes out: ~4,302
- decls reconstructed: 1 type + 1 function
- drift: low — 1/2 decls matched with jac=1,cos=1.
- v112 changes:
  - `calculateHorizontalScrollWindow` minified to `r35` in v112.
  - `firstItemHasSeparator` parameter default `Y=!0` (same as v88 `= true`).
  - Logic identical; no semantic changes.
- unresolved symbols: none.

### hyperlink.ts
- bytes out: ~1,465
- decls reconstructed: 2 exports + 1 function
- drift: low — 2/4 decls matched with jac=1,cos=1.
- v112 changes:
  - `createHyperlink` minified to `qc` in v112.
  - `supportsHyperlinks` call minified to `Vf()`.
  - `chalk.blue` minified to `Y8.blue`.
  - `OSC8_START`/`OSC8_END` minified to `K04`/`_04`.
  - Logic identical; no semantic changes.
- unresolved symbols: none.

### iTermBackup.ts
- bytes out: ~1,608
- decls reconstructed: 4 functions
- drift: low — 5/6 decls matched with jac>=0.962.
- v112 changes:
  - `markITerm2SetupComplete` minified to `Ae8`; uses `d8((q)=>({...q,iterm2SetupInProgress:!1}))` (same as `saveGlobalConfig` callback).
  - `getIterm2RecoveryInfo` minified to `aJA`; uses `H8()` for `getGlobalConfig`.
  - `checkAndRestoreITerm2Backup` minified to `NJ5`; uses `j6` for `logError`.
  - Logic identical; no semantic changes.
- unresolved symbols: none.

### ide.ts
- bytes out: ~46,585
- decls reconstructed: ~32 functions + types
- drift: low-medium — 32/37 decls matched with jac=1,cos=1 (or 0.998).
- v112 changes:
  - `detectRunningIDEsCached` uses memoization Maps `Wn1`/`Pn1` (v112 minified).
  - `isIDEExtensionInstalled` uses async memoization pattern `BR4`/`pR4`.
  - JetBrains product map `mR4` expanded with `aqua`, `gateway`, `fleet`, `androidstudio`.
  - `WindowsToWSLConverter` class (`fh6` in minified) may be co-located in ide.ts bundle region or remain in idePathConversion.ts — bundler behavior unclear.
  - `replace(/\/g, '/')` changed to `replaceAll('\\', '/')` in path conversion (verified in idePathConversion.ts).
- unresolved symbols: none critical.

### idePathConversion.ts
- bytes out: ~2,606
- decls reconstructed: 1 class + 1 function
- drift: low — 2/3 decls matched with jac>=0.923.
- v112 changes:
  - `WindowsToWSLConverter.toLocalPath` fallback: `.replace(/\/g, '/')` changed to `.replaceAll('\\', '/')` (confirmed by v112 minified `replaceAll` usage at ~5719000).
- unresolved symbols: none.

### idleTimeout.ts
- bytes out: ~1,574
- decls reconstructed: 1 function
- drift: verbatim (jac=1,cos=1 for matched decl).
- v112 changes: none — logic identical. `gracefulShutdownSync` minified to `j5`, `logForDebugging` to `E`.
- unresolved symbols: none.

### imagePaste.ts
- bytes out: ~14,511
- decls reconstructed: 7 functions + 3 helpers + constants
- drift: medium — 7/12 decls matched with jac 0.833–0.999.
- v112 changes:
  - `getImageFromClipboard` (v112 `TE6`) and `tryReadImageFromPath` (v112 `U24`) now accept a **config object** `{maxWidth, maxHeight, targetRawSize}` instead of using module-level constants.
  - Native clipboard reader call: `Y(q.maxWidth, q.maxHeight)` instead of hardcoded `IMAGE_MAX_WIDTH`, `IMAGE_MAX_HEIGHT`.
  - Native path returns `image/${w.mediaType}` instead of hardcoded `image/png`.
  - `displayWidth`/`displayHeight` fall back to native dimensions if resize dimensions missing.
  - `stripBackslashEscapes` (v112 `g24`) uses `replaceAll("\\\\",z)` for double-backslash placeholder (v88 used `replace(/\\\\/g, placeholder)`).
  - `hasImageInClipboard` (v112 `p24`) uses `Promise.resolve().then(() => (_y8(),Ky8))` dynamic import pattern.
  - `execFileNoThrowWithCwd` replaced by `ij` (execa with `{reject:!1}`) in v112 minified.
- unresolved symbols:
  - `_y8` / `Ky8` at byte ~4408910 — `image-processor-napi` dynamic import modules.
  - `ij` at byte ~4408910 — execa wrapper for clipboard commands.
  - `i$6` at byte ~4408910 — `getImageProcessor` (Sharp) dynamic import.

## Cross-file observations

- **Region.json v112 offsets unreliable for this chunk**: For execAgentHook, execHttpHook, execPromptHook, and ide.ts, the `v112_decl` offsets in region.json pointed to unrelated bundle regions. Manual inspection of the v112 minified bundle was required to locate the actual function bodies. This is likely a sourcemap alignment issue in the extraction tooling.
- **fileChangedWatcher factory pattern**: The most significant structural change in this chunk. v112 converted module-level state into a closure-based factory with explicit `dispose`, `updateWatchPaths`, and `onCwdChanged` exports.
- **imagePaste config object API**: v112 refactored image paste functions to accept a config object, decoupling them from module-level API limit constants. Callers throughout the codebase likely changed.
- **replaceAll migration**: v112 consistently replaces `.replace(/\/g, ...)` with `.replaceAll('\\', ...)` in path-handling code (idePathConversion.ts, imagePaste.ts).

## Lifter

`lifter-135b` (sonnet-4-7, general-purpose, team v112-lift). Chunk #135.
