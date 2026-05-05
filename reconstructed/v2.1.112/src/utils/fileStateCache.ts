import { LRUCache } from 'lru-cache'
import { normalize } from 'path'

export type FileState = {
  content: string
  timestamp: number
  offset: number | undefined
  limit: number | undefined
  // True when this entry was populated by auto-injection (e.g. CLAUDE.md) and
  // the injected content did not match disk (stripped HTML comments, stripped
  // frontmatter, truncated MEMORY.md). The model has only seen a partial view;
  // Edit/Write must require an explicit Read first. `content` here holds the
  // RAW disk bytes (for getChangedFiles diffing), not what the model saw.
  isPartialView?: boolean
  // v112: preserve content across empty writes when hash matches
  keepContent?: boolean
  contentHash?: string
  contentLength?: number
}

// Default max entries for read file state caches
export const READ_FILE_STATE_CACHE_SIZE = 100

// Default size limit for file state caches (25MB)
const DEFAULT_MAX_CACHE_SIZE_BYTES = 25 * 1024 * 1024

// Threshold for keeping content in cache even when empty
const KEEP_CONTENT_THRESHOLD_BYTES = 1024 * 1024

function computeContentHash(content: string): string {
  // TODO(lift): dD4 at byte ~5046909 — actual hash function
  return String(content.length)
}

function normalizeKey(key: string): string {
  return normalize(key)
}

/**
 * A file state cache that normalizes all path keys before access.
 * v112 adds content hashing and keepContent preservation for empty writes.
 */
export class FileStateCache {
  private cache: LRUCache<string, FileState>

  constructor(maxEntries: number, maxSizeBytes: number) {
    this.cache = new LRUCache<string, FileState>({
      max: maxEntries,
      maxSize: maxSizeBytes,
      sizeCalculation: value => Math.max(1, Buffer.byteLength(value.content)),
    })
  }

  get(key: string): FileState | undefined {
    return this.cache.get(normalizeKey(key))
  }

  set(key: string, value: FileState): this {
    const normalized = normalizeKey(key)
    const existing = this.cache.get(normalized)
    const keepContent = value.keepContent ?? existing?.keepContent
    const contentHash = value.contentHash ?? computeContentHash(value.content)
    const contentLength = value.contentLength ?? value.content.length

    // Preserve previous content when keepContent is set, current content is empty,
    // and the hash matches (indicating a no-op write).
    const preservedContent =
      keepContent &&
      value.content === '' &&
      contentHash === existing?.contentHash &&
      existing.content
        ? existing.content
        : value.content

    const storedContent =
      keepContent || Buffer.byteLength(preservedContent) <= KEEP_CONTENT_THRESHOLD_BYTES
        ? preservedContent
        : ''

    this.cache.set(normalized, {
      ...value,
      keepContent,
      contentHash,
      contentLength,
      content: storedContent,
    })
    return this
  }

  has(key: string): boolean {
    return this.cache.has(normalizeKey(key))
  }

  delete(key: string): boolean {
    return this.cache.delete(normalizeKey(key))
  }

  clear(): void {
    this.cache.clear()
  }

  get size(): number {
    return this.cache.size
  }

  get max(): number {
    return this.cache.max
  }

  get maxSize(): number {
    return this.cache.maxSize
  }

  get calculatedSize(): number {
    return this.cache.calculatedSize
  }

  keys(): Generator<string> {
    return this.cache.keys()
  }

  entries(): Generator<[string, FileState]> {
    return this.cache.entries()
  }

  dump(): ReturnType<LRUCache<string, FileState>['dump']> {
    return this.cache.dump()
  }

  load(entries: ReturnType<LRUCache<string, FileState>['dump']>): void {
    this.cache.load(entries)
  }
}

/**
 * Factory function to create a size-limited FileStateCache.
 */
export function createFileStateCacheWithSizeLimit(
  maxEntries: number,
  maxSizeBytes: number = DEFAULT_MAX_CACHE_SIZE_BYTES,
): FileStateCache {
  return new FileStateCache(maxEntries, maxSizeBytes)
}

// Helper function to convert cache to object (used by compact.ts)
export function cacheToObject(
  cache: FileStateCache,
): Record<string, FileState> {
  return Object.fromEntries(cache.entries())
}

// Helper function to clone a FileStateCache
export function cloneFileStateCache(cache: FileStateCache): FileStateCache {
  const cloned = createFileStateCacheWithSizeLimit(cache.max, cache.maxSize)
  cloned.load(cache.dump())
  return cloned
}

// Merge two file state caches, with more recent entries overriding older ones
export function mergeFileStateCaches(
  first: FileStateCache,
  second: FileStateCache,
): FileStateCache {
  const merged = cloneFileStateCache(first)
  for (const [filePath, fileState] of second.entries()) {
    const existing = merged.get(filePath)
    if (!existing || fileState.timestamp > existing.timestamp) {
      merged.set(filePath, fileState)
    }
  }
  return merged
}
