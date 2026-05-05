# Chunk #106 — src/tools/BashTool

**Files lifted:** 3
**Confidence:** medium

## Per-file notes

### BashToolResultMessage.tsx
- bytes out: ~4,200
- decls reconstructed: 4
- drift: low — jac=0.933 on the main component; helpers at jac=1.
- v112 changes:
  - `extractSandboxViolations` is simplified: early-return on no-match (no intermediate variable), else return cleaned — functionally identical.
  - `KeyboardShortcutHint` in the "Running in the background" branch now uses `chord="down"` instead of `shortcut="↓"` (matching the `A8` component in v112_min that takes `chord` prop).
  - No structural changes to the React component layout.
- unresolved symbols:
  - `A8` (byte ~8290600) — `KeyboardShortcutHint` now accepts `chord` instead of `shortcut`; marked with TODO comment.

### UI.tsx
- bytes out: ~4,500
- decls reconstructed: 6
- drift: medium — `BackgroundHint` jac=0.762, `renderToolUseMessage` jac=0.833; others jac=1.
- v112 changes:
  - `BackgroundHint`: `KeyboardShortcutHint` now uses `chord={shortcut}` + `format={{keyCase:"lower"}}` props instead of `shortcut` prop alone. The `format` object is memoized with `Symbol.for("react.memo_cache_sentinel")`.
  - `backgroundAll` call signature changed: v112 calls `jg8(A, ()=>gD(Y))` — second arg is a `getState` accessor, not a state setter (reversed from v88). TODO left on import.
  - `renderToolUseMessage`: input now typed to include optional `rerun` field. When no `command` is present, returns `` `rerun ${rerun}` `` string if `rerun` is set, else null.
  - `renderToolUseProgressMessage`, `renderToolUseQueuedMessage`, `renderToolResultMessage`, `renderToolUseErrorMessage`: all jac=1, verbatim.
- unresolved symbols:
  - `jg8` (byte ~8294525) — `backgroundAll` variant; second arg order may be reversed or it may be a new function name.
  - `A8` (byte ~8295253) — `KeyboardShortcutHint` `chord`+`format` prop shape.
  - `format: {keyCase:"lower"}` memo object (byte ~8295253) — confirmed in v112_min; added to lifted file.

### BashTool.tsx
- bytes out: ~13,500
- decls reconstructed: ~12 major decls (sets, schemas, functions, BashTool object)
- drift: medium (jac=0.813–0.82 on the two largest decls; jac=1 on smaller ones)
- v112 changes:
  - `isSearchOrReadBashCommand` (FVY): simplified — no redirect-skip logic, no `lastOperator` tracking. Uses `TO` (a simpler split) instead of `splitCommandWithOperators` with full operator awareness.
  - `isSilentBashCommand` (cVY): drastically simplified — checks only `parts[0]` against `DISALLOWED_AUTO_BACKGROUND_COMMANDS` (sleep), not the full `BASH_SILENT_COMMANDS` set. The v112 implementation essentially returns `!DISALLOWED_AUTO_BACKGROUND_COMMANDS.includes(baseCommand)`.
  - `getCommandTypeForLogging` (yY7): uses `i5(part, " ")` = `part.split(" ")[0]` instead of `part.trim().split(/\s+/)[0]`.
  - `fullInputSchema`: adds `rerun` field — allows rerunning a prior command by alias from `[rerun: bN]` footer.
  - `inputSchema` (ISK): v112 also checks `A36()` (likely `isFullscreenEnvEnabled`) to decide whether to omit `rerun`; non-fullscreen mode omits `rerun` regardless of background-task status.
  - `outputSchema` (dVY): adds `staleReadFileStateHint` field.
  - `applySedEdit` (nVY): uses `getFileHistoryState` + `applyFileHistoryOp` instead of `updateFileHistoryState`.
  - `toAutoClassifierInput`: now handles `rerun` field: returns `` `rerun ${rerun}` `` when `command` is absent.
  - `preparePermissionMatcher`: adds xargs prefix matching — also matches `xargs ${prefix}` and `xargs ${prefix} ...` patterns.
  - `validateInput`: gate changed from `feature('MONITOR_TOOL')` to `KF()` (unresolved). Error message wording changed: `"To wait for a condition, use Monitor with an until-loop..."` (shorter than v88).
  - `runShellCommand` (oVY): major signature change — drops `setAppState`, adds `taskRegistry`, `abortSpeculation`, `emitToolProgress`, `sessionEnvVars`, `tmuxSocket`. All background-task registration and notification now goes through `taskRegistry`-based APIs (`cc8`, `dc8`, `nc8`, `lc8`, `I$`, `FI6`, `Y_6`).
  - `call` body: adds `emitToolProgress` clear on `finally`; drops `toolUseContext.setAppStateForTasks`; computes `startTime` with floor-second alignment; adds `staleReadFileStateHint` population via `rVY`+`bVY`+`b8`; adds `zSK` post-command cleanup.
  - `mapToolResultToToolResultBlockParam`: `staleReadFileStateHint` added to content array (4th element before `.filter(Boolean)`).
