import { readFileSync } from "node:fs"
import {
  type AstTransformOptions,
  type AstTransformPatch,
  type AstTransformVerifyResult,
  prepareAstTransformPatches,
} from "./ast-transform-patches"

// Each child owns one file's AST and checks every applicable locator against
// the original bytes. Do not combine transforms: different pipeline batches
// can intentionally overlap. Expected counts belong to the graph coordinator.
export function verifyGraphFile(
  source: string,
  patches: AstTransformPatch[],
  options: AstTransformOptions = {},
): AstTransformVerifyResult[] {
  return prepareAstTransformPatches(source, patches, {
    ...options,
    collectMatches: true,
    independent: true,
  }).results
}

export function verifyGraphFileInWorker(path: string, patches: AstTransformPatch[]): AstTransformVerifyResult[] {
  return verifyGraphFilesInWorker([path], patches)[0]
}

export const GRAPH_VERIFY_MAX_FILES = 64
export const GRAPH_VERIFY_MAX_BYTES = 1024 * 1024

// Bound retained allocator memory without paying a process startup for each
// tiny module. Oversized modules own a worker; no other AST accompanies them.
export function groupGraphVerificationFiles<T extends { text: string }>(files: T[]): T[][] {
  const groups: T[][] = []
  let group: T[] = []
  let bytes = 0
  for (const file of files) {
    const size = Buffer.byteLength(file.text, "utf8")
    if (group.length > 0 && (group.length >= GRAPH_VERIFY_MAX_FILES || bytes + size > GRAPH_VERIFY_MAX_BYTES)) {
      groups.push(group)
      group = []
      bytes = 0
    }
    group.push(file)
    bytes += size
  }
  if (group.length > 0) groups.push(group)
  return groups
}

export function verifyGraphFilesInWorker(paths: string[], patches: AstTransformPatch[]): AstTransformVerifyResult[][] {
  if (paths.length === 0) return []
  const worker = Bun.spawnSync([process.execPath, import.meta.path, ...paths], {
    stdin: new TextEncoder().encode(JSON.stringify(patches)),
    stdout: "pipe",
    stderr: "pipe",
  })
  if (worker.exitCode !== 0) {
    throw new Error(
      `AST verification worker failed for ${paths.join(", ")} (${worker.exitCode}): ${worker.stderr.toString()}`,
    )
  }
  if (worker.stderr.length > 0) process.stderr.write(worker.stderr)
  const results: unknown = JSON.parse(worker.stdout.toString())
  if (
    !Array.isArray(results) ||
    results.length !== paths.length ||
    !results.every(
      (fileResults) =>
        Array.isArray(fileResults) &&
        fileResults.length === patches.length &&
        fileResults.every(
          (result) =>
            result !== null &&
            typeof result === "object" &&
            typeof result.ok === "boolean" &&
            Number.isSafeInteger(result.matches) &&
            result.matches >= 0 &&
            typeof result.message === "string",
        ),
    )
  ) {
    throw new Error(`invalid AST verification worker result for ${paths.join(", ")}`)
  }
  return results
}

if (import.meta.main) {
  const paths = process.argv.slice(2)
  if (paths.length === 0) throw new Error("AST verification worker requires graph files")
  const patches: AstTransformPatch[] = JSON.parse(await Bun.stdin.text())
  // Preparation exposes only scalar results. Each file's source and AST are
  // eligible for collection before the next file is read and parsed.
  console.log(JSON.stringify(paths.map((path) => verifyGraphFile(readFileSync(path, "utf8"), patches))))
}
