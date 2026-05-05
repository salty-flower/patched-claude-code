# Chunk 161 Lift Notes

## src/utils/worktree.ts
**Status:** Reconstructed with significant v112 semantic changes.

Major changes from v88:
- `flattenSlug` now replaces full-width spaces (`\u3000`) with regular spaces instead of `/` with `+`. The `/` → `+` flattening logic appears to have been removed or relocated.
- `getOrCreateWorktree`: Added orphan worktree directory self-healing logic (checks git remote, rev-parse, rev-list before removing orphaned dirs). Added `--no-track` flag to `git worktree add`. Added `fromHead` option. Added `copyWorktreeIncludeFiles` call at end.
- `performPostCreationSetup`: Removed the commit attribution hook installation block (feature-gated `COMMIT_ATTRIBUTION` code removed).
- `createWorktreeForSession`: Unchanged.
- `cleanupWorktree`: Added `enteredExisting` early return. Changed hook-based cleanup message. Added residual directory cleanup (`mkdir` with force) after `git worktree remove`. Added `WS4()` call (analytics/telemetry).
- `createAgentWorktree`: Added `fromCwd` option. Added `headCommit` resolution for hook-based worktrees. Added `git worktree lock` on creation.
- `removeAgentWorktree`: Added `source` parameter. Added analytics call `d("tengu_worktree_removed", ...)`. Added changed-files counting via `git status --porcelain`. Added `git worktree unlock` before removal. Added residual directory cleanup.
- New function: `enterExistingWorktreeForSession` — sets `enteredExisting: true` on session.
- New function: `listRegisteredWorktrees` — lists worktrees via `git worktree list --porcelain`.
- New function: `getAgentWorktreeChanges` — returns `{dirty, commitsAhead, gitError}` instead of boolean.
- `cleanupStaleAgentWorktrees`: Added `listRegisteredWorktrees` integration. Added remote reachability check for unpushed commits (with `K6A` helper, unresolved).
- `execIntoTmuxWorktree`: Added `cwd: getCwd()` to all `spawnSync` calls. Removed dev pane setup (now `if(false)` dead code).
- New unresolved symbols: `d` (analytics), `WS4`, `K6A`, `$J7` (rm -rf helper), `teY` (copy worktree include), `bA1`, `eeY`, `z85`, `t1`, `M7`, `D7`, `UZ`, `RW`, `kr`, `v7`, `aC`, `WQ6`, `OJ7`, `wJ7`, `A85`, `O85`, `_85`, `c16`, `Y85`, `C85`, `kz8`, `l7`, `mu6`, `zj`, `PN`, `xc`, `Y8`, `Za8`, `j85`, `b8`, `NW6`, `kW6`, `ez`, `rj`, `N_6`, `E`, `Q1`, `b6`, `J_7`, `R7`, `dT`, `QT`, `Be`, `N7`, `ex`, `jw`, `SQ8`, `jH`, `ahY`, `ehY`, `CgK`, `SgK`, `xgK`, `M_7`, `thY`, `ab`, `yB`, `s1`, `d6`, `L7`, `S7`, `pR7`, `Dk`, `vQ`, `$8`, `Z1`, `a8`, `hY`, `oM`, `R7`.

## src/utils/worktreeModeEnabled.ts
**Status:** Copied verbatim (jac=1, cos=1).

No changes between v88 and v112.

## src/utils/xdg.ts
**Status:** Copied verbatim (jac=1, cos=1 for all function declarations).

No semantic changes. The unmatched declaration is the import block (cosmetic).

## src/utils/xml.ts
**Status:** Reconstructed with v112 semantic change.

Changed `String.prototype.replace(/regex/g, ...)` to `String.prototype.replaceAll(string, ...)` in both `escapeXml` and `escapeXmlAttr`. The v112 minified confirms this change.

## src/vim/motions.ts
**Status:** Reconstructed with v112 semantic changes.

- New function: `isUrlMotion(key: string): boolean` — returns `key.includes("://")`. This was extracted from elsewhere in v112.
- `isInclusiveMotion` moved to a different byte offset in v112 but body is unchanged.
- All other functions unchanged (jac=1, cos=1).

## src/vim/textObjects.ts
**Status:** Reconstructed with v112 semantic changes.

- `findTextObject` and `PAIRS` constant removed in v112 (no v112 matches). These were likely moved to a consumer or consolidated elsewhere.
- Helper functions `findWordObject`, `findQuoteObject`, `findBracketObject` remain with identical logic (jac=1, cos=1).
- `isLinewiseMotion` import/export removed (now lives in motions.ts).

## src/vim/types.ts
**Status:** Copied verbatim.

All type definitions and constants are semantically identical. The unmatched declarations are comment blocks and whitespace-only regions. The v112 minified shows the same structure with factories and constants in an IIFE.

## src/voice/voiceModeEnabled.ts
**Status:** Reconstructed with v112 semantic change.

- `isVoiceGrowthBookEnabled`: Removed the `feature('VOICE_MODE')` ternary guard. Now directly returns `!getFeatureValue_CACHED_MAY_BE_STALE('tengu_amber_quartz_disabled', false)`. The v112 minified confirms `feature` import is no longer used in this function.
- `hasVoiceAuth` and `isVoiceModeEnabled` unchanged.
