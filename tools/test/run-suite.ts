#!/usr/bin/env bun
// Keep heavy tests serial and give each file a fresh process to release bundle memory.

import { join, relative, resolve } from "node:path"
import { createCommand, runCli } from "../lib/cli"

const TOOLS_ROOT = join(import.meta.dir, "..")
function main(): number {
  const program = createCommand("run-suite")
    .argument("[files...]", "test files relative to the current directory (default: complete suite)")
    .option("--fail-fast", "stop after the first failing file", false)
    .parse(process.argv.slice(2), { from: "user" })
  const testFiles =
    program.args.length > 0
      ? program.args.map((file) => resolve(file))
      : [...new Bun.Glob("*.test.ts").scanSync(import.meta.dir)].sort().map((file) => join(import.meta.dir, file))

  if (testFiles.length === 0) throw new Error(`no test files found under ${import.meta.dir}`)

  const results: Array<{ file: string; exitCode: number; seconds: number }> = []
  for (const testFile of testFiles) {
    const file = relative(TOOLS_ROOT, testFile)
    console.log(`\n==> ${file}`)
    const started = performance.now()
    const result = Bun.spawnSync({
      cmd: [process.execPath, "test", "--timeout", "0", testFile],
      cwd: TOOLS_ROOT,
      env: process.env,
      stdout: "inherit",
      stderr: "inherit",
    })
    const exitCode = result.exitCode ?? 1
    results.push({ file, exitCode, seconds: (performance.now() - started) / 1000 })
    if (exitCode !== 0 && program.opts<{ failFast: boolean }>().failFast) break
  }

  console.log("\nTest file summary:")
  for (const result of results) {
    console.log(
      `[${result.exitCode === 0 ? "pass" : "FAIL"}] ${result.file} (${result.seconds.toFixed(1)}s, exit ${result.exitCode})`,
    )
  }
  const failed = results.filter((result) => result.exitCode !== 0)
  console.log(`${results.length}/${testFiles.length} files executed; ${failed.length} failed`)
  return failed.length > 0 ? 1 : 0
}

if (import.meta.main) await runCli(main)
