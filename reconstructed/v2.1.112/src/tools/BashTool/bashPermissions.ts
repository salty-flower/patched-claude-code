import { APIUserAbortError } from '@anthropic-ai/sdk'
import type { z } from 'zod/v4'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from '../../services/analytics/index.js'
import type { ToolPermissionContext, ToolUseContext } from '../../Tool.js'
import type { PendingClassifierCheck } from '../../types/permissions.js'
import { count } from '../../utils/array.js'
import {
  type CommandPrefixResult,
  extractOutputRedirections,
  getCommandSubcommandPrefix,
  splitCommand_DEPRECATED,
} from '../../utils/bash/commands.js'
import { tryParseShellCommand } from '../../utils/bash/shellQuote.js'
import type { SimpleCommand } from '../../utils/bash/ast.js'
import { getCwd } from '../../utils/cwd.js'
import { logForDebugging } from '../../utils/debug.js'
import { isEnvTruthy } from '../../utils/envUtils.js'
import { AbortError } from '../../utils/errors.js'
import type {
  ClassifierBehavior,
  ClassifierResult,
} from '../../utils/permissions/bashClassifier.js'
import {
  classifyBashCommand,
  getBashPromptAllowDescriptions,
  getBashPromptAskDescriptions,
  getBashPromptDenyDescriptions,
  isClassifierPermissionsEnabled,
} from '../../utils/permissions/bashClassifier.js'
import type {
  PermissionDecisionReason,
  PermissionResult,
} from '../../utils/permissions/PermissionResult.js'
import type {
  PermissionRule,
  PermissionRuleValue,
} from '../../utils/permissions/PermissionRule.js'
import { extractRules } from '../../utils/permissions/PermissionUpdate.js'
import type { PermissionUpdate } from '../../utils/permissions/PermissionUpdateSchema.js'
import { permissionRuleValueToString } from '../../utils/permissions/permissionRuleParser.js'
import {
  createPermissionRequestMessage,
  getRuleByContentsForTool,
} from '../../utils/permissions/permissions.js'
import {
  parsePermissionRule,
  type ShellPermissionRule,
  matchWildcardPattern as sharedMatchWildcardPattern,
  permissionRuleExtractPrefix as sharedPermissionRuleExtractPrefix,
  suggestionForExactCommand as sharedSuggestionForExactCommand,
  suggestionForPrefix as sharedSuggestionForPrefix,
} from '../../utils/permissions/shellRuleMatching.js'
import { getPlatform } from '../../utils/platform.js'
import { SandboxManager } from '../../utils/sandbox/sandbox-adapter.js'
import { jsonStringify } from '../../utils/slowOperations.js'
import { windowsPathToPosixPath } from '../../utils/windowsPaths.js'
import { BashTool } from './BashTool.js'
import { checkCommandOperatorPermissions } from './bashCommandHelpers.js'
import {
  bashCommandIsSafeAsync_DEPRECATED,
  stripSafeHeredocSubstitutions,
} from './bashSecurity.js'
import { checkPermissionMode } from './modeValidation.js'
import { checkPathConstraints } from './pathValidation.js'
import { checkSedConstraints } from './sedValidation.js'
import { shouldUseSandbox } from './shouldUseSandbox.js'

// DCE cliff note: keep aliases as top-level const rebindings instead of
// `import { X as Y }` to stay under Bun's feature() DCE complexity budget.
const bashCommandIsSafeAsync = bashCommandIsSafeAsync_DEPRECATED
const splitCommand = splitCommand_DEPRECATED

// Env-var assignment prefix (VAR=value). Shared across while-loops that
// skip safe env vars before extracting the command name.
const ENV_VAR_ASSIGN_RE = /^[A-Za-z_]\w*=/

// CC-643: Cap subcommand fanout for security checks.
export const MAX_SUBCOMMANDS_FOR_SECURITY_CHECK = 50

// GH#11380: Cap the number of per-subcommand rules suggested for compound
// commands.
export const MAX_SUGGESTED_RULES_FOR_COMPOUND = 5

/**
 * [ANT-ONLY] Log classifier evaluation results for analysis.
 */
function logClassifierResultForAnts(
  command: string,
  behavior: ClassifierBehavior,
  descriptions: string[],
  result: ClassifierResult,
): void {
  if (process.env.USER_TYPE !== 'ant') {
    return
  }

  logEvent('tengu_internal_bash_classifier_result', {
    behavior:
      behavior as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    descriptions: jsonStringify(
      descriptions,
    ) as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    matches: result.matches,
    matchedDescription: (result.matchedDescription ??
      '') as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    confidence:
      result.confidence as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    reason:
      result.reason as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    // Note: command contains code/filepaths - this is ANT-ONLY so it's OK
    command:
      command as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  })
}

/**
 * Extract a stable command prefix (command + subcommand) from a raw command string.
 * Skips leading env var assignments only if they are in SAFE_ENV_VARS.
 * Returns null if a non-safe env var is encountered or if the second token
 * doesn't look like a subcommand.
 */
export function getSimpleCommandPrefix(command: string): string | null {
  const tokens = command.trim().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return null

  let i = 0
  while (i < tokens.length && ENV_VAR_ASSIGN_RE.test(tokens[i]!)) {
    const varName = tokens[i]!.split('=')[0]!
    if (!SAFE_ENV_VARS.has(varName)) {
      return null
    }
    i++
  }

  const remaining = tokens.slice(i)
  if (remaining.length < 2) return null
  const subcmd = remaining[1]!
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(subcmd)) return null
  return remaining.slice(0, 2).join(' ')
}

// Bare-prefix suggestions like `bash:*` would allow arbitrary code.
const BARE_SHELL_PREFIXES = new Set([
  'sh',
  'bash',
  'zsh',
  'fish',
  'csh',
  'tcsh',
  'ksh',
  'dash',
  'cmd',
  'powershell',
  'pwsh',
  // wrappers that exec their args as a command
  'env',
  'xargs',
  // SECURITY: checkSemantics strips these wrappers; suggesting prefix rules
  // for them would be approximately Bash(*) -- block them from being suggested.
  'nice',
  'stdbuf',
  'nohup',
  'timeout',
  'time',
  // privilege escalation
  'sudo',
  'doas',
  'pkexec',
])

/**
 * UI-only fallback: extract the first word alone when getSimpleCommandPrefix
 * declines.
 */
export function getFirstWordPrefix(command: string): string | null {
  const tokens = command.trim().split(/\s+/).filter(Boolean)

  let i = 0
  while (i < tokens.length && ENV_VAR_ASSIGN_RE.test(tokens[i]!)) {
    const varName = tokens[i]!.split('=')[0]!
    if (!SAFE_ENV_VARS.has(varName)) {
      return null
    }
    i++
  }

  const cmd = tokens[i]
  if (!cmd) return null
  if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(cmd)) return null
  if (BARE_SHELL_PREFIXES.has(cmd)) return null
  return cmd
}

function suggestionForExactCommand(command: string): PermissionUpdate[] {
  const heredocPrefix = extractPrefixBeforeHeredoc(command)
  if (heredocPrefix) {
    return sharedSuggestionForPrefix(BashTool.name, heredocPrefix)
  }

  if (command.includes('\n')) {
    // v112: uses split('\n')[0] directly (not .split('\n')[0]!.trim())
    const firstLine = command.split('\n')[0]!.trim()
    if (firstLine) {
      return sharedSuggestionForPrefix(BashTool.name, firstLine)
    }
  }

  const prefix = getSimpleCommandPrefix(command)
  if (prefix) {
    return sharedSuggestionForPrefix(BashTool.name, prefix)
  }

  return sharedSuggestionForExactCommand(BashTool.name, command)
}

