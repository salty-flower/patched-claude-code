/**
 * Utilities for calculating memory age and relevance.
 */

const MS_PER_DAY = 24 * 60 * 60 * 1000

/**
 * Calculate the age of a memory in days.
 */
export function getMemoryAgeDays(timestamp: number): number {
  return (Date.now() - timestamp) / MS_PER_DAY
}

/**
 * Check if a memory is considered stale (older than 30 days).
 */
export function isMemoryStale(timestamp: number): boolean {
  return getMemoryAgeDays(timestamp) > 30
}
