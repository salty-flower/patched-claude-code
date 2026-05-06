# Chunk 14 Lift Notes

## File: `src/commands/plugin/DiscoverPlugins.tsx`

### Region match summary

| v88 decl | v112 decl | jac | cos | action |
|----------|-----------|-----|-----|--------|
| [10279459,10279617] | — | — | — | header (var init) — no v112 match |
| [10279617,10288607] | [10753149,10762986] | 0.901 | 1 | **reconstructed** |
| [10288607,10289571] | [10762986,10763949] | 1 | 1 | verbatim (DiscoverPluginsKeyHint) |
| [10289571,10291504] | [10763949,10766210] | 0.885 | 1 | **reconstructed** (EmptyStateMessage) |
| [10291504,10291514] | — | — | — | var decl (A1,lH) — no v112 match |
| [10291514,10291694] | — | — | — | footer (var init) — no v112 match |

### Semantic drift from v88 to v112

1. **Search input handling (major)**
   - v88 used `useInput` from ink for raw key capture to activate search mode.
   - v112 drops `useInput` entirely. Instead, `useSearchInput` exposes `handleKeyDown` and `handlePaste`, which are attached to the root `<Box>` via `onKeyDown`/`onPaste` props. The Box also gains `tabIndex={0}` and `autoFocus={true}`.
   - Rationale: centralizes keyboard logic in `useSearchInput` and avoids competing `useInput` hooks.

2. **Plugin installation scope gating (major)**
   - v88: `isInstalled` field used `isPluginGloballyInstalled` only. This blocked project-installed plugins from being shown in the browse UI.
   - v112: `isInstalled` uses `isPluginInstalled` (checks user, managed, OR current project scope). The targetPlugin "already installed" check still uses `isPluginGloballyInstalled` so users can add a user-scope copy of a project-installed plugin (gh-29997).

3. **Empty reason: `all-plugins-project-installed` (new case)**
   - v112 adds logic: when no uninstalled plugins remain, if ALL plugins are installed at project scope (not globally), `detectEmptyMarketplaceReason` result is overridden to `'all-plugins-project-installed'`.
   - `EmptyStateMessage` gains a 7th memo slot (was 6 in v88) for this new case.

4. **PluginOptionsFlow `depNote` (new prop)**
   - v112 `installPluginFromMarketplace` returns a `depNote` field (e.g. `" (1 dependency installed)"`).
   - The `ViewState` type gains an optional `depNote` field.
   - `PluginOptionsFlow` receives `depNote`, and success messages append it: `"Installed and configured Foo (1 dependency installed). Run /reload-plugins to apply."`

5. **Warning/error icons: `StatusIcon` component**
   - v88 used raw `figures.warning` / `figures.cross` inline.
   - v112 uses `<StatusIcon status="warning" withSpace />` / `<StatusIcon status="error" withSpace />`.
   - New import: `StatusIcon` from `../../components/design-system/StatusIcon.js`.

6. **Empty state footer: shortcut hint instead of plain text**
   - v88: plain `<Text dimColor italic>Esc to go back</Text>`.
   - v112: `<Byline><ConfigurableShortcutHint action="confirm:no" ... description="go back" /></Byline>`.

7. **Warning message formatting**
   - v112 appends `". Showing available plugins."` to warning only when `uninstalledPlugins.length > 0`; v88 always appended it.

### Symbols verified

- `isPluginInstalled` — confirmed exists in reconstructed `installedPluginsManager.ts` (v112 addition).
- `isPluginGloballyInstalled` — unchanged semantics, still checks user/managed scope only.
- `StatusIcon` — confirmed exists in reconstructed `components/design-system/StatusIcon.tsx`.
- `handleKeyDown` / `handlePaste` — confirmed exposed by `useSearchInput` in v112.

### No unresolved TODOs

All v112 semantic changes are accounted for; no `// TODO(lift)` markers needed.
