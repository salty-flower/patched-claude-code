import { readdir } from 'fs/promises'
import { basename, join } from 'path'
import { parseFrontmatter } from '../utils/frontmatterParser.js'
import { readFileInRange } from '../utils/readFileInRange.js'
import type { MemoryEntry } from './memoryTypes.js'
import { type MemoryType, parseMemoryType } from './memoryTypes.js'

export type MemoryHeader = {
  filename: string
  filePath: string
  mtimeMs: number
  description: string | null
  type: MemoryType | undefined
}

const MAX_MEMORY_FILES = 200
const FRONTMATTER_MAX_LINES = 30

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

export async function scanMemoryFiles(
  memoryDir: string,
  signal: AbortSignal,
): Promise<MemoryHeader[]> {
  try {
    const entries = await readdir(memoryDir, { recursive: true })
    const mdFiles = entries.filter(
      f => f.endsWith('.md') && basename(f) !== 'MEMORY.md',
    )

    const headerResults = await Promise.allSettled(
      mdFiles.map(async (relativePath): Promise<MemoryHeader> => {
        const filePath = join(memoryDir, relativePath)
        const { content, mtimeMs } = await readFileInRange(
          filePath,
          0,
          FRONTMATTER_MAX_LINES,
          undefined,
          signal,
        )
        const { frontmatter } = parseFrontmatter(content, filePath)
        return {
          filename: relativePath,
          filePath,
          mtimeMs,
          description: frontmatter.description || null,
          type: parseMemoryType(frontmatter.type),
        }
      }),
    )

    return headerResults
      .filter(
        (r): r is PromiseFulfilledResult<MemoryHeader> =>
          r.status === 'fulfilled',
      )
      .map(r => r.value)
      .sort((a, b) => b.mtimeMs - a.mtimeMs)
      .slice(0, MAX_MEMORY_FILES)
  } catch {
    return []
  }
}

export function formatMemoryManifest(memories: MemoryHeader[]): string {
  return memories
    .map(memory => {
      const tag = memory.type ? `[${memory.type}] ` : ''
      const timestamp = new Date(memory.mtimeMs).toISOString()
      return memory.description
        ? `- ${tag}${memory.filename} (${timestamp}): ${memory.description}`
        : `- ${tag}${memory.filename} (${timestamp})`
    })
    .join('\n')
}
