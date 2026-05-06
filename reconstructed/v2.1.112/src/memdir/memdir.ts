import { mkdir, readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import type { MemoryDirectory, MemoryEntry } from './memoryTypes.js'
import { getMemoryDirPath, getMemoryFilePath } from './paths.js'

/**
 * Initialize the memory directory for a project.
 */
export async function initMemDir(projectRoot: string): Promise<void> {
  const dir = getMemoryDirPath(projectRoot)
  await mkdir(dir, { recursive: true })
}

/**
 * Load all memories from the memory directory.
 */
export async function loadMemories(projectRoot: string): Promise<MemoryEntry[]> {
  const dir = getMemoryDirPath(projectRoot)
  try {
    const files = await readdir(dir)
    const entries: MemoryEntry[] = []
    for (const file of files) {
      if (!file.endsWith('.json')) continue
      const content = await readFile(join(dir, file), 'utf-8')
      try {
        entries.push(JSON.parse(content) as MemoryEntry)
      } catch {
        // Skip malformed entries
      }
    }
    return entries.sort((a, b) => b.timestamp - a.timestamp)
  } catch {
    return []
  }
}

/**
 * Save a memory to the memory directory.
 */
export async function saveMemory(
  projectRoot: string,
  entry: MemoryEntry,
): Promise<void> {
  const path = getMemoryFilePath(projectRoot, entry.id)
  await writeFile(path, JSON.stringify(entry, null, 2), 'utf-8')
}
