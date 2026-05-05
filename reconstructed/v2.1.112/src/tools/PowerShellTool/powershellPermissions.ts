/**
 * PowerShell-specific permission checking, adapted from bashPermissions.ts
 * for case-insensitive cmdlet matching.
 */

import { resolve } from 'path'
import type { ToolPermissionContext, ToolUseContext } from '../../Tool.js'
import type {
  PermissionDecisionReason,
  PermissionResult,
} from '../../types/permissions.js'
import { getCwd } from '../../utils/cwd.js'
import { isCurrentDirectoryBareGitRepo } from '../../utils/git.js'
import type { PermissionRule } from '../../utils/permissions/PermissionRule.js'
import type { PermissionUpdate } from '../../utils/permissions/PermissionUpdateSchema.js'
import {
  createPermissionRequestMessage,
  getRuleByContentsForToolName,
} from '../../utils/permissions/permissions.js'
import {
  matchWildcardPattern,
  parsePermissionRule,
  type ShellPermissionRule,
  suggestionForExactCommand as sharedSuggestionForExactCommand,
} from '../../utils/permissions/shellRuleMatching.js'
import {
  classifyCommandName,
  deriveSecurityFlags,
  getAllCommandNames,
  getFileRedirections,
  type ParsedCommandElement,
  type ParsedPowerShellCommand,
  PS_TOKENIZER_DASH_CHARS,
  parsePowerShellCommand,
  stripModulePrefix,
} from '../../utils/powershell/parser.js'
import { containsVulnerableUncPath } from '../../utils/shell/readOnlyCommandValidation.js'
import { isDotGitPathPS, isGitInternalPathPS } from './gitSafety.js'
import {
  checkPermissionMode,
  isSymlinkCreatingCommand,
} from './modeValidation.js'
import {
  checkPathConstraints,
  dangerousRemovalDeny,
  isDangerousRemovalRawPath,
} from './pathValidation.js'
import { powershellCommandIsSafe } from './powershellSecurity.js'
import {
  argLeaksValue,
  isAllowlistedCommand,
  isCwdChangingCmdlet,
  isProvablySafeStatement,
  isReadOnlyCommand,
  isSafeOutputCommand,
  resolveToCanonical,
} from './readOnlyValidation.js'
import { POWERSHELL_TOOL_NAME } from './toolName.js'

// TODO(lift): extractCommandName removed in v112 (no v112 match for decls
// [8647461,8647553] and [8647553,8647583]). v112 references zyK (byte ~9553600)
// which is the shared extractCommandName from the parsePowerShellCommand module.
// The function below is a stand-in based on v88 shape. Actual impl may differ.

// Matches `$var = `, `$var += `, `$env:X = `, `$x ??= ` etc. Used to strip
// nested assignment prefixes in the parse-failed fallback path.
const PS_ASSIGN_PREFIX_RE = /^\$[\w:]+\s*(?:[+\-*/%]|\?\?)?\s*=\s*/

/**
 * Cmdlets that can place a file at a caller-specified path. The
 * git-internal-paths guard checks whether any arg is a git-internal path
 * (hooks/, refs/, objects/, HEAD). Non-creating writers (remove-item,
 * clear-content) are intentionally absent — they can't plant new hooks.
 */
const GIT_SAFETY_WRITE_CMDLETS = new Set([
  'new-item',
  'set-content',
  'add-content',
  'out-file',
  'copy-item',
  'move-item',
  'rename-item',
  'expand-archive',
  'invoke-webrequest',
  'invoke-restmethod',
  'tee-object',
  'export-csv',
  'export-clixml',
])

/**
 * External archive-extraction applications that write files to cwd with
 * archive-controlled paths. `tar -xf payload.tar; git status` defeats
 * isCurrentDirectoryBareGitRepo (TOCTOU): the check runs at
 * permission-eval time, tar extracts HEAD/hooks/refs/ AFTER the check and
 * BEFORE git runs. Unlike GIT_SAFETY_WRITE_CMDLETS (where we can inspect
 * args for git-internal paths), archive contents are opaque — any
 * extraction preceding git must ask. Matched by name only (lowercase,
 * with and without .exe).
 *
 * v112: archive extractor check now applies to ALL compounds (not just
 * those with a git subcommand), with a different message for each case.
 * Name matched against the basename (after last \ or / separator) to handle
 * qualified paths.
 */
const GIT_SAFETY_ARCHIVE_EXTRACTORS = new Set([
  'tar',
  'tar.exe',
  'bsdtar',
  'bsdtar.exe',
  'unzip',
  'unzip.exe',
  '7z',
  '7z.exe',
  '7za',
  '7za.exe',
  'gzip',
  'gzip.exe',
  'gunzip',
  'gunzip.exe',
  'expand-archive',
])

/**
 * Parse a permission rule string into a structured rule object.
 * Delegates to shared parsePermissionRule.
 */
export function powershellPermissionRule(
  permissionRule: string,
): ShellPermissionRule {
  return parsePermissionRule(permissionRule)
}

/**
 * Generate permission update suggestion for exact command match.
 *
 * Skip exact-command suggestion for commands that can't round-trip cleanly:
 * - Multi-line: newlines don't survive normalization, rule would never match
 * - Literal *: storing `Remove-Item * -Force` verbatim re-parses as a wildcard
 *   rule via hasWildcards() (matches `^Remove-Item .* -Force$`). Escaping to
 *   `\*` creates a dead rule — parsePermissionRule's exact branch returns the
 *   raw string with backslash intact, so `Remove-Item \* -Force` never matches
 *   the incoming `Remove-Item * -Force`. Globs are unsafe to exact-auto-allow
 *   anyway; prefix suggestion still offered. (finding #12)
 */
function suggestionForExactCommand(command: string): PermissionUpdate[] {
  if (command.includes('\n') || command.includes('*')) {
    return []
  }
  return sharedSuggestionForExactCommand(POWERSHELL_TOOL_NAME, command)
}

/**
 * PowerShell input schema type - simplified for initial implementation
 */
type PowerShellInput = {
  command: string
  timeout?: number
}

/**
 * Filter rules by contents matching an input command.
 * PowerShell-specific: uses case-insensitive matching throughout.
 * Follows the same structure as BashTool's local filterRulesByContentsMatchingInput.
 */
