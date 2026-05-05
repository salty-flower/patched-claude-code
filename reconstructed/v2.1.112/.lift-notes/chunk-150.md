# Chunk 150 Lift Notes

## Files

- `src/utils/secureStorage/keychainPrefetch.ts`
- `src/utils/semanticBoolean.ts`
- `src/utils/semanticNumber.ts`
- `src/utils/sessionActivity.ts`
- `src/utils/sessionEnvironment.ts`
- `src/utils/sessionFileAccessHooks.ts`
- `src/utils/sessionRestore.ts`
- `src/utils/sessionStart.ts`
- `src/utils/sessionState.ts`

---

## Per-File Drift Summary

### keychainPrefetch.ts
- **Import preamble**: no v112 match (decl [3467759,3467788])
- `spawnSecurity`: jac=1, cos=1 (verbatim)
- `startKeychainPrefetch`: jac=1, cos=1 (verbatim)
- `ensureKeychainPrefetchCompleted`: **no v112 match** (removed)
- `getLegacyApiKeyPrefetchResult`: **no v112 match** (removed)
- `clearLegacyApiKeyPrefetch`: **no v112 match** (removed)
- Variable decls (`KEYCHAIN_PREFETCH_TIMEOUT_MS`, `legacyApiKeyPrefetch`, `prefetchPromise`): **no v112 match** (hoisted / moved)
- **Postamble**: no v112 match
- **Semantic change**: v112 removed 3 of 5 exported functions. Only `spawnSecurity` and `startKeychainPrefetch` remain. The prefetch result getters were likely inlined or consumers now access the promise directly.

### semanticBoolean.ts
- Import preamble: jac=1, cos=0.999 (tight drift — import list minified names shifted)
- `semanticBoolean`: jac=1, cos=1 (verbatim)
- Postamble: no v112 match
- **Verdict**: verbatim copy. Only import minified names changed.

### semanticNumber.ts
- `semanticNumber`: jac=1, cos=1 (verbatim)
- Preamble/postamble: no v112 match
- **Verdict**: verbatim copy.

### sessionActivity.ts
- Import preamble: jac=0.885, cos=0.989 (real drift — v112 preamble is much larger, merged with other modules)
- `startHeartbeatTimer`: jac=1, cos=1 (verbatim)
- `startIdleTimer`: jac=1, cos=1 (verbatim)
- `clearIdleTimer`: **no v112 match** (inlined into `startHeartbeatTimer`/`startIdleTimer` as `q97()`)
- `registerSessionActivityCallback`: **no v112 match** (removed)
- `unregisterSessionActivityCallback`: **no v112 match** (removed)
- `sendSessionActivitySignal`: jac=1, cos=1 (verbatim)
- `isSessionActivityTrackingActive`: **no v112 match** (removed)
- `startSessionActivity`: jac=1, cos=1 (verbatim)
- `stopSessionActivity`: jac=1, cos=1 (verbatim)
- Variable decls: no v112 match
- **Semantic change**: v112 removed the callback registration API (`registerSessionActivityCallback`, `unregisterSessionActivityCallback`, `isSessionActivityTrackingActive`). The activity callback is now set internally. `clearIdleTimer` was inlined.

### sessionEnvironment.ts
- Import preamble: jac=1, cos=1 (verbatim)
- `getSessionEnvDirPath`: jac=1, cos=1 (verbatim)
- `getHookEnvFilePath`: jac=1, cos=1 (verbatim)
- `clearCwdEnvFiles`: jac=1, cos=1 (verbatim)
- `invalidateSessionEnvCache`: jac=1, cos=1 (verbatim)
- `getSessionEnvironmentScript`: jac=0.882, cos=0.999 (tight drift — `.sort()` now references external comparator `NMz` instead of inline `sortHookEnvFiles`)
- `sortHookEnvFiles`: **no v112 match** (moved / extracted)
- `HOOK_ENV_PRIORITY`/`HOOK_ENV_REGEX` var decls: **no v112 match** (initialized in postamble instead)
- **Semantic change**: `sortHookEnvFiles` comparator was extracted to a cross-chunk symbol (`NMz`). The sort call remains but the function definition is no longer in this module's slice.

### sessionFileAccessHooks.ts
- Export decl: jac=1, cos=1 (verbatim)
- `getFilePathFromInput`: jac=1, cos=1 (verbatim)
- `getSessionFileTypeFromInput`: jac=1, cos=1 (verbatim)
- `isMemoryFileAccess`: jac=1, cos=1 (verbatim)
- `handleSessionFileAccess`: jac=1, cos=1 (verbatim)
- `registerSessionFileAccessHooks`: jac=1, cos=1 (verbatim)
- `teamMemPaths`/`teamMemWatcher` var decls: **no v112 match** (hoisted / renamed to `vSK`/`GSK`)
- Postamble: **no v112 match**
- **Verdict**: essentially verbatim. Feature-gated require variables moved to postamble.

### sessionRestore.ts
- Import preamble: jac=1, cos=1 (verbatim)
- `extractTodosFromTranscript`: jac=1, cos=1 (verbatim)
- `restoreSessionStateFromLog`: jac=1, cos=1 (verbatim)
- `computeRestoredAttributionState`: **no v112 match** (empty function `xQY(q){return}` removed in v112)
- `computeStandaloneAgentContext`: jac=1, cos=1 (verbatim)
- `restoreAgentFromSession`: jac=1, cos=1 (verbatim)
- `refreshAgentDefinitionsForModeSwitch`: jac=1, cos=1 (verbatim, but relocated to very early bundle offset 33586-33622 — likely extracted to shared chunk)
- `restoreWorktreeForResume`: jac=1, cos=0.856 (real drift — relocated to byte 33586, function body unchanged but minified names shifted significantly)
- `exitRestoredWorktree`: **no v112 match** (removed or moved)
- `processResumedConversation`: jac=0.889, cos=1 (tight drift — body mostly same, v112 adds permission mode handling via `zYA` and attribution via `_YA`)
- Postamble: **no v112 match**
- **Semantic change**:
  - `computeRestoredAttributionState` removed (was empty stub).
  - `processResumedConversation` now includes permission mode restoration (`zYA`) and attribution state computation (`_YA`) in its flow.
  - `exitRestoredWorktree` no longer in this slice.

