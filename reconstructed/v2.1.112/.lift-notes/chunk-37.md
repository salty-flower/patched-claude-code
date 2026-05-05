# Chunk #37 — src/components/Settings/Config.tsx

**Files lifted:** 1
**Confidence:** medium
**Strategy:** v88-baseline. The giant `Config` decl in v112 has cos=1.0 vs v88
(same algorithm) but jac=0.893 — a dozen localized changes. v88 source
copied as the structural base, with v112 deltas patched inline and flagged
with `// v112:` comments and `// TODO(lift v112)` markers for unresolved
upstream symbols.

## Per-file notes

### Config.tsx
- bytes out: ~38 KiB
- decls in region.json: 6 v88 decls; 5 with v112 matches.
- decls reconstructed:
  - `Config` (giant, jac=0.893 cos=1.0) — patched in place; see drift list below.
  - `teammateModelDisplayString` (jac=cos=1) — verbatim.
  - `THEME_LABELS` (jac=cos=1) — verbatim.
  - `NotifChannelLabel` (jac=cos=1) — verbatim.
- decls skipped:
  - First v88 decl `[9977866, 9978057]` (jac=0.75 cos=0.994) is an IIFE
    boundary artifact — the bundle's module-init wrapper that materializes a
    keyboard-key Set. v112 added `"clear"` and `"enter"` to the set; this lives
    in a sibling module's emit, not Config.tsx. Documented and skipped.
  - v88 decl `[10006122, 10006136]` (14 bytes, no v112 match) is a
    type-only / boundary artifact that has no JS emit.

### Drift inventory (v88 → v112) inside `Config`

Each entry is patched in the lifted source with a `// v112:` marker. Sites
with no clean upstream-symbol resolution carry `// TODO(lift v112)`.

| # | Change | Location in lifted file |
| --- | --- | --- |
| 1 | `useTerminalSize()` now also returns `columns`; new `labelColumnWidth = Math.min(44, Math.max(14, columns - 16))` replaces the hard-coded `width={44}` later in the JSX. | top of `Config` body |
| 2 | New `awaySummaryEnabled` AppState field (read via `useAppState`) and "Session recap" toggle gated on `tengu_sedge_lantern` (default `true`). Persisted via `updateSettingsForSource('userSettings', {awaySummaryEnabled: ...?undefined:false})` and reverted via `initialAppState.awaySummaryEnabled`. | three sites: read, list entry, snapshot |
| 3 | `showAutoInDefaultModePicker` drops the `feature('TRANSCRIPT_CLASSIFIER')` outer gate — now just `hasAutoModeOptInAnySource() \|\| getAutoModeEnabledState() === 'enabled'`. | top of body |
| 4 | `showDefaultViewPicker` drops the `feature('KAIROS') \|\| feature('KAIROS_BRIEF')` gate — calls `BriefTool.isBriefEntitled()` unconditionally. | top of body |
| 5 | `useSearchInput` return now also yields `handleKeyDown` and `handlePaste`; outer Box accepts `onPaste={searchHandlePaste}` and the inner `handleKeyDown` delegates `searchHandleKeyDown(e)` first when in search mode. | search-input destructure + outer Box + handleKeyDown |
| 6 | Speculation toggle (`'external' === 'ant'` ant-only block) replaced with `...[]`. | settingsItems list |
| 7 | New `autoScrollEnabled` toggle alongside `copyOnSelect` (gated on `isFullscreenEnvEnabled()`). Tracked in handleSaveAndClose summary. | settingsItems list + handleSaveAndClose |
| 8 | `notifChannel` label hard-coded to `'Local notifications'` (KAIROS gate dropped). | settingsItems list |
| 9 | Push-notification block (`taskCompleteNotifEnabled`, `inputNeededNotifEnabled`, `agentPushNotifEnabled`) replaced with a two-entry block: `inputNeededNotifEnabled` (gated on `dI4()` ≈ `tengu_push_notif_input_needed`) and `agentPushNotifEnabled`, both backed by `pendingPushSettingsRef` for revert. **TODO(lift v112)**: real predicate names — `I18`/`o7`/`dI4`/`zO7`/`LxK`. The toggle block runs only when `(KAIROS) && !isRunningOnHomespace() && oauth?.accessToken` (best-effort fallback uses `feature('KAIROS')` plus `!isRunningOnHomespace()`). | settingsItems list |
| 10 | New `externalEditorContext` boolean toggle ("Show last response in external editor"), persisted to global config. | settingsItems list |
| 11 | `defaultView` label shortened from `"What you see by default"` to `"Default view"`. | settingsItems list |
| 12 | `copyFullResponse` label shortened from `"Always copy full response (skip /copy picker)"` to `"Skip the /copy picker"`. | settingsItems list |
| 13 | `useAutoModeDuringPlan` toggle no longer wrapped in `feature('TRANSCRIPT_CLASSIFIER')` — uses `showAutoInDefaultModePicker` only. | settingsItems list |
| 14 | `defaultPermissionMode` `allModes` is unconditional `PERMISSION_MODES` (the TRANSCRIPT_CLASSIFIER gate moved into the `excluded` push). | settingsItems list |
| 15 | `revertChanges` userSettings block always restores `useAutoModeDuringPlan` and `awaySummaryEnabled` (no feature gate). It also wraps `saveGlobalConfig(() => initialConfig.current)` to splice in `pendingPushSettingsRef` toggles so push-notif edits survive revert. | revertChanges callback |
| 16 | `revertChanges` setAppState block restores `awaySummaryEnabled` from `initialAppState`. | revertChanges callback |
| 17 | A post-mount `React.useEffect(() => setGlobalConfig(getGlobalConfig()), [])` re-syncs once at mount (reflects `kxK` settle helper in v112_min). **TODO(lift v112)**: confirm helper name. | top of body |
| 18 | `handleKeyDown` removes the `e.key === 'wheeldown'` clause and the `j/k//` carve-out — those are subsumed by `useKeybindings` `stopImmediatePropagation`. | handleKeyDown callback |
| 19 | List rendering layout: each row uses `<Box width={labelColumnWidth} flexShrink={0} marginRight={1}>` for the label and `<Box flexGrow={1} minWidth={0}>` for the value, both with `wrap="truncate-end"` Texts (v88 had a fixed `width={44}` and no truncate). The thinking-warning moved from inline-after-toggle to a paddingLeft=2 Box below the row. | render JSX |
| 20 | `KeyboardShortcutHint` props in v112 use `chord={...}` (not `shortcut={...}`); arrays like `chord={["left","right","tab"]}` carry a `format={{keyCase:"lower"}}` decoration. v112_min's `A8` calls confirm this. | submenu Bylines + bottom Bylines |
| 21 | Push-notification sub-label component (`PhY` in v112_min) rendered after each push row. **TODO(lift v112)**: identify the component — likely a small `<Text dimColor>` with auth/help copy. Placeholder `<PushNotifSubLabel/>` returns `null`. | render JSX |

