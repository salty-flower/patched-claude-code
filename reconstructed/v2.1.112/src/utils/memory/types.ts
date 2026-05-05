// jac=0.833, cos=0.996 — tight drift: TEAMMEM feature flag removed.
// v88 had `feature('TEAMMEM') ? ['TeamMem'] : []`; v112 hardcodes 5 values.
export const MEMORY_TYPE_VALUES = [
  'User',
  'Project',
  'Local',
  'Managed',
  'AutoMem',
] as const

export type MemoryType = (typeof MEMORY_TYPE_VALUES)[number]
