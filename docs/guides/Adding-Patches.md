# Adding a Patch

You are editing the live behaviour of Claude Code. Every patch is a public
audit artefact (within this private repo); write it as if a future maintainer
needs to revalidate it without your help.

## Workflow

1. **Find the gate in the target bundle.**
   `rg -n '<some recognisable byte sequence>' staging/<target-version>/cli.js`
   Prefer an `ast_transform` locator when the change fits a typed source-range
   transform. Use literal or regex locators only when AST selection does not
   reduce drift risk.

2. **Resolve audit context against v2.1.88.**
   - Run `just alignment-report <target>` when you need an aggregate
     alignment probe between a staged target and v2.1.88.
   - Open the source it points to under `reference/v2.1.88/sources/...` and
     read the function plus surrounding comments.
   - Pick a line range that captures the gate's *intent*, not just the body.
     That range becomes the patch's `rationale_ref`.

3. **Write the patch entry.**
   See [`../rules/Patch-Format.md`](../rules/Patch-Format.md) for the schema.
   Use a new `patches/<feature>.toml` for a new logical feature. Add a
   `[[patches]]` entry to an existing feature file when the new locator is part
   of the same user-facing behavior.
   Keep inserted snippets minimal — typically a one-line override that
   short-circuits the gate. Do not embed Anthropic source verbatim.

4. **Verify.**
   ```sh
   TARGET_SOURCE=<npm|gcs> just verify <target-version>
   ```
   This confirms the locator resolves exactly once, `rationale_ref` resolves
   to a real line range, and `[[tests]]` metadata exists. CI runs the same
   check on every push. For a single-patch diagnostic, run
   `bun run tools/patch/verify-patches.ts patches/<your-patch>.toml --against staging/<target-version>/cli.js`.

5. **Smoke-run the patched bundle.**
   ```sh
   just smoke <target-version>
   just patch-test <target-version>
   ```
   Confirm the patched binary boots and the patched gate behaves as
   expected (e.g. for the channels gate, run `claude --channels foo` and
   confirm `AskUserQuestion` is now exposed).

6. **Commit.**
   See [`../rules/Commit-Messages.md`](../rules/Commit-Messages.md). Use
   `patches:` as the type. Body must state user-visible effect, the
   alternative rejected, and the cleanup condition.

## Anti-patterns

- Multi-pattern patch entries. Use one `[[patches]]` entry per locator so each
  `rationale_ref`, replacement, and test set remains independently reviewable.
- Broad AST visitor patches. Use a named transform op with explicit
  preconditions.
- Patches that depend on identifier names from the locator's capture groups
  surviving unchanged into the replacement. Identifiers reminify; the
  patch breaks silently on the next bump.
- Patches without `rationale_ref` pointing at v2.1.88 source. If you can't
  find a match in v2.1.88, the gate is new — document why we trust the
  intent without a reference baseline.
