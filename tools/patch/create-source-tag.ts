#!/usr/bin/env bun
// Create a minimal git tag commit containing only the Nix source payload.

import { existsSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { releaseTag } from "../lib/release-payload"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")

type Args = {
  version?: string
  releaseId?: string
  parent?: string | null
}

type TagFile = {
  path: string
  mode: "100644" | "100755"
  required: boolean
}

function parseArgs(argv: string[]): Args {
  const args: Args = { parent: process.env.GITHUB_SHA ?? null }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--version") {
      args.version = argv[++i]
    } else if (arg === "--release-id") {
      args.releaseId = argv[++i]
    } else if (arg === "--parent") {
      args.parent = argv[++i]
    } else if (arg === "--no-parent") {
      args.parent = null
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: bun run tools/patch/create-source-tag.ts --version <ver> --release-id <patch.N> [--parent <commit>|--no-parent]",
      )
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }

  if (!args.version) throw new Error("missing --version")
  args.releaseId ??= "patch.local"
  return args
}

function run(cmd: string[], env: Record<string, string | undefined> = {}): string {
  const result = Bun.spawnSync({
    cmd,
    cwd: ROOT,
    env: { ...process.env, ...env },
    stdout: "pipe",
    stderr: "inherit",
  })
  if (!result.success) {
    throw new Error(`command failed (${result.exitCode}): ${cmd.join(" ")}`)
  }
  return new TextDecoder().decode(result.stdout).trim()
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const releaseId = args.releaseId ?? "patch.local"
  const tag = releaseTag(version, releaseId)
  const files: TagFile[] = [
    { path: "cli.js", mode: "100644", required: true },
    { path: "manifest.json", mode: "100644", required: true },
    { path: "package.json", mode: "100644", required: true },
    { path: "bin/claude-audited", mode: "100755", required: true },
    { path: "flake.nix", mode: "100644", required: true },
    { path: "flake.lock", mode: "100644", required: false },
  ]
  for (const file of files) {
    if (file.required && !existsSync(join(ROOT, file.path))) {
      throw new Error(`source tag payload missing: ${file.path}`)
    }
  }

  const index = join(tmpdir(), `audited-claude-code-source-tag-${process.pid}-${Date.now()}`)
  const env = { GIT_INDEX_FILE: index }
  try {
    run(["git", "read-tree", "--empty"], env)
    for (const file of files) {
      if (!existsSync(join(ROOT, file.path))) continue
      const blob = run(["git", "hash-object", "-w", file.path])
      run(["git", "update-index", "--add", "--cacheinfo", `${file.mode},${blob},${file.path}`], env)
    }
    const tree = run(["git", "write-tree"], env)
    const commitArgs = ["git", "commit-tree", tree]
    if (args.parent) commitArgs.push("-p", args.parent)
    commitArgs.push("-m", `release-source: ${tag}`)
    const commit = run(commitArgs)
    run(["git", "tag", "-f", tag, commit])
    console.error(`tagged ${tag} -> ${commit}`)
  } finally {
    rmSync(index, { force: true })
  }

  return 0
}

if (import.meta.main) {
  process.exit(main())
}