function filterRulesByContentsMatchingInput(
  input: PowerShellInput,
  rules: Map<string, PermissionRule>,
  matchMode: 'exact' | 'prefix',
  behavior: 'deny' | 'ask' | 'allow',
): PermissionRule[] {
  const command = input.command.trim()

  function strEquals(a: string, b: string): boolean {
    return a.toLowerCase() === b.toLowerCase()
  }
  function strStartsWith(str: string, prefix: string): boolean {
    return str.toLowerCase().startsWith(prefix.toLowerCase())
  }
  // SECURITY: stripModulePrefix on RULE names widens the
  // secondary-canonical match — a deny rule `Module\Remove-Item:*` blocking
  // `rm` is the intent (fail-safe over-match), but an allow rule
  // `ModuleA\Get-Thing:*` also matching `ModuleB\Get-Thing` is fail-OPEN.
  // Deny/ask over-match is fine; allow must never over-match.
  function stripModulePrefixForRule(name: string): string {
    if (behavior === 'allow') {
      return name
    }
    return stripModulePrefix(name)
  }

  // Extract the first word (command name) from the input for canonical matching.
  // Keep both raw (for slicing the original `command` string) and stripped
  // (for canonical resolution) versions. For module-qualified inputs like
  // `Microsoft.PowerShell.Utility\Invoke-Expression foo`, rawCmdName holds the
  // full token so `command.slice(rawCmdName.length)` yields the correct rest.
  const rawCmdName = command.split(/\s+/)[0] ?? ''
  const inputCmdName = stripModulePrefix(rawCmdName)
  const inputCanonical = resolveToCanonical(inputCmdName)

  // Build a version of the command with the canonical name substituted
  // e.g., 'rm foo.txt' -> 'remove-item foo.txt' so deny rules on Remove-Item also block rm.
  // SECURITY: Normalize the whitespace separator between name and args to a
  // single space. PowerShell accepts any whitespace (tab, etc.) as separator,
  // but prefix rule matching uses `prefix + ' '` (literal space). Without this,
  // `rm\t./x` canonicalizes to `remove-item\t./x` and misses the deny rule
  // `Remove-Item:*`, while acceptEdits auto-allow (using AST cmd.name) still
  // matches — a deny-rule bypass. Build unconditionally (not just when the
  // canonical differs) so non-space-separated raw commands are also normalized.
  const rest = command.slice(rawCmdName.length).replace(/^\s+/, ' ')
  const canonicalCommand = inputCanonical + rest

  return Array.from(rules.entries())
    .filter(([ruleContent]) => {
      const rule = powershellPermissionRule(ruleContent)

      // Also resolve the rule's command name to canonical for cross-matching
      // e.g., a deny rule for 'rm' should also block 'Remove-Item'
      function matchesCommand(cmd: string): boolean {
        switch (rule.type) {
          case 'exact':
            return strEquals(rule.command, cmd)
          case 'prefix':
            switch (matchMode) {
              case 'exact':
                return strEquals(rule.prefix, cmd)
              case 'prefix': {
                if (strEquals(cmd, rule.prefix)) {
                  return true
                }
                return strStartsWith(cmd, rule.prefix + ' ')
              }
            }
            break
          case 'wildcard':
            if (matchMode === 'exact') {
              return false
            }
            // v112: passes 4th arg `true` (case-insensitive) for wildcard matching
            return matchWildcardPattern(rule.pattern, cmd, true, true)
        }
      }

      // Check against the original command
      if (matchesCommand(command)) {
        return true
      }

      // Also check against the canonical form of the command
      // This ensures 'deny Remove-Item' also blocks 'rm', 'del', 'ri', etc.
      if (matchesCommand(canonicalCommand)) {
        return true
      }

      // Also resolve the rule's command name to canonical and compare
      // This ensures 'deny rm' also blocks 'Remove-Item'
      // SECURITY: stripModulePrefix applied to DENY/ASK rule command
      // names too, not just input. Otherwise a deny rule written as
      // `Microsoft.PowerShell.Management\Remove-Item:*` is bypassed by `rm`,
      // `del`, or plain `Remove-Item` — resolveToCanonical won't match the
      // module-qualified form against COMMON_ALIASES.
      if (rule.type === 'exact') {
        const rawRuleCmdName = rule.command.split(/\s+/)[0] ?? ''
        const ruleCanonical = resolveToCanonical(
          stripModulePrefixForRule(rawRuleCmdName),
        )
        if (ruleCanonical === inputCanonical) {
          // Rule and input resolve to same canonical cmdlet
          // SECURITY: use normalized `rest` not a raw re-slice
          // from `command`. The raw slice preserves tab separators so
          // `Remove-Item\t./secret.txt` vs deny rule `rm ./secret.txt` misses.
          // Normalize both sides identically.
          const ruleRest = rule.command
            .slice(rawRuleCmdName.length)
            .replace(/^\s+/, ' ')
          const inputRest = rest
          if (strEquals(ruleRest, inputRest)) {
            return true
          }
        }
      } else if (rule.type === 'prefix') {
        const rawRuleCmdName = rule.prefix.split(/\s+/)[0] ?? ''
        const ruleCanonical = resolveToCanonical(
          stripModulePrefixForRule(rawRuleCmdName),
        )
        if (ruleCanonical === inputCanonical) {
          const ruleRest = rule.prefix
            .slice(rawRuleCmdName.length)
            .replace(/^\s+/, ' ')
          const canonicalPrefix = inputCanonical + ruleRest
          if (matchMode === 'exact') {
            if (strEquals(canonicalPrefix, canonicalCommand)) {
              return true
            }
          } else {
            if (
              strEquals(canonicalCommand, canonicalPrefix) ||
              strStartsWith(canonicalCommand, canonicalPrefix + ' ')
            ) {
              return true
            }
          }
        }
      } else if (rule.type === 'wildcard') {
        // Resolve the wildcard pattern's command name to canonical and re-match
        // This ensures 'deny rm *' also blocks 'Remove-Item secret.txt'
        const rawRuleCmdName = rule.pattern.split(/\s+/)[0] ?? ''
        const ruleCanonical = resolveToCanonical(
          stripModulePrefixForRule(rawRuleCmdName),
        )
        if (ruleCanonical === inputCanonical && matchMode !== 'exact') {
          // Rebuild the pattern with the canonical cmdlet name
          // Normalize separator same as exact and prefix branches.
          // Without this, a wildcard rule `rm\t*` produces canonicalPattern
          // with a literal tab that never matches the space-normalized
          // canonicalCommand.
          const ruleRest = rule.pattern
            .slice(rawRuleCmdName.length)
            .replace(/^\s+/, ' ')
          const canonicalPattern = inputCanonical + ruleRest
          // v112: passes 4th arg `true` (case-insensitive) for wildcard matching
          if (matchWildcardPattern(canonicalPattern, canonicalCommand, true, true)) {
            return true
          }
        }
      }

      return false
    })
    .map(([, rule]) => rule)
}