### Unresolved / TODO (in source)

- `kxK` settle helper at top of body — currently a no-op `setGlobalConfig(getGlobalConfig())`.
- `LxK` flushPendingPushNotificationSettings — left as a comment-only TODO inside `revertChanges`.
- `zO7` flush helper inside `inputNeededNotifEnabled` / `agentPushNotifEnabled` onChange — comment-only TODO.
- `dI4` predicate gating the input-needed entry — fallback to `getFeatureValue_CACHED_MAY_BE_STALE('tengu_push_notif_input_needed', false)`.
- `I18` / `o7` predicates around the entire push-notification block — fallback to `feature('KAIROS') || feature('KAIROS_PUSH_NOTIFICATION')` plus `oauth?.accessToken` shape.
- `PhY` component — placeholder `PushNotifSubLabel` returns `null`.
- `MACRO` global — declared as ambient at end of file. v112 inlines the literal at build time; the symbol is preserved for symmetry with v88.

### Cross-file observations

- `useSearchInput` (chunk currently lifted in `reconstructed/v2.1.112/src/hooks/`?) returns more fields in v112: action items for the hooks file include extending its type signature with `handleKeyDown` and `handlePaste`.
- `useTerminalSize` returns `{rows, columns}` in v112 — already used elsewhere by chunks not yet processed; no change needed there if the hook already exposes both.
- The `KeyboardShortcutHint` API change (`shortcut` → `chord` + optional `format`) is global and will surface in every other component using that primitive.
- Push notifications: v112 introduces a "pending diff + flush on revert" pattern that the rest of the bundle's settings handlers may now also use.

## Lifter

`lifter-37` (opus, single-shot). Strategy: chunk-125-style v88-baseline lift,
because `Config` carries cos=1.0 (same algorithm) and only ~12 localized
edits — copying the v88 emit and patching the diff is more reliable than
hand-disambiguating 27 KiB of minified output. Drift inventory above is
the canonical follow-up list.
