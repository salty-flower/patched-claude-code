import type { ToolResultBlockParam } from '@anthropic-ai/sdk/resources/index.mjs'
import { copyFile, stat as fsStat, truncate as fsTruncate, link } from 'fs/promises'
import * as React from 'react'
import type { CanUseToolFn } from 'src/hooks/useCanUseTool.js'
import { z } from 'zod/v4'
import { TOOL_SUMMARY_MAX_LENGTH } from '../../constants/toolLimits.js'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from '../../services/analytics/index.js'
import type {
  SetToolJSXFn,
  ToolCallProgress,
  ToolUseContext,
  ValidationResult,
} from '../../Tool.js'
import { buildTool, type ToolDef } from '../../Tool.js'
import {
  backgroundExistingForegroundTask,
  markTaskNotified,
  spawnShellTask,
  unregisterForeground,
} from '../../tasks/LocalShellTask/LocalShellTask.js'
import type { AgentId } from '../../types/ids.js'
import type { AssistantMessage } from '../../types/message.js'
import type { BashProgress } from '../../types/tools.js'
import { parseForSecurity } from '../../utils/bash/ast.js'
// TODO(lift): TO = some split variant at byte ~9894652 — v112 uses a simplified command splitter
// that lacks redirect/operator tracking compared to v88 splitCommandWithOperators
import { splitCommandWithOperators as TO } from '../../utils/bash/commands.js'
import { extractClaudeCodeHints } from '../../utils/claudeCodeHints.js'
import { detectCodeIndexingFromCommand } from '../../utils/codeIndexing.js'
import { isEnvTruthy } from '../../utils/envUtils.js'
import { isENOENT, ShellError } from '../../utils/errors.js'
import {
  detectFileEncoding,
  detectLineEndings,
  getFileModificationTime,
  writeTextContent,
} from '../../utils/file.js'
import { fileHistoryEnabled, fileHistoryTrackEdit } from '../../utils/fileHistory.js'
import { truncate } from '../../utils/format.js'
import { getFsImplementation } from '../../utils/fsOperations.js'
import { isFullscreenEnvEnabled } from '../../utils/fullscreen.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { expandPath } from '../../utils/path.js'
import type { PermissionResult } from '../../utils/permissions/PermissionResult.js'
import { maybeRecordPluginHint } from '../../utils/plugins/hintRecommendation.js'
import { exec } from '../../utils/Shell.js'
import type { ExecResult } from '../../utils/ShellCommand.js'
import { SandboxManager } from '../../utils/sandbox/sandbox-adapter.js'
import { semanticBoolean } from '../../utils/semanticBoolean.js'
import { semanticNumber } from '../../utils/semanticNumber.js'
import { EndTruncatingAccumulator } from '../../utils/stringUtils.js'
import { getTaskOutputPath } from '../../utils/task/diskOutput.js'
import { TaskOutput } from '../../utils/task/TaskOutput.js'
import { isOutputLineTruncated } from '../../utils/terminal.js'
import {
  buildLargeToolResultMessage,
  ensureToolResultsDir,
  generatePreview,
  getToolResultPath,
  PREVIEW_SIZE_BYTES,
} from '../../utils/toolResultStorage.js'
import { userFacingName as fileEditUserFacingName } from '../FileEditTool/UI.js'
import { trackGitOperations } from '../shared/gitOperationTracking.js'
import {
  bashToolHasPermission,
  commandHasAnyCd,
  matchWildcardPattern,
  permissionRuleExtractPrefix,
} from './bashPermissions.js'
import { interpretCommandResult } from './commandSemantics.js'
import { getDefaultTimeoutMs, getMaxTimeoutMs, getSimplePrompt } from './prompt.js'
import { checkReadOnlyConstraints } from './readOnlyValidation.js'
import { parseSedEditCommand } from './sedEditParser.js'
import { shouldUseSandbox } from './shouldUseSandbox.js'
import { BASH_TOOL_NAME } from './toolName.js'
import {
  BackgroundHint,
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseProgressMessage,
  renderToolUseQueuedMessage,
} from './UI.js'
import {
  buildImageToolResult,
  isImageOutput,
  resetCwdIfOutsideProject,
  resizeShellImageOutput,
  stdErrAppendShellResetMessage,
  stripEmptyLines,
} from './utils.js'

const EOL = '\n'

// Progress display constants
const PROGRESS_THRESHOLD_MS = 2000 // Show progress after 2 seconds

// In assistant mode, blocking bash auto-backgrounds after this many ms in the main agent
// TODO(lift): bSK constant at byte ~9898666 — likely still 15000 but unconfirmed from v112_min
const ASSISTANT_BLOCKING_BUDGET_MS = 15_000

// Search commands for collapsible display (grep, find, etc.)
const BASH_SEARCH_COMMANDS = new Set([
  'find', 'grep', 'rg', 'ag', 'ack', 'locate', 'which', 'whereis',
])

// Read/view commands for collapsible display (cat, head, etc.)
const BASH_READ_COMMANDS = new Set([
  'cat', 'head', 'tail', 'less', 'more',
  // Analysis commands
  'wc', 'stat', 'file', 'strings',
  // Data processing — commonly used to parse/transform file content in pipes
  'jq', 'awk', 'cut', 'sort', 'uniq', 'tr',
])

// Directory-listing commands for collapsible display (ls, tree, du).
const BASH_LIST_COMMANDS = new Set(['ls', 'tree', 'du'])

