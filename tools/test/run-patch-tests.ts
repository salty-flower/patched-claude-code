#!/usr/bin/env bun
// Execute tests embedded in patches/*.toml against a rendered patched bundle.

import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { patchApplies } from "../lib/apply-patches"
import { createCommand } from "../lib/cli"
import { loadPatchEntriesFromToml } from "../lib/patch-files"
import {
  type CliPatchTest,
  evaluateStaticPatchTests,
  loadPatchTestsFromToml,
  type PatchTest,
  type PtyPatchTest,
} from "../lib/patch-tests"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  bundle?: string
  version?: string
  patches: string[]
}

export function parseArgs(argv: string[]): Args {
  const program = createCommand("run-patch-tests")
    .argument("[patches...]", "patch TOML files")
    .option("--bundle <cli.patched.js>")
    .option("--version <ver>", "target version for applies_to-filtered patch tests")
    .parse(argv, { from: "user" })
  const options = program.opts<{ bundle?: string; version?: string }>()

  return {
    patches: program.args,
    ...(options.bundle ? { bundle: options.bundle } : {}),
    ...(options.version ? { version: options.version } : {}),
  }
}

function defaultPatchFiles(): string[] {
  return readdirSync(join(ROOT, "patches"))
    .filter((file) => file.endsWith(".toml"))
    .sort()
    .map((file) => join(ROOT, "patches", file))
}

function runCliTest(bundle: string, test: CliPatchTest): { ok: boolean; message: string } {
  const result = Bun.spawnSync({
    cmd: ["bun", bundle, ...(test.args ?? [])],
    cwd: ROOT,
    stdout: "pipe",
    stderr: "pipe",
  })
  const stdout = result.stdout.toString()
  const stderr = result.stderr.toString()
  const expectedExit = test.expect_exit_code ?? 0
  if (result.exitCode !== expectedExit) {
    return { ok: false, message: `expected exit ${expectedExit}, got ${result.exitCode}` }
  }
  if (test.expect_stdout_contains && !stdout.includes(test.expect_stdout_contains)) {
    return { ok: false, message: `stdout missing expected text: ${test.expect_stdout_contains}` }
  }
  if (test.expect_stderr_contains && !stderr.includes(test.expect_stderr_contains)) {
    return { ok: false, message: `stderr missing expected text: ${test.expect_stderr_contains}` }
  }
  return { ok: true, message: "CLI assertion passed" }
}

function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`
}

function runPtyTest(bundle: string, test: PtyPatchTest): { ok: boolean; message: string } {
  const timeoutSeconds = test.timeout_seconds ?? 15
  const command = [
    "timeout",
    `${timeoutSeconds}s`,
    "bun",
    shellQuote(bundle),
    ...(test.args ?? []).map(shellQuote),
  ].join(" ")
  const scriptCommand = `printf %s ${shellQuote(test.input ?? "/exit\n")} | script -q -e -c ${shellQuote(command)} /dev/null`
  const result = Bun.spawnSync({
    cmd: ["bash", "-lc", scriptCommand],
    cwd: ROOT,
    stdout: "pipe",
    stderr: "pipe",
  })
  const output = `${result.stdout.toString()}\n${result.stderr.toString()}`
  if (result.exitCode !== 0) {
    return { ok: false, message: `PTY command exited ${result.exitCode}` }
  }
  if (test.expect_output_contains && !output.includes(test.expect_output_contains)) {
    return { ok: false, message: `PTY output missing expected text: ${test.expect_output_contains}` }
  }
  return { ok: true, message: "PTY assertion passed" }
}

function inferVersionFromBundle(bundle: string): string | undefined {
  return bundle.match(/(?:^|\/)staging\/([^/]+)\/cli\.patched\.js$/)?.[1]
}

function patchTestsForTarget(rawToml: string, version?: string): PatchTest[] {
  if (!version) return loadPatchTestsFromToml(rawToml)
  const entries = loadPatchEntriesFromToml(rawToml, "<inline>")
  return entries.filter((entry) => patchApplies(entry, version)).flatMap((entry) => entry.tests ?? [])
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  if (!args.bundle) {
    console.error("missing --bundle <cli.patched.js>")
    return 2
  }
  if (!existsSync(args.bundle)) {
    console.error(`bundle missing: ${args.bundle}`)
    return 2
  }

  const bundleText = readFileSync(args.bundle, "utf8")
  const targetVersion = args.version ?? inferVersionFromBundle(args.bundle)
  const patchFiles = args.patches.length > 0 ? args.patches : defaultPatchFiles()
  let allOk = true

  for (const patchFile of patchFiles) {
    const tests = patchTestsForTarget(readFileSync(patchFile, "utf8"), targetVersion)
    if (tests.length === 0) {
      console.log(`[FAIL] ${patchFile}: no [[tests]] entries`)
      allOk = false
      continue
    }

    for (const patchTest of tests) {
      let result: { ok: boolean; message: string }
      if (patchTest.kind === "static") {
        result = evaluateStaticPatchTests(bundleText, [patchTest])[0]
      } else if (patchTest.kind === "cli") {
        result = runCliTest(args.bundle, patchTest)
      } else {
        result = runPtyTest(args.bundle, patchTest as PatchTest & PtyPatchTest)
      }

      allOk &&= result.ok
      console.log(
        `[${result.ok ? "ok" : "FAIL"}] ${patchFile}: ${patchTest.kind} ${patchTest.name} - ${result.message}`,
      )
    }
  }

  return allOk ? 0 : 1
}

if (import.meta.main) {
  process.exit(main())
}
