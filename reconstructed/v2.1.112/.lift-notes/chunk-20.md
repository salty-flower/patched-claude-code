# Chunk 20 Lift Notes

## src/commands/ultraplan.tsx
- **Status**: Reconstructed with significant drift
- **Key changes**:
  - v112 replaced the entire prompt with a security-monitor classifier prompt (byte ~8324767). Used TODO marker; do not embed Anthropic source verbatim.
  - `buildUltraplanPrompt` now takes a third `promptIdentifier` argument.
  - `startDetachedPoll` now takes `onStatusMessage` callback; v112 adds meta notifications and uses different internal symbols (`AK8`, `eq`, `LY`).
  - `launchUltraplan` takes `promptIdentifier` and `onStatusMessage` instead of `onSessionReady`.
  - `launchDetached` adds `onCreateFail` callback alongside `onBundleFail`; error reason mapping expanded.
  - `call` function: v112 uses `Fr8` for arg trimming and stores `ultraplanLaunchPending` with `ultraplanArg` + `sourcePromise` structure.
  - `isEnabled` changed from `"external"==='ant'` to `()=>!1` (always false) in v112 minified — verify if intentional.
  - Multiple TODO(lift) markers for unresolved symbols at known byte offsets.

## src/commands/upgrade/upgrade.tsx
- **Status**: Copied verbatim (jac=1, cos=1)
- **Drift**: None. Main function unchanged between v88 and v112.

## src/commands/usage/usage.tsx
- **Status**: Copied verbatim (jac=1, cos=1)
- **Drift**: None. Identical in both versions.

## src/commands/vim/index.ts
- **Status**: Copied verbatim (jac=0.571, cos=1)
- **Drift**: Minified structure changed significantly (different bundler wrapper), but semantic content identical.

## src/commands/voice/index.ts
- **Status**: Reconstructed with minor drift
- **Key changes**: v112 adds `argumentHint: void 0` to the command object. Otherwise identical.

## src/commands/voice/voice.ts
- **Status**: Reconstructed with significant drift
- **Key changes**:
  - v112 adds mode argument parsing (`hold`, `tap`, `off`) via `parseVoiceModeArg`.
  - Settings now use nested `voice.enabled` and `voice.mode` alongside legacy `voiceEnabled`.
  - When disabling, updates both `voiceEnabled: false` and `voice: { ...voice, enabled: false }`.
  - When enabling, sets `voice: { ...voice, enabled: true, mode }` where mode is `hold` or `tap`.
  - Log event includes `tap_mode: mode === 'tap'`.
  - Message format changed to include mode label.

## src/components/AgentProgressLine.tsx
- **Status**: Copied verbatim (jac=1, cos=1 for main component)
- **Drift**: The schema import at top changed slightly in v112 (added `toolStats`), but the main component body is byte-identical. Schema is not referenced in this file's source directly.

## src/components/App.tsx
- **Status**: Copied verbatim (jac=1, cos=0.999)
- **Drift**: None meaningful. Import structure unchanged.

## src/components/AutoModeOptInDialog.tsx
- **Status**: Copied verbatim (jac=1, cos=1)
- **Drift**: Trailing decls (`AUTO_MODE_DESCRIPTION` const and `_temp` function) had no v112 match in region.json, but v112 minified still exports them. Bundler likely merged them differently.

## src/components/AutoUpdater.tsx
- **Status**: Reconstructed with significant drift
- **Key changes**:
  - v112 uses Redux store (`useAppSelector`, `useAppDispatch`) instead of props for `autoUpdaterResult` and `onAutoUpdaterResult`.
  - `onAutoUpdaterResult` prop removed; result is dispatched to Redux store.
  - `isAutoUpdaterDisabled()` guard removed from update-check condition.
  - `removeInstalledSymlink()` now guarded by `!process.env.DISABLE_INSTALLATION_CHECKS`.
  - Inlines version string `"2.1.112"` and package URL instead of `MACRO.*`.
  - Analytics metadata type casts removed from event payloads.
  - Added TODO(lift) markers for Redux integration and `logEvent` import.

## src/components/AutoUpdaterWrapper.tsx
- **Status**: Reconstructed with moderate drift
- **Key changes**:
  - v112 drops `onAutoUpdaterResult` and `autoUpdaterResult` props (now via Redux).
  - `feature("SKIP_DETECTION_WHEN_AUTOUPDATES_DISABLED")` guard removed from useEffect.
  - Props reduced from 6 to 4.

## src/components/AwsAuthStatusBox.tsx
- **Status**: Copied verbatim (jac=1, cos=1)
- **Drift**: None. Both decls matched perfectly.
