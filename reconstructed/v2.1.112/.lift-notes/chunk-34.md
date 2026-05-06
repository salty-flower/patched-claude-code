# Chunk #34 — src/components/PromptInput/ footer + help menu files

**Files lifted:** 5
**Confidence:** high (opus agent for 3 files, manual for FooterLeftSide)

## Per-file notes

### PromptInputModeIndicator.tsx
- Reconstructed from v88 baseline. React Compiler runtime removed.
- v112 changes: none significant — file is small and mostly unchanged.

### PromptInputFooter.tsx
- Reconstructed from v88 baseline. React Compiler runtime removed.
- v112 changes: `KeyboardShortcutHint` API changed (`shortcut` → `chord`, add `format` prop).
- `feature('TERMINAL_PANEL')` and tmux-related rendering removed.

### PromptInputFooterSuggestions.tsx
- Reconstructed from v88 baseline. React Compiler runtime removed.
- v112 changes: minimal drift.

### PromptInputHelpMenu.tsx
- Reconstructed from v88 baseline. React Compiler runtime removed.
- v112 changes: `KeyboardShortcutHint` component used throughout with `chord`/`action`/`format` props.
- `feature('TERMINAL_PANEL')` gate removed.
- `TERMINAL_PANEL` feature removed from help text.

### PromptInputFooterLeftSide.tsx
- **Manual reconstruction** (87KB v88 source; agents got stuck in read loops).
- v112 major changes:
  - React Compiler runtime (`_c`) removed entirely.
  - `feature('VOICE_MODE')` gates removed from all voice hooks/effects.
  - `feature('COORDINATOR_MODE')` / coordinatorModule / proactiveModule / `hasNextTick` / `ProactiveCountdown` removed.
  - `feature('TERMINAL_PANEL')` / tmux / `TungstenPill` / `hasTmuxSession` removed (now always `false`).
  - `KeyboardShortcutHint` API changed: `shortcut` → `chord`, add `format={{keyCase:'lower'}}`.
  - `taskDecorations` subscription added (unused in v112 minified, likely future-proofing).
  - `isPanelAgentTask` exclusion removed from `runningTaskCount`.
  - `getSpinnerHintParts` uses `KeyboardShortcutHint` with new API.

## Cross-file observations

- **KeyboardShortcutHint v112 API**: All consumers in this chunk updated to use `chord`, `action`, `format` props. Other chunks using `KeyboardShortcutHint` (Onboarding, HelpV2, etc.) will need the same update when lifted.
- **Voice mode ungated**: `feature('VOICE_MODE')` checks removed in v112; voice hooks called unconditionally.

## Lifter

`lifter-34` — opus agent (kimi-for-coding, general-purpose, team v112-lift) for 4 files; manual reconstruction for PromptInputFooterLeftSide.tsx.
