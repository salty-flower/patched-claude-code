# Chunk #131 — src/utils/* (env, errors, exec*, file*, fingerprint, etc.)

**Files lifted:** 20
**Confidence:** medium-high

## Per-file notes

### env.ts
- bytes out: ~11,300
- decls reconstructed: ~8
- drift: low-medium — 4 perfect matches, 1 jac=0.902/cos=0.999
- v112 changes:
  - `detectDeploymentEnvironment` adds `coder`, `devpod`, `daytona`, `gcp-cloud-workstations`, `aws-cloud9` detection branches.
  - `isNpmFromWindowsPath` now calls `whichSync('npm')` directly instead of `findExecutable('npm',[]).cmd`.
  - `isRunningWithBun` is memoized at the `env` object level (`memoize(isRunningWithBun)`).
- unresolved symbols: none.

### envUtils.ts
- bytes out: ~6,100
- decls reconstructed: ~15
- drift: low — 9 perfect, 3 jac=1/cos>=0.986
- v112 changes:
  - `isEnvTruthy` and `isEnvDefinedFalsy` now wrap with `String()` before `.toLowerCase()`.
  - `isRunningOnHomespace` and `isInProtectedNamespace` removed (no v112 match — ant-only DCE).
  - `VERTEX_REGION_OVERRIDES` adds `claude-opus-4-7`, `claude-opus-4-6`, `claude-opus-4-5` entries.
  - New `parseTagList` function (from v112 module init) parsing comma-separated include/exclude lists with `!` negation.
- unresolved symbols: none.

