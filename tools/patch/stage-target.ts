#!/usr/bin/env bun
// Dispatch target staging across canonical, direct native downloads, and npm sources.

import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  source: string
  platform: string
  platformPackage: string
  canonicalBase: string
}

type StageManifest = {
  channel?: string
  platformPackage?: string
  directPlatform?: string
}

function parseArgs(argv: string[]): Args {
  const args: Args = {
    source: process.env.TARGET_SOURCE ?? "canonical",
    platform: process.env.TARGET_PLATFORM ?? "darwin-arm64",
    platformPackage: process.env.TARGET_PLATFORM_PACKAGE ?? "@anthropic-ai/claude-code-darwin-arm64",
    canonicalBase: process.env.TARGET_CANONICAL_BASE ?? "darwin-arm64",
  }

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--version") {
      args.version = argv[++i]
    } else if (arg === "--source") {
      args.source = argv[++i]
    } else if (arg === "--platform") {
      args.platform = argv[++i]
    } else if (arg === "--platform-package") {
      args.platformPackage = argv[++i]
    } else if (arg === "--canonical-base") {
      args.canonicalBase = argv[++i]
    } else if (arg === "--help" || arg === "-h") {
      console.log("usage: bun run tools/patch/stage-target.ts --version <ver> [--source canonical|direct|npm]")
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }

  if (!args.version) throw new Error("missing --version")
  return args
}

function run(cmd: string[]): void {
  const result = Bun.spawnSync({ cmd, cwd: ROOT, stdout: "inherit", stderr: "inherit" })
  if (!result.success) {
    throw new Error(`command failed (${result.exitCode}): ${cmd.join(" ")}`)
  }
}

function loadManifest(version: string): StageManifest | null {
  const path = join(ROOT, "staging", version, "stage-manifest.json")
  if (!existsSync(path)) return null
  return JSON.parse(readFileSync(path, "utf8")) as StageManifest
}

function hasCurrentStage(args: Args): boolean {
  const version = args.version
  if (!version || !existsSync(join(ROOT, "staging", version, "cli.js"))) return false
  const manifest = loadManifest(version)
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
    run([
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
    ])
  } else if (args.source === "direct") {
    run(["bun", "run", "tools/patch/stage-claude-code.ts", version, "--source", "direct", "--platform", args.platform])
  } else if (args.source === "npm") {
    run(["bun", "run", "tools/patch/stage-claude-code.ts", version, "--platform-package", args.platformPackage])
  } else {
    throw new Error(`unsupported TARGET_SOURCE=${args.source}; expected canonical, npm, or direct`)
  }

  return 0
}

if (import.meta.main) {
  process.exit(main())
}
