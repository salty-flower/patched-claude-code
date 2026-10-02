import Mustache from "mustache"
import prompts from "./workflow-history-prompts.yaml"

export const DEFAULT_USER_HISTORY_TURNS = 8
export const MAX_USER_HISTORY_TURNS = 64
export const MAX_HISTORY_CHARACTERS = 32_000

type RecordValue = Record<string, unknown>
type Json = null | boolean | number | string | Json[] | { [key: string]: Json }

interface Source {
  snapshotIndex: number
  messageUUID?: string
}

export type WorkflowInteraction =
  | { kind: "human-message"; source: Source; human: { text: string } }
  | {
      kind: "question-answer"
      source: Source & { messageUUID: string; assistantUUID: string; toolUseID: string }
      assistantContext: { questions: Json[] }
      human: { answers: Record<string, string>; response?: string; annotations?: Json }
      followUp?: boolean
    }

export interface WorkflowSelection {
  snapshot: "workflow-start"
  requestedTurns: number
  availableTurns: number
  effectiveTurns: number
  omittedByCount: number
  omittedBySize: number
  knownCompaction: boolean
  attributionLimitations: {
    unlinkedQuestionResults: number
    ambiguousQuestionLinks: number
    invalidQuestionResults: number
    automaticQuestionResults: number
    unansweredQuestionCalls: number
    unavailableHumanText: number
    unavailableNativeAnalysis: number
  }
  interactions: WorkflowInteraction[]
}

export type WorkflowRelay = { kind: "relay"; selection: WorkflowSelection } | { kind: "none" } | { kind: "automated" }

function record(value: unknown): value is RecordValue {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function nonemptyString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0
}

function resolveCount(value: unknown): number {
  if (value === undefined) return DEFAULT_USER_HISTORY_TURNS
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > MAX_USER_HISTORY_TURNS) {
    throw new Error(`Workflow userHistoryTurns must be an integer from 1 through ${MAX_USER_HISTORY_TURNS}.`)
  }
  return value
}

export function validateWorkflowHistoryOptions(options: unknown): unknown {
  if (record(options) && "userHistoryTurns" in options) {
    if (options.userHistoryTurns === undefined) {
      throw new Error(`Workflow userHistoryTurns must be an integer from 1 through ${MAX_USER_HISTORY_TURNS}.`)
    }
    resolveCount(options.userHistoryTurns)
  }
  return options
}

function pick(source: RecordValue, keys: readonly string[]): RecordValue {
  return Object.fromEntries(keys.filter((key) => source[key] !== undefined).map((key) => [key, source[key]]))
}

function freezeJson(value: Json): Json {
  if (value !== null && typeof value === "object") {
    for (const child of Object.values(value)) freezeJson(child)
    Object.freeze(value)
  }
  return value
}

export function captureWorkflowHistory(messages: readonly unknown[]): readonly unknown[] {
  const captured = messages.map((message) => {
    if (!record(message)) return null
    const projected = pick(message, [
      "type",
      "uuid",
      "timestamp",
      "origin",
      "isMeta",
      "isCompactSummary",
      "isVirtual",
      "isApiErrorMessage",
      "replacesSpan",
      "subtype",
      "sourceToolAssistantUUID",
      "sourceToolUseID",
      "turnCompanion",
      "verifiedSlackHumanTurn",
    ])
    if (message.toolUseResult !== undefined) {
      projected.toolUseResult =
        record(message.toolUseResult) && Array.isArray(message.toolUseResult.questions)
          ? pick(message.toolUseResult, ["questions", "answers", "response", "annotations", "afkTimeoutMs", "followUp"])
          : null
    }
    if (record(message.message)) {
      const content = message.message.content
      projected.message = {
        ...pick(message.message, ["id", "model"]),
        content:
          typeof content === "string"
            ? content
            : Array.isArray(content)
              ? content.map((block) => {
                  if (!record(block)) return null
                  const projectedBlock = pick(block, ["type", "text", "id", "name", "tool_use_id", "is_error"])
                  if (block.type === "tool_use" && block.name === "AskUserQuestion" && record(block.input)) {
                    projectedBlock.input = pick(block.input, ["questions"])
                  }
                  return projectedBlock
                })
              : null,
      }
    }
    if (record(message.attachment)) {
      projected.attachment = pick(message.attachment, ["type", "origin", "prompt", "isMeta", "verifiedSlackHumanTurn"])
    }
    return freezeJson(copyJson(projected))
  })
  return Object.freeze(captured)
}

