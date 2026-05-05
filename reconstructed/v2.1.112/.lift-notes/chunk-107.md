# Chunk #107 — src/tools/BashTool (helper files)

**Files lifted:** 2
**Confidence:** medium — bashCommandHelpers.ts is high-confidence; bashPermissions.ts main function has jac=0.632 with several unresolved v112-internal symbols in the new adaptive-cwd and AST-path branches.

## Per-file notes

### bashCommandHelpers.ts

- bytes out: ~5,900
- decls reconstructed: 5 (segmentedCommandPermissionResult, buildSegmentWithoutRedirections, checkCommandOperatorPermissions, bashToolCheckCommandOperatorPermissions, CommandIdentityCheckers type)
- drift: medium — jac=0.819/0.88 on two main decls; rest jac=1.

**v112 changes:**

- `segmentedCommandPermissionResult` (`OkY` in v112, `w5Y` in v88) reorders its checks: **deny first**, then multi-cd, then cd+git, then allow. In v88 the multi-cd check ran before the per-segment evaluation loop. This is a semantic correctness improvement — a denied segment now returns 'deny' even if there would also have been a multi-cd issue.
- `bashMissKind` field added to all `decisionReason` objects in this file: `"multi-cd"`, `"cd-git-compound"`, `"shell-operators"`. This is a new field across the codebase in v112 for analytics/debugging.
- `bashToolCheckCommandOperatorPermissions` (`$kY` in v112) removed the `bashCommandIsSafeAsync_DEPRECATED` call that v88 used to produce a more-specific reason message for unsafe compound commands. v112 always uses the generic `"This command uses shell operators that require approval for safety"` reason, with the new `bashMissKind` field added.
- The isUnsafeCompound fallback (when tree-sitter analysis is unavailable) changed from `isUnsafeCompoundCommand_DEPRECATED(input.command)` to `splitCommand_DEPRECATED(input.command).length > 1`. The import of `isUnsafeCompoundCommand_DEPRECATED` is dropped; the import of `splitCommand_DEPRECATED` is kept.

- unresolved symbols: none.

---

### bashPermissions.ts

- bytes out: ~16,000
- decls reconstructed: ~28 (all public exports, most private helpers)
- drift: high on main function `bashToolHasPermission` (jac=0.632); most helper decls are jac=1.

**v112 changes by decl:**

**`SAFE_ENV_VARS`** (jac=0.938): Seven new entries added vs v88:
`COLUMNS`, `LINES`, `CLICOLOR`, `CLICOLOR_FORCE`, `CI`, `DEBIAN_FRONTEND`, `GIT_TERMINAL_PROMPT`.

**`ANT_ONLY_SAFE_ENV_VARS`**: No longer referenced in the module-init block (v88: `DN()` init; v112: `MT()` init). The variable may have been removed from this module or merged into SAFE_ENV_VARS. Not reconstructed (no v112 match).

**`bashToolHasPermission` / `_38`** (jac=0.632): Major restructuring:

1. **Removed shadow mode** — All `feature('TREE_SITTER_BASH_SHADOW')` instrumentation (shadow parse, `tengu_tree_sitter_shadow` logEvent, forced `parse-unavailable` fallback) is gone. v112 always uses the AST result directly.

2. **New AST entry point** — v112 calls `await gt6(q.command)` (byte ~9918304, TODO) followed by `dt6(q.command, Y)` (byte ~9918447, TODO) for AST parsing and security analysis. These are likely `parseCommandRaw`/`parseForSecurityFromAst` equivalents but the exact wrappers are unresolved.

3. **`nSK` call** (byte ~9920536, TODO) — Inserted after `checkSemanticsDeny` in the simple-AST path, before the generic semantics-fail ask return. Context: `if (w.kind === "newline-hash")` precedes the call, suggesting this handles a specific hash-in-newline semantic edge case where the parser produces a distinct semantic failure kind. Signature: `nSK(q, toolPermCtx, commands) → PermissionResult | null`.

4. **Removed `feature('BASH_CLASSIFIER')` guards** — All conditional `pendingClassifierCheck` spreads (`...(feature('BASH_CLASSIFIER') ? { pendingClassifierCheck: ... } : {})`) are gone. The spread is either always included or omitted unconditionally.

5. **`bashMissKind` field** — Added to `decisionReason` at every ask return: `"too-complex"`, `"semantics"`, `"multi-cd"`, `"cd-git-compound"`, `"prompt-ask-rule"`, `"no-rule-match"`.

6. **New adaptive cwd path (`GkY` / `vkY`, bytes ~9924400/9924500, TODO)** — When a compound command starts with exactly one cd subcommand followed by others, v112 attempts to resolve the cd target as the effective cwd for subsequent subcommand permission checks. `GkY(command)` is a boolean predicate detecting this pattern; `vkY(astCmd, cwd, permCtx)` resolves the new cwd or returns null if it cannot safely be inferred. If resolution succeeds, `compoundCommandHasCd` is set to `false` (bypassing the cd+git gate for the remaining subcommands). Reconstructed as two `declare`-style stubs returning safe no-op values.

