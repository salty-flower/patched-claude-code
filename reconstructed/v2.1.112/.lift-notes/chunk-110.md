# Chunk #110 — src/tools (mixed small tools)

**Files lifted:** 18
**Confidence:** medium-high

## Per-file notes

### src/tools/BriefTool/UI.tsx
- bytes out: ~3,200
- decls reconstructed: 3
- drift: none — all matched decls are jac=cos=1 (verbatim)
- v112 changes: none in matched decls; 4 v88 boundary decls have no v112 match (sourcemap artifacts)
- unresolved symbols: none

### src/tools/BriefTool/attachments.ts
- bytes out: ~3,100
- decls reconstructed: 3
- drift: low — 2 of 3 decls are jac=cos=1; `resolveAttachments` has jac=0.875, cos=0.999
- v112 changes:
  - `resolveAttachments` upload condition now includes `!!process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE` as a third OR branch
  - `feature('BRIDGE_MODE')` guard removed — upload is always attempted (feature baked on)
  - Upload is no longer conditional on `shouldUpload` only for resolve path; the `shouldUpload` boolean is computed and forwarded to `uploadBriefAttachment` directly
- unresolved symbols: none

### src/tools/BriefTool/prompt.ts
- bytes out: ~2,000
- decls reconstructed: 2 (+ 1 new v112 constant)
- drift: jac=0.75 (first decl), cos=1; second decl jac=cos=1
- v112 changes:
  - New module-scope constant `BRIEF_MODE_ENFORCEMENT` at byte ~1043634
  - `BRIEF_PROACTIVE_SECTION` moved to lazy-init pattern (variable initialized in a lazy module block `L(()=>{ ... })`); reconstructed as a lazy function with memoized result
- unresolved symbols: none

### src/tools/ConfigTool/ConfigTool.ts
- bytes out: ~12,500
- decls reconstructed: 3 (getValue, buildNestedObject, ConfigTool)
- drift: low — main tool decl jac=0.979; helper decls jac=cos=1
- v112 changes:
  - `feature('VOICE_MODE')` guard removed from `call()` — voice path is always active, gated only by GrowthBook runtime check
  - `settingsChangeDetector.notifyChange` call for voice removed (handled differently in v112)
  - No other behavioral changes detected
- unresolved symbols: none

### src/tools/ConfigTool/UI.tsx
- bytes out: ~1,100
- decls reconstructed: 3
- drift: none — all 3 matched decls are jac=cos=1
- v112 changes: none
- unresolved symbols: none

### src/tools/ConfigTool/prompt.ts
- bytes out: ~2,600
- decls reconstructed: 4
- drift: low — first decl jac=0.877 (SUPPORTED_SETTINGS iteration), rest jac=cos=1
- v112 changes:
  - `feature('VOICE_MODE')` guard on `voiceEnabled` key replaced by direct `isVoiceGrowthBookEnabled()` check (no feature gate wrapper)
  - `generateModelSection` verbatim (jac=cos=1)
- unresolved symbols: none

### src/tools/ConfigTool/supportedSettings.ts
- bytes out: ~4,800
- decls reconstructed: 5 (SUPPORTED_SETTINGS + helpers)
- drift: medium — SUPPORTED_SETTINGS body jac=0.877, cos=0.999
- v112 changes:
  - New `autoScrollEnabled` setting (global boolean)
  - New `tui` setting (settings string, options: ['default', 'fullscreen'])
  - `feature('AUTO_THEME')` gate removed — uses `THEME_NAMES` directly (not `THEME_SETTINGS`)
  - `feature('TRANSCRIPT_CLASSIFIER')` gate on `permissions.defaultMode` removed — 'auto' always included
  - `feature('VOICE_MODE')` gate removed — `voiceEnabled` always included
  - `feature('BRIDGE_MODE')` gate removed — `remoteControlAtStartup` always present
  - KAIROS notifications: `taskCompleteNotifEnabled` removed; only `inputNeededNotifEnabled` + `agentPushNotifEnabled` remain
  - Ant-only `classifierPermissionsEnabled` setting removed
- unresolved symbols: none

