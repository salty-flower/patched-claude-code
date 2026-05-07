import { readFileSync } from 'fs'
import { mkdir, readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import type { MemoryEntry } from './memoryTypes.js'
import {
  getAutoMemPath,
  getMemoryDirPath,
  getMemoryFilePath,
  isAutoMemoryEnabled,
} from './paths.js'

export const ENTRYPOINT_NAME = 'MEMORY.md'
export const MAX_ENTRYPOINT_LINES = 200
export const MAX_ENTRYPOINT_BYTES = 25_000
export const DIR_EXISTS_GUIDANCE =
  'This directory already exists - write to it directly with the Write tool (do not run mkdir or check for its existence).'
export const DIRS_EXIST_GUIDANCE =
  'Both directories already exist - write to them directly with the Write tool (do not run mkdir or check for their existence).'

export type EntrypointTruncation = {
  content: string
  lineCount: number
  byteCount: number
  wasLineTruncated: boolean
  wasByteTruncated: boolean
}

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

export function truncateEntrypointContent(raw: string): EntrypointTruncation {
  const trimmed = raw.trim()
  const contentLines = trimmed.split('\n')
  const lineCount = contentLines.length
  const byteCount = trimmed.length
  const wasLineTruncated = lineCount > MAX_ENTRYPOINT_LINES
  const wasByteTruncated = byteCount > MAX_ENTRYPOINT_BYTES

  let content = wasLineTruncated
    ? contentLines.slice(0, MAX_ENTRYPOINT_LINES).join('\n')
    : trimmed

  if (content.length > MAX_ENTRYPOINT_BYTES) {
    const cutAt = content.lastIndexOf('\n', MAX_ENTRYPOINT_BYTES)
    content = content.slice(0, cutAt > 0 ? cutAt : MAX_ENTRYPOINT_BYTES)
  }

  if (wasLineTruncated || wasByteTruncated) {
    content += `\n\n> WARNING: ${ENTRYPOINT_NAME} was truncated before loading. Keep index entries concise.`
  }

  return {
    content,
    lineCount,
    byteCount,
    wasLineTruncated,
    wasByteTruncated,
  }
}

export async function ensureMemoryDirExists(memoryDir: string): Promise<void> {
  await mkdir(memoryDir, { recursive: true })
}

export function buildSearchingPastContextSection(autoMemDir: string): string[] {
  return [
    '## Searching past context',
    '',
    'When looking for past context, search memory files before reading large transcript logs.',
    '```',
    `grep -rn "<search term>" ${autoMemDir} --include="*.md"`,
    '```',
    '',
  ]
}

export function buildMemoryLines(
  displayName: string,
  memoryDir: string,
  extraGuidelines?: string[],
): string[] {
  return [
    `# ${displayName}`,
    '',
    `You have a persistent, file-based memory system at \`${memoryDir}\`. ${DIR_EXISTS_GUIDANCE}`,
    '',
    `Save durable, future-useful memories as Markdown files and keep \`${ENTRYPOINT_NAME}\` as a concise index.`,
    '',
    ...(extraGuidelines ?? []),
    '',
    ...buildSearchingPastContextSection(memoryDir),
  ]
}

export function buildMemoryPrompt(params: {
  displayName: string
  memoryDir: string
  extraGuidelines?: string[]
}): string {
  const { displayName, memoryDir, extraGuidelines } = params
  const lines = buildMemoryLines(displayName, memoryDir, extraGuidelines)
  const entrypoint = join(memoryDir, ENTRYPOINT_NAME)

  let entrypointContent = ''
  try {
    entrypointContent = readFileSync(entrypoint, 'utf-8')
  } catch {
    // No memory index yet.
  }

  if (entrypointContent.trim()) {
    lines.push(`## ${ENTRYPOINT_NAME}`, '', truncateEntrypointContent(entrypointContent).content)
  } else {
    lines.push(
      `## ${ENTRYPOINT_NAME}`,
      '',
      `Your ${ENTRYPOINT_NAME} is currently empty. When you save new memories, they will appear here.`,
    )
  }

  return lines.join('\n')
}

export async function loadMemoryPrompt(): Promise<string | null> {
  if (!isAutoMemoryEnabled()) {
    return null
  }
  const memoryDir = getAutoMemPath()
  await ensureMemoryDirExists(memoryDir)
  return buildMemoryLines('auto memory', memoryDir).join('\n')
}
