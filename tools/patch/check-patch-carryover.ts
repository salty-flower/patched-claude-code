#!/usr/bin/env bun
// Warn when a target bump drops an active patch lineage without a successor.

import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { gt, satisfies, valid } from "semver"
import { createCommand, runCli } from "../lib/cli"
import { loadPatchEntriesFromDirectory, type PatchEntry } from "../lib/patch-files"

const ROOT = process.env.PATCHED_CC_ROOT ?? join(import.meta.dir, "..", "..")

export type PatchCarryoverWarning = {
  feature: string
  lineage: string
  previousEntries: string[]
  rationaleRefs: string[]
}

export type PatchCarryoverReport = {
  schema: 1
  scope: "patch-carryover"
  fromVersion: string
  toVersion: string
  warnings: PatchCarryoverWarning[]
}

export function patchLineageName(name: string): string {
  return name
    .replace(/-\d+-\d+-\d+(?=-|$)/, "")
    .replace(/-(?:darwin(?:-arm64)?|linux(?:-x64)?|all-platforms)$/, "")
}

function appliesAtVersion(patch: PatchEntry, version: string): boolean {
  if (!patch.enabled) return false
  const range = patch.applies_to ?? patch.target_version
  return valid(range) ? range === version : satisfies(version, range)
}

export function findPatchCarryoverWarnings(
  patches: PatchEntry[],
  fromVersion: string,
  toVersion: string,
): PatchCarryoverWarning[] {
  if (!gt(toVersion, fromVersion)) return []
  const lineageKey = (patch: PatchEntry) => `${patch.featureName}\0${patchLineageName(patch.name)}`
  const successors = new Set(patches.filter((patch) => appliesAtVersion(patch, toVersion)).map(lineageKey))
  const missing = new Map<string, PatchEntry[]>()
  for (const patch of patches) {
    if (!appliesAtVersion(patch, fromVersion) || successors.has(lineageKey(patch))) continue
    const key = lineageKey(patch)
    const entries = missing.get(key) ?? []
    entries.push(patch)
    missing.set(key, entries)
  }

  return [...missing.entries()]
    .map(([key, entries]) => {
      const separator = key.indexOf("\0")
      return {
        feature: key.slice(0, separator),
        lineage: key.slice(separator + 1),
        previousEntries: entries.map(({ name }) => name).sort(),
        rationaleRefs: [...new Set(entries.map(({ rationale_ref }) => rationale_ref))].sort(),
      }
    })
    .sort((left, right) =>
      left.feature.localeCompare(right.feature) || left.lineage.localeCompare(right.lineage),
    )
}

function main(): number {
  const options = createCommand("check-patch-carryover")
    .description("Warn when active patch lineages lack a successor in a target bump")
    .requiredOption("--from <version>", "currently shipped target version")
    .requiredOption("--to <version>", "candidate target version")
    .option("--result-file <path>", "write a machine-readable carryover report")
    .parse(process.argv.slice(2), { from: "user" })
    .opts<{ from: string; to: string; resultFile?: string }>()

  if (!valid(options.from) || !valid(options.to)) {
    throw new Error("--from and --to must be explicit semver versions")
  }
  const report: PatchCarryoverReport = {
    schema: 1,
    scope: "patch-carryover",
    fromVersion: options.from,
    toVersion: options.to,
    warnings: findPatchCarryoverWarnings(loadPatchEntriesFromDirectory(ROOT), options.from, options.to),
  }
  if (options.resultFile) {
    mkdirSync(dirname(options.resultFile), { recursive: true })
    writeFileSync(options.resultFile, `${JSON.stringify(report, null, 2)}\n`, { mode: 0o644 })
  }
  for (const warning of report.warnings) {
    console.warn(
      `[warn] ${warning.feature}/${warning.lineage}: no ${options.to} successor for ${warning.previousEntries.join(", ")}`,
    )
  }
  console.log(`patch carryover: ${report.warnings.length} warning(s) from ${options.from} to ${options.to}`)
  return 0
}

if (import.meta.main) runCli(main)
