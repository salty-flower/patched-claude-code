# Canonical Platform Merge

## Decision

Do not solve Linux portability by publishing separate Linux- and
Darwin-patched bundles. The release artifact should be one canonical JS bundle
derived from both upstream native bundles.

The current quick fix of adding platform-specific patch locators is useful as
a diagnostic, but it is the wrong release shape. It proves patches can be
ported mechanically; it does not produce the desired artifact.

## Local Findings

Target: Claude Code `2.1.132` native bundles. The original investigation used
the legacy GCS bucket; current tooling uses Claude's direct-download endpoint.

| Check | Darwin | Linux |
| --- | ---: | ---: |
| Entrypoint bytes | 14,178,042 | 14,171,772 |
| Structural parse errors | 0 | 0 |
| Top-level declarations | 22,608 | 22,603 |

AST normalization results, comparing Linux to Darwin:

| Alignment | Count |
| --- | ---: |
| Same structure when identifiers and literal values are ignored | 22,553 / 22,603 |
| Same structure and same literal values | 22,499 / 22,603 |
| Same structure, literal-only drift | 54 |
| Linux declarations without same no-literal structural hash | 50 |

Interpretation:

- Most drift is not semantic code divergence.
- A small number of declarations differ only in literals such as platform
  names, OS labels, arch labels, or generated headers.
- A smaller structural remainder likely comes from Bun build-time
  tree-shaking or platform-specific dependency islands.
- The AST-diff idea is viable, but the remaining structural islands make a
  naive "choose Darwin and patch strings" release unsafe.

## Required Merge Shape

The merge tool should:

1. Extract Darwin and Linux direct-download native bundles side by side.
2. Parse both entrypoint JS files with Babel.
3. Align top-level declarations by normalized AST fingerprints, excluding
   minified identifier names.
4. Classify aligned differences:
   - identical
   - literal-only platform constants
   - structurally different but alignable
   - unaligned platform-only islands
5. Emit one canonical JS file plus a merge report.
6. Fail closed unless every drift item is classified and either merged or
   explicitly accepted.

The canonical output should preserve upstream minified bytes where possible.
For literal-only changes, prefer range-based splices over full reformatting.
Full AST code generation would destroy byte locality and make patch review
harder.

## Literal Merge Rule

For same-shape declarations with platform literal drift, replace compile-time
platform literals with runtime expressions only when the literal pair is known:

| Darwin literal | Linux literal | Canonical expression |
| --- | --- | --- |
| `"darwin"` | `"linux"` | `process.platform==="darwin"?"darwin":"linux"` |
| `"macOS"` | `"Linux"` | `process.platform==="darwin"?"macOS":"Linux"` |
| `"arm64"` | `"x64"` | `process.arch==="arm64"?"arm64":"x64"` |

This table must be deliberately small. Unknown literal pairs should block the
merge and appear in the report.

## Structural Island Rule

Raw code from one platform cannot be blindly transplanted into the other
platform's minified bundle. Minifier symbol names differ across the whole
module, so a copied declaration may reference the wrong local or module-scope
identifier.

Structurally different declarations need one of these treatments:

| Case | Treatment |
| --- | --- |
| Same source function, different tree-shaken branch | Reconstruct a runtime branch in AST, then generate only that declaration. |
| Platform-only helper with no cross references | Include both helpers behind a runtime selector, after verifying free identifiers. |
| Platform-only dependency island | Block release until the island is mapped or declared irrelevant by an audit note. |

## Patch Porting

Once canonical merge exists, patch porting should become mostly mechanical:

1. Locate a patch site in the old canonical bundle.
2. Record an AST path and a normalized enclosing-declaration fingerprint.
3. Align that declaration in the new Darwin and Linux bundles.
4. Merge the platform declarations into the new canonical declaration.
5. Re-anchor the patch locator against the canonical output.

This avoids asking an LLM to rediscover Linux minified identifiers. The LLM may
still review intent and ambiguous structural islands, but locator porting
should be generated.

## Tooling Proposal

Add `tools/platform/merge-platform-bundles.ts`.

Inputs:

- `--version <version>`
- `--platform darwin-arm64`
- `--platform linux-x64`
- optional `--base darwin-arm64`

Outputs:

- `staging/<version>/canonical/cli.js`
- `staging/<version>/canonical/platform-merge-report.json`
- manifest fields for source platform hashes, canonical hash, drift counts,
  accepted structural islands, and merge policy version

Make `TARGET_SOURCE=canonical just stage <version>` the default release staging
path once this tool exists.

## Promotion Gate

Auto-release promotion should change from "Linux and Darwin upstream JS have
no drift" to:

1. npm latest and direct latest converge on the same version.
2. Canonical staging extracts and merges Linux plus Darwin.
3. `just verify`, `just render`, `just smoke`, and `just patch-test` run
   against the canonical bundle.
4. The merge report has zero unclassified drift.

Until then, full promotion should remain blocked for upstream versions whose
Linux and Darwin direct-download bundles structurally differ.