### sessionStart.ts
- Import preamble: jac=1, cos=1 (verbatim)
- `takeInitialUserMessage`: **no v112 match** (small decl, may have been inlined)
- `processSessionStartHooks`: jac=0.944, cos=1 (tight drift)
  - Condition changed: `shouldAllowManagedHooksOnly()` → `isAllowManagedHooksOnlyEnabled() && getManagedPlugins() === null`
  - Error logging: `logError` call minified name changed (`H6` → `j6`)
- `processSetupHooks`: jac=0.857, cos=0.999 (real drift — same condition change as above)
- Postamble: **no v112 match**
- **Semantic change**: The "allow managed hooks only" gate was tightened to also require managed plugins to be present. Both `processSessionStartHooks` and `processSetupHooks` reflect this.

### sessionState.ts
- Export decl: jac=1, cos=1 (verbatim)
- `setSessionStateChangedListener`: **no v112 match**
- `setSessionMetadataChangedListener`: **no v112 match**
- `setPermissionModeChangedListener`: **no v112 match**
- `getSessionState`: **no v112 match**
- `notifySessionStateChanged`: jac=0.5, cos=0.608 (significant drift — mapped to very different v112 decl at byte 4403354)
- `notifySessionMetadataChanged`: **no v112 match**
- `notifyPermissionModeChanged`: **no v112 match**
- Variable decls: **no v112 match**
- Postamble: **no v112 match**
- **Semantic change**: This module was heavily refactored in v112. The v112 slice only contains React context creation (`LW6.createContext`, `d46.createContext`) and a new default state object (`FQ_`). The session state management functions (`notifySessionStateChanged`, etc.) are no longer in this slice — they were either moved to a different module or the architecture changed significantly. The reconstructed file keeps the v88 structure since the functions are still conceptually part of this module, but notes that v112's slice is radically different.

---

## Cross-File Observations

1. **Managed hooks policy tightening**: Both `sessionStart.ts` and `sessionStart.ts` (via `processSessionStartHooks`/`processSetupHooks`) show the same semantic change: `shouldAllowManagedHooksOnly()` was replaced with `isAllowManagedHooksOnlyEnabled() && getManagedPlugins() === null`. This is a coordinated policy change across the codebase.

2. **Callback API removal in sessionActivity**: The removal of `registerSessionActivityCallback`/`unregisterSessionActivityCallback`/`isSessionActivityTrackingActive` suggests the activity tracking mechanism was simplified — the callback is now set once internally rather than being a public registration API.

3. **keychainPrefetch API reduction**: Removing 3 of 5 exports suggests the keychain prefetch module was simplified. Consumers may now rely on the promise directly rather than getter/clearer functions.

4. **sessionState heavy refactor**: The v112 slice for `sessionState.ts` is almost unrecognizable — primarily React context creation. This suggests a major architectural shift in how session state is managed (possibly moved to React context providers or a different state management layer).

5. **sortHookEnvFiles extraction**: The comparator function in `sessionEnvironment.ts` was extracted to a cross-chunk symbol, suggesting it was deduplicated or moved to a shared utility.

---

## Unresolved Symbols List

| File | Minified Name | Byte Offset | Context |
|------|--------------|-------------|---------|
| sessionActivity.ts | `eq` | ~9933622 | `registerCleanup` — cleanup registration in `startSessionActivity` |
| sessionEnvironment.ts | `NMz` | ~5779798 | `sortHookEnvFiles` comparator — used in `.sort()` call |
| sessionFileAccessHooks.ts | `vSK` | ~9875433 | `teamMemPaths.isTeamMemFile` — feature-gated team mem check |
| sessionFileAccessHooks.ts | `GSK` | ~9876300 | `teamMemWatcher.notifyTeamMemoryWrite` — team mem write notification |
| sessionRestore.ts | `_YA` | ~12512820 | `attributionRestoreStateFromLog` — attribution state restoration |
| sessionRestore.ts | `zYA` | ~12513303 | `permissionModeRestore` — permission mode context restoration (inferred from `uP7` body) |
| sessionStart.ts | `Ey` | ~5895850 | `isAllowManagedHooksOnlyEnabled` — new policy check |
| sessionStart.ts | `OL6` | ~5895850 | `getManagedPlugins` — new policy check |
| sessionStart.ts | `Rf6` | ~5896722 | `withDiagnosticsTiming` — timing wrapper |
| sessionStart.ts | `pc` | ~5896722 | `loadPluginHooks` — memoized plugin hook loader |
| sessionStart.ts | `S9` | ~5896722 | `isBareMode` — bare mode check |
| sessionStart.ts | `E18` | ~5898507 | `executeSessionStartHooks` — hook executor |
| sessionStart.ts | `lg` | ~5898507 | `getMainThreadAgentType` — agent type getter |
| sessionStart.ts | `cb4` | ~5898507 | `updateWatchPaths` — file watcher update |
| sessionStart.ts | `Y4` | ~5898507 | `createAttachmentMessage` — message factory |
| sessionStart.ts | `y18` | ~5899181 | `executeSetupHooks` — setup hook executor |
