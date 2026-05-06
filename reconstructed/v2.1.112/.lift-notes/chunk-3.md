# Chunk 3 Lift Notes

## src/bridge/replBridge.ts
- **Status**: Reconstructed (no jac=1,cos=1 matches for main decls)
- **Drift**: Hardcoded `runnerVersion = '2.1.112'` instead of `MACRO.VERSION`. All other logic preserved verbatim. Minified names changed (H48→LX7 for FlushGate, EIY→fQK for poll loop, etc.) but semantics identical.

## src/bridge/replBridgeHandle.ts
- **Status**: Partially verbatim (getSelfBridgeCompatId jac=1,cos=1)
- **Drift**: One declaration matched exactly. Others reconstructed with updated import names but same semantics.

## src/bridge/replBridgeTransport.ts
- **Status**: Reconstructed (type decl jac=0.5,cos=0.794; createV2 jac=0.879,cos=1)
- **Drift**:
  - `reportState` signature changed from `(state)` to `(state, requiresAction?)`
  - Added `getInternalEventWriter()` returning `(eventType, data, subagentId?) => Promise<void>`
  - Added `getInternalEventReaders()` returning `{readMain, readSubagents}`
  - v1 adapter stubs added for new methods

## src/bridge/sessionIdCompat.ts
- **Status**: Verbatim (multiple jac=1,cos=1 matches)
- **Drift**: None. All declarations matched exactly.

## src/bridge/trustedDevice.ts
- **Status**: Reconstructed (several jac~1,cos~1 matches)
- **Drift**:
  - `clearTrustedDeviceToken` no longer checks `isGateEnabled()` at start
  - `enrollTrustedDevice` adds org policy check via `waitForPolicyLimitsToLoad()` / `isPolicyAllowed('require_trusted_devices')`
  - New exports: `readStoredTrustedDeviceToken`, `isTrustedDeviceGateEnabled`
  - `isGateEnabled` renamed to `isTrustedDeviceGateEnabled` and exported
  - `readStoredToken` renamed to `readStoredTrustedDeviceToken` and exported
  - TODO: PolicyLimits module import unresolved

## src/bridge/types.ts
- **Status**: Verbatim (jac=1,cos=0.98)
- **Drift**: None. Type declarations unchanged.

## src/buddy/companion.ts
- **Status**: Reconstructed (no matches)
- **Drift**: v112 minified shows completely unrelated code (`vyY` path scorer, `R88` random picker) at this file's region. Companion logic likely moved to a different module or bundled differently. Copied v88 verbatim with TODO.

## src/buddy/useBuddyNotification.tsx
- **Status**: Reconstructed (partial matches)
- **Drift**:
  - `isBuddyTeaserWindow` and `isBuddyLive` removed entirely
  - `RainbowText` now accepts optional `phase` prop for color offset
  - `useBuddyNotification` gutted to no-op effect
  - `findBuddyTriggerPositions` always returns `[]`
  - React compiler runtime import pattern changed

## src/cli/exit.ts
- **Status**: Reconstructed (no matches)
- **Drift**: v112 minified only contains `cliOk`. `cliError` appears to have been moved to a shared utility or inlined elsewhere. Reconstructed both with TODO on cliError relocation.

## src/cli/handlers/agents.ts
- **Status**: Reconstructed (formatAgent jac=1,cos=1)
- **Drift**: New `AgentsList` React component export added. `agentsHandler` implementation not visible in extracted region — may have moved or been refactored for TUI. Added TODO for AgentsList.

## src/cli/handlers/auth.ts
- **Status**: Reconstructed (installOAuthTokens jac=1,cos=1; authLogin jac=0.966,cos=1)
- **Drift**:
  - `authStatus` completely rewritten: now async, takes Ink app instance as first arg, renders via React/Ink instead of direct stdout.write
  - `forceLoginOrgUUID` handling: now checks `typeof ... === 'string'` before passing
  - `authLogin` minor change to orgUUID extraction

## src/cli/handlers/autoMode.ts
- **Status**: Reconstructed (several good matches)
- **Drift**:
  - `autoModeConfigHandler` now async, takes Ink app arg, calls `iX5` for rendering
  - `autoModeCritiqueHandler` now takes Ink app as first arg, renders via TUI
  - Both handlers use Ink instead of direct stdout/stderr
  - TODO: iX5 and Ink component imports unresolved
