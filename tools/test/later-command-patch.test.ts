import { expect, test } from "bun:test"
import { join } from "node:path"
import { patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { activePatch, captureIdentifier } from "./helpers/patch-contract"

const version = targetVersion()
const entries = loadPatchEntriesFromFile(join(import.meta.dir, "../../patches/later-command.toml"))
const current = entries.filter((entry) => patchApplies(entry, version))
const usesDirectSubmit = current.some(
  (entry) => entry.transform && "code" in entry.transform && entry.transform.code.includes("pastedContentsOverride:"),
)

// Historical scheduler APIs stay replayable but cannot provide current-target evidence.
if (!usesDirectSubmit) await import("./historic/later-command-legacy.test")
else
  for (const platform of ["darwin-arm64", "linux-x64"]) {
    const entry = activePatch(entries, version, platform, "later-command-submit-hook-")
    if (!entry.transform || !("code" in entry.transform)) throw new Error(`${entry.name}: missing submit transform`)
    const code = entry.transform.code
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

    function harness(now = new Date(2030, 0, 15, 12).getTime()) {
      const jobs = new Map<string, { prompt: string; at: number }>()
      const timers: Array<{ callback: () => void; delay: number }> = []
      const notices: Array<{ kind: string; text: string }> = []
      const submitted: unknown[][] = []
      const cleanup: string[] = []
      const pastes = { 1: { id: 1, type: "image", content: "local-fixture" } }
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
        [names.notify]: (notice: { kind: string; text: string }) => notices.push(notice),
        [names.setInput]: (value: string) => cleanup.push(`input:${value}`),
        [names.setPastes]: (value: object) => cleanup.push(`pastes:${JSON.stringify(value)}`),
        [names.cursor]: (value: number) => cleanup.push(`cursor:${value}`),
        [names.clear]: () => cleanup.push("clear"),
        [names.history]: { current: { resetHistory: () => cleanup.push("history") } },
        [names.pastes]: pastes,
        [names.submit]: (...args: unknown[]) => submitted.push(args),
      }
      const run = (input: string) =>
        new Function(...Object.keys(bindings), names.input, code)(...Object.values(bindings), input)
      return { run, jobs, timers, notices, submitted, cleanup, pastes, now }
    }

    test(`${platform}: active /later schedules once, lists, and forwards pasted contents`, () => {
      const h = harness()
      h.run("/later 1m hello")
      expect([...h.jobs.values()]).toEqual([{ prompt: "hello", at: h.now + 60_000 }])
      expect(h.timers.map((timer) => timer.delay)).toEqual([60_000])
      expect(h.cleanup).toEqual(["input:", "pastes:{}", "cursor:0", "clear"])
      h.run("/later list")
      expect(h.notices.at(-1)?.text).toContain("1. hello @")
      h.timers[0]!.callback()
      h.timers[0]!.callback()
      expect(h.submitted).toHaveLength(1)
      expect(h.submitted[0]).toEqual([
        "hello",
        {
          setCursorOffset: expect.any(Function),
          clearBuffer: expect.any(Function),
          resetHistory: expect.any(Function),
        },
        { pastedContentsOverride: h.pastes },
      ])
      expect(h.jobs.size).toBe(0)
      h.run("/later list")
      expect(h.notices.at(-1)?.text).toBe("No pending /later prompts")
    })

    test(`${platform}: simultaneous /later jobs remain distinct`, () => {
      const h = harness()
      h.run("/later 1m first")
      h.run("/later 1m second")
      expect(h.jobs.size).toBe(2)
      for (const timer of h.timers) timer.callback()
      expect(h.submitted.map((args) => args[0])).toEqual(["first", "second"])
    })

    test(`${platform}: absolute and next-local-occurrence timestamps retain precision`, () => {
      const h = harness()
      h.run("/later 2030-01-16 12:34:56 exact seconds")
      expect([...h.jobs.values()][0]?.at).toBe(new Date(2030, 0, 16, 12, 34, 56).getTime())
      const next = harness()
      next.run("/later 11:59 next day")
      expect([...next.jobs.values()][0]?.at).toBe(new Date(2030, 0, 16, 11, 59).getTime())
    })

    test.each([
      "/later 2030-02-30 12:00 impossible date",
      "/later 2000-01-01 00:00 past date",
      "/later 2:00 non-fixed hour",
      "/later 24:00 invalid hour",
      "/later 12:60 invalid minute",
      "/later 100000001d outside Date range",
      "/later 0s zero delay",
      "/later nope",
    ])(`${platform}: rejects %s without clearing input or scheduling`, (input) => {
      const h = harness()
      h.run(input)
      expect(h.jobs.size).toBe(0)
      expect(h.timers).toHaveLength(0)
      expect(h.cleanup).toEqual([])
      expect(h.notices[0]).toMatchObject({ kind: "error", text: expect.stringContaining("Usage: /later") })
    })

    test.skipIf(process.env.TZ !== "America/New_York")(`${platform}: rejects normalized DST-gap local time`, () => {
      const h = harness()
      h.run("/later 2030-03-10 02:30 skipped local time")
      expect(h.jobs.size).toBe(0)
      expect(h.notices[0]?.kind).toBe("error")
    })
  }
