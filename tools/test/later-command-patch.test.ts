import { expect, test } from "bun:test"
import { join } from "node:path"
import { patchApplies } from "../lib/apply-patches"
import { loadPatchEntriesFromFile } from "../lib/patch-files"
import { targetVersion } from "../lib/target"
import { createLaterCommandHarness, laterSubmitHookPlatforms } from "./helpers/later-command-harness"

const version = targetVersion()
const entries = loadPatchEntriesFromFile(join(import.meta.dir, "../../patches/later-command.toml"))
const current = entries.filter((entry) => patchApplies(entry, version))
const usesDirectSubmit = current.some(
  (entry) => entry.transform && "code" in entry.transform && entry.transform.code.includes("pastedContentsOverride:"),
)
const timezoneFixture = join(import.meta.dir, "fixtures/later-timezone.ts")
const timezoneFixtureTimeoutMs = 10_000

type LaterTimezoneReport = {
  timeZone: string
  platforms: string[]
}

async function runTimezoneFixture(): Promise<LaterTimezoneReport> {
  const child = Bun.spawn([process.execPath, timezoneFixture], {
    cwd: join(import.meta.dir, "../.."),
    env: { ...process.env, TZ: "America/New_York" },
    stdout: "pipe",
    stderr: "pipe",
  })
  let timedOut = false
  const watchdog = setTimeout(() => {
    timedOut = true
    child.kill("SIGKILL")
  }, timezoneFixtureTimeoutMs)
  const stdoutPromise = new Response(child.stdout).text()
  const stderrPromise = new Response(child.stderr).text()
  try {
    const [exitCode, stdout, stderr] = await Promise.all([child.exited, stdoutPromise, stderrPromise])
    const diagnostics = `\nstdout:\n${stdout}\nstderr:\n${stderr}`
    if (timedOut) throw new Error(`later timezone fixture timed out after ${timezoneFixtureTimeoutMs}ms${diagnostics}`)
    if (exitCode !== 0) throw new Error(`later timezone fixture exited with ${exitCode}${diagnostics}`)
    try {
      return JSON.parse(stdout) as LaterTimezoneReport
    } catch (error) {
      throw new Error(`later timezone fixture returned invalid JSON${diagnostics}`, { cause: error })
    }
  } finally {
    clearTimeout(watchdog)
  }
}

// Historical scheduler APIs stay replayable but cannot provide current-target evidence.
if (!usesDirectSubmit) {
  await import("./historic/later-command-legacy.test")
} else {
  for (const platform of laterSubmitHookPlatforms) {
    test(`${platform}: active /later schedules once, lists, and forwards pasted contents`, () => {
      const h = createLaterCommandHarness(platform)
      h.run("/later 1m hello")
      expect([...h.jobs.values()]).toEqual([{ prompt: "hello", at: h.now + 60_000 }])
      expect(h.timers.map((timer) => timer.delay)).toEqual([60_000])
      expect(h.cleanup).toEqual(["input:", "pastes:{}", "cursor:0", "clear"])
      h.run("/later list")
      expect(h.notices.at(-1)?.text).toContain("1. hello @")
      const timer = h.timers[0]
      if (!timer) throw new Error(`${platform}: expected one timer`)
      timer.callback()
      timer.callback()
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
      const h = createLaterCommandHarness(platform)
      h.run("/later 1m first")
      h.run("/later 1m second")
      expect(h.jobs.size).toBe(2)
      for (const timer of h.timers) timer.callback()
      expect(h.submitted.map((args) => args[0])).toEqual(["first", "second"])
    })

    test(`${platform}: absolute and next-local-occurrence timestamps retain precision`, () => {
      const h = createLaterCommandHarness(platform)
      h.run("/later 2030-01-16 12:34:56 exact seconds")
      expect([...h.jobs.values()][0]?.at).toBe(new Date(2030, 0, 16, 12, 34, 56).getTime())
      const next = createLaterCommandHarness(platform)
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
      const h = createLaterCommandHarness(platform)
      h.run(input)
      expect(h.jobs.size).toBe(0)
      expect(h.timers).toHaveLength(0)
      expect(h.cleanup).toEqual([])
      expect(h.notices[0]).toMatchObject({ kind: "error", text: expect.stringContaining("Usage: /later") })
    })
  }

  test(
    "current /later transforms exercise DST boundaries in an isolated New York process",
    async () => {
      const hostTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const report = await runTimezoneFixture()
      expect(report).toEqual({
        timeZone: "America/New_York",
        platforms: [...laterSubmitHookPlatforms],
      })
      expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe(hostTimeZone)
    },
    timezoneFixtureTimeoutMs + 2_000,
  )
}
