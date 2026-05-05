# Chunk #108 — src/tools/BashTool

**Files lifted:** 6
**Confidence:** medium (bashSecurity.ts low-medium; others high)

## Per-file notes

### commentLabel.ts
- bytes out: 637
- decls reconstructed: 1
- drift: none — jac=1, cos=1 (verbatim).
- v112 changes: none detected.
- unresolved symbols: none.

### commandSemantics.ts
- bytes out: 3,658
- decls reconstructed: 7
- drift: minimal — 5 of 7 decls jac=1; 2 new v112-only decls (KSK/hTY) are the renamed exports.
- v112 changes:
  - `KSK` = `interpretCommandResult`, `hTY` = `DEFAULT_SEMANTIC`, `RTY` = `COMMAND_SEMANTICS` — all symbol renames only, logic verbatim.
  - Module init via `L()` pattern consistent with bundle conventions.
- unresolved symbols: none.

### destructiveCommandWarning.ts
- bytes out: 2,935
- decls reconstructed: 2
- drift: none — jac=1, cos=1 for both matched decls (verbatim).
- v112 changes: none detected.
- unresolved symbols: none.

### modeValidation.ts
- bytes out: 3,289
- decls reconstructed: 4
- drift: low — 4 of 6 v88 decls jac=1; 2 dropped exports; 1 confirmed behavioral change.
- v112 changes:
  - `ACCEPT_EDITS_ALLOWED_COMMANDS` is now a mutable `let` (was `const` with `as const`): `dSK` init block in v112_min reads `jkY/Yw6` at byte ~9918304.
  - `validateCommandForMode` now calls `stripSafeWrappers(cmd)` (= `jF()` in minified) before splitting the base command — added import from `./bashPermissions.js`.
  - `getAutoAllowedCommands` export dropped (no v112 match in region.json).
  - `FilesystemCommand` type dropped.
- unresolved symbols: none (the `dSK` init mutation pattern is documented inline via TODO).

### pathValidation.ts
- bytes out: 50,412
- decls reconstructed: ~18
- drift: medium — jac range 0.667–1.0; 14 of 18 v88 decls matched; major new factory function and extractor overhauls.
- v112 changes:
  - New `makeSkipFlagsExtractor(flagsWithArgs: Set<string>)` factory (= `za1` in v112_min, byte ~9917000) used by `cut`, `paste`, and `column` extractors.
  - `cut` extractor: uses `makeSkipFlagsExtractor` with 8 flags including `--output-delimiter`.
  - `paste` extractor: uses `makeSkipFlagsExtractor` with `-d`/`--delimiters`.
  - `column` extractor: uses `makeSkipFlagsExtractor` with 6 flags.
  - `awk` extractor: overhauled with separate `skipFlagSet` and `fileFlagSet`; handles `-F`/`-v`/`-e`/`-f`/`-E`/`--exec`.
  - `jq` extractor: `-f`/`--from-file` now yields path; `--slurpfile`/`--rawfile` skip 2 args and take `args[i+2]` as path.
  - `parsePatternCommand` updated to extract `-f`/`--file` path (for grep/rg).
  - `astRedirectsToOutputRedirections` return type extended to `{ redirections, hasDangerousRedirection, dangerousRedirectionReason? }`, checks `/dev/tcp` and `/dev/udp` (sets `dangerousRedirectionReason = 'network_device'`).
  - `checkPathConstraints` dispatches on `dangerousRedirectionReason === 'network_device'` with message "Redirect involving /dev/tcp or /dev/udp opens a network connection".
  - `checkDangerousRemovalPaths` decisionReason extended with `bashMissKind: 'dangerous-path'`.
  - `validateCommandPaths` decisionReason extended with `bashMissKind: 'flag-validation'` and `bashMissKind: 'cd-compound-write'`.
  - `validateOutputRedirections` decisionReason extended with `bashMissKind: 'cd-compound-redirect'`.
  - `checkPathConstraints` process-substitution block extended with `bashMissKind: 'process-substitution'`.
  - `validateSinglePathCommand` (= `kEz`) calls `jF` (stripSafeWrappers) before `parseCommandArguments`.
  - `createPathChecker` has unresolved plan-mode guard on `acceptEdits` suggestion (TODO at byte ~9918700).
