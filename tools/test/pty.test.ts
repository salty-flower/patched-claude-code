import { expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { captureCommand } from "./helpers/captured-command"
import {
  isExpectedTimeoutExitCode,
  makeScriptCommand,
  shellQuote,
  timeoutCommand,
  withProcessGroupTimeout,
} from "./helpers/pty"

test("PTY timeout escalates to SIGKILL when the child ignores SIGTERM", () => {
  expect(timeoutCommand(16)).toEqual(["timeout", "--kill-after=5s", "16s"])
  expect(isExpectedTimeoutExitCode(124)).toBeTrue()
  expect(isExpectedTimeoutExitCode(137)).toBeTrue()
  expect(isExpectedTimeoutExitCode(143)).toBeFalse()
})

// The contract under test is GNU timeout's TERM-then-SIGKILL behavior, which
// macOS lacks outside Homebrew/nix coreutils; skip where the binary is absent.
test.skipIf(!Bun.which("timeout"))("PTY timeout command returns after killing a TERM-resistant child", () => {
  const startedAt = performance.now()
  const result = Bun.spawnSync({
    cmd: [...timeoutCommand(1, 1), "bash", "-c", 'trap "" TERM; while :; do :; done'],
    stdout: "pipe",
    stderr: "pipe",
  })

  expect(result.exitCode).toBeNull()
  expect(result.signalCode).toBe("SIGKILL")
  expect(performance.now() - startedAt).toBeLessThan(4_000)
})

test.skipIf(!Bun.which("script"))(
  "PTY-local timeout kills a HUP-resistant child in script's inner session",
  async () => {
    const fixtureRoot = mkdtempSync(join(tmpdir(), "patched-cc-pty-timeout-"))
    const pidFile = join(fixtureRoot, "inner.pid")
    const outputFile = join(fixtureRoot, "typescript")
    const killInnerGroup = () => {
      if (!existsSync(pidFile)) return
      const pid = Number.parseInt(readFileSync(pidFile, "utf8"), 10)
      if (!Number.isSafeInteger(pid)) return
      try {
        process.kill(-pid, "SIGKILL")
      } catch {}
    }

    try {
      const inner = withProcessGroupTimeout(
        `printf %s "$$" > ${shellQuote(pidFile)}; trap "" HUP TERM; while :; do sleep 1; done`,
        1,
      )
      const startedAt = performance.now()
      const result = await captureCommand({
        cmd: ["bash", "-lc", makeScriptCommand(inner, "true", outputFile)],
        cwd: fixtureRoot,
        timeoutMs: 4_000,
        label: "PTY timeout fixture",
      })

      expect(result.exitCode).not.toBe(0)
      expect(performance.now() - startedAt).toBeLessThan(3_000)
      const innerPid = Number.parseInt(readFileSync(pidFile, "utf8"), 10)
      expect(() => process.kill(innerPid, 0)).toThrow()
    } finally {
      killInnerGroup()
      rmSync(fixtureRoot, { recursive: true, force: true })
    }
  },
  8_000,
)
