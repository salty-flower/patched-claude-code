# Bumping the Target Version

The *target* is the Claude Code version we patch and ship. The *reference*
(currently v2.1.88) is the audit baseline and changes rarely; see
[`../rules/Reference-Versions.md`](../rules/Reference-Versions.md).

## Governing Split

> Automated evidence first; semantic acceptance remains manual.

| Automated by `bump-prepare` | Manual gate |
| --- | --- |
| Stage, patch-carryover warnings, locator/native verification, tool tests | Drift classification and replacement-symbol proof |
| Render, version smoke, rendered patch tests | Anti-trace dossier generation and invariant review |
| Prompt identity preparation and report | Unresolved lineage decisions |
| Machine-readable handoff | PTY/TUI exercise, metadata update, commit |

## Workflow

1. **Run the automated lane once.**

   ```sh
   just bump-prepare <ver> <canonical|npm|direct>
   ```

   `<ver>` MUST be an explicit semver, not `latest`. The command writes
   `dist/target-bump-<ver>.json`, stores full step output under
   `dist/target-bump-<ver>.logs/`, and stops dependent work after the first
   failed step. The terminal stays compact and prints a bounded log tail on
   failure.

   | Exit | Meaning | Next action |
   | --- | --- | --- |
   | `0` | Automated checks passed | Complete the manual gates below |
   | `1` | Stage, verify, test, render, or smoke failed | Fix the first failed report step; rerun |
   | `2` | Prompt identity review required | Resolve the emitted draft; rerun |

   The stager supports legacy `package/cli.js` packages and native Bun
   standalone entrypoints. Patched JS still runs on a separate Bun runtime;
   repacking is out of scope. Update
   [`../rules/Native-Bundle-Extraction.md`](../rules/Native-Bundle-Extraction.md)
   when a new native version is smoke-tested.

2. **Classify drift and prove replacement symbols.**

   `bump-prepare` proves locator counts and `rationale_ref` resolution. It does
   **not** prove that version-local minified symbols retain their meaning.
   It also compares the currently configured target with the requested target
   and records a warning for every previously active patch lineage that has no
   successor. Treat each warning as unresolved until a replacement is added or
   the handoff records evidence that upstream now provides the behavior.

   | Signal | Action |
   | --- | --- |
   | Locator no longer matches | Re-anchor the locator after confirming the `rationale_ref` still governs the same behavior. |
   | Locator matches multiple sites | Tighten the locator, or raise `expected_matches` only for intentional duplicated gates. |
   | Replacement uses local minified helpers, hooks, state, or JSX runtime symbols | Treat as symbol drift even when `just verify` passes. |
   | Upstream rewrote the behavior | Add a new patch entry with its own `rationale_ref`; do not mutate old intent. |

   For each version-specific minified variant:

   - Cap the old variant before `<ver>` before adding the new one.
   - Inspect the surrounding target-bundle scope for every local symbol used
     in `replacement` or `transform` inserted code.
   - Add a positive static assertion for the current symbol and a negative
     assertion for the previous stale symbol.
   - Prefer `ast_transform` locators when the semantic node survives but
     local identifier names drift.

3. **Run the anti-trace audit.**

   Review the staged unpatched bundle before accepting the rendered result.
   The goal is to catch new environment fingerprinting, hidden prompt markers,
   and content-bearing telemetry before patch behavior masks the change.

   **Coordinator pass**:

   - Generate one shared dossier from `staging/<ver>/cli.js`; do not ask
     subagents to each rescan the full minified bundle.
   - Include offsets, nearby minified snippets, decoded constants, and source
     command lines for:
     - system prompt and context constructors
     - date, locale, timezone, hostname, base URL, proxy, and provider gates
     - telemetry, tracing, OpenTelemetry, diagnostics, raw-body logging, and
       event exporters
     - first-party and third-party network endpoints
   - Diff the dossier against the previous staged target when available.

   **Subagent review split**:

   | Review lane | Evidence package | Required decision |
   | --- | --- | --- |
   | Prompt markers | System-context constructors, rendered prompt fragments, Unicode/string transforms | No hidden user/environment classification reaches model context, or patch required. |
   | Host and region fingerprinting | Base URL parsing, hostname tables, timezone/locale gates, decoded constants | No custom endpoint or regional marker is encoded into prompts or telemetry without an explicit setting, or patch required. |
   | Telemetry and network egress | OTel/env gates, content logging switches, exporter endpoints, first-party event logging | Content-bearing logging is opt-in and documented; new default egress has a disable path. |

   **Do not split by bundle chunk.** Chunk sharding loses semantic boundaries
   and makes cross-site markers harder to prove. Use the dossier to keep one
   bundle scan and let reviewers verify focused invariants.

   Record the audit result in the commit body. If any lane needs a patch,
   either land that patch in the same target-bump branch before release or
   document why the new behavior is intentionally accepted.

