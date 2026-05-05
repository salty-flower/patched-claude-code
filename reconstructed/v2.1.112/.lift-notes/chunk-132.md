# Chunk #132 — src/utils/* (forkedAgent, fps, fs*, frontmatter, fullscreen, generators, git, etc.)

**Files lifted:** 12
**Confidence:** medium-high

## Per-file notes

### forkedAgent.ts
- bytes out: ~24,600
- decls reconstructed: ~10
- drift: medium — `createSubagentContext` jac=0.55, `runForkedAgent` jac=0.957, others jac=1 cos≥0.997
- v112 changes:
  - `saveCacheSafeParams` / `getLastCacheSafeParams` / `lastCacheSafeParams` removed entirely.
  - `createSubagentContext` adds many new fields: `sessionEnvVars`, `tmuxSocket`,
    `discoveredRemoteSkills`, `memorySelector`, `bashRerunAliases`, `resultDedupState`,
    `setToolPermissionContext`, `taskRegistry`, `sessionHooksRegistry`,
    `setClassifierApprovals`, `setReplContext`, `setWebBrowserSlice`, `abortSpeculation`,
    `agentLifecycle`, `teammateColors`, `setComputerUseMcpState`, `turnStartIndex`.
    Replaced `setResponseLength` with `addResponseLength`/`resetResponseLength`,
    `updateFileHistoryState` with `getFileHistoryState`/`applyFileHistoryOp`,
    `updateAttributionState` with `applyAttributionOp`.
  - `createGetAppStateWithAllowedTools` uses a `dedupeStrings` helper (was inline `[...new Set(...)]`).
  - `runForkedAgent` adds `DEFAULT_MAX_TURNS` default (10), tracks `assistantCount`,
    and logs `tengu_forked_agent_default_turns_exceeded` when the default is exceeded
    without an explicit `maxTurns` override. Uses `.at(-1)` for last UUID.
- unresolved symbols:
  - `createMemorySelector` at byte ~5925150
  - `createResultDedupState` at byte ~5925150

### formatBriefTimestamp.ts
- bytes out: ~2,800
- decls reconstructed: 4
- drift: high — signature completely changed in v112.
- v112 changes:
  - `formatBriefTimestamp` now takes `(unixSeconds, showTimezone?, use12Hour?)` instead of
    `(isoString, now?)`. Returns `string | undefined` instead of `string`.
  - `getLocale` now caches results per env-var value in a `Map`.
  - `startOfDay` is now exported (was private in v88).
  - Added `getCurrentTimezone` import dependency.
- unresolved symbols: none.

### fpsTracker.ts
- bytes out: ~1,300
- decls reconstructed: 2
- drift: low — `getMetrics` jac=0.8 cos=0.998.
- v112 changes:
  - Added `totalFrames` counter (separate from `frameDurations.length`).
  - `record()` caps `frameDurations` to 3600 entries, splicing out the first half when exceeded.
- unresolved symbols: none.

### frontmatterParser.ts
- bytes out: ~12,400
- decls reconstructed: ~10
- drift: low — one decl jac=0.667 cos=0.97, rest jac=1 cos=1.
- v112 changes:
  - `isJsFile` helper (v88 decl [4297820,4298029]) has no v112 match — removed.
  - `parseFrontmatter` body is otherwise identical; the jac=0.667 is from the removed helper.
- unresolved symbols: none.

### fsOperations.ts
- bytes out: ~24,200
- decls reconstructed: ~10
- drift: medium — two decls at jac=0.727 and jac=0.5, cos≥0.996.
- v112 changes:
  - `resolveDeepestExistingAncestorSync` (jac=0.5): now uses `readlinkSync` first
    instead of `lstatSync`/`isSymbolicLink()`. This is cheaper when the path IS a
    symlink (common case for permission checks).
  - `getPathsForPermissionCheck` (jac=0.5): same `readlinkSync`-first refactor.
    The symlink-chain loop no longer calls `existsSync` or `lstatSync` at all;
    it relies on `readlinkSync` throwing ENOENT for non-existent paths.
  - `NodeFsOperations` methods now wrap `slowLogging` calls in a `try`/`finally`
    with disposable helpers (`rz`/`oz` pattern in minified). Lifted as-is since
    the `using` statement handles disposal.
  - Two v88 decls have no v112 match: [137157,137182] and [138417,138429]
    (small boundary artifacts / intermediate helpers).
- unresolved symbols: none.

### fullscreen.ts
- bytes out: ~8,600
- decls reconstructed: ~6
- drift: high — most functions now take a `FullscreenState` parameter instead of
  using module-level globals. Several v88 decls have no v112 match.
- v112 changes:
  - All state is now passed via a `FullscreenState` object (`tmuxControlModeProbed`,
    `checkedTmuxMouseHint`, `loggedTmuxCcDisable`).
  - `isFullscreenEnvEnabled` returns `"on" | "off" | undefined` (string tri-state)
    instead of `boolean`.
  - `isFullscreenActive` now takes `state: FullscreenState` and returns based on
    the tri-state env value, falling back to `USER_TYPE === 'ant'`.
  - `maybeGetTmuxMouseHint` takes `state` parameter.
  - `_resetForTesting` takes `state` parameter.
  - `isTmuxControlMode` and `probeTmuxControlModeSync` take `state` parameter.
  - Several v88 decls have no v112 match: [3777195,3777217], [3777706,3777758],
    [3778094,3778165], [3778165,3778198], [3778537,3778559], [3778559,3778595]
    (module-level globals, `_resetTmuxControlModeProbeForTesting`, `isFullscreenActive`,
    `isMouseClicksDisabled` — some removed, some signature-changed).
