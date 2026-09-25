import { join } from "node:path"
import { existsSync, readFileSync } from "node:fs"
import { prepareAstTransformPatches } from "../../lib/ast-transform-patches"
import { stagedGraphRoot } from "../../lib/graph-bundle"
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
const root = join(import.meta.dir, "../../..")
const entries = loadPatchEntriesFromFile(join(root, "patches/later-command.toml"))
const submitCodeByPlatform = new Map<LaterSubmitHookPlatform, string>()

function submitHookCode(platform: LaterSubmitHookPlatform): string {
  const cached = submitCodeByPlatform.get(platform)
  if (cached !== undefined) return cached
  const entry = activePatch(entries, version, platform, "later-command-submit-hook-")
  if (!entry.transform) throw new Error(`${entry.name}: missing submit transform`)
  if ("code" in entry.transform && !entry.transform.code.includes("%%CAPTURE:")) {
    return entry.transform.code
  }
  if (!entry.ast) throw new Error(`${entry.name}: missing AST locator for captured submit transform`)

  // Materialize the shipped transform against its real target before extracting
  // the inserted scheduler, so the harness exercises the captured bindings too.
  const platformRoot = join(stagedGraphRoot(root, version), platform)
  const files = existsSync(platformRoot)
    ? [...new Bun.Glob("**/*.js").scanSync({ cwd: platformRoot, absolute: true })]
    : [join(root, "staging", version, "cli.js")]
  const chunks: string[] = []
  const needle = entry.ast.match.string_literal ?? entry.ast.match.string
  for (const file of files) {
    const source = readFileSync(file, "utf8")
    if (needle && !source.includes(needle)) continue
    const prepared = prepareAstTransformPatches(
      source,
      [{ name: entry.name, ast: entry.ast, transform: entry.transform, expectedMatches: entry.expected_matches }],
      { collectMatches: true, validateIndividually: true },
    )
    const result = prepared.results[0]
    if (!result?.ok) throw new Error(`${entry.name}: ${file}: ${result?.message ?? "missing transform result"}`)
    if (result.matches === 0) continue
    const report = prepared.reports[0]
    if (!report || result.matches !== 1) throw new Error(`${entry.name}: ambiguous submit transform in ${file}`)
    const original = source.slice(report.start, report.end)
    const replacement = prepared.source.slice(report.start, report.end + prepared.source.length - source.length)
    if (!replacement.startsWith(original)) {
      throw new Error(`${entry.name}: submit transform must preserve its original guard before inserting the scheduler`)
    }
    chunks.push(replacement.slice(original.length))
  }
  if (chunks.length !== 1) throw new Error(`${entry.name}: expected one staged submit hook, found ${chunks.length}`)
  const code = chunks[0]!
  if (!code.includes("globalThis.__acc_later_jobs") || code.includes("%%CAPTURE:")) {
    throw new Error(`${entry.name}: scheduler was not fully materialized`)
  }
  submitCodeByPlatform.set(platform, code)
  return code
}

export function createLaterCommandHarness(
  platform: LaterSubmitHookPlatform,
  now = new Date(2030, 0, 15, 12).getTime(),
): LaterCommandHarness {
  const code = submitHookCode(platform)
  const binding = (role: string, pattern: RegExp) => captureIdentifier(code, role, pattern)
  const historyIsDirectCallback = /resetHistory:[\w$]+/.test(code)
  const history = historyIsDirectCallback
    ? binding("history", /resetHistory:([\w$]+)/)
    : binding("history", /resetHistory:\(\)=>([\w$]+)\.current/)
  const names = {
    mode: binding("composer mode", /if\(([\w$]+)\.mode==="prompt"\)/),
    input: binding("normalized input", /let __trim=([\w$]+)\.trim\(\)/),
    notify: binding("feedback", /([\w$]+)\(\{key:"later-list"/),
    setInput: binding("input cleanup", /([\w$]+)\(""\);/),
    setPastes: binding("paste cleanup", /([\w$]+)\(\{\}\);/),
    cursor: binding("cursor", /setCursorOffset:([\w$]+)/),
    clear: binding("buffer", /clearBuffer:([\w$]+)/),
    history,
    pastes: binding("pasted contents", /pastedContentsOverride:([\w$]+)/),
    submit: binding("delayed submit", /([\w$]+)\(__prompt,\{setCursorOffset:/),
  }
  const jobs = new Map<string, LaterJob>()
  const timers: LaterTimer[] = []
  const notices: LaterNotice[] = []
  const submitted: unknown[][] = []
  const cleanup: string[] = []
  const pastes = { 1: { id: 1, type: "image" as const, content: "local-fixture" } }
  const resetHistory = () => cleanup.push("history")
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
    [names.history]: historyIsDirectCallback ? resetHistory : { current: { resetHistory } },
    [names.pastes]: pastes,
    [names.submit]: (...args: unknown[]) => submitted.push(args),
  }
  const execute = new Function(...Object.keys(bindings), names.input, code) as (...args: unknown[]) => unknown
  const run = (input: string) => {
    execute(...Object.values(bindings), input)
  }
  return { run, jobs, timers, notices, submitted, cleanup, pastes, now }
}
