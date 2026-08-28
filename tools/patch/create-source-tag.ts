#!/usr/bin/env bun
// Create a minimal git tag commit containing only the Nix source payload.

import { existsSync, readdirSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { createCommand, runCli } from "../lib/cli"
import { captureChecked } from "../lib/process"
import { graphDirectoryNameForEntrypoint, releaseTag } from "../lib/release-payload"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

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

function payloadFiles(root: string, path: string): TagFile[] {
  const absolute = join(root, path)
  if (!existsSync(absolute)) return []
  return readdirSync(absolute, { withFileTypes: true })
    .sort((left, right) => (left.name < right.name ? -1 : left.name > right.name ? 1 : 0))
    .flatMap((entry) => {
      const child = `${path}/${entry.name}`
      return entry.isDirectory()
        ? payloadFiles(root, child)
        : [{ path: child, mode: "100644" as const, required: true }]
    })
}

export function sourceTagFiles(root: string = ROOT): TagFile[] {
  const cliPath = join(root, "cli.js")
  const graphDirectoryName = existsSync(cliPath) ? graphDirectoryNameForEntrypoint(readFileSync(cliPath, "utf8")) : null
  if (graphDirectoryName !== null) {
    for (const platform of ["darwin-arm64", "linux-x64"]) {
      const platformEntrypoint = join(root, graphDirectoryName, platform, "cli.js")
      if (!existsSync(platformEntrypoint)) {
        throw new Error(`source tag payload missing: ${graphDirectoryName}/${platform}/cli.js`)
      }
    }
  }
  return [
    { path: "cli.js", mode: "100644", required: true },
    { path: "manifest.json", mode: "100644", required: true },
    { path: "package.json", mode: "100644", required: true },
    { path: "bin/claude-patched", mode: "100755", required: true },
    { path: "runtime/macos-keychain.ts", mode: "100644", required: true },
    { path: "runtime/release-integrity.ts", mode: "100644", required: true },
    { path: "runtime/system-prompt-overrides.ts", mode: "100644", required: true },
    { path: "flake.nix", mode: "100644", required: true },
    { path: "flake.lock", mode: "100644", required: false },
    ...payloadFiles(root, "prompts/catalog"),
    ...(graphDirectoryName === null ? [] : payloadFiles(root, graphDirectoryName)),
  ]
}

export function parseArgs(argv: string[], env: Record<string, string | undefined> = process.env): Args {
  const args = createCommand("create-source-tag")
    .requiredOption("--version <ver>")
    .option("--release-id <id>", "patch release id", "patch.local")
    .option("--parent <commit>")
    .option("--no-parent")
    .parse(argv, { from: "user" })
    .opts<Omit<Args, "parent"> & { parent?: string | false }>()
  const parent = args.parent === false ? null : (args.parent ?? env.GITHUB_SHA ?? null)
  return { version: args.version, releaseId: args.releaseId ?? "patch.local", parent }
}

function run(cmd: string[], env: Record<string, string | undefined> = {}): string {
  return captureChecked(cmd, {
    cwd: ROOT,
    env: { ...gitIdentityEnv(), ...env },
  })
}

function gitIdentityEnv(): Record<string, string> {
  const actor = process.env.GITHUB_ACTOR || "github-actions[bot]"
  const name = process.env.GIT_AUTHOR_NAME || process.env.GIT_COMMITTER_NAME || actor
  const email =
    process.env.GIT_AUTHOR_EMAIL ||
    process.env.GIT_COMMITTER_EMAIL ||
    "41898282+github-actions[bot]@users.noreply.github.com"
  return {
    GIT_AUTHOR_NAME: name,
    GIT_AUTHOR_EMAIL: email,
    GIT_COMMITTER_NAME: name,
    GIT_COMMITTER_EMAIL: email,
  }
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const releaseId = args.releaseId ?? "patch.local"
  const tag = releaseTag(version, releaseId)
  if (!existsSync(join(ROOT, "prompts", "catalog", "manifest.json"))) {
    throw new Error("source tag payload missing: prompts/catalog/manifest.json")
  }
  const files = sourceTagFiles()
  for (const file of files) {
    if (file.required && !existsSync(join(ROOT, file.path))) {
      throw new Error(`source tag payload missing: ${file.path}`)
    }
  }

  const index = join(tmpdir(), `patched-claude-code-source-tag-${process.pid}-${Date.now()}`)
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

if (import.meta.main) await runCli(main)
