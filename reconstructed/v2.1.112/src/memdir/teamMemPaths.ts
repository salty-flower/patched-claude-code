import { join } from 'path'

/**
 * Get the path to the team memory directory.
 */
export function getTeamMemDirPath(projectRoot: string): string {
  return join(projectRoot, '.claude', 'team-memories')
}

/**
 * Get the path to a specific team memory file.
 */
export function getTeamMemFilePath(projectRoot: string, memoryId: string): string {
  return join(getTeamMemDirPath(projectRoot), `${memoryId}.json`)
}