/**
 * If the command contains a heredoc (<<), extract the command prefix before it.
 */
function extractPrefixBeforeHeredoc(command: string): string | null {
  if (!command.includes('<<')) return null

  const idx = command.indexOf('<<')
  if (idx <= 0) return null

  const before = command.substring(0, idx).trim()
  if (!before) return null

  const prefix = getSimpleCommandPrefix(before)
  if (prefix) return prefix

  const tokens = before.split(/\s+/).filter(Boolean)
  let i = 0
  while (i < tokens.length && ENV_VAR_ASSIGN_RE.test(tokens[i]!)) {
    const varName = tokens[i]!.split('=')[0]!
    if (!SAFE_ENV_VARS.has(varName)) {
      return null
    }
    i++
  }
  if (i >= tokens.length) return null
  return tokens.slice(i, i + 2).join(' ') || null
}

function suggestionForPrefix(prefix: string): PermissionUpdate[] {
  return sharedSuggestionForPrefix(BashTool.name, prefix)
}

/**
 * Extract prefix from legacy :* syntax (e.g., "npm:*" -> "npm")
 */
export const permissionRuleExtractPrefix = sharedPermissionRuleExtractPrefix

/**
 * Match a command against a wildcard pattern (case-sensitive for Bash).
 */
export function matchWildcardPattern(
  pattern: string,
  command: string,
): boolean {
  return sharedMatchWildcardPattern(pattern, command)
}

/**
 * Parse a permission rule into a structured rule object.
 */
export const bashPermissionRule: (
  permissionRule: string,
) => ShellPermissionRule = parsePermissionRule

/**
 * Whitelist of environment variables that are safe to strip from commands.
 * These variables CANNOT execute code or load libraries.
 *
 * v112: Added COLUMNS, LINES, CLICOLOR, CLICOLOR_FORCE, CI, DEBIAN_FRONTEND,
 * GIT_TERMINAL_PROMPT compared to v88.
 *
 * SECURITY: These must NEVER be added to the whitelist:
 * - PATH, LD_PRELOAD, LD_LIBRARY_PATH, DYLD_* (execution/library loading)
 * - PYTHONPATH, NODE_PATH, CLASSPATH, RUBYLIB (module loading)
 * - GOFLAGS, RUSTFLAGS, NODE_OPTIONS (can contain code execution flags)
 * - HOME, TMPDIR, SHELL, BASH_ENV (affect system behavior)
 */
const SAFE_ENV_VARS = new Set([
  // Go - build/runtime settings only
  'GOEXPERIMENT',
  'GOOS',
  'GOARCH',
  'CGO_ENABLED',
  'GO111MODULE',

  // Rust - logging/debugging only
  'RUST_BACKTRACE',
  'RUST_LOG',

  // Node - environment name only (not NODE_OPTIONS!)
  'NODE_ENV',

  // Python - behavior flags only (not PYTHONPATH!)
  'PYTHONUNBUFFERED',
  'PYTHONDONTWRITEBYTECODE',

  // Pytest - test configuration
  'PYTEST_DISABLE_PLUGIN_AUTOLOAD',
  'PYTEST_DEBUG',

  // API keys and authentication
  'ANTHROPIC_API_KEY',

  // Locale and character encoding
  'LANG',
  'LANGUAGE',
  'LC_ALL',
  'LC_CTYPE',
  'LC_TIME',
  'CHARSET',

  // Terminal and display
  'TERM',
  'COLORTERM',
  'NO_COLOR',
  'FORCE_COLOR',
  'TZ',

  // Color configuration for various tools
  'LS_COLORS',
  'LSCOLORS',
  'GREP_COLOR',
  'GREP_COLORS',
  'GCC_COLORS',

  // Display formatting
  'TIME_STYLE',
  'BLOCK_SIZE',
  'BLOCKSIZE',

  // v112: new additions
  'COLUMNS',
  'LINES',
  'CLICOLOR',
  'CLICOLOR_FORCE',
  'CI',
  'DEBIAN_FRONTEND',
  'GIT_TERMINAL_PROMPT',
])

/**
 * Strips full-line comments from a command.
 */
function stripCommentLines(command: string): string {
  const lines = command.split('\n')
  const nonCommentLines = lines.filter(line => {
    const trimmed = line.trim()
    return trimmed !== '' && !trimmed.startsWith('#')
  })

  if (nonCommentLines.length === 0) {
    return command
  }

  return nonCommentLines.join('\n')
}

export function stripSafeWrappers(command: string): string {
  const SAFE_WRAPPER_PATTERNS = [
    /^timeout[ \t]+(?:(?:--(?:foreground|preserve-status|verbose)|--(?:kill-after|signal)=[A-Za-z0-9_.+-]+|--(?:kill-after|signal)[ \t]+[A-Za-z0-9_.+-]+|-v|-[ks][ \t]+[A-Za-z0-9_.+-]+|-[ks][A-Za-z0-9_.+-]+)[ \t]+)*(?:--[ \t]+)?\d+(?:\.\d+)?[smhd]?[ \t]+/,
    /^time[ \t]+(?:--[ \t]+)?/,
    /^nice(?:[ \t]+-n[ \t]+-?\d+|[ \t]+-\d+)?[ \t]+(?:--[ \t]+)?/,
    /^stdbuf(?:[ \t]+-[ioe][LN0-9]+)+[ \t]+(?:--[ \t]+)?/,
    /^nohup[ \t]+(?:--[ \t]+)?/,
  ] as const

  const ENV_VAR_PATTERN = /^([A-Za-z_][A-Za-z0-9_]*)=([A-Za-z0-9_./:-]+)[ \t]+/

  let stripped = command
  let previousStripped = ''

  // Phase 1: Strip leading env vars and comments only.
  while (stripped !== previousStripped) {
    previousStripped = stripped
    stripped = stripCommentLines(stripped)

    const envVarMatch = stripped.match(ENV_VAR_PATTERN)
    if (envVarMatch) {
      const varName = envVarMatch[1]!
      if (SAFE_ENV_VARS.has(varName)) {
        stripped = stripped.replace(ENV_VAR_PATTERN, '')
      }
    }
  }

  // Phase 2: Strip wrapper commands and comments only. Do NOT strip env vars.
  previousStripped = ''
  while (stripped !== previousStripped) {
    previousStripped = stripped
    stripped = stripCommentLines(stripped)

    for (const pattern of SAFE_WRAPPER_PATTERNS) {
      stripped = stripped.replace(pattern, '')
    }
  }

  return stripped.trim()
}

// SECURITY: allowlist for timeout flag VALUES
const TIMEOUT_FLAG_VALUE_RE = /^[A-Za-z0-9_.+-]+$/

/**
 * Parse timeout's GNU flags and return the argv index of the DURATION token.
 */
function skipTimeoutFlags(a: readonly string[]): number {
  let i = 1
  while (i < a.length) {
    const arg = a[i]!
    const next = a[i + 1]
    if (
      arg === '--foreground' ||
      arg === '--preserve-status' ||
      arg === '--verbose'
    )
      i++
    else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(arg)) i++
    else if (
      (arg === '--kill-after' || arg === '--signal') &&
      next &&
      TIMEOUT_FLAG_VALUE_RE.test(next)
    )
      i += 2
    else if (arg === '--') {
      i++
      break
    }
    else if (arg.startsWith('--')) return -1
    else if (arg === '-v') i++
    else if (
      (arg === '-k' || arg === '-s') &&
      next &&
      TIMEOUT_FLAG_VALUE_RE.test(next)
    )
      i += 2
    else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(arg)) i++
    else if (arg.startsWith('-')) return -1
    else break
  }
  return i
}

