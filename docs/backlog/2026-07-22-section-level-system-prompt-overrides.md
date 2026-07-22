# Proposed ADR: Section-Level System Prompt Overrides

## Governing Split

> Upstream owns prompt composition; this repo owns one post-composition override seam.

| Owner | Surface |
| --- | --- |
| Upstream | Main-session section selection, order, values, cache boundaries, request assembly |
| Repo | Version-scoped bridge, preload helper, validation, export, effective hash/diff |
| User | Local Markdown overrides and explicit rebase decisions |

Billing attribution remains controlled by upstream's
`CLAUDE_CODE_ATTRIBUTION_HEADER`; it is outside this feature.

## Status

| Gate | Status |
| --- | --- |
| Architecture | Passed |
| 2.1.217 central locator | Passed |
| Unit and local-stub request proofs | Passed |
| Release payload and Nix wiring | Passed |
| Public static prompt catalog | Passed: tar, source tag, workflow, and Nix payload |
| Rendered helper-preloaded PTY/TUI | Blocked in current `darwin-overlay`: `openpty` denied |
| First subsequent target revalidation | Pending next target |
| Promotion to `docs/rules/` | Blocked by the two pending gates above |

## Scope

The bridge MUST wrap the normal main-session prompt builder after section
rendering and before cache/request assembly.

| Included | Excluded |
| --- | --- |
| Normal main-session prompt vector | `CLAUDE_CODE_SIMPLE` / `--bare` |
| Version-scoped ordinal identities | Compact, title/rename, subagent, and auxiliary model calls |
| Whole-section replace or `{{upstream}}` composition | Typed placeholders such as `{{cwd}}` or `{{model}}` |
| Process-start file snapshot | Hot reload and automatic cross-version merge |

The bundle patch MUST contain only the vector handoff and recovery bridge.
Export, validation, hashing, and override application MUST remain in
`runtime/system-prompt-overrides.ts`.

## Runtime Contract

```text
upstream renderer
  -> orderedSections[]
  -> versioned global bridge
  -> preload helper
  -> effectiveSections[] + effectiveVectorSha256 + sectionDiff[]
  -> upstream cache/request assembly
```

The packaged launcher MUST:

- preload `runtime/system-prompt-overrides.ts`;
- bind the helper to the packaged `manifest.json` and `cli.js`;
- verify the actual bundle SHA-256 against the release manifest before
  installing the bridge.

Direct `bun cli.js` execution has no helper and MUST preserve upstream
behavior through the bridge's null fallback.

## User-Local Contract

Default root:
`$XDG_CONFIG_HOME/patched-claude-code/prompts`, falling back to
`$HOME/.config/patched-claude-code/prompts`.

```text
prompts/
├── manifest.json
├── sections/
│   └── <section-id>.md
└── overrides/
    └── <section-id>.md
```

Runtime-effective exports remain user-local. Release payloads MUST include the
separate static audit catalog defined by
[`../decisions/0001-release-pipeline-static-prompt-catalog.md`](../decisions/0001-release-pipeline-static-prompt-catalog.md)
and
[`../decisions/0002-publish-static-prompt-catalog.md`](../decisions/0002-publish-static-prompt-catalog.md).
Catalog identities MUST NOT become override identities implicitly.

Plain export MUST refuse to overwrite a changed baseline while override files
exist. The user MUST diff the existing `sections/` content before requesting
an explicit rebase.

## Identity and Hashing

Section identity is version-scoped ordinal identity:
`v<target-version>-<zero-padded-ordinal>`.

`manifest.json` MUST bind each section to:

- target version and rendered bundle SHA-256;
- section ID and ordinal;
- baseline section SHA-256;
- diagnostic display label, never used as identity;
- exported section path.

The vector SHA-256 input MUST encode each UTF-8 section as:

```text
uint64-big-endian byte length || UTF-8 bytes
```

Naive concatenation is forbidden.

## Override Semantics

An override MAY contain zero or one `{{upstream}}` placeholder:

| Count | Result |
| --- | --- |
| `0` | Complete section replacement |
| `1` | Substitute the exact current upstream section bytes |
| `>1` | Reject before API request |

No override:

- same vector object returned;
- same section count, order, and bytes;
- unchanged downstream request body.

Sparse override:

- only selected ordinals changed;
- untouched section bytes preserved;
- section count and order preserved;
- final request block equals effective sections joined by upstream's existing
  separator.

Files MUST be read once during preload. Mid-session edits MUST have no effect;
a new process MUST take a new snapshot.

## Failure Contract

The helper MUST fail before an API request for:

- packaged bundle SHA-256 mismatch;
- prompt manifest target or bundle mismatch;
- missing manifest with override files;
- unknown or duplicate section identity;
- ambiguous or out-of-range ordinal;
- baseline section/vector SHA-256 mismatch;
- unreadable or malformed UTF-8;
- repeated `{{upstream}}` placeholder.

Failure output MUST name the local file and failed check, preserve user
content, and direct the user to export, diff, and explicitly rebase.

## Evidence

| Invariant | Proof |
| --- | --- |
| Central seam | Exact-version AST transform resolves once on 2.1.217 |
| No-op | Direct bundle and helper-preloaded bundle emit identical captured `system` bodies |
| Sparse override | One manifest ID changes; every other vector hash remains equal |
| Final-body agreement | Effective sections joined with upstream's `\n\n` separator equal the final main request block |
| Fail closed | Stale bundle manifest exits non-zero with zero additional stub requests |
| Snapshot | Mid-process file edit ignored; new helper instance observes it |
| Packaging | Launcher preload, tar/source payload, source tag, CI artifact, and Nix wrapper wired |

## Promotion Gate

Before moving this contract to `docs/rules/`:

1. Run a helper-preloaded rendered PTY/TUI session with
   `--hide-builtin-footer --thinking-display summarized`.
2. Reach the main screen and complete `/exit` or another local-only
   interaction without a render-boundary exception.
3. On the next target, repeat locator, no-op, sparse, stale-input,
   hash/final-body, packaging, and PTY proofs.

If one central locator is unavailable, v1 MUST remain unsupported for that
target. Do not add per-producer patches silently.
