# Chunk #134 — src/utils/hooks.ts

**Files lifted:** 1 (hooks.ts)
**Confidence:** medium-high for verbatim regions, medium for reconstructed regions with v112 changes

## Per-file notes

### hooks.ts
- bytes out: ~170,000
- decls reconstructed: ~55 functions + types
- drift: low-medium — most decls jac=0.9–1.0, cos=0.995–1.0; 4 v88 decls have no v112 match (boundary artifacts)
- v112 changes (verified by manual bundle inspection):

#### getSessionEndHookTimeoutMs (d98)
- Now scans hook configs for max timeout with `SESSION_END_HOOK_TIMEOUT_MS_MAX` (30s)
- Reads `process.env.CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` first, then scans `SessionEnd` hooks for max `timeout * 1000`
- Returns `Math.max(DEFAULT, Math.min(scannedMax, MAX))`

#### executeInBackground (r65)
- New params: `rewakeMessage`, `rewakeSummary`, `pluginId`
- When `asyncRewake` is true, sends XML-tagged notification via `notifyTaskManager` with stopHookActive flag
- Uses `escapeXML` for notification content

#### createBaseHookInput (J9)
- Unchanged signature and logic

#### validateHookJson (nz8)
- Unchanged

#### parseHookOutput (s65)
- Unchanged

#### parseHttpHookOutput (t65)
- Unchanged

#### processHookJSONOutput (KJ7)
- **New "defer" case** in PreToolUse permissionDecision switch: `case "defer": H.permissionBehavior = "defer"`
- Adds `sessionTitle` field for UserPromptSubmit hooks
- `HookResult.permissionBehavior` type now includes `'defer'`

#### execCommandHook (Wa8)
- New params: `rewakeMessage`, `rewakeSummary`, `skillRoot`
- Skill root validation: checks `skillRoot` exists, uses `pathExists`
- `asyncRewakeEnabled` check: `!isNonInteractiveSession() || isCI()`
- Plugin variable substitution uses `replaceAll` instead of `replace(/.../g, ...)`
- Analytics event `tengu_agent_stop_hook_error` preserved
- `j1()` (logAnalytics) calls for SessionStart/Setup/SessionEnd hooks

#### matchesPattern (geY)
- Unchanged logic

#### prepareIfConditionMatcher (UeY)
- Unchanged

#### isInternalHook (e65)
- Unchanged

#### getDedupKey (Pa8)
- Unchanged

#### getPluginHookCounts (_J7)
- Unchanged

#### getHooksConfig (deY)
- Unchanged

#### hasHookForEvent (pn)
- Unchanged

#### getMatchingHooks (zJ7)
- Unchanged

#### Formatting functions (s57, zc8, W97, m37, q38, YJ7)
- All unchanged

#### executeHooks (E0) — **MAJOR v112 CHANGES**
- New param: `extendedHookInput` (unused in body, likely for future use)
- Telemetry counters object `C` with 4 fields: `additionalContextChars`, `systemMessageChars`, `initialUserMessageChars`, `hookSuccessStdoutChars`
- Counter `x` for hook result index (used for persistHookOutput IDs)
- **persistHookOutput (Vz8) calls** for: systemMessage, additionalContext, initialUserMessage, stdout
- **sessionTitle handling**: yields `{sessionTitle: S.sessionTitle}`
- **Permission behavior precedence**: deny > defer > ask > allow (v112 adds "defer" between deny and ask)
- Callback fast-path: `applyAttributionOp` instead of `updateAttributionState`
- `getHookTypeCounts` is `q85` in minified
- Analytics `tengu_repl_hook_finished` includes telemetry counter spread

#### hasBlockingResult (UE6)
- Unchanged

#### executeHooksOutsideREPL (BX)
- Callback context: `applyAttributionOp` instead of `updateAttributionState`
- Otherwise unchanged

