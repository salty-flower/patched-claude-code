# Chunk 21 Lift Notes

## Summary

10 files reconstructed for v2.1.112. 3 files copied verbatim (jac=1,cos=1), 7 files reconstructed with semantic changes.

## Per-File Drift

### BashModeProgress.tsx — VERBATIM
- jac=1, cos=1. No semantic changes. Copied verbatim from v88.

### ChannelDowngradeDialog.tsx — VERBATIM
- jac=1, cos=1. No semantic changes. Copied verbatim from v88.

### BypassPermissionsModeDialog.tsx — VERBATIM
- jac=1, cos=1. No semantic changes. Copied verbatim from v88.

### ConfigurableShortcutHint.tsx — RECONSTRUCTED
- jac=0.857, cos=1. Minor API change: `KeyboardShortcutHint` prop renamed from `shortcut` to `chord` in v112.
- v88: `<KeyboardShortcutHint shortcut={shortcut} action={description} ... />`
- v112: `<KeyboardShortcutHint chord={shortcut} action={description} ... />`

### ClickableImageRef.tsx — RECONSTRUCTED
- jac=0.875, cos=1. Two semantic changes:
  1. Image path lookup changed from `getStoredImagePath(imageId)` (v88) to `useImageStore((j) => j.storedImagePaths.get(imageId) ?? null) ?? null` (v112) — now uses a Zustand store instead of a utility function.
  2. File URL construction changed from `pathToFileURL(imagePath).href` (v88) to `new URL(imagePath).href` (v112) — uses native URL constructor instead of Node's pathToFileURL.
- Removed imports: `pathToFileURL` from 'url', `getStoredImagePath` from '../utils/imageStore.js'.
- Added imports: `useImageStore` from '../stores/imageStore.js'.

### ClaudeInChromeOnboarding.tsx — RECONSTRUCTED
- jac=0.778, cos=1. Structural changes in JSX rendering:
  1. v112 uses `tabIndex={0} autoFocus={true} onKeyDown={handler}` on the inner `<Box>` instead of `useInput` hook (v88).
  2. Key handler now checks `!D.ctrl && !D.meta` and calls `D.preventDefault()` before `onDone()`.
  3. Added `.catch(j6)` to the `isChromeExtensionInstalled()` promise (error handler).
  4. Cache size increased from _c(20) to _c(21) due to additional memoized elements.

### PluginHintMenu.tsx — RECONSTRUCTED
- jac=0.966, cos=0.935. Compiler-runtime transformation differences:
  1. v88 uses `onResponseRef.current = onResponse` directly; v112 wraps in an effect callback `() => { onResponseRef.current = onResponse }` with its own useEffect.
  2. v88 timeout: `setTimeout(ref => ref.current('no'), AUTO_DISMISS_MS, onResponseRef)`; v112: `setTimeout(UOA, gOA, onResponseRef)` (minified names, same pattern).
  3. v112 memoizes more sub-elements individually (plugin label, "Plugin:" text, "Marketplace:" text, etc.) leading to larger cache (_c(35) vs v88's manual React code).
  4. The `onSelect` handler uses `q:` labeled switch in v112 minified output (same semantics as v88 switch).

### BaseTextInput.tsx — RECONSTRUCTED
- jac=0.667, cos=0.999. Significant structural changes:
  1. v88: `const { onInput, renderedValue, cursorLine, cursorColumn } = inputState`; v112: `const { handleKeyDown, renderedValue, cursorLine, cursorColumn } = inputState` — `onInput` renamed to `handleKeyDown` in the input state type.
  2. v88 uses `usePasteHandler` with `onInput` callback; v112 uses it with `handleKeyDown` callback and adds `handlePaste` return value.
  3. v112 adds a `caretRef` (useRef) and `setRef` callback that forwards to both `caretRef` and `cursorRef`.
  4. v112 adds focus management effect that subscribes to a focus controller (`cE`) and handles parent-node focus traversal.
  5. v112 adds `inputProps` object with `{tabIndex: 0, autoFocus: true, onKeyDown, onPaste}` when focused.
  6. v112's `usePasteHandler` call includes `onKeyDownBefore` prop check.
  7. Cache size increased from _c(14) to _c(24).

### BridgeDialog.tsx — RECONSTRUCTED
- jac=0.703, cos=1. Multiple semantic changes:
  1. v112 adds `KeyboardShortcutHint` component usage for footer hints (replaces raw text "d to disconnect · space for QR code · Enter/Esc to close").
  2. Footer text now constructed with `<KeyboardShortcutHint chord="d" action="disconnect" />`, `<Text>space for QR code</Text>`, and `<KeyboardShortcutHint chord={["enter","escape"]} action="close" />`.
  3. v112 adds `tabIndex={0} autoFocus={true} onKeyDown={t16}` props to the inner `<Box>` (replacing useInput behavior).
  4. The `useInput` handler now checks `G6.key === "d" && !G6.ctrl && !G6.meta` and calls `G6.preventDefault()`.
  5. Cache size increased from _c(87) to _c(96).

### ConsoleOAuthFlow.tsx — RECONSTRUCTED
- jac=0.8 / 0.674, cos=1 / 0.999. Major feature additions:
  1. New props: `urlOutdent?: number` added to Props type.
  2. New `urlOutdentTotal` computed as `(isBun() ? 4 : 0) + urlOutdent` for URL display margin.
  3. `orgUUID` handling changed: v88 `const orgUUID = settings.forceLoginOrgUUID`; v112 `const orgUUID = typeof settings.forceLoginOrgUUID === 'string' ? settings.forceLoginOrgUUID : void 0`.
  4. New OAuthStatus states added: `'bedrock_wizard'`, `'bedrock_done'`, `'vertex_wizard'`, `'vertex_done'`.
  5. New keybinding handler for `'confirm:yes'` on `bedrock_done` / `vertex_done` states that saves global config with onboarding version metadata and relaunches the app.
  6. Platform setup UI completely redesigned: v88 showed documentation links; v112 shows a `<Select>` with interactive options (bedrock wizard, foundry docs, vertex wizard, go back).
  7. New components referenced: `BedrockWizard`, `VertexWizard` (imported implicitly via usage).
  8. v112 uses `openURL()` for foundry docs link (v88 used inline docs).
  9. `Link` wrapper for URL display changed from direct `<Link url={...}>` to `<Box marginX={urlOutdentTotal ? -urlOutdentTotal : void 0}><Link ...>`.
  10. `KeyboardShortcutHint` prop renamed from `shortcut` to `chord`.
  11. `OAuthStatusMessage` cache size increased from _c(51) to _c(61).

## Unresolved Symbols

- `UOA`, `gOA` in PluginHintMenu.tsx (auto-dismiss timeout constants) at byte ~12628852
- `cE` in BaseTextInput.tsx (focus controller utility) at byte ~4436664
- `b3A`, `I3A` in BridgeDialog.tsx (helper functions) at byte ~12323433
- `R3A`, `h3A` in BridgeDialog.tsx (QR filter/map helpers) at byte ~12323433
- `j6` in ClaudeInChromeOnboarding.tsx (error handler) at byte ~12782852
- `isBun` in ConsoleOAuthFlow.tsx (runtime detection) at byte ~8206801
- `bC6`, `d48` in ConsoleOAuthFlow.tsx (relaunch helpers) at byte ~8212315
- `xF8` (BedrockWizard), `mF8` (VertexWizard) in ConsoleOAuthFlow.tsx at byte ~8212315
- `openURL` in ConsoleOAuthFlow.tsx at byte ~8212315
- `saveGlobalConfig` in ConsoleOAuthFlow.tsx at byte ~8212315