/**
 * Argv-level counterpart to stripSafeWrappers.
 * KEEP IN SYNC with SAFE_WRAPPER_PATTERNS above.
 */
export function stripWrappersFromArgv(argv: string[]): string[] {
  let a = argv
  for (;;) {
    if (a[0] === 'time' || a[0] === 'nohup') {
      a = a.slice(a[1] === '--' ? 2 : 1)
    } else if (a[0] === 'timeout') {
      const i = skipTimeoutFlags(a)
      if (i < 0 || !a[i] || !/^\d+(?:\.\d+)?[smhd]?$/.test(a[i]!)) return a
      a = a.slice(i + 1)
    } else if (
      a[0] === 'nice' &&
      a[1] === '-n' &&
      a[2] &&
      /^-?\d+$/.test(a[2])
    ) {
      a = a.slice(a[3] === '--' ? 4 : 3)
    } else {
      return a
    }
  }
}

/**
 * Env vars that make a *different binary* run (injection or resolution hijack).
 */
export const BINARY_HIJACK_VARS = /^(LD_|DYLD_|PATH$)/

/**
 * Strip ALL leading env var prefixes from a command, regardless of whether the
 * var name is in the safe-list.
 */
export function stripAllLeadingEnvVars(
  command: string,
  blocklist?: RegExp,
): string {
  const ENV_VAR_PATTERN =
    /^([A-Za-z_][A-Za-z0-9_]*(?:\[[^\]]*\])?)\+?=(?:'[^'\n\r]*'|"(?:\\.|[^"$`\\\n\r])*"|\\.|[^ \t\n\r$`;|&()<>\\\\'"])*[ \t]+/

  let stripped = command
  let previousStripped = ''

  while (stripped !== previousStripped) {
    previousStripped = stripped
    stripped = stripCommentLines(stripped)

    const m = stripped.match(ENV_VAR_PATTERN)
    if (!m) continue
    if (blocklist?.test(m[1]!)) break
    stripped = stripped.slice(m[0].length)
  }

  return stripped.trim()
}

function filterRulesByContentsMatchingInput(
  input: z.infer<typeof BashTool.inputSchema>,
  rules: Map<string, PermissionRule>,
  matchMode: 'exact' | 'prefix',
  {
    stripAllEnvVars = false,
    skipCompoundCheck = false,
  }: { stripAllEnvVars?: boolean; skipCompoundCheck?: boolean } = {},
): PermissionRule[] {
  const command = input.command.trim()

  const commandWithoutRedirections =
    extractOutputRedirections(command).commandWithoutRedirections

  const commandsForMatching =
    matchMode === 'exact'
      ? [command, commandWithoutRedirections]
      : [commandWithoutRedirections]

  const commandsToTry = commandsForMatching.flatMap(cmd => {
    const strippedCommand = stripSafeWrappers(cmd)
    return strippedCommand !== cmd ? [cmd, strippedCommand] : [cmd]
  })

  if (stripAllEnvVars) {
    const seen = new Set(commandsToTry)
    let startIdx = 0

    while (startIdx < commandsToTry.length) {
      const endIdx = commandsToTry.length
      for (let i = startIdx; i < endIdx; i++) {
        const cmd = commandsToTry[i]
        if (!cmd) {
          continue
        }
        const envStripped = stripAllLeadingEnvVars(cmd)
        if (!seen.has(envStripped)) {
          commandsToTry.push(envStripped)
          seen.add(envStripped)
        }
        const wrapperStripped = stripSafeWrappers(cmd)
        if (!seen.has(wrapperStripped)) {
          commandsToTry.push(wrapperStripped)
          seen.add(wrapperStripped)
        }
      }
      startIdx = endIdx
    }
  }

  const isCompoundCommand = new Map<string, boolean>()
  if (matchMode === 'prefix' && !skipCompoundCheck) {
    for (const cmd of commandsToTry) {
      if (!isCompoundCommand.has(cmd)) {
        isCompoundCommand.set(cmd, splitCommand(cmd).length > 1)
      }
    }
  }

  return Array.from(rules.entries())
    .filter(([ruleContent]) => {
      const bashRule = bashPermissionRule(ruleContent)

      return commandsToTry.some(cmdToMatch => {
        switch (bashRule.type) {
          case 'exact':
            return bashRule.command === cmdToMatch
          case 'prefix': {
            // v112: normalizes whitespace in prefix before comparison
            const normalizedPrefix = bashRule.prefix.replace(/[ \t]+/g, ' ')
            const normalizedCmd = cmdToMatch.replace(/[ \t]+/g, ' ')
            switch (matchMode) {
              case 'exact':
                return normalizedPrefix === normalizedCmd
              case 'prefix': {
                if (isCompoundCommand.get(cmdToMatch)) {
                  return false
                }
                if (normalizedCmd === normalizedPrefix) {
                  return true
                }
                if (normalizedCmd.startsWith(normalizedPrefix + ' ')) {
                  return true
                }
                const xargsPrefix = 'xargs ' + normalizedPrefix
                if (normalizedCmd === xargsPrefix) {
                  return true
                }
                return normalizedCmd.startsWith(xargsPrefix + ' ')
              }
            }
            break
          }
          case 'wildcard':
            if (matchMode === 'exact') {
              return false
            }
            if (isCompoundCommand.get(cmdToMatch)) {
              return false
            }
            // v112: also checks xargs-prefixed pattern
            return (
              matchWildcardPattern(bashRule.pattern, cmdToMatch) ||
              matchWildcardPattern(`xargs ${bashRule.pattern}`, cmdToMatch)
            )
        }
      })
    })
    .map(([, rule]) => rule)
}

function matchingRulesForInput(
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
  matchMode: 'exact' | 'prefix',
  { skipCompoundCheck = false }: { skipCompoundCheck?: boolean } = {},
) {
  const denyRuleByContents = getRuleByContentsForTool(
    toolPermissionContext,
    BashTool,
    'deny',
  )
  const matchingDenyRules = filterRulesByContentsMatchingInput(
    input,
    denyRuleByContents,
    matchMode,
    { stripAllEnvVars: true, skipCompoundCheck: true },
  )

  const askRuleByContents = getRuleByContentsForTool(
    toolPermissionContext,
    BashTool,
    'ask',
  )
  const matchingAskRules = filterRulesByContentsMatchingInput(
    input,
    askRuleByContents,
    matchMode,
    { stripAllEnvVars: true, skipCompoundCheck: true },
  )

  const allowRuleByContents = getRuleByContentsForTool(
    toolPermissionContext,
    BashTool,
    'allow',
  )
  const matchingAllowRules = filterRulesByContentsMatchingInput(
    input,
    allowRuleByContents,
    matchMode,
    { skipCompoundCheck },
  )

  return {
    matchingDenyRules,
    matchingAskRules,
    matchingAllowRules,
  }
}

/**
 * Checks if the subcommand is an exact match for a permission rule.
 * v112: adds bashMissKind:"no-rule-match" to the passthrough decisionReason.
 */
