import type { ToolPermissionContext } from '../../Tool.js'
import { splitCommand_DEPRECATED } from '../../utils/bash/commands.js'
import { splitCommand_DEPRECATED as splitCommandForSed } from '../../utils/bash/commands.js'
import type { PermissionResult } from '../../utils/permissions/PermissionResult.js'

// v112: tryParseShellCommand removed from imports; parsing now uses
// splitCommand_DEPRECATED (XM) throughout instead of the shell-quote parser.

/**
 * Helper: Validate flags against an allowlist
 * Handles both single flags and combined flags (e.g., -nE)
 * @param flags Array of flags to validate
 * @param allowedFlags Array of allowed single-character and long flags
 * @returns true if all flags are valid, false otherwise
 */
function validateFlagsAgainstAllowlist(
  flags: string[],
  allowedFlags: string[],
): boolean {
  for (const flag of flags) {
    if (flag.startsWith('-') && !flag.startsWith('--') && flag.length > 2) {
      for (let i = 1; i < flag.length; i++) {
        const singleFlag = '-' + flag[i]
        if (!allowedFlags.includes(singleFlag)) {
          return false
        }
      }
    } else {
      if (!allowedFlags.includes(flag)) {
        return false
      }
    }
  }
  return true
}

/**
 * Pattern 1: Check if this is a line printing command with -n flag.
 * Allows: sed -n 'N' | sed -n 'N,M' with optional -E, -r, -z flags.
 * Allows semicolon-separated print commands like: sed -n '1p;2p;3p'.
 * File arguments are ALLOWED for this pattern.
 *
 * v112: uses splitCommand_DEPRECATED (XM) for tokenization instead of
 * tryParseShellCommand; flags filtered directly from token array (jac=0.667).
 * @internal Exported for testing
 */
export function isLinePrintingCommand(
  command: string,
  expressions: string[],
): boolean {
  const tokens = splitCommand_DEPRECATED(command)
  if (tokens[0] !== 'sed') return false

  const flags = tokens.slice(1).filter((w) => w.startsWith('-') && w !== '--')

  const allowedFlags = [
    '-n',
    '--quiet',
    '--silent',
    '-E',
    '--regexp-extended',
    '-r',
    '-z',
    '--zero-terminated',
    '--posix',
  ]

  if (!validateFlagsAgainstAllowlist(flags, allowedFlags)) {
    return false
  }

  let hasNFlag = false
  for (const flag of flags) {
    if (flag === '-n' || flag === '--quiet' || flag === '--silent') {
      hasNFlag = true
      break
    }
    if (flag.startsWith('-') && !flag.startsWith('--') && flag.includes('n')) {
      hasNFlag = true
      break
    }
  }

  if (!hasNFlag) {
    return false
  }

  if (expressions.length === 0) {
    return false
  }

  for (const expr of expressions) {
    const commands = expr.split(';')
    for (const cmd of commands) {
      if (!isPrintCommand(cmd.trim())) {
        return false
      }
    }
  }

  return true
}

/**
 * Helper: Check if a single command is a valid print command.
 * STRICT ALLOWLIST — only these exact forms are allowed:
 * - p (print all)
 * - Np (print line N, where N is digits)
 * - N,Mp (print lines N through M)
 * @internal Exported for testing
 */
export function isPrintCommand(cmd: string): boolean {
  if (!cmd) return false
  return /^(?:\d+|\d+,\d+)?p$/.test(cmd)
}

/**
 * Pattern 2: Check if this is a substitution command.
 *
 * v112: uses splitCommand_DEPRECATED (XM) for tokenization (jac=0.6).
 * @internal
 */
function isSubstitutionCommand(
  command: string,
  expressions: string[],
  hasFileArguments: boolean,
  options?: { allowFileWrites?: boolean },
): boolean {
  const allowFileWrites = options?.allowFileWrites ?? false

  if (!allowFileWrites && hasFileArguments) {
    return false
  }

  const tokens = splitCommand_DEPRECATED(command)
  if (tokens[0] !== 'sed') return false

  const flags = tokens.slice(1).filter((z) => z.startsWith('-') && z !== '--')

  const allowedFlags = ['-E', '--regexp-extended', '-r', '--posix']

  if (allowFileWrites) {
    allowedFlags.push('-i', '--in-place')
  }

  if (!validateFlagsAgainstAllowlist(flags, allowedFlags)) {
    return false
  }

  if (expressions.length !== 1) {
    return false
  }

  const expr = expressions[0]!.trim()

  if (!expr.startsWith('s')) {
    return false
  }

  const substitutionMatch = expr.match(/^s\/(.*?)$/)
  if (!substitutionMatch) {
    return false
  }

  const rest = substitutionMatch[1]!

  let delimiterCount = 0
  let lastDelimiterPos = -1
  let i = 0
  while (i < rest.length) {
    if (rest[i] === '\\') {
      i += 2
      continue
    }
    if (rest[i] === '/') {
      delimiterCount++
      lastDelimiterPos = i
    }
    i++
  }

  if (delimiterCount !== 2) {
    return false
  }

  const exprFlags = rest.slice(lastDelimiterPos + 1)

  const allowedFlagChars = /^[gpimIM]*[1-9]?[gpimIM]*$/
  if (!allowedFlagChars.test(exprFlags)) {
    return false
  }

  return true
}

