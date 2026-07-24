#!/usr/bin/env bun
// Detect whether npm or the native downloads channel exposes a Claude Code
// version that this repository has not released yet.

import { collectOption, createCommand, runCli } from "../lib/cli"
import { classifyReleaseCandidate, parseHandledReleaseTags } from "../lib/release-detection"
import { DIRECT_LATEST_URL, NPM_REGISTRY_PACKAGE_URL } from "../lib/upstream-channels"

type Args = {
  tags: string[]
  prereleaseTags: string[]
}

export function parseArgs(argv: string[]): Args {
  const options = createCommand("detect-upstream")
    .option("--handled-tag <tag>", "already handled release tag", collectOption, [])
    .option("--prerelease-tag <tag>", "already published prerelease tag", collectOption, [])
    .parse(argv, { from: "user" })
    .opts<{ handledTag: string[]; prereleaseTag: string[] }>()

  return { tags: options.handledTag, prereleaseTags: options.prereleaseTag }
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

if (import.meta.main) await runCli(main)