export const bashToolCheckExactMatchPermission = (
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
): PermissionResult => {
  const command = input.command.trim()
  const { matchingDenyRules, matchingAskRules, matchingAllowRules } =
    matchingRulesForInput(input, toolPermissionContext, 'exact')

  if (matchingDenyRules[0] !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${BashTool.name} with command ${command} has been denied.`,
      decisionReason: {
        type: 'rule',
        rule: matchingDenyRules[0],
      },
    }
  }

  if (matchingAskRules[0] !== undefined) {
    return {
      behavior: 'ask',
      message: createPermissionRequestMessage(BashTool.name),
      decisionReason: {
        type: 'rule',
        rule: matchingAskRules[0],
      },
    }
  }

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

  // v112: added bashMissKind field to passthrough decisionReason
  const decisionReason = {
    type: 'other' as const,
    reason: 'This command requires approval',
    bashMissKind: 'no-rule-match',
  }
  return {
    behavior: 'passthrough',
    message: createPermissionRequestMessage(BashTool.name, decisionReason),
    decisionReason,
    suggestions: suggestionForExactCommand(command),
  }
}

/**
 * Checks prefix/wildcard rules and path constraints for a subcommand.
 *
 * v112 changes vs v88:
 *  - Takes an extra `cwd` parameter (default: getCwd()) and passes it to checkPathConstraints.
 *  - `DkY(q,z)` guard added to isReadOnly check (TODO: unresolved symbol).
 *  - `QSK` check added between checkSedConstraints and isReadOnly (TODO: unresolved symbol).
 *  - Both passthrough decisionReasons gain bashMissKind:"no-rule-match".
 */
export const bashToolCheckPermission = (
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
  compoundCommandHasCd?: boolean,
  astCommand?: SimpleCommand,
  // v112: added cwd parameter with default
  cwd: string = getCwd(),
): PermissionResult => {
  const command = input.command.trim()

  const exactMatchResult = bashToolCheckExactMatchPermission(
    input,
    toolPermissionContext,
  )

  if (
    exactMatchResult.behavior === 'deny' ||
    exactMatchResult.behavior === 'ask'
  ) {
    return exactMatchResult
  }

  const { matchingDenyRules, matchingAskRules, matchingAllowRules } =
    matchingRulesForInput(input, toolPermissionContext, 'prefix', {
      skipCompoundCheck: astCommand !== undefined,
    })

  if (matchingDenyRules[0] !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${BashTool.name} with command ${command} has been denied.`,
      decisionReason: {
        type: 'rule',
        rule: matchingDenyRules[0],
      },
    }
  }

  if (matchingAskRules[0] !== undefined) {
    return {
      behavior: 'ask',
      message: createPermissionRequestMessage(BashTool.name),
      decisionReason: {
        type: 'rule',
        rule: matchingAskRules[0],
      },
    }
  }

  // v112: passes cwd to checkPathConstraints
  const pathResult = checkPathConstraints(
    input,
    cwd,
    toolPermissionContext,
    compoundCommandHasCd,
    astCommand?.redirects,
    astCommand ? [astCommand] : undefined,
  )
  if (pathResult.behavior !== 'passthrough') {
    return pathResult
  }

  if (exactMatchResult.behavior === 'allow') {
    return exactMatchResult
  }

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

  const sedConstraintResult = checkSedConstraints(input, toolPermissionContext)
  if (sedConstraintResult.behavior !== 'passthrough') {
    return sedConstraintResult
  }

  // TODO(lift): QSK at byte ~9930700 — new check between sedConstraints and modeResult,
  // likely a write-command or format-command guard added in v112.
  // TODO(lift): QSK(q, K)

  const modeResult = checkPermissionMode(input, toolPermissionContext)
  if (modeResult.behavior !== 'passthrough') {
    return modeResult
  }

  // v112: isReadOnly check now guarded by DkY(q, astCommand) — likely a
  // "command writes files based on AST info" predicate that blocks auto-allow
  // when the write-command markers regex matches.
  // TODO(lift): DkY at byte ~9930800 — predicate that gates the read-only auto-allow.
  if (BashTool.isReadOnly(input) /* && !DkY(input, astCommand) */) {
    return {
      behavior: 'allow',
      updatedInput: input,
      decisionReason: {
        type: 'other',
        reason: 'Read-only command is allowed',
      },
    }
  }

  // v112: added bashMissKind field
  const decisionReason = {
    type: 'other' as const,
    reason: 'This command requires approval',
    bashMissKind: 'no-rule-match',
  }
  return {
    behavior: 'passthrough',
    message: createPermissionRequestMessage(BashTool.name, decisionReason),
    decisionReason,
    suggestions: suggestionForExactCommand(command),
  }
}

/**
 * Processes an individual subcommand and applies prefix checks & suggestions.
 *
 * v112 changes vs v88:
 *  - Signature adds `astCommand` (5th param) and `cwd` (6th param, default getCwd()).
 *  - Removed the bashCommandIsSafeAsync injection check (was step 3 in v88).
 *  - Simply delegates to bashToolCheckPermission + applies suggestions.
 */
export async function checkCommandAndSuggestRules(
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
  commandPrefixResult: CommandPrefixResult | null | undefined,
  compoundCommandHasCd?: boolean,
  astCommand?: SimpleCommand,
  // v112: added cwd parameter
  cwd: string = getCwd(),
): Promise<PermissionResult> {
  // 1. Check exact match first
  const exactMatchResult = bashToolCheckExactMatchPermission(
    input,
    toolPermissionContext,
  )
  if (exactMatchResult.behavior !== 'passthrough') {
    return exactMatchResult
  }

  // 2. Check the command prefix (v112: passes cwd, astCommand, no injection check)
  const permissionResult = bashToolCheckPermission(
    input,
    toolPermissionContext,
    compoundCommandHasCd,
    astCommand,
    cwd,
  )

  if (
    permissionResult.behavior === 'deny' ||
    permissionResult.behavior === 'ask'
  ) {
    return permissionResult
  }

  // 3. Allow if command was allowed
  if (permissionResult.behavior === 'allow') {
    return permissionResult
  }

  // 4. Suggest prefix if available, otherwise exact command
  const suggestedUpdates = commandPrefixResult?.commandPrefix
    ? suggestionForPrefix(commandPrefixResult.commandPrefix)
    : suggestionForExactCommand(input.command)

  return {
    ...permissionResult,
    suggestions: suggestedUpdates,
  }
}

/**
 * Checks if a command should be auto-allowed when sandboxed.
 */
