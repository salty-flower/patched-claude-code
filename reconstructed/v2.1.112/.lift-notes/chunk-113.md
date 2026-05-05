# Chunk #113 — src/tools/PowerShellTool

**Files lifted:** 5
**Confidence:** medium-high

## Per-file notes

### commandSemantics.ts
- bytes out: ~4,600
- decls reconstructed: 6
- drift: low — jac=1 on all matched decls (cos=0.998 on one); v112 init block adds new `gh pr checkout` regex (`RNz`) to the git-tracking init block, but that belongs to a shared upstream init (`gitSafety.ts` / `commandSemantics.ts` init), not this file's exported logic.
- v112 changes:
  - `interpretCommandResult` and all semantics are verbatim.
  - One v88 decl (init block `Q68` / `UzK`) has no v112 match at the same byte range — the init block was reordered in v112; the logic is preserved but the init-var name (`kEK`) and init-call order differ.
  - New regex `RNz=/\bgh\s+pr\s+checkout\b.../` visible in v112_min init but belongs to the shared git-operation-tracking init, not commandSemantics exports.
- unresolved symbols: none.

### commonParameters.ts
- bytes out: ~900
- decls reconstructed: 1 (plus new exports)
- drift: high (jac=0.667, cos=0.989) — v112 significantly extends the exports.
- v112 changes:
  - `COMMON_VALUE_PARAMS` gains 4 new alias entries: `'-ea'`, `'-wa'`, `'-infa'`, `'-proga'`.
  - `COMMON_PARAMETERS` set is extended accordingly.
  - Three new exports added: `ACTION_PARAMS`, `ACTION_ALIASES`, `ACTION_VALUES` (the last is a `ReadonlySet<string>` of valid `*Action` parameter values: `'silentlycontinue'`, `'0'`, `'stop'`, `'1'`, `'continue'`, `'2'`, `'ignore'`, `'4'`).
  - The v88 decl `[8594680,8594696]` (empty/sentinel) has no v112 match — boundary artifact.
- unresolved symbols: none; all new values are directly recoverable from `v112_min.js`.

### gitSafety.ts
- bytes out: ~5,800
- decls reconstructed: 10
- drift: low-medium — majority jac=1/cos=1; two decls at jac=0.857 and jac=0.667.
- v112 changes:
  - `normalizeGitPathArg`: backtick removal changed from `.replace(/\`/g, '')` to `.replaceAll('\`', '')` (jac=0.857 decl).
  - `normalizeGitPathArg`: backslash normalization changed from `.replace(/\\/g, '/')` to `.replaceAll('\\', '/')`.
  - `resolveEscapingPathToCwdRelative`: `.replace(/\\/g, '/')` → `.replaceAll('\\', '/')` (jac=0.667 decl); variable name order changed (`Y/$` → `Y/A/O` for `absLower/cwdLower/cwdWithSepLower`).
  - One v88 sentinel decl `[8594607,8594615]` has no v112 match — boundary artifact.
  - region.json shows two v88 decls [8594348,8594514] and [8594182,8594348] mapping to the same v112 range [9499203,9499369] — likely the extractor split a merged function; the lifted file uses the v88 structure (two functions: `isDotGitPathPS` + `matchesDotGitPrefix`).
  - Note: v112_min.js shows duplicate function body for `u38` (lines 21 and 25) — this is likely an extraction artifact from the region boundary; both are `isGitInternalPathPS`. The lifted file has only one instance.
- unresolved symbols: none.

### UI.tsx
- bytes out: ~3,800
- decls reconstructed: 5
- drift: low — one decl at jac=0.92; rest jac=1/cos=1.
- v112 changes:
  - `renderToolResultMessage` (jac=0.92): `KeyboardShortcutHint` prop changed from `shortcut="↓"` to `chord="down"` — the component API changed in v112 to use logical key names instead of Unicode glyphs.
  - Three v88 decls have no v112 match: `[8667452,8667501]` (init sentinel), `[8669202,8669223]` (small constant), `[8669223,8669292]` (small decl) — all boundary artifacts from sourcemap slicing; the actual rendered decls land at different byte offsets in v112.
- unresolved symbols: none.

