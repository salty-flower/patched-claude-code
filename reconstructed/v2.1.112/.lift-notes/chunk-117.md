# Chunk #117 — src/tools/Skill*/Synthetic*/Task*/Team*

**Files lifted:** 12
**Confidence:** medium-high

## Per-file notes

### SkillTool/SkillTool.ts
- bytes out: 25,408
- decls reconstructed: 7
- drift: medium (jac=0.9, cos=1 on main decl)
- v112 changes:
  - `inputSchema.skill` description changed from `'The skill name. E.g., "commit", "review-pr", or "pdf"'` to `'The name of a skill from the available-skills list. Do not guess names.'`
  - `SAFE_SKILL_PROPERTIES` set adds `'createdBy'` entry (was absent in v88)
  - `validateInput`: adds fuzzy-match suggestion via `Yb6()` helper (maxEditDistance=2); adds user-invocable gate `PJK()`; adds `skillOverrides` gate `u56()` returning `'off'` or `'user-invocable-only'` (errorCode 7); improved error message for non-prompt types distinguishes `local-jsx` from built-in CLI
  - `executeForkedSkill`: `wasDiscoveredField` removed (EXPERIMENTAL_SKILL_SEARCH dropped); `xs()` helper added for source/loadedFrom/kind/createdBy telemetry; `WJK()` wraps `recordSkillUsage` + telemetry
  - `call()`: EXPERIMENTAL_SKILL_SEARCH remote canonical skill block removed entirely
  - `executeRemoteSkill()` and `extractUrlScheme()` removed (EXPERIMENTAL_SKILL_SEARCH gone)
  - `remoteSkillModules` conditional require removed
- unresolved symbols:
  - `xs()` — skill source telemetry builder at byte ~8559100
  - `WJK()` — record-usage + ant telemetry wrapper at byte ~8559200
  - `PJK()` — user-invocable gate predicate at byte ~8561700
  - `u56()` — skillOverrides setting lookup at byte ~8561750
  - `Yb6()` — fuzzy name suggestion, maxEditDistance=2 at byte ~8562200

### SkillTool/prompt.ts
- bytes out: 7,670
- decls reconstructed: 8
- drift: medium (getPrompt jac=0.545, cos=0.999; formatCommandsWithinBudget jac=0.833)
- v112 changes:
  - `getPrompt()`: prompt text completely rewritten to simpler form without examples; uses `Set \`skill\` to the exact name` instead of `Use this tool with the skill name`; drops `/<something>` examples
  - `getCharBudget()`: computation refactored — v112 computes `ah4() * (q ? q*oh4 : fJz/rh4)` then `Math.max(1, Math.floor(...))` instead of simple multiply; constants `ah4`, `oh4`, `fJz`, `rh4` unresolved
  - `formatCommandsWithinBudget()`: adds third param for skill override filter; name-only entries (disabled skills with override `=== 'name-only'`) skip description entirely
  - `getSkillToolInfo()`, `getLimitedSkillToolCommands()`, `clearPromptCache()`, `getSkillInfo()`: jac=1, verbatim
- unresolved symbols:
  - `ah4` — context window ratio constant at byte ~5667240
  - `oh4` — chars-per-token constant at byte ~5667250
  - `fJz` — fallback budget constant at byte ~5667260
  - `rh4` — ratio divisor constant at byte ~5667270
  - `u56()` — skillOverrides lookup for name-only filter at byte ~5667730

### SyntheticOutputTool/SyntheticOutputTool.ts
- bytes out: 5,203
- decls reconstructed: 5
- drift: low (jac=1, cos=1 on most decls; jac=0.5 on isSyntheticOutputToolEnabled)
- v112 changes:
  - `isSyntheticOutputToolEnabled()`: jac=0.5 but functionally identical — v112 minification uses simpler lambda `AW4(q){return q.isNonInteractiveSession}`. Semantics unchanged.
  - `SyntheticOutputTool` object: jac=1, cos=1 — verbatim
  - `createSyntheticOutputTool()` / `buildSyntheticOutputTool()`: jac=1, cos=1 — verbatim
  - Note: v88 decl [6492757,6492839] (no v112 match) is boundary artifact
- unresolved symbols: none

### TaskCreateTool/prompt.ts
- bytes out: 2,889
- decls reconstructed: 2
- drift: low (jac=0.979, cos=1)
- v112 changes:
  - `getPrompt()`: jac=0.979, cos=1 — 1 minor text diff not visible from similarity alone. Reconstructed from v88 as high confidence.
  - `DESCRIPTION`: jac=1, cos=1 — verbatim
  - v88 decl [9165130,9165152] has no v112 match — boundary artifact
- unresolved symbols: none

### TaskOutputTool/TaskOutputTool.tsx
- bytes out: 19,173
- decls reconstructed: 5
- drift: medium (jac=0.856, cos=1 on main tool decl)
- v112 changes:
  - `isEnabled()`: drops `"external" !== 'ant'` check — always returns true
  - `description()`: longer deprecation message distinguishing task types (bash/local_agent/remote_agent)
  - `prompt()`: updated deprecation guidance with separate per-task-type instructions
  - `call()`: uses `context.taskRegistry.update()` instead of `updateTaskState()` for marking tasks notified — `taskRegistry` is a new `ToolUseContext` field
  - `validateInput()`: simplified — no cast needed
  - `TaskOutputResultDisplay` component: jac=0.856, React compiler cache slots unchanged (54 slots)
  - v88 decl [9058173,9058201] and [9063077,9063092] have no v112 match — boundary artifacts
- unresolved symbols:
  - `context.taskRegistry` — new ToolUseContext field at byte ~9073977 (typed as unknown, cast via `context.taskRegistry.update()`)