/**
 * Checks if a sed command is allowed by the allowlist.
 *
 * v112: minor refactor — `allowFileWrites` variable renamed/inlined, and
 * the `isPattern1`/`isPattern2` check structure slightly changed (jac=0.444).
 */
export function sedCommandIsAllowedByAllowlist(
  command: string,
  options?: { allowFileWrites?: boolean },
): boolean {
  const allowFileWrites = options?.allowFileWrites ?? false

  let expressions: string[]
  try {
    expressions = extractSedExpressions(command)
  } catch (_error) {
    return false
  }

  const hasFileArguments = hasFileArgs(command)

  let isPattern1 = false
  let isPattern2 = false

  if (allowFileWrites) {
    isPattern2 = isSubstitutionCommand(command, expressions, hasFileArguments, {
      allowFileWrites: true,
    })
  } else {
    isPattern1 = isLinePrintingCommand(command, expressions)
    isPattern2 = isSubstitutionCommand(command, expressions, hasFileArguments)
  }

  if (!isPattern1 && !isPattern2) {
    return false
  }

  for (const expr of expressions) {
    if (isPattern2 && expr.includes(';')) {
      return false
    }
  }

  for (const expr of expressions) {
    if (containsDangerousOperations(expr)) {
      return false
    }
  }

  return true
}

/**
 * Check if a sed command has file arguments (not just stdin).
 *
 * v112: uses splitCommand_DEPRECATED for tokenization (jac=0.692).
 * Glob-pattern check removed (no longer using tryParseShellCommand with
 * glob token type).
 * @internal Exported for testing
 */
export function hasFileArgs(command: string): boolean {
  const tokens = splitCommand_DEPRECATED(command)
  if (tokens[0] !== 'sed') return false

  const args = tokens.slice(1)
  let argCount = 0
  let hasEFlag = false

  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (typeof arg !== 'string') continue

    if ((arg === '-e' || arg === '--expression') && i + 1 < args.length) {
      hasEFlag = true
      i++
      continue
    }

    if (arg.startsWith('--expression=')) {
      hasEFlag = true
      continue
    }

    if (arg.startsWith('-e=')) {
      hasEFlag = true
      continue
    }

    if (arg.startsWith('-')) continue

    argCount++

    if (hasEFlag) {
      return true
    }

    if (argCount > 1) {
      return true
    }
  }

  return false
}

/**
 * Extract sed expressions from command, ignoring flags and filenames.
 *
 * v112: uses splitCommand_DEPRECATED for tokenization (jac=0.857).
 * Dangerous flag combo check moved to a `.some()` test on the pre-parsed
 * args array (checking -e[wWe] and -w[eE] pattern on token strings).
 * @throws Error if parsing fails
 * @internal Exported for testing
 */
