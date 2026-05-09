# AST Transform Patches

## Patch Contract

Patch entries SHOULD move from byte replacement locators to AST transform
entries. The transform engine MUST preserve upstream byte locality by applying
range splices against parsed source offsets, not by regenerating the whole
bundle.

Legacy `literal` and `regex` locators MAY remain during migration, but new
release-blocking patches SHOULD use `locator_kind = "ast_transform"` once the
engine exists.

## Governing Split

| Layer | Owns | Must not own |
| --- | --- | --- |
| Locator | Unique AST target selection and drift detection | Inserted behavior |
| Transform op | Typed source-range rewrite | Target discovery |
| Patch tests | User-visible behavior checks | Locator recovery |
| Rationale ref | Audit intent in `reference/v2.1.88/sources/` | Target-version byte offsets |

## TOML Shape

```toml
[[patches]]
name = "file-read-path-image"
locator_kind = "ast_transform"
rationale_ref = "reference/v2.1.88/sources/src/tools/FileReadTool/UI.tsx#L80-L88"

[patches.ast]
schema = 1
anchor = "declaration"
match = { node = "CallExpression", callee_property = "createElement", string_literal = "Read image (" }

[patches.transform]
op = "append_call_arg"
arg = "Z"
```

Field names MAY change before the first implementation lands. After that,
schema changes MUST update `docs/rules/Patch-Format.md` in the same commit.
The schema MUST keep locator metadata separate from transform metadata.

## Locator Rules

- Parse staged bundles with Babel using the same options as canonical merge.
- Unwrap compiled module bodies before selecting top-level declarations.
- Select an enclosing declaration by normalized AST fingerprint, useful string
  literals, and `rationale_ref` lineage when source-map evidence is available.
- Select the inner node by typed predicates, not by minified identifier names.
- Fail unless the locator resolves to exactly one AST node.
- Report the resolved byte range, enclosing declaration range, and matched
  predicate summary.

## Transform Operations

Initial ops SHOULD be small and source-range based:

| Op | Rule |
| --- | --- |
| `replace_node` | Replace the matched node range with repo-owned JS. |
| `replace_function_body` | Preserve the function signature and replace only the body block. |
| `set_object_property` | Replace an existing property value or append a new property. |
| `set_call_arg` | Replace one positional argument and validate call arity. |
| `append_call_arg` | Append one argument to a call expression. |
| `wrap_expression` | Replace the matched expression with a template containing one `%%EXPR%%` placeholder. |

Do not add a broad "custom visitor" op. If a patch needs a new edit shape,
add a named op with explicit preconditions.

## Verification Gates

`just verify <version>` MUST check:

- The target bundle parses with zero unrecovered parse errors.
- Every `ast_transform` locator resolves exactly once.
- Every transform precondition passes.
- The transformed bundle parses after all edits.
- Patch tests exist for every entry.
- Inserted snippets are non-empty and repo-owned.

`just render <version>` MUST apply AST edits in descending byte-range order and
reject overlapping edits unless a later implementation defines an explicit
composition rule.

## Migration Order

| Phase | Scope | Exit gate |
| --- | --- | --- |
| 1 | Add AST transform parsing, verification, and range-splice rendering. | One converted patch family passes verify, render, smoke, and patch tests. |
| 2 | Convert low-risk call argument patches such as MCP rendering or file-read path labels. | No legacy locator remains in the converted feature file. |
| 3 | Convert control-flow patches such as thinking display and transcript preservation. | Transform ops cover the edit without raw byte locators. |
| 4 | Convert statusline footer controls. | Auto-release against the latest staged bundle fails only on real semantic drift. |

## Open Gates

- Define the final selector vocabulary before converting broad patch families.
- Decide whether source-map lineage is required for all AST locators or only
  used as an extra confidence signal.
- Update `docs/rules/Patch-Format.md` after the first implementation lands.
