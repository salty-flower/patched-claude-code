#!/usr/bin/env bun
// Verify patches against a staged bundle, then render the patched JS bundle.

import { existsSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  input?: string
  output?: string
}

function parseArgs(argv: string[]): Args {
  const args: Args = {}
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--input") {
      args.input = argv[++i]
    } else if (arg === "--output") {
      args.output = argv[++i]
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: bun run tools/patch/render-patched.ts <version> [--input <cli.js>] [--output <cli.patched.js>]",
      )
      process.exit(0)
    } else if (!args.version) {
      args.version = arg
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }
  return args
}

function run(cmd: string[]): void {
  const result = Bun.spawnSync({ cmd, cwd: ROOT, stdout: "inherit", stderr: "inherit" })
  if (!result.success) {
    throw new Error(`command failed (${result.exitCode}): ${cmd.join(" ")}`)
  }
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  if (!args.version) {
    console.error(
      "usage: bun run tools/patch/render-patched.ts <version> [--input <cli.js>] [--output <cli.patched.js>]",
    )
    return 2
  }

  const input = args.input ?? join(ROOT, "staging", args.version, "cli.js")
  const output = args.output ?? join(ROOT, "staging", args.version, "cli.patched.js")

  if (!existsSync(input)) {
    throw new Error(`input bundle missing: ${input}`)
  }

  mkdirSync(dirname(output), { recursive: true })
  run(["bun", "run", join(ROOT, "tools", "patch", "verify-patches.ts"), "--against", input])
  run(["bun", "run", join(ROOT, "tools", "patch", "build-audited.ts"), input, output, args.version])
  console.error(`rendered patched bundle -> ${output}`)
  return 0
}

if (import.meta.main) {
  process.exit(main())
}
