#!/usr/bin/env bun
// Dispatch target staging across canonical, direct native downloads, and npm sources.

import { existsSync } from "node:fs"
import { join } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { runChecked } from "../lib/process"
import { loadStageManifest } from "../lib/stage-manifest"
import { parseTargetSource, parseTargetSourceOption, type TargetSource } from "../lib/target"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  source: TargetSource
  platform: string
  platformPackage: string
  canonicalBase: string
}

export function parseArgs(argv: string[], env: Record<string, string | undefined> = process.env): Args {
  const program = createCommand("stage-target")
    .requiredOption("--version <ver>")
    .option(
      "--source <source>",
      "bundle source",
      parseTargetSourceOption,
      parseTargetSource(env.TARGET_SOURCE ?? "canonical"),
    )
    .option("--platform <platform>", "direct release platform", env.TARGET_PLATFORM ?? "darwin-arm64")
    .option(
      "--platform-package <package>",
      "npm platform package",
      env.TARGET_PLATFORM_PACKAGE ?? "@anthropic-ai/claude-code-darwin-arm64",
    )
    .option("--canonical-base <platform>", "canonical merge base platform", env.TARGET_CANONICAL_BASE ?? "darwin-arm64")
    .parse(argv, { from: "user" })
  const options = program.opts<Args>()

  return options
}

function hasCurrentStage(args: Args): boolean {
  const version = args.version
  if (!version || !existsSync(join(ROOT, "staging", version, "cli.js"))) return false
  const manifest = loadStageManifest(ROOT, version)
  if (!manifest) return false

  if (args.source === "npm") {
    return (manifest.channel ?? "npm") === "npm" && (manifest.platformPackage ?? "") === args.platformPackage
  }
  if (args.source === "direct") {
    return manifest.channel === "direct" && (manifest.directPlatform ?? "") === args.platform
  }
  return false
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")

  if (hasCurrentStage(args)) {
    console.error(`staging/${version}/cli.js already staged from ${args.source}`)
    return 0
  }

  if (args.source === "canonical") {
    runChecked(
      [
        "bun",
        "run",
        "tools/platform/merge-platform-bundles.ts",
        "--version",
        version,
        "--platform",
        "darwin-arm64",
        "--platform",
        "linux-x64",
        "--base",
        args.canonicalBase,
        "--generalize-unknown-string-literals",
      ],
      { cwd: ROOT },
    )
  } else if (args.source === "direct") {
    runChecked(
      ["bun", "run", "tools/patch/stage-claude-code.ts", version, "--source", "direct", "--platform", args.platform],
      { cwd: ROOT },
    )
  } else if (args.source === "npm") {
    runChecked(
      ["bun", "run", "tools/patch/stage-claude-code.ts", version, "--platform-package", args.platformPackage],
      {
        cwd: ROOT,
      },
    )
  } else {
    throw new Error(`unsupported TARGET_SOURCE=${args.source}; expected canonical, npm, or direct`)
  }

  return 0
}

if (import.meta.main) await runCli(main)