- unresolved symbols: none.

### generators.ts
- bytes out: ~2,200
- decls reconstructed: 3
- drift: high — 4 of 7 v88 decls have no v112 match.
- v112 changes:
  - `lastX` and `returnValue` removed entirely.
  - `toArray` and `fromArray` removed — no v112 match in region.json.
  - Only `all` (async concurrent generator) and the `NO_VALUE` symbol remain.
  - The removed functions may have moved to a different chunk or been inlined.
- unresolved symbols: none.

### getWorktreePathsPortable.ts
- bytes out: ~850
- decls reconstructed: 2
- drift: low — `getWorktreePathsPortable` jac=0.692 cos=0.994.
- v112 changes:
  - `.slice('worktree '.length)` inlined to `.slice(9)` in the minified.
  - Two v88 decls have no v112 match: [931002,931010] and [931010,931040]
    (small boundary artifacts).
- unresolved symbols: none.

### ghPrStatus.ts
- bytes out: ~2,800
- decls reconstructed: 2
- drift: verbatim — all matched decls jac=1 cos=1.
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.
- note: Three v88 decls have no v112 match [12030558,12030618], [12031315,12031328],
  [12031328,12031360] — boundary artifacts from adjacent file regions.

### git.ts
- bytes out: ~30,300
- decls reconstructed: ~20
- drift: low-medium — most decls jac≥0.84 cos=1; several new exports.
- v112 changes:
  - New exports: `findRepoRemoteSlug` (memoized LRU, tries pushurl then url),
    `getGitWorktreeName` (stub — body unresolved), `redactGitRemoteCredentials`
    (stub — body unresolved).
  - `findGitRoot` and `findCanonicalGitRoot` use `JF7` for `sep` — just a minified
    name change, semantics unchanged.
  - Five v88 decls have no v112 match: [955405,955496], [955496,955596],
    [955596,955625], [955625,955761], [957428,957456] — these contain the new
    function bodies and some module-level init that spilled across the sourcemap
    boundary from gitFilesystem.ts.
- unresolved symbols:
  - `resolveGitDirSync` at byte ~963013 — sync variant not present in v88
  - `parseGitConfigValue` at byte ~963013 — imported from gitConfigParser.js

### git/gitFilesystem.ts
- bytes out: ~22,300
- decls reconstructed: ~25
- drift: medium — `GitFileWatcher` class jac=0.7 cos=0.998; two decls at jac=0.667.
- v112 changes:
  - `GitFileWatcher` adds `repoBranches`, `repoGitDirs`, `repoBranchListeners`
    Maps and methods `addRepo`, `onRepoBranchChange`, `getBranchForRepo` for
    multi-repo workspace support.
  - `computeRemoteUrl` now tries `pushurl` first, then `url` (was url-only in v88).
  - `resolveGitDir` now resolves the startPath before cache lookup.
  - Six v88 decls have no v112 match: [946275,946290], [946454,946481],
    [947036,947109], [947506,947622], [951887,951908], [951908,951974]
    (boundary artifacts and small helper inits).
- unresolved symbols: none.

### git/gitignore.ts
- bytes out: ~3,200
- decls reconstructed: 4
- drift: verbatim — matched decls jac=1 cos=1.
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.
- note: The first v88 decl [961816,963195] with jac=0.84 is a boundary artifact
  from git.ts's module-level var block; it does not belong to gitignore.ts.

## Cross-file observations

- **State object pattern in fullscreen.ts**: v112 moved fullscreen state from
  module-level globals to an explicit `FullscreenState` parameter object. This
  enables multiple concurrent REPL sessions (e.g., in-process teammates) to
  have independent fullscreen state.
- **forkedAgent.ts subagent context expansion**: Many new fields were added to
  `createSubagentContext` — these map to new features in v112 (teammate colors,
  remote skills, result dedup, bash rerun aliases, computer-use MCP state, etc.).
  The unresolved `createMemorySelector` and `createResultDedupState` imports need
  resolution from adjacent chunks.
- **fsOperations.ts readlink-first refactor**: Both `resolveDeepestExistingAncestorSync`
  and `getPathsForPermissionCheck` were refactored to call `readlinkSync` before
  `lstatSync`. This is a performance optimization for the common case where the
  path is a symlink.
- **generators.ts slimmed down**: `lastX`, `returnValue`, `toArray`, `fromArray`
  were all removed. Only `all` (concurrent async generator combinator) remains.
- **git.ts new exports**: `findRepoRemoteSlug` and `redactGitRemoteCredentials`
  were added for safer remote URL handling. `getGitWorktreeName` was added but
  its body is not resolved from the minified.

## Lifter

`lifter-132` (kimi-for-coding). Chunk #132.
