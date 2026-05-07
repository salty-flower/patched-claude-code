# Native Bundle Extraction

Claude Code target staging is a support contract, not a best-effort
decompiler promise. Every staged target must record which package shape and
extraction layout produced `staging/<version>/cli.js`.

## Support Matrix

| Source shape | Known-good Claude Code versions | Validity rule |
| --- | --- | --- |
| `package/cli.js` exists in `@anthropic-ai/claude-code` tarball | `2.1.112` | Copy `package/cli.js`; no native extraction is involved. |
| Wrapper package declares a platform optional dependency with a Bun standalone binary | `2.1.132` | Extract the entrypoint from the native package's Bun standalone module graph. Treat `>=2.1.132 <2.2.0` as provisional until smoke-tested and recorded. |

## Bun Standalone Layout

`tools/extract-bun-standalone.ts` supports only
`bun-standalone-module-graph-v1`, this observed layout:

```text
[payload bytes][32-byte Offsets extern struct]["\n---- Bun! ----\n"]
```

The extractor must fail closed when it cannot prove the layout:

| Check | Required behavior |
| --- | --- |
| Trailer placement | Scan for valid trailer/offset pairs; do not assume EOF. |
| Offsets size | Require the 32-byte `Offsets` structure. |
| Module record size | Require 52-byte module records. |
| Entrypoint | Require `entrypointId` to point inside the module table. |
| Embedded paths | Normalize Bun root prefixes and reject empty, absolute, parent-relative, or NUL-containing paths. |

## Manifest Contract

`bin/stage-claude-code <version>` must write
`staging/<version>/stage-manifest.json` with:

| Field | Meaning |
| --- | --- |
| `source` | `wrapper-cli` or `native-bun-standalone`. |
| `platformPackage` | Native optional package used, when any. |
| `extractionSupport.knownGood` | `true` only for versions listed in this rule. |
| `extractionSupport.contract` | The current support matrix embedded in the tool. |
| `extractionSupport.bunStandaloneLayout` | Layout details when native extraction was used. |

If `knownGood` is `false`, the staged bundle is usable for investigation but
not an audit-grade target until `bun run tools/verify-patches.ts`,
`bin/render-patched <version>`, and a smoke run pass and this rule is updated.
