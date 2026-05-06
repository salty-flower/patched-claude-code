# Chunk 12 Lift Notes

## Files

### src/commands/memory/memory.tsx
- **Status**: Verbatim copy (jac=1, cos=1 for main decls)
- **Drift**: None. All matched declarations copy exactly.

### src/commands/mobile/index.ts
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None.

### src/commands/mock-limits/index.js
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None. Stub export unchanged.

### src/commands/model/model.tsx
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - Added `ConfirmState` type and `confirmState`/`setConfirmState` in `ModelPickerWrapper` (v112 adds a model-change confirmation dialog)
  - `handleSelect` now has a guard `eu()>0 && aaK(H)!==aaK(_??K)` that sets confirm state instead of immediately switching; actual switch deferred to `j()` helper
  - Added TODO(lift) for `ModelChangeConfirmDialog` import and render branch (unresolved symbol at ~10556xxx)
  - `SetModelAndClose`: "Opus 4.6 with 1M" message shortened to "Opus with 1M" in v112
  - `SetModelAndClose`: `isFastModeAvailable()` check removed from the `else if` fast-mode-ON branch (v112 only checks `isFastModeSupportedByModel` + `isFastMode`)
  - Compiler runtime `_c(17)` cache slots expanded to accommodate confirm state

### src/commands/oauth-refresh/index.js
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None. Stub export unchanged.

### src/commands/onboarding/index.js
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None. Stub export unchanged.

### src/commands/output-style/index.ts
- **Status**: Reconstructed (jac=0.444, cos=0.989)
- **Drift**: Command completely repurposed in v112:
  - Name changed from `output-style` to `rate-limit-options`
  - Description changed to "Show options when rate limit is reached"
  - Added `isEnabled: () => false`
  - Load target changed from `./output-style.js` to `./rate-limit-options.js`

### src/commands/output-style/output-style.tsx
- **Status**: Reconstructed (jac=0.4, cos=0.954)
- **Drift**: Completely different functionality in v112:
  - No longer a deprecation message
  - Now transfers session to Claude Desktop via `switchToClaudeDesktop(0, 'other')`
  - Message changed to "Session transferred to Claude Desktop"
  - Added TODO(lift) for `switchToClaudeDesktop` import (unresolved symbol)

### src/commands/passes/passes.tsx
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None.

### src/commands/perf-issue/index.js
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None. Stub export unchanged.

### src/commands/permissions/index.ts
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None.

### src/commands/permissions/permissions.tsx
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None.

### src/commands/plan/index.ts
- **Status**: Verbatim copy (jac=1, cos=1)
- **Drift**: None.

### src/commands/plan/plan.tsx
- **Status**: Verbatim copy (jac=1, cos=1 for all matched decls)
- **Drift**: None.

### src/commands/plugin/AddMarketplace.tsx
- **Status**: Reconstructed (jac=0.951, cos=1)
- **Drift**:
  - `KeyboardShortcutHint` replaced with `ChordShortcutHint` in v112 (prop changed from `shortcut="Enter"` to `chord="enter"`)
  - Minor structural match; component logic unchanged
