# Chunk 18 Lift Notes

## Files Copied Verbatim (jac=1, cos=1 for all matched decls)

| File | Notes |
|------|-------|
| `src/commands/reload-plugins/index.ts` | No drift |
| `src/commands/reload-plugins/reload-plugins.ts` | No drift |
| `src/commands/remote-env/remote-env.tsx` | No drift |
| `src/commands/rename/index.ts` | No drift |
| `src/commands/rename/rename.ts` | No drift |
| `src/commands/reset-limits/index.js` | No drift |
| `src/commands/resume/index.ts` | No drift |
| `src/commands/rewind/index.ts` | No drift |
| `src/commands/rewind/rewind.ts` | No drift |
| `src/commands/sandbox-toggle/sandbox-toggle.tsx` | No drift |
| `src/commands/session/session.tsx` | No drift |
| `src/commands/share/index.js` | No drift |
| `src/commands/skills/index.ts` | No drift |
| `src/commands/skills/skills.tsx` | No drift |
| `src/commands/stats/index.ts` | No drift |
| `src/commands/status/status.tsx` | No drift |
| `src/commands/stickers/index.ts` | No drift |
| `src/commands/stickers/stickers.ts` | No drift |
| `src/commands/summary/index.js` | No drift |
| `src/commands/tasks/index.ts` | No drift |
| `src/commands/tasks/tasks.tsx` | No drift |
| `src/commands/teleport/index.js` | No drift |

## Files with Drift (reconstructed with TODOs)

### `src/commands/rate-limit-options/rate-limit-options.tsx`
- **Drift**: Main function body has jac=0.769, cos=1. v112 adds `upgradePaths` field from `useClaudeAiLimits()` and a new "team" upgrade option gated by `tengu_coral_beacon`.
- **Changes**: The options building logic now checks `claudeAiLimits.upgradePaths` for plan upgrade availability, and adds a Team plan upgrade option.
- **TODOs**: Team upgrade handler with `J3(aj7)` (openBrowser) at byte ~11495635.

### `src/commands/release-notes/index.ts`
- **Drift**: jac=0.571, cos=0.995. Command type changed from `local` to `local-jsx`.
- **Changes**: `type: "local-jsx"`, removed `supportsNonInteractive`.

### `src/commands/release-notes/release-notes.ts`
- **Drift**: Main function jac=0.5, cos=0.802. v112 adds `isEmptyContentBlocks` helper and changes return type handling.
- **Changes**: Added `isEmptyContentBlocks()` helper function. The `call()` function's cached notes path is unresolved.
- **TODOs**: `CHANGELOG_URL`, `fetchAndStoreChangelog`, `getAllReleaseNotes`, `getStoredChangelog` imports at byte ~10958731.

### `src/commands/remote-setup/api.ts`
- **Drift**: One decl jac=0.767, cos=0.979. `createDefaultEnvironment` signature changed in v112.
- **Changes**: v112 adds `isValidJson` helper. `createDefaultEnvironment` now takes `name` and `signal` parameters and returns `response.data` directly instead of boolean. Removed `hasExistingEnvironment` check from the function (moved to caller).
- **TODOs**: `isValidJson` helper at byte ~11536055.

### `src/commands/remote-setup/index.ts`
- **Drift**: jac=0.917, cos=0.996. Added `allow_quick_web_setup` policy check.
- **Changes**: `isEnabled` and `isHidden` now also check `isPolicyAllowed('allow_quick_web_setup')`.

### `src/commands/remote-setup/remote-setup.tsx`
- **Drift**: Main component jac=0.935, cos=0.999. v112 refactored environment creation logic.
- **Changes**: After token import, v112 checks `hasNoExistingEnvironment()` before calling `createDefaultEnvironment()`. Added `hasNoExistingEnvironment` helper stub.
- **TODOs**: `hasNoExistingEnvironment` implementation at byte ~11536841.

### `src/commands/review.ts`
- **Drift**: Second decl jac=0.833, cos=0.996. Ultrareview description is now dynamic.
- **Changes**: `ultrareview.description` changed from static string to getter. v112 adds "Est. cost {Au6()} USD" to description.
- **TODOs**: `s_6()` and `Au6()` dynamic description functions at byte ~11147875.

### `src/commands/review/reviewRemote.ts`
- **Drift**: Main function jac=0.597, cos=0.998. Major structural refactoring in v112.
- **Changes**: `launchRemoteReview` completely refactored. v112 uses structured args object with `mode`/`prNumber`/`baseBranch`/`mergeBaseSha`/`diffStat`. Returns `{ launched, sessionId, sessionUrl, blocks }` instead of `ContentBlockParam[] | null`. Uses `CF()` (teleport) with `source`, `tags`, `bundleBaseRef`, `onBundleFail` options. Adds `BUGHUNTER_MODEL` from `OlK()` env var.
- **TODOs**: Full v112 return type and teleport call signatures at byte ~11113038.

### `src/commands/review/ultrareviewCommand.tsx`
- **Drift**: Main decl jac=0.556, cos=0.993. Adapted to v112 `launchRemoteReview` changes.
- **Changes**: Added TODO noting v112's structured return type change.

### `src/commands/review/ultrareviewEnabled.ts`
- **Drift**: jac=0.5, cos=0.946. v112 wraps GB call in helper.
- **Changes**: v112 uses `Yu6()` helper instead of direct `getFeatureValue_CACHED_MAY_BE_STALE`.
- **TODOs**: `Yu6()` helper at byte ~11110145.

### `src/commands/security-review.ts`
- **Drift**: First decl unmatched (large markdown string). Second decl jac=1, cos=1.
- **Changes**: No semantic changes - the large SECURITY_REVIEW_MARKDOWN is identical. Copied verbatim.

### `src/commands/stats/stats.tsx`
- **Drift**: jac=0.5, cos=0.965. v112 changed call signature.
- **Changes**: v112 call accepts `(onDone, context)` and passes `commands` from `context.options.commands` to `Stats` component.
- **TODOs**: `Stats` component prop changes at byte ~10568375.

### `src/commands/statusline.tsx`
- **Drift**: jac=0.947, cos=0.999. v112 adds `disableModelInvocation`.
- **Changes**: Added `disableModelInvocation: true` field.

### `src/commands/tag/index.ts`
- **Drift**: jac=0.5, cos=0.975. Command completely repurposed in v112.
- **Changes**: v112 renamed from `tag` to `advisor`. Description changed to "Configure the Advisor Tool...". `isEnabled`/`isHidden` use `vx()`. `argumentHint` uses dynamic model list `Eh6`.
- **TODOs**: `Eh6`, `vx()` at byte ~11471661.

### `src/commands/tag/tag.tsx`
- **Drift**: Major structural changes. jac=0.417 for first decl, jac=0.5 for second matched decl. v112 completely changed this file's purpose.
- **Changes**: v112 repurposed from session tag toggle to advisor model switcher. The v88 `ConfirmRemoveTag`/`ToggleTagAndClose`/`ShowHelp` components are replaced with `ConfirmSwitchModel`/`AdvisorCommand`/`ShowHelp`. Kept v88 structure with extensive TODOs since semantic is entirely different.
- **TODOs**: Full v112 advisor implementation at byte ~11465488.
