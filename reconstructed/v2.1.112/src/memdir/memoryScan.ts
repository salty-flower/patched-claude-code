import type { MemoryEntry } from './memoryTypes.js'

/**
 * Scan memories and return those matching a predicate.
 */
export function scanMemories(
  memories: MemoryEntry[],
  predicate: (entry: MemoryEntry) => boolean,
): MemoryEntry[] {
  return memories.filter(predicate)
}

/**
 * Find memories by source.
 */
export function findMemoriesBySource(
  memories: MemoryEntry[],
  source: string,
): MemoryEntry[] {
  return scanMemories(memories, entry => entry.source === source)
}