export function extractSedExpressions(command: string): string[] {
  const expressions: string[] = []

  const tokens = splitCommand_DEPRECATED(command)
  if (tokens[0] !== 'sed') return expressions

  const args = tokens.slice(1)

  // Reject dangerous flag combinations like -ew, -eW, -ee, -we
  if (
    args.some(
      (arg) => /^-e[wWe]/.test(arg) || /^-w[eE]/.test(arg),
    )
  ) {
    throw new Error('Dangerous flag combination detected')
  }

  if (args.length === 0) {
    throw new Error('No sed arguments')
  }

  try {
    let foundEFlag = false
    let foundExpression = false

    for (let i = 0; i < args.length; i++) {
      const arg = args[i]

      if (typeof arg !== 'string') continue

      if ((arg === '-e' || arg === '--expression') && i + 1 < args.length) {
        foundEFlag = true
        const nextArg = args[i + 1]
        if (typeof nextArg === 'string') {
          expressions.push(nextArg)
          i++
        }
        continue
      }

      if (arg.startsWith('--expression=')) {
        foundEFlag = true
        expressions.push(arg.slice(13))
        continue
      }

      if (arg.startsWith('-e=')) {
        foundEFlag = true
        expressions.push(arg.slice(3))
        continue
      }

      if (arg.startsWith('-')) continue

      if (!foundEFlag && !foundExpression) {
        expressions.push(arg)
        foundExpression = true
        continue
      }

      break
    }
  } catch (error) {
    throw new Error(
      `Failed to parse sed command: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }

  return expressions
}

/**
 * Check if a sed expression contains dangerous operations (denylist).
 * @param expression Single sed expression (without quotes)
 * @returns true if dangerous, false if safe
 */
function containsDangerousOperations(expression: string): boolean {
  const cmd = expression.trim()
  if (!cmd) return false

  // eslint-disable-next-line no-control-regex
  if (/[^\x01-\x7F]/.test(cmd)) {
    return true
  }

  if (cmd.includes('{') || cmd.includes('}')) {
    return true
  }

  if (cmd.includes('\n')) {
    return true
  }

  const hashIndex = cmd.indexOf('#')
  if (hashIndex !== -1 && !(hashIndex > 0 && cmd[hashIndex - 1] === 's')) {
    return true
  }

  if (/^!/.test(cmd) || /[/\d$]!/.test(cmd)) {
    return true
  }

  if (/\d\s*~\s*\d|,\s*~\s*\d|\$\s*~\s*\d/.test(cmd)) {
    return true
  }

  if (/^,/.test(cmd)) {
    return true
  }

  if (/,\s*[+-]/.test(cmd)) {
    return true
  }

  if (/s\\/.test(cmd) || /\\[|#%@]/.test(cmd)) {
    return true
  }

  if (/\\\/.*[wW]/.test(cmd)) {
    return true
  }

  if (/\/[^/]*\s+[wWeE]/.test(cmd)) {
    return true
  }

  if (/^s\//.test(cmd) && !/^s\/[^/]*\/[^/]*\/[^/]*$/.test(cmd)) {
    return true
  }

  if (/^s./.test(cmd) && /[wWeE]$/.test(cmd)) {
    const properSubst = /^s([^\\\n]).*?\1.*?\1[^wWeE]*$/.test(cmd)
    if (!properSubst) {
      return true
    }
  }

  if (
    /^[wW]\s*\S+/.test(cmd) ||
    /^\d+\s*[wW]\s*\S+/.test(cmd) ||
    /^\$\s*[wW]\s*\S+/.test(cmd) ||
    /^\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(cmd) ||
    /^\d+,\d+\s*[wW]\s*\S+/.test(cmd) ||
    /^\d+,\$\s*[wW]\s*\S+/.test(cmd) ||
    /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(cmd)
  ) {
    return true
  }

  if (
    /^e/.test(cmd) ||
    /^\d+\s*e/.test(cmd) ||
    /^\$\s*e/.test(cmd) ||
    /^\/[^/]*\/[IMim]*\s*e/.test(cmd) ||
    /^\d+,\d+\s*e/.test(cmd) ||
    /^\d+,\$\s*e/.test(cmd) ||
    /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*e/.test(cmd)
  ) {
    return true
  }

  const substitutionMatch = cmd.match(/s([^\\\n]).*?\1.*?\1(.*?)$/)
  if (substitutionMatch) {
    const flags = substitutionMatch[2] || ''

    if (flags.includes('w') || flags.includes('W')) {
      return true
    }

    if (flags.includes('e') || flags.includes('E')) {
      return true
    }
  }

  const yCommandMatch = cmd.match(/y([^\\\n])/)
  if (yCommandMatch) {
    if (/[wWeE]/.test(cmd)) {
      return true
    }
  }

  return false
}

/**
 * Cross-cutting validation step for sed commands.
 *
 * v112: `decisionReason` gains a `bashMissKind: 'sed-dangerous'` field
 * (jac=0.857, cos=1). `splitCommand_DEPRECATED` (TO) used for command splitting.
 *
 * @param input - Object containing the command string
 * @param toolPermissionContext - Context containing mode and permissions
 */
export function checkSedConstraints(
  input: { command: string },
  toolPermissionContext: ToolPermissionContext,
): PermissionResult {
  const commands = splitCommand_DEPRECATED(input.command)

  for (const cmd of commands) {
    const trimmed = cmd.trim()
    const baseCmd = trimmed.split(/\s+/)[0]
    if (baseCmd !== 'sed') {
      continue
    }

    const allowFileWrites = toolPermissionContext.mode === 'acceptEdits'

    const isAllowed = sedCommandIsAllowedByAllowlist(trimmed, {
      allowFileWrites,
    })

    if (!isAllowed) {
      return {
        behavior: 'ask',
        message:
          'sed command requires approval (contains potentially dangerous operations)',
        decisionReason: {
          type: 'other',
          reason:
            'sed command contains operations that require explicit approval (e.g., write commands, execute commands)',
          // v112 adds bashMissKind field
          bashMissKind: 'sed-dangerous',
        } as any,
      }
    }
  }

  return {
    behavior: 'passthrough',
    message: 'No dangerous sed operations detected',
  }
}
