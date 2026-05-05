# Chunk #103 — src/tools/AgentTool/AgentTool.tsx

**Files lifted:** 1
**Confidence:** medium — large drift in the `AgentTool.call` body (~17.4 KB,
jac=0.89, cos=1) lifted from v112_min.js with the v88 source as scaffold;
matched 5 known v112 deltas across the file plus the AgentTool wave-1
patterns (taskRegistry / agentLifecycle / sessionHooksRegistry).

## Per-file notes

### AgentTool.tsx
- bytes out: ~38 KB (v88_src equivalent ~58 KB; we shrink because some
  comments collapsed, fork-only reasoning paragraphs trimmed).
- decls in region.json: 5 v88, 3 with v112 matches; 2 boundary artifacts
  (`var T67,...` aggregator at 9251307–9251375 and `var rb8=y(()=>{...})`
  module-init wrapper tail at 9251578–9251628 have no individual v112 match).
- decls reconstructed:
  - **`getAutoBackgroundMs`** (9251375–9251500) — jac=cos=1, **verbatim** from v88.
  - **`resolveTeamName`** (9251500–9251578) — jac=cos=1, **verbatim** from v88.
  - **`AgentTool` (`buildTool`-wrapped object literal, 9251628–9268833)**
    — jac=0.89, cos=1, **drifted**. Body lifted from v112_min.js with v88
    source as the structural rosetta.

### Drift inventory (AgentTool.call, v112 byte 8522731–8540489)

Compared to v88, v112 introduces:

1. **`taskRegistry` destructured from `toolUseContext`** at the top of
   `call`, replacing the `setAppStateForTasks ?? setAppState` pattern that
   defined `rootSetAppState`. Every downstream task lifecycle call now
   threads `taskRegistry` instead. Matches the `runAgent.ts` /
   `resumeAgent.ts` deltas catalogued in chunk-105.
2. **`agentLifecycle.markTypeInvoked(agentType)`** — new bookkeeping call
   between agent resolution and `logEvent('tengu_agent_tool_selected', ...)`.
3. **`agentLifecycle.registerName(name, agentId)`** — replaces the old
   `rootSetAppState(prev => ({...prev, agentNameRegistry: ...}))` block.
4. **MCP server-name extraction hoisted to a helper (`iH6` in v112_min)**
   — the `if (tool.name?.startsWith('mcp__')) ...` snippet is no longer
   inlined; instead a helper is called from both the `prompt` and
   MCP-availability blocks. We approximate this as a local
   `extractMcpServerName` helper.
5. **`supplementalTools` filter** — v112 inserts
   `R = H.options.tools.filter(yJ)` (predicate `yJ`, unresolved) right
   before the pending-MCP wait loop. The filtered list is used in two
   places: a) merged into the MCP server-name set
   (`appState.mcp.tools.concat(R)`), and b) merged into the worker's tool
   pool fed to `assembleToolPool`. **TODO**: identify `yJ` predicate.
   Placeholder `isSupplementalTool_V112` returns `false`, which degrades
   to v88 behaviour (no supplemental tools merged).
6. **`assembleToolPool` signature change** — now `(ctx, mcpTools, options)`
   with `{ skipReplFilter: true }` as the third arg, and mcpTools sourced
   from `getAppState().mcp.tools.concat(supplementalTools)`. Matches
   `resumeAgent.ts` chunk-105 note "Tool assembly adds `supplementalTools`
   filter + `skipReplFilter: true`".
7. **`getSystemPrompt(...)` drops the `mcpClients` 4th arg.** Same
   deletion as `resumeAgent.ts` chunk-105 note. We import `getSystemPrompt`
   from `../../constants/prompts.js`; the 4th arg is gone in the lifted
   call site.
8. **`override.replHydration: { kind: 'fork', log: [...replContexts[H.agentId
   ?? Aa6]?.replayLog ?? []] }`** — new payload only on the fork-path
   override. **TODO**: `Aa6` (the default REPL context id used as fallback)
   unresolved; placeholder `DEFAULT_REPL_CONTEXT_ID_V112 = '__default__'`.
