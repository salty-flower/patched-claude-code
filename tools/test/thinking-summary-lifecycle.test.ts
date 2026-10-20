import { expect, test } from "bun:test"
import { EventConditions } from "./helpers/event-conditions"
import {
  finishThinkingSummaryInput,
  hasThinkingSummaryExitHint,
  type LifecycleWait,
  settleThroughWait,
} from "./helpers/thinking-summary-lifecycle"

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
        () => true,
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
        () => true,
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

test("CR flush alone cannot close stdin; matching delayed application ACK releases EOF", async () => {
  const gate = deadlineWait(1000)
  const session = "11111111-1111-1111-1111-111111111111"
  let screen = "❯ /exit "
  let ended = false
  let code: number | undefined
  try {
    const completion = finishThinkingSummaryInput(
      () => {
        ended = true
        code = 0
        gate.notify()
      },
      () => code,
      () => hasThinkingSummaryExitHint(screen, session),
      gate.wait,
      gate.notify,
    )
    await Promise.resolve()
    expect(ended).toBe(false)
    screen = "Resume this session with:\nclaude --resume 22222222-2222-2222-2222-222222222222"
    gate.notify()
    await Promise.resolve()
    expect(ended).toBe(false)
    screen = `Resume this session with:\nclaude --resume ${session}`
    gate.notify()
    await completion
    expect(ended).toBe(true)
  } finally {
    gate.clear()
  }
})

test("missing application ACK times out without sending EOF", async () => {
  const gate = deadlineWait(20)
  let ended = false
  try {
    await expect(
      finishThinkingSummaryInput(
        () => {
          ended = true
        },
        () => undefined,
        () => false,
        gate.wait,
        gate.notify,
      ),
    ).rejects.toThrow("deadline: application exit acknowledged")
    expect(ended).toBe(false)
  } finally {
    gate.clear()
  }
})

test("hint must precede the current session's complete resume argument", () => {
  const session = "11111111-1111-1111-1111-111111111111"
  expect(hasThinkingSummaryExitHint(`${session}\nResume this session with:`, session)).toBe(false)
  expect(
    hasThinkingSummaryExitHint(`Resume this session with:\nclaude --resume ${session.slice(0, -1)}`, session),
  ).toBe(false)
  expect(hasThinkingSummaryExitHint(`Resume this session with:\nclaude --resume wrong\n${session}`, session)).toBe(
    false,
  )
  expect(hasThinkingSummaryExitHint(`Resume this session with:\nclaude --resume ${session}`, session)).toBe(true)
})

test("known nonzero process exit never requires UI hint and still fails", async () => {
  const gate = deadlineWait(1000)
  try {
    await expect(
      finishThinkingSummaryInput(
        () => 0,
        () => 7,
        () => false,
        gate.wait,
        gate.notify,
      ),
    ).rejects.toThrow("PTY child must exit successfully")
  } finally {
    gate.clear()
  }
})
