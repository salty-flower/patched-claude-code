# Bumping the Target Version

The *target* is the Claude Code version we patch and ship. The *reference*
(currently v2.1.88) is the audit baseline and changes rarely; see
[`../rules/Reference-Versions.md`](../rules/Reference-Versions.md).

## Workflow

1. **Stage the new bundle.**
   ```sh
   just stage <ver>
   ```
   Use `latest` instead of `<ver>` only when intentionally moving to the
   current channel pointer. For `TARGET_SOURCE=npm`, `latest` means the npm
   dist-tag; for `TARGET_SOURCE=direct`, it means Claude's direct latest
   object. The
   stager handles both old packages with
   `package/cli.js` and current native packages whose JS entrypoint is
   embedded in a Bun standalone binary. Repacking back to a binary is **not
   in scope** — patched JS runs on a separately-installed Bun runtime.
   Native extraction validity is governed by
   [`../rules/Native-Bundle-Extraction.md`](../rules/Native-Bundle-Extraction.md);
   update that rule when a new staged native version is smoke-tested.

2. **Re-verify locators against the new bundle.**
   ```sh
   TARGET_SOURCE=<npm|direct> just verify <ver>
   ```
   `just verify` proves locator counts and `rationale_ref` resolution only.
   It does **not** prove replacement symbols are valid in the new minified
   scope.

3. **Classify every drift.**

   | Signal | Action |
   | --- | --- |
   | Locator no longer matches | Re-anchor the locator after confirming the `rationale_ref` still governs the same behavior. |
   | Locator matches multiple sites | Tighten the locator, or raise `expected_matches` only for intentional duplicated gates. |
   | Replacement uses local minified helpers, hooks, state, or JSX runtime symbols | Treat as symbol drift even when `just verify` passes. |
   | Upstream rewrote the behavior | Add a new patch entry with its own `rationale_ref`; do not mutate old intent. |

4. **Prove replacement symbols.**

   For each version-specific minified variant:

   - Cap the old variant before `<ver>` before adding the new one.
   - Inspect the surrounding target-bundle scope for every local symbol used
     in `replacement` or `transform` inserted code.
   - Add a positive static assertion for the current symbol and a negative
     assertion for the previous stale symbol.
   - Prefer `ast_transform` locators when the semantic node survives but
     local identifier names drift.

5. **Build and smoke.**
   ```sh
   just render <ver>
   just smoke <ver>
   just patch-test <ver>
   ```

6. **Exercise affected runtime paths.**

   | Patch surface | Minimum runtime check |
   | --- | --- |
   | TUI, React hooks, prompt/footer/statusline, thinking display | PTY-backed interactive run with the affected flags. |
   | API request construction | CLI or focused runtime test that reaches the patched request builder. |
   | Static CLI metadata only | `just smoke-rendered <ver>` plus patch tests. |

   If `--print` works but interactive TUI is blank, inspect replacement
   symbols first. See
   [`../records/2026-05-12-v2.1.139-statusline-footer-lessons.md`](../records/2026-05-12-v2.1.139-statusline-footer-lessons.md).

7. **Update `target_version` in patches.**
   When a patch was authored against an older target, update its
   `target_version` only after a successful re-verify. `applies_to` may
   stay broader than `target_version` only when the patch text is not tied to
   version-local minified symbols.

8. **Commit.**
   Use type `patches:` if any patch text changed, or `reference:` if you
   touched only metadata. The body should list every patch revisited and
   note any that needed re-anchoring or symbol splits.
