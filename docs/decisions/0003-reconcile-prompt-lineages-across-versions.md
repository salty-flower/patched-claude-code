# ADR-0003: Reconcile Prompt Lineages Before Catalog Rendering

## Status

Accepted

## Governing Split

> Bundle discovery observes occurrences. The checked-in identity registry owns
> cross-version continuity.

## Context

ADR-0001 assigned version-scoped ordinal IDs. Ordinals, offsets, prompt bytes,
and inferred families can all change during a target bump. None can preserve
review history or prompt-specific decisions across versions.

## Decision

Insert lineage reconciliation between candidate discovery and catalog
rendering.

| Discovery provides | Reconciliation returns |
| --- | --- |
| Version-scoped occurrence ID | Immutable `lineageId` |
| Classification and revision hashes | `new`, `carry`, `split`, or `merge` |
| Current family and role hints | Registry-owned canonical path |
| Source and detector hashes | Hash-bound decision evidence |

Durable authority:

```text
prompt-identities/
├── registry.json
└── versions/
    └── <upstream-version>.json
```

- **Registry**: immutable lineage IDs, canonical paths, introduction version.
- **Version ledger**: complete occurrence inventory and lineage decisions.
- **Release catalog**: generated output; never identity authority.

Every discovered occurrence requires exactly one committed decision. Static
content may remain partial, but identity coverage may not. Ambiguity blocks
catalog construction until a maintainer commits a hash-bound rule.

## Stability Mechanism

| Transition | ID rule |
| --- | --- |
| Unique exact successor | Copy the predecessor `lineageId` |
| Reviewed semantic successor | Name one existing `lineageId` in a maintainer rule |
| New, split, or merged prompt | Allocate the next unused `lineageId` |
| Ambiguous occurrence | Allocate nothing; block release |

IDs are stored authority, never recomputed from content, version, ordinal,
offset, family, or path. Version ledgers bind occurrence evidence and the
referenced lineage set by digest. Registry growth does not invalidate old
ledgers; mutation of an existing lineage does.

This is repository-enforced stability, not cryptographic unforgeability. A
maintainer who rewrites the registry, all ledgers, and Git history can rewrite
lineage history. Git review and retained history are the trust anchor; stronger
immutability requires an external append-only transparency log.

## Consequences

### Invariant upheld

- One logical prompt retains its lineage across version, offset, order, and
  content changes.
- Split and merge history remains explicit.
- Registry, ledger, and inventory mismatches fail closed.
- Repeated resolution from identical inputs is byte-identical.

### Invariant surrendered

- Ambiguous upstream changes may delay a release.
- Changed prompts are not guaranteed unattended matching.
- Historical identity errors require visible supersession; no in-place rewrite.

### Owner

- **Candidate extractor**: version-local observations and hashes.
- **Release maintainer**: non-exact continuity, new lineage allocation,
  split/merge rationale.
- **CI**: schema, digest, uniqueness, and total-coverage enforcement.

### Deterministic/stochastic contract

Only a unique exact observation may be proposed automatically. Duplicate content,
changed content, cross-family movement, split, and merge require a checked-in
decision. An LLM may suggest candidates, but its output, score, or rationale
must never assign a public lineage or enter the release build.

Partial matching is deterministic but non-authoritative:

| Evidence | Draft output |
| --- | --- |
| Normalized three-token shingles | 32-component MinHash similarity |
| AST parent/property path | Exact context-match flag |
| Current classification hints | Family, role, classification match flags |

The matcher ranks at most five predecessors with text similarity `>= 0.2`.
Ranking crosses family and role boundaries. A partial candidate remains
`unresolved`; similarity never authorizes `carry`.

Prompts that fall outside the extraction rules remain a declared blind spot.
The draft reports their predecessor lineage as not carried but cannot prove a
successor occurrence that was never discovered.

## Migration

Claude Code 2.1.217 is the frozen baseline: 345 discovered occurrences,
`prompt-000001` through `prompt-000345`.

This supersedes ADR-0001's surrendered cross-version semantic identity.

## Alternatives Considered

- **Content hash as identity**: rejects ordinary prompt edits and conflates
  duplicate call sites.
- **Source offset or ordinal**: renames prompts after insertion or reorder.
- **Previous release artifact as authority**: makes generated presentation a
  required state store.
- **Model-assigned identity**: non-reproducible and capable of silent semantic
  reassignment.

## Revisit Triggers

- Reviewed evidence supports another zero-false-positive automatic match rule.
- Registry size or review volume requires a normalized storage format.
- Multiple maintainers require CODEOWNERS enforcement for identity state.