export function bindWorkflowHistoryOptions(options: unknown, snapshot: readonly unknown[]): RecordValue {
  validateWorkflowHistoryOptions(options)
  if (options !== undefined && options !== null && !record(options)) {
    throw new Error("Workflow agent options must be an object when setting history options.")
  }
  const settings = options ?? {}
  const digest = new Bun.CryptoHasher("sha256").update(JSON.stringify(snapshot)).digest("hex")
  return {
    ...settings,
    userHistoryTurns: resolveCount(settings.userHistoryTurns),
    __pccWorkflowHistorySnapshot: digest,
  }
}

function blocks(message: RecordValue): RecordValue[] {
  if (!record(message.message) || !Array.isArray(message.message.content)) return []
  return message.message.content.filter(record)
}

function compact(message: RecordValue): boolean {
  return (
    message.isCompactSummary === true ||
    (message.type === "system" &&
      (message.subtype === "compact_boundary" || message.subtype === "microcompact_boundary"))
  )
}

function toolCompanion(message: RecordValue): boolean {
  return (
    message.toolUseResult !== undefined ||
    message.sourceToolAssistantUUID !== undefined ||
    message.sourceToolUseID !== undefined ||
    message.turnCompanion === true ||
    blocks(message).some((block) => block.type === "tool_result")
  )
}

// Native runtime records contain JSON. Copy them rather than retaining mutable
// snapshot objects, and compare object keys independently of insertion order.
function copyJson(value: unknown): Json {
  if (value === null || typeof value === "string" || typeof value === "boolean") return value
  if (typeof value === "number" && Number.isFinite(value)) return value
  if (Array.isArray(value)) return value.map(copyJson)
  if (record(value)) {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .filter((key) => value[key] !== undefined)
        .map((key) => [key, copyJson(value[key])]),
    )
  }
  throw new Error("Non-JSON question data")
}

function questions(value: unknown): Json[] | null {
  if (!Array.isArray(value) || value.length === 0) return null
  const names = new Set<string>()
  const normalized: Json[] = []
  for (const question of value) {
    if (!record(question) || !nonemptyString(question.question) || typeof question.header !== "string") return null
    if (names.has(question.question)) return null
    names.add(question.question)
    const kind = question.kind === undefined ? "choice" : question.kind
    if (kind !== "choice" && kind !== "text" && kind !== "number") return null
    const multiSelect = question.multiSelect === undefined ? false : question.multiSelect
    if (typeof multiSelect !== "boolean" || (kind !== "choice" && multiSelect)) return null
    const options = question.options === undefined ? (kind === "choice" ? undefined : []) : question.options
    if (!Array.isArray(options) || (kind === "choice" && options.length < 2)) return null
    const labels = new Set<string>()
    for (const option of options) {
      if (!record(option) || !nonemptyString(option.label) || typeof option.description !== "string") return null
      if (option.preview !== undefined && typeof option.preview !== "string") return null
      if (labels.has(option.label)) return null
      labels.add(option.label)
    }
    for (const key of ["description", "placeholder", "unit"]) {
      if (question[key] !== undefined && typeof question[key] !== "string") return null
    }
    for (const key of ["min", "max", "step"]) {
      if (question[key] !== undefined && (typeof question[key] !== "number" || !Number.isFinite(question[key]))) {
        return null
      }
    }
    if (kind === "number" && (typeof question.min !== "number" || typeof question.max !== "number")) return null
    try {
      normalized.push(copyJson({ ...question, kind, multiSelect, options }))
    } catch {
      return null
    }
  }
  return normalized
}

function answerData(
  result: RecordValue,
  originalQuestions: Json[],
): Extract<WorkflowInteraction, { kind: "question-answer" }>["human"] | null {
  const answeredQuestions = questions(result.questions)
  if (answeredQuestions === null || JSON.stringify(answeredQuestions) !== JSON.stringify(originalQuestions)) return null
  if (!record(result.answers)) return null
  const names = new Set(originalQuestions.map((question) => (question as RecordValue).question))
  const answers: [string, string][] = []
  for (const [question, answer] of Object.entries(result.answers)) {
    if (!names.has(question) || typeof answer !== "string") return null
    answers.push([question, answer])
  }
  if (result.response !== undefined && typeof result.response !== "string") return null
  if (result.followUp !== undefined && typeof result.followUp !== "boolean") return null
  if (result.annotations !== undefined) {
    if (!record(result.annotations)) return null
    for (const [question, annotation] of Object.entries(result.annotations)) {
      if (!names.has(question) || !record(annotation)) return null
      if (Object.keys(annotation).some((key) => key !== "preview" && key !== "notes")) return null
      if (Object.values(annotation).some((value) => typeof value !== "string")) return null
    }
  }
  if (answers.length === 0 && !nonemptyString(result.response)) return null
  return {
    answers: Object.fromEntries(answers),
    ...(result.response !== undefined ? { response: result.response as string } : {}),
    ...(result.annotations !== undefined ? { annotations: copyJson(result.annotations) } : {}),
  }
}

