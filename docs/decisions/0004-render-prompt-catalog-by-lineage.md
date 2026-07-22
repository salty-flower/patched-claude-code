# ADR-0004: Render Prompt Catalog Paths from Committed Lineages

## Status

Accepted

## Governing Split

> `lineageId` is compatibility identity. `catalogPath` is registry-owned
> navigation.

## Context

The schema-1 catalog rendered every prompt as
`entries/v<version>-<ordinal>.md`. The flat tree obscured prompt families and
made filenames change on every target bump.

## Decision

Catalog materialization consumes only fully resolved lineage decisions and
uses the registry path verbatim:

```text
entries/<family>/<role>/<lineage-id>.md
```

Example:

```text
entries/compact/system/prompt-000039.md
```

The manifest records both stable lineage and version-local occurrence:

| Field | Stability |
| --- | --- |
| `lineageId` | Cross-version, immutable, never reused |
| `occurrenceId` | One bundle version |
| `contentSha256` | One prompt revision |
| `contentFile` | Registry-owned hierarchical path |

The renderer must not infer a new path from current prompt text. Path, ID,
Unicode-normalization, or case-folding collisions block construction.

## Consequences

### Invariant upheld

- Exact successors retain the same ID and relative path.
- Taxonomy and rendering code cannot silently reassign identity.
- Every release surface carries the same hierarchical tree unchanged.

### Invariant surrendered

- Published canonical paths cannot be reorganized casually.
- Human-readable semantic leaf names are deferred; opaque lineage leaves avoid
  guessed labels.

### Owner

- **Identity registry**: lineage and canonical path allocation.
- **Catalog renderer**: byte-preserving Markdown, schema, hashes, collision
  checks.
- **Payload builder**: unchanged placement under `prompts/catalog/` per
  ADR-0002.

## Alternatives Considered

- **Semantic filename as identity**: taxonomy renames would break consumers.
- **Fresh family inference per release**: paths could drift without lineage
  changes.
- **Flat opaque IDs**: stable but not navigable.

## Revisit Triggers

- Consumers require path aliases or redirects.
- A reviewed semantic naming pass can preserve immutable lineage IDs.
- Catalog roles outgrow the current `system`, `tool`, `user`, `unknown` set.
