import { expect, test } from "bun:test"
import { EventConditions } from "./helpers/event-conditions"
import { APPROVAL_ANSWER, APPROVAL_QUESTION } from "./helpers/workflow-history-stub"
import { answerWorkflowApproval } from "./workflow-history-tui-smoke"

const ENTER = "\x1b[13u"
const DOWN = "\x1b[B"
const UP = "\x1b[A"

function questionScreen(focus: "approve" | "decline", complete = true): string {
  return [
    "☐ Local git",
    APPROVAL_QUESTION,
    `${focus === "approve" ? "❯" : " "} 1. ${APPROVAL_ANSWER}`,
    `${focus === "decline" ? "❯" : " "} 2. Do not approve`,
    ...(complete ? ["Enter to select · ↑/↓ to navigate · Esc to cancel"] : []),
  ].join("\n")
}

const REVIEW_SCREEN = [
  "Review your answers",
  `${APPROVAL_QUESTION} → ${APPROVAL_ANSWER}`,
  "Ready to submit your answers?",
  "❯ 1. Submit answers",
  "  2. Cancel",
].join("\n")

function fixture() {
  const observations = new EventConditions()
  const conditions = new EventConditions()
  const scheduled = new Set<() => void>()
  const keys: string[] = []
  let screen = questionScreen("approve", false)
  let receipt = false
  let acceptsAnswer = false
  let afterAcceptedAnswer = "Submit answers"
  const input = {
    screen: () => screen,
    hasAnswerReceipt: () => receipt,
    key: async (key: string) => {
      keys.push(key)
      if (key === DOWN) screen = questionScreen("decline")
      if (key === UP) screen = questionScreen("approve")
      if (key === ENTER && acceptsAnswer) {
        if (screen === REVIEW_SCREEN) receipt = true
        else screen = afterAcceptedAnswer
      }
      conditions.notify()
      observations.notify()
    },
    waitFor: (predicate: () => boolean, description: string) => conditions.waitFor(predicate, description),
    notify: () => conditions.notify(),
    scheduleRetry: (callback: () => void) => {
      scheduled.add(callback)
      observations.notify()
      return () => scheduled.delete(callback)
    },
    snapshot: () => {},
  }
  const show = (value: string): void => {
    screen = value
    conditions.notify()
  }
  return {
    input,
    keys,
    scheduled,
    show,
    allowAnswer: () => {
      acceptsAnswer = true
    },
    afterAnswer: (value: string) => {
      afterAcceptedAnswer = value
    },
    deliverReceipt: () => {
      receipt = true
      conditions.notify()
    },
    waitForKeyCount: (count: number) =>
      observations.waitFor(() => keys.length === count, `expected ${count} acknowledged test keys`),
    retry: async () => {
      await observations.waitFor(() => scheduled.size === 1, "conditional retry was not scheduled")
      const callback = scheduled.values().next().value
      expect(callback).toBeDefined()
      callback?.()
    },
  }
}

test("question driver waits for complete controls and retries an answer rejected by the reveal guard", async () => {
  const ui = fixture()
  const answered = answerWorkflowApproval(ui.input)
  await Promise.resolve()
  expect(ui.keys).toEqual([])

  ui.show(questionScreen("approve"))
  await ui.waitForKeyCount(3)
  expect(ui.keys).toEqual([DOWN, UP, ENTER])
  // The first Enter reached the dialog during its native reveal guard; no UI state changed.
  ui.allowAnswer()
  await ui.retry()
  await ui.waitForKeyCount(4)
  expect(ui.keys).toEqual([DOWN, UP, ENTER, ENTER])

  // A partial review repaint is not enough to send the final answer.
  await ui.retry()
  expect(ui.keys).toHaveLength(4)
  ui.show(REVIEW_SCREEN)
  await answered
  expect(ui.keys).toEqual([DOWN, UP, ENTER, ENTER, ENTER])
  expect(ui.scheduled.size).toBe(0)
})

test("answer receipt stops retries while the old submit control is still rendered", async () => {
  const ui = fixture()
  ui.show(questionScreen("approve"))
  ui.allowAnswer()
  ui.afterAnswer(REVIEW_SCREEN)
  await answerWorkflowApproval(ui.input)
  expect(ui.input.screen()).toBe(REVIEW_SCREEN)
  expect(ui.input.hasAnswerReceipt()).toBe(true)
  expect(ui.keys).toEqual([DOWN, UP, ENTER, ENTER])
  expect(ui.scheduled.size).toBe(0)
})

test("conditional retry never sends approval keys into the next prompt while receipt is delayed", async () => {
  const ui = fixture()
  ui.show(questionScreen("approve"))
  ui.allowAnswer()
  ui.afterAnswer(`User answered: ${APPROVAL_QUESTION} → ${APPROVAL_ANSWER}\n❯ `)
  const answered = answerWorkflowApproval(ui.input)
  await ui.waitForKeyCount(3)
  await ui.retry()
  expect(ui.keys).toEqual([DOWN, UP, ENTER])
  ui.deliverReceipt()
  await answered
  expect(ui.keys).toEqual([DOWN, UP, ENTER])
  expect(ui.scheduled.size).toBe(0)
})

test("a dialog that never accepts the selected answer fails after bounded retries", async () => {
  const ui = fixture()
  ui.show(questionScreen("approve"))
  const result = answerWorkflowApproval(ui.input).then(
    () => undefined,
    (error: unknown) => error,
  )
  for (const count of [3, 4, 5]) {
    await ui.waitForKeyCount(count)
    await ui.retry()
  }
  const error = await result
  expect(error).toBeInstanceOf(Error)
  expect(String(error)).toContain("did not acknowledge input after 3 attempts")
  expect(ui.keys).toEqual([DOWN, UP, ENTER, ENTER, ENTER])
  expect(ui.scheduled.size).toBe(0)
})
