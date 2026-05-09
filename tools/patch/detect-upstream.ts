#!/usr/bin/env bun
// Detect whether npm or the native downloads channel exposes a Claude Code
// version that this repository has not released yet.

import { classifyReleaseCandidate, parseHandledReleaseTags } from "../lib/release-detection"
import { DIRECT_LATEST_URL, NPM_REGISTRY_PACKAGE_URL } from "../lib/upstream-channels"

type Args = {
  tags: string[]
  prereleaseTags: string[]
}

function parseArgs(argv: string[]): Args {
  const args: Args = { tags: [], prereleaseTags: [] }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--handled-tag") {
      args.tags.push(argv[++i])
    } else if (arg === "--prerelease-tag") {
      args.prereleaseTags.push(argv[++i])
    } else if (arg === "--help" || arg === "-h") {
      console.log("usage: bun run tools/patch/detect-upstream.ts [--handled-tag <tag>] [--prerelease-tag <tag>]")
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }
  return args
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`fetch failed for ${url}: ${response.status} ${response.statusText}`)
  return (await response.text()).trim()
}

async function fetchNpmLatest(): Promise<string> {
  const response = await fetch(NPM_REGISTRY_PACKAGE_URL)
  if (!response.ok) throw new Error(`npm registry fetch failed: ${response.status} ${response.statusText}`)
  const meta = (await response.json()) as { "dist-tags": { latest: string } }
  return meta["dist-tags"].latest
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  const [npmLatest, directLatest] = await Promise.all([fetchNpmLatest(), fetchText(DIRECT_LATEST_URL)])
  const candidate = classifyReleaseCandidate({
    npmLatest,
    directLatest,
    handledVersions: parseHandledReleaseTags(args.tags),
    prereleaseVersions: parseHandledReleaseTags(args.prereleaseTags),
  })

  console.log(
    JSON.stringify(
      {
        npmLatest,
        directLatest,
        ...candidate,
      },
      null,
      2,
    ),
  )
  return 0
}

if (import.meta.main) {
  process.exit(await main())
}
