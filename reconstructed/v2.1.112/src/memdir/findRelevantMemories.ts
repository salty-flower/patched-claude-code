import type { MemoryEntry } from './memoryTypes.js'
import { getMemoryAgeDays } from './memoryAge.js'

/**
 * Find relevant memories based on a query string.
 * Simple keyword matching for now.
 */
export function findRelevantMemories(
  memories: MemoryEntry[],
  query: string,
  limit = 5,
): MemoryEntry[] {
  const keywords = query.toLowerCase().split(/\s+/)
  const scored = memories.map(entry => {
    const content = entry.content.toLowerCase()
    const score = keywords.reduce(
      (sum, kw) => sum + (content.includes(kw) ? 1 : 0),
      0,
    )
    // Penalize older memories
    const agePenalty = getMemoryAgeDays(entry.timestamp) * 0.01
    return { entry, score: score - agePenalty }
  })
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.entry)
}