/**
 * Get matching rules for input across all rule types (deny, ask, allow)
 */
function matchingRulesForInput(
  input: PowerShellInput,
  toolPermissionContext: ToolPermissionContext,
  matchMode: 'exact' | 'prefix',
) {
  const denyRuleByContents = getRuleByContentsForToolName(
    toolPermissionContext,
    POWERSHELL_TOOL_NAME,
    'deny',
  )
  const matchingDenyRules = filterRulesByContentsMatchingInput(
    input,
    denyRuleByContents,
    matchMode,
    'deny',
  )

  const askRuleByContents = getRuleByContentsForToolName(
    toolPermissionContext,
    POWERSHELL_TOOL_NAME,
    'ask',
  )
  const matchingAskRules = filterRulesByContentsMatchingInput(
    input,
    askRuleByContents,
    matchMode,
    'ask',
  )

  const allowRuleByContents = getRuleByContentsForToolName(
    toolPermissionContext,
    POWERSHELL_TOOL_NAME,
    'allow',
  )
  const matchingAllowRules = filterRulesByContentsMatchingInput(
    input,
    allowRuleByContents,
    matchMode,
    'allow',
  )

  return { matchingDenyRules, matchingAskRules, matchingAllowRules }
}

/**
 * Check if the command is an exact match for a permission rule.
 */
export function powershellToolCheckExactMatchPermission(
  input: PowerShellInput,
  toolPermissionContext: ToolPermissionContext,
): PermissionResult {
  const trimmedCommand = input.command.trim()
  const { matchingDenyRules, matchingAskRules, matchingAllowRules } =
    matchingRulesForInput(input, toolPermissionContext, 'exact')

  if (matchingDenyRules[0] !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${POWERSHELL_TOOL_NAME} with command ${trimmedCommand} has been denied.`,
      decisionReason: { type: 'rule', rule: matchingDenyRules[0] },
    }
  }

  if (matchingAskRules[0] !== undefined) {
    return {
      behavior: 'ask',
      message: createPermissionRequestMessage(POWERSHELL_TOOL_NAME),
      decisionReason: { type: 'rule', rule: matchingAskRules[0] },
    }
  }

  if (matchingAllowRules[0] !== undefined) {
    return {
      behavior: 'allow',
      updatedInput: input,
      decisionReason: { type: 'rule', rule: matchingAllowRules[0] },
    }
  }

  const decisionReason: PermissionDecisionReason = {
    type: 'other' as const,
    reason: 'This command requires approval',
  }
  return {
    behavior: 'passthrough',
    message: createPermissionRequestMessage(
      POWERSHELL_TOOL_NAME,
      decisionReason,
    ),
    decisionReason,
    suggestions: suggestionForExactCommand(trimmedCommand),
  }
}

/**
 * Check permission for a PowerShell command including prefix matches.
 */
export function powershellToolCheckPermission(
  input: PowerShellInput,
  toolPermissionContext: ToolPermissionContext,
): PermissionResult {
  const command = input.command.trim()

  // 1. Check exact match first
  const exactMatchResult = powershellToolCheckExactMatchPermission(
    input,
    toolPermissionContext,
  )

  // 1a. Deny/ask if exact command has a rule
  if (
    exactMatchResult.behavior === 'deny' ||
    exactMatchResult.behavior === 'ask'
  ) {
    return exactMatchResult
  }

  // 2. Find all matching rules (prefix or exact)
  const { matchingDenyRules, matchingAskRules, matchingAllowRules } =
    matchingRulesForInput(input, toolPermissionContext, 'prefix')

  // 2a. Deny if command has a deny rule
  if (matchingDenyRules[0] !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${POWERSHELL_TOOL_NAME} with command ${command} has been denied.`,
      decisionReason: {
        type: 'rule',
        rule: matchingDenyRules[0],
      },
    }
  }

  // 2b. Ask if command has an ask rule
  if (matchingAskRules[0] !== undefined) {
    return {
      behavior: 'ask',
      message: createPermissionRequestMessage(POWERSHELL_TOOL_NAME),
      decisionReason: {
        type: 'rule',
        rule: matchingAskRules[0],
      },
    }
  }

  // 3. Allow if command had an exact match allow
  if (exactMatchResult.behavior === 'allow') {
    return exactMatchResult
  }

  // 4. Allow if command has an allow rule
  if (matchingAllowRules[0] !== undefined) {
    return {
      behavior: 'allow',
      updatedInput: input,
      decisionReason: {
        type: 'rule',
        rule: matchingAllowRules[0],
      },
    }
  }

  // 5. Passthrough since no rules match, will trigger permission prompt
  const decisionReason = {
    type: 'other' as const,
    reason: 'This command requires approval',
  }
  return {
    behavior: 'passthrough',
    message: createPermissionRequestMessage(
      POWERSHELL_TOOL_NAME,
      decisionReason,
    ),
    decisionReason,
    suggestions: suggestionForExactCommand(command),
  }
}

/**
 * Information about a sub-command for permission checking.
 */
type SubCommandInfo = {
  text: string
  element: ParsedCommandElement
  statement: ParsedPowerShellCommand['statements'][number] | null
  isSafeOutput: boolean
}

/**
 * Extract sub-commands that need independent permission checking from a parsed command.
 * Safe output cmdlets (Format-Table, Select-Object, etc.) are flagged but NOT
 * filtered out — step 4.4 still checks deny rules against them (deny always
 * wins), step 5 skips them for approval collection (they inherit the permission
 * of the preceding command).
 *
 * Also includes nested commands from control flow statements (if, for, foreach, etc.)
 * to ensure commands hidden inside control flow are checked.
 *
 * Returns sub-command info including both text and the parsed element for accurate
 * suggestion generation.
 *
 * v112: extractCommandName is no longer defined locally; references shared helper
 * (zyK at byte ~9553600) from parsePowerShellCommand module.
 */
