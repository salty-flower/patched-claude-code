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

export async function finishThinkingSummaryInput(
  endInput: () => unknown,
  exitCode: () => number | undefined,
  wait: LifecycleWait,
  notify: () => void,
): Promise<void> {
  await settleThroughWait(endInput(), wait, notify, "stdin EOF flushed")
  await wait(() => exitCode() !== undefined, "child process exited after stdin EOF")
  assert.equal(exitCode(), 0, "PTY child must exit successfully")
}
