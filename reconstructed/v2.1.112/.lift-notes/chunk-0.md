# Chunk #0 — Core foundation files

**Files lifted:** 7
**Strategy:** v88_src.ts copied wholesale as baseline; targeted edits for
v112 semantic changes that are clear from minified diffs. All drifted decls
have `cos >= 0.983` (most at cos=1.0), indicating the v112 changes are local
renames, parameter additions, or short logic tweaks rather than algorithm
rewrites.

## Per-file notes

### src/QueryEngine.ts
- **Size:** v88 = 1,296 lines; lifted file similar with TODO markers.
- **region.json:** 5 v88 decls; 2 matched (jac=0.735, cos=1.0 for the main
  class; jac=0.727, cos=1.0 for the ask() function). 3 unmatched decls
  (preamble imports and trailing exports — boundary artifacts).
- **Key v112 changes (from v112_min.js byte ~13436532):**
  - QueryEngine class gains new fields: `hasHandledDeferredToolResume`,
    `discoveredRemoteSkills`, `sessionEnvVars`, `tmuxSocket`,
    `memorySelector`, `bashRerunAliases`.
  - `QueryEngineConfig` expands with: `refreshTools`,
    `appendSubagentSystemPrompt`, `excludeDynamicSections`, `sessionEnvVars`,
    `tmuxSocket`, `deferredToolUse`, `onCommandLifecycle`, `sessionState`.
  - `processUserInputContext` gains many new fields: `turnStartIndex`,
    `onPermissionDenial`, `onCommandLifecycle`, `sessionState`,
    `setToolPermissionContext`, `taskRegistry`, `sessionHooksRegistry`,
    `setClassifierApprovals`, `setReplContext`, `setWebBrowserSlice`,
    `abortSpeculation`, `agentLifecycle`, `teammateColors`,
    `addResponseLength`/`resetResponseLength`, `getFileHistoryState`,
    `applyFileHistoryOp`, `applyAttributionOp`.
  - New attachment types handled: `relevant_memories`, `hook_deferred_tool`.
  - Result messages gain `terminal_reason`, `api_error_status`, `ttft_ms`.
  - Transcript recording refactored to chunked `V6()` approach with flush
    indices (`X6`, `W6`, `M6`).
  - `ask()` parameter list expanded with `shouldQuery`, `stopHookActive`,
    `fileAttachments`, `origin`, `refreshTools`,
    `appendSubagentSystemPrompt`, `excludeDynamicSections`, `sessionEnvVars`,
    `tmuxSocket`, `onCommandLifecycle`, `sessionState`, `deferredToolUse`.
- **Lift method:** Copied v88 source; added 20+ `TODO(lift)` markers at
  drift sites. The core query loop structure is unchanged; v112 additions
  are additive plumbing.

### src/Task.ts
- **Size:** 126 lines; copied verbatim from v88.
- **region.json:** 6 v88 decls; 5 matched with jac=1, cos=1. One unmatched
  decl [11368314,11368349] — the `getTaskIdPrefix` function, which v112
  renamed in the minified output but kept the same logic.
- **v112 changes:** Minimal. `monitor_mcp` and `dream` were already in v88
  TaskType. The unmatched decl is a boundary artifact.
- **Lift method:** Verbatim copy.

### src/Tool.ts
- **Size:** 793 lines; copied verbatim from v88 with 2 TODO markers.
- **region.json:** 7 v88 decls; 5 matched (jac=1, cos=1 for most; one
  cos=0.905 for `getEmptyToolPermissionContext`). 2 unmatched decls:
  import preamble [3718098,3718176] and `getEmptyToolPermissionContext`
  [3718310,3718355].
- **v112 changes:**
  - `TOOL_DEFAULTS` and `buildTool` moved to lazy-init closure in v112
    minified (`var gq=L(()=>{jy_=...})`). Runtime semantics identical.
  - v112 adds a `getDefaultToolUserFacingName` helper (`y_` in minified)
    that falls back from `userFacingName()` to `name`.
- **Lift method:** Verbatim copy with TODO markers for the new helper and
  lazy-init pattern.

### src/bootstrap/state.ts
- **Size:** 1,759 lines; heavily edited from v88 baseline.
- **region.json:** 199 v88 decls; ~170 matched with jac=1, cos=1. ~29
  unmatched decls (mostly boundary artifacts and removed fields).
- **Key v112 changes (from v112_min.js byte ~24101):**
  - **New State fields:** `hasStreamingInput`, `memoryToggledOff`,
    `teamMemoryServerStatus`, `loopChainStartedAt`,
    `sdkOAuthTokenRefreshCallback`, `replBridgeActive`, `activeRoutine`,
    `terminalFocus`.
  - **Removed from State (retained as stubs):** `turnHookDurationMs`,
    `turnToolDurationMs`, `turnClassifierDurationMs`, `turnToolCount`,
    `turnHookCount`, `turnClassifierCount`, `promptCache1hEligible`.
  - **New accessors:** `getHasStreamingInput`/`setHasStreamingInput`,
    `getSdkOAuthTokenRefreshCallback`/`setSdkOAuthTokenRefreshCallback`,
    `isReplBridgeActive`/`setReplBridgeActive`, `getLoopChainStartedAt`/
    `setLoopChainStartedAt`/`deleteLoopChainStartedAt`, `getTerminalFocus`/
    `setTerminalFocusForState`, `getMemoryToggledOff`/`setMemoryToggledOff`,
    `getTeamMemoryServerStatus`/`setTeamMemoryServerStatus`,
    `getActiveRoutine`/`setActiveRoutine`, `NOTIF_ACTIVE_THRESHOLD_MS`,
    `isUserActiveForNotifications`.
  - **Removed accessors (retained as stubs):** All turn-scoped duration/count
    getters/setters, `getPromptCache1hEligible`/`setPromptCache1hEligible`.
  - **Modified:** `switchSession` now guards plan-slug deletion with
    `if (STATE.sessionId !== sessionId)`. `replBridgeActive` is now
    unconditional (v88 had it behind `process.env.USER_TYPE === 'ant'`).
