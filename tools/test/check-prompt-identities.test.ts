import { expect, test } from "bun:test"
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { inspectPromptIdentityObservations } from "../lib/prompt-catalog"
import { bootstrapPromptIdentityFiles } from "../lib/prompt-identity"

const VERSION = "2.1.217"
const SOURCE =
  'const prompt="You are a release audit assistant. Your task is to inspect deterministic evidence, return a concise result, and do not claim that runtime-only values were recovered. Write the output without adding unstated context.";'

for (const state of ["valid", "stale", "missing"] as const) {
  test(`prompt preflight is read-only and fails closed for ${state} ledger`, () => {
    const root = mkdtempSync(join(tmpdir(), "pcc-prompt-preflight-"))
    try {
      const patched = join(root, "cli.patched.js")
      const identityRoot = join(root, "identities")
      writeFileSync(patched, SOURCE)
      const observations = inspectPromptIdentityObservations(SOURCE, VERSION)
      expect(observations.length).toBeGreaterThan(0)
      bootstrapPromptIdentityFiles(identityRoot, VERSION, observations)
      const ledger = join(identityRoot, "versions", `${VERSION}.json`)
      if (state === "missing") rmSync(ledger)
      if (state === "stale") writeFileSync(patched, SOURCE.replace("concise result", "detailed result"))
      const before = readdirSync(identityRoot, { recursive: true }).sort()
      const registryBytes = readFileSync(join(identityRoot, "registry.json"))
      const ledgerBytes = state === "missing" ? undefined : readFileSync(ledger)
      const result = Bun.spawnSync([
        process.execPath,
        join(import.meta.dir, "..", "patch", "check-prompt-identities.ts"),
        "--version",
        VERSION,
        "--patched",
        patched,
        "--identity-root",
        identityRoot,
      ])
      const output = result.stderr.toString()
      expect(result.exitCode).toBe(state === "valid" ? 0 : 1)
      expect(output).toContain(
        state === "valid"
          ? "prompt identities verified"
          : `prompt occurrence ledger ${state === "stale" ? "is stale" : "missing"}`,
      )
      expect(readdirSync(identityRoot, { recursive: true }).sort()).toEqual(before)
      expect(readFileSync(join(identityRoot, "registry.json"))).toEqual(registryBytes)
      if (ledgerBytes) expect(readFileSync(ledger)).toEqual(ledgerBytes)
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })
}