function checkSandboxAutoAllow(
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
): PermissionResult {
  const command = input.command.trim()

  const { matchingDenyRules, matchingAskRules } = matchingRulesForInput(
    input,
    toolPermissionContext,
    'prefix',
  )

  if (matchingDenyRules[0] !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${BashTool.name} with command ${command} has been denied.`,
      decisionReason: {
        type: 'rule',
        rule: matchingDenyRules[0],
      },
    }
  }

  const subcommands = splitCommand(command)
  if (subcommands.length > 1) {
    let firstAskRule: PermissionRule | undefined
    for (const sub of subcommands) {
      const subResult = matchingRulesForInput(
        { command: sub },
        toolPermissionContext,
        'prefix',
      )
      if (subResult.matchingDenyRules[0] !== undefined) {
        return {
          behavior: 'deny',
          message: `Permission to use ${BashTool.name} with command ${command} has been denied.`,
          decisionReason: {
            type: 'rule',
            rule: subResult.matchingDenyRules[0],
          },
        }
      }
      firstAskRule ??= subResult.matchingAskRules[0]
    }
    if (firstAskRule) {
      return {
        behavior: 'ask',
        message: createPermissionRequestMessage(BashTool.name),
        decisionReason: {
          type: 'rule',
          rule: firstAskRule,
        },
      }
    }
  }

  if (matchingAskRules[0] !== undefined) {
    return {
      behavior: 'ask',
      message: createPermissionRequestMessage(BashTool.name),
      decisionReason: {
        type: 'rule',
        rule: matchingAskRules[0],
      },
    }
  }

  return {
    behavior: 'allow',
    updatedInput: input,
    decisionReason: {
      type: 'other',
      reason: 'Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)',
    },
  }
}

/**
 * Filter out `cd ${cwd}` prefix subcommands, keeping astCommands aligned.
 */
function filterCdCwdSubcommands(
  rawSubcommands: string[],
  astCommands: SimpleCommand[] | undefined,
  cwd: string,
  cwdMingw: string,
): { subcommands: string[]; astCommandsByIdx: (SimpleCommand | undefined)[] } {
  const subcommands: string[] = []
  const astCommandsByIdx: (SimpleCommand | undefined)[] = []
  for (let i = 0; i < rawSubcommands.length; i++) {
    const cmd = rawSubcommands[i]!
    if (cmd === `cd ${cwd}` || cmd === `cd ${cwdMingw}`) continue
    subcommands.push(cmd)
    astCommandsByIdx.push(astCommands?.[i])
  }
  return { subcommands, astCommandsByIdx }
}

/**
 * Early-exit deny enforcement for the AST too-complex and checkSemantics paths.
 */
function checkEarlyExitDeny(
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
): PermissionResult | null {
  const exactMatchResult = bashToolCheckExactMatchPermission(
    input,
    toolPermissionContext,
  )
  if (exactMatchResult.behavior !== 'passthrough') {
    return exactMatchResult
  }
  const denyMatch = matchingRulesForInput(
    input,
    toolPermissionContext,
    'prefix',
  ).matchingDenyRules[0]
  if (denyMatch !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${BashTool.name} with command ${input.command} has been denied.`,
      decisionReason: { type: 'rule', rule: denyMatch },
    }
  }
  return null
}

/**
 * checkSemantics-path deny enforcement. Calls checkEarlyExitDeny (exact-match
 * + full-command prefix deny), then checks each individual SimpleCommand .text
 * span against prefix deny rules.
 */
function checkSemanticsDeny(
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
  commands: readonly { text: string }[],
): PermissionResult | null {
  const fullCmd = checkEarlyExitDeny(input, toolPermissionContext)
  if (fullCmd !== null) return fullCmd
  for (const cmd of commands) {
    const subDeny = matchingRulesForInput(
      { ...input, command: cmd.text },
      toolPermissionContext,
      'prefix',
    ).matchingDenyRules[0]
    if (subDeny !== undefined) {
      return {
        behavior: 'deny',
        message: `Permission to use ${BashTool.name} with command ${input.command} has been denied.`,
        decisionReason: { type: 'rule', rule: subDeny },
      }
    }
  }
  return null
}

/**
 * Builds the pending classifier check metadata if classifier is enabled and has allow descriptions.
 * v112: removed feature('TRANSCRIPT_CLASSIFIER') check — no longer gated on that.
 */
function buildPendingClassifierCheck(
  command: string,
  toolPermissionContext: ToolPermissionContext,
): { command: string; cwd: string; descriptions: string[] } | undefined {
  if (!isClassifierPermissionsEnabled()) {
    return undefined
  }
  if (toolPermissionContext.mode === 'bypassPermissions') return undefined

  const allowDescriptions = getBashPromptAllowDescriptions(
    toolPermissionContext,
  )
  if (allowDescriptions.length === 0) return undefined

  return {
    command,
    cwd: getCwd(),
    descriptions: allowDescriptions,
  }
}

const speculativeChecks = new Map<string, Promise<ClassifierResult>>()

/**
 * Start a speculative bash allow classifier check early.
 * v112: removed feature('TRANSCRIPT_CLASSIFIER') check.
 */
export function peekSpeculativeClassifierCheck(
  command: string,
): Promise<ClassifierResult> | undefined {
  return speculativeChecks.get(command)
}

export function startSpeculativeClassifierCheck(
  command: string,
  toolPermissionContext: ToolPermissionContext,
  signal: AbortSignal,
  isNonInteractiveSession: boolean,
): boolean {
  if (!isClassifierPermissionsEnabled()) return false
  if (toolPermissionContext.mode === 'bypassPermissions') return false
  const allowDescriptions = getBashPromptAllowDescriptions(
    toolPermissionContext,
  )
  if (allowDescriptions.length === 0) return false

  const cwd = getCwd()
  const promise = classifyBashCommand(
    command,
    cwd,
    allowDescriptions,
    'allow',
    signal,
    isNonInteractiveSession,
  )
  promise.catch(() => {})
  speculativeChecks.set(command, promise)
  return true
}

/**
 * Consume a speculative classifier check result for the given command.
 */
export function consumeSpeculativeClassifierCheck(
  command: string,
): Promise<ClassifierResult> | undefined {
  const promise = speculativeChecks.get(command)
  if (promise) {
    speculativeChecks.delete(command)
  }
  return promise
}

export function clearSpeculativeChecks(): void {
  speculativeChecks.clear()
}

/**
 * Await a pending classifier check and return a PermissionDecisionReason if
 * high-confidence allow, or undefined otherwise.
 */
export async function awaitClassifierAutoApproval(
  pendingCheck: PendingClassifierCheck,
  signal: AbortSignal,
  isNonInteractiveSession: boolean,
): Promise<PermissionDecisionReason | undefined> {
  const { command, cwd, descriptions } = pendingCheck
  const speculativeResult = consumeSpeculativeClassifierCheck(command)
  const classifierResult = speculativeResult
    ? await speculativeResult
    : await classifyBashCommand(
        command,
        cwd,
        descriptions,
        'allow',
        signal,
        isNonInteractiveSession,
      )

  logClassifierResultForAnts(command, 'allow', descriptions, classifierResult)

  if (
    classifierResult.matches &&
    classifierResult.confidence === 'high'
  ) {
    return {
      type: 'classifier',
      classifier: 'bash_allow',
      reason: `Allowed by prompt rule: "${classifierResult.matchedDescription}"`,
    }
  }
  return undefined
}

type AsyncClassifierCheckCallbacks = {
  shouldContinue: () => boolean
  onAllow: (decisionReason: PermissionDecisionReason) => void
  onComplete?: () => void
}

/**
 * Execute the bash allow classifier check asynchronously.
 */
export async function executeAsyncClassifierCheck(
  pendingCheck: { command: string; cwd: string; descriptions: string[] },
  signal: AbortSignal,
  isNonInteractiveSession: boolean,
  callbacks: AsyncClassifierCheckCallbacks,
): Promise<void> {
  const { command, cwd, descriptions } = pendingCheck
  const speculativeResult = consumeSpeculativeClassifierCheck(command)

  let classifierResult: ClassifierResult
  try {
    classifierResult = speculativeResult
      ? await speculativeResult
      : await classifyBashCommand(
          command,
          cwd,
          descriptions,
          'allow',
          signal,
          isNonInteractiveSession,
        )
  } catch (error: unknown) {
    if (error instanceof APIUserAbortError || error instanceof AbortError) {
      callbacks.onComplete?.()
      return
    }
    callbacks.onComplete?.()
    throw error
  }

  logClassifierResultForAnts(command, 'allow', descriptions, classifierResult)

  if (!callbacks.shouldContinue()) return

  if (
    classifierResult.matches &&
    classifierResult.confidence === 'high'
  ) {
    callbacks.onAllow({
      type: 'classifier',
      classifier: 'bash_allow',
      reason: `Allowed by prompt rule: "${classifierResult.matchedDescription}"`,
    })
  } else {
    callbacks.onComplete?.()
  }
}

