# Chunk #26 — src/components (batch 1)

**Files lifted:** 13
**Confidence:** high

## Per-file notes

### src/components/FileEditToolUseRejectedMessage.tsx
- **v88→v112**: jac=1.0, cos=1.0 for the main function decl
- **Drift**: None — all declarations match exactly
- **Status**: Copied verbatim from v88
- **Unresolved**: None

### src/components/FilePathLink.tsx
- **v88→v112**: jac=1.0, cos=1.0 for the main function decl
- **Drift**: None — all declarations match exactly
- **Status**: Copied verbatim from v88
- **Unresolved**: None

### src/components/FullscreenLayout.tsx
- **v88→v112**: Multiple decls with jac=1.0, cos=1.0; one decl with jac=0.956, cos=1.0 (FullscreenLayout); one with jac=0.87, cos=0.999 (NewMessagesPill); one with jac=0.938, cos=1.0 (SuggestionsOverlay)
- **Drift**:
  - `useUnseenDivider`: v112 adds `z.current=K` (tracks current dividerIndex in ref) and changes `onScrollAway` parameter name + adds `if(z.current!==null)` guard in `onRepin`
  - `FullscreenLayout`: React compiler cache size reduced from 47 to 44 slots. Removed `bottomFloat` prop entirely. `pillVisible` lambda now computes `S<m&&S<scrollHeight` instead of just `S<m`. Modal padding changed from `columns-4` to `columns-2*Bs6` and `paddingX={2}` to `paddingX={Bs6}`. Bottom slot rendering simplified (no longer memoizes SuggestionsOverlay/DialogOverlay separately).
  - `NewMessagesPill`: Cache size increased from 10 to 11. Added `useShortcutDisplay` call for scroll:bottom shortcut, displayed in pill text as `(shortcut)`.
  - `SuggestionsOverlay`: Added `noPad={true}` prop to `PromptInputFooterSuggestions`.
- **Status**: Reconstructed with v112 semantic changes. Two unresolved symbols documented as TODOs in source.
- **Unresolved symbols**:
  - `Bs6_V112` — modal padding constant (was hardcoded `2` in v88, now a module-level constant `Bs6`). Byte range: 11050620-11050625
  - `useShortcutDisplay_V112` — new hook import for NewMessagesPill shortcut display. Byte range: 11051147-11051948

### src/components/HelpV2/Commands.tsx
- **v88→v112**: jac=1.0, cos=1.0 for all decls
- **Drift**: None — all declarations match exactly
- **Status**: Copied verbatim from v88
- **Unresolved**: None

### src/components/HelpV2/General.tsx
- **v88→v112**: jac=0.571, cos=0.995
- **Drift**: Major restructure in v112:
  - Now reads `rows` from `useTerminalSize()` (new hook usage)
  - Adds compact mode when `rows < vbY` (approx 24): `paddingY` and `gap` become 0 instead of 1
  - Adds conditional `/powerup` suggestion line when not in compact mode
  - Text content wrapped in `<Box flexShrink={0}>`
  - Shortcuts section wrapped in `<Box flexDirection="column">` with `<Box flexShrink={0}>` around title
- **Status**: Reconstructed with v112 semantic changes
- **Unresolved symbols**:
  - `useTerminalSize_V112` — General now uses terminal size. The v112 minified uses `s1()` directly. Byte range: 10564182-10565120
  - `MIN_ROWS_FOR_POWERUP` (`vbY`) — threshold constant for compact mode

### src/components/HelpV2/HelpV2.tsx
- **v88→v112**: jac=0.961, cos=1.0
- **Drift**:
  - React compiler cache size increased from 44 to 47
  - Removed dead `false && antOnlyCommands.length > 0` tab branch (ant-only commands tab removed from source)
  - Title hardcoded to `` `Claude Code v${MACRO.VERSION}` `` instead of conditional `/help` vs version
  - Added `showFeedbackLine` based on `rows >= TbY` (approx 30): "Something else? Use /feedback to report bugs or request features."
  - Added `flexShrink={0}` to several `<Box marginTop={1}>` elements
  - `Tabs` title prop now only uses version string (removed conditional)
  - Version macro shows `2.1.112` with `BUILD_TIME: "2026-04-16T18:33:19Z"`
- **Status**: Reconstructed with v112 semantic changes
- **Unresolved symbols**:
  - `MACRO.VERSION` — build-time version macro. Byte range: 10567750-10567850
  - `MIN_ROWS_FOR_FEEDBACK` (`TbY`) — threshold constant for feedback line

### src/components/IdeOnboardingDialog.tsx
- **v88→v112**: jac=0.891, cos=1.0
- **Drift**:
  - "Press Enter to continue" replaced with "Press <ShortcutHint chord=\"enter\" action=\"continue\" />"
  - Otherwise identical structure
- **Status**: Reconstructed with v112 semantic changes
- **Unresolved symbols**:
  - `ShortcutHint` — v112 uses `A8` component for keyboard shortcut hint. Byte range: 5698487-5698647

