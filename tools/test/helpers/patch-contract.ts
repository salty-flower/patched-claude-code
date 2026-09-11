import { patchApplies } from "../../lib/apply-patches"
import type { PatchEntry } from "../../lib/patch-files"

export function activePatch(entries: PatchEntry[], version: string, platform: string, prefix: string): PatchEntry {
  const matches = entries.filter(
    (entry) =>
      entry.name.startsWith(prefix) &&
      patchApplies(entry, version) &&
      (!entry.platforms || entry.platforms.includes(platform)),
  )
  if (matches.length !== 1) {
    throw new Error(`Expected one active ${prefix} for ${version}/${platform}, found ${matches.length}`)
  }
  return matches[0]!
}

// Patterns describe repo-authored semantic roles, never a version's minified name.
export function captureIdentifier(source: string, role: string, pattern: RegExp): string {
  const names = new Set([...source.matchAll(new RegExp(pattern.source, "g"))].map((match) => match[1]))
  const name = [...names][0]
  if (names.size !== 1 || !name || !/^[\w$]+$/.test(name)) {
    throw new Error(`Expected one identifier for ${role}, found ${[...names].join(", ") || "none"}`)
  }
  return name
}
