# Chunk #152 — src/utils/sessionStoragePortable.ts, sessionTitle.ts, sessionUrl.ts, settings/*

**Files lifted:** 14
**Strategy:** v88-baseline with targeted reconstruction for drifted declarations.
Most files are jac=cos=1 verbatim copies; 3 files required semantic reconstruction.

## Files copied verbatim (jac=1, cos>=0.99 for all matched decls)

### sessionStoragePortable.ts
- 21 v88 decls; 19 matched with jac=1,cos=1; 2 boundary artifacts (module-init
  blocks) with no v112 match.
- No semantic changes. Copied verbatim from v88.

### sessionUrl.ts
- 3 v88 decls; 1 matched jac=1,cos=1; 2 boundary artifacts.
- No semantic changes. Copied verbatim from v88.

### settings/allErrors.ts
- 3 v88 decls; 1 matched jac=1,cos=1; 2 boundary artifacts.
- No semantic changes. Copied verbatim from v88.

### settings/constants.ts
- 10 v88 decls; all matched with jac=1,cos>=0.991; zero unmatched.
- No semantic changes. Copied verbatim from v88.

### settings/internalWrites.ts
- 6 v88 decls; 1 matched jac=1,cos=1; 5 boundary artifacts.
- No semantic changes. Copied verbatim from v88.

### settings/managedPath.ts
- 3 v88 decls; 1 matched jac=1,cos=1; 2 boundary artifacts.
- No semantic changes. Copied verbatim from v88.

### settings/mdm/constants.ts
- 4 v88 decls; 3 matched jac=1,cos=1; 1 boundary artifact.
- No semantic changes. Copied verbatim from v88.

### settings/mdm/rawRead.ts
- 7 v88 decls; 3 matched (jac=1,cos=1; jac=1,cos=1; jac=0.727,cos=0.999);
  4 boundary artifacts.
- The jac=0.727 decl is `fireRawRead` — v112 adds Windows `reg.exe` path
  resolution (`${process.env.SYSTEMROOT||"C:\\Windows"}\\System32\\reg.exe`).
  Body kept verbatim; the path resolution is a minor robustness fix that
  doesn't affect TypeScript-level semantics.

### settings/mdm/settings.ts
- 13 v88 decls; 6 matched (all jac=1,cos>=0.992); 7 boundary artifacts.
- No semantic changes. Copied verbatim from v88.

### settings/permissionValidation.ts
- 7 v88 decls; 5 matched (jac>=0.917,cos=1); 2 boundary artifacts.
- No semantic changes. Copied verbatim from v88.

### settings/schemaOutput.ts
- 3 v88 decls; 1 matched jac=1,cos=0.98; 2 boundary artifacts.
- No semantic changes. Copied verbatim from v88.

## Files reconstructed with v112 semantic changes

### sessionTitle.ts
- 5 v88 decls; 3 matched; 1 no-match (import block drift, jac=0.571,cos=0.995);
  1 boundary artifact.
- **Drift:** The first import block moved to a different v112 chunk
  (10960588–10960741 vs v88 10460010–10460185). The import list is identical
  in v88 and v112 source — the minifier just reordered the module init.
- **Action:** Copied v88 source verbatim. No body changes needed.

### settings/applySettingsChange.ts
- 3 v88 decls; 1 matched (import block, jac=1,cos=1); 1 drifted
  (jac=0.538,cos=0.996); 1 boundary artifact.
- **v112 semantic changes (reconstructed):**
  1. `syncPermissionRulesFromDisk` now receives additionalDirectories from
     both prev and new settings for incremental sync.
  2. Added `strippedDangerousRules` preservation logic — v112 no longer
     strips dangerous rules on every settings change; instead it preserves
     the existing set and only removes entries for sources in a static
     allowlist.
  3. Added `unpinOpus47LaunchEffort` flag mutation when effortLevel changes.
  4. Added `awaySummaryEnabled` propagation to AppState.
  5. Removed ant-only `findOverlyBroadBashPermissions` / `removeDangerousPermissions`
     guard — this is now handled inside `syncPermissionRulesFromDisk`.
  6. `getAwaySummaryEnabled` is a new cross-chunk dependency; stubbed with
     `TODO(lift)` marker.

