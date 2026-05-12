# Patch Format

Each patch entry lives in `patches/<topic>.toml` and obeys this schema. A TOML
file may hold one legacy top-level patch entry or multiple ordered `[[patches]]`
entries for one logical feature. A patch entry is **the audit record**. Any
change to it must be reviewable in isolation.

## Schema

```toml
# Required for every file.
name = "ask-user-question-channels"
target_version = "2.1.112"            # the bundle this patch was authored against
applies_to = ">=2.1.112"              # semver range; null means same as target_version

[[patches]]
name = "ask-user-question-channels-gate"
rationale = """
One-line summary of WHY this patch exists. Followed by a short paragraph that
states the user-visible effect, the alternative we rejected, and the cleanup
condition that would let us drop the patch upstream.
"""
rationale_ref = "reference/v2.1.88/sources/tools/AskUserQuestionTool/AskUserQuestionTool.tsx#L135-L146"

# Required for literal/regex patches. The byte sequence or regex that locates
# the patch site. Must hit `expected_matches` times in `target_version`'s
# minified cli.js.
# Verified by tools/patch/verify-patches.ts before commit.
locator_pattern = '''isEnabled\(\)\{if\(\w+\(\)\.length>0\)return!1;return!0\}'''
locator_kind = "regex"                # "regex" | "literal" | "ast_transform"

# Optional. Defaults to 1 (surgical patch). Set higher when the same gate
# is duplicated across siblings (e.g., AskUserQuestion + ExitPlanMode +
# EnterPlanMode share one isEnabled body). The substitution is always
# applied to every match — `expected_matches` is a sanity floor that fails
# the patch if Anthropic adds or removes call sites.
expected_matches = 3

# Required for literal/regex patches. The replacement bytes. MUST be original to this repo —
# never copy Anthropic source verbatim.
replacement = "isEnabled(){return!0}"

# Optional. If set, the patch is only applied when this env var is truthy.
# Used to gate experimental patches behind a flag.
gated_by_env = ""

# Required. Tests travel with patch metadata.
[[patches.tests]]
kind = "static"                     # "static" | "cli" | "pty"
name = "replacement is rendered"
assert_contains = "isEnabled(){return!0}"
```

Legacy one-entry files may keep the patch fields and `[[tests]]` at the top
level. New logical features SHOULD use `[[patches]]` entries.

`ast_transform` entries omit `locator_pattern` and `replacement`. They use a
typed locator plus a typed source-range transform:

```toml
[[patches]]
name = "mcp-result-render-string-full"
rationale = "..."
rationale_ref = "reference/v2.1.88/sources/src/tools/MCPTool/UI.tsx#L132-L140"
locator_kind = "ast_transform"

[patches.ast]
schema = 1
match = { node = "CallExpression", callee_property = "createElement", string = "content:O,verbose:q" }

[patches.transform]
op = "set_call_arg"
index = 1
value = '''{content:O,verbose:!0}'''

[[patches.tests]]
kind = "static"
name = "replacement is rendered"
assert_contains = '''L4.createElement(nx,{content:O,verbose:!0})'''
```

Single-entry legacy files use top-level `[ast]`, `[transform]`, and `[[tests]]`
tables instead of `[patches.ast]`, `[patches.transform]`, and
`[[patches.tests]]`.

AST match fields are conjunctive:

| Field | Meaning |
| --- | --- |
| `node` | Required Babel node type. |
| `callee_property` | Direct call callee identifier or member property. |
| `string_literal` | Descendant string literal with this exact value. |
| `direct_string_literal` | Direct call argument string literal with this exact value. |
| `object_property` | Descendant object property or method key. |
| `object_property_direct` | Direct object property or method key on the matched node itself. |
| `function_name` | Function declaration identifier. |
| `method_name` | Object/class method key. |
| `body_statement_count` | Number of top-level statements in a block body. |
| `source` | Exact source text for the matched node. |
| `string` | Substring contained in the matched node source. |
| `strings` | Array of substrings; ALL must be contained in the matched node source. |
| `parent_node` | Immediate parent Babel node type. |

Supported transform ops:

| Op | Required fields | Effect |
| --- | --- | --- |
| `replace_node` | `value` | Replace the matched node source. |
| `replace_function_body` | `body` | Replace a block body while preserving the signature. |
| `replace_function_body_with_first_var_initializer_return` | none | Replace the body with `return <first variable initializer>`. |
| `set_object_property` | `property`, `value` | Replace or append an object property. |
| `append_object_property` | `code` | Append raw property source before the closing `}` of an ObjectExpression. |
| `set_call_arg` | `index`, `value` | Replace a call argument. |
| `append_call_arg` | `arg` | Append a call argument. |
| `wrap_expression` | `template` | Replace `%%EXPR%%` with the matched expression source. |
| `replace_with_consequent` | none | Replace an `IfStatement` with its consequent source. |
| `prepend_function_body` | `code` | Insert code at the start of a block body. |
| `insert_before_node` | `code` | Insert code immediately before the matched node. |
| `insert_after_node` | `code` | Insert code immediately after the matched node. |
| `replace_substring` | `find`, `value` | Replace a unique substring inside the matched node. |
| `replace_substring_regex` | `find`, `value` | Replace a unique regex match inside the matched node; supports `$1` captures. |

## Field rules

- Each patch entry's `rationale_ref` MUST point at a real line range in
  `reference/v2.1.88/sources/`. CI rejects dangling refs.
- Each `literal` or `regex` patch entry's `locator_pattern` MUST hit exactly
  `expected_matches` times on the staged target bundle. The default 1 is for
  surgical patches; raising it is permitted only when the duplication is
  intentional. A wrong count fails the patch and forces an audit either way.
- Each `ast_transform` patch entry's AST locator MUST resolve to exactly one
  AST node on the staged target bundle unless `expected_matches` documents an
  intentional duplicated site. The transform MUST pass its typed preconditions
  for every matched node and the transformed bundle MUST parse.
- `replacement` must not contain backreferences that resurrect minified
  identifier names from the locator's capture groups. Literal and regex
  patches are deterministic substitutions, not transforms.
- `ast_transform` inserted snippets MUST be original to this repo and MUST be
  carried in typed transform fields such as `value`, `arg`, `body`, or
  `template`.
- `applies_to` uses standard semver ranges. When a patch needs different
  text per range, split it into two files.
- Every patch entry MUST include at least one `[[patches.tests]]` entry, or
  `[[tests]]` for legacy one-entry files. Static tests run against the rendered
  bundle. CLI tests run `bun <cli.patched.js>`. PTY tests use `script(1)` plus
  `timeout` and default input `/exit`.

## Lifecycle

- Add: write the file, run `just verify <target-version>`, and commit
  alongside any docs/records entry the patch needs. For a single-patch
  diagnostic, run
  `bun run tools/patch/verify-patches.ts patches/<file>.toml --against staging/<target-version>/cli.js`.
- Re-anchor (target version bump): run
  `TARGET_SOURCE=<npm|direct> just verify <target-version>`. If the locator
  fails, edit the pattern; if the replacement intent shifted, write a second
  `applies_to` patch instead of mutating the original.
- Retire: delete the file when upstream behaviour makes the patch a no-op.
  The deletion commit must reference the upstream version that obsoleted it.