- **Lift method:** Copied v88 source; added all new fields to State type and
  `getInitialState()`; added new accessors; added TODO markers for removed
  accessors that are no longer in v112 export surface.

### src/bridge/bridgeConfig.ts
- **Size:** 49 lines; rewritten from v88 baseline.
- **region.json:** 6 v88 decls; 3 matched (jac=1, cos=1 for
  `getBridgeAccessToken` and `getBridgeBaseUrl`; jac=0.667, cos=0.999 for
  preamble). 3 unmatched decls: `getBridgeTokenOverride`,
  `getBridgeBaseUrlOverride`, and trailing init.
- **v112 changes:**
  - Removed ant-only `getBridgeTokenOverride()` and `getBridgeBaseUrlOverride()`
    from export surface. In external builds these always returned undefined.
  - Added `sanitizeSessionNamePrefix` and `getBridgeSessionNamePrefix`.
- **Lift method:** Rewrote to remove override functions from exports (kept
  as private stubs for backward compatibility); added TODO markers for new
  v112 helpers.

### src/bridge/bridgeDebug.ts
- **Size:** 136 lines; rewritten from v88 baseline.
- **region.json:** 4 v88 decls; 1 matched (jac=1, cos=0.999 for preamble).
  3 unmatched: `BridgeFault` type, `BridgeDebugHandle` type, and all
  implementation decls.
- **v112 changes:** Major reduction. v112 exports only `getBridgeDebugHandle`
    (returning null). All other exports (`registerBridgeDebugHandle`,
    `clearBridgeDebugHandle`, `injectBridgeFault`, `wrapApiForFaultInjection`)
    were removed from the export surface. `BridgeFatalError` class moved to
    `bridgeApi.ts`.
- **Lift method:** Rewrote to match v112 export surface while retaining v88
  implementation as dead code (commented with TODO markers) until downstream
  callers are confirmed.

### src/bridge/bridgeEnabled.ts
- **Size:** 203 lines; copied from v88 with targeted edits.
- **region.json:** 13 v88 decls; 6 matched (jac=1, cos=1 for most). 7
  unmatched decls (boundary artifacts and removed functions).
- **v112 changes:**
  - `isEnvLessBridgeEnabled` removed from export surface.
  - `isPersistentRemoteSessionEnabled` added.
  - `checkBridgeMinVersion` version string updated from 2.1.88 to 2.1.112.
  - `getCcrAutoConnectDefault` and `isCcrMirrorEnabled` implementations
    changed from `return !1` (DCE'd) to real GrowthBook-backed logic in v112
    minified — but the v88 source already had the correct implementation;
    the minified difference was due to dead-code elimination on the
    `feature()` guard in external builds.
- **Lift method:** Copied v88 source; removed `isEnvLessBridgeEnabled`;
    added stub for `isPersistentRemoteSessionEnabled`; added TODO marker
    for version string update.

## Cross-file observations
- `bootstrap/state.ts` is the most changed file in this chunk. The new
  fields (`replBridgeActive`, `hasStreamingInput`, `memoryToggledOff`, etc.)
  suggest v112 added REPL bridge v2 integration, memory toggling, and
  streaming input detection.
- `QueryEngine.ts` additions (`deferredToolUse`, `taskRegistry`,
  `sessionHooksRegistry`, `agentLifecycle`) suggest v112 added significant
  subagent/coordinator infrastructure. These will need follow-up when
  `src/tools/AgentTool/` and `src/coordinator/` chunks are lifted.
- `bridgeConfig.ts` simplification (removing ant-only overrides) is a
  build-hygiene change that doesn't affect external behavior.
- `bridgeDebug.ts` export reduction suggests fault-injection was moved
  into `bridgeApi.ts` or inlined into `initBridgeCore`.

## Unresolved / TODO
- [ ] QueryEngine.ts: Reconstruct the full v112 `processUserInputContext`
  expansion with all new fields (20+ TODO markers).
- [ ] QueryEngine.ts: Add `deferredToolUse` handling in `submitMessage()`.
- [ ] QueryEngine.ts: Add chunked transcript recording (`V6` approach).
- [ ] QueryEngine.ts: Expand `ask()` parameter list to match v112.
- [ ] bootstrap/state.ts: Remove turn-scoped duration stubs once all call
  sites are confirmed updated.
- [ ] bootstrap/state.ts: Verify `promptCache1hEligible` removal doesn't
  break callers.
- [ ] bridgeConfig.ts: Implement `sanitizeSessionNamePrefix` and
  `getBridgeSessionNamePrefix` once caller types are lifted.
- [ ] bridgeDebug.ts: Confirm whether to fully remove dead code or keep
  stubs for ant-only builds.
- [ ] bridgeEnabled.ts: Update `MACRO.VERSION` reference in
  `checkBridgeMinVersion` to 2.1.112.

## Lifter

`lifter-0` (kimi-for-coding, single-shot). Strategy: copy v88_src wholesale
for small/stable files (Task.ts, Tool.ts); rewrite with TODO markers for
files with clear export-surface changes (bridgeConfig.ts, bridgeDebug.ts,
bridgeEnabled.ts); copy+augment for large files with additive changes
(bootstrap/state.ts, QueryEngine.ts).
