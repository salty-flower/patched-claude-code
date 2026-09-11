#!/usr/bin/env bun
// Execute tests embedded in patches/*.toml against a rendered patched bundle.

import { existsSync, readdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { patchApplies } from "../lib/apply-patches"
import { createCommand, runCli } from "../lib/cli"
import { loadGraphBundle } from "../lib/graph-bundle"
import { runWithHeavyLock } from "../lib/heavy-lock"
import { loadPatchEntriesFromToml } from "../lib/patch-files"
import {
  type CliPatchTest,
  evaluateStaticPatchTests,
  loadPatchTestsFromToml,
  type PatchTest,
  type PtyPatchTest,
} from "../lib/patch-tests"
import { makeScriptCommand, shellQuote, timeoutCommand } from "./helpers/pty"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  bundle?: string
  version?: string
  platform?: string
  patches: string[]
}

export function parseArgs(argv: string[]): Args {
  const program = createCommand("run-patch-tests")
    .argument("[patches...]", "patch TOML files")
    .option("--bundle <cli.patched.js>")
    .option("--version <ver>", "target version for applies_to-filtered patch tests")
    .option("--platform <platform>", "select one rendered platform graph")
    .parse(argv, { from: "user" })
  const options = program.opts<{ bundle?: string; version?: string; platform?: string }>()

  return {
    patches: program.args,
    ...(options.bundle ? { bundle: options.bundle } : {}),
    ...(options.version ? { version: options.version } : {}),
    ...(options.platform ? { platform: options.platform } : {}),
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

function runPtyTest(bundle: string, test: PtyPatchTest): { ok: boolean; message: string } {
  const timeoutSeconds = test.timeout_seconds ?? 15
  const command = [
    ...timeoutCommand(timeoutSeconds),
    "bun",
    shellQuote(bundle),
    ...(test.args ?? []).map(shellQuote),
  ].join(" ")
  const scriptCommand = makeScriptCommand(command, `printf %s ${shellQuote(test.input ?? "/exit\n")}`)
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

type BundleView = { platform?: string; text: string }

function renderedBundleViews(bundle: string, platform?: string): BundleView[] {
  const entrypoint = readFileSync(bundle, "utf8")
  const graphRoot = join(dirname(bundle), "graph.patched")
  if (!existsSync(graphRoot)) return [{ platform, text: entrypoint }]
  return (platform ? [platform] : ["darwin-arm64", "linux-x64"]).map((graphPlatform) => {
    const root = join(graphRoot, graphPlatform)
    if (!existsSync(join(root, "cli.js"))) throw new Error(`rendered platform graph missing: ${root}`)
    return {
      platform: graphPlatform,
      text: [entrypoint, ...loadGraphBundle(root, graphPlatform).files.map((file) => file.text)].join("\n"),
    }
  })
}

function patchTestsForTarget(rawToml: string, version?: string, platform?: string): PatchTest[] {
  if (!version) return loadPatchTestsFromToml(rawToml)
  const entries = loadPatchEntriesFromToml(rawToml, "<inline>")
  return entries
    .filter(
      (entry) => patchApplies(entry, version) && (!platform || !entry.platforms || entry.platforms.includes(platform)),
    )
    .flatMap((entry) => entry.tests ?? [])
}

export function selectPatchTestsForTarget(
  rawToml: string,
  version?: string,
  platform?: string,
): { tests: PatchTest[]; skipped: boolean } {
  if (!version) return { tests: patchTestsForTarget(rawToml, version, platform), skipped: false }
  const entries = loadPatchEntriesFromToml(rawToml, "<inline>")
  const applicableEntries = entries.filter(
    (entry) => patchApplies(entry, version) && (!platform || !entry.platforms || entry.platforms.includes(platform)),
  )
  if (applicableEntries.length === 0) return { tests: [], skipped: true }
  return { tests: applicableEntries.flatMap((entry) => entry.tests ?? []), skipped: false }
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

  const views = renderedBundleViews(args.bundle, args.platform)
  const targetVersion = args.version ?? inferVersionFromBundle(args.bundle)
  const patchFiles = args.patches.length > 0 ? args.patches : defaultPatchFiles()
  const hostPlatform =
    process.platform === "darwin" ? "darwin-arm64" : process.platform === "linux" ? "linux-x64" : undefined
  let allOk = true

  for (const patchFile of patchFiles) {
    const entries = loadPatchEntriesFromToml(readFileSync(patchFile, "utf8"), patchFile).filter(
      (entry) =>
        (!targetVersion || patchApplies(entry, targetVersion)) &&
        (!args.platform || !entry.platforms || entry.platforms.includes(args.platform)),
    )
    if (entries.length === 0) {
      console.log(`[skip] ${patchFile}: no patch entries apply to ${targetVersion}`)
      continue
    }
    for (const entry of entries) {
      if (!entry.tests?.length) {
        console.log(`[FAIL] ${patchFile}:${entry.name}: no [[tests]] entries`)
        allOk = false
        continue
      }
      const entryViews = views.filter(
        (view) => !view.platform || !entry.platforms || entry.platforms.includes(view.platform),
      )
      if (entryViews.length === 0) {
        console.log(`[FAIL] ${patchFile}:${entry.name}: no matching rendered platform`)
        allOk = false
        continue
      }
      for (const patchTest of entry.tests) {
        if (patchTest.kind === "static") {
          for (const view of entryViews) {
            const result = evaluateStaticPatchTests(view.text, [patchTest])[0]
            allOk &&= result.ok
            console.log(
              `[${result.ok ? "ok" : "FAIL"}] ${patchFile}:${entry.name} [${view.platform ?? "bundle"}]: static ${patchTest.name} - ${result.message}`,
            )
          }
          continue
        }
        if (
          (args.platform && args.platform !== hostPlatform) ||
          (entry.platforms && (!hostPlatform || !entry.platforms.includes(hostPlatform)))
        ) {
          console.log(
            `[FAIL] ${patchFile}:${entry.name}: ${patchTest.kind} ${patchTest.name} requires its native platform`,
          )
          allOk = false
          continue
        }
        const result =
          patchTest.kind === "cli" ? runCliTest(args.bundle, patchTest) : runPtyTest(args.bundle, patchTest)
        allOk &&= result.ok
        console.log(
          `[${result.ok ? "ok" : "FAIL"}] ${patchFile}:${entry.name} [${hostPlatform ?? "host"}]: ${patchTest.kind} ${patchTest.name} - ${result.message}`,
        )
      }
    }
  }

  return allOk ? 0 : 1
}

if (import.meta.main) await runWithHeavyLock(ROOT, () => runCli(main))
