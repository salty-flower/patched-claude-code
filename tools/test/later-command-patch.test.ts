import { afterAll, beforeAll, expect, test } from "bun:test"
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { gte, lt } from "semver"
import { patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { renderRunnableBundle } from "./helpers/render-runnable-bundle"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = targetVersion()
const laterPatches = loadPatchEntriesFromFile(join(ROOT, "patches", "later-command.toml"))
const testLaterCommand = laterPatches.some((patch) => patchApplies(patch, TARGET_VERSION))
const targetUses238LaterSymbols = gte(TARGET_VERSION, "2.1.238") && lt(TARGET_VERSION, "2.2.0")
const targetUses234LaterSymbols = gte(TARGET_VERSION, "2.1.234") && lt(TARGET_VERSION, "2.1.238")
const targetUses233LaterSymbols = gte(TARGET_VERSION, "2.1.233") && lt(TARGET_VERSION, "2.1.234")
const targetUses229LaterSymbols = gte(TARGET_VERSION, "2.1.229") && lt(TARGET_VERSION, "2.1.233")
const targetUses228LaterSymbols = gte(TARGET_VERSION, "2.1.228") && lt(TARGET_VERSION, "2.1.229")
const targetUses227LaterSymbols = gte(TARGET_VERSION, "2.1.227") && lt(TARGET_VERSION, "2.1.228")
const targetUses241ExactFireSymbols = gte(TARGET_VERSION, "2.1.241") && lt(TARGET_VERSION, "2.2.0")
const targetUses246LaterSymbols = gte(TARGET_VERSION, "2.1.246") && lt(TARGET_VERSION, "2.2.0")
const targetUses241SubmitSymbols = targetUses241ExactFireSymbols && !targetUses246LaterSymbols
const targetUses238ExactFireSymbols = targetUses238LaterSymbols && !targetUses241ExactFireSymbols
const targetUses234ExactFireSymbols = targetUses234LaterSymbols
const targetUses233ExactFireSymbols = targetUses233LaterSymbols
const targetUses229ExactFireSymbols = targetUses229LaterSymbols
const targetUses228ExactFireSymbols = targetUses228LaterSymbols
const targetUses221LaterSymbols = gte(TARGET_VERSION, "2.1.221") && lt(TARGET_VERSION, "2.1.222")
const targetUses220LaterSymbols = gte(TARGET_VERSION, "2.1.220") && lt(TARGET_VERSION, "2.1.221")
const targetUses218LaterSymbols = gte(TARGET_VERSION, "2.1.218") && lt(TARGET_VERSION, "2.1.220")
const targetUses217LaterSymbols = gte(TARGET_VERSION, "2.1.217") && lt(TARGET_VERSION, "2.1.218")
const targetUses216LaterSymbols = gte(TARGET_VERSION, "2.1.216") && lt(TARGET_VERSION, "2.1.217")
const targetUses215LaterSymbols = gte(TARGET_VERSION, "2.1.215") && lt(TARGET_VERSION, "2.1.216")
const targetUses212LaterSymbols = gte(TARGET_VERSION, "2.1.212") && lt(TARGET_VERSION, "2.1.215")
const targetUses210LaterSymbols = gte(TARGET_VERSION, "2.1.210") && lt(TARGET_VERSION, "2.1.212")
const targetUses208LaterSymbols = gte(TARGET_VERSION, "2.1.208") && lt(TARGET_VERSION, "2.1.210")
const targetUsesAbsoluteLater =
  targetUses238LaterSymbols ||
  targetUses234LaterSymbols ||
  targetUses233LaterSymbols ||
  targetUses229LaterSymbols ||
  targetUses228LaterSymbols ||
  targetUses227LaterSymbols ||
  targetUses221LaterSymbols ||
  targetUses220LaterSymbols ||
  targetUses218LaterSymbols ||
  targetUses217LaterSymbols ||
  targetUses216LaterSymbols ||
  targetUses215LaterSymbols ||
  targetUses212LaterSymbols ||
  targetUses210LaterSymbols ||
  targetUses208LaterSymbols
const targetUsesNewYorkTime = process.env.TZ === "America/New_York"
const targetUses207LaterSymbols = gte(TARGET_VERSION, "2.1.207") && lt(TARGET_VERSION, "2.1.208")
const targetUses206LaterSymbols = gte(TARGET_VERSION, "2.1.206") && lt(TARGET_VERSION, "2.1.207")
const targetUses205LaterSymbols = gte(TARGET_VERSION, "2.1.205") && lt(TARGET_VERSION, "2.1.206")
const targetUses201LaterSymbols = gte(TARGET_VERSION, "2.1.201") && lt(TARGET_VERSION, "2.1.205")
const targetIs201 = TARGET_VERSION === "2.1.201"

type LaterTask = {
  agentId?: string
  id: string
  cron: string
  prompt: string
  createdAt: number
  recurring?: boolean
  later?: boolean
  laterAt?: number
  laterPastedContents?: Record<number, LaterPastedContent>
}

type LaterPastedContent = {
  id: number
  type: "text" | "image"
  content: string
  mediaType?: string
}

type ParsedReference = { id: number; match: string; index: number }

type LaterHookResult = {
  cleared: boolean
  cursorOffset: number | null
  inputValue: string | null
  notifications: string[]
  pastedContentsCleared: boolean
  resetHistory: boolean
  scheduledTasksEnabled: boolean
  tasks: LaterTask[]
}

const tempDir = mkdtempSync(join(tmpdir(), "patched-cc-later-command-"))
let applied = 0
let patched = ""

beforeAll(async () => {
  if (!testLaterCommand) return
  const entrypoint = await renderRunnableBundle({ root: ROOT, version: TARGET_VERSION, outDir: tempDir, patchFiles: ["later-command.toml"] })
  const graphDir = join(entrypoint, "..", "graph.patched", "darwin-arm64")
  patched = readdirSync(graphDir).filter((file) => file.endsWith(".js")).map((file) => readFileSync(join(graphDir, file), "utf8")).join("\n")
  applied = laterPatches.filter((patch) => patchApplies(patch, TARGET_VERSION)).length
}, 240000)

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function expectContainsOneOf(body: string, snippets: string[]): void {
  expect(snippets.some((snippet) => body.includes(snippet))).toBe(true)
}

function getAbsoluteSubmitCode(): string {
  const suffix = targetUses246LaterSymbols
    ? "2-1-246"
    : targetUses241SubmitSymbols
    ? "2-1-241"
    : targetUses238LaterSymbols
    ? "2-1-238"
    : targetUses234LaterSymbols
    ? "2-1-234"
    : targetUses233LaterSymbols
    ? "2-1-233"
    : targetUses229LaterSymbols
    ? "2-1-229"
    : targetUses228LaterSymbols
    ? "2-1-228"
    : targetUses227LaterSymbols
    ? "2-1-227"
    : targetUses221LaterSymbols
    ? "2-1-221"
    : targetUses220LaterSymbols
      ? "2-1-220"
      : targetUses218LaterSymbols
      ? "2-1-218"
    : targetUses217LaterSymbols
      ? "2-1-217"
      : targetUses216LaterSymbols
        ? "2-1-216"
        : targetUses215LaterSymbols
          ? "2-1-215"
          : targetUses212LaterSymbols
            ? "2-1-212"
            : targetUses210LaterSymbols
              ? "2-1-210"
              : "2-1-208"
  const patch = laterPatches.find((entry) => entry.name === `later-command-submit-hook-${suffix}`)
  const expectedTransform = targetUses234LaterSymbols || targetUses233LaterSymbols ? "insert_before_node" : "insert_after_node"
  if (!patch || patch.transform?.op !== expectedTransform) {
    throw new Error(`${TARGET_VERSION} /later submit transform is missing`)
  }
  return patch.transform.code
}

function parseReferences(input: string): ParsedReference[] {
  const pattern = /\[(Pasted text|Image|\.\.\.Truncated text) #(\d+)(?: \+\d+ lines)?(\.)*\]/g
  return [...input.matchAll(pattern)]
    .map((match) => ({ id: Number.parseInt(match[2] ?? "0", 10), match: match[0], index: match.index }))
    .filter((match) => match.id > 0)
}

function expandPastedTextRefs(input: string, pastedContents: Record<number, LaterPastedContent>): string {
  let expanded = input
  const references = parseReferences(input)
  for (let index = references.length - 1; index >= 0; index -= 1) {
    const reference = references[index]!
    const content = pastedContents[reference.id]
    if (content?.type !== "text") continue
    expanded =
      expanded.slice(0, reference.index) +
      content.content +
      expanded.slice(reference.index + reference.match.length)
  }
  return expanded
}

async function run208LaterHook(
  input: string,
  seedTasks: LaterTask[] = [],
  pastedContents: Record<number, LaterPastedContent> = {},
): Promise<LaterHookResult> {
  if (targetUses246LaterSymbols) {
    const tasks = [...seedTasks]
    const notifications: string[] = []
    const result: LaterHookResult = {
      cleared: false,
      cursorOffset: null,
      inputValue: null,
      notifications,
      pastedContentsCleared: false,
      resetHistory: false,
      scheduledTasksEnabled: false,
      tasks,
    }
    let taskCounter = 0
    const submit = new Function(
      "P",
      "U",
      "Wye",
      "Aa",
      "O",
      "e",
      "o",
      "Fde",
      "__acc_schedule_later",
      "__acc_team_context",
      "__acc_enable_later",
      "r",
      "v",
      "s",
      `"use strict";return async()=>{${getAbsoluteSubmitCode()}}`,
    )(
      input,
      pastedContents,
      (value: string, contents: Record<number, LaterPastedContent>) => ({
        expanded: expandPastedTextRefs(value, contents),
        stripped: value,
        removed: [],
      }),
      parseReferences,
      "prompt",
      {
        fromKeybinding: false,
        addNotification: ({ text }: { text: string }) => notifications.push(text),
      },
      { isRemoteMode: false },
      () => tasks,
      async (cron: string, prompt: string, _recurring: boolean, _durable: boolean, agentId?: string) => {
        const task: LaterTask = {
          id: `later-${++taskCounter}`,
          cron,
          prompt,
          createdAt: Date.now(),
          recurring: false,
          ...(agentId === undefined ? {} : { agentId }),
        }
        tasks.push(task)
        return task.id
      },
      () => undefined,
      (enabled: boolean) => {
        result.scheduledTasksEnabled = enabled
      },
      (value: string) => {
        result.inputValue = value
      },
      (offset: number) => {
        result.cursorOffset = offset
      },
      (contents: Record<string, unknown>) => {
        result.pastedContentsCleared = Object.keys(contents).length === 0
      },
    ) as () => Promise<void>
    await submit()
    return result
  }

  if (targetUses238LaterSymbols) {
    const tasks = [...seedTasks]
    const notifications: string[] = []
    const result: LaterHookResult = {
      cleared: false,
      cursorOffset: null,
      inputValue: null,
      notifications,
      pastedContentsCleared: false,
      resetHistory: false,
      scheduledTasksEnabled: false,
      tasks,
    }
    const pastedTextExpander = targetUses241SubmitSymbols ? "jMp" : "$yp"
    const pastedReferenceParser = targetUses241SubmitSymbols ? "nx" : "KR"
    const cursorSetter = targetUses241SubmitSymbols ? "T" : "w"
    const taskGetter = targetUses241SubmitSymbols ? "QN" : "HN"
    const taskCreator = targetUses241SubmitSymbols ? "Zqr" : "Qjr"
    const teamGetter = targetUses241SubmitSymbols ? "F3" : "g3"
    const enablePolling = targetUses241SubmitSymbols ? "Q4e" : "bje"
    const submit = new Function(
      "x",
      "F",
      pastedTextExpander,
      pastedReferenceParser,
      "I",
      "e",
      "r",
      taskGetter,
      taskCreator,
      teamGetter,
      enablePolling,
      "o",
      cursorSetter,
      "i",
      `"use strict";return async()=>{${getAbsoluteSubmitCode()}}`,
    )(
      input,
      pastedContents,
      (value: string, contents: Record<number, LaterPastedContent>) => ({
        expanded: expandPastedTextRefs(value, contents),
      }),
      parseReferences,
      "prompt",
      {
        fromKeybinding: false,
        addNotification: ({ text }: { text: string }) => notifications.push(text),
      },
      { isRemoteMode: false },
      () => tasks,
      async (cron: string, prompt: string) => {
        const id = `later-${tasks.length + 1}`
        tasks.push({ id, cron, prompt, createdAt: Date.now(), recurring: false })
        return id
      },
      () => ({ agentId: undefined }),
      (enabled: boolean) => {
        result.scheduledTasksEnabled = enabled
      },
      (value: string) => {
        result.inputValue = value
      },
      (offset: number) => {
        result.cursorOffset = offset
      },
      (contents: Record<string, unknown>) => {
        result.pastedContentsCleared = Object.keys(contents).length === 0
      },
    ) as () => Promise<void>
    await submit()
    return result
  }

  if (targetUses234LaterSymbols) {
    const tasks = [...seedTasks]
    const notifications: string[] = []
    const result: LaterHookResult = {
      cleared: false,
      cursorOffset: null,
      inputValue: null,
      notifications,
      pastedContentsCleared: false,
      resetHistory: false,
      scheduledTasksEnabled: false,
      tasks,
    }
    const submit = new Function(
      "Ht",
      "Oo",
      "zKe",
      "Rx",
      "$U",
      "xn",
      "iA",
      "mt",
      "Pb",
      "xr",
      "BU",
      "fH",
      "nHr",
      "iHr",
      "E4",
      "W2e",
      `"use strict";return async()=>{${getAbsoluteSubmitCode()}}`,
    )(
      input,
      pastedContents,
      expandPastedTextRefs,
      parseReferences,
      "prompt",
      { fromKeybinding: false },
      { isRemoteMode: false },
      ({ text }: { text: string }) => notifications.push(text),
      (value: string) => {
        result.inputValue = value
      },
      {
        setCursorOffset: (offset: number) => {
          result.cursorOffset = offset
        },
      },
      (contents: Record<string, unknown>) => {
        result.pastedContentsCleared = Object.keys(contents).length === 0
      },
      () => tasks,
      (_cron: string, createdAt: number) => createdAt + 60000,
      async (cron: string, prompt: string) => {
        const id = `later-${tasks.length + 1}`
        tasks.push({ id, cron, prompt, createdAt: Date.now(), recurring: false })
        return id
      },
      () => ({ agentId: undefined }),
      (enabled: boolean) => {
        result.scheduledTasksEnabled = enabled
      },
    ) as () => Promise<void>
    await submit()
    return result
  }
  if (targetUses233LaterSymbols) {
    const tasks = [...seedTasks]
    const notifications: string[] = []
    const result: LaterHookResult = {
      cleared: false,
      cursorOffset: null,
      inputValue: null,
      notifications,
      pastedContentsCleared: false,
      resetHistory: false,
      scheduledTasksEnabled: false,
      tasks,
    }
    const submit = new Function(
      "Ft",
      "OA",
      "Nn",
      "HT",
      "Ze",
      "Yg",
      "$r",
      "K$",
      "mN",
      "j5o",
      "aot",
      "JNe",
      `"use strict";return async()=>{${getAbsoluteSubmitCode()}}`,
    )(
      input,
      "prompt",
      { fromKeybinding: false },
      { isRemoteMode: false },
      ({ text }: { text: string }) => notifications.push(text),
      (value: string) => {
        result.inputValue = value
      },
      {
        setCursorOffset: (offset: number) => {
          result.cursorOffset = offset
        },
      },
      (contents: Record<string, unknown>) => {
        result.pastedContentsCleared = Object.keys(contents).length === 0
      },
      () => tasks,
      (_cron: string, _createdAt: number, _id: string) => _createdAt + 60000,
      (task: LaterTask) => tasks.push(task),
      (enabled: boolean) => {
        result.scheduledTasksEnabled = enabled
      },
    ) as () => Promise<void>
    await submit()
    return result
  }
  const [taskGetter, nextRun, addTask, enablePolling] = targetUses229LaterSymbols
    ? ["cL", "aCr", "AZe", "oHe"]
    : targetUses228LaterSymbols
    ? ["UL", "ZEr", "sQe", "dMe"]
    : targetUses227LaterSymbols
    ? ["wL", "ySr", "SJe", "NDe"]
    : targetUses221LaterSymbols
    ? ["DD", "Sfr", "VGe", "xke"]
    : targetUses220LaterSymbols
      ? ["iO", "hir", "W5e", "DAe"]
      : targetUses218LaterSymbols
      ? ["nO", "Unr", "l5e", "Zwe"]
    : targetUses217LaterSymbols
      ? ["vD", "Zer", "D9e", "KCe"]
      : targetUses216LaterSymbols
        ? ["hD", "der", "o9e", "xCe"]
        : targetUses215LaterSymbols
          ? ["XI", "kXt", "f4e", "Dve"]
          : targetUses212LaterSymbols
            ? ["nD", "HYt", "u3e", "VEe"]
            : targetUses210LaterSymbols
              ? ["OI", "Yzt", "PBe", "jSe"]
              : ["FI", "xVt", "Z$e", "ESe"]
  const [inputName, modeName, skipName, clearBufferName, resetHistoryName] =
    targetUses229LaterSymbols || targetUses228LaterSymbols || targetUses227LaterSymbols
    ? ["R", "P", "n", "A", "k"]
    : targetUses221LaterSymbols
    ? ["k", "O", "n", "R", "P"]
    : targetUses220LaterSymbols || targetUses218LaterSymbols
      ? ["x", "O", "n", "I", "D"]
    : targetUses217LaterSymbols || targetUses216LaterSymbols
      ? ["k", "H", "n", "I", "D"]
      : targetUses215LaterSymbols || targetUses212LaterSymbols
        ? ["k", "O", "A", "I", "D"]
        : ["I", "P", "n", "H", "k"]
  const [inputSetterName, cursorSetterName, pastedContentsSetterName] =
    targetUses229LaterSymbols || targetUses228LaterSymbols || targetUses227LaterSymbols
    ? ["i", "C", "s"]
    : targetUses221LaterSymbols || targetUses220LaterSymbols || targetUses218LaterSymbols
    ? ["i", "A", "s"]
    : ["i", "x", "s"]
  const tasks = [...seedTasks]
  const notifications: string[] = []
  const result: LaterHookResult = {
    cleared: false,
    cursorOffset: null,
    inputValue: null,
    notifications,
    pastedContentsCleared: false,
    resetHistory: false,
    scheduledTasksEnabled: false,
    tasks,
  }
  const submit = new Function(
    "e",
    inputName,
    modeName,
    skipName,
    taskGetter,
    nextRun,
    addTask,
    enablePolling,
    inputSetterName,
    cursorSetterName,
    pastedContentsSetterName,
    clearBufferName,
    resetHistoryName,
    `"use strict";return async()=>{${getAbsoluteSubmitCode()}}`,
  )(
    { addNotification: ({ text }: { text: string }) => notifications.push(text) },
    input,
    "prompt",
    false,
    () => tasks,
    (_cron: string, createdAt: number) => createdAt + 60000,
    (task: LaterTask) => tasks.push(task),
    (enabled: boolean) => {
      result.scheduledTasksEnabled = enabled
    },
    (value: string) => {
      result.inputValue = value
    },
    (offset: number) => {
      result.cursorOffset = offset
    },
    (contents: Record<string, unknown>) => {
      result.pastedContentsCleared = Object.keys(contents).length === 0
    },
    () => {
      result.resetHistory = true
    },
    () => {
      result.cleared = true
    },
  ) as () => Promise<void>
  await submit()
  return result
}

async function run201LaterHook(patched: string, input: string, seedTasks: LaterTask[] = []): Promise<LaterHookResult> {
  const start = patched.indexOf("async function pSr(e){")
  const end = patched.indexOf("async function PNc(e){", start)
  expect(start).toBeGreaterThanOrEqual(0)
  expect(end).toBeGreaterThan(start)

  const functionSource = patched.slice(start, end)
  const tasks = [...seedTasks]
  const notifications: string[] = []
  const result: LaterHookResult = {
    cleared: false,
    cursorOffset: null,
    inputValue: null,
    notifications,
    pastedContentsCleared: false,
    resetHistory: false,
    scheduledTasksEnabled: false,
    tasks,
  }
  const factory = new Function("GM", "lA", "AJe", "uw", "oft", "F_e", "tne", `${functionSource}; return pSr;`)
  const submit = factory(
    () => [],
    (contents: Record<string, unknown>) => contents,
    () => false,
    () => tasks,
    (_cron: string, createdAt: number) => createdAt + 60000,
    (task: LaterTask) => tasks.push(task),
    (enabled: boolean) => {
      result.scheduledTasksEnabled = enabled
    },
  ) as (event: Record<string, unknown>) => Promise<void>

  await submit({
    addNotification: ({ text }: { text: string }) => notifications.push(text),
    helpers: {
      clearBuffer: () => {
        result.cleared = true
      },
      resetHistory: () => {
        result.resetHistory = true
      },
      setCursorOffset: (offset: number) => {
        result.cursorOffset = offset
      },
    },
    input,
    mode: "prompt",
    onInputChange: (value: string) => {
      result.inputValue = value
    },
    pastedContents: {},
    queryGuard: { isActive: false },
    setPastedContents: (contents: Record<string, unknown>) => {
      result.pastedContentsCleared = Object.keys(contents).length === 0
    },
  })
  return result
}

test.skipIf(!testLaterCommand)(
  "/later schedules a session-only one-shot cron before prompt queueing",
  () => {
    expect(applied).toBe(
      targetUses246LaterSymbols
        ? 12
        : targetUses238LaterSymbols || targetUses234LaterSymbols
          ? 6
          : targetUsesAbsoluteLater
            ? 3
            : 2,
    )
    expect(patched).toContain("__trim.match(/^\\/later\\s+(\\d+)\\s*([smhd])\\s+([\\s\\S]+)$/i)")
    expectContainsOneOf(patched, [
      "await Zqr(__cron,__prompt,!1,!1,F3()?.agentId)",
      "await Qjr(__cron,__prompt,!1,!1,g3()?.agentId)",
      "await iHr(__cron,__prompt,!1,!1,E4()?.agentId)",
      "await xut(__cron,__prompt,!1,!1,void 0)",
      "await Att(__cron,__prompt,!1,!1,void 0)",
      "await gsH(__cron,__prompt,!1,!1,void 0)",
      "await hoH(__cron,__prompt,!1,!1,void 0)",
      "await SeH(__cron,__prompt,!1,!1,void 0)",
      "__e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      "F_e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      "Y2e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      "DFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      "QFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      "Z$e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      "Z$e({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "PBe({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "u3e({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "f4e({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "o9e({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "D9e({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "l5e({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "W5e({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "VGe({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "SJe({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "sQe({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "AZe({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "aot({id:__id,cron:__cron,prompt:__prompt,createdAt:__createdAt,recurring:!1,later:!0,laterAt:__when.getTime()})",
      "__id=await __acc_schedule_later(__cron,__prompt,!1,!1,__acc_team_context()?.agentId),__task=Fde().find",
    ])
    expectContainsOneOf(patched, [
      "if(__task)__task.later=!0",
      "__task.later=!0,__task.laterAt=__when.getTime()",
      "later:!0})",
      "later:!0,laterAt:",
    ])
    expectContainsOneOf(patched, [
      "Wee(!0)",
      "uX(!0)",
      "bo(!0)",
      "Or(!0)",
      "va(!0)",
      "jte(!0)",
      "tne(!0)",
      "ybe(!0)",
      "tTe(!0)",
      "DTe(!0)",
      "ESe(!0)",
      "jSe(!0)",
      "VEe(!0)",
      "Dve(!0)",
      "xCe(!0)",
      "KCe(!0)",
      "Zwe(!0)",
      "DAe(!0)",
      "xke(!0)",
      "NDe(!0)",
      "dMe(!0)",
      "oHe(!0)",
      "JNe(!0)",
      "W2e(!0)",
      "bje(!0)",
      "Q4e(!0)",
      "__acc_enable_later(!0)",
    ])
    if (targetUses201LaterSymbols) {
      expect(patched).toContain("F_e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).not.toContain(
        "__e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      )
      expect(patched).toContain("tne(!0)")
      expect(patched).not.toContain("jte(!0)")
    } else if (targetUses205LaterSymbols) {
      expect(patched).toContain("Y2e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).not.toContain(
        "F_e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      )
      expect(patched).toContain("ybe(!0)")
      expect(patched).not.toContain("tne(!0)")
    } else if (targetUses206LaterSymbols) {
      expect(patched).toContain("DFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).not.toContain(
        "Y2e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      )
      expect(patched).toContain("tTe(!0)")
      expect(patched).not.toContain("ybe(!0)")
    } else if (targetUses207LaterSymbols) {
      expect(patched).toContain("QFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).not.toContain(
        "DFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      )
      expect(patched).toContain("DTe(!0)")
      expect(patched).not.toContain("tTe(!0)")
    } else if (targetUses246LaterSymbols) {
      expect(patched).toContain("__task.laterAt=__when.getTime()")
      expect(patched).toContain("__prompt=Wye(__rawPrompt,U).expanded")
      expect(patched).toContain("let __refs=new Set(Aa(__rawPrompt).map((__r)=>__r.id))")
      expect(patched).toContain('r(""),v(0),s({})')
      expect(patched).toContain(
        "__id=await __acc_schedule_later(__cron,__prompt,!1,!1,__acc_team_context()?.agentId),__task=Fde().find",
      )
      expect(patched).toContain("__acc_enable_later(!0)")
      expect(patched).not.toContain("__prompt=jMp(__rawPrompt,F).expanded")
      expect(patched).not.toContain("__id=await Zqr(__cron,__prompt,!1,!1,F3()?.agentId)")
      expect(getAbsoluteSubmitCode()).not.toContain("agentId:ho()")
      expect(getAbsoluteSubmitCode()).not.toContain("Ze.register(__task)")
    } else if (targetUses241ExactFireSymbols) {
      expect(patched).toContain("__task.laterAt=__when.getTime()")
      expect(patched).toContain("__prompt=jMp(__rawPrompt,F).expanded")
      expect(patched).toContain("let __refs=new Set(nx(__rawPrompt).map((__r)=>__r.id))")
      expect(patched).toContain('o(""),T(0),i({})')
      expect(patched).toContain("__id=await Zqr(__cron,__prompt,!1,!1,F3()?.agentId),__task=QN().find")
      expect(patched).toContain("Q4e(!0)")
      expect(patched).not.toContain("__id=await Qjr(__cron,__prompt,!1,!1,g3()?.agentId)")
      expect(patched).not.toContain("__prompt=$yp(__rawPrompt,F).expanded")
      expect(patched).toContain(
        "V.later===!0&&Number.isFinite(V.laterAt)&&V.laterAt>V.createdAt?V.laterAt:Rgi(V.cron,V.createdAt,V.id,Y)",
      )
      expect(patched).not.toContain(
        "let K=V.recurring?Cqn(V.cron,V.lastFiredAt??V.createdAt,V.id,Y):Rgi(V.cron,V.createdAt,V.id,Y);",
      )
      expect(patched).not.toContain("W2e(!0)")
    } else if (targetUses238ExactFireSymbols) {
      expect(patched).toContain("__task.laterAt=__when.getTime()")
      expect(patched).toContain(
        "z.later===!0&&Number.isFinite(z.laterAt)&&z.laterAt>z.createdAt?z.laterAt:Qai(z.cron,z.createdAt,z.id,Y)",
      )
      expect(patched).not.toContain(
        "let W=z.recurring?tUn(z.cron,z.lastFiredAt??z.createdAt,z.id,Y):Qai(z.cron,z.createdAt,z.id,Y);",
      )
      expect(patched).toContain("bje(!0)")
      expect(patched).not.toContain("W2e(!0)")
    } else if (targetUses234ExactFireSymbols) {
      expect(patched).toContain("__task.laterAt=__when.getTime()")
      expect(patched).toContain(
        "z.later===!0&&Number.isFinite(z.laterAt)&&z.laterAt>z.createdAt?z.laterAt:WKo(z.cron,z.createdAt,z.id,Y)",
      )
      expect(patched).not.toContain(
        "let K=z.recurring?xOn(z.cron,z.lastFiredAt??z.createdAt,z.id,Y):WKo(z.cron,z.createdAt,z.id,Y);",
      )
      expect(patched).toContain("W2e(!0)")
      expect(patched).not.toContain("JNe(!0)")
    } else if (targetUses233ExactFireSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("q.later===!0&&Number.isFinite(q.laterAt)&&q.laterAt>q.createdAt?q.laterAt:j5o(q.cron,q.createdAt,q.id,Y)")
      expect(patched).not.toContain("B.later===!0&&Number.isFinite(B.laterAt)&&B.laterAt>B.createdAt?B.laterAt:LNo(B.cron,B.createdAt,B.id,q)")
      expect(patched).toContain("JNe(!0)")
      expect(patched).not.toContain("oHe(!0)")
    } else if (targetUses229ExactFireSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("B.later===!0&&Number.isFinite(B.laterAt)&&B.laterAt>B.createdAt?B.laterAt:LNo")
      expect(patched).not.toContain("F.later===!0&&Number.isFinite(F.laterAt)&&F.laterAt>F.createdAt?F.laterAt:FMo")
      expect(patched).toContain("oHe(!0)")
      expect(patched).not.toContain("dMe(!0)")
    } else if (targetUses228ExactFireSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("F.later===!0&&Number.isFinite(F.laterAt)&&F.laterAt>F.createdAt?F.laterAt:FMo")
      expect(patched).not.toContain("B.later===!0&&Number.isFinite(B.laterAt)&&B.laterAt>B.createdAt?B.laterAt:Sxo")
      expect(patched).toContain("dMe(!0)")
      expect(patched).not.toContain("xke(!0)")
    } else if (targetUses227LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("B.later===!0&&Number.isFinite(B.laterAt)&&B.laterAt>B.createdAt?B.laterAt:Sxo")
      expect(patched).not.toContain("F.later===!0&&Number.isFinite(F.laterAt)&&F.laterAt>F.createdAt?F.laterAt:jwo")
      expect(patched).toContain("NDe(!0)")
      expect(patched).not.toContain("xke(!0)")
    } else if (targetUses221LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("F.later===!0&&Number.isFinite(F.laterAt)&&F.laterAt>F.createdAt?F.laterAt:jwo")
      expect(patched).not.toContain("q.later===!0&&Number.isFinite(q.laterAt)&&q.laterAt>q.createdAt?q.laterAt:Npo")
      expect(patched).toContain("xke(!0)")
      expect(patched).not.toContain("DAe(!0)")
    } else if (targetUses220LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("q.later===!0&&Number.isFinite(q.laterAt)&&q.laterAt>q.createdAt?q.laterAt:Npo")
      expect(patched).not.toContain("j.later===!0&&Number.isFinite(j.laterAt)&&j.laterAt>j.createdAt?j.laterAt:buo")
      expect(patched).toContain("DAe(!0)")
      expect(patched).not.toContain("Zwe(!0)")
    } else if (targetUses218LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("j.later===!0&&Number.isFinite(j.laterAt)&&j.laterAt>j.createdAt?j.laterAt:buo")
      expect(patched).not.toContain("q.later===!0&&Number.isFinite(q.laterAt)&&q.laterAt>q.createdAt?q.laterAt:Wio")
      expect(patched).toContain("Zwe(!0)")
      expect(patched).not.toContain("KCe(!0)")
    } else if (targetUses217LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("q.later===!0&&Number.isFinite(q.laterAt)&&q.laterAt>q.createdAt?q.laterAt:Wio")
      expect(patched).not.toContain("U.later===!0&&Number.isFinite(U.laterAt)&&U.laterAt>U.createdAt?U.laterAt:too")
      expect(patched).toContain("KCe(!0)")
      expect(patched).not.toContain("xCe(!0)")
    } else if (targetUses216LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("U.later===!0&&Number.isFinite(U.laterAt)&&U.laterAt>U.createdAt?U.laterAt:too")
      expect(patched).not.toContain("G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:VQn")
      expect(patched).toContain("xCe(!0)")
      expect(patched).not.toContain("Dve(!0)")
    } else if (targetUses215LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:VQn")
      expect(patched).not.toContain("W.later===!0&&Number.isFinite(W.laterAt)&&W.laterAt>W.createdAt?W.laterAt:iJn")
      expect(patched).toContain("Dve(!0)")
      expect(patched).not.toContain("VEe(!0)")
    } else if (targetUses212LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("W.later===!0&&Number.isFinite(W.laterAt)&&W.laterAt>W.createdAt?W.laterAt:iJn")
      expect(patched).not.toContain("j.later===!0&&Number.isFinite(j.laterAt)&&j.laterAt>j.createdAt?j.laterAt:XGn")
      expect(patched).toContain("VEe(!0)")
      expect(patched).not.toContain("jSe(!0)")
    } else if (targetUses210LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("j.later===!0&&Number.isFinite(j.laterAt)&&j.laterAt>j.createdAt?j.laterAt:XGn")
      expect(patched).not.toContain("G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:M8n")
      expect(patched).toContain("jSe(!0)")
      expect(patched).not.toContain("ESe(!0)")
    } else if (targetUsesAbsoluteLater) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain("G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:M8n")
      expect(patched).not.toContain(
        "QFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})",
      )
      expect(patched).toContain("ESe(!0)")
      expect(patched).not.toContain("jBt(!0)")
      expect(patched).not.toContain("DTe(!0)")
    }
    if (targetUses238LaterSymbols || targetUses234LaterSymbols) {
      expect(patched).toContain('text:"Scheduled "+__id+" for "+__when.toLocaleString()')
    } else {
      expect(patched).toContain("text:`Scheduled ${__id} for ${__when.toLocaleString()}`")
    }
  },
  120000,
)

test.skipIf(!testLaterCommand)(
  "/later list renders pending delayed prompts",
  () => {
    expect(patched).toContain('__trim==="/later list"')
    expect(patched).toContain("Pending /later prompts:")
    expect(patched).toContain("No pending /later prompts")
    expectContainsOneOf(patched, [
      "QN().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "Iv().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "FI().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "YR().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "DG().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "vR().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "Qv().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "uw().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "Jk().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "Zk().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "lI().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "OI().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "nD().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "XI().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "hD().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "vD().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "nO().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "iO().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "DD().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "wL().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "UL().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "cL().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "fH().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "mN().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "HN().filter((__t)=>__t.later===!0&&!__t.recurring)",
      "Fde().filter((__t)=>__t.later===!0&&!__t.recurring)",
    ])
    if (targetUses201LaterSymbols) {
      expect(patched).toContain("uw().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("Qv().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("oft(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("Upt(__t.cron,__t.createdAt)")
    } else if (targetUses205LaterSymbols) {
      expect(patched).toContain("Jk().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("uw().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("nGt(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("oft(__t.cron,__t.createdAt)")
    } else if (targetUses206LaterSymbols) {
      expect(patched).toContain("Zk().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("Jk().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("gVt(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("nGt(__t.cron,__t.createdAt)")
    } else if (targetUses207LaterSymbols) {
      expect(patched).toContain("lI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("Zk().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("E7t(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("gVt(__t.cron,__t.createdAt)")
    } else if (targetUses246LaterSymbols) {
      expect(patched).toContain("Fde().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("QN().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("Object.values(Ze.all())")
    } else if (targetUses241SubmitSymbols) {
      expect(patched).toContain("QN().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("HN().filter((__t)=>__t.later===!0&&!__t.recurring)")
    } else if (targetUses238LaterSymbols) {
      expect(patched).toContain("HN().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("fH().filter((__t)=>__t.later===!0&&!__t.recurring)")
    } else if (targetUses234LaterSymbols) {
      expect(patched).toContain("fH().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("mN().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("nHr(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("j5o(__t.cron,__t.createdAt,__t.id)")
    } else if (targetUses233LaterSymbols) {
      expect(patched).toContain("mN().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("cL().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("j5o(__t.cron,__t.createdAt,__t.id)")
      expect(patched).not.toContain("aCr(__t.cron,__t.createdAt)")
    } else if (targetUses229LaterSymbols) {
      expect(patched).toContain("cL().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("UL().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("aCr(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("ZEr(__t.cron,__t.createdAt)")
    } else if (targetUses228LaterSymbols) {
      expect(patched).toContain("UL().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("wL().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("ZEr(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("ySr(__t.cron,__t.createdAt)")
    } else if (targetUses227LaterSymbols) {
      expect(patched).toContain("wL().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("DD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("ySr(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("Sfr(__t.cron,__t.createdAt)")
    } else if (targetUses221LaterSymbols) {
      expect(patched).toContain("DD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("iO().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("Sfr(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("hir(__t.cron,__t.createdAt)")
    } else if (targetUses220LaterSymbols) {
      expect(patched).toContain("iO().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("nO().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("hir(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("Unr(__t.cron,__t.createdAt)")
    } else if (targetUses218LaterSymbols) {
      expect(patched).toContain("nO().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("vD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("Unr(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("Zer(__t.cron,__t.createdAt)")
    } else if (targetUses217LaterSymbols) {
      expect(patched).toContain("vD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("hD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("Zer(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("der(__t.cron,__t.createdAt)")
    } else if (targetUses216LaterSymbols) {
      expect(patched).toContain("hD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("XI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("der(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("kXt(__t.cron,__t.createdAt)")
    } else if (targetUses215LaterSymbols) {
      expect(patched).toContain("XI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("nD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("kXt(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("HYt(__t.cron,__t.createdAt)")
    } else if (targetUses212LaterSymbols) {
      expect(patched).toContain("nD().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("OI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("HYt(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("Yzt(__t.cron,__t.createdAt)")
    } else if (targetUses210LaterSymbols) {
      expect(patched).toContain("OI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("FI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("Yzt(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("xVt(__t.cron,__t.createdAt)")
    } else if (targetUses208LaterSymbols) {
      expect(patched).toContain("FI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("lI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("xVt(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("E7t(__t.cron,__t.createdAt)")
      expect(patched).toContain(
        '`${__d.getFullYear()}-${String(__d.getMonth()+1).padStart(2,"0")}-${String(__d.getDate()).padStart(2,"0")} ${String(__d.getHours()).padStart(2,"0")}:${String(__d.getMinutes()).padStart(2,"0")}:${String(__d.getSeconds()).padStart(2,"0")}`',
      )
    }
    if (targetUses238LaterSymbols || targetUses234LaterSymbols) {
      expect(patched).toContain('__text=__raw.length>20?__raw.slice(0,17)+"...":__raw')
    } else {
      expect(patched).toContain("__raw.length>20?`${__raw.slice(0,17)}...`:__raw")
    }
    if (targetUses238LaterSymbols || targetUses234LaterSymbols) {
      expect(patched).toContain('return String(__i+1)+". "+__text+" @ "+__when')
    } else {
      expect(patched).toContain("return `${__i+1}. ${__text} @ ${__when}`")
    }
    expect(patched).not.toContain("return `${__t.id} ${__when} ${__text}`")
  },
  120000,
)

test.skipIf(!testLaterCommand)(
  "/later appears in slash command suggestions",
  () => {
    expect(patched).toContain('name:"later"')
    if (targetUsesAbsoluteLater) {
      expect(patched).toContain('description:"Schedule a prompt; use 10m or [YYYY-MM-dd] HH:mm[:ss]"')
    } else {
      expect(patched).toContain('description:"Schedule a prompt for later; use /later 10m <prompt> or /later list"')
    }
    expect(patched).toContain("supportsNonInteractive:!1")
  },
  120000,
)

test.skipIf(!targetUsesAbsoluteLater)("/later stores exact relative and absolute fire times in 2.1.208+", async () => {
  const beforeRelative = Date.now()
  const relative = await run208LaterHook("/later 1m write the regression note")
  expect(relative.tasks).toHaveLength(1)
  expect(relative.tasks[0]?.laterAt).toBeGreaterThanOrEqual(beforeRelative + 60000)
  expect(relative.tasks[0]?.laterAt).toBeLessThanOrEqual(Date.now() + 60000)

  const explicitDate = new Date()
  explicitDate.setDate(explicitDate.getDate() + 2)
  explicitDate.setHours(12, 34, 56, 0)
  const stamp = `${explicitDate.getFullYear()}-${String(explicitDate.getMonth() + 1).padStart(2, "0")}-${String(explicitDate.getDate()).padStart(2, "0")} 12:34:56`
  const absolute = await run208LaterHook(`/later ${stamp} inspect the release`)
  expect(absolute.tasks[0]?.laterAt).toBe(explicitDate.getTime())
  expect(absolute.tasks[0]?.prompt).toBe("inspect the release")

  explicitDate.setHours(12, 35, 0, 0)
  const minuteStamp = `${explicitDate.getFullYear()}-${String(explicitDate.getMonth() + 1).padStart(2, "0")}-${String(explicitDate.getDate()).padStart(2, "0")} 12:35`
  const minutePrecision = await run208LaterHook(`/later ${minuteStamp} default seconds`)
  expect(minutePrecision.tasks[0]?.laterAt).toBe(explicitDate.getTime())
})

test.skipIf(!(targetUses238LaterSymbols || targetUses234LaterSymbols))(
  "/later expands pasted text and retains referenced images",
  async () => {
  const pastedContents: Record<number, LaterPastedContent> = {
    16: { id: 16, type: "image", content: "aW1hZ2U=", mediaType: "image/png" },
    17: { id: 17, type: "image", content: "", mediaType: "image/png" },
    18: { id: 18, type: "text", content: "expanded pasted body" },
    19: { id: 19, type: "image", content: "b3JwaGFu", mediaType: "image/png" },
  }
  const result = await run208LaterHook(
    "/later 1m inspect [Image #16], ignore [Image #17], then [Pasted text #18 +11 lines]",
    [],
    pastedContents,
  )

  expect(result.tasks).toHaveLength(1)
  expect(result.tasks[0]?.prompt).toBe("inspect [Image #16], ignore [Image #17], then expanded pasted body")
  expect(result.tasks[0]?.laterPastedContents).toEqual({ 16: pastedContents[16] })
  expect(result.pastedContentsCleared).toBe(true)
  },
)

test.skipIf(!targetUsesAbsoluteLater)("/later time-only form chooses the next local occurrence", async () => {
  const now = new Date()
  const prior = new Date(now.getTime() - 60000)
  const time = `${String(prior.getHours()).padStart(2, "0")}:${String(prior.getMinutes()).padStart(2, "0")}:${String(prior.getSeconds()).padStart(2, "0")}`
  const result = await run208LaterHook(`/later ${time} next occurrence`)
  const laterAt = result.tasks[0]?.laterAt ?? 0
  const scheduled = new Date(laterAt)
  expect(laterAt).toBeGreaterThan(Date.now())
  expect(laterAt).toBeLessThanOrEqual(Date.now() + 25 * 60 * 60 * 1000)
  expect(
    `${String(scheduled.getHours()).padStart(2, "0")}:${String(scheduled.getMinutes()).padStart(2, "0")}:${String(scheduled.getSeconds()).padStart(2, "0")}`,
  ).toBe(time)
})

test.skipIf(!targetUsesAbsoluteLater)("/later rejects invalid or past explicit timestamps", async () => {
  for (const input of [
    "/later 2026-02-30 12:00 impossible date",
    "/later 2000-01-01 00:00 past date",
    "/later 2:00 non-fixed hour",
    "/later 24:00 invalid hour",
    "/later 12:60 invalid minute",
  ]) {
    const result = await run208LaterHook(input)
    expect(result.tasks).toHaveLength(0)
    expect(result.notifications[0]).toContain("Usage: /later")
    expect(result.inputValue).toBeNull()
    expect(result.cleared).toBe(false)
  }
})

test.skipIf(!targetUsesAbsoluteLater)("/later rejects finite relative delays outside the Date range", async () => {
  const result = await run208LaterHook("/later 100000001d outside the Date range")

  expect(result.tasks).toHaveLength(0)
  expect(result.notifications[0]).toContain("Usage: /later")
  expect(result.scheduledTasksEnabled).toBe(false)
})

test.skipIf(!targetUsesAbsoluteLater || !targetUsesNewYorkTime)(
  "/later rejects a normalized DST-gap timestamp",
  async () => {
    const result = await run208LaterHook("/later 2030-03-10 02:30 skipped local time")
    expect(result.tasks).toHaveLength(0)
    expect(result.notifications[0]).toContain("Usage: /later")
  },
)

test.skipIf(!testLaterCommand || !targetIs201)(
  "/later submit hook executes 2.1.201 session-task helpers",
  async () => {
    const scheduled = await run201LaterHook(patched, "/later 1m write the regression note")
    expect(scheduled.tasks).toHaveLength(1)
    expect(scheduled.tasks[0]).toMatchObject({
      prompt: "write the regression note",
      recurring: false,
      later: true,
    })
    expect(scheduled.scheduledTasksEnabled).toBe(true)
    expect(scheduled.notifications[0]).toContain("Scheduled later-")
    expect(scheduled.cleared).toBe(true)
    expect(scheduled.cursorOffset).toBe(0)
    expect(scheduled.inputValue).toBe("")
    expect(scheduled.pastedContentsCleared).toBe(true)
    expect(scheduled.resetHistory).toBe(true)

    const listed = await run201LaterHook(patched, "/later list", scheduled.tasks)
    expect(listed.notifications[0]).toContain("Pending /later prompts:")
    expect(listed.notifications[0]).toContain("write the regress...")
    expect(listed.cleared).toBe(true)
    expect(listed.cursorOffset).toBe(0)
    expect(listed.inputValue).toBe("")
    expect(listed.pastedContentsCleared).toBe(true)
    expect(listed.resetHistory).toBe(true)
  },
  120000,
)
