import { tmpdir } from "node:os"
import { join } from "node:path"

const HELD_ENV = "PATCHED_CC_HEAVY_LOCK_HELD"
const PATH_ENV = "PATCHED_CC_HEAVY_LOCK_PATH"

type Main = () => number | void | Promise<number | void>

export function heavyLockPath(root: string): string {
  const configured = process.env[PATH_ENV]
  if (configured) return configured
  // A machine-wide default makes separate agents and worktrees serialize too.
  // PATCHED_CC_HEAVY_LOCK_PATH can narrow this when independent workspaces are desired.
  void root
  return join(tmpdir(), "patched-claude-code-heavy.lock")
}

/** Run a CLI under one OS-level lock, inheriting the lock through nested Bun commands. */
export async function runWithHeavyLock(root: string, main: Main): Promise<void> {
  if (process.env[HELD_ENV] === "1" || process.platform !== "linux") {
    const result = await main()
    const exitCode = typeof result === "number" ? result : typeof process.exitCode === "number" ? process.exitCode : 0
    process.exit(exitCode)
  }

  const lockPath = heavyLockPath(root)
  const script = process.argv[1]
  if (!script) throw new Error("cannot acquire heavy-build lock without a script path")
  const result = Bun.spawnSync({
    cmd: ["flock", "-w", "3600", lockPath, "bun", script, ...process.argv.slice(2)],
    env: { ...process.env, [HELD_ENV]: "1", [PATH_ENV]: lockPath },
    stdout: "inherit",
    stderr: "inherit",
  })
  process.exit(result.exitCode)
}
