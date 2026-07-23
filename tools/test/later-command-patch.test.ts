import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { gte, lt } from "semver"
import { applyPatchEntries, patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.172"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const laterPatches = loadPatchEntriesFromFile(join(ROOT, "patches", "later-command.toml"))
const testLaterCommand = laterPatches.some((patch) => patchApplies(patch, TARGET_VERSION))
const targetUses218LaterSymbols = gte(TARGET_VERSION, "2.1.218")
const targetUses217LaterSymbols = gte(TARGET_VERSION, "2.1.217") && lt(TARGET_VERSION, "2.1.218")
const targetUses216LaterSymbols = gte(TARGET_VERSION, "2.1.216") && lt(TARGET_VERSION, "2.1.217")
const targetUses215LaterSymbols = gte(TARGET_VERSION, "2.1.215") && lt(TARGET_VERSION, "2.1.216")
const targetUses212LaterSymbols = gte(TARGET_VERSION, "2.1.212") && lt(TARGET_VERSION, "2.1.215")
const targetUses210LaterSymbols = gte(TARGET_VERSION, "2.1.210") && lt(TARGET_VERSION, "2.1.212")
const targetUses208LaterSymbols = gte(TARGET_VERSION, "2.1.208") && lt(TARGET_VERSION, "2.1.210")
const targetUsesAbsoluteLater =
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
  id: string
  cron: string
  prompt: string
  createdAt: number
  recurring?: boolean
  later?: boolean
  laterAt?: number
}

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
const patchedBundle = join(tempDir, "cli.patched.js")

afterAll(() => {
  rmSync(tempDir, { recursive: true, force: true })
})

function renderLaterCommandPatch(input: string, output: string): number {
  const body = readFileSync(input, "utf8")
  const result = applyPatchEntries(body, laterPatches, TARGET_VERSION)

  writeFileSync(output, result.source)
  return result.applied
}

function expectContainsOneOf(body: string, snippets: string[]): void {
  expect(snippets.some((snippet) => body.includes(snippet))).toBe(true)
}

function getAbsoluteSubmitCode(): string {
  const suffix = targetUses218LaterSymbols
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
  if (!patch || patch.transform?.op !== "insert_after_node") {
    throw new Error(`${TARGET_VERSION} /later submit transform is missing`)
  }
  return patch.transform.code
}

