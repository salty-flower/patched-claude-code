import { expect, test } from "bun:test"
import { EventConditions } from "./helpers/event-conditions"

test("resolves an already-satisfied condition immediately", async () => {
  const conditions = new EventConditions()
  let calls = 0

  await conditions.waitFor(() => {
    calls++
    return true
  }, "startup prompt")

  conditions.notify()
  conditions.notify()
  expect(calls).toBe(1)
})

test("rechecks a pending condition after notification", async () => {
  const conditions = new EventConditions()
  let ready = false
  let calls = 0
  let resolved = false
  const pending = conditions
    .waitFor(() => {
      calls++
      return ready
    }, "ready signal")
    .then(() => {
      resolved = true
    })

  expect(calls).toBe(1)
  expect(resolved).toBe(false)
  ready = true
  conditions.notify()
  await pending
  expect(resolved).toBe(true)
  expect(calls).toBe(2)
})

test("a notification before registration is observed by the immediate check", async () => {
  const conditions = new EventConditions()
  let ready = false

  ready = true
  conditions.notify()
  await conditions.waitFor(() => ready, "pre-existing state")
})

test("tracks multiple independent conditions", async () => {
  const conditions = new EventConditions()
  let firstReady = false
  let secondReady = false
  let firstResolved = false
  let secondResolved = false

  const first = conditions
    .waitFor(() => firstReady, "first condition")
    .then(() => {
      firstResolved = true
    })
  const second = conditions
    .waitFor(() => secondReady, "second condition")
    .then(() => {
      secondResolved = true
    })

  firstReady = true
  conditions.notify()
  await first
  expect(firstResolved).toBe(true)
  expect(secondResolved).toBe(false)

  secondReady = true
  conditions.notify()
  await second
  expect(secondResolved).toBe(true)
})

test("rejects a condition when its predicate throws", async () => {
  const conditions = new EventConditions()
  const cause = new Error("predicate exploded")
  const rejection = conditions.waitFor(() => {
    throw cause
  }, "screen update")

  await expect(rejection).rejects.toMatchObject({ message: "screen update: predicate exploded", cause })
})

test("a failure before registration is sticky and rejects even a true predicate", async () => {
  const conditions = new EventConditions()
  const cause = new Error("child exited")
  conditions.fail(cause)

  const rejection = conditions.waitFor(() => true, "startup prompt")
  await expect(rejection).rejects.toMatchObject({ message: "startup prompt: child exited", cause })
})

test("a failure rejects pending conditions and remains sticky", async () => {
  const conditions = new EventConditions()
  let ready = false
  const cause = new Error("terminal closed")
  const pending = conditions.waitFor(() => ready, "terminal output")

  conditions.fail(cause)
  ready = true
  conditions.notify()
  await expect(pending).rejects.toMatchObject({ message: "terminal output: terminal closed", cause })

  const future = conditions.waitFor(() => true, "later condition")
  await expect(future).rejects.toMatchObject({ message: "later condition: terminal closed", cause })
})

test("reentrant notification and registration do not lose conditions", async () => {
  const conditions = new EventConditions()
  let ready = false
  let inner: Promise<void> | undefined

  const outer = conditions.waitFor(() => {
    if (inner === undefined) {
      inner = conditions.waitFor(() => ready, "inner condition")
      conditions.notify()
    }
    return ready
  }, "outer condition")

  ready = true
  conditions.notify()
  await Promise.all([outer, inner])
})
