# Chunk #16 — src/commands/plugin/ManagePlugins.tsx

**Files lifted:** 1
**Confidence:** medium — v88-baseline + targeted v112 edits; predicates and
two helper imports are TODO placeholders.

## Strategy

region.json shows 5 matched decls, all cos=1:
- 4 small decls (helpers + sub-component) at jac=1, transcribed verbatim from
  v88_src.
- 1 big decl (~28 KiB v88, ~30 KiB v112) at jac=0.846, cos=1 — localized
  drift in the `ManagePlugins` component body.

Applied the v88-baseline strategy used in chunks #86, #81, #103, #33, #125:
copy v88_src as-is and edit only the drifted regions.

## Per-decl byte ranges

| v88 range | v112 range | jac | cos | strategy |
|---|---|---|---|---|
| 10328671–10328951 | 10806867–10807147 | 1 | 1 | verbatim (`readPluginCommandFiles`) |
| 10328951–10329299 | 10807147–10807495 | 1 | 1 | verbatim (`readPluginSkillDirectories`) |
| 10329299–10332400 | 10807495–10810596 | 1 | 1 | verbatim (`PluginComponentsDisplay`) |
| 10332400–10332615 | 10810596–10810811 | 1 | 1 | verbatim (`checkIfLocalPlugin`) |
| 10332615–10332721 | 10810811–10810917 | 1 | 1 | verbatim (`filterManagedDisabledPlugins`) |
| 10332721–10360569 | 10810917–10841494 | 0.846 | 1 | targeted edits (`ManagePlugins`) |

Three boundary v88 decls have no v112 match (likely sourcemap slice artifacts
of the chunk-prologue / chunk-epilogue).

## v112 drift in `ManagePlugins` (10810917–10841494)

Lifted the following changes onto the v88_src baseline:

1. **Footer/expanded-view hook** (`bP` in v112_min). Used to switch
   `maxVisible` between the legacy fixed `8` and the dynamic `terminalRows -
   10` formula. Bound to `useExpandedView()` placeholder import.
2. **`useTerminalSize` rows**. v88 read only `columns`; v112 also
   destructures `rows` (via `Fd(size)`) for pagination height.
3. **`useSearchInput` exposes `handleKeyDown` + `handlePaste`**. v112
   destructures both and routes them through the list root's Box
   `onKeyDown`/`onPaste` instead of a global `useInput`.
4. **VisualRow stream**. The flat `filteredItems` list is now a
   `VisualRow[]` with kinds `spacer | section-header | scope-header |
   disabled-header | item`. Sectioning rules:
   - "Needs attention" — items matching `isAttentionItem` (TODO: `JFK`).
   - "Favorites" — items in `favoritePluginIds`.
   - main scope-grouped block (Project / Local / User / Enterprise / …).
   - "Show disabled (N)" toggle row + collapsed disabled section.
5. **Favorites set**. New `favoritePluginIds: Set<string>` state, seeded
   from `getSettings_DEPRECATED().favoritePlugins`, persisted via
   `saveGlobalConfig` (TODO: confirm export name — v112_min calls `d8`).
   New keybinding `plugin:favorite` (`f` fallback).
6. **`preserveSelectionRef`**. When the user toggles a favorite, the ref
   stashes `{section, id}` so the post-layout effect can re-seat selection
   on the same item even after it's moved between sections.
7. **`isFocusableRow` + `findFocusableIndex`**. `select:previous` /
   `select:next` skip past spacers and headers. Search-mode entry from the
   top of the list (selection at `0`) still falls back to `setIsSearchMode(true)`.
8. **`disabled-header` toggle**. Both `select:accept` and `plugin:toggle`
   on the disabled-header row flip `showDisabled`.
9. **`update` op outcome**. Short-circuits on `result.alreadyUpToDate` OR
   `result.skipped`, and surfaces `result.message` directly instead of
   constructing a `"X is already at the latest version (Y)."` string. The
   op now reports its own outcome (handles local-source skip, etc).
10. **`failed-plugin-details` editable scopes**. Reads
    `EDITABLE_SETTINGS_SOURCES` (`$v` in v112_min) instead of inlining the
    `['userSettings','projectSettings','localSettings']` literal.
11. **Confirm-data-cleanup input handler**. v88 used global `useInput` with
    `isActive`. v112 attaches `handleConfirmDataCleanupKey` as Box
    `onKeyDown` with `tabIndex=0 autoFocus`, scoping the y/n/esc handler to
    the dialog.
12. **List input handlers**. Same shape change: outer Box gets
    `onKeyDown={handleListKeyDown} onPaste={handleListPaste}`, replacing
    the v88 `useInput`. The j/k/space allowlist from v88 is gone — v112
    seeds search on any single printable non-space key.
13. **Empty-state Esc**. v88 hard-coded `"Esc to go back"`; v112 uses a
    real `<ConfigurableShortcutHint action="confirm:no" …>`.
14. **Help footer**. Adds `plugin:favorite` shortcut between toggle and
    accept.
15. **`getScopeLabel` hoisted**. Module-scope helper instead of a closure
    inside `.map()`.

## Unresolved / TODO

- **`isAttentionItem`** (`JFK`) — placeholder treats `failed-plugin` and
  plugins with `errorCount > 0` as needs-attention. The real predicate
  may also include pending toggles or specific plugin errors. Byte
  range ~10810917+ in v112_min.
- **`isHiddenItem`** (`Xw7`) — placeholder treats disabled plugins and
  disabled MCPs as hidden. Real predicate may differ.
- **`useExpandedView`** import path — guessed at
  `'../../hooks/useExpandedView.js'`; the real v112 hook may live elsewhere.
- **`Fd` rows extractor** — assumed identical to `useTerminalSize().rows`.
  If `Fd` does additional clamping (footer height, dynamic margins), this
  needs revisiting.
- **`saveGlobalConfig`** — guessed name for `d8` in v112_min; likely
  exported from `../../utils/settings/settings.js` already, but module
  surface should be confirmed.
- **`EDITABLE_SETTINGS_SOURCES`** — assumed export from settings module.
- **`useInput` import** is now unused on this path; left in place (audit
  baseline) to avoid noisy churn.

## Lifter

`lifter-16` — v88-baseline strategy on an oversize file (~389 KiB total
inputs). Skeleton on disk in <2 minutes; targeted edits applied
incrementally with checkpoint writes.
