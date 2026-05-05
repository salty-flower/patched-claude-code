# Chunk #109 — src/tools/BashTool (tail) + src/tools/BriefTool

**Files lifted:** 7
**Confidence:** medium-high

## Per-file notes

### src/tools/BashTool/prompt.ts

- bytes out: 21,883
- decls reconstructed: ~6 (getDefaultTimeoutMs, getMaxTimeoutMs, getBackgroundUsageNote, getCommitAndPRInstructions, dedup, getSimpleSandboxSection, getSimplePrompt)
- drift summary: mixed — getCommitAndPRInstructions (jac=1,cos=1) verbatim; getSimplePrompt (jac=0.885,cos=0.991) medium drift.
- v112 changes:
  - `getSimplePrompt` (`hSK`): "When issuing multiple commands" section now conditionally suppressed when `getFeatureValue_CACHED_MAY_BE_STALE('tengu_relay_chain_v1', false)` is truthy. In relay-chain mode the section (including header + sub-bullets) is omitted entirely; in normal mode it's included as two elements in instructionItems spread.
  - `sleepSubitems` in v112 uses `feature('MONITOR_TOOL')` check with different bullet text: Monitor-mode sleep hint changes from a `sleep N ≥ 2` limit message to "Long leading `sleep` commands are blocked. Use Monitor with until-loop..." — longer, actionable instruction.
  - New `rerunHint` (from `A36()` predicate): when active, prepends "To rerun a prior command exactly, emit {rerun:'bN'} from the result footer instead of retyping the command." to instructionItems. Predicate is unresolved.
  - `multipleCommandsSection` spread directly into instructionItems (no separate wrapper — the header/subitems are embedded as part of the conditional array).
- unresolved symbols:
  - `A36()` at byte ~9889440 — predicate that enables rerun-shorthand hint. Shape: returns truthy when rerun feature is enabled. Likely a feature flag or settings check.

### src/tools/BashTool/readOnlyValidation.ts

- bytes out: 42,080
- decls reconstructed: ~20 (COMMAND_ALLOWLIST, ANT_ONLY_COMMAND_ALLOWLIST, getCommandAllowlist, SAFE_TARGET_COMMANDS_FOR_XARGS, isCommandSafeViaFlagParsing, makeRegexForSafeCommand, READONLY_COMMANDS, READONLY_COMMAND_REGEXES, containsShellExpansion, isCommandReadOnly, commandHasAnyGit, GIT_INTERNAL_PATTERNS, isGitInternalPath, NON_CREATING_WRITE_COMMANDS, extractWritePathsFromSubcommand, commandWritesToGitInternalPaths, checkReadOnlyConstraints)
- drift summary: init block (jac=0.864,cos=0.997) low drift; isCommandSafeViaFlagParsing (jac=0.55,cos=0.998) medium drift; checkReadOnlyConstraints (jac=0.85,cos=1) medium drift; containsShellExpansion (jac=1,cos=0.974) verbatim.
- v112 changes:
  - `isCommandSafeViaFlagParsing` (`xEz`): Now uses `tryParseShellCommand(command, env => \`$${env}\`)` with env substitution callback for parse. The token-filtering approach slightly changed — glob tokens handled differently.
  - `SAFE_TARGET_COMMANDS_FOR_XARGS` (`jzz`): `egrep` and `fgrep` removed from the list (v88 had them; v112 drops them as xargs targets).
  - `containsShellExpansion` (`Pzz`): Same logic as v88's `containsUnquotedExpansion` but renamed. jac=1 (verbatim content), minor comment delta.
  - `checkReadOnlyConstraints` (`hN8`): Major restructuring (jac=0.85). v112 now starts with a `tryParseShellCommand` parse check and returns `passthrough` if parsing fails. Then calls `bashCommandIsSafe_DEPRECATED` (Po6) before UNC check. Individual subcommand loop also calls Po6 before isCommandReadOnly. The structure is otherwise semantically equivalent to v88.
  - `isReadOnlyCommand` (was `Hzz`): Uses tryParseShellCommand with substitution, different from v88. The grep-only check changed from `(rg || grep || egrep || fgrep)` to `(rg || grep)`.
  - 3 v88 decls removed (boundary artifacts with no v112 match).
