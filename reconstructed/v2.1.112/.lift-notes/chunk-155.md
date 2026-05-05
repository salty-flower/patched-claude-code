# Chunk 155 Lift Notes

## src/utils/stringUtils.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - `firstLineOf`: Added optional `char` parameter (default `'\n'`) — v112 minified shows 2-param signature `i5(q,K)`.
  - `plural`: **REMOVED** in v112 (no v112 match for v88 decl [1031925,1031967]).
  - `normalizeFullWidthSpace`: **REMOVED** in v112 (v88 decl [1032214,1032262] falsely matched to duplicate `escapeRegExp` in v112; actual function removed).
  - `escapeRegExp`: Bundler duplicate in v112 minified — source unchanged.
  - `truncateToLines`: Present in v112 but at different bundle offset; source unchanged.
- **Drift**: Low — only parameter addition and two function removals.

## src/utils/subprocessEnv.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - Added `ANTHROPIC_AWS_API_KEY` and `ANTHROPIC_BEDROCK_MANTLE_API_KEY` to `GHA_SUBPROCESS_SCRUB` list.
  - v112 introduces dotenv env stripping (`_getDotenvEnv` / `Kn_()` / `Yn_` arrays for dotenv files and path prefixes). Not fully reconstructable from minified — marked with TODO(lift).
  - `subprocessEnv()` logic restructured: checks proxyEnv, dotenvEnv, and scrub flag independently.
- **Drift**: Medium — new dotenv stripping infrastructure unresolved.

## src/utils/suggestions/commandSuggestions.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - `getCommandFuse` / Fuse index: Added `displayName` and `displayPartKey` keys (weight 2 and 1). v112 filters with `co8` visibility function (unresolved — TODO).
  - `findMidInputSlashCommand`: Regex extended with CJK punctuation `[\s\u3002\u3001\uff1f\uff01]`.
  - `getBestCommandMatch`: Now searches both `cmd.name` and `getCommandName(cmd)` (displayName).
  - `generateCommandSuggestions`: Filters with `!co8(v)`; exact match check uses both `name` and `displayName`; prefix sorting uses min length across both names.
  - `cleanWord`: Completely changed — now `word.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()` (kebab-case normalization) instead of stripping non-alphanumerics.
  - `findSlashCommandPositions`: Regex extended with CJK punctuation.
- **Drift**: Medium — several algorithmic changes, one unresolved `co8` filter.

## src/utils/suggestions/directoryCompletion.ts
- **Status**: Copied verbatim (jac=1,cos=1 for all matched decls)
- **Changes**: None detected.
- **Drift**: None.

## src/utils/suggestions/shellHistoryCompletion.ts
- **Status**: Copied verbatim (jac=1,cos=1 for all matched decls)
- **Changes**: None detected.
- **Drift**: None.

## src/utils/suggestions/skillUsageTracking.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - Added `parseSlashCommand()` function (v112 decl at byte ~5755266) — parses "/command (MCP) args" format.
  - Added `sn1.emit(q)` call in `recordSkillUsage()` — event emitter for skill usage (unresolved symbol).
  - Removed module-level `lastWriteBySkill` Map and `SKILL_USAGE_DEBOUNCE_MS` constant from explicit declarations; logic preserved in reconstructed source.
- **Drift**: Low — one new helper function, one unresolved emitter.

## src/utils/suggestions/slackChannelSuggestions.ts
- **Status**: Copied verbatim (jac=1,cos=1 for all matched decls)
- **Changes**: None detected.
- **Drift**: None.

## src/utils/swarm/It2SetupPrompt.tsx
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - v112 refactored from React compiler runtime (`_c` memo cache) to standard React hooks.
  - Inline render functions (`renderInitialPrompt`, `renderInstalling`, etc.) extracted to sub-components: `b7Y`, `I7Y`, `x7Y`, `u7Y`, `B7Y`, `p7Y`, `F7Y` (unresolved — TODOs added).
  - `useInput` handler for api-instructions step replaced with `onKeyDown` on the wrapping `Box`.
  - Cancel hint changed from plain "Esc to cancel" to `A8` KeybindingChord component (unresolved — TODO).
  - `Pane` wrapper changed to `A_` component with `color="permission"`.
  - Added `tabIndex={0}` and `autoFocus` to root Box.
- **Drift**: High — major structural refactoring, many unresolved sub-component symbols.

## src/utils/swarm/backends/ITermBackend.ts
- **Status**: Copied verbatim (jac=1,cos=1 for all matched decls)
- **Changes**: None detected.
- **Drift**: None.

## src/utils/swarm/backends/InProcessBackend.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - `terminate()`: v112 uses `this.context.taskRegistry` instead of `this.context.setAppState` for `requestTeammateShutdown` call (unresolved exact API — TODO).
  - `kill()`: v112 passes `this.context.taskRegistry` and `this.context.setAppState` to `killInProcessTeammate` (was single arg in v88).
- **Drift**: Low — two call-site changes with unresolved registry API.

## src/utils/swarm/backends/PaneBackendExecutor.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - `spawn()`: Color assignment moved from `assignTeammateColor(agentId)` to `this.context.teammateColors.assign(agentId)` (unresolved — TODO with stub).
- **Drift**: Low — one unresolved teammateColors API.

## src/utils/swarm/backends/TmuxBackend.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - Module-level state (`firstPaneUsedForExternal`, `cachedLeaderWindowTarget`) moved to instance fields.
  - `getCurrentWindowTarget()`: Format string changed from `#{session_name}:#{window_index}` to `#{window_id}`.
  - `createTeammatePaneWithLeader` and `createTeammatePaneExternal`: Uses `.at(-1)` instead of `[array.length - 1]` for fallback pane selection.
- **Drift**: Low — field migration and two minor expression changes.

## src/utils/swarm/backends/detection.ts
- **Status**: Reconstructed with semantic changes
- **Changes**:
  - `isInsideTmuxSync()`, `isInsideTmux()`, `getLeaderPaneId()`, `isTmuxAvailable()` all **REMOVED** in v112 (no v112 matches). These functions were moved elsewhere or inlined.
  - `resetDetectionCache()` **REMOVED** in v112.
  - Only `isInITerm2()`, `isIt2CliAvailable()`, and `IT2_COMMAND` remain with v112 matches.
  - Module-level `ORIGINAL_USER_TMUX`, `ORIGINAL_TMUX_PANE`, and cache vars removed (no v112 match).
- **Drift**: High — majority of exports removed; file now mostly iTerm2-specific.