async function run208LaterHook(input: string, seedTasks: LaterTask[] = []): Promise<LaterHookResult> {
  const [taskGetter, nextRun, addTask, enablePolling] = targetUses218LaterSymbols
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
    targetUses218LaterSymbols
      ? ["x", "O", "n", "I", "D"]
      : targetUses217LaterSymbols || targetUses216LaterSymbols
      ? ["k", "H", "n", "I", "D"]
      : targetUses215LaterSymbols || targetUses212LaterSymbols
        ? ["k", "O", "A", "I", "D"]
        : ["I", "P", "n", "H", "k"]
  const [inputSetterName, cursorSetterName, pastedContentsSetterName] = targetUses218LaterSymbols
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
  const factory = new Function(
    "GM",
    "lA",
    "AJe",
    "uw",
    "oft",
    "F_e",
    "tne",
    `${functionSource}; return pSr;`,
  )
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
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    const applied = renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
    const patched = readFileSync(patchedBundle, "utf8")

    expect(applied).toBe(targetUsesAbsoluteLater ? 3 : 2)
    expect(patched).toContain("__trim.match(/^\\/later\\s+(\\d+)\\s*([smhd])\\s+([\\s\\S]+)$/i)")
    expectContainsOneOf(patched, [
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
    ])
    expectContainsOneOf(patched, ["if(__task)__task.later=!0", "later:!0})", "later:!0,laterAt:"])
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
      expect(patched).not.toContain("F_e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).toContain("ybe(!0)")
      expect(patched).not.toContain("tne(!0)")
    } else if (targetUses206LaterSymbols) {
      expect(patched).toContain("DFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).not.toContain("Y2e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).toContain("tTe(!0)")
      expect(patched).not.toContain("ybe(!0)")
    } else if (targetUses207LaterSymbols) {
      expect(patched).toContain("QFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).not.toContain("DFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).toContain("DTe(!0)")
      expect(patched).not.toContain("tTe(!0)")
    } else if (targetUses218LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain(
        "j.later===!0&&Number.isFinite(j.laterAt)&&j.laterAt>j.createdAt?j.laterAt:buo",
      )
      expect(patched).not.toContain(
        "q.later===!0&&Number.isFinite(q.laterAt)&&q.laterAt>q.createdAt?q.laterAt:Wio",
      )
      expect(patched).toContain("Zwe(!0)")
      expect(patched).not.toContain("KCe(!0)")
    } else if (targetUses217LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain(
        "q.later===!0&&Number.isFinite(q.laterAt)&&q.laterAt>q.createdAt?q.laterAt:Wio",
      )
      expect(patched).not.toContain(
        "U.later===!0&&Number.isFinite(U.laterAt)&&U.laterAt>U.createdAt?U.laterAt:too",
      )
      expect(patched).toContain("KCe(!0)")
      expect(patched).not.toContain("xCe(!0)")
    } else if (targetUses216LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain(
        "U.later===!0&&Number.isFinite(U.laterAt)&&U.laterAt>U.createdAt?U.laterAt:too",
      )
      expect(patched).not.toContain(
        "G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:VQn",
      )
      expect(patched).toContain("xCe(!0)")
      expect(patched).not.toContain("Dve(!0)")
    } else if (targetUses215LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain(
        "G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:VQn",
      )
      expect(patched).not.toContain(
        "W.later===!0&&Number.isFinite(W.laterAt)&&W.laterAt>W.createdAt?W.laterAt:iJn",
      )
      expect(patched).toContain("Dve(!0)")
      expect(patched).not.toContain("VEe(!0)")
    } else if (targetUses212LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain(
        "W.later===!0&&Number.isFinite(W.laterAt)&&W.laterAt>W.createdAt?W.laterAt:iJn",
      )
      expect(patched).not.toContain(
        "j.later===!0&&Number.isFinite(j.laterAt)&&j.laterAt>j.createdAt?j.laterAt:XGn",
      )
      expect(patched).toContain("VEe(!0)")
      expect(patched).not.toContain("jSe(!0)")
    } else if (targetUses210LaterSymbols) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain(
        "j.later===!0&&Number.isFinite(j.laterAt)&&j.laterAt>j.createdAt?j.laterAt:XGn",
      )
      expect(patched).not.toContain(
        "G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:M8n",
      )
      expect(patched).toContain("jSe(!0)")
      expect(patched).not.toContain("ESe(!0)")
    } else if (targetUsesAbsoluteLater) {
      expect(patched).toContain("laterAt:__when.getTime()")
      expect(patched).toContain(
        "G.later===!0&&Number.isFinite(G.laterAt)&&G.laterAt>G.createdAt?G.laterAt:M8n",
      )
      expect(patched).not.toContain("QFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).toContain("ESe(!0)")
      expect(patched).not.toContain("jBt(!0)")
      expect(patched).not.toContain("DTe(!0)")
    }
    expect(patched).toContain("text:`Scheduled ${__id} for ${__when.toLocaleString()}`")
  },
  120000,
)

test.skipIf(!testLaterCommand)(
  "/later list renders pending delayed prompts",
  () => {
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
    const patched = readFileSync(patchedBundle, "utf8")

    expect(patched).toContain('__trim==="/later list"')
    expect(patched).toContain("Pending /later prompts:")
    expect(patched).toContain("No pending /later prompts")
    expectContainsOneOf(patched, [
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
    expect(patched).toContain("__raw.length>20?`${__raw.slice(0,17)}...`:__raw")
    expect(patched).toContain("return `${__i+1}. ${__text} @ ${__when}`")
    expect(patched).not.toContain("return `${__t.id} ${__when} ${__text}`")
  },
  120000,
)

test.skipIf(!testLaterCommand)(
  "/later appears in slash command suggestions",
  () => {
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
    const patched = readFileSync(patchedBundle, "utf8")

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

test.skipIf(!targetUsesAbsoluteLater)(
  "/later stores exact relative and absolute fire times in 2.1.208+",
  async () => {
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
    expect(existsSync(TARGET_BUNDLE)).toBe(true)

    renderLaterCommandPatch(TARGET_BUNDLE, patchedBundle)
    const patched = readFileSync(patchedBundle, "utf8")

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
