import { expect, test } from "bun:test"
import { ModelEffortCommandFreshness } from "./helpers/model-effort-command-freshness"
import { effortCommandResult } from "./helpers/pty-input"

const command = "/model fable"
const probe = "effort-probe-unique-6"
const result = `❯ ${command}\n  ⎿  Set model to gpt-6-astra\n     Current model runs with low effort (this session for gpt-6-astra)`
const oldHistory = `${result}\n❯ ${probe}\n⏺ effort stub done\n❯ `

function scope() {
  const state = new ModelEffortCommandFreshness()
  state.completeProbe(probe)
  return state.begin(oldHistory, command)
}
function parsed(view: string | undefined) {
  return view === undefined ? undefined : effortCommandResult(view, command)
}

test("identical old result before the latest probe cannot complete a new command", () => {
  expect(effortCommandResult(oldHistory, command)).toContain("Set model")
  expect(parsed(scope()(oldHistory))).toBeUndefined()
})

test("new input echo without its own result is still pending", () => {
  expect(parsed(scope()(`${oldHistory}${command}`))).toBeUndefined()
})

test("new command and complete result after probe retain existing result parsing", () => {
  expect(parsed(scope()(`${oldHistory}\n${result}\n❯ `))).toContain("low effort (this session for gpt-6-astra)")
})

test("old command scrolling out does not require a larger global occurrence count", () => {
  const viewport = `❯ ${probe}\n⏺ effort stub done\n${result}\n❯ `
  expect(parsed(scope()(viewport))).toContain("Set model to gpt-6-astra")
})

test("absent or partially redrawn probe never falls back to old screen results", () => {
  const current = scope()
  expect(parsed(current(result))).toBeUndefined()
  expect(parsed(current(`${result}\n❯ effort-probe-unique-`))).toBeUndefined()
})

test("same command within one probe generation fails fast, new probe permits it", () => {
  const state = new ModelEffortCommandFreshness()
  state.completeProbe(probe)
  state.begin(oldHistory, command)
  expect(() => state.begin(oldHistory, command)).toThrow("repeated command")
  state.begin(oldHistory, "/effort low")
  state.completeProbe("effort-probe-next")
  expect(() => state.begin("❯ effort-probe-next", command)).not.toThrow()
})

test("unanchored exception is limited to first command without matching history", () => {
  const state = new ModelEffortCommandFreshness()
  const first = state.begin("❯ ", command)
  expect(parsed(first(result))).toContain("Set model")
  expect(() => state.begin("❯ ", "/effort low")).toThrow("unanchored command")
  expect(() => new ModelEffortCommandFreshness().begin(result, command)).toThrow("unanchored command")
})
