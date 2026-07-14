import { afterAll, expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { gte } from "semver"
import { applyPatchEntries, patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"

const ROOT = join(import.meta.dir, "..", "..")
const TARGET_VERSION = process.env.TARGET_VERSION ?? "2.1.172"
const TARGET_BUNDLE = join(ROOT, "staging", TARGET_VERSION, "cli.js")
const laterPatches = loadPatchEntriesFromFile(join(ROOT, "patches", "later-command.toml"))
const testLaterCommand = laterPatches.some((patch) => patchApplies(patch, TARGET_VERSION))
const targetUses208LaterSymbols = gte(TARGET_VERSION, "2.1.208")
const targetUses207LaterSymbols = !targetUses208LaterSymbols && gte(TARGET_VERSION, "2.1.207")
const targetUses206LaterSymbols =
  !targetUses207LaterSymbols && !targetUses208LaterSymbols && gte(TARGET_VERSION, "2.1.206")
const targetUses205LaterSymbols =
  !targetUses206LaterSymbols && !targetUses207LaterSymbols && !targetUses208LaterSymbols && gte(TARGET_VERSION, "2.1.205")
const targetUses201LaterSymbols =
  !targetUses205LaterSymbols &&
  !targetUses206LaterSymbols &&
  !targetUses207LaterSymbols &&
  !targetUses208LaterSymbols &&
  gte(TARGET_VERSION, "2.1.201")
const targetIs201 = TARGET_VERSION === "2.1.201"

type LaterTask = {
  id: string
  cron: string
  prompt: string
  createdAt: number
  recurring?: boolean
  later?: boolean
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

    expect(applied).toBe(2)
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
    ])
    expectContainsOneOf(patched, ["if(__task)__task.later=!0", "later:!0})"])
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
      "jBt(!0)",
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
    } else if (targetUses208LaterSymbols) {
      expect(patched).toContain("Z$e({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).not.toContain("QFe({id:__id,cron:__cron,prompt:__prompt,createdAt:Date.now(),recurring:!1,later:!0})")
      expect(patched).toContain("jBt(!0)")
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
    } else if (targetUses208LaterSymbols) {
      expect(patched).toContain("FI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).not.toContain("lI().filter((__t)=>__t.later===!0&&!__t.recurring)")
      expect(patched).toContain("xVt(__t.cron,__t.createdAt)")
      expect(patched).not.toContain("E7t(__t.cron,__t.createdAt)")
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
    expect(patched).toContain('description:"Schedule a prompt for later; use /later 10m <prompt> or /later list"')
    expect(patched).toContain("supportsNonInteractive:!1")
  },
  120000,
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