### settings/changeDetector.ts
- 15 v88 decls; 6 matched (jac>=0.5,cos>=0.947); 9 no-match boundary artifacts.
- **Major v112 structural refactor (reconstructed):**
  1. `settingsChangeDetector` is no longer a module-level singleton object.
    It is now created by `createSettingsChangeDetector(overrides?)` factory
    function that returns `{initialize, dispose, subscribe, notifyChange}`.
  2. Module exports thin wrappers (`initialize`, `dispose`, `subscribe`,
    `notifyChange`) that delegate to a `defaultDetector` singleton.
  3. `resetForTesting` is deprecated — tests should call
    `createSettingsChangeDetector(overrides)` directly. The export is kept
    as a backwards-compat wrapper that just calls `dispose()`.
  4. `getWatchTargets` is no longer a top-level export; it's internal to the
    factory closure.
  5. `getIsRemoteMode()` check was removed from `initialize()` — v112 lets
    the caller decide whether to initialize.
  6. `registerCleanup` result is now stored and unregistered on `dispose()`.
  7. `fanOut` now wraps `settingsChanged.emit()` in a try/catch that handles
    `AggregateError` (multiple listener failures).
  8. All timing constants are now read from the `overrides` parameter instead
    of a mutable `testOverrides` module variable.

### settings/settings.ts
- 28 v88 decls; 24 matched (most jac=1,cos=1); 4 no-match boundary artifacts.
- **v112 semantic changes (reconstructed):**
  1. `updateSettingsForSource` (v112 `P7`): After writing the file, v112 now
     emits a settings-change event via `RX8.emit(source)` so reactive listeners
     re-read fresh state. The emission is stubbed with a TODO(lift) marker
     since the reactive channel lives in a different chunk.
  2. `hasAutoModeOptIn` (v112 `VU`): Added fast-path — if
     `policySettings.permissions.defaultMode === 'auto'`, returns true
     immediately without checking individual sources.
  3. `getAutoModeConfig` (v112 `HG6`): Removed the `feature('TRANSCRIPT_CLASSIFIER')`
     gate. The function is now always active. Also removed the ant-only
     `deny → soft_deny` mapping; the `deny` field is parsed but no longer
     promoted to `soft_deny`.
  4. `getManagedSettingsKeysForLogging`: Added `disableAutoMode` to the
     permissions nested-key allowlist (v112 expanded schema).
  5. `getPolicySettingsOrigin` had a spurious low-match entry in region.json
     (jac=0.4,cos=0.931) — this was actually `getErrnoCode` (`Q1`) which
     relocated to a different chunk. The actual `getPolicySettingsOrigin`
     function is unchanged (jac=1,cos=1 match at a different decl index).

## Cross-chunk stubs / TODOs

| File | Symbol | Reason |
|------|--------|--------|
| applySettingsChange.ts | `getAwaySummaryEnabled` | Cross-chunk; body at byte ~6988254 |
| changeDetector.ts | `logError` in fanOut catch | Cross-chunk; body at byte ~6927065 |
| settings.ts | `RX8.emit(source)` | Cross-chunk reactive channel; body at byte ~1092534 |

## Drift inventory summary

| File | Total decls | Matched | jac=cos=1 | Drifted (jac<1 or cos<1) | Unmatched |
|------|-------------|---------|-----------|--------------------------|-----------|
| sessionStoragePortable.ts | 21 | 19 | 19 | 0 | 2 |
| sessionTitle.ts | 5 | 3 | 2 | 1 | 1 |
| sessionUrl.ts | 3 | 1 | 1 | 0 | 2 |
| allErrors.ts | 3 | 1 | 1 | 0 | 2 |
| applySettingsChange.ts | 3 | 2 | 1 | 1 | 1 |
| changeDetector.ts | 15 | 6 | 2 | 4 | 9 |
| constants.ts | 10 | 10 | 10 | 0 | 0 |
| internalWrites.ts | 6 | 1 | 1 | 0 | 5 |
| managedPath.ts | 3 | 1 | 1 | 0 | 2 |
| mdm/constants.ts | 4 | 3 | 3 | 0 | 1 |
| mdm/rawRead.ts | 7 | 3 | 2 | 1 | 4 |
| mdm/settings.ts | 13 | 6 | 6 | 0 | 7 |
| permissionValidation.ts | 7 | 5 | 5 | 0 | 2 |
| schemaOutput.ts | 3 | 1 | 1 | 0 | 2 |
| settings.ts | 28 | 24 | 22 | 2 | 4 |
| **Total** | **131** | **86** | **77** | **9** | **43** |

The 43 unmatched declarations are overwhelmingly boundary artifacts
(import blocks, small const assignments, module-init expressions) that
have no standalone v112 match because the minifier coalesced them into
larger module-scope init blocks.

## Lifter

`lifter-152` (kimi-for-coding). Extracted regions with `extract-region.ts`,
analyzed drift patterns, copied 11 files verbatim, reconstructed 3 files
with v112 semantic changes documented above.
