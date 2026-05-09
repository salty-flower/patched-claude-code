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

2. **Re-verify every patch against the new bundle.**
   ```sh
   TARGET_SOURCE=<npm|direct> just verify <ver>
   ```
   Patches that still match exactly once require no edits. Patches that
   drift fall into two cases:
   - Locator no longer matches: re-anchor the regex. Confirm the rationale
     still applies before edit; if upstream rewrote the gate, treat it as a
     new patch (with its own `rationale_ref`) rather than mutating the
     existing file.
   - Locator matches multiple sites: the new bundle inlined the gate at
     more callers. Tighten the regex.

3. **Build and smoke.**
   ```sh
   just render <ver>
   just smoke <ver>
   just patch-test <ver>
   ```

4. **Update `target_version` in patches.**
   When a patch was authored against an older target, update its
   `target_version` only after a successful re-verify. `applies_to` may
   stay broader than `target_version`.

5. **Commit.**
   Use type `patches:` if any patch text changed, or `reference:` if you
   touched only metadata. The body should list every patch revisited and
   note any that needed re-anchoring.
