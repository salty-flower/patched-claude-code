import { join } from "node:path"
import { loadPatchEntriesFromFile } from "../../lib/patch-files"
import { targetVersion } from "../../lib/target"
import { activePatch, captureIdentifier } from "./patch-contract"

export const laterSubmitHookPlatforms = ["darwin-arm64", "linux-x64"] as const
export type LaterSubmitHookPlatform = (typeof laterSubmitHookPlatforms)[number]

export type LaterJob = { prompt: string; at: number }
export type LaterTimer = { callback: () => void; delay: number }
export type LaterNotice = { kind: string; text: string }

export type LaterCommandHarness = {
  run: (input: string) => void
  jobs: Map<string, LaterJob>
  timers: LaterTimer[]
  notices: LaterNotice[]
  submitted: unknown[][]
  cleanup: string[]
  pastes: Record<number, { id: number; type: "image"; content: string }>
  now: number
}

const version = targetVersion()
const entries = loadPatchEntriesFromFile(join(import.meta.dir, "../../../patches/later-command.toml"))

function submitHookCode(platform: LaterSubmitHookPlatform): string {
  const entry = activePatch(entries, version, platform, "later-command-submit-hook-")
  if (!entry.transform || !("code" in entry.transform)) throw new Error(`${entry.name}: missing submit transform`)
  return entry.transform.code
}

export function createLaterCommandHarness(
  platform: LaterSubmitHookPlatform,
  now = new Date(2030, 0, 15, 12).getTime(),
): LaterCommandHarness {
  const code = submitHookCode(platform)
  const binding = (role: string, pattern: RegExp) => captureIdentifier(code, role, pattern)
  const names = {
    mode: binding("composer mode", /if\(([\w$]+)\.mode==="prompt"\)/),
    input: binding("normalized input", /let __trim=([\w$]+)\.trim\(\)/),
    notify: binding("feedback", /([\w$]+)\(\{key:"later-list"/),
    setInput: binding("input cleanup", /([\w$]+)\(""\);/),
    setPastes: binding("paste cleanup", /([\w$]+)\(\{\}\);/),
    cursor: binding("cursor", /setCursorOffset:([\w$]+)/),
    clear: binding("buffer", /clearBuffer:([\w$]+)/),
    history: binding("history", /resetHistory:\(\)=>([\w$]+)\.current/),
    pastes: binding("pasted contents", /pastedContentsOverride:([\w$]+)/),
    submit: binding("delayed submit", /([\w$]+)\(__prompt,\{setCursorOffset:/),
  }
  const jobs = new Map<string, LaterJob>()
  const timers: LaterTimer[] = []
  const notices: LaterNotice[] = []
  const submitted: unknown[][] = []
  const cleanup: string[] = []
  const pastes = { 1: { id: 1, type: "image" as const, content: "local-fixture" } }
  class Clock extends Date {
    static now() {
      return now
    }
  }
  const bindings: Record<string, unknown> = {
    globalThis: { __acc_later_jobs: jobs },
    Date: Clock,
    setTimeout: (callback: () => void, delay: number) => {
      timers.push({ callback, delay })
      return timers.length
    },
    [names.mode]: { mode: "prompt" },
    [names.notify]: (notice: LaterNotice) => notices.push(notice),
    [names.setInput]: (value: string) => cleanup.push(`input:${value}`),
    [names.setPastes]: (value: object) => cleanup.push(`pastes:${JSON.stringify(value)}`),
    [names.cursor]: (value: number) => cleanup.push(`cursor:${value}`),
    [names.clear]: () => cleanup.push("clear"),
    [names.history]: { current: { resetHistory: () => cleanup.push("history") } },
    [names.pastes]: pastes,
    [names.submit]: (...args: unknown[]) => submitted.push(args),
  }
  const execute = new Function(...Object.keys(bindings), names.input, code) as (...args: unknown[]) => unknown
  const run = (input: string) => {
    execute(...Object.values(bindings), input)
  }
  return { run, jobs, timers, notices, submitted, cleanup, pastes, now }
}