- unresolved symbols (with byte ranges):
  - `TO` (byte ~9894652–9894910) — simplified `splitCommand_DEPRECATED` or new variant; used by `isSearchOrReadBashCommand`, `isSilentBashCommand`, `getCommandTypeForLogging`.
  - `KF` (byte ~9895190) — feature gate in `validateInput`; replaces `feature('MONITOR_TOOL')`.
  - `lVY` (byte ~9895190) — `detectBlockedSleepPattern`; confirmed same concept, lifted.
  - `_38` (byte ~9895190) — `bashToolHasPermission`.
  - `xSK` (byte ~9895676) — `permissionRuleExtractPrefix` variant; extracted as `xSK` placeholder.
  - `ZP6` (byte ~9895676) — `matchWildcardPattern` for xargs branches.
  - `A36` (byte ~9894784) — likely `isFullscreenEnvEnabled`; used in `inputSchema` for `rerun` omission.
  - `bSK` (byte ~9898666) — `PROGRESS_THRESHOLD_MS` constant (likely still 2000).
  - `cc8` (byte ~9898666) — `backgroundExistingForegroundTask` boolean variant for foreground check.
  - `dc8` (byte ~9898666) — `registerForeground` + auto-background variant (creates foreground task ID).
  - `Y_6` (byte ~9898666) — `spawnShellTask` with `taskRegistry`/`abortSpeculation` args.
  - `nc8` (byte ~9898666) — `unregisterForeground` with taskRegistry.
  - `lc8` (byte ~9898666) — boolean check before `markTaskNotified`.
  - `I$` (byte ~9898666) — `markTaskNotified` + schedules notification with `toolUseId`/`summary`.
  - `FI6` (byte ~9898666) — result transformer for background task notification.
  - `rVY` (byte ~9908900) — `checkStaleReadFileState`; compares readFileState mtimes to command start.
  - `zSK` (byte ~9908900) — post-command cleanup (likely readFileState sync).
  - `bVY` (byte ~9909200) — stale path formatter.
  - `b8` (byte ~9909200) — path formatter/truncator helper.
  - `gVY` (byte ~9909200) — `isSilentBashCommand` alias (confirmed same).
  - `O7` (byte ~9909200) — pluralize helper ("file"/"files").
  - `uw` (byte ~9898666) — `TaskOutput` reference alias.

## Cross-file observations

- `ToolUseContext` in v112 now carries `taskRegistry`, `abortSpeculation`, `emitToolProgress`, `sessionEnvVars`, `tmuxSocket` — cast via `unknown` in lifted `BashTool.tsx`. Consistent with the pattern established in chunk-105 (AgentTool).
- `KeyboardShortcutHint` component now takes `chord` (not `shortcut`) + optional `format={{keyCase:"lower"}}` — affects both `BashToolResultMessage.tsx` and `UI.tsx`. This is a cross-cutting component API change.
- `backgroundAll` in `UI.tsx` has changed argument order/shape — `jg8(setAppState, getState)` vs v88 `backgroundAll(getState, setAppState)`. Needs verification when `LocalShellTask` is lifted.
- `isSilentBashCommand` in v112 is fundamentally different from v88: it no longer uses `BASH_SILENT_COMMANDS`; instead checks only `DISALLOWED_AUTO_BACKGROUND_COMMANDS`. The `noOutputExpected` field now reflects "not a sleep command" rather than "is a file-mutation command". This is a deliberate behavioral simplification.
- The `rerun` field in `BashToolInput` + `toAutoClassifierInput` / `renderToolUseMessage` handling is new in v112 and requires corresponding schema exposure once `isFullscreenEnvEnabled` context is clarified.

## Lifter

`lifter-106` (subagent), sonnet, general-purpose.
