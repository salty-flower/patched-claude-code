# Chunk #120 — utils/Shell + agent context

**Files lifted:** 9
**Confidence:** medium

## Per-file notes

### abortController.ts
- bytes out: ~3,200
- decls reconstructed: 3
- drift: none (jac=1, cos=1 for all matched decls)
- v112 changes: none — verbatim transcription from v88_src.
- unresolved symbols: none.

### advisor.ts
- bytes out: ~3,400
- decls reconstructed: 7
- drift: medium (jac=0.5–0.8 range; cos high)
- v112 changes:
  - `isAdvisorEnabled()` simplified: removed `CLAUDE_CODE_DISABLE_ADVISOR_TOOL` env check and `shouldIncludeFirstPartyOnlyBetas()` gate. Now just `getAdvisorConfig()?.enabled === true`.
  - `getAdvisorConfig()` internal (not exported separately in v112).
  - `getExperimentAdvisorModels` signature changed: takes `config: AdvisorConfig` param, returns `config.advisorModel` only (simplified).
  - `modelSupportsAdvisor` and `isValidAdvisorModel` both added `opus-4-7`.
  - `canUserConfigureAdvisor` removed.
  - `ADVISOR_TOOL_INSTRUCTIONS` constant removed from this module (relocated elsewhere in v112).
  - Two matched decls map to same v112 range (jac=0.8, cos=0.997) — `modelSupportsAdvisor` and `isValidAdvisorModel` collapsed.
- unresolved symbols:
  - `Yu6` at byte ~11110145 / ~11470770 — `getAdvisorConfig()` calls in v112.

### agentContext.ts
- bytes out: ~4,200
- decls reconstructed: 5
- drift: medium (several decls have no v112 match)
- v112 changes:
  - `runWithAgentContext` removed — not present in v112_min.
  - `isTeammateAgentContext` removed — not present in v112_min.
  - Storage variable `_rq` → `YT1` (same AsyncLocalStorage pattern, different name).
  - `uB()` is the v112 alias for `getAgentContext()`.
  - Import of `isAgentSwarmsEnabled` removed (no longer needed since `isTeammateAgentContext` gone).
- unresolved symbols: none.

### agentId.ts
- bytes out: ~1,800
- decls reconstructed: 2
- drift: high — many decls removed
- v112 changes:
  - `formatAgentId` removed.
  - `generateRequestId` removed.
  - `parseRequestId` removed.
  - New module-level word list `nh6` added: `['Baked','Brewed','Churned','Cogitated','Cooked','Crunched','Sautéed','Worked']`.
  - Only `parseAgentId` (`_18`) remains.
  - `FI8` lazy-init block initializes the word list.
- unresolved symbols: none.

### agentSwarmsEnabled.ts
- bytes out: ~900
- decls reconstructed: 2
- drift: medium (jac=1, cos=1 for matched decls; init block removed)
- v112 changes:
  - `USER_TYPE === 'ant'` always-enabled branch removed entirely.
  - Function now only checks env var/flag + GrowthBook killswitch.
- unresolved symbols: none.

### agenticSessionSearch.ts
- bytes out: ~5,200
- decls reconstructed: 3 (plus constants)
- drift: high — substantial refactor in v112
- v112 changes:
  - `extractTranscript(messages[])` replaced by `YY7(log)` — new format: `"$ " + lines.join('\n')` where each line is individually trimmed. Takes LogOption not messages array.
  - `logContainsQuery` removed. `NQY(log)` replaces it: builds a single combined string from all metadata fields + transcript excerpt.
  - `agenticSessionSearch` simplified — no pre-filter step. All logs go into transcript loading, then directly to model.
  - New constants: `FRK` (max transcript line chars ~2000), `UcK` (half scan window ~50), `fQY` (max messages threshold ~100), `QcK` (max combined chars ~2000).
  - v88's `MAX_SESSIONS_TO_SEARCH` cap removed (no pre-filter → no slice to 100).
  - `extractMessageText` (kQY) retained verbatim.
- unresolved symbols:
  - `FRK` at byte ~11110187 — exact value unclear, estimated 2000.
  - `UcK` at byte ~11470808 — exact value unclear, estimated 50.
  - `fQY` at byte ~11096302 — exact value unclear, estimated 100.
  - `QcK` at byte ~11096632 — exact value unclear, estimated 2000.

### analyzeContext.ts
- bytes out: ~18,000
- decls reconstructed: 14+
- drift: medium (jac=0.818–0.926 on the main function)
- v112 changes:
  - `countSystemTokens` gains `excludeDynamicSections` parameter and `redirectedContextTokens` output. When `excludeDynamicSections=true`, dynamic context (gitStatus etc.) is counted separately and summed into `redirectedContextTokens` rather than the main system prompt bucket. Also takes optional `customSystemPrompt`.
  - `analyzeContextUsage` signature gains `excludeDynamicSections` optional param.
  - `analyzeContextUsage` v112 minified signature: `(q,K,_,z,Y,A,O,w,$,j,H)` — `j=contextWindowOverride`, `H=excludeDynamicSections`. The `j` param flows into `getContextWindowForModel` call.
  - `getContextWindowForModel` returns `{window, source}` in v112 (not just a number). `autocompactSource` field added to `ContextData`.
  - `getSystemPrompt` gains `{excludeDynamicSections}` options arg.
  - Message tokens calculation changed: `messageTokens = breakdown.totalTokens + redirectedContextTokens`.
  - `messageBreakdown` now includes `redirectedContextTokens` and `unattributedTokens` fields.
  - `ContextData.messageBreakdown` type extended with these two fields.
  - System tools category label: ant-only `[ANT-ONLY] System tools` variant removed. Always `"System tools"`.
  - `deferredBuiltinTools`, `systemTools`, `systemPromptSections` always `undefined` (ant-only breakdown removed).
  - `feature('REACTIVE_COMPACT')` and `feature('CONTEXT_COLLAPSE')` guards removed from reserved buffer logic. Replaced by `bx()` check (TODO).
  - API usage reconciliation logic for message tokens added (when apiUsage available, adjusts message estimate to fit).
  - `autocompactSource` (`P`) from `Jn()` result used to gate buffer display.
  - Reserved buffer category names are now the module-level constants `qz7`/`Kz7`.
  - `countBuiltInToolTokens` → `systemToolDetails` always empty (ant-only per-tool breakdown removed).
