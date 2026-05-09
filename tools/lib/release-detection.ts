import * as semver from "semver"

export type ReleaseSource = "npm" | "direct"

export type ReleaseCandidate =
  | {
      action: "none"
      reason: string
    }
  | {
      action: "prerelease" | "promote"
      version: string
      source: ReleaseSource
      reason: string
    }

export type ReleaseChannelState = {
  npmLatest?: string
  directLatest?: string
  handledVersions?: Set<string>
  prereleaseVersions?: Set<string>
}

const RELEASE_TAG_RE = /^claude-code-(\d+\.\d+\.\d+)-patch\.\d+$/

function maxVersion(versions: Iterable<string>): string | undefined {
  return [...versions].filter((version) => semver.valid(version)).sort(semver.rcompare)[0]
}

export function parseHandledReleaseTags(tags: string[]): Set<string> {
  const versions = new Set<string>()
  for (const tag of tags) {
    const version = tag.match(RELEASE_TAG_RE)?.[1]
    if (version) versions.add(version)
  }
  return versions
}

export function classifyReleaseCandidate(state: ReleaseChannelState): ReleaseCandidate {
  const handledVersions = state.handledVersions ?? new Set<string>()
  const prereleaseVersions = state.prereleaseVersions ?? new Set<string>()
  const newestHandled = maxVersion([...handledVersions, ...prereleaseVersions])

  if (state.npmLatest && state.directLatest && state.npmLatest === state.directLatest) {
    if (prereleaseVersions.has(state.npmLatest) && !handledVersions.has(state.npmLatest)) {
      return {
        action: "promote",
        version: state.npmLatest,
        source: "npm",
        reason: "npm latest and direct latest have converged",
      }
    }

    if (!handledVersions.has(state.npmLatest) && (!newestHandled || semver.gt(state.npmLatest, newestHandled))) {
      return {
        action: "promote",
        version: state.npmLatest,
        source: "npm",
        reason: "npm latest and direct latest have converged on an unhandled version",
      }
    }

    return {
      action: "none",
      reason: `${state.npmLatest} is already handled`,
    }
  }

  const oneSided = [
    ["npm", state.npmLatest],
    ["direct", state.directLatest],
  ] as const

  const candidate = oneSided
    .filter(([, version]) => version && !handledVersions.has(version) && !prereleaseVersions.has(version))
    .map(([source, version]) => ({ source, version: version as string }))
    .filter(({ version }) => !newestHandled || semver.gt(version, newestHandled))
    .sort((a, b) => semver.rcompare(a.version, b.version))[0]

  if (!candidate) {
    return {
      action: "none",
      reason: newestHandled ? `no channel is newer than ${newestHandled}` : "no unhandled channel version found",
    }
  }

  return {
    action: "prerelease",
    version: candidate.version,
    source: candidate.source,
    reason: `${candidate.source} latest is newer than any handled release`,
  }
}
