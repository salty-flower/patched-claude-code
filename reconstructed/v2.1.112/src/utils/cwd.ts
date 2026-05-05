import { AsyncLocalStorage } from 'async_hooks'
import { getCwdState, getOriginalCwd } from '../bootstrap/state.js'

// v112: AsyncLocalStorage now stores a context object with a `.cwd` field
// (likely shared with other per-async overrides such as project root,
// agent-id, etc.). The shape is unresolved at lift time — the minified body
// is `$J8.getStore()?.cwd ?? tu()` so only the .cwd projection is in scope
// for this module.
type CwdContext = { cwd: string }

const cwdOverrideStorage = new AsyncLocalStorage<CwdContext>()

/**
 * Run a function with an overridden working directory for the current async context.
 * All calls to pwd()/getCwd() within the function (and its async descendants) will
 * return the overridden cwd instead of the global one. This enables concurrent
 * agents to each see their own working directory without affecting each other.
 *
 * v112: still exported but the storage value is now a `{ cwd }` context object;
 * call sites that constructed a bare string need to wrap it.
 */
export function runWithCwdOverride<T>(cwd: string, fn: () => T): T {
  return cwdOverrideStorage.run({ cwd }, fn)
}

/**
 * Get the current working directory
 */
export function pwd(): string {
  return cwdOverrideStorage.getStore()?.cwd ?? getCwdState()
}

/**
 * Get the current working directory or the original working directory if the current one is not available
 */
export function getCwd(): string {
  try {
    return pwd()
  } catch {
    return getOriginalCwd()
  }
}
