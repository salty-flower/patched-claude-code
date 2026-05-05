// Auto mode state functions — lives in its own module so callers can
// conditionally require() it on feature('TRANSCRIPT_CLASSIFIER').

let autoModeActive = false
let autoModeFlagCli = false
// Set by the async verifyAutoModeGateAccess check when it
// reads a fresh tengu_auto_mode_config.enabled === 'disabled' from GrowthBook.
// Used by isAutoModeGateEnabled() to block SDK/explicit re-entry after kick-out.
let autoModeCircuitBroken = false

export function setAutoModeActive(active: boolean): void {
  autoModeActive = active
}

export function isAutoModeActive(): boolean {
  return autoModeActive
}

export function setAutoModeFlagCli(passed: boolean): void {
  autoModeFlagCli = passed
}

export function getAutoModeFlagCli(): boolean {
  return autoModeFlagCli
}

export function setAutoModeCircuitBroken(broken: boolean): void {
  autoModeCircuitBroken = broken
}

export function isAutoModeCircuitBroken(): boolean {
  return autoModeCircuitBroken
}

export function _resetForTesting(): void {
  autoModeActive = false
  autoModeFlagCli = false
  autoModeCircuitBroken = false
}

// TODO(lift): createAutoModeState at byte ~9088545 — new export in v112 not present in v88.
// The v112 minified shows this module exports additional symbols (createAutoModeState,
// _setGlobalAutoModeStateForTesting) that don't exist in v88. These likely create
// a state object pattern rather than module-level vars.
// TODO(lift): _setGlobalAutoModeStateForTesting at byte ~9088794 — new export in v112.