- unresolved symbols:
  - `Po6` — appears to be `bashCommandIsSafe_DEPRECATED` used via different import path in v112. Shape confirmed: returns `{behavior: 'passthrough' | 'allow' | 'ask', ...}`.

### src/tools/BashTool/sedEditParser.ts

- bytes out: 6,527
- decls reconstructed: 3 (parseSedEditCommand, applySedSubstitution, constants)
- drift summary: parseSedEditCommand (jac=0.778,cos=0.999) medium drift; applySedSubstitution (jac=1,cos=1) verbatim; constants (jac=1,cos=1) verbatim.
- v112 changes:
  - `parseSedEditCommand` (`UC6`): Now uses `splitCommand_DEPRECATED` (XM) for tokenization instead of `tryParseShellCommand`. This simplifies glob handling (glob tokens become impossible since XM doesn't produce them). The function no longer calls `tryParseShellCommand`/`isSedInPlaceEdit` is not exported separately in v112 but the logic is preserved.
  - `isSedInPlaceEdit` wrapper: Not present as a separate export in v112 min. Removed from exports. Kept in lifted file for API compatibility (calls parseSedEditCommand internally).
  - 2 v88 decls with no v112 match are boundary artifacts.
- unresolved symbols: none.

### src/tools/BashTool/sedValidation.ts

- bytes out: 12,901
- decls reconstructed: ~9 (validateFlagsAgainstAllowlist, isLinePrintingCommand, isPrintCommand, isSubstitutionCommand, sedCommandIsAllowedByAllowlist, hasFileArgs, extractSedExpressions, containsDangerousOperations, checkSedConstraints)
- drift summary: mixed — jac ranges from 0.444 to 1.0. validateFlagsAgainstAllowlist (jac=1,cos=1) verbatim; isSubstitutionCommand (jac=0.6,cos=0.997) medium drift; hasFileArgs (jac=0.692,cos=0.997) medium drift; extractSedExpressions (jac=0.857,cos=1) low drift; checkSedConstraints (jac=0.857,cos=1) low drift.
- v112 changes:
  - All parsing functions now use `splitCommand_DEPRECATED` (XM) instead of `tryParseShellCommand`. This means glob tokens are gone; parsing is based on simple space-splitting.
  - `isLinePrintingCommand` (`HEz`): Rewrote to use `XM(q)` and filter flags directly from token array. No longer calls `tryParseShellCommand`.
  - `isSubstitutionCommand` (`$c4`): Same pattern — uses XM for tokenization.
  - `hasFileArgs` (`XEz`): Uses XM. Glob-pattern return path removed (no 'op':'glob' tokens from XM). Logic otherwise preserved.
  - `extractSedExpressions` (`MEz`): Uses XM. Dangerous flag combination check moved to a `.some()` test on args array checking regex patterns (`/^-e[wWe]/`, `/^-w[eE]/`). Malformed-shell-syntax throw removed (XM always succeeds). Empty-args throw added.
  - `checkSedConstraints` (`Hc4`): `decisionReason` gains `bashMissKind: 'sed-dangerous'` field. Uses `TO` (`splitCommand_DEPRECATED`) for command splitting.
  - 3 v88 decls with no v112 match are boundary artifacts.
- unresolved symbols: none.

### src/tools/BashTool/shouldUseSandbox.ts

- bytes out: 3,509
- decls reconstructed: 2 (containsExcludedCommand, shouldUseSandbox)
- drift summary: containsExcludedCommand (no direct v88 match at same offset — moved to different byte in bundle); shouldUseSandbox (jac=0.75,cos=0.997) low drift.
- v112 changes:
  - `shouldUseSandbox` (`AL`): Gains a new early-return guard `if (xP() && Js()) return true` BEFORE the `isSandboxingEnabled()` check (byte ~4813141). Two unresolved predicates — shape suggests a "force-sandbox for specific build type or configuration" gate (e.g., ant-only mode or relay-chain mode that forces sandboxing).
  - `containsExcludedCommand` (`kkY`): The ant-specific `getFeatureValue_CACHED_MAY_BE_STALE('tengu_sandbox_disabled_commands')` block is removed entirely. v112 only checks user-configured excluded commands from settings. The fixed-point stripping loop is preserved verbatim.
  - 1 v88 decl with no v112 match is boundary artifact.
- unresolved symbols:
  - `xP()` at byte ~4813141 — predicate in shouldUseSandbox guard. Shape: `() => boolean`. Possible meanings: platform check, build-mode check, settings flag.
  - `Js()` at byte ~4813141 — second predicate in same guard. Shape: `() => boolean`. Possibly session or sandbox-policy check.

### src/tools/BashTool/utils.ts

- bytes out: 6,576
- decls reconstructed: ~9 (stripEmptyLines, isImageOutput, DATA_URI_RE, parseDataUri, buildImageToolResult, MAX_IMAGE_FILE_SIZE, resizeShellImageOutput, formatOutput, stdErrAppendShellResetMessage, resetCwdIfOutsideProject, createContentSummary, MAX_IMAGES_PER_REQUEST)
- drift summary: all decls jac=1,cos=1 (verbatim) except resizeShellImageOutput (jac=1,cos=0.993 — tiny delta) and stdErrAppendShellResetMessage (jac=1,cos=0.993).
- v112 changes:
  - `resizeShellImageOutput` (`aU8`): Gains an additional 4th parameter forwarded to `maybeResizeAndDownsampleImageBuffer`. Type unclear from usage — lifted as `options?: unknown`.
  - `iU8=25` constant exposed in init block — purpose unclear (candidate: max images per request cap). Lifted as `MAX_IMAGES_PER_REQUEST = 25`.
  - All other decls verbatim.
- unresolved symbols:
  - `iU8` constant at byte ~8732818 — value 25, purpose unconfirmed. Possibly max-images-per-request guard. TODO(lift): iU8 at byte ~8732818.

### src/tools/BriefTool/BriefTool.ts

- bytes out: 5,951
- decls reconstructed: ~4 (isBriefEntitled, isBriefEnabled, BriefTool object, schemas)
- drift summary: isBriefEntitled (jac=0.667,cos=0.997) medium drift; isBriefEnabled (jac=1,cos=1) verbatim; BriefTool object (jac=1,cos=1) verbatim.
- v112 changes:
  - `isBriefEntitled` (`aQ8`): The `feature('KAIROS') || feature('KAIROS_BRIEF') ?` ternary guard is removed. The function now directly returns the disjunction of `getKairosActive()`, `isEnvTruthy(CLAUDE_CODE_BRIEF)`, and `getFeatureValue_CACHED_WITH_REFRESH(...)`. This eliminates DCE-based build-time gating for entitlement — Brief is always checked at runtime. The refresh interval (`KAIROS_BRIEF_REFRESH_MS = 5*60*1000`) is preserved.
  - `isBriefEnabled` (`Q57`): Verbatim — still has the `feature('KAIROS') || feature('KAIROS_BRIEF') ?` ternary for DCE on the activation gate.
  - 2 v88 decls with no v112 match are boundary artifacts (likely small glue decls between schemas and the buildTool call).
- unresolved symbols: none.

## Cross-file observations

- **`tryParseShellCommand` vs `splitCommand_DEPRECATED`**: A systemic v112 change across BashTool modules. `sedEditParser.ts`, `sedValidation.ts`, and `shouldUseSandbox.ts` all switched from shell-quote parsing to the simpler `splitCommand_DEPRECATED` / XM approach. `readOnlyValidation.ts` kept `tryParseShellCommand` for security-critical paths (isCommandSafeViaFlagParsing, checkReadOnlyConstraints) but uses it with a `env => \`$${env}\`` substitution callback.
- **Removed features**: The ant-specific `getFeatureValue_CACHED_MAY_BE_STALE('tengu_sandbox_disabled_commands')` check in `shouldUseSandbox.ts` is gone in v112. The feature-gated block in `isBriefEntitled` (KAIROS/KAIROS_BRIEF) also simplified.
- **New features**: `tengu_relay_chain_v1` feature flag in `prompt.ts` suppresses the multiple-commands parallelism instructions. `A36()` predicate in `prompt.ts` adds a rerun-shorthand hint. Monitor tool sleep hints conditioned on `feature('MONITOR_TOOL')` have a changed message in v112.
- **`bashMissKind`**: `checkSedConstraints` in `sedValidation.ts` adds this field to `decisionReason` — suggests a new analytics/classification field on PermissionResult's decisionReason type.

## Lifter

`lifter-109` (subagent), sonnet, general-purpose.