interface ToolCall {
  index: number
  assistant: RecordValue
  block: RecordValue
}

function addToMap<T>(map: Map<string, T[]>, key: unknown, value: T): void {
  if (!nonemptyString(key)) return
  const values = map.get(key)
  if (values) values.push(value)
  else map.set(key, [value])
}

function collectWorkflowHistory(
  messages: readonly unknown[],
  analyzeTurn: (messages: readonly unknown[]) => unknown,
  analysis: unknown,
) {
  const limitations: WorkflowSelection["attributionLimitations"] = {
    unlinkedQuestionResults: 0,
    ambiguousQuestionLinks: 0,
    invalidQuestionResults: 0,
    automaticQuestionResults: 0,
    unansweredQuestionCalls: 0,
    unavailableHumanText: 0,
    unavailableNativeAnalysis: record(analysis) ? 0 : 1,
  }
  const calls = new Map<string, ToolCall[]>()
  const results = new Map<string, number[]>()
  const assistantUUIDs = new Map<string, number[]>()
  const responseUUIDs = new Map<string, number[]>()
  let knownCompaction = false
  for (const [index, message] of messages.entries()) {
    if (!record(message)) continue
    knownCompaction ||= compact(message)
    if (message.type === "assistant") {
      addToMap(assistantUUIDs, message.uuid, index)
      for (const block of blocks(message)) {
        if (block.type === "tool_use") addToMap(calls, block.id, { index, assistant: message, block })
      }
    }
    if (message.type === "user") {
      addToMap(responseUUIDs, message.uuid, index)
      for (const block of blocks(message)) {
        if (block.type === "tool_result") addToMap(results, block.tool_use_id, index)
      }
    }
  }
  const interactions: WorkflowInteraction[] = []
  for (const [index, message] of messages.entries()) {
    if (!record(message) || compact(message)) continue
    const resultBlocks = blocks(message).filter((block) => block.type === "tool_result")
    const data = record(message.toolUseResult) ? message.toolUseResult : null
    const candidate =
      message.type === "user" &&
      ((data !== null && Array.isArray(data.questions)) ||
        resultBlocks.some((block) =>
          calls.get(String(block.tool_use_id))?.some((call) => call.block.name === "AskUserQuestion"),
        ))
    if (candidate) {
      const resultBlock = resultBlocks[0]
      const matchingCalls = resultBlock ? (calls.get(String(resultBlock.tool_use_id)) ?? []) : []
      if (
        resultBlocks.length > 1 ||
        matchingCalls.length > 1 ||
        (resultBlock && (results.get(String(resultBlock.tool_use_id))?.length ?? 0) > 1) ||
        (nonemptyString(message.uuid) && (responseUUIDs.get(message.uuid)?.length ?? 0) > 1)
      ) {
        limitations.ambiguousQuestionLinks++
        continue
      }
      const call = matchingCalls[0]
      if (
        !resultBlock ||
        !nonemptyString(resultBlock.tool_use_id) ||
        !call ||
        call.block.name !== "AskUserQuestion" ||
        call.index >= index ||
        !nonemptyString(call.assistant.uuid) ||
        !nonemptyString(message.uuid) ||
        message.sourceToolAssistantUUID !== call.assistant.uuid ||
        (message.sourceToolUseID !== undefined && message.sourceToolUseID !== resultBlock.tool_use_id)
      ) {
        limitations.unlinkedQuestionResults++
        continue
      }
      if ((assistantUUIDs.get(call.assistant.uuid)?.length ?? 0) !== 1) {
        limitations.ambiguousQuestionLinks++
        continue
      }
      if (data?.afkTimeoutMs !== undefined) {
        limitations.automaticQuestionResults++
        continue
      }
      const originalQuestions = record(call.block.input) ? questions(call.block.input.questions) : null
      const human = data && originalQuestions ? answerData(data, originalQuestions) : null
      if ((resultBlock.is_error !== undefined && resultBlock.is_error !== false) || !human || !originalQuestions) {
        limitations.invalidQuestionResults++
        continue
      }
      interactions.push({
        kind: "question-answer",
        source: {
          snapshotIndex: index,
          messageUUID: message.uuid,
          assistantUUID: call.assistant.uuid,
          toolUseID: resultBlock.tool_use_id as string,
        },
        assistantContext: { questions: originalQuestions },
        human,
        ...(data?.followUp !== undefined ? { followUp: data.followUp as boolean } : {}),
      })
      continue
    }
    if (toolCompanion(message) || (message.type !== "user" && message.type !== "attachment")) continue
    const single = analyzeTurn([message])
    const decider = record(single) && record(single.decider) ? single.decider : null
    if (decider?.strictHuman !== true) continue
    if (typeof decider.text !== "string") {
      limitations.unavailableHumanText++
      continue
    }
    interactions.push({
      kind: "human-message",
      source: { snapshotIndex: index, ...(nonemptyString(message.uuid) ? { messageUUID: message.uuid } : {}) },
      human: { text: decider.text },
    })
  }
  for (const [id, entries] of calls) {
    if (entries.some((call) => call.block.name === "AskUserQuestion") && !results.has(id)) {
      limitations.unansweredQuestionCalls++
    }
  }
  return { interactions, knownCompaction, limitations }
}