9. **`forkContextMessages`** — now branches on the agent definition's
   `forksParentContext` flag: `'turn'` slices from `turnStartIndex`, `true`
   passes the full message log, undefined falls back to v88 behaviour
   (parent messages on fork path, undefined otherwise). The
   `forksParentContext` field is cast via `unknown` pending the
   `loadAgentsDir.ts` schema update.
10. **`removeAgentWorktree` signature** — now takes 2 extra args
    `(force=false, reason='agent_tool')` for telemetry / debugging.
11. **`registerAsyncAgent`/`registerAgentForeground`** — both swap
    `setAppState` for `taskRegistry`, both add a new `cwd` arg sourced
    from `cwd ?? worktreeInfo?.worktreePath`.
12. **`runAsyncAgentLifecycle`** — takes `taskRegistry` instead of
    `rootSetAppState` (matches resumeAgent.ts chunk-105 note).
13. **`startAgentSummarization`** — now takes `taskRegistry` instead of
    `rootSetAppState` as the 4th arg.
14. **Background-hint UI** — `setToolJSX` is now called optionally
    (`?.`); paired with a new
    `emitToolProgress?.({kind:'background_hint',toolUseId})` event so the
    SDK reflects hint state. Symmetrically, the sync `finally` emits
    `{kind:'clear',toolUseId}`.
15. **Backgrounded path notifications** — `enqueueAgentNotification` now
    takes `taskRegistry` and an `abortSpeculation` field threaded from
    `toolUseContext`. Failed-path notification additionally includes
    `finalMessage: extractPartialResult(agentMessages)` (v88 only set
    `finalMessage` on the killed-path).
16. **Task lifecycle helpers swap setAppState for taskRegistry** —
    `completeAsyncAgent`, `killAsyncAgent`, `failAsyncAgent`,
    `updateAsyncAgentProgress`, `unregisterAgentForeground`. All argument
    positions shift; lifted call sites use `as unknown as Parameters<...>`
    casts pending the LocalAgentTask v112 lift.
17. **`addResponseLength(n)`** — replaces the v88
    `setResponseLength(len => len + n)` pattern. Cast via `unknown` until
    the `ToolUseContext` type definition is lifted in a later chunk.
18. **`feature('TRANSCRIPT_CLASSIFIER')` gate dropped** —
    `classifyHandoffIfNeeded` is now always called in both the sync and
    backgrounded completion paths.
19. **`feature('COORDINATOR_MODE')` gate dropped** — `prompt` callback
    passes `false` for `isCoordinator` directly; `call` likewise.
20. **`feature('PROACTIVE')` / `feature('KAIROS')` proactive module
    gone** — `shouldRunAsync` no longer references `proactiveModule`.
21. **KAIROS / `appState.kairosEnabled` gate dropped** —
    `assistantForceAsync` is just `false`.
22. **Remote-isolation block removed entirely** — the `"external" === 'ant'
    && effectiveIsolation === 'remote'` branch is gone in v112. Only
    `worktree` isolation remains, matching the simplified isolation enum
    (`['worktree']`) noted in chunk-105.
23. **`checkPermissions` simplified** — the auto-mode passthrough block
    (`"external" === 'ant' && mode === 'auto'`) is gone; always returns
    `{ behavior: 'allow', updatedInput: input }`.
