# Chunk #32 — src/components/NativeAutoUpdater.tsx, OffscreenFreeze.tsx, Onboarding.tsx, OutputStylePicker.tsx, PackageManagerAutoUpdater.tsx, Passes/Passes.tsx, PrBadge.tsx, PressEnterToContinue.tsx, PromptInput/HistorySearchInput.tsx, PromptInput/Notifications.tsx

**Files lifted:** 10
**Strategy:** v88_src baseline + v112_min diff-and-patch for drifted files

## Per-file notes

### NativeAutoUpdater.tsx (jac=0.952, cos=0.999)
- v88 baseline copied, minor drift patched.
- **v112 change:** The `checkForUpdates` callback now dispatches `onAutoUpdaterResult` via a `useAppState` setter (v112: `A((k)=>{...})`) rather than calling the prop directly. The prop `onAutoUpdaterResult` is still accepted but v112 internally reads/writes app state. Kept v88 shape since the observable behavior is identical — the prop is still plumbed from parent.
- **v112 change:** Environment guard `isAutoUpdaterDisabled()` and `MACRO.VERSION` checks preserved from v88. The minified v112 uses `Yd()` for env check and `RP()` for version compare — same semantics.
- **TODO:** `useAppState` dispatch pattern for autoUpdaterResult could be refined when AppState hook is lifted.

### OffscreenFreeze.tsx (jac=1, cos=1)
- Verbatim copy from v88. No drift.

### Onboarding.tsx (jac=0.92, cos=1)
- v88 baseline copied with minor v112 adjustments.
- **v112 change:** `exitState` no longer takes a callback argument to `useExitOnCtrlCDWithKeybindings()` — called bare (v112: `$3()` vs v88: `o5(()=>...)`). The callback is now handled by the `onDone` flow at the component level.
- **v112 change:** Terminal setup step uses `<ShortcutHint>` components (v112: `A8`/`z1`) instead of plain text for "Enter to confirm · Esc to skip". Kept as `<ShortcutHint>` placeholder.
- **v112 change:** `SkippableStep` function uses `s(4)` memo cache in v112 (vs `z6(4)` in v88) — same React Compiler output, different minified helper name. No semantic change.
- **TODO:** `ShortcutHint` component name may need alignment with actual v112 component exports.

### OutputStylePicker.tsx (jac=1, cos=1)
- Verbatim copy from v88. No drift across all three decls.

### PackageManagerAutoUpdater.tsx (jac=0.833, cos=1)
- v88 baseline copied with v112 structural changes.
- **v112 change:** Props type simplified — `onAutoUpdaterResult` and `autoUpdaterResult` props removed (no longer needed at this component level). Only `verbose` remains from the original Props.
- **v112 change:** Homebrew-specific formula resolution added. v112 tracks `homebrewFormula` state and uses it in the update command. The `getLatestVersionFromGcs` call is branched for homebrew vs other package managers.
- **v112 change:** `checkForUpdates` is no longer wrapped in `React.useCallback` with empty deps — v112 uses raw memo cache via compiler. The effect + interval wiring is identical.
- **TODO:** `Dp8()` (homebrew formula resolver) and `Mp8()` (homebrew-specific version fetch) are unresolved symbols from v112 minified. Marked as TODO in the reconstructed source.

### Passes/Passes.tsx (jac=0.78-0.786, cos=0.997-0.999)
- v88 baseline copied with v112 UI changes.
- **v112 change:** `useInput` for Enter-to-copy replaced with `onKeyDown` handler on the container `Box` (v112 adds `tabIndex={0} autoFocus={true} onKeyDown={M}`). The `useInput` hook is still present in the reconstructed source for behavioral equivalence.
- **v112 change:** Footer hint text uses `<ShortcutHint>` components (v112: `A8`/`z1`) instead of plain "Enter to copy link · Esc to cancel" text. Applied in loading, unavailable, and main states.
- **v112 change:** `useKeybinding` call changed from `G1("confirm:no",X,{context:"Confirmation"})` to `P1("confirm:no",M,{context:"Confirmation"})` — same semantics, different minified names.
- **TODO:** `A8`/`z1` ShortcutHint component names need verification against actual v112 exports.

### PrBadge.tsx (jac=1, cos=1)
- Verbatim copy from v88. No drift across both decls.

### PressEnterToContinue.tsx (jac=1, cos=1)
- Verbatim copy from v88. No drift.

### PromptInput/HistorySearchInput.tsx (jac=1, cos=1)
- Verbatim copy from v88. No drift.