#### Wrapper functions
- `executePreToolHooks` (Q58): unchanged
- `executePostToolHooks` (d58): unchanged
- `executePostToolUseFailureHooks` (c58): unchanged
- `executePermissionDeniedHooks` ($38): unchanged
- `executeNotificationHooks` (lx): unchanged
- `executeStopFailureHooks` (gM6): unchanged
- `executeStopHooks` (w_6): adds `extendedHookInput: W` param (passed through to executeHooks)
- `executeTeammateIdleHooks` (W38): unchanged
- `executeTaskCreatedHooks` (e58): unchanged
- `executeTaskCompletedHooks` (CM6): unchanged
- `executeUserPromptSubmitHooks` (Tz8): adds `session_title: NH(I8())` to hook input
- `executeSessionStartHooks` (E18): unchanged
- `executeSetupHooks` (y18): unchanged
- `executeSubagentStartHooks` (f38): unchanged
- `executePreCompactHooks` (oc): returns `blockedBy` field for blocked hooks
- `executePostCompactHooks` (K36): unchanged
- `executeSessionEndHooks` (VP6): timeoutMs defaults to `getSessionEndHookTimeoutMs()` instead of `TOOL_HOOK_EXECUTION_TIMEOUT_MS`
- `executePermissionRequestHooks` (Be): unchanged
- `executeConfigChangeHooks` (KK6): unchanged
- `executeEnvHooks` (u65): unchanged
- `executeCwdChangedHooks` (k18): unchanged
- `executeFileChangedHooks` (N18): unchanged
- `hasInstructionsLoadedHook` (de6): unchanged
- `executeInstructionsLoadedHooks` (aj6): unchanged
- `parseElicitationHookOutput` (Ja8): unchanged
- `executeElicitationHooks` (O98): unchanged
- `executeElicitationResultHooks` (w98): unchanged
- `executeStatusLineCommand` (AJ7): unchanged
- `executeFileSuggestionCommand` (IA7): unchanged
- `executeFunctionHook` (ceY): unchanged
- `executeHookCallback` (leY): `applyAttributionOp` instead of `updateAttributionState`
- `hasWorktreeCreateHook` (NW6): unchanged
- `executeWorktreeCreateHook` (kW6): unchanged
- `executeWorktreeRemoveHook` (mu6): simplified return logic, returns `anySucceeded` boolean
- `getHookDefinitionsForTelemetry` (o65): unchanged

## Cross-file observations

- **Permission behavior "defer"**: v112 adds a new permission behavior `defer` that sits between `deny` and `ask` in precedence. This affects both `processHookJSONOutput` and `executeHooks`.
- **persistHookOutput integration**: v112 adds calls to `persistHookOutput` (Vz8) for large hook outputs (systemMessage, additionalContext, initialUserMessage, stdout) to avoid bloating the message context.
- **Telemetry counters**: v112 adds detailed telemetry counters for hook output sizes, sent with the `tengu_repl_hook_finished` analytics event.
- **sessionTitle from hooks**: UserPromptSubmit hooks can now return a `sessionTitle` that is yielded to callers.
- **extendedHookInput param**: Added to `executeHooks` and `executeStopHooks` signatures but appears unused in current v112 bundle — likely for future use.
- **applyAttributionOp rename**: v112 renames `updateAttributionState` to `applyAttributionOp` in callback contexts.
- **getSessionEndHookTimeoutMs**: v112 dynamically computes the timeout for SessionEnd hooks based on configured hook timeouts.
- **executePreCompactHooks blockedBy**: v112 returns blocked hook info from PreCompact hooks.

## unresolved symbols

- `Vz8` — persistHookOutput (called in executeHooks for systemMessage, additionalContext, initialUserMessage, stdout)
- `NH` — getSessionTitle (used in executeUserPromptSubmitHooks)
- `q85` — getHookTypeCounts (used in executeHooks analytics)
- `FeY` — SESSION_END_HOOK_TIMEOUT_MS_MAX (used in getSessionEndHookTimeoutMs)

## Lifter

`lifter-134` (kimi-for-coding, team v112-lift). Chunk #134.