### src/components/IdeStatusIndicator.tsx
- **v88→v112**: jac=1.0, cos=1.0
- **Drift**: None — all declarations match exactly
- **Status**: Copied verbatim from v88
- **Unresolved**: None

### src/components/IdleReturnDialog.tsx
- **v88→v112**: jac=0.467, cos=1.0
- **Drift**: Major semantic changes:
  - Props renamed: `idleMinutes` → `sessionAgeMinutes`, `totalInputTokens` → `estimatedTokens`
  - Title text changed from "You've been away {X} and this conversation is {Y} tokens" to "This session is {X} old and {Y} tokens."
  - Info message changed from "If this is a new task..." to "Resuming the full session will consume a substantial portion of your usage limits. We recommend resuming from a summary."
  - Options changed: `continue` → "Resume full session as-is", `clear` → "Resume from summary (recommended)" (value="compact"), `never` stays same
  - `formatIdleDuration` helper unchanged
- **Status**: Reconstructed with v112 semantic changes
- **Unresolved**: None

### src/components/InterruptedByUser.tsx
- **v88→v112**: jac=1.0, cos=1.0
- **Drift**: None — all declarations match exactly (the ant-only conditional was already `false` in v88 source)
- **Status**: Copied verbatim from v88
- **Unresolved**: None

### src/components/InvalidSettingsDialog.tsx
- **v88→v112**: jac=0.81, cos=0.999
- **Drift**: Significant changes:
  - React compiler cache size increased from 13 to 20
  - Added severity detection: `settingsErrors.some(isSevereError)` determines dialog mode
  - Two modes: "Settings Error" (has severe errors) vs "Settings Warning" (no severe errors)
  - Options reorder based on severity: Error mode shows Exit first, Warning mode shows Continue first
  - Cancel action changes based on severity: Error → onExit, Warning → onContinue
  - Message text changes based on severity
  - Uses `KA8.default.createElement(Wi8,{errors:_})` instead of `ValidationErrorsList` directly — may be a different component
- **Status**: Reconstructed with v112 semantic changes
- **Unresolved symbols**:
  - `isSevereError_V112` — v112 checks `_.some(I$A)` to determine if any errors are severe. Byte range: 12804933-12806121

### src/components/KeybindingWarnings.tsx
- **v88→v112**: Multiple decls with varying similarity. Main component: jac=0.6, cos=0.973
- **Drift**: Major restructure in v112:
  - Component now takes props `{scope, parsingErrors, warnings}` instead of reading from global cache
  - Removed `isKeybindingCustomizationEnabled()` guard and `getCachedKeybindingWarnings()` usage
  - Now renders conditionally based on `parsingErrors.length>0 || warnings.length>0`
  - Added header line with scope display: `[Failed to parse]` or `[Contains warnings]` + scope name
  - Added `Location:` line with formatted path
  - Error items now use `uK.Node` component (tree node) with `mcpErrorMetadata?.serverName` prefix
  - Warning items changed formatting: `→ suggestion` replaced with `Suggestion: {suggestion}`
  - Removed filter functions `_temp`/`_temp2` (now passed as props)
- **Status**: Reconstructed with v88 body (component was completely rewritten in v112). The v112 version is substantially different — documented as drift with TODO for full reconstruction.
- **Unresolved symbols**:
  - `K48` — scope formatter function. Byte range: 10521527-10522815
  - `rk` — path formatter function. Byte range: 10521527-10522815
  - `uK` / `uK.Node` — tree/list component for error display. Byte range: 10522815-10523129
  - `I$A` — severe error checker. Byte range: 12804933-12806121
  - `fCY` / `ZCY` — error/warning row renderers. Byte range: 10523129-10524622

### src/components/LanguagePicker.tsx
- **v88→v112**: jac=1.0, cos=1.0
- **Drift**: None — all declarations match exactly
- **Status**: Copied verbatim from v88
- **Unresolved**: None

## Cross-file observations

1. **v112 removes ant-only code paths**: HelpV2 no longer has the `ant-only` commands tab (was already dead code with `false &&`). InterruptedByUser no longer has the ant-only conditional (was already `false`).

2. **Modal padding constant extracted**: FullscreenLayout v112 uses a module-level constant `Bs6` for modal padding instead of hardcoded `2`. This suggests a design-system token extraction.

3. **New shortcut display integration**: FullscreenLayout's NewMessagesPill now shows keyboard shortcut hint next to the pill text, using a new `useShortcutDisplay` hook.

4. **Settings dialog severity modes**: InvalidSettingsDialog gained a warning-vs-error dual mode, suggesting settings validation became more nuanced (some issues are warnings, not hard errors).

5. **IdleReturnDialog repurposed**: The dialog was reworded from "idle away" to "session age" framing, with options changed from "clear/continue" to "compact/continue" — aligning with a new session compaction feature.

6. **General help responsive layout**: General.tsx now adapts to terminal height, hiding the `/powerup` promo in compact mode (small terminals).

7. **KeybindingWarnings externalized**: v112 passes errors/warnings as props instead of reading from global cache, and the component structure changed significantly to use tree nodes. This file would benefit from a second-pass reconstruction focused on the v112 prop interface.

## Lifter

kimi-for-coding
