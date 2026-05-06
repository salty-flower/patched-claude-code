# Chunk 35 Lift Notes

## Files (14)

### PromptInput components/hooks/utils (10 files)

1. **PromptInputQueuedCommands.tsx** — Mostly verbatim (jac=1,cos=1). Drift: v112 removes the `feature('KAIROS') || feature('KAIROS_BRIEF')` gate around `useBriefLayout`; it now unconditionally calls `useAppState(s => s.isBriefOnly)`. The v112 minified shows `useBriefLayout` assigned directly from `useAppState(...)` without the ternary. Reconstructed with the feature gate removed to match v112 behavior.

2. **PromptInputStashNotice.tsx** — Verbatim (jac=1,cos=1). No drift.

3. **SandboxPromptFooterHint.tsx** — Verbatim (jac=1,cos=1). No drift.

4. **VoiceIndicator.tsx** — Slight drift (jac=0.875). v112 minified removes the `feature("VOICE_MODE")` gates in both `VoiceIndicator` and `VoiceWarmupHint`. The `useSettings` import path and `useAnimationFrame` from ink are preserved. Reconstructed with feature gates removed.

5. **inputModes.ts** — Verbatim (jac=1,cos=1) for the 3 functions present in v112. Note: v112 is missing the `isInputModeCharacter` export that v88 had (only 3 decls in v112 min vs 4 in v88). Kept all 4 functions from v88 source since the 4th may have been inlined or tree-shaken in v112 but the logic is trivial and likely still correct.

6. **inputPaste.ts** — Verbatim (jac=1,cos=1). No drift.

7. **useMaybeTruncateInput.ts** — Verbatim (jac=1,cos=1). No drift.

8. **usePromptInputPlaceholder.ts** — Slight drift (jac=0.889). v112 minified removes the `!proactiveModule?.isProactiveActive()` condition from the placeholder logic. The v112 code shows the example command branch as `if (K<1&&Y)return V95()` without the proactive check. Reconstructed with the proactive check removed to match v112.

9. **useShowFastIconHint.ts** — Verbatim (jac=1,cos=1). No drift.

10. **useSwarmBanner.ts** — Verbatim (jac=1,cos=1). No drift.

11. **utils.ts** — Significant drift in `isNonSpacePrintable` (jac=0.429, cos=0.986). v112 completely rewrote this function. The v88 version checks individual key flags (ctrl, meta, escape, return, etc.) and regex tests input. The v112 version checks `wheelUp`, `wheelDown`, `pageUp`, `pageDown`, and various shift/meta/super combinations with arrow/home/end keys. Reconstructed from v112 minified logic.
   - `isVimModeEnabled` and `getNewlineInstructions` are verbatim.

### Other components (3 files)

12. **RemoteEnvironmentDialog.tsx** — Mostly verbatim (jac=0.914). Minor drift: v112 uses `LoadingState` component instead of inline spinner, and `Select` import path may differ. Reconstructed from v88 with component names preserved; v112 minified confirms same structure.

13. **ResumeTask.tsx** — Notable drift (jac=0.841). v112 changes:
   - Uses `LoadingState` component instead of `Spinner` + `Text` for loading state
   - Adds `tabIndex={0} autoFocus onKeyDown={...}` props to all top-level `Box` containers
   - `Select` imported from `./CustomSelect/select.js` instead of `./CustomSelect/index.js`
   - Keyboard hints use `chord` prop arrays instead of `shortcut` string for up/down
   - Error guidance helper functions unchanged
   - Reconstructed to match v112 minified structure.

14. **SandboxViolationExpandedView.tsx** — Verbatim (jac=1,cos=1). No drift.

## Unresolved Symbols / TODOs

- `inputModes.ts`: `isInputModeCharacter` may be dead code in v112 (not present in v112 minified). Left as exported function since it was in v88.
- `ResumeTask.tsx`: `onKeyDown` handler on Box elements — v112 minified shows a `V(S)` function handling keyboard events, but the exact handler body is mangled. Used empty `() => {}` placeholder with TODO comment in source; actual handler logic would need closer inspection of v112 bundle.
- `RemoteEnvironmentDialog.tsx`: `_temp` helper name in v88 source maps to anonymous in v112; kept named function for readability.

## General Notes

- v112 continues the trend of removing `feature()` gates for features that have shipped (VOICE_MODE, KAIROS brief layout, proactive placeholder suppression).
- v112 uses `LoadingState` design-system component more consistently (RemoteEnvironmentDialog, ResumeTask).
- v112 adds `tabIndex/autoFocus/onKeyDown` accessibility/interaction props to several dialog Box containers.
