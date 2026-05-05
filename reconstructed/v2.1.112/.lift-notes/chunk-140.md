# Chunk 140 Lift Notes

## Files (18)
- `src/utils/nativeInstaller/installer.ts`
- `src/utils/nativeInstaller/packageManagers.ts`
- `src/utils/nativeInstaller/pidLock.ts`
- `src/utils/objectGroupBy.ts`
- `src/utils/pasteStore.ts`
- `src/utils/path.ts`
- `src/utils/pdf.ts`
- `src/utils/pdfUtils.ts`
- `src/utils/permissions/PermissionMode.ts`
- `src/utils/permissions/PermissionPromptToolResultSchema.ts`
- `src/utils/permissions/PermissionResult.ts`
- `src/utils/permissions/PermissionRule.ts`
- `src/utils/permissions/PermissionUpdate.ts`
- `src/utils/permissions/autoModeState.ts`
- `src/utils/permissions/bashClassifier.ts`
- `src/utils/permissions/bypassPermissionsKillswitch.ts`
- `src/utils/permissions/classifierDecision.ts`
- `src/utils/permissions/classifierShared.ts`

## Drift Summary

### Verbatim (jac=1, cos=1)
- `packageManagers.ts` — no changes
- `pidLock.ts` — no changes
- `objectGroupBy.ts` — no changes
- `pasteStore.ts` — no changes
- `pdf.ts` — no changes
- `PermissionResult.ts` — no changes
- `PermissionRule.ts` — no changes
- `bashClassifier.ts` — no changes
- `bypassPermissionsKillswitch.ts` — no changes
- `classifierShared.ts` — no changes

### Tight drift (cos >= 0.998)
- `PermissionMode.ts` — `feature('TRANSCRIPT_CLASSIFIER')` conditional for `auto` mode still present in v88 source but v112 minified shows unconditional inclusion. Kept v88 source as-is since the feature gate may still exist in source; the minified difference could be bundler DCE behavior change.
- `PermissionPromptToolResultSchema.ts` — minor drift, carried verbatim
- `classifierDecision.ts` — minor drift, carried verbatim

### Real drift (studied v112 minified)

#### `installer.ts`
Multiple changes from v88 to v112:
1. **`isPossibleClaudeBinary`**: Simplified from `stat+isFile+size>0+access(X_OK)` to just `stat+isFile`. Removed size and executability checks.
2. **`getVersionPaths`**: Changed empty-file creation from `stat+writeFile` to `stat+writeFile with flag: 'wx'` + EEXIST handling.
3. **`updateLatest`**: Added `wasSkipped` return field. Added canary version logic (`Roz`, `RP` in minified) — not fully reconstructed since the canary helpers are external to this file.
4. **`installLatestImpl`**: `wasUpdated` now computed as `success && !wasSkipped`. Returns `wasSkipped` field.
5. **`updateSymlink`**: Non-Windows path simplified — removed complex `readlink+resolve+compare` logic in favor of atomic temp-symlink + rename pattern (same pattern as Windows copy path).
6. **`cleanupOldVersions`**: Added `size` field to `VersionInfo`. Added Windows fallback size-matching for symlink resolution when `readlink` fails. Executable mode check uses decimal `73` instead of octal `0o111` (same value).
7. **`checkInstall`**: Simplified symlink validation path. Uses `readlink` directly instead of `access+readlink` chain.

#### `path.ts`
- `containsPathTraversal` function appears to have moved to a different location in the v112 bundle (matched at v112_decl [10083334,10083394] but that region contains a different function). Marked as TODO.

#### `pdfUtils.ts`
- Error message constant changed: "File has not been read yet..." → "File has been unexpectedly modified..."
- Otherwise verbatim.

#### `PermissionUpdate.ts`
1. **`applyPermissionUpdate`**: Added `bypassPermissions` guard in `setMode` case — rejects if `!context.isBypassPermissionsModeAvailable`.
2. **`persistPermissionUpdate`**: Added `bypassPermissions` guard — skips persisting `setMode:'bypassPermissions'` with log message.

#### `autoModeState.ts`
- v112 minified shows exports for `createAutoModeState` and `_setGlobalAutoModeStateForTesting` that don't exist in v88. These are new APIs. Marked as TODO since the exact implementation isn't clear from minified.

## TODOs
1. `path.ts` — `containsPathTraversal` moved in bundle; needs location in v112 source
2. `autoModeState.ts` — `createAutoModeState` and `_setGlobalAutoModeStateForTesting` are new exports in v112
3. `installer.ts` — canary version helpers (`getCanaryVersion`, `compareVersion`) are external references not in this chunk
