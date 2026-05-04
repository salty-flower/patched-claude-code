# Patch Format

Each patch lives at `patches/<topic>.toml` and obeys this schema. A patch
description is **the audit record**. Any change to it must be reviewable in
isolation.

## Schema

```toml
# Required.
name = "ask-user-question-channels-gate"
target_version = "2.1.112"            # the bundle this patch was authored against
applies_to = ">=2.1.112"              # semver range; null means same as target_version
rationale = """
One-line summary of WHY this patch exists. Followed by a short paragraph that
states the user-visible effect, the alternative we rejected, and the cleanup
condition that would let us drop the patch upstream.
"""
rationale_ref = "reference/v2.1.88/sources/tools/AskUserQuestionTool/AskUserQuestionTool.tsx#L135-L146"

# Required. The byte sequence (or regex) that locates the patch site.
# Must hit `expected_matches` times in `target_version`'s minified cli.js.
# Verified by tools/verify-patches.ts before commit.
locator_pattern = '''isEnabled\(\)\{if\(\w+\(\)\.length>0\)return!1;return!0\}'''
locator_kind = "regex"                # "regex" | "literal"

# Optional. Defaults to 1 (surgical patch). Set higher when the same gate
# is duplicated across siblings (e.g., AskUserQuestion + ExitPlanMode +
# EnterPlanMode share one isEnabled body). The substitution is always
# applied to every match — `expected_matches` is a sanity floor that fails
# the patch if Anthropic adds or removes call sites.
expected_matches = 3

# Required. The replacement bytes. MUST be original to this repo —
# never copy Anthropic source verbatim.
replacement = "isEnabled(){return!0}"

# Optional. If set, the patch is only applied when this env var is truthy.
# Used to gate experimental patches behind a flag.
gated_by_env = ""
```

## Field rules

- `rationale_ref` MUST point at a real line range in
  `reference/v2.1.88/sources/`. CI rejects dangling refs.
- `locator_pattern` MUST hit exactly `expected_matches` times on the
  staged target bundle. The default 1 is for surgical patches; raising it
  is permitted only when the duplication is intentional (e.g., a single
  body inlined across sibling tools). A wrong count fails the patch and
  forces an audit either way.
- `replacement` must not contain backreferences that resurrect minified
  identifier names from the locator's capture groups. Patches are
  deterministic substitutions, not transforms.
- `applies_to` uses standard semver ranges. When a patch needs different
  text per range, split it into two files.

## Lifecycle

- Add: write the file, run `bun run tools/verify-patches.ts <patch-file>`,
  commit alongside any docs/records entry the patch needs.
- Re-anchor (target version bump): run
  `bun run tools/verify-patches.ts --against <new-cli.js>`. If the locator
  fails, edit the pattern; if the replacement intent shifted, write a
  second `applies_to` patch instead of mutating the original.
- Retire: delete the file when upstream behaviour makes the patch a no-op.
  The deletion commit must reference the upstream version that obsoleted it.
