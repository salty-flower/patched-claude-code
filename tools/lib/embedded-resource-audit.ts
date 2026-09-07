import { createHash } from "node:crypto"
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, posix } from "node:path"
import { parse } from "@babel/parser"

type Node = Record<string, unknown>
type FileIdentity = { bytes: number; sha256: string; encoding: string }
export type ResourceGraphManifest = {
  version: string
  platforms: Array<{
    platform: string
    files: Array<{
      path: string
      runtimePath?: string
      loader: number
      upstream: FileIdentity
      materialized: FileIdentity
    }>
  }>
}
export type EmbeddedResourceEntry = {
  platform: string
  exporter: string
  exportName: string
  logicalPath: string
  kind: "prompt" | "script" | "reference"
  assetPath: string
  runtimePath: string
  loader: number
  upstream: FileIdentity
  materialized: FileIdentity
  contentFile: string
}
export type EmbeddedResourceAudit = {
  schema: 1
  scope: "builtin-skill-resources"
  completeness: "partial"
  version: string
  graphManifestSha256: string
  method: "static-export-asset-dependencies-v1"
  entries: EmbeddedResourceEntry[]
  gaps: Array<{ platform: string; exporter: string; exportName: string; logicalPath: string; reason: string }>
  limitations: string[]
  manifestSha256: string
}

function node(value: unknown): Node | undefined {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? (value as Node) : undefined
}
function nodes(value: unknown): Node[] {
  return Array.isArray(value)
    ? value.flatMap((item) => {
        const result = node(item)
        return result ? [result] : []
      })
    : []
}
function name(value: unknown): string | undefined {
  const item = node(value)
  return typeof item?.name === "string" ? item.name : typeof item?.value === "string" ? item.value : undefined
}
function hash(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex")
}
function safePath(path: string): string {
  if (
    !path ||
    path.includes("\\") ||
    path.includes("\0") ||
    posix.isAbsolute(path) ||
    path.split("/").some((part) => part === ".." || part === "." || part === "")
  ) {
    throw new Error(`unsafe embedded resource path: ${JSON.stringify(path)}`)
  }
  return path
}
function bindings(source: string): {
  variables: Map<string, Node>
  exports: Map<string, Node>
  imports: Map<string, { source: string; imported: string }>
} {
  const ast = parse(source, { sourceType: "module" })
  const variables = new Map<string, Node>()
  const exports = new Map<string, Node>()
  const imports = new Map<string, { source: string; imported: string }>()
  for (const statement of nodes(ast.program.body)) {
    if (statement.type === "ImportDeclaration") {
      const source = name(statement.source)
      if (source)
        for (const specifier of nodes(statement.specifiers)) {
          const local = name(specifier.local)
          const imported = specifier.type === "ImportDefaultSpecifier" ? "default" : name(specifier.imported)
          if (local && imported) imports.set(local, { source, imported })
        }
    }
    const declaration = statement.type === "ExportNamedDeclaration" ? node(statement.declaration) : statement
    if (declaration?.type === "VariableDeclaration") {
      for (const binding of nodes(declaration.declarations)) {
        const id = name(binding.id)
        const init = node(binding.init)
        if (id && init) variables.set(id, init)
        if (id && init && statement.type === "ExportNamedDeclaration") exports.set(id, { type: "Identifier", name: id })
      }
    }
    if (statement.type === "ExportDefaultDeclaration") {
      const value = node(statement.declaration)
      if (value) exports.set("default", value)
    }
    if (statement.type === "ExportNamedDeclaration") {
      for (const specifier of nodes(statement.specifiers)) {
        const exported = name(specifier.exported)
        const local = node(specifier.local)
        if (exported && local) exports.set(exported, local)
      }
    }
  }
  return { variables, exports, imports }
}