7. **`Removed legacy misparsing gate`** — v88's `isBashSecurityCheckForMisparsing` path (which called `stripSafeHeredocSubstitutions` and re-checked) is gone. The import of `stripSafeHeredocSubstitutions` can be dropped if the path is fully removed.

8. **`filterRulesByContentsMatchingInput`** (jac=0.571, byte ~9930655): Prefix comparison now normalizes whitespace: `J.prefix.replace(/[ \t]+/g, " ")` and `cmdToMatch.replace(/[ \t]+/g, " ")` before comparing. Wildcard matching also checks `xargs ${pattern}` as a second candidate (`ZP6(J.pattern, X) || ZP6('xargs '+J.pattern, X)`).

9. **`bashToolCheckPermission` / `oSK`** (jac=0.538, byte ~9922464): Signature adds a 5th `cwd` parameter (default `getCwd()`). Passes `cwd` to `checkPathConstraints`. Adds `DkY(q, astCommand)` guard to the `isReadOnly` auto-allow (TODO: unresolved, byte ~9930800 — likely a write-command marker check that blocks auto-allow when the command matches the `iVY` write-regex). Also inserts a new `QSK(q, K)` check between `checkSedConstraints` and `checkPermissionMode` (TODO: unresolved, byte ~9930700).

10. **`checkCommandAndSuggestRules` / `lSK`** (jac=0.571, byte ~9930655): Signature adds 5th `astCommand` and 6th `cwd` params (default `getCwd()`). Passes both to `bashToolCheckPermission`. Removed the inner `bashCommandIsSafeAsync` injection check (was step 3 in v88).

11. **`isNormalizedGitCommand` / `Lu8`** (jac=0.885): Simplified — uses `XM(jF(q))[0]` (tryParseShellCommandTokens(stripSafeWrappers(q))[0]) for the stripped check, no regex fallback. Still checks `xargs git` via `tokens.includes("git")`.

12. **`isNormalizedCdCommand` / `Hn8`**: Fully simplified — `XM(jF(q))[0]` only, no regex fallback; checks `cd`, `pushd`, `popd`.

13. **`startSpeculativeClassifierCheck` / `$kK`** (jac=0.4, byte ~9930815): Removed `feature('TRANSCRIPT_CLASSIFIER')` guard. v112 version: `if (!VK6()) return false; if (K.mode==="auto") return false; if (K.mode==="bypassPermissions") return false;`. The auto-mode guard is now a direct mode check, not gated on the feature flag.

14. **Module init block**: `ANT_ONLY_SAFE_ENV_VARS` assignment dropped; `SAFE_ENV_VARS` set gains the 7 new entries. `xSK = Tg1` (likely `getSimpleCommandPrefix` → `getFirstWordPrefix` alias changed). `xY7 = qR8` (parsePermissionRule alias retained).

**Unresolved symbols:**

| Symbol | Byte range | Hint |
|---|---|---|
| `gt6` | ~9918304 | parseCommandRaw or parseCommandRawCached entry point (async) |
| `dt6` | ~9918447 | parseForSecurityFromAst equivalent — takes (command, astRoot) |
| `VP4` | ~9919705 | checkSemantics from ast.ts |
| `WP4` | ~9918382 | nodeTypeId from ast.ts |
| `nSK` | ~9920536 | newline-hash semantic check; (input, permCtx, commands) → PermissionResult or null |
| `GkY` | ~9924400 | single-leading-cd pattern predicate; (command) → boolean |
| `vkY` | ~9924500 | resolveLeadingCdCwd; (astCmd, cwd, permCtx) → string or null |
| `DkY` | ~9930800 | write-command guard for isReadOnly; (input, astCommand) → boolean |
| `QSK` | ~9930700 | new check inserted before modeValidation; (input, permCtx) → PermissionResult |
| `Tg1` | module init | xSK alias — likely getFirstWordPrefix or getSimpleCommandPrefix |
| `Eu8` | recurring | checkPathConstraints wrapper (alias or equivalent) |
| `Hc4` | ~9929800 | checkPermissionMode alias (was Dy4 in v88) |

## Cross-file observations

- The `bashMissKind` field is new across both files and appears to be a structured analytics tag on `decisionReason` objects in v112. The field is not present in any v88 type definitions (it is likely a discriminated union extension or a loose `string` field added to the base `PermissionDecisionReason` type). A TODO on the `PermissionDecisionReason` type definition is warranted.
- `checkCommandAndSuggestRules` signature changed from 5 to 6 params — any call sites outside this chunk (other tool permission files) will need updating when they are lifted.
- `bashToolCheckPermission` signature changed from 4 to 5 params — same concern for call sites.
- The `iVY` write-command marker regex (the new array of write-format tool patterns) in the BashTool definition relates to the `DkY` guard — the write-command list is now compiled at module init and used to block auto-allow for write commands even when `isReadOnly` returns true.
- `stripSafeHeredocSubstitutions` import from `bashSecurity.js` can be dropped in v112 since the misparsing gate that used it is removed. Left in the import block pending confirmation.

## Lifter

`lifter-107` (subagent), sonnet, general-purpose.
