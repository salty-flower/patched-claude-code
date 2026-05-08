#!/usr/bin/env bun
// Package a rendered patched Claude Code bundle as a release artifact.

import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import { basename, join } from "node:path"
import * as TOML from "@iarna/toml"

const ROOT = process.env.AUDITED_CC_ROOT ?? join(import.meta.dir, "..", "..")
const PACKAGE = "@anthropic-ai/claude-code"
const DEFAULT_TAG_PATTERN = /^claude-code-(\d+\.\d+\.\d+)-(.+)$/

type Args = {
  version?: string
  releaseId?: string
  input?: string
  outDir: string
}

type Patch = {
  name: string
  target_version: string
  applies_to?: string
  gated_by_env?: string
}

type PatchFile = {
  patch: Patch
  raw: string
}

type StageManifest = {
  source?: string
  platformPackage?: string
  nativeTarball?: string
  canonical?: {
    cliPath: string
    reportPath: string
    bytes: number
    sha256: string
    mergePolicy: string
  }
  platforms?: Array<{
    platform: string
    binaryUrl: string
    binarySha256: string
    entrypointSha256: string
    entrypointBytes: number
  }>
}

function parseArgs(argv: string[]): Args {
  const args: Args = { outDir: join(ROOT, "dist") }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--version") {
      args.version = argv[++i]
    } else if (arg === "--release-id") {
      args.releaseId = argv[++i]
    } else if (arg === "--input") {
      args.input = argv[++i]
    } else if (arg === "--out-dir") {
      args.outDir = argv[++i]
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: bun run tools/patch/package-release.ts --version <ver> --release-id <patch.N> [--input <cli.patched.js>] [--out-dir <dist>]",
      )
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }

  const tag = process.env.GITHUB_REF_NAME
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

function sha256(buf: Buffer | Uint8Array | string): { hex: string; sri: string } {
  const digest = createHash("sha256").update(buf).digest()
  return { hex: digest.toString("hex"), sri: `sha256-${digest.toString("base64")}` }
}

function loadPatches(): PatchFile[] {
  const patchDir = join(ROOT, "patches")
  return readdirSync(patchDir)
    .filter((file) => file.endsWith(".toml"))
    .sort()
    .map((file) => {
      const raw = readFileSync(join(patchDir, file), "utf8")
      return { patch: TOML.parse(raw) as unknown as Patch, raw }
    })
}

function loadStageManifest(version: string): StageManifest | null {
  const path = join(ROOT, "staging", version, "stage-manifest.json")
  if (!existsSync(path)) return null
  return JSON.parse(readFileSync(path, "utf8")) as StageManifest
}

function writeExecutable(path: string, body: string): void {
  writeFileSync(path, body, { mode: 0o755 })
}

function main(): number {
  const args = parseArgs(process.argv.slice(2))
  const version = args.version
  if (!version) throw new Error("missing version")
  const releaseId = args.releaseId ?? "patch.local"
  const input = args.input ?? join(ROOT, "staging", version, "cli.patched.js")
  if (!existsSync(input)) throw new Error(`patched bundle missing: ${input}`)

  const artifactBase = `audited-claude-code-${version}-${releaseId}`
  const workDir = join(args.outDir, artifactBase)
  const tarball = join(args.outDir, `${artifactBase}.tar.gz`)
  const releaseManifestPath = join(args.outDir, `${artifactBase}.manifest.json`)
  const notesPath = join(args.outDir, "release-notes.md")

  rmSync(workDir, { recursive: true, force: true })
  mkdirSync(join(workDir, "bin"), { recursive: true })
  mkdirSync(args.outDir, { recursive: true })

  const cliBytes = readFileSync(input)
  writeFileSync(join(workDir, "cli.js"), cliBytes, { mode: 0o644 })
  writeExecutable(
    join(workDir, "bin", "claude-audited"),
    `#!/usr/bin/env sh
set -eu
dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
exec bun "$dir/cli.js" "$@"
`,
  )

  const patches = loadPatches()
  const stageManifest = loadStageManifest(version)
  const patchSetSource = patches.map(({ patch, raw }) => `${patch.name}\0${raw}`).join("\n")
  const gitCommit = process.env.GITHUB_SHA || output(["git", "rev-parse", "HEAD"])
  const tag = process.env.GITHUB_REF_NAME
  const cliHash = sha256(cliBytes)
  const manifest = {
    schema: 1,
    name: "audited-claude-code",
    upstream: {
      package: PACKAGE,
      version,
      source: stageManifest?.source ?? null,
      platformPackage: stageManifest?.platformPackage ?? null,
      nativeTarball: stageManifest?.nativeTarball ?? null,
      canonical: stageManifest?.canonical ?? null,
      platforms: stageManifest?.platforms ?? null,
    },
    release: {
      id: releaseId,
      tag: tag ?? null,
      gitCommit,
      builtAt: new Date().toISOString(),
    },
    runtime: {
      command: "bun",
      entrypoint: "cli.js",
    },
    patchSet: {
      count: patches.length,
      sha256: sha256(patchSetSource).sri,
      names: patches.map(({ patch }) => patch.name),
    },
    bundle: {
      file: "cli.js",
      bytes: cliBytes.byteLength,
      sha256: cliHash.sri,
    },
  }
  writeFileSync(join(workDir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")

  rmSync(tarball, { force: true })
  run(["tar", "-czf", tarball, "-C", args.outDir, artifactBase])
  const tarBytes = readFileSync(tarball)
  const tarHash = sha256(tarBytes)
  writeFileSync(join(args.outDir, `${basename(tarball)}.sha256`), `${tarHash.hex}  ${basename(tarball)}\n`)
  writeFileSync(
    releaseManifestPath,
    JSON.stringify(
      {
        ...manifest,
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
    `# ${artifactBase}

Target: \`${PACKAGE}@${version}\`
Patch release: \`${releaseId}\`
Commit: \`${gitCommit}\`

Artifact:
- \`${basename(tarball)}\`
- raw tarball hash: \`${tarHash.sri}\`

Install by unpacking the tarball and running \`bin/claude-audited\` with Bun on PATH.
For Nix/Home Manager pinning, use \`${basename(tarball)}\` plus the raw hash above.
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