### PowerShellTool.tsx
- bytes out: ~18,500
- decls reconstructed: 9
- drift: medium (jac=0.853 and jac=0.926 on the two largest decls).
- v112 changes:
  - `detectBlockedSleepPattern`: regex updated to match float seconds `\d+(?:\.\d*)?`; uses `parseFloat` instead of `parseInt`; threshold extracted to named constant `BLOCKED_SLEEP_THRESHOLD_SECONDS = 2`.
  - `validateInput`: `feature('MONITOR_TOOL')` block changed — error message text rewrites to reference Monitor tool's `until`-loop pattern; removed "run blocking commands in the background" phrasing.
  - `runPowerShellCommand` signature changed: `setAppState` removed; `taskRegistry`, `abortSpeculation`, `emitToolProgress`, `sessionEnvVars` added. All background task helpers (`spawnShellTask`, `backgroundExistingForegroundTask`, `registerForeground`, `unregisterForeground`) now take `taskRegistry` instead of `setAppState`.
  - `runPowerShellCommand` progress loop: `setToolJSX` call becomes conditional (checked for truthiness of return value); on truthy return, emits `{ kind: 'background_hint', toolUseId }` via `emitToolProgress`.
  - `runPowerShellCommand` finally: `unregisterForeground` takes `(id, resultSummaryString, taskRegistry)` instead of `(id, setAppState)`; `lastResult` variable tracks the last completed result for the summary-string mapper.
  - `call()`: destructures `emitToolProgress` (not `setAppState`) from `toolUseContext`; passes `taskRegistry`, `abortSpeculation`, `emitToolProgress`, `sessionEnvVars` to generator.
  - `call()` finally: added `emitToolProgress?.({ kind: 'clear', toolUseId })` after `setToolJSX(null)`.
  - `resizeShellImageOutput` call gains a 4th argument: model identifier extracted via `vO(toolUseContext.options.mainLoopModel)`.
  - `logEvent('tengu_powershell_tool_command_executed')` adds `powershell_edition` field: `await lU8() ?? 'unknown'`.
  - `markTaskNotified` in backgrounded-result branch now takes `(backgroundTaskId, result, taskRegistry)` — extra notification queuing logic added (byte ~9585100).
- unresolved symbols:
  - `KF()` at byte ~9577280 — predicate in `validateInput`; likely `feature('MONITOR_TOOL')` or `isMonitorToolEnabled()`. Lifted as `feature('MONITOR_TOOL')` based on v88 precedent.
  - `vO(toolUseContext.options.mainLoopModel)` at byte ~9587400 — new arg to `resizeShellImageOutput`; likely `getMainLoopModelId()` or model alias accessor. Left as TODO cast.
  - `lU8()` at byte ~9587800 — `getPowerShellEdition()` async helper, new in v112. Left as `getPowerShellEdition?.()` with fallback.
  - `lc8(backgroundTaskId, result, taskRegistry)` at byte ~9585000 — `markTaskNotified` variant that returns boolean and takes result object + taskRegistry. Left as TODO comment; lifted as `markTaskNotified(...)`.
  - `I$(backgroundTaskId, FI6(result), {toolUseId, summary})` at byte ~9585100 — background notification queuing; `FI6` maps result to summary string. Left as TODO comment.
  - `FI6(lastResult)` at byte ~9585600 — result→summary-string mapper for `unregisterForeground`. Left as `String(lastResult)` placeholder.

## Cross-file observations

- `commonParameters.ts` adds `ACTION_VALUES` which implies `readOnlyValidation.ts` and/or `pathValidation.ts` (not in this chunk) now validate `-ErrorAction` values. The alias shortforms (`-ea`, `-wa`) are likely handled by the same caller.
- `gitSafety.ts`'s adoption of `replaceAll` is consistent with other v112 files (e.g. `runAgent.ts` / `loadAgentsDir.ts`) that switched from `.replace(/regex/g,...)` to `.replaceAll(...)` for simple string substitutions — a v112-wide style change.
- `runPowerShellCommand`'s `taskRegistry` parameter mirrors the same interface change seen in `resumeAgent.ts` (chunk #105), confirming that `ToolUseContext.taskRegistry` is the new canonical channel for background task management in v112.
- `emitToolProgress` / `kind: 'background_hint'` is new v112 plumbing that parallels `setToolJSX` but feeds a separate progress event stream — likely consumed by the REPL's status bar independently of JSX rendering.
- `detectBlockedSleepPattern` now accepting floats aligns it exactly with the bash tool's regex — the v88 integer-only regex was a PowerShell-specific deviation that has been corrected.

## Lifter

`lifter-113` (subagent), sonnet, general-purpose
