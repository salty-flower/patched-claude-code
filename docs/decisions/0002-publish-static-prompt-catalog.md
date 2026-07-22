# ADR-0002: Publish the Static Prompt Catalog with Every Release Payload

## Status

Accepted

## Context

ADR-0001 produces a static audit catalog. The catalog must be visible where a
release is consumed rather than remaining an operator-local or private CI
sidecar. This intentionally changes the previous system-prompt override
contract, which prohibited exported upstream prompt text in release artifacts.

## Decision

Place a boundary between the static prompt catalog extractor and the release
payload builder.

The extractor passes one closed `prompts/catalog/` tree:

```text
prompts/catalog/
├── manifest.json
├── entries/
│   └── <family>/<role>/<lineage-id>.md
└── gaps.json
```

The payload builder must verify the release bindings and catalog digest, then
copy the tree unchanged into the tarball, minimal source tag, workflow artifact,
and Nix source payload. It must not reinterpret entries or bind catalog IDs to
runtime overrides.

## Consequences

### Invariant upheld

Every public/install surface contains the immutable catalog for its exact
bundle. Missing trees, binding mismatches, digest failures, mutation, or payload
parity failures block packaging. Classified gaps remain visible.

### Invariant surrendered

Release artifacts and source tags no longer keep extracted upstream prompt
prose confidential or undistributed. A valid public catalog may be explicitly
partial.

### Owner

- **Prompt catalog extractor**: catalog meaning, classification, and tree hash.
- **Release payload builder**: byte-preserving placement and artifact parity.
- **Release maintainer**: disclosure review, rollback, takedown, and compatibility
  policy for the published catalog.
- **Runtime override subsystem**: independently owns request mutation and never
  consumes catalog identities implicitly.

### Cross-seam contract

The catalog contains static bundle evidence only. Runtime requests, user input,
overrides, environment values, tool schemas, secrets, and model responses must
not enter it. Stable ordering, UTF-8 bytes, fixed file modes and archive times,
and content hashes keep the payload deterministic across builds.

## Alternatives Considered

- **Private CI artifact**: rejected by user choice; consumers could not audit the
  installed release offline.
- **Operator-local directory**: rejected by user choice; it is not durable or
  release-addressable.
- **Reuse runtime override IDs**: rejected by boundary-drawing; static catalog
  identity and effective runtime section identity have different lifecycles.

## Revisit Triggers

- Publication or licensing requirements prohibit distributing extracted prompt
  prose.
- A release surface cannot preserve or verify the catalog tree.
- Catalog consumers require runtime-effective prompt capture rather than static
  audit evidence.
