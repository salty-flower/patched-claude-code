import type { PermissionRuleValue } from './PermissionRule.js'

// TODO(lift): normalizeLegacyToolName moved out of this file in v112.
// Used by permissionRuleValueFromString. Import from wherever it landed.
// import { normalizeLegacyToolName } from './permissionSetup.js'

// TODO(lift): escapeRuleContent moved to bundle offset ~12924460 in v112.
// Used by permissionRuleValueToString.
// TODO(lift): unescapeRuleContent moved to bundle offset ~12924460 in v112.
// Used by permissionRuleValueFromString.

export function getLegacyToolNames(canonicalName: string): string[] {
  const result: string[] = []
  for (const [legacy, canonical] of Object.entries(LEGACY_TOOL_NAME_ALIASES)) {
    if (canonical === canonicalName) result.push(legacy)
  }
  return result
}

/**
 * Parses a permission rule string into its components.
 * Handles escaped parentheses in the content portion.
 *
 * Format: "ToolName" or "ToolName(content)"
 * Content may contain escaped parentheses: \( and \)
 *
 * @example
 * permissionRuleValueFromString('Bash') // => { toolName: 'Bash' }
 * permissionRuleValueFromString('Bash(npm install)') // => { toolName: 'Bash', ruleContent: 'npm install' }
 * permissionRuleValueFromString('Bash(python -c "print\(1\)")') // => { toolName: 'Bash', ruleContent: 'python -c "print(1)"' }
 */
export function permissionRuleValueFromString(
  ruleString: string,
): PermissionRuleValue {
  // Find the first unescaped opening parenthesis
  const openParenIndex = findFirstUnescapedChar(ruleString, '(')
  if (openParenIndex === -1) {
    // No parenthesis found - this is just a tool name
    // TODO(lift): normalizeLegacyToolName import
    return { toolName: ruleString }
  }

  // Find the last unescaped closing parenthesis
  const closeParenIndex = findLastUnescapedChar(ruleString, ')')
  if (closeParenIndex === -1 || closeParenIndex <= openParenIndex) {
    // No matching closing paren or malformed - treat as tool name
    return { toolName: ruleString }
  }

  // Ensure the closing paren is at the end
  if (closeParenIndex !== ruleString.length - 1) {
    // Content after closing paren - treat as tool name
    return { toolName: ruleString }
  }

  const toolName = ruleString.substring(0, openParenIndex)
  const rawContent = ruleString.substring(openParenIndex + 1, closeParenIndex)

  // Missing toolName (e.g., "(foo)") is malformed - treat whole string as tool name
  if (!toolName) {
    return { toolName: ruleString }
  }

  // Empty content (e.g., "Bash()") or standalone wildcard (e.g., "Bash(*)")
  // should be treated as just the tool name (tool-wide rule)
  if (rawContent === '' || rawContent === '*') {
    return { toolName: toolName }
  }

  // Unescape the content
  // TODO(lift): unescapeRuleContent import
  const ruleContent = rawContent
  return { toolName: toolName, ruleContent }
}

/**
 * Converts a permission rule value to its string representation.
 * Escapes parentheses in the content to prevent parsing issues.
 *
 * @example
 * permissionRuleValueToString({ toolName: 'Bash' }) // => 'Bash'
 * permissionRuleValueToString({ toolName: 'Bash', ruleContent: 'npm install' }) // => 'Bash(npm install)'
 * permissionRuleValueToString({ toolName: 'Bash', ruleContent: 'python -c "print(1)"' }) // => 'Bash(python -c "print\(1\)")'
 */
export function permissionRuleValueToString(
  ruleValue: PermissionRuleValue,
): string {
  if (!ruleValue.ruleContent) {
    return ruleValue.toolName
  }
  // TODO(lift): escapeRuleContent import
  const escapedContent = ruleValue.ruleContent
  return `${ruleValue.toolName}(${escapedContent})`
}

/**
 * Find the index of the first unescaped occurrence of a character.
 * A character is escaped if preceded by an odd number of backslashes.
 */
function findFirstUnescapedChar(str: string, char: string): number {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      // Count preceding backslashes
      let backslashCount = 0
      let j = i - 1
      while (j >= 0 && str[j] === '\\') {
        backslashCount++
        j--
      }
      // If even number of backslashes, the char is unescaped
      if (backslashCount % 2 === 0) {
        return i
      }
    }
  }
  return -1
}

/**
 * Find the index of the last unescaped occurrence of a character.
 * A character is escaped if preceded by an odd number of backslashes.
 */
function findLastUnescapedChar(str: string, char: string): number {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) {
      // Count preceding backslashes
      let backslashCount = 0
      let j = i - 1
      while (j >= 0 && str[j] === '\\') {
        backslashCount++
        j--
      }
      // If even number of backslashes, the char is unescaped
      if (backslashCount % 2 === 0) {
        return i
      }
    }
  }
  return -1
}

// TODO(lift): LEGACY_TOOL_NAME_ALIASES construction moved to init block in v112.
// The constant is still needed by getLegacyToolNames.
const LEGACY_TOOL_NAME_ALIASES: Record<string, string> = {}
