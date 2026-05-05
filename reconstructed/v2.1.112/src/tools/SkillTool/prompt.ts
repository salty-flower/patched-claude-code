import { memoize } from 'lodash-es'
import type { Command } from 'src/commands.js'
import {
  getCommandName,
  getSkillToolCommands,
  getSlashCommandToolSkills,
} from 'src/commands.js'
import { COMMAND_NAME_TAG } from '../../constants/xml.js'
import { stringWidth } from '../../ink/stringWidth.js'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from '../../services/analytics/index.js'
import { count } from '../../utils/array.js'
import { logForDebugging } from '../../utils/debug.js'
import { toError } from '../../utils/errors.js'
import { truncate } from '../../utils/format.js'
import { logError } from '../../utils/log.js'

// Skill listing gets a percentage of the context window (in characters)
// v112: budget computation changed — now driven by getCharBudget() helper
// that takes context window tokens and a per-model ratio.
// TODO(lift): getCharBudget inner constants (ah4, oh4, fJz, rh4) at byte ~5667400
export const SKILL_BUDGET_CONTEXT_PERCENT = 0.01
export const CHARS_PER_TOKEN = 4
export const DEFAULT_CHAR_BUDGET = 8_000 // Fallback

// Per-entry hard cap.
export const MAX_LISTING_DESC_CHARS = 250

// v112: getCharBudget signature changed — takes contextWindowTokens only
// (v88 took only contextWindowTokens too, but the computation is different)
export function getCharBudget(contextWindowTokens?: number): number {
  if (Number(process.env.SLASH_COMMAND_TOOL_CHAR_BUDGET)) {
    return Number(process.env.SLASH_COMMAND_TOOL_CHAR_BUDGET)
  }
  // TODO(lift): exact ratio constants (ah4, oh4, fJz, rh4) at byte ~5667240
  // v112_min: `let K=ah4(),_=q?q*oh4*K:fJz*(K/rh4);return Math.max(1,Math.floor(_))`
  // Approximation below reconstructed from structure:
  if (contextWindowTokens) {
    return Math.max(
      1,
      Math.floor(contextWindowTokens * CHARS_PER_TOKEN * SKILL_BUDGET_CONTEXT_PERCENT),
    )
  }
  return DEFAULT_CHAR_BUDGET
}

function getCommandDescription(cmd: Command): string {
  const desc = cmd.whenToUse
    ? `${cmd.description} - ${cmd.whenToUse}`
    : cmd.description
  return desc.length > MAX_LISTING_DESC_CHARS
    ? desc.slice(0, MAX_LISTING_DESC_CHARS - 1) + '\u2026'
    : desc
}

function formatCommandDescription(cmd: Command): string {
  const displayName = getCommandName(cmd)
  if (
    cmd.name !== displayName &&
    cmd.type === 'prompt' &&
    cmd.source === 'plugin'
  ) {
    logForDebugging(
      `Skill prompt: showing "${cmd.name}" (userFacingName="${displayName}")`,
    )
  }

  return `- ${cmd.name}: ${getCommandDescription(cmd)}`
}

const MIN_DESC_LENGTH = 20

