#!/usr/bin/env bun
// Verify patches against a staged bundle, then render the patched JS bundle.

import { existsSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { createCommand } from "../lib/cli"

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
  if (!args.skipVerify) {
    run(["bun", "run", join(ROOT, "tools", "patch", "verify-patches.ts"), "--against", input])
  }
  run(["bun", "run", join(ROOT, "tools", "patch", "build-patched.ts"), input, output, args.version])
  console.error(`rendered patched bundle -> ${output}`)
  return 0
}

if (import.meta.main) {
  process.exit(main())
}