// Static dependency tracing only: never import, require, eval, or spawn upstream assets.
// Unknown expressions are gaps, not guessed skill contents.
export function writeEmbeddedResourceAudit(options: {
  graphRoot: string
  graphManifestPath: string
  outDir: string
}): EmbeddedResourceAudit {
  const manifestBytes = readFileSync(options.graphManifestPath)
  const graph = JSON.parse(manifestBytes.toString("utf8")) as ResourceGraphManifest
  if (!Array.isArray(graph.platforms) || typeof graph.version !== "string")
    throw new Error("invalid resource graph manifest")
  if (existsSync(options.outDir) && readdirSync(options.outDir).length !== 0)
    throw new Error(`resource audit output must be empty: ${options.outDir}`)
  const entries: EmbeddedResourceEntry[] = []
  const gaps: EmbeddedResourceAudit["gaps"] = []
  for (const platform of [...graph.platforms].sort((a, b) => a.platform.localeCompare(b.platform))) {
    safePath(platform.platform)
    const root = join(options.graphRoot, platform.platform)
    const files = new Map(platform.files.map((file) => [safePath(file.path), file]))
    const aliases = new Map(
      platform.files.flatMap((file) => (file.runtimePath ? [[safePath(file.runtimePath), file.path] as const] : [])),
    )
    const cache = new Map<string, ReturnType<typeof bindings>>()
    const readVerified = (path: string): Buffer => {
      const file = files.get(path)
      if (!file) throw new Error(`unlisted resource graph file: ${platform.platform}/${path}`)
      const bytes = readFileSync(join(root, path))
      if (bytes.length !== file.materialized.bytes || hash(bytes) !== file.materialized.sha256)
        throw new Error(`resource graph hash mismatch: ${platform.platform}/${path}`)
      if (file.runtimePath) {
        const runtime = readFileSync(join(root, safePath(file.runtimePath)))
        if (!runtime.equals(bytes))
          throw new Error(`resource runtime sidecar differs: ${platform.platform}/${file.runtimePath}`)
      }
      return bytes
    }
    const moduleBindings = (path: string): ReturnType<typeof bindings> => {
      let result = cache.get(path)
      if (!result) {
        result = bindings(readVerified(path).toString("utf8"))
        cache.set(path, result)
      }
      return result
    }
    const resolveAsset = (value: Node | undefined, module: string, seen = new Set<string>()): string | undefined => {
      if (!value) return undefined
      if (value.type === "Identifier") {
        const id = name(value)
        if (!id) return undefined
        const key = `${module}:${id}`
        if (seen.has(key)) return undefined
        const bindings = moduleBindings(module)
        const imported = bindings.imports.get(id)
        if (imported) {
          if (!imported.source.startsWith(".")) return undefined
          const source = safePath(posix.normalize(posix.join(posix.dirname(module), imported.source)))
          return resolveAsset(moduleBindings(source).exports.get(imported.imported), source, new Set([...seen, key]))
        }
        return resolveAsset(bindings.variables.get(id), module, new Set([...seen, key]))
      }
      if (value.type === "CallExpression") {
        const args = nodes(value.arguments)
        return resolveAsset(args.length ? args[0] : node(value.callee), module, seen)
      }
      if (value.type === "FunctionExpression" || value.type === "ArrowFunctionExpression") {
        const body = nodes(node(value.body)?.body)
        if (body.length !== 1) return undefined
        const expression = node(body[0]?.expression)
        const left = node(expression?.left)
        // Bun's CommonJS wrapper: function(exports, module) { module.exports = textLoader(path) }.
        const moduleParameter = name(nodes(value.params)[1])
        if (
          expression?.type !== "AssignmentExpression" ||
          expression.operator !== "=" ||
          left?.type !== "MemberExpression" ||
          left.computed ||
          name(left.property) !== "exports" ||
          !moduleParameter ||
          name(left.object) !== moduleParameter
        )
          return undefined
        return resolveAsset(node(expression.right), module, seen)
      }
      if (
        value.type !== "StringLiteral" ||
        typeof value.value !== "string" ||
        (!value.value.startsWith("./") && !value.value.startsWith("../"))
      )
        return undefined
      const path = safePath(posix.normalize(posix.join(posix.dirname(module), value.value)))
      const original = aliases.get(path) ?? path
      const file = files.get(original)
      if (!file) throw new Error(`missing embedded resource dependency: ${platform.platform}/${path}`)
      if (file.loader === 5 || file.loader === 13) return original
      if (file.loader !== 1 || seen.has(`module:${original}`)) return undefined
      return resolveAsset(
        moduleBindings(original).exports.get("default"),
        original,
        new Set([...seen, `module:${original}`]),
      )
    }
    for (const file of [...files.values()]
      .filter((file) => file.loader === 1)
      .sort((a, b) => a.path.localeCompare(b.path))) {
      const source = readVerified(file.path).toString("utf8")
      if (!/\bSKILL_(?:FILES|PROMPT|MD|COMPOSED_MD)\b/.test(source)) continue
      const module = moduleBindings(file.path)
      for (const [exportName, exported] of module.exports) {
        if (!/^SKILL_(?:FILES|PROMPT|MD|COMPOSED_MD)$/.test(exportName)) continue
        let value: Node | undefined = exported
        const seen = new Set<string>()
        while (value?.type === "Identifier") {
          const id = name(value)
          if (!id || !module.variables.has(id) || seen.has(id)) break
          seen.add(id)
          value = module.variables.get(id)
        }
        const resources: Array<{ logicalPath: string; value?: Node }> = []
        const flatten = (current: Node | undefined, prefix: string): void => {
          if (current?.type === "ObjectExpression") {
            for (const property of nodes(current.properties)) {
              const key = !property.computed && name(property.key)
              if (!key) resources.push({ logicalPath: "<dynamic>" })
              else flatten(node(property.value), prefix ? `${prefix}/${key}` : key)
            }
          } else
            resources.push({
              logicalPath:
                exportName === "SKILL_FILES" ? prefix || "<dynamic>" : `${prefix ? `${prefix}/` : ""}${exportName}.md`,
              value: current,
            })
        }
        flatten(value, "")
        for (const resource of resources) {
          const assetPath = resource.logicalPath === "<dynamic>" ? undefined : resolveAsset(resource.value, file.path)
          if (!assetPath) {
            gaps.push({
              platform: platform.platform,
              exporter: file.path,
              exportName,
              logicalPath: resource.logicalPath,
              reason: "not a statically resolved embedded text dependency",
            })
            continue
          }
          safePath(resource.logicalPath)
          const asset = files.get(assetPath)
          if (!asset) throw new Error(`unlisted embedded resource: ${assetPath}`)
          const bytes = readVerified(assetPath)
          const contentFile = `files/${platform.platform}/${file.path}/${resource.logicalPath}`
          if (entries.some((entry) => entry.contentFile === contentFile))
            throw new Error(`duplicate embedded resource output: ${contentFile}`)
          mkdirSync(dirname(join(options.outDir, contentFile)), { recursive: true })
          writeFileSync(join(options.outDir, contentFile), bytes, { mode: 0o644 })
          entries.push({
            platform: platform.platform,
            exporter: file.path,
            exportName,
            logicalPath: resource.logicalPath,
            kind:
              exportName !== "SKILL_FILES"
                ? "prompt"
                : /\.(?:[cm]?js|ts|py|sh|nu)$/.test(resource.logicalPath)
                  ? "script"
                  : "reference",
            assetPath,
            runtimePath: asset.runtimePath ?? assetPath,
            loader: asset.loader,
            upstream: asset.upstream,
            materialized: asset.materialized,
            contentFile,
          })
        }
      }
    }
  }
  const auditPayload = {
    schema: 1 as const,
    scope: "builtin-skill-resources" as const,
    completeness: "partial" as const,
    version: graph.version,
    graphManifestSha256: hash(manifestBytes),
    method: "static-export-asset-dependencies-v1" as const,
    entries,
    gaps,
    limitations: [
      "Only named SKILL_FILES, SKILL_PROMPT, SKILL_MD and SKILL_COMPOSED_MD exports are inventoried.",
      "Exporter paths identify bundles, not stable skill names or activation gates.",
      "Decoded original text is exposed as UTF-8; native raw hashes and encodings remain recorded separately. Runtime template substitutions and call transformations are not evaluated.",
    ],
  }
  const audit: EmbeddedResourceAudit = {
    ...auditPayload,
    manifestSha256: hash(Buffer.from(JSON.stringify(auditPayload))),
  }
  mkdirSync(options.outDir, { recursive: true })
  writeFileSync(join(options.outDir, "manifest.json"), `${JSON.stringify(audit, null, 2)}\n`, { mode: 0o644 })
  return audit
}

