# ADR-0007: Limit Agent Authority to Patch Proposals

## Status

Accepted

## Governing Split

> Stochastic agents propose mappings and evidence.
> Deterministic tooling alone admits a release.

## Context

Target bumps and reviews may be performed by Opencode, Codex, or another
model-driven agent.
Their output can accelerate locator discovery and semantic investigation but
cannot guarantee completeness, stable identity, correct platform selection, or
consistent judgment.

The repository has one human maintainer.
No second human reviewer or continuity guarantee exists.

## Decision

Agents may propose target decisions, patch entries, oracle implementations, and
evidence references.
They must not retire obligations, declare upstream equivalence, or authorize a
release.

The cross-seam proposal contract is one candidate row per live invariant:

```text
target version + upstream bundle digest
+ family/invariant IDs + proposed disposition
+ patch entry IDs + oracle IDs + evidence references
```

Deterministic CI must join the all-history obligation catalog, target decisions,
applicable patch entries, and platform receipts.
Release admission requires:

1. Exactly one disposition for every live invariant.
2. Current-target entries for every `ported` platform obligation.
3. Actual execution of every required oracle at its declared evidence class.
4. Commit, target, upstream, patched-artifact, platform, entry, and oracle hash
   binding.
5. Maintainer acknowledgement of the exact decision-manifest digest for every
   `upstream_equivalent` or `retired` decision.
6. No skip, stale receipt, or weaker evidence-class substitution.

Maintainer acknowledgement is conscious acceptance by the one semantic owner,
not a claim of independent review.

## Consequences

### Invariant upheld

- Agent omissions and confidence claims cannot determine release eligibility.
- A family cannot disappear silently even when it was already missing from N-1.
- Semantic lifecycle changes cannot be inserted solely by an agent.
- Release evidence remains reproducible for exact source and artifact bytes.

### Invariant surrendered

- CI cannot prove that the maintainer's retirement or upstream-equivalence
  judgment is substantively correct.
- A single maintainer and agent may share a blind spot encoded into both policy
  and oracle design.
- There is no two-person integrity or release continuity while the maintainer is
  unavailable.
- Agents cannot autonomously complete a release when semantic disposition is
  ambiguous.

### Owner

- **Sole maintainer**: obligation semantics, oracle intent, lifecycle decisions,
  and acknowledgement of the target decision digest.
- **Deterministic CI/tooling**: enumeration, joins, digest and platform binding,
  required execution, and release admission.
- **Stochastic agents**: candidate mappings, patches, tests, and evidence only.

CI is an independent mechanical gate, not an accountable owner.

### Cross-seam contract

The stochastic side emits typed candidate decisions and evidence references.
The deterministic side accepts only schema-valid, total, current-target,
hash-bound rows and independently verifies all required executions.

Adoption uses 2.1.251 patch.1 as a negative fixture and patch.2 as a positive
fixture.
Mutation cases must cover:

- Keychain removed before both N-1 and the target.
- An old `/later` entry selected.
- Undefined or colliding `/later` UUID behavior restored.
- Required macOS execution skipped.
- Receipt replayed against another commit or artifact digest.
- Live family omitted.
- Retirement claimed without matching maintainer acknowledgement.

Acceptance requires patch.2 to pass, patch.1 and 100% of seeded mutations to
fail, and zero skipped required oracles.

## Alternatives Considered

- **Agent report as release evidence**: rejected by det/stoch-seam; narrative
  confidence is neither total nor reproducible.
- **Human approval without digest binding**: rejected because approval could
  refer to different lifecycle decisions than the released manifest.
- **Second mandatory human reviewer**: rejected by org-fit; no such owner exists.
- **Fully unattended semantic retirement**: rejected because equivalence and
  retirement are policy judgments, not deterministic facts.

## Revisit Triggers

- A second maintainer becomes an actual accountable owner.
- Agent-generated semantic mappings meet a zero-false-positive deterministic
  acceptance rule on retained mutation fixtures.
- Release admission moves to a system that cannot bind human acknowledgement to
  the exact decision digest.
