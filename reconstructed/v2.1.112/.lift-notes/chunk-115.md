# Chunk #115 — src/tools/PowerShellTool permissions+security

**Files lifted:** 2
**Confidence:** high

## Per-file notes

### powershellSecurity.ts
- bytes out: ~28 KiB
- decls reconstructed: ~30 (all security check functions + main entry point)
- drift: very low — all 31 matched decls are jac=1, cos=1 (verbatim at the
  token level). One v88 decl [8646622,8646658] has no v112 match (boundary
  artifact).
- v112 changes:
  - `checkStartProcess`: backtick stripping in the regex-fallback branch uses
    `.replaceAll("`", "")` instead of `.replace(/`/g, "")`. Functionally
    identical, but confirms v112 prefers `String.replaceAll` over regex for
    literal single-char replacements.
  - All other functions: verbatim (jac=1, cos=1).
- unresolved symbols: none — all external references (`COMMON_ALIASES`,
  `getAllCommands`, `deriveSecurityFlags`, `hasCommandNamed`, etc.) resolve
  cleanly to the powershell parser module.

### powershellPermissions.ts
- bytes out: ~55 KiB
- decls reconstructed: ~12 (permission rule helpers + main async function)
- drift: medium (jac=0.932, cos=1 on the main function decl). Three v88 decls
  have no v112 match.
- v112 changes:
  1. **`extractCommandName` removed** (v88 decls [8647461,8647553] and
     [8647553,8647583] have no v112 match). The async helper that parsed a
     raw string to extract the first command name was inlined into the
     powershell parser module. `getSubCommandsForPermissionCheck` in v112
     calls `zyK` (byte ~9553600) — the shared module-level extractor.
     Lifted as `_extractCommandName_V112` stub at file bottom.
  2. **`matchWildcardPattern` call gains 4th arg `true`** in
     `filterRulesByContentsMatchingInput` wildcard branches. v88 called
     `matchWildcardPattern(pattern, cmd, true)` (3 args); v112 calls it with
     `(pattern, cmd, true, true)` — the 4th arg enables case-insensitive
     matching in the shared wildcard helper (PS-specific, since PowerShell is
     case-insensitive).
  3. **`backtickStripped` in parse-failed path** now strips PS block comments
     first: `.replace(/<#[\s\S]*?#>/g, " ")` is prepended before the
     backtick-collapse step. This prevents a `<# comment ; iex evil #>` from
     being split on `;` inside the comment and generating a spurious deny.
     Also uses `.replaceAll("`", "")` instead of chained `.replace(/`/g, "")`.
  4. **Fragment normalization loop restructured** in the parse-failed scan.
     v88 used a nested `while ((m = normalized.match(PS_ASSIGN_PREFIX_RE)))`
     loop to strip assignment prefixes, plus `normalized.replace(/^[&.]\s+/, "")`
     for invocation operators. v112 changes to a simpler token-by-token loop
     (`tokens.split(/\s+/)`) that iterates starting positions. The functional
     effect is similar but the exact coverage of edge cases around dot-source
     and `&`-invocation may differ. See TODO below.
  5. **`hasBackgroundJob` check added** after `hasScriptRequirements`. When
     `parsed.hasBackgroundJob` is true (new field in v112's ParsedPowerShellCommand),
     a 'ask' decision is pushed: "Command uses the background job operator
     (`&`) which spawns a child PowerShell process". This guards the PS `& { }`
     and `& script.ps1` patterns.
  6. **Archive extractor check moved outside `if (hasGitSubCommand)` block**.
     In v88, `GIT_SAFETY_ARCHIVE_EXTRACTORS.has(element.name.toLowerCase())`
     only ran when `hasGitSubCommand` was true. In v112, the check runs for ALL
     compounds with more than one sub-command, but uses two different messages:
     - git present: "Compound command extracts an archive and runs git..."
     - no git: "Compound command extracts an archive followed by other commands..."
     The name match in v112 also extracts the basename (after `\` or `/`
     separator) before checking the set, to handle qualified paths like
     `C:\tools\7za.exe` — the v88 version used the raw lowercased name and
     would miss qualified-path archive extractors.
  7. **`extractProviderPathFromArg`** uses `.replaceAll("`", "")` instead of
     `.replace(/`/g, "")` for backtick stripping (same replaceAll preference
     as noted in powershellSecurity.ts).
- unresolved symbols:
  - `_extractCommandName_V112` (byte ~9553600): stand-in for `zyK`, the shared
    extractCommandName from the parsePowerShellCommand module. Shape confirmed
    from v88; should resolve to the same logic once the parser module is lifted.
  - `parsed.hasBackgroundJob`: new field on `ParsedPowerShellCommand` in v112,
    not in the v88 type. Added to the lift without type-source; update when the
    parser type is lifted.

## Cross-file observations

- Both files confirm v112's preference for `String.replaceAll` over
  `/regex/g` for single-character literal replacements (`backtick`, etc.).
- `ParsedPowerShellCommand.hasBackgroundJob` is a new v112 field not present
  in v88. When the parser utility module is lifted, this field must be added
  to the type definition.
- The `matchWildcardPattern` 4th-arg change in powershellPermissions is the
  only API-surface change between v88 and v112 in these two files. Other
  callers of `matchWildcardPattern` in the PS permission path should also
  adopt the 4th arg.
- `getRuleByContentsForToolName` (import in powershellPermissions) may have
  changed to `getRuleByContentsForTool` (tool-object form) as in BashTool's
  v112 lift. The minified call `qP6(K,I5,...)` takes `I5` (the tool name
  string constant), which matches `getRuleByContentsForToolName`. No change
  needed unless the permissions API is refactored.

## Lifter

`lifter-115` (sonnet-4-6, subagent, team v112-lift).