async function getSubCommandsForPermissionCheck(
  parsed: ParsedPowerShellCommand,
  originalCommand: string,
): Promise<SubCommandInfo[]> {
  if (!parsed.valid) {
    // Return a fallback element for unparsed commands
    return [
      {
        text: originalCommand,
        element: {
          name: await _extractCommandName_V112(originalCommand),
          nameType: 'unknown',
          elementType: 'CommandAst',
          args: [],
          text: originalCommand,
        },
        statement: null,
        isSafeOutput: false,
      },
    ]
  }

  const subCommands: SubCommandInfo[] = []

  // Check direct commands in pipelines
  for (const statement of parsed.statements) {
    for (const cmd of statement.commands) {
      // Only check actual commands (CommandAst), not expressions
      if (cmd.elementType !== 'CommandAst') {
        continue
      }
      subCommands.push({
        text: cmd.text,
        element: cmd,
        statement,
        // SECURITY: nameType gate — scripts\\Out-Null strips to Out-Null and
        // would match SAFE_OUTPUT_CMDLETS, but PowerShell runs the .ps1 file.
        // isSafeOutput: true causes step 5 to filter this command out of the
        // approval list, so it would silently execute. See isAllowlistedCommand.
        // SECURITY: args.length === 0 gate — Out-Null -InputObject:(1 > /etc/x)
        // was filtered as safe-output (name-only) → step-5 subCommands empty →
        // auto-allow → redirection inside paren writes file. Only zero-arg
        // Out-String/Out-Null/Out-Host invocations are provably safe.
        isSafeOutput:
          cmd.nameType !== 'application' &&
          isSafeOutputCommand(cmd.name) &&
          cmd.args.length === 0,
      })
    }

    // Also check nested commands from control flow statements
    if (statement.nestedCommands) {
      for (const cmd of statement.nestedCommands) {
        subCommands.push({
          text: cmd.text,
          element: cmd,
          statement,
          isSafeOutput:
            cmd.nameType !== 'application' &&
            isSafeOutputCommand(cmd.name) &&
            cmd.args.length === 0,
        })
      }
    }
  }

  if (subCommands.length > 0) {
    return subCommands
  }

  // Fallback for commands with no sub-commands
  return [
    {
      text: originalCommand,
      element: {
        name: await _extractCommandName_V112(originalCommand),
        nameType: 'unknown',
        elementType: 'CommandAst',
        args: [],
        text: originalCommand,
      },
      statement: null,
      isSafeOutput: false,
    },
  ]
}

/**
 * Main permission check function for PowerShell tool.
 *
 * This function implements the full permission flow:
 * 1. Check exact match against deny/ask/allow rules
 * 2. Check prefix match against rules
 * 3. Run security check via powershellCommandIsSafe()
 * 4. Return appropriate PermissionResult
 *
 * @param input - The PowerShell tool input
 * @param context - The tool use context (for abort signal and session info)
 * @returns Promise resolving to PermissionResult
 */
