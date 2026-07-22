# ADR-0001: Separate Release Orchestration from Static Prompt Extraction

## Status

Accepted

## Context

Release artifacts expose patched bundle behavior but hide most model-facing
prompt changes inside minified JavaScript. The existing runtime bridge exports
only the normal main-session system vector and remains an override mechanism,
not a release audit.

The release needs a version-bound, diffable catalog of statically recoverable
prompt templates and fragments. Runtime-only values may remain incomplete, but
every candidate found by the declared audit rules must be classified.

## Decision

Place a boundary between the release pipeline and a deterministic static prompt
catalog extractor.

| Release pipeline provides | Extractor returns |
| --- | --- |
| Upstream version and release ID | Immutable catalog tree |
| Upstream and patched bundle paths and hashes | Version-local occurrence identities |
| Patch-set and extraction-ruleset hashes | Content hashes and provenance |
| Required source anchors | Explicit classified gaps |

The extractor must not read implicit user state, use the network, or invoke a
model. Catalog entries are audit identities; they are not runtime override
identities.

## Consequences

### Invariant upheld

Identical bundle bytes and extraction rules produce a byte-identical catalog.
Every discovered candidate is classified exactly once as recovered content or
an explicit gap, with release, bundle, source, and content evidence.

### Invariant surrendered

The catalog is not an exhaustive representation of runtime-effective prompts.
Context-dependent values and explicitly unrecoverable candidates may remain
partial. Semantic entry identity need not survive an upstream version change.
ADR-0003 supersedes this clause with checked-in prompt lineages.

### Owner

- **Release pipeline**: invocation, exact release coordinates, gate policy.
- **Prompt catalog extractor**: discovery, classification, provenance,
  deterministic Markdown rendering, and gap reporting.
- **Release maintainer**: ruleset review when upstream call sites change.

### Cross-seam contract

The seam is wholly deterministic and remains before model invocation. Inputs
are explicit bundle/ruleset coordinates; output is a content-addressed catalog.
Tests run extraction twice, compare every byte, reject unknown candidates, and
verify representative static bytes against local-stub requests. No model
response participates in extraction or verification.

## Alternatives Considered

- **Runtime effective-message capture**: rejected by boundary-drawing; it solves
  per-session observability, not release-time static audit.
- **Canonical fake session snapshot**: rejected by det/stoch-seam; dynamic sample
  values could be mistaken for generally valid prompt content.
- **Best-effort files without candidate inventory**: rejected by
  quality-attribute; omissions could appear complete.

## Revisit Triggers

- A requirement to override prompt families beyond the main-session system
  vector.
- A proven exhaustive upstream prompt registry.
- Extraction rules can no longer distinguish static content from runtime data.