### errorLogSink.ts
- bytes out: ~6,500
- decls reconstructed: ~13
- drift: low — 10 perfect matches
- v112 changes:
  - `appendToLog` ant-only `USER_TYPE !== 'ant'` guard removed (DCE'd in external builds).
- unresolved symbols: none.

### errors.ts
- bytes out: ~6,900
- decls reconstructed: ~12
- drift: low-medium — 8 perfect, 1 jac=0.933/cos=1
- v112 changes:
  - `ShellError` constructor gains `hadSandboxViolation: boolean = false` parameter.
  - `shortErrorStack` function removed (no v112 match).
- unresolved symbols: none.

### exampleCommands.ts
- bytes out: ~5,700
- decls reconstructed: ~6
- drift: low — 3 perfect matches
- v112 changes:
  - `countAndSortItems` removed (no v112 match).
- unresolved symbols: none.

### execFileNoThrow.ts
- bytes out: ~5,000
- decls reconstructed: ~6
- drift: medium — 2 perfect, 1 jac=0.667/cos=0.999
- v112 changes:
  - `execFileNoThrowWithCwd` adds Windows safety check: validates command path via `KQ6` before calling execa when `process.platform === 'win32' && !shell`.
- unresolved symbols:
  - `KQ6` at byte ~949103 — Windows command path safety validator.

### execFileNoThrowPortable.ts
- bytes out: ~2,700
- decls reconstructed: ~4
- drift: low — 1 perfect match
- v112 changes:
  - `execSyncWithDefaults_DEPRECATED` now uses `using _ = slowLogging\`...\`` (explicit resource management) and passes `reject: false` to execaSync.
- unresolved symbols: none.

### execSyncWrapper.ts
- bytes out: ~1,200
- decls reconstructed: ~3
- drift: low — 1 jac=1/cos=0.998, 1 perfect
- v112 changes:
  - Bundle region includes adjacent platform.ts functions (getPlatform, getWslVersion, etc.) but these are sourcemap artifacts; execSyncWrapper.ts source retains only `execSync_DEPRECATED`.
- unresolved symbols: none.

### exportRenderer.tsx
- bytes out: ~4,500
- decls reconstructed: ~7
- drift: low — 3 perfect, 1 jac=0.952/cos=1
- v112 changes: none structural — `Messages` component props unchanged.
- unresolved symbols: none.

### extraUsage.ts
- bytes out: ~750
- decls reconstructed: ~3
- drift: medium — 1 jac=0.5/cos=0.992
- v112 changes:
  - `isBilledAsExtraUsage` now uses `getDefaultModel()` when `model === null`.
  - Adds `opus-4-7` to the list of models billed as extra usage.
- unresolved symbols: none.

### fastMode.ts
- bytes out: ~17,400
- decls reconstructed: ~22
- drift: low-medium — 16 perfect, 2 drifted (jac 0.727, 0.5)
- v112 changes:
  - `isFastModeEnabled` now requires `getAPIProvider() === 'firstParty'`.
  - Non-first-party error message expanded to include "Claude Platform on AWS".
  - `resolveFastModeStatusFromCache` and `prefetchFastModeStatus` remove all `USER_TYPE === 'ant'` branches.
  - `isEssentialTrafficOnly()` guard removed from `prefetchFastModeStatus`.
- unresolved symbols: none.

### file.ts
- bytes out: ~14,200
- decls reconstructed: ~25
- drift: medium — 14 perfect, several removed
- v112 changes:
  - `pathExists`, `suggestPathUnderCwd`, `addLineNumbers`, `stripLineNumberPrefix`, `normalizePathForComparison`, `pathsEqual` removed.
  - `writeFileSyncAndFlush_DEPRECATED` uses `gm7` (writeFileSync) internally; logic unchanged.
- unresolved symbols: none.

### fileHistory.ts
- bytes out: ~30,300
- decls reconstructed: ~27
- drift: medium-high — 2 functions heavily refactored (jac 0.417, 0.5)
- v112 changes:
  - `fileHistoryTrackEdit` and `fileHistoryMakeSnapshot` refactored into a pure `fileHistoryReducer(state, action)` with `TrackAction` and `SnapshotAction`.
  - `fileHistoryRestoreStateFromLog` simplified to pure function.
  - `copyFileHistoryForResume` streamlined.
- unresolved symbols: none.

### fileOperationAnalytics.ts
- bytes out: ~2,300
- decls reconstructed: ~6
- drift: verbatim (3 perfect matches)
- v112 changes: none — identical logic.
- unresolved symbols: none.

### filePersistence/outputsScanner.ts
- bytes out: ~400
- decls reconstructed: ~3
- drift: high — only 1 decl matched
- v112 changes:
  - `logDebug`, `hasParentPath`, `hasPath`, `getEntryParentPath`, `findModifiedFiles` all removed.
  - Only `getEnvironmentKind` remains.
- unresolved symbols: none.

### fileRead.ts
- bytes out: ~3,200
- decls reconstructed: ~6
- drift: low — 4 perfect matches
- v112 changes: none — identical logic.
- unresolved symbols: none.

### fileReadCache.ts
- bytes out: ~2,400
- decls reconstructed: ~4
- drift: low — 1 perfect match
- v112 changes: none — identical logic.
- unresolved symbols: none.

### fileStateCache.ts
- bytes out: ~4,900
- decls reconstructed: ~9
- drift: medium — 1 jac=0.667/cos=0.987
- v112 changes:
  - `FileStateCache.set()` now computes `contentHash`, `contentLength`, and implements `keepContent` preservation logic (retains previous content when empty write hash matches).
  - `FileState` type gains `keepContent`, `contentHash`, `contentLength` optional fields.
- unresolved symbols:
  - `dD4` at byte ~5046909 — content hash function (likely SHA-256 or similar).

### findExecutable.ts
- bytes out: ~550
- decls reconstructed: ~3
- drift: low — 1 perfect match (bundler artifact), actual function unmatched
- v112 changes: none — `findExecutable` function stable; v112 slice shows unrelated `v$()` due to bundler adjacency.
- unresolved symbols: none.

### fingerprint.ts
- bytes out: ~2,300
- decls reconstructed: ~5
- drift: low — 3 perfect, 1 jac=0.857/cos=0.999
- v112 changes:
  - `extractFirstMessageText` now filters `!msg.isMeta` for user messages.
  - `computeFingerprintFromMessages` hardcodes v112 version metadata object internally but still calls `computeFingerprint(text, MACRO.VERSION)`.
- unresolved symbols: none.

## Cross-file observations

- **Fast mode first-party gate**: `isFastModeEnabled` now requires `getAPIProvider() === 'firstParty'` at the top level, tightening the gate.
- **Ant-only code excised**: `envUtils.ts` (`isRunningOnHomespace`, `isInProtectedNamespace`), `fastMode.ts` (all `USER_TYPE === 'ant'` branches), `errorLogSink.ts` (`USER_TYPE` guard) all had ant-only code DCE'd in v112.
- **File history reducer refactor**: v112 moved fileHistory to a pure reducer pattern (`fileHistoryReducer`), decoupling state updates from async I/O. This is the largest structural change in the chunk.
- **file.ts trimmed**: Several utility functions (`pathExists`, `addLineNumbers`, `normalizePathForComparison`, `pathsEqual`) were removed in v112 — likely moved to other modules or no longer needed.
- **outputsScanner gutted**: Reduced to a single `getEnvironmentKind` export; the rest of the file persistence scanning logic was removed or relocated.

## Lifter

`lifter-131` (sonnet-4-6, general-purpose, team v112-lift). Chunk #131.
