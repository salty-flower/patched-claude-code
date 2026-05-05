# Chunk #118 — TeamDelete prompt + Todo/ToolSearch/WebFetch/WebSearch/shared

**Files lifted:** 11
**Confidence:** medium

## Per-file notes

### src/tools/TeamDeleteTool/prompt.ts
- bytes out: ~700
- decls reconstructed: 1
- drift: very low — jac=0.841, cos=0.999. Body effectively identical to v88.
- v112 changes: none detected; second v88 decl [9196846,9197502] is a boundary artifact (no v112 match).
- unresolved symbols: none.

### src/tools/TodoWriteTool/prompt.ts
- bytes out: ~8,000
- decls reconstructed: 2 (PROMPT, DESCRIPTION)
- drift: none — jac=1/cos=1 on DESCRIPTION decl. PROMPT const [8345150,8354289] has no v112 match (boundary artifact); transcribed verbatim from v88.
- v112 changes: none detected.
- unresolved symbols: none.

### src/tools/ToolSearchTool/prompt.ts
- bytes out: ~3,000
- decls reconstructed: 4 (getToolLocationHint, isDeferredTool, formatDeferredToolLine, getPrompt)
- drift: medium — several v88 decls have no v112 match (boundary artifacts).
- v112 changes:
  - `isDeferredTool`: FORK_SUBAGENT gate removed. KAIROS/KAIROS_BRIEF/isReplBridgeActive gates removed. New: SCHEDULE_WAKEUP_TOOL_NAME gate (`T04`) added — tool not deferred when `isLoopDynamicEnabled()` returns true.
  - `getToolLocationHint`: USER_TYPE==='ant' branch removed; now purely growthbook flag driven.
  - BRIEF_TOOL_NAME ref (v04) and SCHEDULE_WAKEUP_TOOL_NAME ref (T04) are lazy module-level vars (init block Kc).
- unresolved symbols:
  - `T04` SCHEDULE_WAKEUP_TOOL_NAME (byte ~4955283) — stubbed as `_SCHEDULE_WAKEUP_TOOL_NAME_V112`.
  - `cR8/dR8/isLoopDynamicEnabled` (byte ~4955200) — schedule wakeup loop dynamic check, stubbed as `false`.

### src/tools/ToolSearchTool/ToolSearchTool.ts
- bytes out: ~7,500
- decls reconstructed: all (~10 decls)
- drift: low-medium — jac ranges 0.636–1, cos=0.988–1.
- v112 changes:
  - `parseToolName`/`parseToolObject`: now uses `tool.mcpInfo.serverName` + `tool.mcpInfo.toolName` when available (structured MCP data vs pure string parsing).
  - MCP part splitting now uses `split(/[\s_.]+/)` instead of `split('_')`.
  - CamelCase split uses `replaceAll('_', ' ')` instead of `.replace(/_/g, ' ')`.
  - `logSearchOutcome` gains MCP metrics: `mcpServersConfigured`, `mcpServersConnected`, `mcpServersPending`, `mcpToolsInPool`.
  - `getToolDescriptionMemoized` unchanged.
  - Several v88 decls have no v112 match (boundary artifacts).
- unresolved symbols:
  - `tool.mcpInfo` field type (inferred from minified, cast via unknown).

### src/tools/WebFetchTool/preapproved.ts
- bytes out: ~4,000
- decls reconstructed: 3 (PREAPPROVED_HOSTS, HOSTNAME_ONLY/PATH_PREFIXES init, isPreapprovedHost)
- drift: very low — jac=0.926, cos=1. Domain list identical to v88 per minified. jac drift is boundary artifact (decl [8781360,8781376] no v112 match).
- v112 changes: none in function bodies; same host list.
- unresolved symbols: none.

### src/tools/WebFetchTool/utils.ts
- bytes out: ~10,000
- decls reconstructed: ~13
- drift: very low — most decls jac=1/cos=1. Two boundary artifacts (no v112 match).
- v112 changes: `isPreapprovedUrl` moved to different bundle offset (byte ~9773216 vs ~9005055) but function body unchanged (jac=1, cos=0.961). No other functional changes.
- unresolved symbols: none.

### src/tools/WebSearchTool/UI.tsx
- bytes out: ~2,500
- decls reconstructed: 5
- drift: low — main decl jac=0.856, cos=1. Others jac=1/cos=1. Three boundary artifacts.
- v112 changes:
  - `getSearchSummary`: uses simpler imperative for-loop (same logic, different style).
  - Exported render functions: verbatim.
- unresolved symbols: none.