### src/tools/EnterPlanModeTool/EnterPlanModeTool.ts
- bytes out: ~3,500
- decls reconstructed: 1 (EnterPlanModeTool)
- drift: medium — jac=0.949
- v112 changes:
  - `(feature('KAIROS') || feature('KAIROS_CHANNELS'))` check in `isEnabled()` replaced by just `getAllowedChannels().length > 0`
  - `context.setAppState(prev => ...)` replaced by `context.setToolPermissionContext(prev => ...)` in `call()` — new API
- unresolved symbols: none

### src/tools/EnterPlanModeTool/UI.tsx
- bytes out: ~1,200
- decls reconstructed: 3
- drift: none — all matched decls jac=cos=1
- v112 changes: none
- unresolved symbols: none

### src/tools/EnterPlanModeTool/prompt.ts
- bytes out: ~6,500
- decls reconstructed: 3 (WHAT_HAPPENS_SECTION + 2 prompt fns + getEnterPlanModeToolPrompt)
- drift: all matched decls jac=cos=1 (verbatim — region shows 4 unmatched v88 decls which are boundary artifacts)
- v112 changes: `WHAT_HAPPENS_SECTION` lazy-initialized in v112 (jvK lazy block); text identical to v88
- unresolved symbols: none

### src/tools/EnterWorktreeTool/EnterWorktreeTool.ts
- bytes out: ~4,500
- decls reconstructed: 1 (EnterWorktreeTool)
- drift: high — jac=0.68
- v112 changes:
  - Input schema expanded with `path` field — can enter an existing worktree by path
  - `.refine()` added to prevent providing both `name` and `path`
  - `userFacingName()` now accepts an `input` arg and returns 'Entering worktree' (path) vs 'Creating worktree' (name/new)
  - `validateInput()` now added (was absent in v88): guards against subagent-with-cwd-override and already-in-worktree
  - `call()` branches on `input.path`: uses `enterExistingWorktree(sessionId, path)` instead of always creating
  - `logEvent` now uses `'tengu_worktree_entered_existing'` vs `'tengu_worktree_created'` depending on path vs name
  - Result message prefix: 'Entered' vs 'Created'
- unresolved symbols:
  - `isSubagentWithCwdOverride` — byte ~9142700 (Sf6 in v112_min). Likely in `utils/worktree.js`
  - `enterExistingWorktree` — byte ~9143800 (T37 in v112_min). New worktree utility function

### src/tools/EnterWorktreeTool/UI.tsx
- bytes out: ~600
- decls reconstructed: 2
- drift: medium — jac=0.667, cos=0.994
- v112 changes:
  - `renderToolResultMessage` body changed: the branch display is now conditional (branch shown as sub-text only when present) — more like ExitWorktreeTool/UI.tsx pattern
- unresolved symbols: none

### src/tools/EnterWorktreeTool/prompt.ts (no-v112-match)
- bytes out: ~700
- decls reconstructed: 1
- drift: no v112 match (region status: no-v112-match) — reconstructed from semantic context
- v112 changes: prompt updated to document new `path` parameter and 'Entered' vs 'Created' behavior
- unresolved symbols: none; reconstructed with high confidence from tool-level changes

### src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts
- bytes out: ~10,500
- decls reconstructed: 1 (ExitPlanModeV2Tool + schemas)
- drift: medium — jac=0.942
- v112 changes:
  - `feature('TRANSCRIPT_CLASSIFIER')` guard removed — `autoModeStateModule` and `permissionSetupModule` imported unconditionally (always required)
  - `isEnabled()` collapsed to just `getAllowedChannels().length > 0` (same as EnterPlanModeTool)
  - `setAwaitingPlanApproval` now takes `taskRegistry` from context instead of `setAppState`
  - `context.setAppState` for permission context replaced by `context.setToolPermissionContext` call
  - System notification event emission added (sv() call in v112_min) alongside `addNotification`
- unresolved symbols:
  - `sendSystemEvent` method shape at byte ~9092000 — sv() in v112_min, likely a context method

### src/tools/ExitPlanModeTool/UI.tsx
- bytes out: ~2,800
- decls reconstructed: 3
- drift: none — both matched decls jac=cos=1
- v112 changes: none
- unresolved symbols: none