/**
 * The main implementation to check if we need to ask for user permission to
 * call BashTool with a given input.
 *
 * v112 changes vs v88 (jac=0.632):
 *  - Removed all feature('TREE_SITTER_BASH_SHADOW') shadow instrumentation.
 *  - Removed feature('BASH_CLASSIFIER') conditional guards on pendingClassifierCheck spreads.
 *  - Uses `await gt6(q.command)` (parseCommandRaw reimport) + `dt6(...)` for AST analysis;
 *    both abstracted into module-init variables here.
 *  - Semantic check now uses `nSK(q, toolPermCtx, O)` after checkSemanticsDeny
 *    (TODO: unresolved — likely handles newline-hash semantic edge case).
 *  - New `GkY` / `vkY` path in cd-handling: when command starts with cd (single-cd,
 *    multi-subcommand, first-is-cd pattern), v112 may compute an alternate cwd for
 *    permission checks (TODO: unresolved).
 *  - bashMissKind fields added to too-complex and semantics decisionReasons.
 *  - Legacy misparsing gate removed (no isBashSecurityCheckForMisparsing path).
 *  - checkCommandAndSuggestRules call passes astCommandsByIdx[i] + effective cwd.
 *  - Removed feature('TRANSCRIPT_CLASSIFIER') guard from classifier check.
 */
