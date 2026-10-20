import assert from "node:assert/strict"

export type LifecycleWait = (predicate: () => boolean, description: string) => Promise<void>

// Route async stdin operations through the same event-driven watchdog as PTY waits.
export async function settleThroughWait<T>(
  operation: T | PromiseLike<T>,
  wait: LifecycleWait,
  notify: () => void,
  description: string,
): Promise<T> {
  let settled = false
  let rejected = false
  let value: T | undefined
  let error: unknown
  void Promise.resolve(operation).then(
    (result) => {
      value = result
      settled = true
      notify()
    },
    (reason) => {
      error = reason
      rejected = true
      settled = true
      notify()
    },
  )
  await wait(() => settled, description)
  if (rejected) throw error
  return value as T
}

// This fixture uses a persistent interactive TTY session; other CLI modes need
// their own acknowledgement. Require this session ID in the command after the hint.
export function hasThinkingSummaryExitHint(screen: string, sessionId: string): boolean {
  const hint = "Resume this session with:"
  const at = screen.lastIndexOf(hint)
  if (at < 0) return false
  const command =
    screen
      .slice(at + hint.length)
      .trimStart()
      .split(/\r?\n/, 1)[0] ?? ""
  const words = command.trim().split(/\s+/)
  const option = words.indexOf("--resume")
  return option >= 0 && words[option + 1] === sessionId
}

export async function finishThinkingSummaryInput(
  endInput: () => unknown,
  exitCode: () => number | undefined,
  acknowledged: () => boolean,
  wait: LifecycleWait,
  notify: () => void,
): Promise<void> {
  await wait(() => exitCode() !== undefined || acknowledged(), "application exit acknowledged before stdin EOF")
  await settleThroughWait(endInput(), wait, notify, "stdin EOF flushed")
  await wait(() => exitCode() !== undefined, "child process exited after stdin EOF")
  assert.equal(exitCode(), 0, "PTY child must exit successfully")
}
