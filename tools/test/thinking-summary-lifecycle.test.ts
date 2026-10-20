import { expect, test } from "bun:test"
import { EventConditions } from "./helpers/event-conditions"
import { finishThinkingSummaryInput, type LifecycleWait, settleThroughWait } from "./helpers/thinking-summary-lifecycle"

function deadlineWait(milliseconds: number) {
  const events = new EventConditions()
  let expired = false
  const timer = setTimeout(() => {
    expired = true
    events.notify()
  }, milliseconds)
  const wait: LifecycleWait = async (predicate, description) => {
    await events.waitFor(() => expired || predicate(), description)
    if (expired) throw new Error(`deadline: ${description}`)
  }
  return { wait, notify: () => events.notify(), clear: () => clearTimeout(timer) }
}

for (const code of [0, 7]) {
  test(`EOF-dependent subprocess exits ${code} and nonzero is rejected`, async () => {
    const child = Bun.spawn([process.execPath, "-e", `await new Response(Bun.stdin).text(); process.exit(${code})`], {
      stdin: "pipe",
      stdout: "ignore",
      stderr: "ignore",
    })
    const gate = deadlineWait(3000)
    let exitCode: number | undefined
    const exited = child.exited.then((value) => {
      exitCode = value
      gate.notify()
    })
    try {
      expect(exitCode).toBeUndefined()
      const completion = finishThinkingSummaryInput(
        () => child.stdin.end(),
        () => exitCode,
        gate.wait,
        gate.notify,
      )
      if (code === 0) await completion
      else await expect(completion).rejects.toThrow("PTY child must exit successfully")
      expect(exitCode).toBe(code)
    } finally {
      gate.clear()
      if (exitCode === undefined) child.kill()
      await exited
    }
  })
}

test("never-settling stdin flush is interrupted by the event-driven deadline", async () => {
  const gate = deadlineWait(20)
  try {
    await expect(settleThroughWait(new Promise<never>(() => {}), gate.wait, gate.notify, "flush")).rejects.toThrow(
      "deadline: flush",
    )
  } finally {
    gate.clear()
  }
})

test("process which never reports exit is interrupted after EOF", async () => {
  const gate = deadlineWait(20)
  try {
    await expect(
      finishThinkingSummaryInput(
        () => 0,
        () => undefined,
        gate.wait,
        gate.notify,
      ),
    ).rejects.toThrow("deadline: child process exited")
  } finally {
    gate.clear()
  }
})

test("stdin rejection is preserved rather than treated as successful settlement", async () => {
  const gate = deadlineWait(1000)
  try {
    await expect(
      settleThroughWait(Promise.reject(new Error("closed input")), gate.wait, gate.notify, "flush"),
    ).rejects.toThrow("closed input")
  } finally {
    gate.clear()
  }
})