export async function bashToolHasPermission(
  input: z.infer<typeof BashTool.inputSchema>,
  context: ToolUseContext,
  getCommandSubcommandPrefixFn = getCommandSubcommandPrefix,
): Promise<PermissionResult> {
  let appState = context.getAppState()

  // v112: directly awaits parseCommandRaw equivalent; no shadow mode branching
  // TODO(lift): gt6 at byte ~9918304 — parseCommandRaw or equivalent
  // TODO(lift): dt6 at byte ~9918447 — parseForSecurity or equivalent (v88: parseForSecurityFromAst)
  const astRoot = await parseCommandRawV112(input.command)
  let astResult = astRoot
    ? parseForSecurityV112(input.command, astRoot)
    : { kind: 'parse-unavailable' as const }

  if (astResult.kind === 'too-complex') {
    const earlyExit = checkEarlyExitDeny(input, appState.toolPermissionContext)
    if (earlyExit !== null) return earlyExit
    const decisionReason: PermissionDecisionReason = {
      type: 'other' as const,
      reason: (astResult as { reason: string }).reason,
      // v112: added bashMissKind field
      bashMissKind: 'too-complex',
    } as PermissionDecisionReason
    logEvent('tengu_bash_ast_too_complex', {
      nodeTypeId: nodeTypeIdV112((astResult as { nodeType: unknown }).nodeType),
    })
    return {
      behavior: 'ask',
      decisionReason,
      message: createPermissionRequestMessage(BashTool.name, decisionReason),
      suggestions: [],
    }
  }

  let astSubcommands: string[] | null = null
  let astRedirects: unknown[] | undefined
  let astCommands: SimpleCommand[] | undefined

  if (astResult.kind === 'simple') {
    const commands = (astResult as { commands: SimpleCommand[] }).commands
    const sem = checkSemanticsV112(commands)
    if (!sem.ok) {
      const earlyExit = checkSemanticsDeny(
        input,
        appState.toolPermissionContext,
        commands,
      )
      if (earlyExit !== null) return earlyExit

      // v112: nSK — handles newline-hash semantic edge case; returns non-null on match
      // TODO(lift): nSK at byte ~9920536 — likely checkNewlineHashSemantic or similar
      const newlineHashResult = checkNewlineHashSemanticsV112(
        input,
        appState.toolPermissionContext,
        commands,
      )
      if (newlineHashResult) return newlineHashResult

      const decisionReason: PermissionDecisionReason = {
        type: 'other' as const,
        reason: sem.reason,
        // v112: added bashMissKind:"semantics"
        bashMissKind: 'semantics',
      } as PermissionDecisionReason
      return {
        behavior: 'ask',
        decisionReason,
        message: createPermissionRequestMessage(BashTool.name, decisionReason),
        suggestions: [],
      }
    }

    astSubcommands = commands.map((c: { text: string }) => c.text)
    astRedirects = commands.flatMap(
      (c: { redirects: unknown[] }) => c.redirects,
    )
    astCommands = commands
  }

  if (astResult.kind === 'simple' && astSubcommands !== null) {
    // AST-verified path — skip legacy shell-quote pre-check
  } else if (astResult.kind === 'parse-unavailable') {
    logForDebugging(
      'bashToolHasPermission: tree-sitter unavailable, using legacy shell-quote path',
    )
    const parseResult = tryParseShellCommand(input.command)
    if (!parseResult.success) {
      const decisionReason = {
        type: 'other' as const,
        reason: `Command contains malformed syntax that cannot be parsed: ${parseResult.error}`,
      }
      return {
        behavior: 'ask',
        decisionReason,
        message: createPermissionRequestMessage(BashTool.name, decisionReason),
      }
    }
  }

  if (
    SandboxManager.isSandboxingEnabled() &&
    SandboxManager.isAutoAllowBashIfSandboxedEnabled() &&
    shouldUseSandbox(input)
  ) {
    const sandboxAutoAllowResult = checkSandboxAutoAllow(
      input,
      appState.toolPermissionContext,
    )
    if (sandboxAutoAllowResult.behavior !== 'passthrough') {
      return sandboxAutoAllowResult
    }
  }

  const exactMatchResult = bashToolCheckExactMatchPermission(
    input,
    appState.toolPermissionContext,
  )

  if (exactMatchResult.behavior === 'deny') {
    return exactMatchResult
  }

  // Check Bash prompt deny and ask rules
  if (
    isClassifierPermissionsEnabled() &&
    appState.toolPermissionContext.mode !== 'auto'
  ) {
    const denyDescriptions = getBashPromptDenyDescriptions(
      appState.toolPermissionContext,
    )
    const askDescriptions = getBashPromptAskDescriptions(
      appState.toolPermissionContext,
    )
    const hasDeny = denyDescriptions.length > 0
    const hasAsk = askDescriptions.length > 0

    if (hasDeny || hasAsk) {
      const [denyResult, askResult] = await Promise.all([
        hasDeny
          ? classifyBashCommand(
              input.command,
              getCwd(),
              denyDescriptions,
              'deny',
              context.abortController.signal,
              context.options.isNonInteractiveSession,
            )
          : null,
        hasAsk
          ? classifyBashCommand(
              input.command,
              getCwd(),
              askDescriptions,
              'ask',
              context.abortController.signal,
              context.options.isNonInteractiveSession,
            )
          : null,
      ])

      if (context.abortController.signal.aborted) {
        throw new AbortError()
      }

      if (denyResult) {
        logClassifierResultForAnts(
          input.command,
          'deny',
          denyDescriptions,
          denyResult,
        )
      }
      if (askResult) {
        logClassifierResultForAnts(
          input.command,
          'ask',
          askDescriptions,
          askResult,
        )
      }

      if (denyResult?.matches && denyResult.confidence === 'high') {
        return {
          behavior: 'deny',
          message: `Denied by Bash prompt rule: "${denyResult.matchedDescription}"`,
          decisionReason: {
            type: 'other',
            reason: `Denied by Bash prompt rule: "${denyResult.matchedDescription}"`,
          },
        }
      }

      if (askResult?.matches && askResult.confidence === 'high') {
        let suggestions: PermissionUpdate[]
        if (getCommandSubcommandPrefixFn === getCommandSubcommandPrefix) {
          suggestions = suggestionForExactCommand(input.command)
        } else {
          const commandPrefixResult = await getCommandSubcommandPrefixFn(
            input.command,
            context.abortController.signal,
            context.options.isNonInteractiveSession,
          )
          if (context.abortController.signal.aborted) {
            throw new AbortError()
          }
          suggestions = commandPrefixResult?.commandPrefix
            ? suggestionForPrefix(commandPrefixResult.commandPrefix)
            : suggestionForExactCommand(input.command)
        }
        return {
          behavior: 'ask',
          message: createPermissionRequestMessage(BashTool.name),
          decisionReason: {
            type: 'other',
            reason: `Required by Bash prompt rule: "${askResult.matchedDescription}"`,
            // v112: added bashMissKind
            bashMissKind: 'prompt-ask-rule',
          } as PermissionDecisionReason,
          suggestions,
        }
      }
    }
  }

  // Check for non-subcommand Bash operators (pipes, etc.)
  const commandOperatorResult = await checkCommandOperatorPermissions(
    input,
    (i: z.infer<typeof BashTool.inputSchema>) =>
      bashToolHasPermission(i, context, getCommandSubcommandPrefixFn),
    { isNormalizedCdCommand, isNormalizedGitCommand },
    astRoot,
  )
  if (commandOperatorResult.behavior !== 'passthrough') {
    if (commandOperatorResult.behavior === 'allow') {
      appState = context.getAppState()
      const pathResult = checkPathConstraints(
        input,
        getCwd(),
        appState.toolPermissionContext,
        commandHasAnyCd(input.command),
        astRedirects as Parameters<typeof checkPathConstraints>[4],
        astCommands,
      )
      if (pathResult.behavior !== 'passthrough') {
        return pathResult
      }
    }

    if (commandOperatorResult.behavior === 'ask') {
      appState = context.getAppState()
      return {
        ...commandOperatorResult,
      }
    }

    return commandOperatorResult
  }

  // Split into subcommands
  const cwd = getCwd()
  const cwdMingw =
    getPlatform() === 'windows' ? windowsPathToPosixPath(cwd) : cwd
  const rawSubcommands = astSubcommands ?? splitCommand(input.command)
  const { subcommands, astCommandsByIdx } = filterCdCwdSubcommands(
    rawSubcommands,
    astCommands,
    cwd,
    cwdMingw,
  )

  // Cap subcommand fanout on legacy path
  if (
    astSubcommands === null &&
    subcommands.length > MAX_SUBCOMMANDS_FOR_SECURITY_CHECK
  ) {
    logForDebugging(
      `bashPermissions: ${subcommands.length} subcommands exceeds cap (${MAX_SUBCOMMANDS_FOR_SECURITY_CHECK}) — returning ask`,
      { level: 'debug' },
    )
    const decisionReason = {
      type: 'other' as const,
      reason: `Command splits into ${subcommands.length} subcommands, too many to safety-check individually`,
    }
    return {
      behavior: 'ask',
      message: createPermissionRequestMessage(BashTool.name, decisionReason),
      decisionReason,
    }
  }

  const cdCommands = subcommands.filter(subCommand =>
    isNormalizedCdCommand(subCommand),
  )
  if (cdCommands.length > 1) {
    const decisionReason = {
      type: 'other' as const,
      reason:
        'Multiple directory changes in one command require approval for clarity',
      // v112: added bashMissKind
      bashMissKind: 'multi-cd',
    }
    return {
      behavior: 'ask',
      decisionReason,
      message: createPermissionRequestMessage(BashTool.name, decisionReason),
    }
  }

  let compoundCommandHasCd = cdCommands.length > 0

  // v112: GkY / vkY — new adaptive cwd calculation when command starts with cd.
  // When first subcommand is cd, command has exactly multiple subcommands, and
  // GkY(input.command) returns true, v112 computes effectiveCwd via vkY(astCmd0, cwd, permCtx).
  // If vkY returns non-null, effectiveCwd is used and compoundCommandHasCd is set false.
  // TODO(lift): GkY at byte ~9924400 — predicate for single-leading-cd detection
  // TODO(lift): vkY at byte ~9924500 — computes resolved cwd after cd for permission ctx
  let effectiveCwd = cwd
  if (
    compoundCommandHasCd &&
    subcommands.length > 1 &&
    subcommands.length === rawSubcommands.length &&
    isNormalizedCdCommand(subcommands[0]!) &&
    detectSingleLeadingCdPattern(input.command)
  ) {
    const resolvedCwd = resolveLeadingCdCwd(
      astCommandsByIdx[0],
      cwd,
      appState.toolPermissionContext,
    )
    if (resolvedCwd !== null) {
      effectiveCwd = resolvedCwd
      compoundCommandHasCd = false
    }
  }

  if (compoundCommandHasCd) {
    const hasGitCommand = subcommands.some(cmd =>
      isNormalizedGitCommand(cmd.trim()),
    )
    if (hasGitCommand) {
      const decisionReason = {
        type: 'other' as const,
        reason:
          'Compound commands with cd and git require approval to prevent bare repository attacks',
        // v112: added bashMissKind
        bashMissKind: 'cd-git-compound',
      }
      return {
        behavior: 'ask',
        decisionReason,
        message: createPermissionRequestMessage(BashTool.name, decisionReason),
      }
    }
  }

  appState = context.getAppState()

  const subcommandPermissionDecisions = subcommands.map((command, i) =>
    bashToolCheckPermission(
      { command },
      appState.toolPermissionContext,
      compoundCommandHasCd,
      astCommandsByIdx[i],
      effectiveCwd,
    ),
  )

  const deniedSubresult = subcommandPermissionDecisions.find(
    _ => _.behavior === 'deny',
  )
  if (deniedSubresult !== undefined) {
    return {
      behavior: 'deny',
      message: `Permission to use ${BashTool.name} with command ${input.command} has been denied.`,
      decisionReason: {
        type: 'subcommandResults',
        reasons: new Map(
          subcommandPermissionDecisions.map((result, i) => [
            subcommands[i]!,
            result,
          ]),
        ),
      },
    }
  }

  // v112: filters defined astCommands for path check (not undefined entries)
  const definedAstCommands = astCommandsByIdx.filter(
    (c): c is SimpleCommand => c !== undefined,
  )
  const pathResult = checkPathConstraints(
    input,
    effectiveCwd,
    appState.toolPermissionContext,
    compoundCommandHasCd,
    astRedirects as Parameters<typeof checkPathConstraints>[4],
    definedAstCommands,
  )
  if (pathResult.behavior === 'deny') {
    return pathResult
  }

  const askSubresult = subcommandPermissionDecisions.find(
    _ => _.behavior === 'ask',
  )
  const nonAllowCount = count(
    subcommandPermissionDecisions,
    _ => _.behavior !== 'allow',
  )

  if (pathResult.behavior === 'ask' && askSubresult === undefined) {
    return pathResult
  }

  if (askSubresult !== undefined && nonAllowCount === 1) {
    return {
      ...askSubresult,
    }
  }

  if (exactMatchResult.behavior === 'allow') {
    return exactMatchResult
  }

  if (
    subcommandPermissionDecisions.every(_ => _.behavior === 'allow')
  ) {
    return {
      behavior: 'allow',
      updatedInput: input,
      decisionReason: {
        type: 'subcommandResults',
        reasons: new Map(
          subcommandPermissionDecisions.map((result, i) => [
            subcommands[i]!,
            result,
          ]),
        ),
      },
    }
  }

  let commandSubcommandPrefix: Awaited<
    ReturnType<typeof getCommandSubcommandPrefixFn>
  > = null
  if (getCommandSubcommandPrefixFn !== getCommandSubcommandPrefix) {
    commandSubcommandPrefix = await getCommandSubcommandPrefixFn(
      input.command,
      context.abortController.signal,
      context.options.isNonInteractiveSession,
    )
    if (context.abortController.signal.aborted) {
      throw new AbortError()
    }
  }

  appState = context.getAppState()
  if (subcommands.length === 1) {
    const result = await checkCommandAndSuggestRules(
      { command: subcommands[0]! },
      appState.toolPermissionContext,
      commandSubcommandPrefix,
      compoundCommandHasCd,
      astCommandsByIdx[0],
      effectiveCwd,
    )
    if (result.behavior === 'ask' || result.behavior === 'passthrough') {
      return {
        ...result,
      }
    }
    return result
  }

  const subcommandResults: Map<string, PermissionResult> = new Map()
  for (let i = 0; i < subcommands.length; i++) {
    const subcommand = subcommands[i]!
    subcommandResults.set(
      subcommand,
      await checkCommandAndSuggestRules(
        {
          ...input,
          command: subcommand,
        },
        appState.toolPermissionContext,
        commandSubcommandPrefix?.subcommandPrefixes.get(subcommand),
        compoundCommandHasCd,
        astCommandsByIdx[i],
        effectiveCwd,
      ),
    )
  }

  if (
    subcommands.every(subcommand => {
      const permissionResult = subcommandResults.get(subcommand)
      return permissionResult?.behavior === 'allow'
    })
  ) {
    return {
      behavior: 'allow',
      updatedInput: input,
      decisionReason: {
        type: 'subcommandResults',
        reasons: subcommandResults,
      },
    }
  }

  const collectedRules: Map<string, PermissionRuleValue> = new Map()

  for (const [subcommand, permissionResult] of subcommandResults) {
    if (
      permissionResult.behavior === 'ask' ||
      permissionResult.behavior === 'passthrough'
    ) {
      const updates =
        'suggestions' in permissionResult
          ? permissionResult.suggestions
          : undefined

      const rules = extractRules(updates)
      for (const rule of rules) {
        const ruleKey = permissionRuleValueToString(rule)
        collectedRules.set(ruleKey, rule)
      }

      if (
        permissionResult.behavior === 'ask' &&
        rules.length === 0 &&
        permissionResult.decisionReason?.type !== 'rule'
      ) {
        for (const rule of extractRules(
          suggestionForExactCommand(subcommand),
        )) {
          const ruleKey = permissionRuleValueToString(rule)
          collectedRules.set(ruleKey, rule)
        }
      }
    }
  }

  const decisionReason = {
    type: 'subcommandResults' as const,
    reasons: subcommandResults,
  }

  const cappedRules = Array.from(collectedRules.values()).slice(
    0,
    MAX_SUGGESTED_RULES_FOR_COMPOUND,
  )
  const suggestedUpdates: PermissionUpdate[] | undefined =
    cappedRules.length > 0
      ? [
          {
            type: 'addRules',
            rules: cappedRules,
            behavior: 'allow',
            destination: 'localSettings',
          },
        ]
      : undefined

  return {
    behavior: askSubresult !== undefined ? 'ask' : 'passthrough',
    message: createPermissionRequestMessage(BashTool.name, decisionReason),
    decisionReason,
    suggestions: suggestedUpdates,
  }
}

