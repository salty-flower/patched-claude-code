# Chunk #105 — src/tools/AgentTool

**Files lifted:** 4
**Confidence:** medium-high

## Per-file notes

### loadAgentsDir.ts
- bytes out: 21,503
- decls reconstructed: ~15
- drift: high confidence — clear, localized v112 diffs.
- v112 changes:
  - `getActiveAgentsFromList` now sorts results alphabetically by `agentType`.
  - `getAgentDefinitionsWithOverrides` drops the `feature('AGENT_MEMORY_SNAPSHOT') && isAutoMemoryEnabled()` gate around plugin loading — calls `await loadPluginAgents()` directly.
  - `parseAgentFromMarkdown` uses `String.replaceAll` instead of `/regex/g`.
  - Isolation schema simplified to `['worktree']` always (the ant-only `remote` value is gone).
  - Spread-conditional syntax changed to `...condition && {key}` style.
  - `initializeAgentMemorySnapshots` retained (jac=1, cos=0.988) but no longer called from the main path.
- unresolved symbols: none.
- 2 v88 decls with no v112 match are boundary artifacts from sourcemap slicing.

### prompt.ts
- bytes out: 14,529
- decls reconstructed: 4
- drift: low — three of four decls are jac=cos=1 (verbatim).
- v112 changes:
  - `getToolsDescription`, `formatAgentLine`, `shouldInjectAgentListInMessages` are verbatim.
  - `getPrompt` has no v112 match in `region.json` (byte range 9240753–9251307). Reconstructed from v88_src because the v88_min function structure looks intact in v112_min — likely just prompt-text wording changes flipped the similarity.
- unresolved symbols: 1 TODO on `getPrompt` (byte range 9240753–9251307).

### resumeAgent.ts
- bytes out: 10,382
- decls reconstructed: 2
- drift: medium-high (jac=0.887).
- v112 changes:
  - `taskRegistry` now destructured from `toolUseContext`.
  - `registerAsyncAgent` takes `{taskRegistry, cwd}` instead of `{setAppState}`.
  - `getSystemPrompt` call drops the `mcpClients` 4th argument.
  - `runAsyncAgentLifecycle` takes `taskRegistry` instead of `rootSetAppState`.
  - Tool assembly adds `supplementalTools` filter + `skipReplFilter: true`.
- unresolved symbols:
  - `yJ` predicate (byte range ~9238300) — left as TODO.

### runAgent.ts
- bytes out: 29,418
- decls reconstructed: 7
- drift: medium (jac=0.817 — biggest drift in the chunk).
- v112 changes:
  - New `isTeammate` parameter through the lifecycle.
  - Teammate tool filtering via `isTeammateMode` / `TEAMMATE_EXCLUDED_TOOLS`.
  - Memoized `derivePermissionContext` replaces inline `agentGetAppState` calls; drops `feature('TRANSCRIPT_CLASSIFIER')`; adds `worktreePath` to `additionalWorkingDirectories`.
  - `appendSubagentSystemPrompt` option forwarded.
  - `SubagentStop` event tracking via `subagentStopEmitted`.
  - Paired start/end metrics entries.
  - `sessionHooksRegistry.clear` replaces `clearSessionHooks`.
  - `agentLifecycle.clearTodos` replaces rootSetAppState todo manipulation.
  - REPL context cleanup added.
  - `killAgentShellTasksViaTaskRegistry` replaces `killShellTasksForAgent`.
  - `executeSubagentStopHooksOnInterrupt` in finally for interrupted queries.
  - `feature('PROMPT_CACHE_BREAK_DETECTION')` and `feature('MONITOR_TOOL')` blocks removed.
- unresolved symbols:
  - `TEAMMATE_EXCLUDED_TOOLS` (no byte range captured by lifter)
  - `isTeammateMode` predicate
  - `w_6` (byte range ~9354000) — likely the interrupt-stop-hook predicate
  - 8 more TODO comments distributed in the file with byte ranges.

## Cross-file observations

- `ToolUseContext` in v112 carries new fields (`taskRegistry`, `sessionHooksRegistry`, `agentLifecycle`, `setReplContext`) cast via `unknown` in the lifted files, pending the type definition update. **Action for a later chunk:** when the v112 `Tool.ts` / context type definition is lifted, revisit these casts.
- `getSystemPrompt` signature dropped the `mcpClients` arg — affects other callers across the codebase, not just `resumeAgent.ts`.

## Lifter

`lifter-105` (sonnet, general-purpose, team v112-lift). Pilot run.
