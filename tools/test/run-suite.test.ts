import { expect, test } from "bun:test"
import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

test("suite help exits cleanly without starting any tests", () => {
  const result = Bun.spawnSync({
    cmd: [process.execPath, join(import.meta.dir, "run-suite.ts"), "--help"],
    stdout: "pipe",
    stderr: "pipe",
  })
  expect(result.exitCode).toBe(0)
  expect(result.stdout.toString()).toContain("--fail-fast")
  expect(result.stderr.toString()).toBe("")
})

for (const failFast of [false, true]) {
  test(`suite preserves failure status and fail-fast=${failFast}`, () => {
    const root = mkdtempSync(join(tmpdir(), "test-suite-contract-"))
    try {
      const first = join(root, "first.test.ts")
      const second = join(root, "second.test.ts")
      writeFileSync(
        first,
        'import {test,expect} from "bun:test"; test("intentional failure",()=>expect(true).toBe(false))',
      )
      writeFileSync(
        second,
        'import {test,expect} from "bun:test"; test("next file ran",()=>{console.log("NEXT_FILE_EXECUTED");expect(true).toBe(true)})',
      )
      const result = Bun.spawnSync({
        cmd: [
          process.execPath,
          join(import.meta.dir, "run-suite.ts"),
          ...(failFast ? ["--fail-fast"] : []),
          first,
          second,
        ],
        stdout: "pipe",
        stderr: "pipe",
      })
      const output = result.stdout.toString()
      expect(result.exitCode).toBe(1)
      expect(output).toContain("[FAIL]")
      expect(output).toContain("first.test.ts")
      expect(output.includes("NEXT_FILE_EXECUTED")).toBe(!failFast)
      expect(output).toContain(`${failFast ? 1 : 2}/2 files executed; 1 failed`)
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })
}
