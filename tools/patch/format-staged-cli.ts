#!/usr/bin/env bun
// Format a staged Claude Code bundle for inspection without changing raw patch bytes.

import { mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { createCommand } from "../lib/cli"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  input?: string
  output?: string
}

export function parseArgs(argv: string[]): Args {
  const program = createCommand("format-staged-cli")
    .argument("[version]")
    .option("--input <cli.js>")
    .option("--output <cli.formatted.js>")
    .parse(argv, { from: "user" })
  const options = program.opts<{ input?: string; output?: string }>()
  const version = program.args[0]

  return {
    ...(version ? { version } : {}),
    ...(options.input ? { input: options.input } : {}),
    ...(options.output ? { output: options.output } : {}),
  }
}

function run(cmd: string[]): void {
  const result = Bun.spawnSync({ cmd, cwd: ROOT, stdout: "inherit", stderr: "inherit" })
  if (!result.success) {
    throw new Error(`command failed (${result.exitCode}): ${cmd.join(" ")}`)
  }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!args.version) {
    console.error(
      "usage: bun run tools/patch/format-staged-cli.ts <version> [--input <cli.js>] [--output <cli.formatted.js>]",
    )
    return 2
  }

  const input = args.input ?? join(ROOT, "staging", args.version, "cli.js")
  const output = args.output ?? join(ROOT, "staging", args.version, "cli.formatted.js")
  const inputFile = Bun.file(input)
  if (!(await inputFile.exists())) {
    throw new Error(`input bundle missing: ${input}`)
  }

  mkdirSync(dirname(output), { recursive: true })
  await Bun.write(output, inputFile)
  run([join(ROOT, "tools", "node_modules", ".bin", "biome"), "format", "--write", output])
  console.error(`formatted bundle -> ${output}`)
  return 0
}

if (import.meta.main) {
  process.exit(await main())
}