### TaskStopTool/TaskStopTool.ts
- bytes out: 3,879
- decls reconstructed: 1
- drift: low (jac=0.981, cos=1)
- v112 changes:
  - `userFacingName()`: drops `process.env.USER_TYPE === 'ant'` guard — always returns `'Stop Task'` (v88 returned `''` for ant users)
  - `call()`: uses `{ taskRegistry, setAppState, abortController }` instead of `{ getAppState, setAppState, abortController }` — `stopTask()` takes `taskRegistry` in v112
- unresolved symbols: none

### TaskStopTool/UI.tsx
- bytes out: 1,455
- decls reconstructed: 3 (renderToolUseMessage, truncateCommand, renderToolResultMessage)
- drift: none (jac=1, cos=1)
- v112 changes: none — verbatim from v88
- unresolved symbols: none

### TaskStopTool/prompt.ts
- bytes out: 169 (pre-existing, not rewritten)
- decls reconstructed: 2
- drift: none (jac=1, cos=1)
- v112 changes: none — verbatim from v88
- unresolved symbols: none

### TeamCreateTool/TeamCreateTool.ts
- bytes out: 8,036
- decls reconstructed: 1
- drift: high (jac=0.841, cos=0.999)
- v112 changes:
  - `generateUniqueTeamName()` removed entirely — v112 writes exclusively and throws if team name already exists
  - `writeTeamFileAsync()` replaced with `Bd8(name, file, {exclusive:true})` — exclusive create with EEXIST error handling: catches error, checks `Q1(err) === 'EEXIST' && mw8(err) === teamFilePath`, throws user-friendly error referencing `Cc` (TeamDelete tool name)
  - `assignTeammateColor()` replaced with `context.teammateColors.assign(leadAgentId)` — color manager moved to `ToolUseContext`
  - `sanitizeName(finalTeamName)` wrapped in `T96()` alias for task list ID operations
  - `resetTaskList(taskListId)` called via `xb8()` alias
  - `ensureTasksDir(taskListId)` called via `An1()` alias
  - `setLeaderTeamName()` called via `_R4()` alias
- unresolved symbols:
  - `Bd8()` — exclusive writeTeamFileAsync at byte ~9230500
  - `Q1()` — error code extractor at byte ~9230600
  - `mw8()` — path extractor from error at byte ~9230700
  - `Cc` — TEAM_DELETE_TOOL_NAME constant at byte ~9230800
  - `T96()` — sanitizeName wrapper at byte ~9230900
  - `context.teammateColors` — new ToolUseContext field (assign/clear) at byte ~9231000
  - `xb8()` — resetTaskList alias at byte ~9231100
  - `An1()` — ensureTasksDir alias at byte ~9231200
  - `_R4()` — setLeaderTeamName alias at byte ~9231300

### TeamCreateTool/UI.tsx
- bytes out: 238
- decls reconstructed: 1
- drift: none (jac=1, cos=1)
- v112 changes: none — verbatim from v88
- unresolved symbols: none

### TeamCreateTool/prompt.ts
- bytes out: 7,054
- decls reconstructed: 1
- drift: low (jac=0.955, cos=1)
- v112 changes:
  - `getPrompt()`: jac=0.955, cos=1 — minor text updates. Reconstructed from v88 as high confidence, exact diff not extractable from byte similarity alone.
- unresolved symbols: none

### TeamDeleteTool/TeamDeleteTool.ts
- bytes out: 3,984
- decls reconstructed: 1
- drift: low (jac=0.973, cos=1)
- v112 changes:
  - `clearTeammateColors()` replaced with `context.teammateColors.clear()` — same `teammateColors` field as TeamCreateTool, confirming it's a new `ToolUseContext` field
- unresolved symbols:
  - `context.teammateColors.clear()` — ToolUseContext.teammateColors at byte ~9233800

### TeamDeleteTool/UI.tsx
- bytes out: 782
- decls reconstructed: 2
- drift: none (jac=1, cos=1)
- v112 changes: none — verbatim from v88
- unresolved symbols: none

### TeamDeleteTool/prompt.ts
- bytes out: 623
- decls reconstructed: 1
- drift: low (cos=0.999)
- Note: region.json shows this decl has no v112 match at exact location — the boundary overlaps with TeamCreateTool region. Content reconstructed from v88 as high-confidence (cos=0.999 on overlap region).
- unresolved symbols: none

## Cross-file observations

- `context.taskRegistry` (TaskOutputTool, TaskStopTool) and `context.teammateColors` (TeamCreateTool, TeamDeleteTool) are both new `ToolUseContext` fields appearing in multiple files. **Action for a later chunk:** when the v112 `Tool.ts` / context type definition is lifted, add these fields to `ToolUseContext`.
- `stopTask()` signature changed: v112 takes `{ taskRegistry, setAppState }` instead of `{ getAppState, setAppState }`.
- `EXPERIMENTAL_SKILL_SEARCH` feature flag and all associated remote skill infrastructure (`executeRemoteSkill`, `extractUrlScheme`, `remoteSkillModules` conditional require) are completely removed in v112 from SkillTool. The feature was experimental/ant-only gated in v88.
- `skillOverrides` setting appears as a new v112 concept in SkillTool — affects model invocation gates (`'off'`, `'user-invocable-only'`, `'name-only'`). Lifted as TODO since the `u56()` resolver is unresolved.
- The ant-gated `process.env.USER_TYPE === 'ant'` check in `TaskStopTool.userFacingName()` was dropped in v112, always returning 'Stop Task'.

## Lifter

`lifter-117` (subagent), sonnet, general-purpose
