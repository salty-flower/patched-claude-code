import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import {
  bootstrapPromptIdentityFiles,
  buildPromptIdentityDraft,
  type PromptIdentityDraft,
  type PromptIdentityObservation,
} from "./prompt-identity"

export type PromptIdentityTransitionAudit = {
  previousVersion: string
  upstreamVersion: string
  previousObservations: number
  currentObservations: number
  carried: number
  unresolved: number
  ambiguousExact: number
  changedWithPartialCandidate: number
  unresolvedWithoutCandidate: number
  strongChangedCandidate: number
  changedCandidateWithAstContext: number
  changedCandidateWithFamilyAndRole: number
  changedCandidateWithUniqueBestScore: number
  changedCandidateSimilarity: {
    minimum: number | null
    median: number | null
    maximum: number | null
  }
}

export function auditPromptIdentityTransition(
  previousVersion: string,
  previousObservations: PromptIdentityObservation[],
  upstreamVersion: string,
  currentObservations: PromptIdentityObservation[],
): PromptIdentityTransitionAudit {
  const auditRoot = mkdtempSync(join(tmpdir(), "patched-cc-prompt-identity-audit-"))
  try {
    bootstrapPromptIdentityFiles(auditRoot, previousVersion, previousObservations)
    const draft = buildPromptIdentityDraft(auditRoot, upstreamVersion, previousVersion, currentObservations)
    return summarizePromptIdentityDraft(draft, previousObservations.length)
  } finally {
    rmSync(auditRoot, { recursive: true, force: true })
  }
}

export function summarizePromptIdentityDraft(
  draft: PromptIdentityDraft,
  previousObservations: number,
): PromptIdentityTransitionAudit {
  const unresolved = draft.decisions.filter(({ relation }) => relation === "unresolved")
  const ambiguousExact = unresolved.filter(({ candidateMatches }) => candidateMatches[0]?.textSimilarity === 1).length
  const changedCandidates = unresolved.flatMap(({ candidateMatches }) => {
    const best = candidateMatches[0]
    if (!best || best.textSimilarity === 1) return []
    return [{ best, second: candidateMatches[1] }]
  })
  const changedScores = changedCandidates.map(({ best }) => best.textSimilarity)

  return {
    previousVersion: draft.previousVersion,
    upstreamVersion: draft.upstreamVersion,
    previousObservations,
    currentObservations: draft.decisions.length,
    carried: draft.summary.carried,
    unresolved: draft.summary.unresolved,
    ambiguousExact,
    changedWithPartialCandidate: changedScores.length,
    unresolvedWithoutCandidate: unresolved.filter(({ candidateMatches }) => candidateMatches.length === 0).length,
    strongChangedCandidate: changedScores.filter((score) => score >= 0.5).length,
    changedCandidateWithAstContext: changedCandidates.filter(({ best }) => best.astContextMatch).length,
    changedCandidateWithFamilyAndRole: changedCandidates.filter(({ best }) => best.familyMatch && best.roleMatch)
      .length,
    changedCandidateWithUniqueBestScore: changedCandidates.filter(
      ({ best, second }) => !second || best.textSimilarity > second.textSimilarity,
    ).length,
    changedCandidateSimilarity: summarizeScores(changedScores),
  }
}

function summarizeScores(scores: number[]): PromptIdentityTransitionAudit["changedCandidateSimilarity"] {
  if (scores.length === 0) return { minimum: null, median: null, maximum: null }
  const sorted = [...scores].sort((left, right) => left - right)
  const middle = Math.floor(sorted.length / 2)
  const minimum = sorted[0]
  const maximum = sorted.at(-1)
  const upperMiddle = sorted[middle]
  const lowerMiddle = sorted[middle - 1]
  if (minimum === undefined || maximum === undefined || upperMiddle === undefined) {
    throw new Error("cannot summarize an empty prompt candidate score set")
  }
  const median = sorted.length % 2 === 0 ? ((lowerMiddle ?? upperMiddle) + upperMiddle) / 2 : upperMiddle
  return {
    minimum,
    median: Number(median.toFixed(4)),
    maximum,
  }
}
