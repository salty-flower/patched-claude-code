# Chunk #141 Lift Notes: v2.1.88 → v2.1.112

## Files
- `src/utils/permissions/filesystem.ts`
- `src/utils/permissions/pathValidation.ts`
- `src/utils/permissions/permissionRuleParser.ts`
- `src/utils/permissions/permissionSetup.ts`

## Methodology Summary
Rosetta-style reconstruction using extracted slice data (v88_src.ts, v88_min.js, v112_min.js, region.json).

## File-by-File Findings

### permissionRuleParser.ts
**Drift:** Mixed. Most decls jac=1/cos=1 (verbatim). `escapeRuleContent` and `unescapeRuleContent` moved to bundle offset ~12924460 (cos=0.997). `normalizeLegacyToolName` moved out of this file entirely.

**Key Changes:**
- `normalizeLegacyToolName` no longer defined here; imported as `i0` from elsewhere (likely permissionSetup.ts or a shared module).
- `escapeRuleContent` and `unescapeRuleContent` moved to a different bundle location. The functions `permissionRuleValueFromString` and `permissionRuleValueToString` still reference them (as `ki5`/`Vi5` in v112 minified) but they are no longer in this file's slice.
- `getLegacyToolNames` remains in this file.
- Import block simplified: no more `feature('KAIROS')` or tool name constant imports.

**TODOs:**
- `normalizeLegacyToolName` import location
- `escapeRuleContent` / `unescapeRuleContent` import location (bundle offset ~12924460)
- `LEGACY_TOOL_NAME_ALIASES` construction (was in init block in v112)

### filesystem.ts
**Drift:** Several decls with jac < 0.95 or cos < 0.998 indicating real drift. Most functions changed in v112.

**Key Changes:**
1. `isDangerousFilePathToAutoEdit`: New `isRemoteMode` parameter. In remote mode, `.claude/skills/`, `.claude/agents/`, `.claude/commands/`, and `.claude/scheduled_tasks.json` are NOT considered dangerous.
2. `.husky` added to `DANGEROUS_DIRECTORIES`.
3. `checkPathSafetyForAutoEdit`: Now accepts `isRemoteMode` parameter (passed from `checkWritePermissionForTool`).
4. `checkEditableInternalPath`: New carve-outs for workflow script files and frame source files. Added memory toggle check: denies writes to auto memory when `/toggle-memory` is off.
5. `checkReadableInternalPath`: Added memory toggle check for reads. Session memory check moved earlier. Project temp dir now uses `getClaudeTempDir()` directly instead of `getProjectTempDir()`, broadening read access to all sessions' temp files.
6. `getScratchpadDir()`: Path changed from `/tmp/claude-{uid}/{cwd}/{sessionId}/scratchpad` to `/tmp/claude-{uid}/{sessionId}/scratchpad` (removed `{cwd}` component).
7. `generateSuggestions`: Now suppresses `setMode:acceptEdits` suggestion when in plan mode with a prePlanMode that already allows edits (`auto`, `bypassPermissions`, `acceptEdits`, `dontAsk`).
8. `checkReadPermissionForTool` / `checkWritePermissionForTool`: Now use a `matchingRuleForInputPaths` helper (not in slice) to check allow rules across all resolved paths.
9. UNC path defense in `isDangerousFilePathToAutoEdit` now excludes "safe" UNC paths via `!isSafeUncPath(q)`.

**TODOs:**
- `isSafeUncPath` import/definition
- `isWorkflowScriptFile` import/definition
- `isFrameSourceFile` import/definition
- `isMemoryToggledOff` import/definition
- `matchingRuleForInputPaths` import/definition
- `getSessionMemoryPath` may have moved (not in slice but `getSessionMemoryDir` is)

### pathValidation.ts
**Drift:** `isPathAllowed` (jac=0.938) and `validatePath` (jac=0.938) show tight drift. Most other decls verbatim.

**Key Changes:**
1. `isPathAllowed`: `checkPathSafetyForAutoEdit` call now passes only 2 args (path, precomputedPathsToCheck) instead of v88's 4-arg call. The `isRemoteMode` context is no longer passed through here; it's handled inside `checkPathSafetyForAutoEdit` directly.
2. `generateSuggestions` (actually in filesystem.ts but called from here): See filesystem.ts changes.
3. No changes to `validatePath` shell expansion logic (`%` still blocked on all platforms).

### permissionSetup.ts
**Drift:** Several decls with jac < 0.95 indicating real drift. `feature('TRANSCRIPT_CLASSIFIER')` guards removed throughout.

**Key Changes:**
1. **Auto mode always-on:** All `feature('TRANSCRIPT_CLASSIFIER')` checks removed. Auto mode logic is now permanently present in the source, gated by `isAutoModeGateEnabled()` and GrowthBook config instead of compile-time feature flags.
2. `initialPermissionModeFromCLI`: New `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` check forces default mode with a warning when set.
3. `initializeToolPermissionContext`:
   - PowerShell auto-deny: On Windows, if Bash is denied but PowerShell is not explicitly handled, PowerShell is auto-denied.
   - `additionalDirectories` from settings now use `destination: 'localSettings'` instead of all going to `cliArg`.
   - Overly broad Bash detection removed from init (now handled elsewhere or removed).
4. `stripDangerousPermissionsForAutoMode`: Simplified stash logic — rebuilds from scratch instead of merging with existing stash. No deduplication.
5. `isDefaultPermissionModeAuto`: Removed `feature('TRANSCRIPT_CLASSIFIER')` guard.
6. `shouldPlanUseAutoMode`: Removed `feature('TRANSCRIPT_CLASSIFIER')` guard.
7. `prepareContextForPlanMode`: Removed `feature('TRANSCRIPT_CLASSIFIER')` guard.
8. `transitionPermissionMode`: Removed `feature('TRANSCRIPT_CLASSIFIER')` guard.
9. `transitionPlanAutoMode`: Removed `feature('TRANSCRIPT_CLASSIFIER')` guard.
10. `autoModeStateModule` import pattern changed in v112 minified init block (`DG=(Kn(),B7(Pe))` vs v88's `zT=Eq(mK6)`).

**TODOs:**
- `autoModeStateModule` exact import path/method in v112
- `normalizeLegacyToolName` now imported from permissionRuleParser.ts but was moved out of there — circular dependency risk; verify where it actually lives in v112

## Cross-Cutting Themes
1. **Remote mode awareness:** filesystem.ts gains `isRemoteMode` parameter in several functions, relaxing some `.claude/` restrictions for remote workspaces.
2. **Memory toggle:** New `/toggle-memory` feature affects both read and write permissions for auto memory paths.
3. **Scratchpad path simplification:** Removed `{cwd}` component from scratchpad path.
4. **Auto mode de-feature-flagged:** `TRANSCRIPT_CLASSIFIER` compile-time feature removed; auto mode is now runtime-gated only.
5. **PowerShell hardening:** Auto-deny PowerShell on Windows when base tools don't explicitly include it.