### PromptInput/Notifications.tsx (jac=0.857-0.878, cos=0.954-0.998)
- Most complex file in chunk. v88 baseline heavily reshaped for v112.
- **Major v112 changes:**
  1. **Props removed:** `autoUpdaterResult`, `onAutoUpdaterResult`, `isNarrow` dropped from Props. `autoUpdaterResult` is now read via `useAppState(s=>s.autoUpdaterResult)` internally. `onAutoUpdaterResult` is no longer needed (auto-updater state is app-state managed). `isNarrow` is gone — alignItems is hardcoded to `"flex-end"`.
  2. **tokenUsage computation:** v88 uses compiler-memoized `getMessagesAfterCompactBoundary` + `tokenCountFromLastAPIResponse`. v112 uses `useMemo(()=>{const B=H2(Y);return sI(B)},[Y])` pattern — same semantics, different helper names (`H2` = `getMessagesAfterCompactBoundary`, `sI` = `tokenCountFromLastAPIResponse`).
  3. **NotificationContent restructured:** v112 moves `notifications.current` rendering to the **end** of the JSX (after MemoryUsageIndicator and SandboxPromptFooterHint), whereas v88 renders it near the top (after IdeStatusIndicator). This is a visible ordering change.
  4. **Token warning notification:** v112 adds a new `useEffect` that manages a `"token-warning"` notification keyed on `isShowingCompactMessage && !isBriefOnly`. This was previously inline JSX (`<TokenWarning/>`) in v88; v112 now pushes it through the notification system.
  5. **Pro-tier apiKeyHelper polling:** v112 adds a new `useEffect` gated on `getSubscriptionType()==="pro" && feature("tengu_amber_swift", false)` that polls apiKeyHelper elapsed time every 30s. This is distinct from the legacy apiKeyHelper polling (which is config-gated).
  6. **External editor hint:** v112 computes `shouldShowExternalEditorHint` using `XL()` (getExternalEditor) and shows hint via notification system. Same logic as v88 but with v112 helper names.
  7. **Env hook notifier:** v112 uses `Fi1((B,m)=>{...})` / `Fi1(null)` pattern for setEnvHookNotifier — same as v88's `_o1` pattern.
  8. **Compiler cache size:** v88 uses `_c(34)`; v112 uses `s(10)` for main Notifications and separate memo for NotificationContent. The v112 compiler output is more aggressively split.
- **TODOs:**
  - `useAppState` selector for `autoUpdaterResult` — verify selector shape when AppState is lifted.
  - `A55` (TokenWarning JSX in notification) — verify component name.
  - `oX6` / `n5A` — v112 splits Notifications into wrapper + content; names are minified.
  - `r5A` / `Ri()` — pro-tier apiKeyHelper helpers unresolved.
  - `Wm6` / `Ws8` / `h96` / `MK()` / `XL()` / `u8()` / `sQ()` / `oR1()` / `C5()` / `oE()` / `FW6()` / `tK5` / `z55` / `w55` / `l5A` — all minified helper names from v112.

## Cross-file observations

- `AutoUpdaterWrapper` in Notifications no longer receives `onAutoUpdaterResult` prop (v112 internalizes it). When `AutoUpdaterWrapper` is lifted, its Props should reflect this.
- `PackageManagerAutoUpdater` lost most of its Props — only `verbose` remains. This aligns with chunk-33's observation that auto-updater state moved to app state.
- `NativeAutoUpdater` still accepts `onAutoUpdaterResult` prop but v112 internally dispatches to app state. The prop may be dead code in v112.
- Multiple files use `<ShortcutHint>` (v112: `A8`/`z1`) for chord display — this component appears to be a new v112 addition replacing plain text hints.

## Unresolved symbols (TODOs)

| Symbol | File | Context |
|--------|------|---------|
| `useAppState(s=>s.autoUpdaterResult)` | Notifications.tsx | AppState selector pattern |
| `A55` | Notifications.tsx | TokenWarning JSX in notification |
| `r5A`, `Ri()` | Notifications.tsx | Pro-tier apiKeyHelper helpers |
| `Dp8()`, `Mp8()` | PackageManagerAutoUpdater.tsx | Homebrew formula/version resolution |
| `ShortcutHint` | Onboarding.tsx, Passes.tsx | Chord display component (v112: A8/z1) |
| `useInputState_TODO_v112` | (from chunk-33) | Related — input state hook |

## Lifter

`lifter-32` (kimi-for-coding, single-shot, v112-lift). Strategy: v88_src copied wholesale for jac=cos=1 files; diff-and-patch for drifted files based on v112_min structural changes visible in the minified output.