- unresolved symbols:
  - `Jn` at byte ~9642653 — `getContextWindowForModel` v112 return type ({window, source}).
  - `bx` at byte ~9648684 — context collapse enabled check replacing `feature('REACTIVE_COMPACT')` / `feature('CONTEXT_COLLAPSE')`.
  - `z0` at byte ~9642653 — `isAutoCompactEnabled` v112 alias.
  - `j0` at byte ~9642653 — `getSystemPrompt` with new signature.
  - `ax` at byte ~9642653 — `buildEffectiveSystemPrompt`.

### ShellCommand.ts
- bytes out: ~10,200
- decls reconstructed: 6+
- drift: low (jac=1 for most decls)
- v112 changes:
  - `#handleExit`: small file deletion change — `void this.taskOutput.deleteOutputFile()` wrapped in `setImmediate(() => { if (!this.#backgroundTaskId) ... })` guard.
  - `AbortedShellCommand` class (was `AbortedShellCommand`) — same structure.
  - `TaskOutput`, `generateTaskId` types/variable names unchanged.
- unresolved symbols: none.

### Shell.ts
- bytes out: ~14,000
- decls reconstructed: 4
- drift: high on `exec` (jac=0.737)
- v112 changes:
  - `exec` options gains `sessionEnvVars` and `tmuxSocket` parameters forwarded to `provider.getEnvironmentOverrides(command, sessionEnvVars, tmuxSocket)`.
  - v112 adds OTEL distributed tracing: `WI4()` (`getOtelTraceparent()`) → injected as `TRACEPARENT` env var when truthy.
  - Removed `...(process.env.USER_TYPE === 'ant' ? { CLAUDE_CODE_SESSION_ID: getSessionId() } : {})` block. Replaced with `...false` (eliminates the ant-only block entirely).
  - Sandbox logic significantly expanded: agentic sandbox write-config merging (`xP()`, `Js()`, `Hp1()`, `Z7.getFsWriteConfig()`, `Z7.getConfig()`). Creates `sandboxConfig` with merged `allowWrite`/`denyWrite`/`denyRead`.
  - Sandbox tmpdir creation: added `EEXIST` handling; sets `process.env.CLAUDE_TMPDIR = sandboxTmpDir` when created.
  - Network config: `KJ4()` call for sandboxed processes — network firewall config injected as 4th stdio fd.
  - `hzY` function: builds `stdio` config (pipe vs file mode, with optional network fd).
  - `setCwd`: `process.env.NODE_ENV !== 'test'` guard removed around `logEvent`. Now always calls logEvent.
  - `invalidateSessionEnvCache()` now conditional on `!Sf6()`.
- unresolved symbols:
  - `xP` at byte ~8728200 — `isAgenticSandboxEnabled()` predicate.
  - `Js` at byte ~8728200 — `isSandboxWriteConfigEnabled()` predicate.
  - `Hp1` at byte ~8728200 — `getSandboxPolicy()`.
  - `F4` at byte ~8728200 — `deduplicatePaths()` helper.
  - `Z7.getFsWriteConfig` / `Z7.getConfig` at byte ~8728200 — sandbox config accessors.
  - `WI4` at byte ~8730819 — `getOtelTraceparent()`.
  - `KJ4` at byte ~8730819 — `getNetworkConfig()` for sandboxed processes.
  - `w_6` at byte ~8731153 — `posixPathToWindowsPath` (same function but different symbol, or a new variant).
  - `Sf6` at byte ~8731153 — `isSessionEnvCacheValid()` flag.
  - `hzY` at byte ~8730819 — `buildStdioConfig()` helper (builds stdio array with optional network fd).

## Cross-file observations

- `agentContext.ts` dropped `runWithAgentContext` and `isTeammateAgentContext`. Any callers in the codebase that import these will need updating. The context types (`SubagentContext`, `TeammateAgentContext`) are unchanged.
- `agentId.ts` has been stripped to just `parseAgentId` — `formatAgentId`, `generateRequestId`, `parseRequestId` relocated or removed. Callers of those functions will break.
- `advisor.ts`: `ADVISOR_TOOL_INSTRUCTIONS` constant moved out of this module — likely into a prompts or constants file.
- `Shell.ts` sandbox expansion is substantial. The `xP()` / agentic sandbox path needs a future chunk to resolve (likely in `sandbox-adapter.ts` area).
- `analyzeContext.ts`'s `getSystemPrompt` signature change (gaining `excludeDynamicSections` option) will affect all callers.

## Lifter

`lifter-120` (sonnet-4-6, general-purpose, team v112-lift).
