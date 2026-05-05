# Chunk 156 Lift Notes

## Files

### src/utils/swarm/backends/types.ts
- **Status**: Verbatim copy (jac=1, cos=1 for all matched declarations)
- **Drift**: None. All type definitions and the `isPaneBackend` type guard are unchanged between v88 and v112.

### src/utils/swarm/backends/teammateModeSnapshot.ts
- **Status**: Verbatim copy (jac=1, cos=1 for all matched declarations)
- **Drift**: None. Minor unmatched boundaries are import lines and trailing exports that have no semantic change.

### src/utils/swarm/backends/registry.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Major**: Refactored from module-level variables to a `BackendRegistry` class/object pattern. All exported functions now accept an optional `registry` parameter defaulting to a global singleton `globalBackendRegistry`.
  - The `createBackendRegistry()` factory function is new in v112.
  - `ensureBackendsRegistered()`, `registerTmuxBackend()`, `registerITermBackend()`, `getBackendByType()`, `markInProcessFallback()`, `isInProcessEnabled()`, `getResolvedTeammateMode()`, `getInProcessBackend()`, `getTeammateExecutor()`, `resetBackendDetection()` all gained the `registry` parameter.
  - Internal functions `createTmuxBackend()`, `createITermBackend()`, `getPaneBackendExecutor()` now take `registry` as a required parameter.
  - The v112 minified shows `CT` as the global registry variable name and `ENK` as `createBackendRegistry`.

### src/utils/swarm/reconnection.ts
- **Status**: Verbatim copy (jac=1, cos=1 for all matched declarations)
- **Drift**: None. Both `computeInitialTeamContext` and `initializeTeammateContextFromSession` are unchanged.

### src/utils/swarm/teammateInit.ts
- **Status**: Verbatim copy (jac=1, cos=1 for matched declarations)
- **Drift**: None. The `initializeTeammateHooks` function is unchanged.

### src/utils/swarm/spawnUtils.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Minor**: `buildInheritedCliFlags` now propagates `--permission-mode auto` when the leader's mode is `'auto'` (previously only handled `bypassPermissions` and `acceptEdits`).
  - **Major**: `TEAMMATE_ENV_VARS` expanded significantly in v112. Added Anthropic AWS provider vars: `CLAUDE_CODE_USE_ANTHROPIC_AWS`, `CLAUDE_CODE_USE_MANTLE`, `ANTHROPIC_AWS_WORKSPACE_ID`, `ANTHROPIC_AWS_BASE_URL`, `ANTHROPIC_AWS_API_KEY`, `CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH`, `AWS_BEARER_TOKEN_BEDROCK`, `ANTHROPIC_BEDROCK_MANTLE_BASE_URL`, `CLAUDE_CODE_SKIP_MANTLE_AUTH`, `AWS_REGION`. These support the new Anthropic AWS/Mantle provider backends.

### src/utils/swarm/teammateLayoutManager.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Minor**: `buildInheritedEnvVars` and `TEAMMATE_ENV_VARS` were moved out of this file into `spawnUtils.ts` in v112 (the v88 source had them here, but the v112 minified shows they now live in spawnUtils.ts). The remaining functions (`assignTeammateColor`, `getTeammateColor`, `clearTeammateColors`, `isInsideTmux`, `createTeammatePaneInSwarmView`, `enablePaneBorderStatus`, `sendCommandToPane`) are unchanged.
  - Note: The v112 minified for this file is very short (only `V77`, `pd_`, `z2K`, `Y2K`, `A2K`, `O2K` functions), confirming `buildInheritedEnvVars` moved elsewhere.

### src/utils/swarm/teamHelpers.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Major**: `setMemberActive` was refactored from direct read-write to using a new `updateTeamFile()` helper. The new `updateTeamFile` function provides atomic read-modify-write with an updater callback, preventing race conditions.
  - **New export**: `updateTeamFile(teamName, updater)` — async atomic team file update.
  - `setMemberActive` now catches errors and logs them instead of potentially throwing.
  - New exports in v112 minified: `updateTeamFile` (as `QC6`), `removeTeamMember` (as `C77`).
  - The `sanitizeAgentName` function from v88 appears to have been removed or moved (no match in v112 minified for that decl).
  - The `inputSchema` and `TEAM_LEAD_NAME` constant boundaries are unmatched but their content is preserved in the reconstructed file.

