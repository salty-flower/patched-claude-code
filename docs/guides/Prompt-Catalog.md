# Prompt Catalog

## Governing Split

> Release catalog = static audit evidence. Runtime export = effective
> main-session override input.

Every release payload contains:

```text
prompts/catalog/
├── manifest.json
├── entries/
│   └── <family>/<role>/<lineage-id>.md
└── gaps.json
```

| Item | Contract |
| --- | --- |
| `entries/**/*.md` | Exact UTF-8 value of a statically recovered prompt-like literal |
| `manifest.json` | Release coordinates, source ranges, hashes, classifications |
| `gaps.json` | Contextual templates and declared scanner limitations |
| `lineageId` | Immutable cross-version prompt identity |
| `occurrenceId` | Version-local extraction evidence |

The catalog is intentionally `partial`. It does not represent a complete API
request and does not include canonical values for runtime expressions.

## Local Extraction

After rendering the target bundle:

```sh
just prompt-catalog <version> <release-id>
```

Default output:
`dist/prompt-catalog-<version>/catalog/`.

## Target Upgrade

After rendering a new target:

```sh
just prompt-identity-draft <new-version> <previous-version>
```

The draft carries only unique exact observations. Resolve every remaining item
as `new`, `carry`, `split`, or `merge`, add a maintainer rationale, then run:

```sh
just prompt-identity-finalize dist/prompt-identities-<new-version>.draft.json
```

Commit the updated registry and
`prompt-identities/versions/<new-version>.json`. Catalog and release generation
remain blocked while the ledger is missing, stale, incomplete, or ambiguous.

For each unresolved occurrence, inspect `candidateMatches`:

| Field | Meaning |
| --- | --- |
| `textSimilarity` | Deterministic MinHash estimate over normalized token shingles |
| `astContextMatch` | Same AST parent/property path |
| `familyMatch`, `roleMatch`, `classificationMatch` | Diagnostic hints only |

Candidates are ranked evidence, not decisions. Copy a candidate lineage into a
reviewed `carry` rule only after inspecting the prompt diff. No candidate or a
low score does not prove the prompt is new.

Never use an ordinal, offset, content hash, inferred family, or model judgment
as lineage authority.

To evaluate matcher behavior against every adjacent pair currently available
under `staging/`, without changing checked-in identity state, run:

```sh
just prompt-identity-audit -o dist/prompt-identity-history-audit.json
```

The table separates ambiguous exact matches (`exact?`) from changed prompts
with a partial candidate (`partial`). `>=.5` is diagnostic score bucketing,
not an identity threshold. The audit reads raw `cli.js` bundles by default;
pass `--bundle-name cli.patched.js` only when every selected version has one.

## Validation

- Same bundle and ruleset → same catalog bytes and digest.
- Static Markdown bytes → entry length and SHA-256.
- Context-dependent template → explicit gap, never a fabricated sample.
- Lineage ID → cross-version audit identity only; never an implicit runtime
  override ID.

Architecture decisions:

- [`../decisions/0001-release-pipeline-static-prompt-catalog.md`](../decisions/0001-release-pipeline-static-prompt-catalog.md)
- [`../decisions/0002-publish-static-prompt-catalog.md`](../decisions/0002-publish-static-prompt-catalog.md)
- [`../decisions/0003-reconcile-prompt-lineages-across-versions.md`](../decisions/0003-reconcile-prompt-lineages-across-versions.md)
- [`../decisions/0004-render-prompt-catalog-by-lineage.md`](../decisions/0004-render-prompt-catalog-by-lineage.md)
