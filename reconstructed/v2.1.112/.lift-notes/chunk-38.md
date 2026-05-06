# Chunk 38 Lift Notes

## Files (11 total)

### Verbatim from v88 (jac=1, cos=1)

| File | Notes |
|------|-------|
| `src/components/Spinner/ShimmerChar.tsx` | No semantic changes; only minified variable names differ |
| `src/components/Spinner/SpinnerGlyph.tsx` | No semantic changes |
| `src/components/Spinner/useShimmerAnimation.ts` | No semantic changes |
| `src/components/Spinner/useStalledAnimation.ts` | No semantic changes |

### Drifted — diff-and-patch applied

| File | jac | cos | Key v112 Changes |
|------|-----|-----|------------------|
| `src/components/Spinner/utils.ts` | 0.400 | 0.615 | Gutted: only `toRGBColor` remains. `getDefaultCharacters`, `interpolateColor`, `parseRGB`, `hueToRgb` moved to other modules (bundler restructured). Added `isSupportedPlatform` (darwin or win32+x64). |
| `src/components/Settings/Settings.tsx` | 0.938 | 1.000 | New "Stats" tab (`<Tab key="stats"><Stats onClose={onClose} /></Tab>`). Gates tab now unconditionally empty (feature flag removed). Escape handler excludes Stats tab (`selectedTab !== "Stats"`). Cache size 25 → 28. |
| `src/components/Settings/Status.tsx` | — | — | Uses `Wn` (Table) component with `box="plain"` and `columns` prop instead of manual Box/Text mapping. `D4` component with `status="warning"` instead of `figures.warning`. "System Diagnostics" → "System diagnostics" (lowercase d). Cache size 20→21. Primary section has `...[]` (removed account/API provider properties spread). Added `renderPropertyRow` and `flattenProperties` helper stubs (Table rendering helpers). |
| `src/components/ShowInIDEPrompt.tsx` | 0.850 | 1.000 | Cache size 36→41. Uses `A8` (ConfigurableShortcutHint) components for keyboard hints: `<A8 chord="escape" action="cancel" />` and `<A8 chord="tab" action="amend" />` instead of plain text "Esc to cancel" / "Tab to amend". |
| `src/components/Spinner/SpinnerAnimationRow.tsx` | 0.875 | 1.000 | Stall suppression condition expanded from `hasActiveTools \|\| leaderIsIdle` to `hasActiveTools \|\| leaderIsIdle \|\| mode === 'thinking'`. Thinking shimmer constants inlined from former `ThinkingShimmerText` component to reuse the 50ms animation clock. |
| `src/components/Spinner/TeammateSpinnerLine.tsx` | 0.673 | 0.999 | Inline `renderStatus()` function extracted to separate component (`f8Y` in bundle; definition not found in extracted chunks — likely in another module). "enter to view" plain text replaced with `<ConfigurableShortcutHint chord="enter" action="view" format={{keyCase: "lower"}} />`. Tool description split uses `oY` helper (split-first-line) instead of `.split('\n')[0]`. No React compiler cache (same as v88). |
| `src/components/Spinner/TeammateSpinnerTree.tsx` | 0.774 | 1.000 | "enter to view" plain text → `<ConfigurableShortcutHint chord="enter" action="view" format={{keyCase: "lower"}} />`. "enter to collapse" plain text → `<ConfigurableShortcutHint chord="enter" action="collapse" format={{keyCase: "lower"}} />`. Cache sizes unchanged (61 for main, 18 for HideRow). `HideRow` component renamed from `bgz` → `V8Y` in bundle. |

## Unresolved Symbols / TODOs

- `TeammateSpinnerLine.tsx`: `renderStatus` was extracted to a separate component in v112 (`f8Y` in minified bundle). The component definition was not found in any extracted chunk — reconstructed with inline function and TODO comment.
- `TeammateSpinnerLine.tsx`: `splitFirstLine` helper (`oY` in bundle) — exact export name unconfirmed; stubbed with `.split('\n')[0]`.
- `Status.tsx`: `Wn` (Table component), `D4` (warning status component) — exact source paths unknown.
- `Settings.tsx`: `Stats` component import path — referenced as `DuK` in bundle notes.

## Bundler Name Mapping (v112)

| Symbol | Likely Source |
|--------|---------------|
| `A8` | `ConfigurableShortcutHint` |
| `Wn` | Table component |
| `D4` | Warning/status indicator component |
| `f8Y` | Extracted `TeammateStatus` component (from `renderStatus`) |
| `V8Y` | `HideRow` component |
| `oY` | `splitFirstLine` helper |
| `g48` | `TEAMMATE_SELECT_HINT` const |