### src/utils/swarm/inProcessRunner.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Major**: Compaction error handling added. The `compactConversation` call is now wrapped in try-catch. If the error is a PreCompact hook blocking message (`error.message.startsWith('PreCompact hook blocked compaction')`), the teammate logs and continues uncompacted instead of failing.
  - **Major**: `runAgent()` call now includes `isTeammate: true` option (new in v112).
  - **Major**: `toolUseContext.taskRegistry` is now used for `evictTerminalTask` calls instead of direct `setAppState` manipulation. The code checks `if (taskRegistry)` and uses `taskRegistry.evictTerminal(taskId)` or falls back to `evictTerminalTask(taskId, setAppState)`.
  - **Minor**: `appendTeammateMessage` call in the shutdown_request handler now passes `setAppState` (the v112 minified shows `lI8(_, t8({content:k}), D)` where `D` is the taskRegistry/setAppState).
  - The `taskRegistry` abstraction is sourced from `toolUseContext`.

### src/utils/swarm/spawnInProcess.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Major**: `killInProcessTeammate` was moved here from `inProcessRunner.ts` and refactored to use the `TaskRegistry` abstraction.
  - **Major**: `SpawnContext` type now includes `taskRegistry` with `register`, `evictTerminal`, and `update` methods, plus `getAppState`.
  - **Major**: New `deriveTeammatePermissionMode()` function. In v112, the teammate's `permissionMode` is derived from the leader's current `toolPermissionContext.mode` rather than being hardcoded. If the leader is in `bypassPermissions`, the teammate gets `'default'` instead (so they still get permission dialogs).
  - `spawnInProcessTeammate` now reads `getAppState().toolPermissionContext?.mode` to compute the initial permission mode.
  - `killInProcessTeammate` uses `taskRegistry.update()` for task state mutation and `setAppState` only for `teamContext.teammates` cleanup.

### src/utils/systemPromptType.ts
- **Status**: Verbatim copy (jac=1, cos=1 for matched declaration)
- **Drift**: None. The `SystemPrompt` branded type and `asSystemPrompt` function are unchanged.

### src/utils/systemPrompt.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Major**: Coordinator mode branch removed entirely. The `feature('COORDINATOR_MODE')` check and `getCoordinatorSystemPrompt()` lazy require were deleted.
  - **Major**: Proactive mode branch removed. The `feature('PROACTIVE') || feature('KAIROS')` check and the append-mode agent prompt logic were deleted. Agents now always replace the default prompt (same as non-proactive behavior).
  - The `bun:bundle` conditional import for proactive mode was removed.
  - The function signature and core logic (override -> agent -> custom -> default + append) are otherwise unchanged.

### src/utils/systemTheme.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Major**: `themeFromOscColor()` and `parseOscRgb()` functions were removed from this module in v112. They were moved to `systemThemeWatcher.ts` or another module that handles the OSC 11 query response.
  - The remaining functions (`getSystemThemeName`, `setCachedSystemTheme`, `resolveThemeSetting`, `detectFromColorFgBg`) are unchanged.

### src/utils/taggedId.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Major**: A new `sanitizeForDisplay()` function was added in v112 (seen in minified as `AP(q)`). It sanitizes names by replacing non-alphanumeric chars with hyphens and truncating with a hash suffix. The exact max length constant and hash function are unresolved.
  - `toTaggedId()` and `base58Encode()` are unchanged.
  - Added `// TODO(lift)` for the unresolved `sanitizeForDisplay` function.

### src/utils/task/diskOutput.ts
- **Status**: Verbatim copy (jac=1, cos=1 for matched declarations)
- **Drift**: None. The `DiskTaskOutput` class and all helper functions are unchanged. Minor unmatched boundaries are import lines and the lazy init block.

### src/utils/task/framework.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - **Minor**: `registerTask` now passes `skip_transcript: task.skipTranscript` in the `enqueueSdkEvent` call. This is a new field in the task_started SDK event.
  - The `updateTaskState`, `evictTerminalTask`, `getRunningTasks`, `generateTaskAttachments`, `applyTaskOffsetsAndEvictions`, `pollTasks` functions are unchanged.

### src/utils/task/sdkProgress.ts
- **Status**: Verbatim copy (jac=1, cos=1 for matched declarations)
- **Drift**: None. The `emitTaskProgress` function is unchanged.
