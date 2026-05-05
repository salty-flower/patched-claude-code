/**
 * Tracks commands recently denied by the auto mode classifier.
 * Populated from useCanUseTool.ts, read from RecentDenialsTab.tsx in /permissions.
 */

export type AutoModeDenial = {
  toolName: string
  /** Human-readable description of the denied command (e.g. bash command string) */
  display: string
  reason: string
  timestamp: number
}

let DENIALS: readonly AutoModeDenial[] = []
const MAX_DENIALS = 20

// v112: jac=0.545 drift from v88 — feature('TRANSCRIPT_CLASSIFIER') guard dropped.
// The v112 minified block at byte ~11483022 still pushes to DENIALS but the
// feature gate is absent. Transcribe conservatively without the gate.
export function recordAutoModeDenial(denial: AutoModeDenial): void {
  DENIALS = [denial, ...DENIALS.slice(0, MAX_DENIALS - 1)]
}

export function getAutoModeDenials(): readonly AutoModeDenial[] {
  return DENIALS
}