### src/tools/WebSearchTool/WebSearchTool.ts
- bytes out: ~10,000
- decls reconstructed: ~8
- drift: very low — main tool decl jac=0.992, cos=1. Two boundary artifacts.
- v112 changes:
  - `isEnabled()`: now also returns `true` for `provider === 'anthropicAws'` (new provider value).
  - All other logic identical.
- unresolved symbols: none.

### src/tools/shared/gitOperationTracking.ts
- bytes out: ~5,500
- decls reconstructed: ~11
- drift: medium — main decl jac=0.571, cos=0.998. Several boundary artifacts (7 decls no v112 match).
- v112 changes:
  - New `GH_PR_CHECKOUT_RE` regex: `/\bgh\s+pr\s+checkout\b[^&|;]*\s(\d+)(?=\s|$|[&|;])/`
  - `trackGitOperations`: PR auto-link factored into `Rd4` helper (stubbed). New `kd4` helper called on push/checkout (stubbed). On `gh pr checkout <n>`, calls `kd4(n)`. On plain `git push` without PR action, calls `kd4()`.
  - `detectGitOperation`: verbatim to v88.
- unresolved symbols:
  - `Rd4` at byte ~6932613 — link session to PR by number (stubbed as `_linkSessionToCheckedOutPr_V112`).
  - `kd4` at byte ~6933107 — push/branch telemetry (stubbed as `_trackPushBranchTelemetry_V112`).

### src/tools/shared/spawnMultiAgent.ts
- bytes out: ~18,000
- decls reconstructed: ~15
- drift: high — jac ranges 0.839–0.875, cos=1 on the handler decls. Several boundary artifacts.
- v112 changes:
  - New `E77` central spawn orchestration helper (not in this chunk's region — stubbed). Replaces inline name-resolution + pane-creation + task-registration flow in each handler.
  - New `y77` — registers teammate in team file (factored out, stubbed as `_registerTeammateInTeamFile_V112`).
  - New `O18` — registers agent in team file member list (factored out, stubbed as `_registerAgentInTeamFile_V112`).
  - `registerOutOfProcessTeammateTask`: now takes `taskRegistry` (from context) instead of `setAppState`. Adds `cwd` field to task state.
  - `generateUniqueTeammateName` (d7Y): now sanitizes name via `sanitizeAgentName` before uniqueness check.
  - In-process handler: leader auto-registration uses `context.teammateColors.assign` instead of `assignTeammateColor`.
  - `context.teammateColors` is a new field on `ToolUseContext` (not typed in this chunk).
  - `writeToMailbox` called before `sendCommandToPane` (order change).
- unresolved symbols:
  - `E77` at byte ~8314281 — central spawn orchestration (stubbed as `_E77_V112`, throws at runtime).
  - `y77` at byte ~8312343 — team file registration (stubbed as `_registerTeammateInTeamFile_V112`).
  - `O18` at byte ~8312412 — agent member registration (stubbed as `_registerAgentInTeamFile_V112`).
  - `context.teammateColors` — new ToolUseContext field, cast via unknown.
  - `taskRegistry` on context — new field (also seen in chunk-105 AgentTool lift).

### src/tools/utils.ts
- bytes out: ~700
- decls reconstructed: 2
- drift: low — jac=0.75 is a boundary artifact (decl mapped to RemoteAgentTask init code). The actual utils functions at [8541057,8541297] are both jac=1/cos=1.
- v112 changes: none.
- unresolved symbols: none.

## Cross-file observations

- `context.taskRegistry` (seen in spawnMultiAgent.ts) matches the pattern noted in chunk-105 AgentTool lift — `ToolUseContext` in v112 carries `taskRegistry` as a new field. **Action for a later chunk:** when the v112 `Tool.ts` / context type is lifted, add `taskRegistry` and `teammateColors` fields.
- `context.teammateColors` is a new ToolUseContext field in v112 that the spawn handlers use for color assignment. Needs type definition.
- `E77`, `y77`, `O18` are module-level helpers defined outside this chunk's sourcemap region. They likely live in `TeammateTool` or a new spawn-utilities module. Mark for resolution when that chunk is lifted.
- `isDeferredTool` in prompt.ts lost all the KAIROS / FORK_SUBAGENT / isReplBridgeActive gates from v88. The remaining gates are: alwaysLoad, isMcp, TOOL_SEARCH_TOOL_NAME, BRIEF_TOOL_NAME, SCHEDULE_WAKEUP_TOOL_NAME (new), shouldDefer.
- WebSearchTool `isEnabled()` now includes `'anthropicAws'` as a firstParty-equivalent provider.

## Lifter

`lifter-118` (sonnet, general-purpose, team v112-lift). Wave 1.
