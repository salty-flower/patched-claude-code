# AST Transform Engine

## Scope

Core engine for patch locators and transforms that operate on parsed AST
offsets rather than raw byte patterns. Completed 2026-05-11.

## What Was Built

- `tools/lib/ast-transform-patches.ts` — Babel-based parser, visitor matcher,
  typed transform ops, descending range-splice renderer, overlap rejection,
  and post-transform parse validation.
- `tools/patch/verify-patches.ts` — batch-verifies `ast_transform` locators
  alongside legacy `literal`/`regex` locators.
- `tools/patch/build-patched.ts` + `tools/lib/apply-patches.ts` — flushes
  AST transforms in descending byte-range order between legacy patches.
- `docs/rules/Patch-Format.md` — updated with full `ast_transform` schema,
  selector vocabulary, and transform ops table.

## Selector Vocabulary (Stable)

| Field | Meaning |
| --- | --- |
| `node` | Required Babel node type. |
| `callee_property` | Direct call callee identifier or member property. |
| `string_literal` | Descendant string literal with this exact value. |
| `direct_string_literal` | Direct call argument string literal with this exact value. |
| `object_property` | Descendant object property or method key. |
| `function_name` | Function declaration identifier. |
| `method_name` | Object/class method key. |
| `body_statement_count` | Number of top-level statements in a block body. |
| `source` | Exact source text for the matched node. |
| `string` | Substring contained in the matched node source. |

## Transform Operations (Stable)

| Op | Required fields | Effect |
| --- | --- | --- |
| `replace_node` | `value` | Replace the matched node source. |
| `replace_function_body` | `body` | Replace a block body while preserving the signature. |
| `replace_function_body_with_first_var_initializer_return` | none | Replace the body with `return <first variable initializer>`. |
| `set_object_property` | `property`, `value` | Replace or append an object property. |
| `set_call_arg` | `index`, `value` | Replace a call argument. |
| `append_call_arg` | `arg` | Append a call argument. |
| `wrap_expression` | `template` | Replace `%%EXPR%%` with the matched expression source. |
| `replace_with_consequent` | none | Replace an `IfStatement` with its consequent source. |
| `prepend_function_body` | `code` | Insert code at the start of a block body. |
| `insert_after_node` | `code` | Insert code immediately after the matched node. |
| `replace_substring` | `find`, `value` | Replace a unique substring inside the matched node. |
| `replace_substring_regex` | `find`, `value` | Replace a unique regex match inside the matched node. |

## Families Converted During Phase 2

| Family | AST patches | Legacy |
|--------|------------|--------|
| `file-read-path-context` | 7 | 0 |
| `mcp-result-rendering` | 3 | 0 |
| `channel-access` | 3 | 0 |
| `subagent-preserve-tool-results` | 1 | 0 |
| `suppress-npm-native-installer-warning` | 1 | 0 |
| `transcript-preserve-repl-history` | 1 | 0 |

All pass `just verify`, `just render`, `just smoke`, and `just patch-test`
against target 2.1.133.

## Source-Map Lineage Decision

`rationale_ref` is an audit confidence signal, not a resolution requirement.
AST locators resolve purely by typed predicates against the staged bundle.
`rationale_ref` traces intent to `reference/v2.1.88/sources/` and is verified
by `verify-patches.ts`.
