import assert from "node:assert/strict"
import type { IBuffer } from "@xterm/headless"

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
export function hasThinkingSummaryExitHint(screen: string | IBuffer, sessionId: string): boolean {
  let text: string
  if (typeof screen === "string") text = screen
  else {
    text = ""
    for (let index = 0; index < screen.length; index++) {
      const row = screen.getLine(index)
      if (!row) continue
      if (index > 0 && !row.isWrapped) text += "\n"
      // Keep every cell before a soft wrap: trimming would merge words, while
      // adding a space would corrupt an option or session ID wrapped mid-token.
      text += row.translateToString(!screen.getLine(index + 1)?.isWrapped)
    }
  }
  const hint = "Resume this session with:"
  const at = text.lastIndexOf(hint)
  if (at < 0) return false
  const command =
    text
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
