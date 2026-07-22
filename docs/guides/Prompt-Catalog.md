# Prompt Catalog

## Governing Split

> Release catalog = static audit evidence. Runtime export = effective
> main-session override input.

Every release payload contains:

```text
prompts/catalog/
├── manifest.json
├── entries/
│   └── <version-scoped-id>.md
└── gaps.json
```

| Item | Contract |
| --- | --- |
| `entries/*.md` | Exact UTF-8 value of a statically recovered prompt-like literal |
| `manifest.json` | Release coordinates, source ranges, hashes, classifications |
| `gaps.json` | Contextual templates and declared scanner limitations |

The catalog is intentionally `partial`. It does not represent a complete API
request and does not include canonical values for runtime expressions.

## Local Extraction

After rendering the target bundle:

```sh
just prompt-catalog <version> <release-id>
```

Default output:
`dist/prompt-catalog-<version>/catalog/`.

## Validation

- Same bundle and ruleset → same catalog bytes and digest.
- Static Markdown bytes → entry length and SHA-256.
- Context-dependent template → explicit gap, never a fabricated sample.
- Catalog ID → audit identity only; never an implicit runtime override ID.

Architecture decisions:

- [`../decisions/0001-release-pipeline-static-prompt-catalog.md`](../decisions/0001-release-pipeline-static-prompt-catalog.md)
- [`../decisions/0002-publish-static-prompt-catalog.md`](../decisions/0002-publish-static-prompt-catalog.md)