### src/tools/ExitWorktreeTool/ExitWorktreeTool.ts
- bytes out: ~7,500
- decls reconstructed: 3 (countWorktreeChanges + restoreSessionToOriginalCwd + ExitWorktreeTool)
- drift: medium — main tool decl jac=0.911
- v112 changes:
  - `validateInput` now guards against subagent-with-cwd-override (errorCode 5, new guard)
  - `validateInput` now rejects `remove` on worktrees entered via `path` (enteredExisting flag, errorCode 4)
  - `logEvent('tengu_worktree_removed', ...)` now includes `source: 'exit_tool'` field
- unresolved symbols:
  - `isSubagentWithCwdOverride` — same as EnterWorktreeTool (Sf6 in v112_min)

### src/tools/ExitWorktreeTool/UI.tsx
- bytes out: ~700
- decls reconstructed: 2
- drift: low — jac=1, cos=0.999
- v112 changes: none
- unresolved symbols: none

### src/tools/ExitWorktreeTool/prompt.ts (no-v112-match)
- bytes out: ~800
- decls reconstructed: 1
- drift: no v112 match (v88 decl [9125768,9127739] has no v112 match)
- v112 changes: prompt updated to note that `remove` action is blocked for entered-existing worktrees
- unresolved symbols: none

### src/tools/FileEditTool/FileEditTool.ts
- bytes out: ~17,000
- decls reconstructed: 3 (FileEditTool + readFileForEdit + 2 local helpers)
- drift: medium — jac=0.916
- v112 changes:
  - New `stripForStorage()` method — zeroes out `originalFile` field to reduce storage costs
  - `validateInput`: new executable-file check (errorCode 11) using `mode` bits from `fs.stat()`
  - `validateInput`: `isFullRead` check uses `(offset ?? 1) <= 1` heuristic instead of `offset === undefined`
  - `call()`: `fileHistory` API changed to `getFileHistoryState` + `applyFileHistoryOp` pattern
  - `call()`: `normalizeLineEndings` post-processes `updatedFile` (XR8 in v112_min)
  - `call()`: `FILE_UNEXPECTEDLY_MODIFIED_ERROR` constants split into two (EL8/NL8 in v112_min)
  - `call()`: `getFeatureValue_CACHED_MAY_BE_STALE('tengu_quartz_lantern', ...)` feature gate removed — git diff runs on `CLAUDE_CODE_REMOTE` env alone
  - `mapToolResultToToolResultBlockParam`: new optional remote-note appended (qN6()/ok8 pattern, byte ~9823100)
- unresolved symbols:
  - `normalizeLineEndings` — XR8 in v112_min (byte ~9822600). New utility in `./utils.js`. Added as named import from `./utils.js` with TODO comment.
  - `ok8` string constant at byte ~9823100 — remote-mode note appended to success messages. Left as empty string placeholder with comment.
  - FILE_UNEXPECTEDLY_MODIFIED_ERROR split into EL8/NL8 in v112_min (byte ~9816900) — reconstructed as same constant for now.

## Cross-file observations

- `setToolPermissionContext` is a new context API in v112 that replaces direct `setAppState(prev => ({ ...prev, toolPermissionContext: ... }))` patterns. Appears in EnterPlanModeTool, ExitPlanModeV2Tool. Needs updating in the ToolUseContext type definition.
- `isSubagentWithCwdOverride()` (Sf6) appears in both EnterWorktreeTool and ExitWorktreeTool validateInput — new guard for worktree tools in subagent contexts.
- Feature flags baked off in v112 build: `VOICE_MODE` (feature guards removed but runtime GrowthBook check retained), `AUTO_THEME`, `TRANSCRIPT_CLASSIFIER` (modules now unconditionally imported), `BRIDGE_MODE`, `KAIROS`/`KAIROS_CHANNELS` (collapsed to `getAllowedChannels()` checks).
- The `enterExistingWorktree` function (T37 in v112_min) is a new export from `utils/worktree.js`, paired with the new `path` input field on EnterWorktreeTool.
- ExitWorktreeTool `validateInput` now references `session.enteredExisting` field — new property on the worktree session state object returned by `getCurrentWorktreeSession()`.

## Lifter

`lifter-110` (subagent), sonnet, general-purpose
