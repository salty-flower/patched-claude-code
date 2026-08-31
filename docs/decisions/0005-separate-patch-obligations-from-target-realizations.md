# ADR-0005: Separate Patch Obligations from Target Realizations

## Status

Accepted

## Governing Split

> The obligation catalog owns what the project promises.
> Target realizations own how one upstream bundle preserves that promise.

## Context

The 2.1.251 patch.1 release passed a one-version carryover check while the
explicit macOS Keychain family had already been absent from 2.1.250.
The check proved continuity from an incomplete predecessor, not continuity of
the project's historical obligations.

The maintainer requires releases to fail closed rather than silently omit an
unresolved obligation, even when resolution delays a target bump.

## Decision

Maintain a durable, all-history catalog of patch obligations independent of
version-specific patch entries.

| Catalog identity | Required meaning |
| --- | --- |
| `family_id` | Stable product-policy family |
| `invariant_id` | Stable, independently verifiable behavior |
| Required platforms | Platforms on which the invariant is promised |
| Evidence class | `static`, `runtime`, or `real-os-runtime` |
| Oracle IDs | Executable checks authorized to prove the invariant |
| Lifecycle | Introduction and explicit retirement history |

Every target must contain exactly one hash-bound decision for every live
invariant:

```text
target version + upstream bundle hash + family/invariant IDs
+ disposition + target patch entries + oracle IDs + evidence references
```

Allowed dispositions:

- `ported`: target-specific entries preserve the invariant.
- `upstream_equivalent`: upstream now provides the invariant; reviewed evidence
  identifies the equivalent behavior.
- `retired`: the project deliberately stops promising the invariant; reviewed
  evidence records the reason and first affected target.

There is no `skip`, implicit carry, or inherited-by-absence disposition.
Patch entry names and the immediately preceding release must never be identity
authority.

## Consequences

### Invariant upheld

- Every historically live invariant receives exactly one reviewable target
  disposition.
- A family already missing from the previous release remains visible and blocks
  the next release.
- Missing, duplicate, unknown, or unbound dispositions fail closed.
- Retirement and upstream equivalence remain explicit historical decisions.

### Invariant surrendered

- Target bumps are not availability-first.
- Ambiguous applicability, upstream churn, or incomplete migration may delay a
  release until the sole maintainer resolves the disposition.
- The catalog cannot prove that a semantic retirement judgment is correct; it
  proves that the judgment was explicit and bound to exact evidence.

### Owner

- **Sole maintainer**: obligation meaning, lifecycle policy, target disposition,
  retirement, and upstream-equivalence judgment.
- **Target adaptation tooling**: version-specific locator and replacement
  realization.
- **CI enforcement**: total coverage, uniqueness, schema, and hash binding.

CI is enforcement machinery, not an independent owner or reviewer.

## Alternatives Considered

- **Compare only with N-1**: rejected by problem-framing; an omission already
  present in N-1 disappears from institutional memory.
- **Infer families from patch filenames or entry names**: rejected by
  boundary-drawing; mutable implementations cannot own durable identity.
- **Best-effort migration report**: rejected by quality-attribute; unknown
  state could still publish as green.
- **Separate registry service**: rejected by org-fit; one maintainer should not
  own another operational component for a repository-local contract.

## Revisit Triggers

- Multiple maintainers require independent approval or CODEOWNERS policy.
- One invariant needs multiple independently versioned realizations.
- The catalog can no longer express upstream-equivalent behavior without a new
  lifecycle state.

