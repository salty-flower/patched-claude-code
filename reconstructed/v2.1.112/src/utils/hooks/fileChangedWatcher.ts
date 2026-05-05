import chokidar, { type FSWatcher } from 'chokidar'
import { isAbsolute, join } from 'path'
import { registerCleanup } from '../cleanupRegistry.js'
import { logForDebugging } from '../debug.js'
import { errorMessage } from '../errors.js'
import {
  executeCwdChangedHooks,
  executeFileChangedHooks,
  type HookOutsideReplResult,
} from '../hooks.js'
import { clearCwdEnvFiles } from '../sessionEnvironment.js'
import { getHooksConfigFromSnapshot } from './hooksConfigSnapshot.js'

// v112: Converted to factory pattern with singleton instance.
// The v112 minified shows M0z() factory returning {initialize, setEnvHookNotifier,
// updateWatchPaths, onCwdChanged, dispose}. Reconstructed from v88 structure + v112 bytes.

let watcher: FSWatcher | null = null
let currentCwd: string
let dynamicWatchPaths: string[] = []
let dynamicWatchPathsSorted: string[] = []
let initialized = false
let hasEnvHooks = false
let notifyCallback: ((text: string, isError: boolean) => void) | null = null

export function setEnvHookNotifier(
  cb: ((text: string, isError: boolean) => void) | null,
): void {
  notifyCallback = cb
}

export function initializeFileChangedWatcher(cwd: string): void {
  if (initialized) return
  initialized = true
  currentCwd = cwd

  const config = getHooksConfigFromSnapshot()
  hasEnvHooks =
    (config?.CwdChanged?.length ?? 0) > 0 ||
    (config?.FileChanged?.length ?? 0) > 0

  if (hasEnvHooks) {
    registerCleanup(async () => dispose())
  }

  const paths = resolveWatchPaths(config)
  if (paths.length === 0) return

  startWatching(paths)
}

function resolveWatchPaths(
  config?: ReturnType<typeof getHooksConfigFromSnapshot>,
): string[] {
  const matchers = (config ?? getHooksConfigFromSnapshot())?.FileChanged ?? []
  const paths: string[] = []
  for (const hook of matchers) {
    if (!hook.matcher) continue
    for (const pattern of hook.matcher.split('|').map((m) => m.trim())) {
      if (!pattern) continue
      paths.push(isAbsolute(pattern) ? pattern : join(currentCwd, pattern))
    }
  }
  return [...paths, ...dynamicWatchPaths]
}

function startWatching(paths: string[]): void {
  logForDebugging(`FileChanged: watching ${paths.length} paths`)
  watcher = chokidar.watch(paths, {
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 500, pollInterval: 200 },
    ignorePermissionErrors: true,
  })
  watcher.on('change', (path) => handleFileEvent(path, 'change'))
  watcher.on('add', (path) => handleFileEvent(path, 'add'))
  watcher.on('unlink', (path) => handleFileEvent(path, 'unlink'))
}

function handleFileEvent(path: string, event: string): void {
  logForDebugging(`FileChanged: ${event} ${path}`)
  executeFileChangedHooks(path, event)
    .then(({ results, watchPaths, systemMessages }) => {
      if (watchPaths.length > 0) {
        updateWatchPaths(watchPaths)
      }
      for (const msg of systemMessages) {
        notifyCallback?.(msg, false)
      }
      for (const r of results) {
        if (!r.succeeded && r.output) {
          notifyCallback?.(r.output, true)
        }
      }
    })
    .catch((err) => {
      const msg = errorMessage(err)
      logForDebugging(`FileChanged hook failed: ${msg}`, { level: 'error' })
      notifyCallback?.(msg, true)
    })
}

export function updateWatchPaths(paths: string[]): void {
  if (!initialized) return
  const sorted = paths.slice().sort()
  if (
    sorted.length === dynamicWatchPathsSorted.length &&
    sorted.every((p, i) => p === dynamicWatchPathsSorted[i])
  ) {
    return
  }
  dynamicWatchPaths = paths
  dynamicWatchPathsSorted = sorted
  restartWatching()
}

function restartWatching(): void {
  if (watcher) {
    watcher.close()
    watcher = null
  }
  const paths = resolveWatchPaths()
  if (paths.length > 0) {
    startWatching(paths)
  }
}

export async function onCwdChanged(oldCwd: string, newCwd: string): Promise<void> {
  if (oldCwd === newCwd) return
  const config = getHooksConfigFromSnapshot()
  if (
    !((config?.CwdChanged?.length ?? 0) > 0 ||
      (config?.FileChanged?.length ?? 0) > 0)
  ) {
    return
  }
  currentCwd = newCwd
  await clearCwdEnvFiles()
  const result = await executeCwdChangedHooks(oldCwd, newCwd).catch((err) => {
    const msg = errorMessage(err)
    logForDebugging(`CwdChanged hook failed: ${msg}`, { level: 'error' })
    notifyCallback?.(msg, true)
    return { results: [], watchPaths: [], systemMessages: [] } as HookOutsideReplResult
  })
  dynamicWatchPaths = result.watchPaths
  dynamicWatchPathsSorted = result.watchPaths.slice().sort()
  for (const msg of result.systemMessages) {
    notifyCallback?.(msg, false)
  }
  for (const r of result.results) {
    if (!r.succeeded && r.output) {
      notifyCallback?.(r.output, true)
    }
  }
  if (initialized) {
    restartWatching()
  }
}

function dispose(): void {
  if (watcher) {
    watcher.close()
    watcher = null
  }
  dynamicWatchPaths = []
  dynamicWatchPathsSorted = []
  initialized = false
  hasEnvHooks = false
  notifyCallback = null
}