// Commands that are semantic-neutral in any position — pure output/status commands
const BASH_SEMANTIC_NEUTRAL_COMMANDS = new Set(['echo', 'printf', 'true', 'false', ':'])

// Commands that should not be auto-backgrounded
const DISALLOWED_AUTO_BACKGROUND_COMMANDS = ['sleep']

// Check if background tasks are disabled at module load time
// eslint-disable-next-line custom-rules/no-process-env-top-level -- Intentional: schema must be defined at module load
const isBackgroundTasksDisabled = isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS)

/**
 * Checks if a bash command is a search or read operation.
 * v112 (FVY): simplified — no redirect-skip logic, no lastOperator tracking.
 * Uses the simpler `TO` split that drops operator awareness.
 */
export function isSearchOrReadBashCommand(command: string): {
  isSearch: boolean
  isRead: boolean
  isList: boolean
} {
  const parts = TO(command)
  if (parts.length === 0) {
    return { isSearch: false, isRead: false, isList: false }
  }
  let hasSearch = false
  let hasRead = false
  let hasList = false
  let hasNonNeutralCommand = false
  for (const part of parts) {
    const baseCommand = part.trim().split(/\s+/)[0]
    if (!baseCommand || BASH_SEMANTIC_NEUTRAL_COMMANDS.has(baseCommand)) continue
    hasNonNeutralCommand = true
    const isPartSearch = BASH_SEARCH_COMMANDS.has(baseCommand)
    const isPartRead = BASH_READ_COMMANDS.has(baseCommand)
    const isPartList = BASH_LIST_COMMANDS.has(baseCommand)
    if (!isPartSearch && !isPartRead && !isPartList) {
      return { isSearch: false, isRead: false, isList: false }
    }
    if (isPartSearch) hasSearch = true
    if (isPartRead) hasRead = true
    if (isPartList) hasList = true
  }
  if (!hasNonNeutralCommand) {
    return { isSearch: false, isRead: false, isList: false }
  }
  return { isSearch: hasSearch, isRead: hasRead, isList: hasList }
}

/**
 * Checks if a bash command is expected to produce no stdout on success.
 * v112 (cVY): drastically simplified — checks only parts[0] against
 * DISALLOWED_AUTO_BACKGROUND_COMMANDS (just "sleep"). The v88 version
 * checked a full BASH_SILENT_COMMANDS set; v112 dropped that logic.
 */
function isSilentBashCommand(command: string): boolean {
  const parts = TO(command)
  if (parts.length === 0) return true
  const baseCommand = parts[0]?.trim().split(/\s+/)[0]
  if (!baseCommand) return true
  return !DISALLOWED_AUTO_BACKGROUND_COMMANDS.includes(baseCommand)
}

const fullInputSchema = lazySchema(() =>
  z.strictObject({
    command: z.string().describe('The command to execute'),
    timeout: semanticNumber(z.number().optional()).describe(
      `Optional timeout in milliseconds (max ${getMaxTimeoutMs()})`,
    ),
    description: z.string().optional().describe(
      `Clear, concise description of what this command does in active voice. Never use words like "complex" or "risk" in the description - just describe what it does.

For simple commands (git, npm, standard CLI tools), keep it brief (5-10 words):
- ls → "List files in current directory"
- git status → "Show working tree status"
- npm install → "Install package dependencies"

For commands that are harder to parse at a glance (piped commands, obscure flags, etc.), add enough context to clarify what it does:
- find . -name "*.tmp" -exec rm {} \\; → "Find and delete all .tmp files recursively"
- git reset --hard origin/main → "Discard all local changes and match remote main"
- curl -s url | jq '.data[]' → "Fetch JSON from URL and extract data array elements"`,
    ),
    run_in_background: semanticBoolean(z.boolean().optional()).describe(
      'Set to true to run this command in the background. Use Read to read the output later.',
    ),
    dangerouslyDisableSandbox: semanticBoolean(z.boolean().optional()).describe(
      'Set this to true to dangerously override sandbox mode and run commands without sandboxing.',
    ),
    // v112 new: allows re-running a prior command by alias (e.g. 'b3' from [rerun: bN] footer)
    rerun: z.string().optional().describe(
      "Rerun a prior command exactly by passing the alias from a previous result's [rerun: bN] footer (e.g. 'b3'). Mutually exclusive with 'command'.",
    ),
    _simulatedSedEdit: z
      .object({ filePath: z.string(), newContent: z.string() })
      .optional()
      .describe('Internal: pre-computed sed edit result from preview'),
  }),
)

// v112 (ISK): inputSchema now also gates rerun on isFullscreenEnvEnabled (A36).
// Non-fullscreen mode omits `rerun` regardless of background-task status.
const inputSchema = lazySchema(() =>
  isBackgroundTasksDisabled
    ? isFullscreenEnvEnabled()
      ? fullInputSchema().omit({ run_in_background: true, _simulatedSedEdit: true })
      : fullInputSchema().omit({ run_in_background: true, _simulatedSedEdit: true, rerun: true })
    : isFullscreenEnvEnabled()
    ? fullInputSchema().omit({ _simulatedSedEdit: true })
    : fullInputSchema().omit({ _simulatedSedEdit: true, rerun: true }),
)
type InputSchema = ReturnType<typeof inputSchema>

// Use fullInputSchema for the type to always include run_in_background
export type BashToolInput = z.infer<ReturnType<typeof fullInputSchema>>

