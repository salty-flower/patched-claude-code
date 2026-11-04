import { expect, test } from "bun:test"
import { createHash } from "node:crypto"
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  bootstrapPromptIdentityFiles,
  buildPromptIdentityDraft,
  finalizePromptIdentityDraft,
  loadPromptIdentityResolution,
  type PromptIdentityDraft,
  type PromptIdentityObservation,
  type PromptOccurrenceLedger,
  readPromptIdentityLedger,
} from "../lib/prompt-identity"

function observation(version: string, ordinal: number, revision: string): PromptIdentityObservation {
  return {
    occurrenceId: `v${version}-${String(ordinal).padStart(4, "0")}`,
    ordinal,
    familyHint: "auxiliary",
    roleHint: "system",
    classification: "static",
    detectorSha256: `detector-${revision}`,
    revisionSha256: `revision-${revision}`,
    sourceSha256: `source-${revision}`,
    textMinHash: Buffer.alloc(4).toString("base64"),
    normalizedTokenCount: 30,
    astContextSha256: "context",
  }
}

function writeDraft(path: string, draft: PromptIdentityDraft): void {
  writeFileSync(path, `${JSON.stringify(draft, null, 2)}\n`)
}

function withHistory(
  run: (fixture: {
    identityRoot: string
    draftPath: string
    draft: PromptIdentityDraft
    historicalPath: string
    historical: PromptOccurrenceLedger
  }) => void,
): void {
  const root = mkdtempSync(join(tmpdir(), "patched-cc-identity-history-"))
  try {
    const identityRoot = join(root, "identities")
    const { ledger: historical } = bootstrapPromptIdentityFiles(identityRoot, "2.1.217", [
      observation("2.1.217", 0, "returning"),
      observation("2.1.217", 1, "continuous"),
    ])
    const draftPath = join(root, "draft.json")
    writeDraft(
      draftPath,
      buildPromptIdentityDraft(identityRoot, "2.1.218", "2.1.217", [observation("2.1.218", 0, "continuous")]),
    )
    finalizePromptIdentityDraft(identityRoot, draftPath)
    const draft = buildPromptIdentityDraft(identityRoot, "2.1.219", "2.1.218", [
      observation("2.1.219", 0, "returning"),
      observation("2.1.219", 1, "continuous"),
    ])
    expect(draft.decisions[0]?.relation).toBe("unresolved")
    expect(draft.decisions[1]?.evidence).toBe("unique-exact-observation")
    draft.historicalPredecessors = [{ upstreamVersion: "2.1.217", ledgerSha256: historical.ledgerSha256 }]
    Object.assign(draft.decisions[0]!, {
      relation: "carry",
      lineageId: "prompt-000001",
      predecessors: ["v2.1.217-0000"],
      evidence: "maintainer-rule",
      rationale: "The reviewed prompt returns after one version without a detected observation.",
    })
    run({ identityRoot, draftPath, draft, historicalPath: join(identityRoot, "versions/2.1.217.json"), historical })
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}

test("explicit historical carry restores a lineage across an observation gap without allocating a new lineage", () => {
  withHistory(({ identityRoot, draftPath, draft }) => {
    const registryBefore = readFileSync(join(identityRoot, "registry.json"), "utf8")
    writeDraft(draftPath, draft)
    const { ledger, registry } = finalizePromptIdentityDraft(identityRoot, draftPath)
    expect(registry.lineages).toHaveLength(2)
    expect(readFileSync(join(identityRoot, "registry.json"), "utf8")).toBe(registryBefore)
    expect(ledger.historicalPredecessors).toEqual(draft.historicalPredecessors)
    expect(readPromptIdentityLedger(identityRoot, "2.1.219")).toEqual(ledger)
    expect(ledger.occurrences[0]).toMatchObject({
      relation: "carry",
      lineageId: "prompt-000001",
      predecessors: ["v2.1.217-0000"],
      evidence: "maintainer-rule",
    })
    expect(
      loadPromptIdentityResolution(identityRoot, "2.1.219", [
        observation("2.1.219", 0, "returning"),
        observation("2.1.219", 1, "continuous"),
      ]).byOccurrenceId.get("v2.1.219-0000")?.lineage.lineageId,
    ).toBe("prompt-000001")
    ledger.historicalPredecessors![0]!.ledgerSha256 = "sha256-tampered"
    writeFileSync(join(identityRoot, "versions/2.1.219.json"), JSON.stringify(ledger))
    expect(() => readPromptIdentityLedger(identityRoot, "2.1.219")).toThrow("prompt identity SHA-256 mismatch")
  })
})

type HistoryFixture = Parameters<Parameters<typeof withHistory>[0]>[0]

const rejectedDrafts: Array<{ name: string; mutate: (fixture: HistoryFixture) => void; error: string }> = [
  {
    name: "equal previous and target versions",
    mutate: ({ draft }) => {
      draft.previousVersion = draft.upstreamVersion
    },
    error: "previous prompt identity version must be older than target",
  },
  {
    name: "reversed previous and target versions",
    mutate: ({ draft }) => {
      draft.previousVersion = "2.1.220"
    },
    error: "previous prompt identity version must be older than target",
  },
  {
    name: "history newer than the target despite being older than previous",
    mutate: ({ draft }) => {
      draft.upstreamVersion = "2.1.216"
    },
    error: "previous prompt identity version must be older than target",
  },
  {
    name: "noncanonical target version",
    mutate: ({ draft }) => {
      draft.upstreamVersion = "v2.1.219"
    },
    error: "requires canonical target and previous versions",
  },
  {
    name: "path traversal previous version",
    mutate: ({ draft }) => {
      draft.previousVersion = "../2.1.218"
    },
    error: "requires canonical target and previous versions",
  },
  {
    name: "missing historical reference",
    mutate: ({ draft }) => delete draft.historicalPredecessors,
    error: "unknown predecessor",
  },
  {
    name: "missing ledger",
    mutate: ({ historicalPath }) => rmSync(historicalPath),
    error: "prompt occurrence ledger missing",
  },
  {
    name: "missing hash",
    mutate: ({ draft }) => Reflect.deleteProperty(draft.historicalPredecessors![0]!, "ledgerSha256"),
    error: "requires a valid version and ledger SHA-256",
  },
  {
    name: "stale hash",
    mutate: ({ draft }) => {
      draft.historicalPredecessors![0]!.ledgerSha256 = "sha256-stale"
    },
    error: "historical prompt predecessor ledger SHA-256 mismatch",
  },
  {
    name: "future version",
    mutate: ({ draft }) => {
      draft.historicalPredecessors![0]!.upstreamVersion = "2.1.220"
    },
    error: "must be older than 2.1.218",
  },
  {
    name: "immediate previous version",
    mutate: ({ draft }) => {
      draft.historicalPredecessors![0]!.upstreamVersion = "2.1.218"
    },
    error: "must be older than 2.1.218",
  },
  {
    name: "path traversal version",
    mutate: ({ draft }) => {
      draft.historicalPredecessors![0]!.upstreamVersion = "../2.1.217"
    },
    error: "requires a valid version and ledger SHA-256",
  },
  {
    name: "duplicate reference",
    mutate: ({ draft }) => draft.historicalPredecessors!.push({ ...draft.historicalPredecessors![0]! }),
    error: "duplicate historical prompt predecessor version",
  },
  {
    name: "wrong lineage",
    mutate: ({ draft }) => {
      draft.decisions[0]!.lineageId = "prompt-000002"
    },
    error: "historical prompt carry lineage mismatch",
  },
  {
    name: "bypassing an existing immediate predecessor",
    mutate: ({ draft }) => {
      Object.assign(draft.decisions[1]!, {
        predecessors: ["v2.1.217-0001"],
        evidence: "maintainer-rule",
        rationale: "Attempt to bypass the existing immediate predecessor.",
      })
    },
    error: "historical prompt carry must use the immediate predecessor",
  },
  {
    name: "automatic carry abuse",
    mutate: ({ draft }) => {
      draft.decisions[0]!.evidence = "unique-exact-observation"
    },
    error: "requires a maintainer-rule carry",
  },
  {
    name: "historical split abuse",
    mutate: ({ draft }) => {
      draft.decisions[0]!.relation = "split"
      draft.decisions[0]!.lineageId = null
    },
    error: "requires a maintainer-rule carry",
  },
  {
    name: "unknown historical occurrence",
    mutate: ({ draft }) => {
      draft.decisions[0]!.predecessors = ["v2.1.217-9999"]
    },
    error: "unknown predecessor",
  },
  {
    name: "unused reference",
    mutate: ({ draft }) => {
      Object.assign(draft.decisions[0]!, { relation: "new", lineageId: null, predecessors: [] })
    },
    error: "unused historical prompt predecessor ledger",
  },
  {
    name: "missing maintainer rationale",
    mutate: ({ draft }) => delete draft.decisions[0]!.rationale,
    error: "requires a rationale",
  },
  {
    name: "tampered historical ledger",
    mutate: ({ historicalPath, historical }) => {
      historical.upstreamVersion = "2.1.216"
      writeFileSync(historicalPath, JSON.stringify(historical))
    },
    error: "prompt identity SHA-256 mismatch",
  },
  {
    name: "historical ledger version mismatch despite valid self hash",
    mutate: ({ draft, historicalPath, historical }) => {
      const { ledgerSha256: _hash, ...payload } = historical
      payload.upstreamVersion = "2.1.216"
      const ledgerSha256 = `sha256-${createHash("sha256")
        .update(`${JSON.stringify(payload, null, 2)}\n`)
        .digest("base64")}`
      draft.historicalPredecessors![0]!.ledgerSha256 = ledgerSha256
      writeFileSync(historicalPath, JSON.stringify({ ...payload, ledgerSha256 }))
    },
    error: "historical prompt occurrence ledger version mismatch",
  },
]

for (const { name, mutate, error } of rejectedDrafts) {
  test(`historical carry rejects ${name} without writing identity state`, () => {
    withHistory((fixture) => {
      const registryBefore = readFileSync(join(fixture.identityRoot, "registry.json"), "utf8")
      mutate(fixture)
      const targetPath = join(fixture.identityRoot, "versions", `${fixture.draft.upstreamVersion}.json`)
      const targetBefore = existsSync(targetPath) ? readFileSync(targetPath, "utf8") : undefined
      writeDraft(fixture.draftPath, fixture.draft)
      expect(() => finalizePromptIdentityDraft(fixture.identityRoot, fixture.draftPath)).toThrow(error)
      expect(readFileSync(join(fixture.identityRoot, "registry.json"), "utf8")).toBe(registryBefore)
      expect(existsSync(join(fixture.identityRoot, "versions/2.1.219.json"))).toBe(false)
      expect(existsSync(targetPath) ? readFileSync(targetPath, "utf8") : undefined).toBe(targetBefore)
    })
  })
}

test("manual immediate carry cannot retag a predecessor as another existing lineage", () => {
  withHistory(({ identityRoot, draftPath, draft }) => {
    draft.decisions[1]!.evidence = "maintainer-rule"
    draft.decisions[1]!.lineageId = "prompt-000001"
    draft.decisions[1]!.rationale = "Attempt to retag the immediate predecessor."
    writeDraft(draftPath, draft)
    expect(() => finalizePromptIdentityDraft(identityRoot, draftPath)).toThrow(
      "maintainer prompt carry lineage mismatch",
    )
  })
})
