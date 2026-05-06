import { join } from 'path'

/**
 * Get the path to the memory directory for a given project root.
 */
export function getMemoryDirPath(projectRoot: string): string {
  return join(projectRoot, '.claude', 'memories')
}

/**
 * Get the path to a specific memory file.
 */
export function getMemoryFilePath(projectRoot: string, memoryId: string): string {
  return join(getMemoryDirPath(projectRoot), `${memoryId}.json`)
}
