import { expect, test } from "bun:test"
import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

test("whole-session watchdog ends event waits even when the TUI never paints a prompt", async () => {
  const directory = mkdtempSync(join(tmpdir(), "pcc-effort-watchdog-"))
  try {
    const fixture = join(directory, "idle.js")
    await Bun.write(fixture, 'process.stdout.write("Claude Code fixture\\n"); setInterval(() => {}, 1000);')
    const child = Bun.spawn(
      [
        process.execPath,
        join(import.meta.dir, "model-effort-session-tui-smoke.ts"),
        "--bundle",
        fixture,
        "--timeout-seconds",
        "1",
      ],
      {
        stdout: "pipe",
        stderr: "pipe",
        timeout: 10_000,
      },
    )
    const [code, stdout, stderr] = await Promise.all([
      child.exited,
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
    ])
    expect(code).toBe(1)
    expect(`${stdout}\n${stderr}`).toContain("whole-session watchdog expired")
    expect(stderr).toContain("startup prompt missing")
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
}, 15_000)