export async function powershellToolHasPermission(
  input: PowerShellInput,
  context: ToolUseContext,
): Promise<PermissionResult> {
  const toolPermissionContext = context.getAppState().toolPermissionContext
  const command = input.command.trim()

  // Empty command check
  if (!command) {
    return {
      behavior: 'allow',
      updatedInput: input,
      decisionReason: {
        type: 'other',
        reason: 'Empty command is safe',
      },
    }
  }

  // Parse the command once and thread through all sub-functions
  const parsed = await parsePowerShellCommand(command)

  // SECURITY: Check deny/ask rules BEFORE parse validity check.
  // Deny rules operate on the raw command string and don't need the parsed AST.
  // This ensures explicit deny rules still block commands even when parsing fails.
  // 1. Check exact match first
  const exactMatchResult = powershellToolCheckExactMatchPermission(
    input,
    toolPermissionContext,
  )

  // Exact command was denied
  if (exactMatchResult.behavior === 'deny') {
    return exactMatchResult
  }

  // 2. Check prefix/wildcard rules
  const { matchingDenyRules, matchingAskRules } = matchingRulesForInput(
    input,
    toolPermissionContext,
    'prefix',
  )

  // 2a. Deny if command has a deny rule
  if (matchingDenyRules[0] !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${POWERSHELL_TOOL_NAME} with command ${command} has been denied.`,
      decisionReason: {
        type: 'rule',
        rule: matchingDenyRules[0],
      },
    }
  }

  // 2b. Ask if command has an ask rule — DEFERRED into decisions[].
  // Previously this early-returned before sub-command deny checks ran, so
  // `Get-Process; Invoke-Expression evil` with ask(Get-Process:*) +
  // deny(Invoke-Expression:*) would show the ask dialog and the deny never
  // fired. Now: store the ask, push into decisions[] after parse succeeds.
  // If parse fails, returned before the parse-error ask (preserves the
  // rule-attributed decisionReason when pwsh is unavailable).
  let preParseAskDecision: PermissionResult | null = null
  if (matchingAskRules[0] !== undefined) {
    preParseAskDecision = {
      behavior: 'ask',
      message: createPermissionRequestMessage(POWERSHELL_TOOL_NAME),
      decisionReason: {
        type: 'rule',
        rule: matchingAskRules[0],
      },
    }
  }

  // Block UNC paths — reading from UNC paths can trigger network requests
  // and leak NTLM/Kerberos credentials. DEFERRED into decisions[].
  // The raw-string UNC check must not early-return before sub-command deny
  // (step 4+). Same fix as 2b above.
  if (preParseAskDecision === null && containsVulnerableUncPath(command)) {
    preParseAskDecision = {
      behavior: 'ask',
      message:
        'Command contains a UNC path that could trigger network requests',
    }
  }

  // 2c. Exact allow rules short-circuit here ONLY when parsing failed AND
  // no pre-parse ask (2b prefix or UNC) is pending. Converting 2b/UNC from
  // early-return to deferred-assign meant 2c fired before L648 consumed
  // preParseAskDecision — silently overriding the ask with allow.
  // This ensures user-configured exact allow rules work even when pwsh is
  // unavailable. When parsing succeeds, the exact allow check is deferred to
  // after step 4.4 (sub-command deny/ask) — matching BashTool's ordering.
  //
  // SECURITY (parse-failed branch): the nameType guard in step 5 lives
  // inside the sub-command loop, which only runs when parsed.valid.
  // This is the !parsed.valid escape hatch. classifyCommandName is a pure
  // string function (no AST needed).
  if (
    exactMatchResult.behavior === 'allow' &&
    !parsed.valid &&
    preParseAskDecision === null &&
    classifyCommandName(command.split(/\s+/)[0] ?? '') !== 'application'
  ) {
    return exactMatchResult
  }

  // 0. Check if command can be parsed - if not, require approval but don't suggest persisting
  // NOTE: This check is intentionally AFTER deny/ask rules so explicit rules still work
  // even when the parser fails (e.g., pwsh unavailable).
  if (!parsed.valid) {
    // SECURITY: Fallback sub-command deny scan for parse-failed path.
    // The sub-command deny loop at step 4+ needs the AST; when parsing fails,
    // we'd return 'ask' without ever checking sub-command deny rules.
    // This fallback splits on PowerShell separators/grouping and runs each
    // fragment through the SAME rule matcher as step 2a (prefix deny).
    //
    // v112 change: strips PS block comments (/* <# ... #> */) before splitting,
    // and uses replaceAll for backtick stripping.
    const backtickStripped = command
      .replace(/<#[\s\S]*?#>/g, ' ')
      .replace(/`[\r\n]+\s*/g, '')
      .replaceAll('`', '')
    for (const fragment of backtickStripped.split(/[;|\n\r{}()&]+/)) {
      const trimmedFrag = fragment.trim()
      if (!trimmedFrag) continue // skip empty fragments
      // v112 change: the fragment normalization loop is restructured.
      // Split into tokens and process each token position.
      const tokens = trimmedFrag.split(/\s+/)
      for (let i = 0; i < tokens.length; i++) {
        const rawTok = tokens[i]!.replace(/^['"]|['"]$/g, '')
        if (!rawTok) continue
        // SECURITY: parse-independent dangerous-removal hard-deny.
        if (resolveToCanonical(rawTok) === 'remove-item') {
          for (const arg of tokens.slice(i + 1)) {
            if (PS_TOKENIZER_DASH_CHARS.has(arg[0] ?? '')) continue
            if (isDangerousRemovalRawPath(arg)) {
              return dangerousRemovalDeny(arg)
            }
          }
        }
        const normalizedFrag = [rawTok, ...tokens.slice(i + 1)].join(' ')
        const { matchingDenyRules: fragDenyRules } = matchingRulesForInput(
          { command: normalizedFrag },
          toolPermissionContext,
          'prefix',
        )
        if (fragDenyRules[0] !== undefined) {
          return {
            behavior: 'deny',
            message: `Permission to use ${POWERSHELL_TOOL_NAME} with command ${command} has been denied.`,
            decisionReason: { type: 'rule', rule: fragDenyRules[0] },
          }
        }
      }
    }
    // Preserve pre-parse ask messaging when parse fails.
    if (preParseAskDecision !== null) {
      return preParseAskDecision
    }
    const decisionReason = {
      type: 'other' as const,
      reason: `Command contains malformed syntax that cannot be parsed: ${parsed.errors[0]?.message ?? 'unknown error'}`,
    }
    return {
      behavior: 'ask',
      decisionReason,
      message: createPermissionRequestMessage(
        POWERSHELL_TOOL_NAME,
        decisionReason,
      ),
      // No suggestions - don't recommend persisting invalid syntax
    }
  }

  // ========================================================================
  // COLLECT-THEN-REDUCE: post-parse decisions (deny > ask > allow > passthrough)
  // ========================================================================
  // Ported from bashPermissions.ts:1446-1472. Every post-parse check pushes
  // its decision into a single array; a single reduce applies precedence.
  // This structurally closes the ask-before-deny bug class.
  //
  // Pre-parse deny checks above (exact/prefix deny) stay sequential: they
  // fire even when pwsh is unavailable. Pre-parse asks (prefix ask, raw UNC)
  // are now deferred here so sub-command deny (step 4) beats them.

  // Gather sub-commands once (used by decisions 3, 4, and fallthrough step 5).
  const allSubCommands = await getSubCommandsForPermissionCheck(parsed, command)

  const decisions: PermissionResult[] = []

  // Decision: deferred pre-parse ask (2b prefix ask or UNC path).
  // Pushed first so its message wins over later asks (first-of-behavior wins),
  // but the reduce ensures any deny in decisions[] still beats it.
  if (preParseAskDecision !== null) {
    decisions.push(preParseAskDecision)
  }

  // Decision: security check — was step 3.
  // powershellCommandIsSafe returns 'ask' for subexpressions, script blocks,
  // encoded commands, download cradles, etc. Only 'ask' | 'passthrough'.
  const safetyResult = powershellCommandIsSafe(command, parsed)
  if (safetyResult.behavior !== 'passthrough') {
    const decisionReason: PermissionDecisionReason = {
      type: 'other' as const,
      reason:
        safetyResult.behavior === 'ask' && safetyResult.message
          ? safetyResult.message
          : 'This command contains patterns that could pose security risks and requires approval',
    }
    decisions.push({
      behavior: 'ask',
      message: createPermissionRequestMessage(
        POWERSHELL_TOOL_NAME,
        decisionReason,
      ),
      decisionReason,
      suggestions: suggestionForExactCommand(command),
    })
  }

  // Decision: using statements / script requirements — invisible to AST block walk.
  // `using module ./evil.psm1` loads and executes a module's top-level script body;
  // `using assembly ./evil.dll` loads a .NET assembly (module initializers run).
  // `#Requires -Modules <name>` triggers module loading from PSModulePath.
  if (parsed.hasUsingStatements) {
    const decisionReason: PermissionDecisionReason = {
      type: 'other' as const,
      reason:
        'Command contains a `using` statement that may load external code (module or assembly)',
    }
    decisions.push({
      behavior: 'ask',
      message: createPermissionRequestMessage(
        POWERSHELL_TOOL_NAME,
        decisionReason,
      ),
      decisionReason,
      suggestions: suggestionForExactCommand(command),
    })
  }
  if (parsed.hasScriptRequirements) {
    const decisionReason: PermissionDecisionReason = {
      type: 'other' as const,
      reason:
        'Command contains a `#Requires` directive that may trigger module loading',
    }
    decisions.push({
      behavior: 'ask',
      message: createPermissionRequestMessage(
        POWERSHELL_TOOL_NAME,
        decisionReason,
      ),
      decisionReason,
      suggestions: suggestionForExactCommand(command),
    })
  }

  // Decision: background job operator — v112 addition.
  // `& { ... }` or the background-job `& script.ps1` spawns a child
  // PowerShell process that cannot be validated statically.
  if (parsed.hasBackgroundJob) {
    const decisionReason: PermissionDecisionReason = {
      type: 'other' as const,
      reason:
        'Command uses the background job operator (`&`) which spawns a child PowerShell process',
    }
    decisions.push({
      behavior: 'ask',
      message: createPermissionRequestMessage(
        POWERSHELL_TOOL_NAME,
        decisionReason,
      ),
      decisionReason,
      suggestions: suggestionForExactCommand(command),
    })
  }

  // Decision: resolved-arg provider/UNC scan.
  // Provider paths (env:, HKLM:, function:) access non-filesystem resources.
  // UNC paths can leak NTLM/Kerberos credentials on Windows.
  // Provider prefix matches both the short form (`env:`, `HKLM:`) and the
  // fully-qualified form (`Microsoft.PowerShell.Core\Registry::HKLM\...`).
  const NON_FS_PROVIDER_PATTERN =
    /^(?:[\w.]+\\)?(env|hklm|hkcu|function|alias|variable|cert|wsman|registry)::?/i
  function extractProviderPathFromArg(arg: string): string {
    // Handle colon parameter syntax: -Path:env:HOME → extract 'env:HOME'.
    // SECURITY: PowerShell's tokenizer accepts en-dash/em-dash/horizontal-bar
    // (U+2013/2014/2015) as parameter prefixes.
    let s = arg
    if (s.length > 0 && PS_TOKENIZER_DASH_CHARS.has(s[0]!)) {
      const colonIdx = s.indexOf(':', 1) // skip the leading dash
      if (colonIdx > 0) {
        s = s.substring(colonIdx + 1)
      }
    }
    // Strip backtick escapes before matching.
    // v112: uses replaceAll instead of .replace(/`/g, "")
    return s.replaceAll('`', '')
  }
  function providerOrUncDecisionForArg(arg: string): PermissionResult | null {
    const value = extractProviderPathFromArg(arg)
    if (NON_FS_PROVIDER_PATTERN.test(value)) {
      return {
        behavior: 'ask',
        message: `Command argument '${arg}' uses a non-filesystem provider path and requires approval`,
      }
    }
    if (containsVulnerableUncPath(value)) {
      return {
        behavior: 'ask',
        message: `Command argument '${arg}' contains a UNC path that could trigger network requests`,
      }
    }
    return null
  }
  providerScan: for (const statement of parsed.statements) {
    for (const cmd of statement.commands) {
      if (cmd.elementType !== 'CommandAst') continue
      for (const arg of cmd.args) {
        const decision = providerOrUncDecisionForArg(arg)
        if (decision !== null) {
          decisions.push(decision)
          break providerScan
        }
      }
    }
    if (statement.nestedCommands) {
      for (const cmd of statement.nestedCommands) {
        for (const arg of cmd.args) {
          const decision = providerOrUncDecisionForArg(arg)
          if (decision !== null) {
            decisions.push(decision)
            break providerScan
          }
        }
      }
    }
  }

  // Decision: per-sub-command deny/ask rules.
  // Each sub-command produces at most one decision (deny or ask). Deny rules
  // on LATER sub-commands still beat ask rules on EARLIER ones via the reduce.
  //
  // SECURITY: Always build a canonical command string from AST-derived data
  // (element.name + space-joined args) and check rules against it too.
  for (const { text: subCmd, element } of allSubCommands) {
    const canonicalSubCmd =
      element.name !== '' ? [element.name, ...element.args].join(' ') : null

    const subInput = { command: subCmd }
    const { matchingDenyRules: subDenyRules, matchingAskRules: subAskRules } =
      matchingRulesForInput(subInput, toolPermissionContext, 'prefix')
    let matchedDenyRule = subDenyRules[0]
    let matchedAskRule = subAskRules[0]

    if (matchedDenyRule === undefined && canonicalSubCmd !== null) {
      const {
        matchingDenyRules: canonicalDenyRules,
        matchingAskRules: canonicalAskRules,
      } = matchingRulesForInput(
        { command: canonicalSubCmd },
        toolPermissionContext,
        'prefix',
      )
      matchedDenyRule = canonicalDenyRules[0]
      if (matchedAskRule === undefined) {
        matchedAskRule = canonicalAskRules[0]
      }
    }

    if (matchedDenyRule !== undefined) {
      decisions.push({
        behavior: 'deny',
        message: `Permission to use ${POWERSHELL_TOOL_NAME} with command ${command} has been denied.`,
        decisionReason: {
          type: 'rule',
          rule: matchedDenyRule,
        },
      })
    } else if (matchedAskRule !== undefined) {
      decisions.push({
        behavior: 'ask',
        message: createPermissionRequestMessage(POWERSHELL_TOOL_NAME),
        decisionReason: {
          type: 'rule',
          rule: matchedAskRule,
        },
      })
    }
  }

  // Decision: cd+git compound guard.
  // When cd/Set-Location is paired with git, don't allow without prompting —
  // cd to a malicious directory makes git dangerous (fake hooks, bare repo
  // attacks).
  const hasCdSubCommand =
    allSubCommands.length > 1 &&
    allSubCommands.some(({ element }) => isCwdChangingCmdlet(element.name))
  // Symlink-create compound guard: when the compound creates a filesystem link,
  // subsequent writes through that link land outside the validator's view.
  const hasSymlinkCreate =
    allSubCommands.length > 1 &&
    allSubCommands.some(({ element }) => isSymlinkCreatingCommand(element))
  const hasGitSubCommand = allSubCommands.some(
    ({ element }) => resolveToCanonical(element.name) === 'git',
  )
  if (hasCdSubCommand && hasGitSubCommand) {
    decisions.push({
      behavior: 'ask',
      message:
        'Compound commands with cd/Set-Location and git require approval to prevent bare repository attacks',
    })
  }

  // Decision: bare-git-repo guard — bash parity.
  if (hasGitSubCommand && isCurrentDirectoryBareGitRepo()) {
    decisions.push({
      behavior: 'ask',
      message:
        'Git command in a directory with bare-repository indicators (HEAD, objects/, refs/ in cwd without .git/HEAD). Git may execute hooks from cwd.',
    })
  }

  // Decision: git-internal-paths write guard — bash parity.
  if (hasGitSubCommand) {
    const writesToGitInternal = allSubCommands.some(
      ({ element, statement }) => {
        // Redirection targets on this sub-command
        for (const r of element.redirections ?? []) {
          if (isGitInternalPathPS(r.target)) return true
        }
        // Write cmdlet args
        const canonical = resolveToCanonical(element.name)
        if (!GIT_SAFETY_WRITE_CMDLETS.has(canonical)) return false
        if (
          element.args
            .flatMap(a => a.split(','))
            .some(a => isGitInternalPathPS(a))
        ) {
          return true
        }
        // Pipeline input
        if (statement !== null) {
          for (const c of statement.commands) {
            if (c.elementType === 'CommandAst') continue
            if (isGitInternalPathPS(c.text)) return true
          }
        }
        return false
      },
    )
    // Also check top-level file redirections
    const redirWritesToGitInternal = getFileRedirections(parsed).some(r =>
      isGitInternalPathPS(r.target),
    )
    if (writesToGitInternal || redirWritesToGitInternal) {
      decisions.push({
        behavior: 'ask',
        message:
          'Command writes to a git-internal path (HEAD, objects/, refs/, hooks/, .git/) and runs git. This could plant a malicious hook that git then executes.',
      })
    }
  }

  // .git/ writes are dangerous even WITHOUT a git subcommand.
  {
    const found =
      allSubCommands.some(({ element }) => {
        for (const r of element.redirections ?? []) {
          if (isDotGitPathPS(r.target)) return true
        }
        const canonical = resolveToCanonical(element.name)
        if (!GIT_SAFETY_WRITE_CMDLETS.has(canonical)) return false
        return element.args.flatMap(a => a.split(',')).some(isDotGitPathPS)
      }) || getFileRedirections(parsed).some(r => isDotGitPathPS(r.target))
    if (found) {
      decisions.push({
        behavior: 'ask',
        message:
          'Command writes to .git/ — hooks or config planted there execute on the next git operation.',
      })
    }
  }

  // Decision: archive extractor compound guard — v112 change.
  // In v88, this was inside the `if (hasGitSubCommand)` block.
  // In v112, this runs for ALL compounds (not just git ones), with a
  // different message depending on whether there is a git subcommand.
  // Name matched against basename to handle qualified paths.
  if (
    allSubCommands.some(({ element }) => {
      const lower = element.name.toLowerCase()
      const basename = lower.slice(
        Math.max(lower.lastIndexOf('\\'), lower.lastIndexOf('/')) + 1,
      )
      return GIT_SAFETY_ARCHIVE_EXTRACTORS.has(basename)
    }) &&
    allSubCommands.length > 1
  ) {
    decisions.push({
      behavior: 'ask',
      message: hasGitSubCommand
        ? 'Compound command extracts an archive and runs git. Archive contents may plant bare-repository indicators (HEAD, hooks/, refs/) that git then treats as the repository root.'
        : 'Compound command extracts an archive followed by other commands. Archive contents (symlinks, config files) cannot be validated and may redirect subsequent path operations.',
    })
  }

  // Decision: path constraints.
  // The deny-capable check that was being masked by earlier asks. Returns
  // 'deny' when an Edit(...) deny rule matches an extracted path, 'ask' for
  // paths outside working dirs, or 'passthrough'.
  const pathResult = checkPathConstraints(
    input,
    parsed,
    toolPermissionContext,
    hasCdSubCommand,
  )
  if (pathResult.behavior !== 'passthrough') {
    decisions.push(pathResult)
  }

  // Decision: exact allow (parse-succeeded case).
  // SECURITY: nameType gate — mirrors the parse-failed guard.
  // SECURITY: argLeaksValue gate (finding #32).
  if (
    exactMatchResult.behavior === 'allow' &&
    allSubCommands[0] !== undefined &&
    allSubCommands.every(
      sc =>
        sc.element.nameType !== 'application' &&
        !argLeaksValue(sc.text, sc.element),
    )
  ) {
    decisions.push(exactMatchResult)
  }

  // Decision: read-only allowlist.
  // Mirrors Bash auto-allow for ls, cat, git status, etc.
  if (isReadOnlyCommand(command, parsed)) {
    decisions.push({
      behavior: 'allow',
      updatedInput: input,
      decisionReason: {
        type: 'other',
        reason: 'Command is read-only and safe to execute',
      },
    })
  }

  // Decision: file redirections.
  // Redirections (>, >>, 2>) write to arbitrary paths.
  const fileRedirections = getFileRedirections(parsed)
  if (fileRedirections.length > 0) {
    decisions.push({
      behavior: 'ask',
      message:
        'Command contains file redirections that could write to arbitrary paths',
      suggestions: suggestionForExactCommand(command),
    })
  }

  // Decision: mode-specific handling (acceptEdits).
  const modeResult = checkPermissionMode(input, parsed, toolPermissionContext)
  if (modeResult.behavior !== 'passthrough') {
    decisions.push(modeResult)
  }

  // REDUCE: deny > ask > allow > passthrough. First of each behavior type
  // wins (preserves step-order messaging for single-check cases). If nothing
  // decided, fall through to step 5 per-sub-command approval collection.
  const deniedDecision = decisions.find(d => d.behavior === 'deny')
  if (deniedDecision !== undefined) {
    return deniedDecision
  }
  const askDecision = decisions.find(d => d.behavior === 'ask')
  if (askDecision !== undefined) {
    return askDecision
  }
  const allowDecision = decisions.find(d => d.behavior === 'allow')
  if (allowDecision !== undefined) {
    return allowDecision
  }

  // 5. Pipeline/statement splitting: check each sub-command independently.
  // This prevents a prefix rule like "Get-Process:*" from silently allowing
  // piped commands like "Get-Process | Stop-Process -Force".

  // Filter out safe output cmdlets and cd/Set-Location to CWD.
  const subCommands = allSubCommands.filter(({ element, isSafeOutput }) => {
    if (isSafeOutput) {
      return false
    }
    // SECURITY: nameType gate — sixth location.
    if (element.nameType === 'application') {
      return true
    }
    const canonical = resolveToCanonical(element.name)
    if (canonical === 'set-location' && element.args.length > 0) {
      const target = element.args.find(
        a => a.length === 0 || !PS_TOKENIZER_DASH_CHARS.has(a[0]!),
      )
      if (target && resolve(getCwd(), target) === getCwd()) {
        return false
      }
    }
    return true
  })

  const subCommandsNeedingApproval: string[] = []
  // Track statements whose sub-commands were PUSHED to subCommandsNeedingApproval.
  // SECURITY: track on PUSH only, not on loop entry.
  const statementsSeenInLoop = new Set<
    ParsedPowerShellCommand['statements'][number]
  >()

  for (const { text: subCmd, element, statement } of subCommands) {
    const subInput = { command: subCmd }
    const subResult = powershellToolCheckPermission(
      subInput,
      toolPermissionContext,
    )

    if (subResult.behavior === 'deny') {
      return {
        behavior: 'deny',
        message: `Permission to use ${POWERSHELL_TOOL_NAME} with command ${command} has been denied.`,
        decisionReason: subResult.decisionReason,
      }
    }

    if (subResult.behavior === 'ask') {
      if (statement !== null) {
        statementsSeenInLoop.add(statement)
      }
      subCommandsNeedingApproval.push(subCmd)
      continue
    }

    // Explicitly allowed by a user rule — BUT NOT for applications/scripts.
    // SECURITY: INPUT-side stripModulePrefix is unconditional, so
    // `scripts\Get-Content /etc/shadow` strips to 'Get-Content' and matches
    // an allow rule `Get-Content:*`. Without the nameType guard, continue
    // skips all checks and the local script runs.
    // SECURITY: Also skip when the compound contains a symlink-creating command.
    if (
      subResult.behavior === 'allow' &&
      element.nameType !== 'application' &&
      !hasSymlinkCreate
    ) {
      // SECURITY: User allow rule asserts the cmdlet is safe, NOT that
      // arbitrary variable expansion through it is safe (finding #32).
      if (argLeaksValue(subCmd, element)) {
        if (statement !== null) {
          statementsSeenInLoop.add(statement)
        }
        subCommandsNeedingApproval.push(subCmd)
        continue
      }
      continue
    }
    if (subResult.behavior === 'allow') {
      // nameType === 'application' with a matching allow rule: the rule was
      // written for a cmdlet, but this is a script/executable masquerading.
      // Don't continue; fall through to approval (NOT deny).
      if (statement !== null) {
        statementsSeenInLoop.add(statement)
      }
      subCommandsNeedingApproval.push(subCmd)
      continue
    }

    // SECURITY: fail-closed gate. Do NOT take the allowlist shortcut unless
    // the parent statement is a PipelineAst where every element is a CommandAst.
    // SECURITY: Also skip when the compound contains a cwd-changing cmdlet
    // (finding #27 — cd+read gap) or symlink-creating command.
    if (
      statement !== null &&
      !hasCdSubCommand &&
      !hasSymlinkCreate &&
      isProvablySafeStatement(statement) &&
      isAllowlistedCommand(element, subCmd)
    ) {
      continue
    }

    // Check per-sub-command acceptEdits mode (BashTool parity).
    if (statement !== null && !hasCdSubCommand && !hasSymlinkCreate) {
      const subModeResult = checkPermissionMode(
        { command: subCmd },
        {
          valid: true,
          errors: [],
          variables: parsed.variables,
          hasStopParsing: parsed.hasStopParsing,
          originalCommand: subCmd,
          statements: [statement],
        },
        toolPermissionContext,
      )
      if (subModeResult.behavior === 'allow') {
        continue
      }
    }

    // Not allowlisted, no mode auto-allow, and no explicit rule — needs approval
    if (statement !== null) {
      statementsSeenInLoop.add(statement)
    }
    subCommandsNeedingApproval.push(subCmd)
  }

  // SECURITY: fail-closed gate (second half). The step-5 loop above only
  // iterates sub-commands that getSubCommandsForPermissionCheck surfaced
  // AND survived the safe-output filter. Statements that produce zero
  // CommandAst sub-commands (bare $env:SECRET) or whose only sub-commands
  // were filtered as safe-output ($env:X | Out-String) never enter the loop.
  for (const stmt of parsed.statements) {
    if (!isProvablySafeStatement(stmt) && !statementsSeenInLoop.has(stmt)) {
      subCommandsNeedingApproval.push(stmt.text)
    }
  }

  if (subCommandsNeedingApproval.length === 0) {
    // SECURITY: empty-list auto-allow is only safe when there's nothing
    // unverifiable. If the pipeline has script blocks, every safe-output
    // cmdlet was filtered, but the block content wasn't verified.
    if (deriveSecurityFlags(parsed).hasScriptBlocks) {
      return {
        behavior: 'ask',
        message: createPermissionRequestMessage(POWERSHELL_TOOL_NAME),
        decisionReason: {
          type: 'other',
          reason:
            'Pipeline consists of output-formatting cmdlets with script blocks — block content cannot be verified',
        },
      }
    }
    return {
      behavior: 'allow',
      updatedInput: input,
      decisionReason: {
        type: 'other',
        reason: 'All pipeline commands are individually allowed',
      },
    }
  }

  // 6. Some sub-commands need approval — build suggestions
  const decisionReason = {
    type: 'other' as const,
    reason: 'This command requires approval',
  }

  const pendingSuggestions: PermissionUpdate[] = []
  for (const subCmd of subCommandsNeedingApproval) {
    pendingSuggestions.push(...suggestionForExactCommand(subCmd))
  }

  return {
    behavior: 'passthrough',
    message: createPermissionRequestMessage(
      POWERSHELL_TOOL_NAME,
      decisionReason,
    ),
    decisionReason,
    suggestions: pendingSuggestions,
  }
}

// =============================================================================
// v112 stubs — symbols whose v112 identity could not be fully resolved.
// =============================================================================

/**
 * TODO(lift): _extractCommandName_V112 — byte ~9553600.
 * In v112, getSubCommandsForPermissionCheck calls zyK() instead of a
 * locally-defined extractCommandName(). zyK is the shared command-name
 * extractor from the parsePowerShellCommand module. The implementation below
 * mirrors the v88 shape. Confirm against the lifted parser module when available.
 */
async function _extractCommandName_V112(command: string): Promise<string> {
  const trimmed = command.trim()
  if (!trimmed) {
    return ''
  }
  const parsed = await parsePowerShellCommand(trimmed)
  const names = getAllCommandNames(parsed)
  return names[0] ?? ''
}