const COMMON_BACKGROUND_COMMANDS = [
  'npm', 'yarn', 'pnpm', 'node', 'python', 'python3', 'go', 'cargo', 'make',
  'docker', 'terraform', 'webpack', 'vite', 'jest', 'pytest', 'curl', 'wget',
  'build', 'test', 'serve', 'watch', 'dev',
] as const

/**
 * v112 (yY7): uses part.split(" ")[0] instead of v88's part.trim().split(/\s+/)[0].
 */
function getCommandTypeForLogging(
  command: string,
): AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS {
  const parts = TO(command)
  if (parts.length === 0) {
    return 'other' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
  }
  for (const part of parts) {
    const baseCommand = part.split(' ')[0] || ''
    if (
      COMMON_BACKGROUND_COMMANDS.includes(
        baseCommand as (typeof COMMON_BACKGROUND_COMMANDS)[number],
      )
    ) {
      return baseCommand as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
    }
  }
  return 'other' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
}

// v112: outputSchema (dVY) adds staleReadFileStateHint field
const outputSchema = lazySchema(() =>
  z.object({
    stdout: z.string().describe('The standard output of the command'),
    stderr: z.string().describe('The standard error output of the command'),
    rawOutputPath: z
      .string()
      .optional()
      .describe('Path to raw output file for large MCP tool outputs'),
    interrupted: z.boolean().describe('Whether the command was interrupted'),
    isImage: z
      .boolean()
      .optional()
      .describe('Flag to indicate if stdout contains image data'),
    backgroundTaskId: z
      .string()
      .optional()
      .describe('ID of the background task if command is running in background'),
    backgroundedByUser: z
      .boolean()
      .optional()
      .describe('True if the user manually backgrounded the command with Ctrl+B'),
    assistantAutoBackgrounded: z
      .boolean()
      .optional()
      .describe(
        'True if assistant-mode auto-backgrounded a long-running blocking command',
      ),
    dangerouslyDisableSandbox: z
      .boolean()
      .optional()
      .describe('Flag to indicate if sandbox mode was overridden'),
    returnCodeInterpretation: z
      .string()
      .optional()
      .describe(
        'Semantic interpretation for non-error exit codes with special meaning',
      ),
    noOutputExpected: z
      .boolean()
      .optional()
      .describe('Whether the command is expected to produce no output on success'),
    structuredContent: z
      .array(z.any())
      .optional()
      .describe('Structured content blocks'),
    persistedOutputPath: z
      .string()
      .optional()
      .describe(
        'Path to the persisted full output in tool-results dir (set when output is too large for inline)',
      ),
    persistedOutputSize: z
      .number()
      .optional()
      .describe(
        'Total size of the output in bytes (set when output is too large for inline)',
      ),
    // v112 new field
    staleReadFileStateHint: z
      .string()
      .optional()
      .describe(
        "Model-facing note listing readFileState entries whose mtime bumped during this command (set when WRITE_COMMAND_MARKERS matches)",
      ),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>
export type Out = z.infer<OutputSchema>

// Re-export BashProgress from centralized types to break import cycles
export type { BashProgress } from '../../types/tools.js'

/**
 * Checks if a command is allowed to be automatically backgrounded.
 */
function isAutobackgroundingAllowed(command: string): boolean {
  const parts = TO(command)
  if (parts.length === 0) return true
  const baseCommand = parts[0]?.trim()
  if (!baseCommand) return true
  return !DISALLOWED_AUTO_BACKGROUND_COMMANDS.includes(baseCommand)
}

/**
 * Detect standalone or leading `sleep N` patterns that should use Monitor instead.
 * v112 (lVY): used in validateInput when KF() gate is true.
 */
export function detectBlockedSleepPattern(command: string): string | null {
  const parts = TO(command)
  if (parts.length === 0) return null
  const first = parts[0]?.trim() ?? ''
  const m = /^sleep\s+(\d+)\s*$/.exec(first)
  if (!m) return null
  const secs = parseInt(m[1]!, 10)
  if (secs < 2) return null
  const rest = parts.slice(1).join(' ').trim()
  return rest ? `sleep ${secs} followed by: ${rest}` : `standalone sleep ${secs}`
}

type SimulatedSedEditResult = {
  data: Out
}
// v112: applySedEdit context uses getFileHistoryState + applyFileHistoryOp
type SimulatedSedEditContext = Pick<
  ToolUseContext,
  'readFileState' | 'getFileHistoryState' | 'applyFileHistoryOp'
>

/**
 * Applies a simulated sed edit directly instead of running sed.
 * v112 (nVY): uses getFileHistoryState + applyFileHistoryOp instead of updateFileHistoryState.
 */
async function applySedEdit(
  simulatedEdit: { filePath: string; newContent: string },
  toolUseContext: SimulatedSedEditContext,
  parentMessage?: AssistantMessage,
): Promise<SimulatedSedEditResult> {
  const { filePath, newContent } = simulatedEdit
  const absoluteFilePath = expandPath(filePath)
  const fs = getFsImplementation()
  const encoding = detectFileEncoding(absoluteFilePath)
  let originalContent: string
  try {
    originalContent = await fs.readFile(absoluteFilePath, { encoding })
  } catch (e) {
    if (isENOENT(e)) {
      return {
        data: {
          stdout: '',
          stderr: `sed: ${filePath}: No such file or directory\nExit code 1`,
          interrupted: false,
        },
      }
    }
    throw e
  }

  // v112: fileHistoryEnabled() && parentMessage → uses getFileHistoryState + applyFileHistoryOp
  // TODO(lift): M96 at byte ~9895863 — fileHistoryTrackEdit variant with separate get/apply fns
  if (fileHistoryEnabled() && parentMessage) {
    await fileHistoryTrackEdit(
      toolUseContext.getFileHistoryState,
      toolUseContext.applyFileHistoryOp,
      absoluteFilePath,
      parentMessage.uuid,
    )
  }

  const endings = detectLineEndings(absoluteFilePath)
  writeTextContent(absoluteFilePath, newContent, encoding, endings)

  toolUseContext.readFileState.set(absoluteFilePath, {
    content: newContent,
    timestamp: getFileModificationTime(absoluteFilePath),
    offset: undefined,
    limit: undefined,
  })

  return {
    data: {
      stdout: '',
      stderr: '',
      interrupted: false,
    },
  }
}

// --- Helper stubs for unresolved v112 symbols ---

/**
 * TODO(lift): KF at byte ~9895190 — feature gate for validateInput sleep-block check.
 * In v88 this was feature('MONITOR_TOOL'). Placeholder returns true to preserve validation.
 */
function isMonitorToolEnabled(): boolean {
  return true
}

/**
 * TODO(lift): checkStaleReadFileState = rVY at byte ~9908900.
 * Checks if previously-read files were modified during the command.
 */
async function checkStaleReadFileState(
  _command: string,
  _readFileState: ToolUseContext['readFileState'],
  _startTime: number,
): Promise<string[]> {
  return []
}

/**
 * TODO(lift): formatStalePaths = bVY + b8() at byte ~9909200.
 * Formats stale path list for the hint message.
 */
function formatStalePaths(paths: string[]): string {
  return paths.join(', ')
}

/**
 * TODO(lift): postCommandCleanup = zSK at byte ~9908900.
 * Post-command cleanup (likely readFileState sync).
 */
async function postCommandCleanup(
  _command: string,
  _readFileState: ToolUseContext['readFileState'],
  _signal: AbortSignal,
): Promise<void> {
  // placeholder
}

/**
 * v112 preparePermissionMatcher: adds xargs prefix matching.
 * TODO(lift): xSK at byte ~9895676 — exact variant of permissionRuleExtractPrefix.
 * Using permissionRuleExtractPrefix as a stand-in.
 */
function xSK(pattern: string): string | null {
  return permissionRuleExtractPrefix(pattern)
}

/**
 * TODO(lift): scheduleTaskNotification = I$(...) at byte ~9898666.
 * Notifies the task registry of a completed background task.
 */
function scheduleTaskNotification(
  _taskId: string,
  _result: unknown,
  _opts: { toolUseId?: string; summary: string },
): void {
  // placeholder
}

/**
 * TODO(lift): getResultForNotification = FI6(result) at byte ~9898666.
 * Transforms ExecResult for background task notification.
 */
function getResultForNotification(result: ExecResult): unknown {
  return result
}

/**
 * TODO(lift): registerForegroundTask = dc8 at byte ~9898666.
 * Registers a foreground task (may also auto-background after a delay).
 */
function registerForegroundTask(
  _opts: {
    command: string
    description: string
    shellCommand: unknown
    agentId?: AgentId
  },
  _taskRegistry: unknown,
  _toolUseId?: string,
): string {
  // placeholder — returns a foreground task ID
  return ''
}

// --- BashTool definition ---

export const BashTool = buildTool({
  name: BASH_TOOL_NAME,
  searchHint: 'execute shell commands',
  // 30K chars — tool result persistence threshold
  maxResultSizeChars: 30_000,
  strict: true,
  async description({ description }) {
    return description || 'Run shell command'
  },
  async prompt() {
    return getSimplePrompt()
  },
  isConcurrencySafe(input) {
    return this.isReadOnly?.(input) ?? false
  },
  isReadOnly(input) {
    const compoundCommandHasCd = commandHasAnyCd(input.command)
    const result = checkReadOnlyConstraints(input, compoundCommandHasCd)
    return result.behavior === 'allow'
  },
  // v112: toAutoClassifierInput now handles rerun field
  toAutoClassifierInput(input) {
    if ('rerun' in input && typeof input.rerun === 'string' && !input.command) {
      return `rerun ${input.rerun}`
    }
    return input.command
  },
  async preparePermissionMatcher({ command }) {
    // v112: same concept as v88, but adds xargs prefix matching
    const parsed = await parseForSecurity(command)
    if (parsed.kind !== 'simple') {
      return () => true
    }
    const subcommands = parsed.commands.map(c => c.argv.join(' '))
    return pattern => {
      const prefix = xSK(pattern)
      return subcommands.some(cmd => {
        if (prefix !== null) {
          // v112: also matches xargs-prefixed invocations
          return (
            cmd === prefix ||
            cmd.startsWith(`${prefix} `) ||
            cmd === `xargs ${prefix}` ||
            cmd.startsWith(`xargs ${prefix} `)
          )
        }
        return matchWildcardPattern(pattern, cmd)
      })
    }
  },
  isSearchOrReadCommand(input) {
    const parsed = inputSchema().safeParse(input)
    if (!parsed.success) return { isSearch: false, isRead: false, isList: false }
    return isSearchOrReadBashCommand(parsed.data.command)
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  userFacingName(input) {
    if (!input) return 'Bash'
    if (input.command) {
      const sedInfo = parseSedEditCommand(input.command)
      if (sedInfo) {
        return fileEditUserFacingName({ file_path: sedInfo.filePath, old_string: 'x' })
      }
    }
    return isEnvTruthy(process.env.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR) &&
      shouldUseSandbox(input)
      ? 'SandboxedBash'
      : 'Bash'
  },
  getToolUseSummary(input) {
    if (!input?.command) return null
    const { command, description } = input
    if (description) return description
    return truncate(command, TOOL_SUMMARY_MAX_LENGTH)
  },
  getActivityDescription(input) {
    if (!input?.command) return 'Running command'
    return `Running ${input.description ?? truncate(input.command, TOOL_SUMMARY_MAX_LENGTH)}`
  },
  async validateInput(input: BashToolInput): Promise<ValidationResult> {
    // v112: KF() gate replaces feature('MONITOR_TOOL'); error message wording changed
    if (isMonitorToolEnabled() && !isBackgroundTasksDisabled && !input.run_in_background) {
      const sleepPattern = detectBlockedSleepPattern(input.command)
      if (sleepPattern !== null) {
        return {
          result: false,
          message: `Blocked: ${sleepPattern}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\`). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
          errorCode: 10,
        }
      }
    }
    return { result: true }
  },
  async checkPermissions(input, context): Promise<PermissionResult> {
    return bashToolHasPermission(input, context)
  },
  renderToolUseMessage,
  renderToolUseProgressMessage,
  renderToolUseQueuedMessage,
  renderToolResultMessage,
  extractSearchText({ stdout, stderr }) {
    return stderr ? `${stdout}\n${stderr}` : stdout
  },
  mapToolResultToToolResultBlockParam(
    {
      interrupted,
      stdout,
      stderr,
      isImage,
      backgroundTaskId,
      backgroundedByUser,
      assistantAutoBackgrounded,
      structuredContent,
      persistedOutputPath,
      persistedOutputSize,
      // v112 new
      staleReadFileStateHint,
    },
    toolUseID,
  ): ToolResultBlockParam {
    if (structuredContent && structuredContent.length > 0) {
      return { tool_use_id: toolUseID, type: 'tool_result', content: structuredContent }
    }
    if (isImage) {
      const block = buildImageToolResult(stdout, toolUseID)
      if (block) return block
    }
    let processedStdout = stdout
    if (stdout) {
      processedStdout = stdout.replace(/^(\s*\n)+/, '')
      processedStdout = processedStdout.trimEnd()
    }
    if (persistedOutputPath) {
      const preview = generatePreview(processedStdout, PREVIEW_SIZE_BYTES)
      processedStdout = buildLargeToolResultMessage({
        filepath: persistedOutputPath,
        originalSize: persistedOutputSize ?? 0,
        isJson: false,
        preview: preview.preview,
        hasMore: preview.hasMore,
      })
    }
    let errorMessage = stderr.trim()
    if (interrupted) {
      if (stderr) errorMessage += EOL
      errorMessage += '<error>Command was aborted before completion</error>'
    }
    let backgroundInfo = ''
    if (backgroundTaskId) {
      const outputPath = getTaskOutputPath(backgroundTaskId)
      if (assistantAutoBackgrounded) {
        backgroundInfo = `Command exceeded the assistant-mode blocking budget (${
          ASSISTANT_BLOCKING_BUDGET_MS / 1000
        }s) and was moved to the background with ID: ${backgroundTaskId}. It is still running — you will be notified when it completes. Output is being written to: ${outputPath}. In assistant mode, delegate long-running work to a subagent or use run_in_background to keep this conversation responsive.`
      } else if (backgroundedByUser) {
        backgroundInfo = `Command was manually backgrounded by user with ID: ${backgroundTaskId}. Output is being written to: ${outputPath}`
      } else {
        backgroundInfo = `Command running in background with ID: ${backgroundTaskId}. Output is being written to: ${outputPath}`
      }
    }
    // v112: staleReadFileStateHint included as 4th element
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      content: [processedStdout, errorMessage, backgroundInfo, staleReadFileStateHint]
        .filter(Boolean)
        .join('\n'),
      is_error: interrupted,
    }
  },
  async call(
    input: BashToolInput,
    toolUseContext,
    _canUseTool?: CanUseToolFn,
    parentMessage?: AssistantMessage,
    onProgress?: ToolCallProgress<BashProgress>,
  ) {
    if (input._simulatedSedEdit) {
      return applySedEdit(input._simulatedSedEdit, toolUseContext, parentMessage)
    }

    // v112: startTime computed with floor-second alignment for staleReadFileStateHint
    const startTime = Math.floor(Date.now() / 1000) * 1000

    const { abortController, getAppState, setToolJSX, emitToolProgress } = toolUseContext
    const stdoutAccumulator = new EndTruncatingAccumulator()
    let stderrForShellReset = ''
    let interpretationResult: ReturnType<typeof interpretCommandResult> | undefined
    let progressCounter = 0
    let wasInterrupted = false
    let result: ExecResult
    const isMainThread = !toolUseContext.agentId
    const preventCwdChanges = !isMainThread

    try {
      // v112: runShellCommand drops setAppState, adds taskRegistry + abortSpeculation +
      // sessionEnvVars + tmuxSocket
      const commandGenerator = runShellCommand({
        input,
        abortController,
        taskRegistry: (toolUseContext as unknown as { taskRegistry: unknown }).taskRegistry,
        abortSpeculation: (toolUseContext as unknown as { abortSpeculation: unknown })
          .abortSpeculation,
        setToolJSX,
        emitToolProgress,
        preventCwdChanges,
        isMainThread,
        toolUseId: toolUseContext.toolUseId,
        agentId: toolUseContext.agentId,
        sessionEnvVars: (toolUseContext as unknown as { sessionEnvVars: unknown }).sessionEnvVars,
        tmuxSocket: (toolUseContext as unknown as { tmuxSocket: unknown }).tmuxSocket,
      })

      let generatorResult
      do {
        generatorResult = await commandGenerator.next()
        if (!generatorResult.done && onProgress) {
          const progress = generatorResult.value
          onProgress({
            toolUseID: `bash-progress-${progressCounter++}`,
            data: {
              type: 'bash_progress',
              output: progress.output,
              fullOutput: progress.fullOutput,
              elapsedTimeSeconds: progress.elapsedTimeSeconds,
              totalLines: progress.totalLines,
              totalBytes: progress.totalBytes,
              taskId: progress.taskId,
              timeoutMs: progress.timeoutMs,
            },
          })
        }
      } while (!generatorResult.done)

      result = generatorResult.value
      trackGitOperations(input.command, result.code, result.stdout)
      const isInterrupt = result.interrupted && abortController.signal.reason === 'interrupt'

      stdoutAccumulator.append((result.stdout || '').trimEnd() + EOL)
      interpretationResult = interpretCommandResult(
        input.command,
        result.code,
        result.stdout || '',
        '',
      )

      if (result.stdout && result.stdout.includes(".git/index.lock': File exists")) {
        logEvent('tengu_git_index_lock_error', {})
      }
      if (interpretationResult.isError && !isInterrupt) {
        if (result.code !== 0) {
          stdoutAccumulator.append(`Exit code ${result.code}`)
        }
      }
      if (!preventCwdChanges) {
        const appState = getAppState()
        if (resetCwdIfOutsideProject(appState.toolPermissionContext)) {
          stderrForShellReset = stdErrAppendShellResetMessage('')
        }
      }

      const outputWithSbFailures = SandboxManager.annotateStderrWithSandboxFailures(
        input.command,
        result.stdout || '',
      )
      if (result.preSpawnError) {
        throw new Error(result.preSpawnError)
      }
      if (interpretationResult.isError && !isInterrupt) {
        throw new ShellError(
          '',
          outputWithSbFailures,
          result.code,
          result.interrupted,
          outputWithSbFailures !== (result.stdout || ''),
        )
      }
      wasInterrupted = result.interrupted
    } finally {
      if (setToolJSX) setToolJSX(null)
      // v112: emitToolProgress clear in finally
      if (toolUseContext.toolUseId) {
        emitToolProgress?.({ kind: 'clear', toolUseId: toolUseContext.toolUseId })
      }
    }

    const stdout = stdoutAccumulator.toString()
    const MAX_PERSISTED_SIZE = 64 * 1024 * 1024
    let persistedOutputPath: string | undefined
    let persistedOutputSize: number | undefined
    if (result.outputFilePath && result.outputTaskId) {
      try {
        const fileStat = await fsStat(result.outputFilePath)
        persistedOutputSize = fileStat.size
        await ensureToolResultsDir()
        const dest = getToolResultPath(result.outputTaskId, false)
        if (fileStat.size > MAX_PERSISTED_SIZE) {
          await fsTruncate(result.outputFilePath, MAX_PERSISTED_SIZE)
        }
        try {
          await link(result.outputFilePath, dest)
        } catch {
          await copyFile(result.outputFilePath, dest)
        }
        persistedOutputPath = dest
      } catch {
        // File may already be gone — stdout preview is sufficient
      }
    }

    // v112: uses i5(command, " ") = command.split(" ")[0] for command_type
    const commandType = input.command.split(' ')[0]
    logEvent('tengu_bash_tool_command_executed', {
      command_type: commandType as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      stdout_length: stdout.length,
      stderr_length: 0,
      exit_code: result.code,
      interrupted: wasInterrupted,
    })

    const codeIndexingTool = detectCodeIndexingFromCommand(input.command)
    if (codeIndexingTool) {
      logEvent('tengu_code_indexing_tool_used', {
        tool: codeIndexingTool as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
        source: 'cli' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
        success: result.code === 0,
      })
    }

    let strippedStdout = stripEmptyLines(stdout)
    const extracted = extractClaudeCodeHints(strippedStdout, input.command)
    strippedStdout = extracted.stripped
    if (isMainThread && extracted.hints.length > 0) {
      for (const hint of extracted.hints) maybeRecordPluginHint(hint)
    }

    let isImage = isImageOutput(strippedStdout)
    let compressedStdout = strippedStdout
    if (isImage) {
      const resized = await resizeShellImageOutput(
        strippedStdout,
        result.outputFilePath,
        persistedOutputSize,
      )
      if (resized) {
        compressedStdout = resized
      } else {
        isImage = false
      }
    }

    // v112: staleReadFileStateHint — rVY check + bVY/b8 formatting
    let staleReadFileStateHint: string | undefined
    if (!wasInterrupted && !isImage && !result.backgroundTaskId) {
      const staleEntries = await checkStaleReadFileState(
        input.command,
        toolUseContext.readFileState,
        startTime,
      )
      if (staleEntries.length > 0) {
        const shown = staleEntries.slice(0, 5)
        const label = formatStalePaths(shown)
        const extra = staleEntries.length > 5 ? ` and ${staleEntries.length - 5} more` : ''
        staleReadFileStateHint = `[This command modified ${staleEntries.length} ${
          staleEntries.length === 1 ? 'file' : 'files'
        } you've previously read: ${label}${extra}. Call Read before editing.]`
      }
    }
    // v112: zSK post-command cleanup
    if (!wasInterrupted && !isImage && !result.backgroundTaskId) {
      await postCommandCleanup(input.command, toolUseContext.readFileState, abortController.signal)
    }

    const data: Out = {
      stdout: compressedStdout,
      stderr: stderrForShellReset,
      interrupted: wasInterrupted,
      isImage,
      returnCodeInterpretation: interpretationResult?.message,
      noOutputExpected: isSilentBashCommand(input.command),
      backgroundTaskId: result.backgroundTaskId,
      backgroundedByUser: result.backgroundedByUser,
      assistantAutoBackgrounded: result.assistantAutoBackgrounded,
      dangerouslyDisableSandbox:
        'dangerouslyDisableSandbox' in input
          ? (input.dangerouslyDisableSandbox as boolean | undefined)
          : undefined,
      persistedOutputPath,
      persistedOutputSize,
      staleReadFileStateHint,
    }
    return { data }
  },
  renderToolUseErrorMessage,
  isResultTruncated(output: Out): boolean {
    return isOutputLineTruncated(output.stdout) || isOutputLineTruncated(output.stderr)
  },
} satisfies ToolDef<InputSchema, Out, BashProgress>)

/**
 * v112 runShellCommand (oVY) — signature changes from v88:
 *  - Drops: setAppState
 *  - Adds: taskRegistry, abortSpeculation, emitToolProgress, sessionEnvVars, tmuxSocket
 *
 * Internal backgrounding now uses taskRegistry-based APIs:
 *  - cc8 = backgroundExistingForegroundTask check variant
 *  - dc8 = registerForegroundTask (new registration with taskRegistry)
 *  - Y_6 = spawnShellTask with taskRegistry/abortSpeculation
 *  - nc8 = unregisterForeground with taskRegistry
 *  - lc8 / I$ = markTaskNotified variants with taskRegistry
 *  - FI6 = result transformer for background notification
 */
async function* runShellCommand({
  input,
  abortController,
  taskRegistry,
  abortSpeculation,
  setToolJSX,
  emitToolProgress,
  preventCwdChanges,
  isMainThread,
  toolUseId,
  agentId,
  sessionEnvVars,
  tmuxSocket,
}: {
  input: BashToolInput
  abortController: AbortController
  taskRegistry: unknown
  abortSpeculation: unknown
  setToolJSX?: SetToolJSXFn
  emitToolProgress?: unknown
  preventCwdChanges?: boolean
  isMainThread?: boolean
  toolUseId?: string
  agentId?: AgentId
  sessionEnvVars?: unknown
  tmuxSocket?: unknown
}): AsyncGenerator<
  {
    type: 'progress'
    output: string
    fullOutput: string
    elapsedTimeSeconds: number
    totalLines: number
    totalBytes?: number
    taskId?: string
    timeoutMs?: number
  },
  ExecResult,
  void
> {
  const { command, description, timeout, run_in_background } = input
  const timeoutMs = Math.min(timeout || getDefaultTimeoutMs(), getMaxTimeoutMs())
  let fullOutput = ''
  let lastProgressOutput = ''
  let lastTotalLines = 0
  let lastTotalBytes = 0
  let backgroundShellId: string | undefined = undefined
  let assistantAutoBackgrounded = false

  let resolveProgress: (() => void) | null = null
  function createProgressSignal(): Promise<null> {
    return new Promise<null>(resolve => {
      resolveProgress = () => resolve(null)
    })
  }

  const shouldAutoBackground = !isBackgroundTasksDisabled && isAutobackgroundingAllowed(command)
  const shellCommand = await exec(command, abortController.signal, 'bash', {
    timeout: timeoutMs,
    onProgress(lastLines, allLines, totalLines, totalBytes, isIncomplete) {
      lastProgressOutput = lastLines
      fullOutput = allLines
      lastTotalLines = totalLines
      lastTotalBytes = isIncomplete ? totalBytes : 0
      const resolve = resolveProgress
      if (resolve) {
        resolveProgress = null
        resolve()
      }
    },
    preventCwdChanges,
    shouldUseSandbox: shouldUseSandbox(input),
    shouldAutoBackground,
    // v112: new exec options
    sessionEnvVars,
    tmuxSocket,
  })
  const resultPromise = shellCommand.result

  // v112: spawnShellTask now takes taskRegistry + abortSpeculation instead of getAppState/setAppState
  async function spawnBackgroundTask(): Promise<string> {
    // TODO(lift): Y_6 = spawnShellTask variant at byte ~9898666
    const handle = await spawnShellTask(
      {
        command,
        description: description || command,
        shellCommand,
        toolUseId,
        agentId,
      },
      {
        abortController,
        taskRegistry,
        abortSpeculation,
      },
    )
    return handle.taskId
  }

  function startBackgrounding(
    eventName: string,
    backgroundFn?: (shellId: string) => void,
  ): void {
    if (foregroundTaskId) {
      // TODO(lift): cc8 = backgroundExistingForegroundTask check at byte ~9898666
      if (
        !backgroundExistingForegroundTask(
          foregroundTaskId,
          shellCommand,
          description || command,
          taskRegistry,
          abortSpeculation,
          toolUseId,
        )
      ) {
        return
      }
      backgroundShellId = foregroundTaskId
      logEvent(eventName, { command_type: getCommandTypeForLogging(command) })
      backgroundFn?.(foregroundTaskId)
      return
    }

    void spawnBackgroundTask().then(shellId => {
      backgroundShellId = shellId
      const resolve = resolveProgress
      if (resolve) {
        resolveProgress = null
        resolve()
      }
      logEvent(eventName, { command_type: getCommandTypeForLogging(command) })
      if (backgroundFn) backgroundFn(shellId)
    })
  }

  if (shellCommand.onTimeout && shouldAutoBackground) {
    shellCommand.onTimeout(backgroundFn => {
      startBackgrounding('tengu_bash_command_timeout_backgrounded', backgroundFn)
    })
  }

  if (run_in_background === true && !isBackgroundTasksDisabled) {
    const shellId = await spawnBackgroundTask()
    logEvent('tengu_bash_command_explicitly_backgrounded', {
      command_type: getCommandTypeForLogging(command),
    })
    return {
      stdout: '',
      stderr: '',
      code: 0,
      interrupted: false,
      backgroundTaskId: shellId,
    }
  }

  const startTime = Date.now()
  let foregroundTaskId: string | undefined = undefined
  {
    const initialResult = await Promise.race([
      resultPromise,
      new Promise<null>(resolve => {
        const t = setTimeout((r: (v: null) => void) => r(null), PROGRESS_THRESHOLD_MS, resolve)
        t.unref()
      }),
    ])
    if (initialResult !== null) {
      shellCommand.cleanup()
      return initialResult
    }
    if (backgroundShellId) {
      return {
        stdout: '',
        stderr: '',
        code: 0,
        interrupted: false,
        backgroundTaskId: backgroundShellId,
        assistantAutoBackgrounded,
      }
    }
  }

  TaskOutput.startPolling(shellCommand.taskOutput.taskId)

  let completedResult: ExecResult | null = null
  try {
    while (true) {
      const progressSignal = createProgressSignal()
      const result = await Promise.race([resultPromise, progressSignal])
      if (result !== null) {
        if (result.backgroundTaskId !== undefined) {
          // v112: lc8 check before I$ notification
          if (markTaskNotified(result.backgroundTaskId, result, taskRegistry)) {
            scheduleTaskNotification(
              result.backgroundTaskId,
              getResultForNotification(result),
              { toolUseId, summary: description || command },
            )
          }
          const fixedResult: ExecResult = { ...result, backgroundTaskId: undefined }
          const { taskOutput } = shellCommand
          if (taskOutput.stdoutToFile && !taskOutput.outputFileRedundant) {
            fixedResult.outputFilePath = taskOutput.path
            fixedResult.outputFileSize = taskOutput.outputFileSize
            fixedResult.outputTaskId = taskOutput.taskId
          }
          return fixedResult
        }
        completedResult = result
        return result
      }

      if (backgroundShellId) {
        return {
          stdout: '',
          stderr: '',
          code: 0,
          interrupted: false,
          backgroundTaskId: backgroundShellId,
          assistantAutoBackgrounded,
        }
      }

      if (foregroundTaskId) {
        if (shellCommand.status === 'backgrounded') {
          return {
            stdout: '',
            stderr: '',
            code: 0,
            interrupted: false,
            backgroundTaskId: foregroundTaskId,
            backgroundedByUser: true,
          }
        }
      }

      const elapsed = Date.now() - startTime
      const elapsedSecs = Math.floor(elapsed / 1000)
      if (
        !isBackgroundTasksDisabled &&
        backgroundShellId === undefined &&
        elapsedSecs >= PROGRESS_THRESHOLD_MS / 1000
      ) {
        if (!foregroundTaskId) {
          // TODO(lift): dc8 = registerForegroundTask at byte ~9898666
          foregroundTaskId = registerForegroundTask(
            { command, description: description || command, shellCommand, agentId },
            taskRegistry,
            toolUseId,
          )
        }
        setToolJSX?.({
          jsx: React.createElement(BackgroundHint, null),
          shouldHidePromptInput: false,
          shouldContinueAnimation: true,
          showSpinner: true,
        })
        if (toolUseId) {
          ;(emitToolProgress as ((v: unknown) => void) | undefined)?.({
            kind: 'background_hint',
            toolUseId,
          })
        }
      }

      yield {
        type: 'progress',
        fullOutput,
        output: lastProgressOutput,
        elapsedTimeSeconds: elapsedSecs,
        totalLines: lastTotalLines,
        totalBytes: lastTotalBytes,
        taskId: shellCommand.taskOutput.taskId,
        ...(timeout ? { timeoutMs } : undefined),
      }
    }
  } finally {
    TaskOutput.stopPolling(shellCommand.taskOutput.taskId)
    if (!backgroundShellId && shellCommand.status !== 'backgrounded') {
      if (foregroundTaskId) {
        // TODO(lift): nc8 = unregisterForeground with taskRegistry at byte ~9898666
        unregisterForeground(
          foregroundTaskId,
          completedResult ? getResultForNotification(completedResult) : 'stopped',
          taskRegistry,
        )
      }
      shellCommand.cleanup()
    }
  }
}
