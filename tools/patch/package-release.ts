#!/usr/bin/env bun
// Package a rendered patched Claude Code bundle as a release artifact.

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { basename, join } from "node:path"
import { createCommand } from "../lib/cli"
import { UPSTREAM_PACKAGE, artifactBase, sha256, writeReleasePayload } from "../lib/release-payload"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const DEFAULT_TAG_PATTERN = /^claude-code-(\d+\.\d+\.\d+)-(.+)$/

type Args = {
  version?: string
  releaseId?: string
  input?: string
  outDir: string
}

export function parseArgs(argv: string[], env: Record<string, string | undefined> = process.env): Args {
  const program = createCommand("package-release")
    .option("--version <ver>")
    .option("--release-id <id>")
    .option("--input <cli.patched.js>")
    .option("--out-dir <dist>", "artifact output directory", join(ROOT, "dist"))
    .parse(argv, { from: "user" })
  const args = program.opts<Args>()
  const tag = env.GITHUB_REF_NAME
  const match = tag?.match(DEFAULT_TAG_PATTERN)
  args.version ??= match?.[1]
  args.releaseId ??= match?.[2] ?? "patch.local"

  if (!args.version) {
    throw new Error("missing --version and GITHUB_REF_NAME does not match claude-code-<version>-<release-id>")
  }
  return args
}

function run(cmd: string[], cwd = ROOT): void {
  const result = Bun.spawnSync({ cmd, cwd, stdout: "inherit", stderr: "inherit" })
  if (!result.success) {
    throw new Error(`command failed (${result.exitCode}): ${cmd.join(" ")}`)
  }
}

function output(cmd: string[], cwd = ROOT): string {
  const result = Bun.spawnSync({ cmd, cwd, stdout: "pipe", stderr: "inherit" })
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
  const input = args.input ?? join(ROOT, "staging", version, "cli.patched.js")
  if (!existsSync(input)) throw new Error(`patched bundle missing: ${input}`)

  const base = artifactBase(version, releaseId)
  const workDir = join(args.outDir, base)
  const tarball = join(args.outDir, `${base}.tar.gz`)
  const releaseManifestPath = join(args.outDir, `${base}.manifest.json`)
  const notesPath = join(args.outDir, "release-notes.md")

  rmSync(workDir, { recursive: true, force: true })
  mkdirSync(args.outDir, { recursive: true })

  const gitCommit = process.env.GITHUB_SHA || output(["git", "rev-parse", "HEAD"])
  const tag = process.env.GITHUB_REF_NAME
  const payload = writeReleasePayload({
    root: ROOT,
    version,
    releaseId,
    input,
    outDir: workDir,
    tag: tag ?? null,
    gitCommit,
    builtAt: new Date().toISOString(),
  })

  rmSync(tarball, { force: true })
  run(["tar", "-czf", tarball, "-C", args.outDir, base])
  const tarBytes = readFileSync(tarball)
  const tarHash = sha256(tarBytes)
  writeFileSync(join(args.outDir, `${basename(tarball)}.sha256`), `${tarHash.hex}  ${basename(tarball)}\n`)
  writeFileSync(
    releaseManifestPath,
    JSON.stringify(
      {
        ...payload.manifest,
        artifact: {
          file: basename(tarball),
          bytes: tarBytes.byteLength,
          sha256: tarHash.sri,
          sha256Hex: tarHash.hex,
        },
      },
      null,
      2,
    ) + "\n",
  )
  writeFileSync(
    notesPath,
    `# ${base}

Target: \`${UPSTREAM_PACKAGE}@${version}\`
Patch release: \`${releaseId}\`
Commit: \`${gitCommit}\`

Artifact:
- \`${basename(tarball)}\`
- raw tarball hash: \`${tarHash.sri}\`

Nix/Home Manager should use the source tag \`github:<owner>/audited-claude-code/claude-code-${version}-${releaseId}\` for exact pinning, or \`github:<owner>/audited-claude-code/claude-code-latest\` when \`nix flake update\` should follow the latest audited source.
The tarball remains available for non-flake/manual installs.
`,
  )

  console.error(`wrote ${tarball}`)
  console.error(`wrote ${releaseManifestPath}`)
  console.error(`wrote ${notesPath}`)
  return 0
}

if (import.meta.main) {
  process.exit(main())
}
