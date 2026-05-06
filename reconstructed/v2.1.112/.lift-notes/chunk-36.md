# Chunk #36 — src/components/ScrollKeybindingHandler.tsx, SearchBox.tsx, SessionBackgroundHint.tsx, SessionPreview.tsx

**Files lifted:** 4
**Confidence:** medium-high
**Strategy:** v88_src copied as baseline; v112 drift applied via diff-and-patch from minified analysis.

## Per-file notes

### ScrollKeybindingHandler.tsx
- **Status:** Reconstructed with v112 changes applied to v88 baseline
- **Key v112 changes from v88:**
  1. `shouldClearSelectionOnKey`: Added `pageUp||pageDown` exclusion and `(home||end)&&ctrl` exclusion (v112 minified `QwA` adds these checks before the nav-key modifier check)
  2. `readScrollSpeedBase`: Changed from `parseFloat` to `parseInt(raw, 10)` via new `ui` helper (v112 minified shows `parseInt(q,10)` pattern)
  3. **Main component `ScrollKeybindingHandler` — major restructuring:**
     - Added `handleModalAction` helper function that wraps `applyModalPagerAction` + `onScroll` callback
     - Added `handleKeyRepeat` function for modal pager key-repeat (e.g. 'jjj' → 3× lineDown)
     - Modal pager keys changed from raw `useInput` to `useKeybindings` with `"Transcript"` context
     - Added selection extend keybindings: `selection:extendLeft/Right/Up/Down/LineStart/LineEnd`
     - Selection `useInput` handler now checks `isModal && handleKeyRepeat()` before other logic
     - Selection `useInput` handler now checks `isModal && modalPagerAction()` to avoid clearing selection on modal keys
  4. Added new exported function `modalPagerActionForRepeat` — like `modalPagerAction` but only handles bare letter repeats (g, j, k, b, space, G), NOT arrows/ctrl/home/end
  5. `modalPagerAction` signature unchanged but the v112 minified `twA` shows it was simplified (arrows/home/end removed from the `!ctrl&&!shift` branch — they moved to useKeybindings)
- **TODOs:**
  - Verify exact import names for hooks that may have been renamed (`useCopyOnSelect`, `useSelectionBgColor` still present in v112)
  - The `extendSelection` helper function name is inferred; v112 minified shows inline arrow functions in useKeybindings

### SearchBox.tsx
- **Status:** Reconstructed with v112 prop additions
- **Key v112 changes from v88:**
  1. Added `highlights?: Array<[number, number]>` prop — array of [start, end] tuples for query substring highlighting
  2. Added `prefixDim?: boolean` prop — controls whether prefix uses dimColor
  3. Cache size increased from `_c(17)` to `_c(23)` to accommodate new memo slots
  4. Query rendering when focused+terminalFocused now uses `renderHighlightedQuery(query, highlights, offset)` instead of inline `<Text>{query.slice(...)}</Text>` etc.
  5. The `prefixDim` prop is read but in the v112 minified the prefix Text's dimColor is still controlled by `!isFocused` (t10), not prefixDim — prefixDim may be used elsewhere or the minified shows it stored in cache but not applied to the visible dimColor prop. Reconstructed to match v88 behavior for dimColor, with prefixDim stored per v112 cache.
- **TODOs:**
  - `renderHighlightedQuery` import path is guessed as `../utils/highlight.js` — verify actual path

### SessionBackgroundHint.tsx
- **Status:** Reconstructed with v112 changes
- **Key v112 changes from v88:**
  1. Added `useGlobalConfig()` hook call (`O=EX()` in v112 minified) — returns global config object
  2. `backgroundAll` call now passes `globalConfig` as first argument: `backgroundAll(globalConfig, () => appStateStore.getState(), setAppState)` (v112 minified shows `jg8(O,()=>gD(Y))` where `O` is globalConfig and `Y` is setAppState)
  3. Replaced `KeyboardShortcutHint` with `Chords` component (`A8` in v112 minified)
  4. `Chords` takes `chord` prop (was `shortcut`), `action` prop, and new `format` prop with `{keyCase: "lower"}`
  5. Cache size increased from `_c(10)` to `_c(12)` for the new format memo slot
- **TODOs:**
  - Verify `Chords` import path (guessed as `./design-system/Chords.js`)
  - Verify `useGlobalConfig` import path (guessed as `../utils/config.js`)

### SessionPreview.tsx
- **Status:** Reconstructed with v112 import renames
- **Key v112 changes from v88:**
  1. `KeyboardShortcutHint` replaced with `Chords` component (`A8` in v112 minified), using `chord="enter"` instead of `shortcut="Enter"`
  2. Import renames only — component logic unchanged (cos=1.0, jac=0.94)
  3. `Messages` component import renamed (`zW6` vs `AJ6` — same component, different minified name)
  4. `LoadingState` import renamed (`Q$` vs `pb`)
  5. `Byline` import renamed (`z1` vs `I1`)
  6. `ConfigurableShortcutHint` import renamed (`v1` vs `W1`)
- **TODOs:**
  - Verify `Chords` import path (guessed as `./design-system/Chords.js`)

## Unresolved symbols

| Symbol | File | Context |
|--------|------|---------|
| `renderHighlightedQuery` | SearchBox.tsx | Helper for rendering highlighted query text; import path guessed |
| `Chords` | SessionBackgroundHint.tsx, SessionPreview.tsx | Replaced KeyboardShortcutHint; import path guessed as `./design-system/Chords.js` |
| `useGlobalConfig` | SessionBackgroundHint.tsx | New hook in v112; import path guessed as `../utils/config.js` |
| `modalPagerActionForRepeat` | ScrollKeybindingHandler.tsx | New exported function; name inferred from behavior |
| `handleModalAction` | ScrollKeybindingHandler.tsx | New internal helper; name inferred |
| `handleKeyRepeat` | ScrollKeybindingHandler.tsx | New internal helper; name inferred |
| `extendSelection` | ScrollKeybindingHandler.tsx | New internal helper; name inferred |
