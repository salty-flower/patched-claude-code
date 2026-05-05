# Chunk 160 Lift Notes

## Summary

20 files lifted from v2.1.88 to v2.1.112. Most files are utility modules with
minor import/name changes. Several files had significant structural changes.

## Per-File Drift

### src/utils/thinking.ts
- **modelSupportsThinking**: Removed `resolveAntModel` ant-only branch and
  provider check (foundry/firstParty vs 3P). Now simply returns
  `!canonical.includes("claude-3-")`.
- **modelSupportsAdaptiveThinking**: Added `opus-4-7` to the allowlist.
- Import block (isUltrathinkEnabled) removed in v112 minified — the function
  and its imports were collapsed or moved.
- Unmatched declarations: 3 (import block + small type decls).

### src/utils/todo/types.ts
- No semantic changes. Only minified variable names differ.
- Unmatched: 1 import decl.

### src/utils/tokenBudget.ts
- No semantic changes. Only minified variable names differ.
- Unmatched: 1 var decl.

### src/utils/tokens.ts
- Large import block changed (jac=0.86, cos=1) — many import renames.
- One unmatched trailing decl (likely export list or minification artifact).
- No semantic changes to functions.

### src/utils/toolPool.ts
- **Major**: Coordinator mode filtering completely removed from this file.
  `applyCoordinatorToolFilter`, `COORDINATOR_MODE_ALLOWED_TOOLS`,
  `isPrActivitySubscriptionTool`, and the conditional `require()` block
  are gone. `mergeAndFilterTools` now just merges and deduplicates.
- Unmatched: 2 declarations (the removed coordinator imports and export).

### src/utils/toolResultStorage.ts
- **getPersistenceThreshold**: Added `persistenceThresholdCeiling` parameter
  with default `DEFAULT_MAX_RESULT_SIZE_CHARS`.
- **processToolResultBlock**: Added `persistenceThresholdCeiling` field to
  the tool parameter object, forwarded to `getPersistenceThreshold`.
- Several function bodies unchanged but minified names shifted.
- 4 unmatched declarations (small var/const boundaries).

### src/utils/toolSchemaCache.ts
- No semantic changes. Only minified variable names differ.
- 4 unmatched declarations (type alias + cache var boundaries).

### src/utils/toolSearch.ts
- **isToolSearchEnabled**: Added `mcpNonBlocking` field to analytics event.
- **getDeferredToolTokenCount**: Memoize resolver unchanged.
- Several minor import renames.
- 5 unmatched declarations (import boundaries + small types).

### src/utils/treeify.ts
- No semantic changes. `DEFAULT_TREE_CHARS` initialization uses `figures`
  properties directly in v112 minified, but source-level `figures` import
  is unchanged.
- 2 unmatched declarations (import boundary + var decl).

### src/utils/ultraplan/ccrSession.ts
- **ExitPlanModeScanner**: Added `everSeenPending` public field.
- Otherwise unchanged.
- 0 unmatched declarations.

### src/utils/ultraplan/keyword.ts
- No semantic changes. Only minified variable names differ.
- 3 unmatched declarations (import boundary + OPEN_TO_CLOSE var).

### src/utils/unaryLogging.ts
- No semantic changes. Only minified variable names differ.
- 1 unmatched declaration (trailing import boundary).

### src/utils/user.ts
- **Major**: `initUser()` and `resetUserCache()` removed entirely.
- **getCoreUserData**: Restructured as a plain memoized function. The
  `includeAnalyticsMetadata` parameter logic preserved.
- **userType**: v112 minified hardcodes `'external'`; source keeps env
  fallback with `'external'` default.
- **getGitEmail**: Changed from `execa('git config ...', {shell:true})` to
  `execa('git', ['config', '--get', 'user.email'])` (no shell).
- Ant-only email fallbacks (`COO_CREATOR`, `getGitEmail` in sync path)
  removed from `getEmail()`.
- 5 unmatched declarations (removed init/reset functions + import boundaries).

### src/utils/userAgent.ts
- VERSION string updated from 2.1.88 to 2.1.112, BUILD_TIME updated.
- No other changes.

### src/utils/userPromptKeywords.ts
- No semantic changes. Only minified variable names differ.
- 1 unmatched declaration (import boundary).

### src/utils/uuid.ts
- No semantic changes. Only minified variable names differ.
- 3 unmatched declarations (import boundary + regex var boundaries).

### src/utils/warningHandler.ts
- **Major**: `initializeWarningHandler()` rewritten to return
  `{uninstall(): void}` instead of being void.
- Uses a local `Map` inside the function instead of module-level
  `warningCounts`.
- `resetWarningHandler()` removed (no longer needed with uninstall pattern).
- 2 unmatched declarations (removed resetWarningHandler + import boundary).

### src/utils/which.ts
- **Major**: `whichNodeAsync` and `whichNodeSync` rewritten.
  - Windows: uses `execa('where.exe', [command])` instead of shell string,
    filters out cwd paths via `uA1` helper.
  - POSIX: uses `execa('which', [command])` instead of shell string.
- `execSync_DEPRECATED` calls also changed to array-args form.
- 2 unmatched declarations (import boundaries).

### src/utils/windowsPaths.ts
- **Major**: `findExecutable()` removed; its logic inlined into
  `findGitBashPath()`.
- `checkPathExists`: uses `execSync_DEPRECATED('dir', [path])` instead of
  shell string.
- `findGitBashPath`: rewritten with inline git location checks and
  `where.exe` fallback.
- `windowsPathToPosixPath`: uses `replaceAll("\\", "/")` instead of
  `replace(/\\/g, "/")`.
- `posixPathToWindowsPath`: uses `replaceAll("/", "\\")` instead of
  `replace(/\//g, "\\")`.
- 3 unmatched declarations (removed findExecutable + import boundaries).

### src/utils/workloadContext.ts
- VERSION string updated from 2.1.88 to 2.1.112.
- No other semantic changes.
- 1 unmatched declaration (trailing var boundary).
