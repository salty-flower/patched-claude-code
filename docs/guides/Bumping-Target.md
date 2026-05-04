# Bumping the Target Version

The *target* is the Claude Code version we patch and ship. The *reference*
(currently v2.1.88) is the audit baseline and changes rarely; see
[`../rules/Reference-Versions.md`](../rules/Reference-Versions.md).

## Workflow

1. **Stage the new bundle.**
   - npm-tarball release: `npm pack @anthropic-ai/claude-code@<ver>`,
     extract `package/cli.js` into `staging/<ver>/`.
   - Bun-binary release (post 2.1.113): use a Bun extractor like
     `@shepherdjerred/bun-decompile` to recover the bundled JS, drop the
     result at `staging/<ver>/cli.js`. Repacking back to a binary is **not
     in scope** — patched JS runs on a separately-installed Bun runtime.

2. **Re-verify every patch against the new bundle.**
   ```sh
   bun run tools/verify-patches.ts --against staging/<ver>/cli.js
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
   bin/build-audited staging/<ver>/cli.js /tmp/cli.patched.js
   node /tmp/cli.patched.js --version
   ```
   For Bun binaries: `bun /tmp/cli.patched.js --version`.

4. **Update `target_version` in patches.**
   When a patch was authored against an older target, update its
   `target_version` only after a successful re-verify. `applies_to` may
   stay broader than `target_version`.

5. **Commit.**
   Use type `patches:` if any patch text changed, or `reference:` if you
   touched only metadata. The body should list every patch revisited and
   note any that needed re-anchoring.
