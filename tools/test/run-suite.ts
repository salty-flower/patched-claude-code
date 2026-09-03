#!/usr/bin/env bun
// Run each test file in a fresh Bun process so bundle-heavy tests release memory between files.

import { join } from "node:path"

const TOOLS_ROOT = join(import.meta.dir, "..")
const testFiles = [...new Bun.Glob("*.test.ts").scanSync(import.meta.dir)].sort()

if (testFiles.length === 0) throw new Error(`no test files found under ${import.meta.dir}`)

for (const testFile of testFiles) {
  const result = Bun.spawnSync({
    cmd: [process.execPath, "test", "--timeout", "0", join(import.meta.dir, testFile)],
    cwd: TOOLS_ROOT,
    env: process.env,
    stdout: "inherit",
    stderr: "inherit",
  })
  if (result.exitCode !== 0) process.exit(result.exitCode)
}
