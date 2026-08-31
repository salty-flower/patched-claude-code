import { expect, test } from "bun:test"
import { isExpectedTimeoutExitCode, timeoutCommand } from "./helpers/pty"

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
