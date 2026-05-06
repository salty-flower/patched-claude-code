/**
 * Types for the memory directory system.
 */

export type MemoryEntry = {
  id: string
  content: string
  timestamp: number
  source: string
}

export type MemoryDirectory = {
  entries: MemoryEntry[]
  lastUpdated: number
}
