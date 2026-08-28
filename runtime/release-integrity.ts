import { createHash } from "node:crypto"
import { readdirSync, readFileSync } from "node:fs"
import { dirname, join, relative, sep } from "node:path"

export type RuntimeGraphDirectory = "graph.patched" | "graph" | null

export type RuntimeBundleFile = {
  path: string
  bytes: number
  sha256: string
}

export type RuntimeBundleIntegrity = {
  sha256: string
  files: RuntimeBundleFile[]
}

function sriSha256(bytes: Buffer | Uint8Array | string): string {
  return `sha256-${createHash("sha256").update(bytes).digest("base64")}`
}

function compareNames(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0
}

function collectFiles(path: string): string[] {
  return readdirSync(path, { withFileTypes: true })
    .sort((left, right) => compareNames(left.name, right.name))
    .flatMap((entry) => {
      const child = join(path, entry.name)
      if (entry.isDirectory()) return collectFiles(child)
      if (entry.isFile()) return [child]
      throw new Error(`runtime bundle contains unsupported filesystem entry: ${child}`)
    })
}

export function computeRuntimeBundleIntegrity(
  entrypointPath: string,
  graphDirectory: RuntimeGraphDirectory,
  entrypointName = "cli.js",
): RuntimeBundleIntegrity {
  const root = dirname(entrypointPath)
  const paths = [entrypointPath, ...(graphDirectory === null ? [] : collectFiles(join(root, graphDirectory)))]
  const files = paths
    .map((path): RuntimeBundleFile => {
      const bytes = readFileSync(path)
      return {
        path: path === entrypointPath ? entrypointName : relative(root, path).split(sep).join("/"),
        bytes: bytes.byteLength,
        sha256: sriSha256(bytes),
      }
    })
    .sort((left, right) => compareNames(left.path, right.path))
  const entrypoint = files.find((file) => file.path === entrypointName)
  if (!entrypoint) throw new Error(`runtime bundle entrypoint is missing from integrity inventory: ${entrypointName}`)
  return {
    sha256: graphDirectory === null ? entrypoint.sha256 : sriSha256(JSON.stringify(files)),
    files,
  }
}
