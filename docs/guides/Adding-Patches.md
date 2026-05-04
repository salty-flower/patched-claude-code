# Adding a Patch

You are editing the live behaviour of Claude Code. Every patch is a public
audit artefact (within this private repo); write it as if a future maintainer
needs to revalidate it without your help.

## Workflow

1. **Find the gate in the target bundle.**
   `rg -n '<some recognisable byte sequence>' staging/<target-version>/cli.js`
   Make the locator regex narrow enough to match exactly once. Identifier
   names will reminify; anchor on `function`/`class`/`isEnabled`/etc shape
   plus the surrounding stable bytes.

2. **Resolve audit context against v2.1.88.**
   - Run `bun run tools/align.ts --target staging/<target>/cli.js` to find
     the matching v2.1.88 declaration.
   - Open the source it points to under `reference/v2.1.88/sources/...` and
     read the function plus surrounding comments.
   - Pick a line range that captures the gate's *intent*, not just the body.
     That range becomes the patch's `rationale_ref`.

3. **Write the patch file.**
   See [`../rules/Patch-Format.md`](../rules/Patch-Format.md) for the schema.
   Keep `replacement` minimal — typically a one-line override that
   short-circuits the gate. Do not embed Anthropic source verbatim.

4. **Verify.**
   ```sh
   bun run tools/verify-patches.ts patches/<your-patch>.toml
   ```
   This confirms `locator_pattern` matches exactly once and `rationale_ref`
   resolves to a real line range. CI runs the same check on every push.

5. **Smoke-run the patched bundle.**
   ```sh
   bin/build-audited staging/<target>/cli.js /tmp/cli.patched.js
   node /tmp/cli.patched.js --version
   ```
   Confirm the patched binary boots and the patched gate behaves as
   expected (e.g. for the channels gate, run `claude --channels foo` and
   confirm `AskUserQuestion` is now exposed).

6. **Commit.**
   See [`../rules/Commit-Messages.md`](../rules/Commit-Messages.md). Use
   `patches:` as the type. Body must state user-visible effect, the
   alternative rejected, and the cleanup condition.

## Anti-patterns

- Multi-pattern patches in one TOML file — split them. Each is independently
  reviewed.
- Patches that depend on identifier names from the locator's capture groups
  surviving unchanged into the replacement. Identifiers reminify; the
  patch breaks silently on the next bump.
- Patches without `rationale_ref` pointing at v2.1.88 source. If you can't
  find a match in v2.1.88, the gate is new — document why we trust the
  intent without a reference baseline.