4. **Resolve prompt identities only when requested.**

   `bump-prepare` selects the newest lower finalized ledger. Unique exact,
   complete transitions finalize automatically. Exit `2` supplies a draft;
   resolve every occurrence as `new`, `carry`, `split`, or `merge`, then run:

   ```sh
   just prompt-identity-finalize dist/prompt-identities-<ver>.draft.json
   ```

   Unique exact observations may carry automatically. Changed or duplicated
   prompts, split/merge relations, and new lineages require a hash-bound
   maintainer decision. Use ranked `candidateMatches` to locate partial
   successors; never promote a score directly. See
   [`Prompt-Catalog.md`](Prompt-Catalog.md#target-upgrade).

5. **Run local PTY smokes, then exercise the rendered TUI.**

   Run the complete local API-stub matrix:

   ```sh
   just api-stub-smoke <ver> <canonical|npm|direct>
   ```

   This covers OAuth setup, the baseline stub-backed TUI, transcript resume,
   and background-agent interrupt handling without sending model requests.
   Passing the matrix does not replace the manual rendered-TUI baseline.

   Every target bump must include this baseline before commit:

   - Launch `staging/<ver>/cli.patched.js` in a PTY-backed interactive TUI.
   - Include a PTY-backed launch with
     `--hide-builtin-footer --thinking-display summarized`; it may be the same
     session as the baseline TUI check.
   - Reach the main interactive screen. Setup, help text, or `--print` output
     does not count.
   - Paste non-empty text into the chat input, press `Ctrl+C` once, and confirm
     the TUI neither exits nor reports React error 300. Clear the input, then
     perform another local-only interaction to prove the session remains usable.
   - Perform at least one local-only interaction, such as a slash command or
     `/exit`, and confirm clean exit. Do not send a model request for this
     baseline check.
   - If an affected path would spend tokens or call the network, exercise it
     with a stub server or local harness.

   Then cover the affected patch surface:

   | Patch surface | Additional runtime check |
   | --- | --- |
   | TUI, React hooks, prompt/footer/statusline, thinking display | PTY-backed interactive run with the affected flags and visible success signal. |
   | API request construction | CLI or focused runtime test that reaches the patched request builder through a stub server or local harness. |
   | Static CLI metadata only | `just smoke-rendered <ver>` plus patch tests, in addition to the target-bump TUI baseline. |

   If `--print` works but interactive TUI is blank, inspect replacement
   symbols first. See
   [`../records/2026-05-12-v2.1.139-statusline-footer-lessons.md`](../records/2026-05-12-v2.1.139-statusline-footer-lessons.md).

6. **Update `target_version` in patches.**
   When a patch was authored against an older target, update its
   `target_version` only after a successful re-verify. `applies_to` may
   stay broader than `target_version` only when the patch text is not tied to
   version-local minified symbols.

   If `system-prompt-section-overrides.toml` is active, repeat every gate in
   [`../backlog/2026-07-22-section-level-system-prompt-overrides.md`](../backlog/2026-07-22-section-level-system-prompt-overrides.md#promotion-gate).

7. **Commit.**
   Use type `patches:` if any patch text changed, or `reference:` if you
   touched only metadata. The body should list every patch revisited and
   note any that needed re-anchoring or symbol splits.
