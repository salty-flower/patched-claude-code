import { expect, test } from "bun:test"
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { captureCommand } from "./helpers/captured-command"

test("captured command returns complete output", async () => {
  const result = await captureCommand({
    cmd: ["bash", "-c", 'printf "stdout-marker"; printf "stderr-marker" >&2; exit 7'],
    cwd: import.meta.dir,
    timeoutMs: 2_000,
    label: "output fixture",
  })

  expect(result).toEqual({ exitCode: 7, stdout: "stdout-marker", stderr: "stderr-marker" })
})

test(
  "captured command kills the process group and reports its timeout",
  async () => {
    const fixtureRoot = mkdtempSync(join(tmpdir(), "patched-cc-captured-command-"))
    const pidFile = join(fixtureRoot, "group.pid")
    const killFixtureGroup = () => {
      if (!existsSync(pidFile)) return
      const pid = Number.parseInt(readFileSync(pidFile, "utf8"), 10)
      if (!Number.isSafeInteger(pid)) return
      try {
        process.kill(-pid, "SIGKILL")
      } catch {}
    }
    const fallback = setTimeout(killFixtureGroup, 3_000)

    try {
      const startedAt = performance.now()
      const result = captureCommand({
        cmd: [
          "bash",
          "-c",
          'printf "%s" "$$" > "$PID_FILE"; trap "" TERM; (trap "" TERM; sleep 60) & printf "ready-marker"; wait',
        ],
        cwd: fixtureRoot,
        env: { ...process.env, PID_FILE: pidFile },
        timeoutMs: 500,
        label: "process-group fixture",
      })
      await expect(result).rejects.toThrow(
        "process-group fixture timed out after 500ms\nstdout:\nready-marker\nstderr:\n",
      )
      expect(performance.now() - startedAt).toBeLessThan(2_000)
    } finally {
      clearTimeout(fallback)
      killFixtureGroup()
      rmSync(fixtureRoot, { recursive: true, force: true })
    }
  },
  5_000,
)
