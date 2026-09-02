# Native Bundle Extraction

Claude Code target staging is a support contract, not a best-effort
decompiler promise. Every staged target must record which package shape and
extraction layout produced `staging/<version>/cli.js`.

## Support Matrix

| Source shape | Known-good Claude Code versions | Validity rule |
| --- | --- | --- |
| `package/cli.js` exists in `@anthropic-ai/claude-code` tarball | `2.1.112` | Copy `package/cli.js`; no native extraction is involved. |
| Wrapper package declares a platform optional dependency with a Bun standalone binary | `2.1.132`, `2.1.133`, `2.1.181`, `2.1.197`, `2.1.199`, `2.1.201`, `2.1.210`, `2.1.212`, `2.1.215`, `2.1.216`, `2.1.226` | Extract the entrypoint from the native package's Bun standalone module graph. Treat `>=2.1.132 <2.2.0` as provisional until smoke-tested and recorded. |
| Claude direct-download manifest exposes platform Bun standalone binaries | `2.1.132`, `2.1.133`, `2.1.181`, `2.1.197`, `2.1.199`, `2.1.201`, `2.1.208`, `2.1.210`, `2.1.212`, `2.1.215`, `2.1.216`, `2.1.220`, `2.1.251`, `2.1.258` | Download `https://downloads.claude.ai/claude-code-releases/<version>/<platform>/claude`, verify the manifest checksum, then extract the same Bun standalone module graph. |

## Bun Standalone Layout

`tools/lib/extract-bun-standalone.ts` supports only
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

## Materialization Contract

Released graphs MUST expose embedded text assets as UTF-8 bytes.

| Loader | Materialization | Failure boundary |
| --- | --- | --- |
| JavaScript (`1`) | Rewrite Bun-root specifiers to graph-relative paths. | Unresolved specifier or parse failure. |
| Compressed text (`5`) | Require Zstandard frame magic; decompress without renaming. | Missing magic, decompression failure, or invalid UTF-8. |
| Native binary (`10`) | Preserve bytes. | None beyond inventory integrity. |
| Plain text (`13`) | Preserve bytes. | None beyond inventory integrity. |

Runtime paths MUST remain unchanged.
The upstream runtime accepts compressed or identity-encoded text by inspecting frame magic.

`graph-manifest.json` MUST bind both representations for every file:

- upstream encoding, byte count, and SHA-256;
- materialized encoding, byte count, and SHA-256;
- deterministic transformation identifier.

## Manifest Contract

`TARGET_SOURCE=<npm|direct> just stage <version>` must write
`staging/<version>/stage-manifest.json` with:

| Field | Meaning |
| --- | --- |
| `channel` | `npm` or `direct`. |
| `source` | `wrapper-cli` or `native-bun-standalone`. |
| `platformPackage` | Native optional package used, when any. |
| `directPlatform` | Direct-download platform used, when any. |
| `nativeBinarySha256` | Verified native binary hash when native extraction was used. |
| `entrypointSha256` | Extracted JS entrypoint hash. |
| `graph-manifest.json` | Upstream and materialized hashes for every dual-graph file. |
| `extractionSupport.knownGood` | `true` only for versions listed in this rule. |
| `extractionSupport.contract` | The current support matrix embedded in the tool. |
| `extractionSupport.bunStandaloneLayout` | Layout details when native extraction was used. |

If `knownGood` is `false`, the staged bundle is usable for investigation but
not an audit-grade target until `just verify`, `just render <version>`,
`just smoke <version>`, `just patch-test <version>`, and this rule is updated.

Direct `bun run tools/patch/stage-claude-code.ts ...` use is for tool
debugging. `just stage` owns the canonical staged target path; platform audit
uses separate side-by-side cache paths under `staging/<version>/platform-audit/`
so Linux and Darwin extractions do not overwrite the selected target bundle.
Use `just platform-patch-test <version>` when checking whether patch locators
and patch TOML tests pass across the maintained direct-download platforms.