- unresolved symbols:
  - `za1` factory resolved as `makeSkipFlagsExtractor` (reconstructed from usage pattern in v112 init block).
  - `createPathChecker` plan-mode guard predicate at byte ~9918700 — left as TODO(lift).

### bashSecurity.ts
- bytes out: 80,529
- decls reconstructed: ~25 (core validators verbatim from v88)
- drift: high for module boundary; individual validators low-drift (jac=1 where matched).
- v112 changes:
  - `extractQuotedContent` completely rewritten in v112 to use a heredoc-aware parser via unresolved symbols `hY7` (parseHeredocRanges), `aVY` (buildSkipSet), `sVY` (buildFullyUnquoted), `tVY` (buildUnquotedKeepQuoteChars) at byte ~9910900. The v88 char-by-char loop is preserved as a fallback with TODO(lift) annotations.
  - Only 3 of 35 v88 decls have v112 region matches — the other 32 are boundary artifacts: the v112 bundle reordered substantial portions of the security validator code into different module positions (validateGitCommit matched at byte 351782, validateJqCommand at byte 18382 — both far outside the BashTool boundary).
  - All individual validators retained verbatim from v88: `validateEmpty`, `validateIncompleteCommands`, `validateSafeCommandSubstitution`, `validateGitCommit`, `validateJqCommand`, `validateShellMetacharacters`, `validateDangerousVariables`, `validateDangerousPatterns`, `validateRedirections`, `validateNewlines`, `validateCarriageReturn`, `validateIFSInjection`, `validateProcEnvironAccess`, `validateMalformedTokenInjection`, `validateObfuscatedFlags`, `hasBackslashEscapedWhitespace`, `validateBackslashEscapedWhitespace`, `hasBackslashEscapedOperator`, `validateBackslashEscapedOperators`, `isEscapedAtPosition`, `validateBraceExpansion`, `validateUnicodeWhitespace`, `validateMidWordHash`, `validateCommentQuoteDesync`, `validateQuotedNewline`, `validateZshDangerousCommands`, `isSafeHeredoc`, `stripSafeHeredocSubstitutions`, `hasSafeHeredocSubstitution`.
  - `bashCommandIsSafe_DEPRECATED` and `bashCommandIsSafeAsync_DEPRECATED` preserved with same orchestration structure.
- unresolved symbols:
  - `hY7` (parseHeredocRanges) at byte ~9910900 — heredoc range parser, unresolved, TODO(lift).
  - `aVY` (buildSkipSet) at byte ~9910900 — builds skip index set, unresolved, TODO(lift).
  - `sVY` (buildFullyUnquoted) at byte ~9910900 — strips all quoted content, unresolved, TODO(lift).
  - `tVY` (buildUnquotedKeepQuoteChars) at byte ~9910900 — strips content but keeps quote chars, unresolved, TODO(lift).
  - `eVY` (extractQuotedContent v112 replacement) at byte ~9910900 — full rewrite, preserved as fallback + TODO.

## Cross-file observations

- `stripSafeWrappers` (= `jF` in minified) is now called from both `modeValidation.ts` and `pathValidation.ts` (`validateSinglePathCommand`). Import source is `./bashPermissions.js` in both cases — consistent with the v112 pattern of stripping safe wrapper commands before base-command extraction.
- `bashMissKind` is a new field on `decisionReason` objects in `pathValidation.ts`. The field appears on at least 5 different code paths. The type for `decisionReason` likely gained this discriminant in v112's `PermissionResult` type definition — **action for a later chunk:** when the v112 `PermissionResult` type is lifted, add `bashMissKind` to the union.
- The 4 heredoc-aware parser symbols (`hY7`/`aVY`/`sVY`/`tVY`) likely live in a shared utility module (not BashTool). They should be resolved when that module's chunk is lifted and cross-referenced here.
- `validateGitCommit` and `validateJqCommand` appearing at byte offsets far outside the BashTool bundle region (351782 and 18382 respectively) suggests these were moved to a shared `bashUtils` or similar module in v112. Watch for them in other chunks.

## Lifter

`lifter-108` (subagent, sonnet, general-purpose).