// v112: formatCommandsWithinBudget takes an additional third param `_skillOverridesEnabled`
// (unused in the output, controls name-only display for disabled skills)
// jac=0.833 drift from v88
export function formatCommandsWithinBudget(
  commands: Command[],
  contextWindowTokens?: number,
  // TODO(lift): third param — skillOverride/disabled skill filter flag at byte ~5667700
  _skillOverridesEnabled?: unknown,
): string {
  if (commands.length === 0) return ''

  const budget = getCharBudget(contextWindowTokens)

  // v112 adds name-only set for skills with overrides === 'name-only'
  const nameOnlyIndices = new Set<number>()
  const fullEntries = commands.map((cmd, i) => {
    // TODO(lift): u56(W)==="name-only" check at byte ~5667730 — skillOverrides gate
    return { cmd, full: formatCommandDescription(cmd) }
  })

  const fullTotal =
    fullEntries.reduce((sum, e) => sum + stringWidth(e.full), 0) +
    (fullEntries.length - 1)

  if (fullTotal <= budget) {
    return fullEntries.map(e => e.full).join('\n')
  }

  // Partition into bundled (never truncated) and rest
  // v112: bundled set is union of nameOnlyIndices + bundled source
  const bundledIndices = new Set<number>(nameOnlyIndices)
  const restCommands: Command[] = []
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i]!
    if (cmd.type === 'prompt' && cmd.source === 'bundled') {
      bundledIndices.add(i)
    } else if (!nameOnlyIndices.has(i)) {
      restCommands.push(cmd)
    }
  }

  const bundledChars = fullEntries.reduce(
    (sum, e, i) =>
      bundledIndices.has(i) ? sum + stringWidth(e.full) + 1 : sum,
    0,
  )
  const remainingBudget = budget - bundledChars

  if (restCommands.length === 0) {
    return fullEntries.map(e => e.full).join('\n')
  }

  const restNameOverhead =
    restCommands.reduce((sum, cmd) => sum + stringWidth(cmd.name) + 4, 0) +
    (restCommands.length - 1)
  const availableForDescs = remainingBudget - restNameOverhead
  const maxDescLen = Math.floor(availableForDescs / restCommands.length)

  if (maxDescLen < MIN_DESC_LENGTH) {
    return commands
      .map((cmd, i) =>
        bundledIndices.has(i) ? fullEntries[i]!.full : `- ${cmd.name}`,
      )
      .join('\n')
  }

  // Truncate non-bundled descriptions to fit within budget
  count(
    restCommands,
    cmd => stringWidth(getCommandDescription(cmd)) > maxDescLen,
  )

  return commands
    .map((cmd, i) => {
      if (bundledIndices.has(i)) return fullEntries[i]!.full
      const description = getCommandDescription(cmd)
      return `- ${cmd.name}: ${truncate(description, maxDescLen)}`
    })
    .join('\n')
}

// v112: prompt text changed — simpler version without examples
// jac=0.545, cos=0.999
export const getPrompt = memoize(async (_cwd: string): Promise<string> => {
  return `Execute a skill within the main conversation

When users ask you to perform tasks, check if any of the available skills match. Skills provide specialized capabilities and domain knowledge.

When users reference a "slash command" or "/<something>", they are referring to a skill. Use this tool to invoke it.

How to invoke:
- Set \`skill\` to the exact name of an available skill (no leading slash). For plugin-namespaced skills use the fully qualified \`plugin:skill\` form.
- Set \`args\` to pass optional arguments.

Important:
- Available skills are listed in system-reminder messages in the conversation
- Only invoke a skill that appears in that list, or one the user explicitly typed as \`/<name>\` in their message. Never guess or invent a skill name from training data; otherwise do not call this tool
- When a skill matches the user's request, this is a BLOCKING REQUIREMENT: invoke the relevant Skill tool BEFORE generating any other response about the task
- NEVER mention a skill without actually calling this tool
- Do not invoke a skill that is already running
- Do not use this tool for built-in CLI commands (like /help, /clear, etc.)
- If you see a <${COMMAND_NAME_TAG}> tag in the current conversation turn, the skill has ALREADY been loaded - follow the instructions directly instead of calling this tool again
`
})

export async function getSkillToolInfo(cwd: string): Promise<{
  totalCommands: number
  includedCommands: number
}> {
  const agentCommands = await getSkillToolCommands(cwd)

  return {
    totalCommands: agentCommands.length,
    includedCommands: agentCommands.length,
  }
}

// Returns the commands included in the SkillTool prompt.
export function getLimitedSkillToolCommands(cwd: string): Promise<Command[]> {
  return getSkillToolCommands(cwd)
}

export function clearPromptCache(): void {
  getPrompt.cache?.clear?.()
}

export async function getSkillInfo(cwd: string): Promise<{
  totalSkills: number
  includedSkills: number
}> {
  try {
    const skills = await getSlashCommandToolSkills(cwd)

    return {
      totalSkills: skills.length,
      includedSkills: skills.length,
    }
  } catch (error) {
    logError(toError(error))

    return {
      totalSkills: 0,
      includedSkills: 0,
    }
  }
}