export function validateEmbeddedResourceAudit(root: string, graphRoot?: string): EmbeddedResourceAudit {
  const audit = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8")) as EmbeddedResourceAudit
  if (
    audit.schema !== 1 ||
    audit.scope !== "builtin-skill-resources" ||
    !Array.isArray(audit.entries) ||
    !Array.isArray(audit.gaps)
  )
    throw new Error("invalid embedded resource audit")
  const { manifestSha256, ...payload } = audit
  if (manifestSha256 !== hash(Buffer.from(JSON.stringify(payload))))
    throw new Error("embedded resource manifest hash mismatch")
  if (audit.gaps.length) throw new Error(`embedded resource audit has ${audit.gaps.length} unresolved gaps`)
  const expected = new Set(["manifest.json"])
  for (const entry of audit.entries) {
    safePath(entry.contentFile)
    safePath(entry.platform)
    safePath(entry.assetPath)
    safePath(entry.runtimePath)
    if (expected.has(entry.contentFile)) throw new Error(`duplicate embedded resource: ${entry.contentFile}`)
    expected.add(entry.contentFile)
    const bytes = readFileSync(join(root, entry.contentFile))
    if (bytes.length !== entry.materialized.bytes || hash(bytes) !== entry.materialized.sha256)
      throw new Error(`embedded resource content hash mismatch: ${entry.contentFile}`)
    if (graphRoot) {
      for (const path of new Set([entry.assetPath, entry.runtimePath])) {
        if (!readFileSync(join(graphRoot, entry.platform, path)).equals(bytes))
          throw new Error(`embedded resource differs from runtime graph: ${entry.platform}/${path}`)
      }
    }
  }
  const actual = [...new Bun.Glob("**/*").scanSync({ cwd: root, onlyFiles: true })].sort()
  if (JSON.stringify(actual) !== JSON.stringify([...expected].sort()))
    throw new Error("embedded resource audit contains unlisted files")
  return audit
}

export function embeddedResourceTreeSha256(root: string): string {
  const files = [...new Bun.Glob("**/*").scanSync({ cwd: root, onlyFiles: true })].sort()
  return hash(Buffer.from(files.map((path) => `${path}\0${hash(readFileSync(join(root, path)))}\n`).join("")))
}
