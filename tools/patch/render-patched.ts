#!/usr/bin/env bun
// Verify patches against a staged target, then render the patched output.
//
// Single-file targets render one patched bundle. Dual-graph targets render
// every platform graph into graph.patched/<platform>/ plus a platform
// dispatcher at cli.patched.js.

import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { runWithHeavyLock } from "../lib/heavy-lock"
import {
  applyPatchEntriesToGraphBundle,
  dispatcherSource,
  isDualGraphStaged,
  loadGraphBundle,
  stagedGraphRoot,
  stagedPatchedGraphRoot,
} from "../lib/graph-bundle"
import { createCommand, runCli } from "../lib/cli"
import { loadPatchEntriesFromDirectory } from "../lib/patch-files"
import { runChecked } from "../lib/process"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  input?: string
  output?: string
  skipVerify?: boolean
}

export function parseArgs(argv: string[]): Args {
  const program = createCommand("render-patched")
    .argument("[version]")
    .option("--input <cli.js>")
    .option("--output <cli.patched.js>")
    .option("--skip-verify")
    .parse(argv, { from: "user" })
  const options = program.opts<{ input?: string; output?: string; skipVerify?: boolean }>()
  const version = program.args[0]

  return {
    ...(version ? { version } : {}),
    ...(options.input ? { input: options.input } : {}),
    ...(options.output ? { output: options.output } : {}),
    ...(options.skipVerify ? { skipVerify: true } : {}),
  }
}

function renderDualGraph(version: string): number {
  const patches = loadPatchEntriesFromDirectory(ROOT)
  console.error(`loaded ${patches.length} patch entries from patches/`)
  const graphRoot = stagedGraphRoot(ROOT, version)
  const patchedRoot = stagedPatchedGraphRoot(ROOT, version)
  if (existsSync(patchedRoot)) rmSync(patchedRoot, { recursive: true, force: true })
  mkdirSync(patchedRoot, { recursive: true })

  let totalApplied = 0
  for (const platform of ["darwin-arm64", "linux-x64"]) {
    const stagedPlatformDir = join(graphRoot, platform)
    if (!existsSync(stagedPlatformDir)) continue
    const bundle = loadGraphBundle(stagedPlatformDir, platform)
    const outcome = applyPatchEntriesToGraphBundle(bundle, patches, version)
    totalApplied += outcome.applied
    const outDir = join(patchedRoot, platform)
    cpSync(stagedPlatformDir, outDir, { recursive: true })
    for (const [path, text] of outcome.texts) {
      const target = join(outDir, path)
      mkdirSync(dirname(target), { recursive: true })
      writeFileSync(target, text)
    }
    console.error(
      `rendered ${platform} graph -> graph.patched/${platform} (${outcome.applied}/${patches.length} patch entries applied)`,
    )
  }

  writeFileSync(join(ROOT, "staging", version, "cli.patched.js"), dispatcherSource("rendered"))
  console.error(`rendered patched dispatcher -> staging/${version}/cli.patched.js`)
  void totalApplied
  return 0
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  if (!args.version) {
    console.error(
      "usage: bun run tools/patch/render-patched.ts <version> [--input <cli.js>] [--output <cli.patched.js>]",
    )
    return 2
  }

  if (!args.input && !args.output && isDualGraphStaged(ROOT, args.version)) {
    if (!args.skipVerify) {
      runChecked(["bun", "run", join(ROOT, "tools", "patch", "verify-patches.ts"), "--against", join(ROOT, "staging", args.version, "cli.js")], { cwd: ROOT })
    }
    return renderDualGraph(args.version)
  }

  const input = args.input ?? join(ROOT, "staging", args.version, "cli.js")
  const output = args.output ?? join(ROOT, "staging", args.version, "cli.patched.js")

  if (!existsSync(input)) {
    throw new Error(`input bundle missing: ${input}`)
  }

  mkdirSync(dirname(output), { recursive: true })
  if (!args.skipVerify) {
    runChecked(["bun", "run", join(ROOT, "tools", "patch", "verify-patches.ts"), "--against", input], { cwd: ROOT })
  }
  runChecked(["bun", "run", join(ROOT, "tools", "patch", "build-patched.ts"), input, output, args.version], {
    cwd: ROOT,
  })
  console.error(`rendered patched bundle -> ${output}`)
  return 0
}

if (import.meta.main) await runWithHeavyLock(ROOT, () => runCli(main))