/**
 * Checks if a subcommand is a git command after normalizing safe wrappers.
 *
 * v112: Simplified — uses tryParseShellCommand tokens array directly without
 * the final regex fallback. Also handles xargs git.
 */
export function isNormalizedGitCommand(command: string): boolean {
  if (command.startsWith('git ') || command === 'git') {
    return true
  }
  const stripped = stripSafeWrappers(command)
  const tokens = tryParseShellCommandTokens(stripped)
  if (tokens[0] === 'git') return true
  if (tokens[0] === 'xargs' && tokens.includes('git')) return true
  return false
}

/**
 * Checks if a subcommand is a cd command after normalizing safe wrappers.
 *
 * v112: Uses tryParseShellCommand tokens array; checks first token only.
 */
export function isNormalizedCdCommand(command: string): boolean {
  const tokens = tryParseShellCommandTokens(stripSafeWrappers(command))
  const first = tokens[0]
  return first === 'cd' || first === 'pushd' || first === 'popd'
}

/**
 * Checks if a compound command has any cd subcommand.
 */
function commandHasAnyCd(command: string): boolean {
  return splitCommand(command).some(c => isNormalizedCdCommand(c.trim()))
}

// ── Helpers wrapping unresolved v112 symbols ─────────────────────────────────
// These thin wrappers expose the v112 internal calls while marking the
// unresolved minified identifiers for a later pass.

/**
 * tryParseShellCommand wrapper that returns tokens array (or empty).
 * v112 uses XM(jF(q)) — tryParseShellCommand(stripSafeWrappers(q)).tokens or similar.
 */
function tryParseShellCommandTokens(command: string): string[] {
  const result = tryParseShellCommand(command)
  if (result.success && result.tokens.length > 0) {
    return result.tokens
  }
  // fallback: split by whitespace
  return command.trim().split(/\s+/).filter(Boolean)
}

/**
 * v112: parseCommandRaw equivalent (gt6). Returns AST root or null.
 * TODO(lift): gt6 at byte ~9918304 — async parseCommandRaw or parseCommandRawCached.
 */
async function parseCommandRawV112(command: string): Promise<unknown | null> {
  // Deferred to a later pass; returns null to use legacy path
  return null
}

/**
 * v112: parseForSecurity equivalent (dt6). Analyzes AST root.
 * TODO(lift): dt6 at byte ~9918447 — parseForSecurityFromAst equivalent.
 */
function parseForSecurityV112(
  command: string,
  astRoot: unknown,
): { kind: 'parse-unavailable' | 'too-complex' | 'simple'; commands?: SimpleCommand[]; reason?: string; nodeType?: unknown } {
  return { kind: 'parse-unavailable' }
}

/**
 * v112: checkSemantics equivalent. Returns { ok, reason }.
 * TODO(lift): VP4 at byte ~9919705 — checkSemantics from ast.ts.
 */
function checkSemanticsV112(commands: SimpleCommand[]): { ok: boolean; reason: string; kind?: string } {
  return { ok: true, reason: '' }
}

/**
 * v112: nodeTypeId equivalent (WP4).
 * TODO(lift): WP4 at byte ~9918382 — nodeTypeId from ast.ts.
 */
function nodeTypeIdV112(nodeType: unknown): unknown {
  return nodeType
}

/**
 * v112: nSK — handles newline-hash semantic edge case. Returns PermissionResult or null.
 * TODO(lift): nSK at byte ~9920536 — possibly checks for `# comment && dangerous_cmd`
 * patterns that look like comments but execute code.
 */
function checkNewlineHashSemanticsV112(
  input: z.infer<typeof BashTool.inputSchema>,
  toolPermissionContext: ToolPermissionContext,
  commands: SimpleCommand[],
): PermissionResult | null {
  return null
}

/**
 * v112: GkY — predicate for single-leading-cd pattern detection.
 * TODO(lift): GkY at byte ~9924400 — returns true when command has one leading cd
 * followed by other subcommands in a pattern where cwd can be resolved.
 */
function detectSingleLeadingCdPattern(command: string): boolean {
  return false
}

/**
 * v112: vkY — computes resolved cwd after a leading cd subcommand.
 * TODO(lift): vkY at byte ~9924500 — resolves the cd target directory for permission
 * context, allowing per-subcommand path checks to use the resolved cwd instead of
 * the current cwd. Returns null if the cd target cannot be safely resolved.
 */
function resolveLeadingCdCwd(
  astCommand: SimpleCommand | undefined,
  cwd: string,
  toolPermissionContext: ToolPermissionContext,
): string | null {
  return null
}