24. **`mapToolResultToToolResultBlockParam` async-launched instructions
    rewritten** — agents with read tools are now told NOT to read the
    output file (it's the full JSONL transcript, would overflow context),
    instead waiting for the completion notification. The
    `Cq`/`_q` symbols (FILE_READ_TOOL_NAME / BASH_TOOL_NAME) are still
    interpolated, so the rewrite is purely the prose payload.
25. **`isCoordinatorMode()`/`pV6` retained** at the top of `call` to
    suppress the `model` param when in coordinator mode. Same as v88.

### Boundary artifacts (no v112 match)

- `[9251307,9251375]` — top-of-region `var T67,f4Y=null,Z4Y=2000,...`
  variable aggregator. v112 emits the same vars but split across the
  module-init body, so no individual v112 decl matches. Reconstructed as
  module-level `const`/`let` declarations: `PROGRESS_THRESHOLD_MS`,
  `isBackgroundTasksDisabled`, `getAutoBackgroundMs`. The cleared
  `proactiveModule` (v88's `f4Y`) is dropped — the proactive integration
  is gone in v112.
- `[9251578,9251628]` — module-init wrapper tail (`var rb8=y(()=>{...`),
  similar story. Lifted as ESM module-level declarations.

### Unresolved symbols / TODOs

- **`yJ` predicate** at v112 byte ~8523920. Filters parent tool list to
  "supplemental tools" merged into MCP server-name set + worker tool pool.
  Placeholder `isSupplementalTool_V112` always returns false.
- **`Aa6` constant** — default REPL context id used as fork-replHydration
  fallback. Placeholder `DEFAULT_REPL_CONTEXT_ID_V112 = '__default__'`.
- **`getFeatureValue_CACHED_MAY_BE_STALE`** — imported from
  `'../../services/analytics/growthbook.js'`, matching `runAgent.ts` and
  every other v112 lifted file. Used in `getAutoBackgroundMs`.
- **`turnStartIndex` field on ToolUseContext** — used to slice parent
  messages when `forksParentContext === 'turn'`. Cast via `unknown`
  pending Tool.ts type lift.
- **`replContexts` map on AppState** — used for fork replHydration log
  lookup. Cast via `unknown` pending state-shape lift.
- **`agentLifecycle.markTypeInvoked` / `agentLifecycle.registerName`**
  on ToolUseContext — cast via `unknown`. Same pattern as runAgent.ts
  chunk-105.
- **`taskRegistry` on ToolUseContext** — destructured at top of `call`
  via `as unknown as { taskRegistry: unknown }`. Same pattern as
  resumeAgent.ts / runAgent.ts chunk-105.
- **`abortSpeculation` on ToolUseContext** — new field threaded into
  `enqueueAgentNotification` calls. Cast via `unknown`.
- **`addResponseLength` / `emitToolProgress` on ToolUseContext** — cast
  via `unknown`. Will be resolved when Tool.ts type is lifted.

## Cross-file observations

- The drift inventory above is highly consistent with chunk-105's notes
  (runAgent.ts / resumeAgent.ts) — the v112 task-registry rework, the
  sessionHooksRegistry/agentLifecycle context surface, and the
  `getSystemPrompt` 4-arg→3-arg deletion all show up here too. The Tool.ts
  context type lift, when it lands, should resolve most casts in this file
  in one sweep.
- **Removed v88 imports**: `feature` from `bun:bundle` (no remaining
  feature gates in this file after v112 trims), the proactive module,
  `clearRemote*` family (remote isolation gone),
  `teleportToRemote`/`registerRemoteAgentTask`/`getRemoteTaskSessionUrl`
  /`checkRemoteAgentEligibility`/`formatPreconditionError` (remote path
  gone), `KAIROS`-only types. **Retained**: most of the rest including
  the worktree helpers, agent-context wrapper, and analytics types.
- The wholesale `prompt` and `mapToolResultToToolResultBlockParam`
  callbacks are jac<1 only because of the prose payload tweak in #24 and
  the dropped feature gate in #19; structurally they are nearly identical
  to v88.

## Lifter

`lifter-103` (opus, single-pass, opus-1m budget). Strategy: skipped pass-1
skeleton because the file is structurally close to v88 (cos=1 on the big
decl) — copied v88 wholesale, then applied the 25 v112 deltas catalogued
above in-place. All deltas are bracketed in the source with `// v112:`
comments referencing this notes file's numbered list.
