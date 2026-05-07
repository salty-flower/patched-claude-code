/**
 * Utilities for calculating memory age and relevance.
 */

const MS_PER_DAY = 24 * 60 * 60 * 1000

export function memoryAgeDays(mtimeMs: number): number {
  return Math.max(0, Math.floor((Date.now() - mtimeMs) / MS_PER_DAY))
}

export function memoryAge(mtimeMs: number): string {
  const days = memoryAgeDays(mtimeMs)
  if (days === 0) return 'today'
  if (days === 1) return 'yesterday'
  return `${days} days ago`
}

export function memoryFreshnessText(mtimeMs: number): string {
  const days = memoryAgeDays(mtimeMs)
  if (days <= 1) return ''
  return (
    `This memory is ${days} days old. ` +
    'Memories are point-in-time observations, not live state. ' +
    'Claims about code behavior or file:line citations may be outdated. ' +
    'Verify against current code before asserting as fact.'
  )
}

export function memoryFreshnessNote(mtimeMs: number): string {
  const text = memoryFreshnessText(mtimeMs)
  if (!text) return ''
  return `<system-reminder>${text}</system-reminder>\n`
}

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