export function selectWorkflowHistory(
  messages: readonly unknown[],
  count: unknown,
  analyzeTurn: (messages: readonly unknown[]) => unknown,
  isChild: boolean,
): WorkflowRelay {
  const requestedTurns = resolveCount(count)
  if (isChild) return { kind: "none" }
  const analysis = analyzeTurn(messages)
  if (record(analysis) && analysis.scheduledTrigger === true) return { kind: "automated" }
  const { interactions, knownCompaction, limitations } = collectWorkflowHistory(messages, analyzeTurn, analysis)
  const selected = interactions.slice(-requestedTurns)
  const selection: WorkflowSelection = {
    snapshot: "workflow-start",
    requestedTurns,
    availableTurns: interactions.length,
    effectiveTurns: selected.length,
    omittedByCount: interactions.length - selected.length,
    omittedBySize: 0,
    knownCompaction,
    attributionLimitations: limitations,
    interactions: selected,
  }
  const relay: WorkflowRelay = { kind: "relay", selection }
  while (selected.length > 0 && renderWorkflowHistory(relay).length > MAX_HISTORY_CHARACTERS) {
    selected.shift()
    selection.effectiveTurns--
    selection.omittedBySize++
  }
  return relay
}

// Match the native harness's newline normalization before indenting every line.
function normalizeLines(text: string): string {
  // biome-ignore lint/suspicious/noControlCharactersInRegex: Normalize the same frame-forging separators as the native harness.
  return text.replace(/\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g, "\n")
}

function indent(text: string): string {
  return normalizeLines(text)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n")
}

export function renderWorkflowHistory(relay: unknown): string {
  if (!record(relay) || relay.kind !== "relay" || !record(relay.selection)) {
    throw new Error("Workflow history rendering requires a selected relay.")
  }
  return Mustache.render(prompts.history, { selectionJson: indentedJson(relay.selection) })
}

function indentedJson(value: unknown): string {
  // Escape Unicode newlines inside JSON strings instead of changing their data.
  const json = JSON.stringify(value, null, 2).replace(
    /[\u2028\u2029\u0085]/g,
    (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`,
  )
  return indent(json)
}

export function renderWorkflowTask(task: string): string {
  return Mustache.render(prompts.task, { taskText: indent(task) })
}

export function renderWorkflowQuestionAnswer(
  messages: readonly unknown[],
  resultMessage: unknown,
  toolUseID: string,
): string | null {
  const index = messages.indexOf(resultMessage)
  if (index < 0 || !nonemptyString(toolUseID)) return null
  const noHumanTurn = () => ({ decider: null })
  const { interactions } = collectWorkflowHistory(messages, noHumanTurn, noHumanTurn())
  const interaction = interactions.find(
    (item) =>
      item.kind === "question-answer" && item.source.snapshotIndex === index && item.source.toolUseID === toolUseID,
  )
  if (!interaction) return null
  return Mustache.render(prompts.questionAnswer, { exchangeJson: indentedJson(interaction) })
}

export function unwrapWorkflowTask(text: string, automatedHeader?: string, legacyTaskHeader?: string): string {
  const prefix = Mustache.render(prompts.task, { taskText: "" })
  const candidate =
    automatedHeader && text.startsWith(`${automatedHeader}\n`) ? text.slice(automatedHeader.length + 1) : text
  if (candidate.startsWith(prefix)) return candidate.slice(prefix.length)
  if (legacyTaskHeader && candidate.startsWith(`${legacyTaskHeader}\n`))
    return candidate.slice(legacyTaskHeader.length + 1)
  return text
}

export function workflowHistoryPreflight(): string {
  return Mustache.render(prompts.preflight, {
    defaultTurns: DEFAULT_USER_HISTORY_TURNS,
    maximumTurns: MAX_USER_HISTORY_TURNS,
    maximumCharacters: MAX_HISTORY_CHARACTERS,
  })
}

export function appendWorkflowPreflight(text: string): string {
  return text.includes(prompts.preflightMarker)
    ? text
    : `${text}\n\n${prompts.preflightMarker}\n${workflowHistoryPreflight()}`
}
