import { expect, test } from "bun:test"
import { EventConditions } from "./helpers/event-conditions"
import { effortCommandResult, emptyPrompt, submitPtyText } from "./helpers/pty-input"

test("PTY submission waits for prompt and full input echo before Enter", async () => {
  const events = new EventConditions()
  const keys: string[] = []
  let line = "Select model"
  const input = {
    line: () => line,
    key: async (value: string) => {
      keys.push(value)
    },
    waitFor: (predicate: () => boolean, description: string) => events.waitFor(predicate, description),
  }
  const submitted = submitPtyText(input, "probe")
  expect(keys).toEqual([])
  line = "" // An erased dialog is not a ready input.
  events.notify()
  await Promise.resolve()
  expect(keys).toEqual([])
  line = "❯ "
  events.notify()
  await Promise.resolve()
  expect(keys).toEqual(["\x1b[200~probe\x1b[201~"])
  line = "❯ pro" // Partial paint must not submit.
  events.notify()
  await Promise.resolve()
  expect(keys).toHaveLength(1)
  line = "❯ probe"
  events.notify()
  await submitted
  expect(keys).toEqual(["\x1b[200~probe\x1b[201~", "\r"])
})

test("lost input fails with session exit rather than sending Enter or retrying", async () => {
  const events = new EventConditions()
  const keys: string[] = []
  const submitted = submitPtyText(
    {
      line: () => "❯ ",
      key: async (value) => {
        keys.push(value)
      },
      waitFor: (predicate, description) => events.waitFor(predicate, description),
    },
    "probe",
  )
  const rejected = submitted.catch((error: unknown) => error)
  await Promise.resolve()
  events.fail(new Error("session exited"))
  expect(await rejected).toMatchObject({ message: expect.stringContaining("session exited") })
  expect(keys).toEqual(["\x1b[200~probe\x1b[201~"])
})

test("input readiness excludes picker selections and prior command text", () => {
  expect(emptyPrompt("❯\u00a0 ")).toBe(true)
  expect(emptyPrompt("❯ 1. Luna")).toBe(false)
  expect(emptyPrompt("❯ /model")).toBe(false)
  expect(emptyPrompt("")).toBe(false)
})

test("effort acknowledgement excludes footer, tips, and an older command result", () => {
  const old = "❯ /effort current\n  ⎿  Current effort level: max (configured default).\n"
  const pending = "❯ /effort current\n✢ Working…\n  ⎿  Tip: start small\n        ◈ max · /effort\n❯ "
  expect(effortCommandResult(pending, "/effort current")).toBeUndefined()
  expect(effortCommandResult(old + pending, "/effort current")).toBeUndefined()
  expect(effortCommandResult(old, "/effort current")).toContain("Current effort level: max")
  expect(
    effortCommandResult(
      "❯ /model fable\n  ⎿  Set model to astra\n     Current model runs with low effort\n\n❯ ",
      "/model fable",
    ),
  ).toContain("low effort")
})
