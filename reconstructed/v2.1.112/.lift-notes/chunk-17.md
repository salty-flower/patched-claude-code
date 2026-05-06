# Chunk 17 Lift Notes

## src/commands/plugin/PluginErrors.tsx
- **Drift**: Reconstructed (jac=0.919/0.908, cos=1/0.999)
- **Changes in v112**:
  - Added `path-traversal` case to both `formatErrorMessage` and `getErrorGuidance`
  - Added `dependency-version-unsatisfied` case to both functions
  - `getErrorGuidance` exhaustiveness: v88 used `const _exhaustive: never = error; return null;`, v112 uses `let K: never = error; return null;` (same semantics, kept v88 style)

## src/commands/plugin/PluginOptionsDialog.tsx
- **Drift**: Reconstructed (jac=0.667, cos=1)
- **Changes in v112**:
  - Input handling changed from `useInput` hook to `onKeyDown`/`onPaste` handlers on a focusable `<Box>`
  - Added `tabIndex={0}`, `autoFocus={true}`, `onKeyDown`, `onPaste` props to the input Box
  - Key handling now explicitly checks `key === "return"`, `key === "tab"`, `key === "backspace"`/`"delete"` in onKeyDown
  - Paste handler added: takes first line of pasted text, trims it
  - Removed `useInput` call and `useKeybindings` for confirm:nextField/confirm:yes (replaced by onKeyDown)
  - Kept `useKeybinding("confirm:no", onCancel, {context: "Settings"})` for cancel behavior

## src/commands/plugin/PluginOptionsFlow.tsx
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/plugin/PluginTrustWarning.tsx
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/plugin/UnifiedInstalledCell.tsx
- **Drift**: Reconstructed (jac=0.809, cos=1)
- **Changes in v112**:
  - `needs-auth` MCP status: v88 showed `ConfigurableShortcutHint` component as statusText, v112 shows plain string `"Enter to auth"`
  - The v112 minified code confirms `O="Enter to auth"` directly instead of creating a ConfigurableShortcutHint element

## src/commands/plugin/ValidatePlugin.tsx
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/plugin/index.tsx
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/plugin/parseArgs.ts
- **Drift**: Reconstructed (jac=0.96, cos=0.998)
- **Changes in v112**:
  - `@` parsing in install command: changed from `target.split('@')` to `target.lastIndexOf('@')` with `slice()` to handle scoped npm packages like `@scope/name@marketplace`
  - Added `!target.startsWith('@')` check before treating as marketplace URL/path (so scoped npm packages are treated as plugin names)

## src/commands/plugin/plugin.tsx
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/plugin/pluginDetailsHelpers.tsx
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/plugin/usePagination.ts
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/privacy-settings/index.ts
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/privacy-settings/privacy-settings.tsx
- **Drift**: Copy verbatim (jac=1, cos=1)

## src/commands/rate-limit-options/index.ts
- **Drift**: Reconstructed (jac=1, cos=0.987)
- **Changes in v112**:
  - `isEnabled` changed from `() => { if (!isClaudeAISubscriber()) return false; return true; }` to `() => isClaudeCodeProSubscriber() || false`
  - Import changed from `isClaudeAISubscriber` to `isClaudeCodeProSubscriber`
