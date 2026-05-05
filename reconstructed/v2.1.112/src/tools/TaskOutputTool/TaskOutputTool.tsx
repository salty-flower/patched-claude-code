import { c as _c } from 'react/compiler-runtime'
import React from 'react'
import { z } from 'zod/v4'
import { FallbackToolUseErrorMessage } from '../../components/FallbackToolUseErrorMessage.js'
import { FallbackToolUseRejectedMessage } from '../../components/FallbackToolUseRejectedMessage.js'
import { MessageResponse } from '../../components/MessageResponse.js'
import { Box, Text } from '../../ink.js'
import { useShortcutDisplay } from '../../keybindings/useShortcutDisplay.js'
import type { TaskType } from '../../Task.js'
import type { Tool } from '../../Tool.js'
import { buildTool, type ToolDef } from '../../Tool.js'
import type { LocalAgentTaskState } from '../../tasks/LocalAgentTask/LocalAgentTask.js'
import type { LocalShellTaskState } from '../../tasks/LocalShellTask/guards.js'
import type { RemoteAgentTaskState } from '../../tasks/RemoteAgentTask/RemoteAgentTask.js'
import type { TaskState } from '../../tasks/types.js'
import { AbortError } from '../../utils/errors.js'
import { lazySchema } from '../../utils/lazySchema.js'
import { extractTextContent } from '../../utils/messages.js'
import { semanticBoolean } from '../../utils/semanticBoolean.js'
import { sleep } from '../../utils/sleep.js'
import { jsonParse } from '../../utils/slowOperations.js'
import { getTaskOutput } from '../../utils/task/diskOutput.js'
import { formatTaskOutput } from '../../utils/task/outputFormatting.js'
import type { ThemeName } from '../../utils/theme.js'
import { AgentPromptDisplay, AgentResponseDisplay } from '../AgentTool/UI.js'
import BashToolResultMessage from '../BashTool/BashToolResultMessage.js'
import { TASK_OUTPUT_TOOL_NAME } from './constants.js'

const inputSchema = lazySchema(() =>
  z.strictObject({
    task_id: z.string().describe('The task ID to get output from'),
    block: semanticBoolean(z.boolean().default(true)).describe(
      'Whether to wait for completion',
    ),
    timeout: z
      .number()
      .min(0)
      .max(600000)
      .default(30000)
      .describe('Max wait time in ms'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>
type TaskOutputToolInput = z.infer<InputSchema>

// Unified output type covering all task types
type TaskOutput = {
  task_id: string
  task_type: TaskType
  status: string
  description: string
  output: string
  exitCode?: number | null
  error?: string
  // For agents
  prompt?: string
  result?: string
}
type TaskOutputToolOutput = {
  retrieval_status: 'success' | 'timeout' | 'not_ready'
  task: TaskOutput | null
}

// Re-export Progress from centralized types to break import cycles
export type { TaskOutputProgress as Progress } from '../../types/tools.js'

// Get output for any task type — jac=1, cos=1
async function getTaskOutputData(task: TaskState): Promise<TaskOutput> {
  let output: string
  if (task.type === 'local_bash') {
    const bashTask = task as LocalShellTaskState
    const taskOutputObj = bashTask.shellCommand?.taskOutput
    if (taskOutputObj) {
      const stdout = await taskOutputObj.getStdout()
      const stderr = taskOutputObj.getStderr()
      output = [stdout, stderr].filter(Boolean).join('\n')
    } else {
      output = await getTaskOutput(task.id)
    }
  } else {
    output = await getTaskOutput(task.id)
  }
  const baseOutput: TaskOutput = {
    task_id: task.id,
    task_type: task.type,
    status: task.status,
    description: task.description,
    output,
  }

  if (task.type === 'local_bash') {
    const bashTask = task as LocalShellTaskState
    return {
      ...baseOutput,
      exitCode: bashTask.result?.code ?? null,
    }
  }
  if (task.type === 'local_agent') {
    const agentTask = task as LocalAgentTaskState
    const cleanResult = agentTask.result
      ? extractTextContent(agentTask.result.content, '\n')
      : undefined
    return {
      ...baseOutput,
      prompt: agentTask.prompt,
      result: cleanResult || output,
      output: cleanResult || output,
      error: agentTask.error,
    }
  }
  if (task.type === 'remote_agent') {
    const remoteTask = task as RemoteAgentTaskState
    return {
      ...baseOutput,
      prompt: remoteTask.command,
    }
  }
  return baseOutput
}

// Wait for task to complete — jac=1, cos=1
async function waitForTaskCompletion(
  taskId: string,
  getAppState: () => { tasks?: Record<string, TaskState> },
  timeoutMs: number,
  abortController?: AbortController,
): Promise<TaskState | null> {
  const startTime = Date.now()
  while (Date.now() - startTime < timeoutMs) {
    if (abortController?.signal.aborted) {
      throw new AbortError()
    }
    const task = getAppState().tasks?.[taskId]
    if (!task) {
      return null
    }
    if (task.status !== 'running' && task.status !== 'pending') {
      return task
    }
    await sleep(100)
  }
  return getAppState().tasks?.[taskId] ?? null
}

// jac=0.856 — v112 changes vs v88:
// - description changed to longer DEPRECATED message
// - isEnabled() drops the `"external" !== 'ant'` check — always enabled
// - call() uses taskRegistry.update() instead of updateTaskState()
// - validateInput/call: v112 uses getAppState (no cast), checks via getAppState
export const TaskOutputTool: Tool<InputSchema, TaskOutputToolOutput> = buildTool({
  name: TASK_OUTPUT_TOOL_NAME,
  searchHint: 'read output/logs from a background task',
  maxResultSizeChars: 100_000,
  shouldDefer: true,
  aliases: ['AgentOutputTool', 'BashOutputTool'],
  userFacingName() {
    return 'Task Output'
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  async description() {
    // v112: longer deprecation message
    return '[Deprecated] — for bash and remote_agent tasks, prefer Read on the output file path; for local_agent tasks, use the Agent tool result directly'
  },
  isConcurrencySafe(input) {
    return this.isReadOnly?.(input) ?? false
  },
  isEnabled() {
    return true
  },
  isReadOnly(_input) {
    return true
  },
  toAutoClassifierInput(input) {
    return input.task_id
  },
  async prompt() {
    // v112: updated deprecation guidance — distinguishes task types
    return `DEPRECATED: Background tasks return their output file path in the tool result, and you receive a <task-notification> with the same path when the task completes.
- For bash tasks: prefer using the Read tool on that output file path — it contains stdout/stderr.
- For local_agent tasks: use the Agent tool result directly. Do NOT Read the .output file — it is a symlink to the full sub-agent conversation transcript (JSONL) and will overflow your context window.
- For remote_agent tasks: prefer using the Read tool on the output file path — it contains the streamed remote session output (same as bash).

- Retrieves output from a running or completed task (background shell, agent, or remote session)
- Takes a task_id parameter identifying the task
- Returns the task output along with status information
- Use block=true (default) to wait for task completion
- Use block=false for non-blocking check of current status
- Task IDs can be found using the /tasks command
- Works with all task types: background shells, async agents, and remote sessions`
  },
  async validateInput({ task_id }, { getAppState }) {
    if (!task_id) {
      return { result: false, message: 'Task ID is required', errorCode: 1 }
    }
    if (!getAppState().tasks?.[task_id]) {
      return {
        result: false,
        message: `No task found with ID: ${task_id}`,
        errorCode: 2,
      }
    }
    return { result: true }
  },
  async call(input, context, _canUseTool, _parentMessage, onProgress) {
    const { task_id, block, timeout } = input
    const task = context.getAppState().tasks?.[task_id]
    if (!task) {
      throw new Error(`No task found with ID: ${task_id}`)
    }

    if (!block) {
      if (task.status !== 'running' && task.status !== 'pending') {
        // v112: uses taskRegistry.update() instead of updateTaskState()
        context.taskRegistry.update(task_id, (t: TaskState) => ({
          ...t,
          notified: true,
        }))
        return {
          data: {
            retrieval_status: 'success' as const,
            task: await getTaskOutputData(task),
          },
        }
      }
      return {
        data: {
          retrieval_status: 'not_ready' as const,
          task: await getTaskOutputData(task),
        },
      }
    }

    if (onProgress) {
      onProgress({
        toolUseID: `task-output-waiting-${Date.now()}`,
        data: {
          type: 'waiting_for_task',
          taskDescription: task.description,
          taskType: task.type,
        },
      })
    }

    const completedTask = await waitForTaskCompletion(
      task_id,
      context.getAppState,
      timeout,
      context.abortController,
    )

    if (!completedTask) {
      return {
        data: { retrieval_status: 'timeout' as const, task: null },
      }
    }

    if (
      completedTask.status === 'running' ||
      completedTask.status === 'pending'
    ) {
      return {
        data: {
          retrieval_status: 'timeout' as const,
          task: await getTaskOutputData(completedTask),
        },
      }
    }

    context.taskRegistry.update(task_id, (t: TaskState) => ({
      ...t,
      notified: true,
    }))
    return {
      data: {
        retrieval_status: 'success' as const,
        task: await getTaskOutputData(completedTask),
      },
    }
  },
  mapToolResultToToolResultBlockParam(data, toolUseID) {
    const parts: string[] = []
    parts.push(`<retrieval_status>${data.retrieval_status}</retrieval_status>`)
    if (data.task) {
      parts.push(`<task_id>${data.task.task_id}</task_id>`)
      parts.push(`<task_type>${data.task.task_type}</task_type>`)
      parts.push(`<status>${data.task.status}</status>`)
      if (data.task.exitCode !== undefined && data.task.exitCode !== null) {
        parts.push(`<exit_code>${data.task.exitCode}</exit_code>`)
      }
      if (data.task.output?.trim()) {
        const { content } = formatTaskOutput(data.task.output, data.task.task_id)
        parts.push(`<output>\n${content.trimEnd()}\n</output>`)
      }
      if (data.task.error) {
        parts.push(`<error>${data.task.error}</error>`)
      }
    }
    return {
      tool_use_id: toolUseID,
      type: 'tool_result' as const,
      content: parts.join('\n\n'),
    }
  },
  renderToolUseMessage(input) {
    const { block = true } = input
    if (!block) return 'non-blocking'
    return ''
  },
  renderToolUseTag(input) {
    if (!input.task_id) return null
    return <Text dimColor> {input.task_id}</Text>
  },
  renderToolUseProgressMessage(progressMessages) {
    const lastProgress = progressMessages.at(-1)?.data
    return (
      <Box flexDirection="column">
        {lastProgress?.taskDescription && (
          <Text>  {lastProgress.taskDescription}</Text>
        )}
        <Text>
          {'     '}Waiting for task{' '}
          <Text dimColor>
            <useShortcutDisplay
              chord="escape"
              action="give additional instructions"
              parens={true}
              format={{ keyCase: 'lower' }}
            />
          </Text>
        </Text>
      </Box>
    )
  },
  renderToolResultMessage(content, _, { verbose, theme }) {
    return (
      <TaskOutputResultDisplay content={content} verbose={verbose} theme={theme} />
    )
  },
  renderToolUseRejectedMessage() {
    return <FallbackToolUseRejectedMessage />
  },
  renderToolUseErrorMessage(result, { verbose }) {
    return <FallbackToolUseErrorMessage result={result} verbose={verbose} />
  },
} satisfies ToolDef<InputSchema, TaskOutputToolOutput>)

// React compiler-cached component — jac=0.856 drift from v88
function TaskOutputResultDisplay(t0: {
  content: TaskOutputToolOutput | string
  verbose?: boolean
  theme?: ThemeName
}) {
  const $ = _c(54)
  const { content, verbose: t1, theme } = t0
  const verbose = t1 === undefined ? false : t1
  const expandShortcut = useShortcutDisplay('app:toggleTranscript', 'Global', 'ctrl+o')

  let t2
  if ($[0] !== content) {
    t2 = typeof content === 'string' ? jsonParse(content) : content
    $[0] = content
    $[1] = t2
  } else {
    t2 = $[1]
  }
  const result = t2 as TaskOutputToolOutput

  if (!result.task) {
    let t3
    if ($[2] === Symbol.for('react.memo_cache_sentinel')) {
      t3 = (
        <MessageResponse>
          <Text dimColor>No task output available</Text>
        </MessageResponse>
      )
      $[2] = t3
    } else {
      t3 = $[2]
    }
    return t3
  }

  const { task } = result
  if (task.task_type === 'local_bash') {
    let t3
    if ($[3] !== task.error || $[4] !== task.output) {
      t3 = {
        stdout: task.output,
        stderr: '',
        isImage: false,
        dangerouslyDisableSandbox: true,
        returnCodeInterpretation: task.error,
      }
      $[3] = task.error
      $[4] = task.output
      $[5] = t3
    } else {
      t3 = $[5]
    }
    const bashProps = t3
    let t4
    if ($[6] !== bashProps || $[7] !== verbose) {
      t4 = <BashToolResultMessage content={bashProps} verbose={verbose} />
      $[6] = bashProps
      $[7] = verbose
      $[8] = t4
    } else {
      t4 = $[8]
    }
    return t4
  }

  if (task.task_type === 'local_agent') {
    const lineCount = task.result ? task.result.split('\n').length + 1 : 0
    if (result.retrieval_status === 'success') {
      if (verbose) {
        // verbose path — show description + prompt + result
        let t3
        if ($[9] !== lineCount || $[10] !== task.description) {
          t3 = (
            <Text>
              {task.description} ({lineCount} lines)
            </Text>
          )
          $[9] = lineCount
          $[10] = task.description
          $[11] = t3
        } else {
          t3 = $[11]
        }
        let t4
        if ($[12] !== task.prompt || $[13] !== theme) {
          t4 = task.prompt && (
            <AgentPromptDisplay prompt={task.prompt} theme={theme} dim={true} />
          )
          $[12] = task.prompt
          $[13] = theme
          $[14] = t4
        } else {
          t4 = $[14]
        }
        let t5
        if ($[15] !== task.result || $[16] !== theme) {
          t5 = task.result && (
            <Box marginTop={1}>
              <AgentResponseDisplay
                content={[{ type: 'text', text: task.result }]}
                theme={theme}
              />
            </Box>
          )
          $[15] = task.result
          $[16] = theme
          $[17] = t5
        } else {
          t5 = $[17]
        }
        let t6
        if ($[18] !== task.error) {
          t6 = task.error && (
            <Box flexDirection="column" marginTop={1}>
              <Text color="error" bold>
                Error:
              </Text>
              <Box paddingLeft={2}>
                <Text color="error">{task.error}</Text>
              </Box>
            </Box>
          )
          $[18] = task.error
          $[19] = t6
        } else {
          t6 = $[19]
        }
        let t7
        if ($[20] !== t4 || $[21] !== t5 || $[22] !== t6) {
          t7 = (
            <Box flexDirection="column" paddingLeft={2} marginTop={1}>
              {t4}
              {t5}
              {t6}
            </Box>
          )
          $[20] = t4
          $[21] = t5
          $[22] = t6
          $[23] = t7
        } else {
          t7 = $[23]
        }
        let t8
        if ($[24] !== t3 || $[25] !== t7) {
          t8 = (
            <Box flexDirection="column">
              {t3}
              {t7}
            </Box>
          )
          $[24] = t3
          $[25] = t7
          $[26] = t8
        } else {
          t8 = $[26]
        }
        return t8
      }
      // non-verbose: show collapse hint
      let t3
      if ($[27] !== expandShortcut) {
        t3 = (
          <MessageResponse>
            <Text dimColor>
              Read output ({expandShortcut} to expand)
            </Text>
          </MessageResponse>
        )
        $[27] = expandShortcut
        $[28] = t3
      } else {
        t3 = $[28]
      }
      return t3
    }
    if (result.retrieval_status === 'timeout' || task.status === 'running') {
      let t3
      if ($[29] === Symbol.for('react.memo_cache_sentinel')) {
        t3 = (
          <MessageResponse>
            <Text dimColor>Task is still running…</Text>
          </MessageResponse>
        )
        $[29] = t3
      } else {
        t3 = $[29]
      }
      return t3
    }
    if (result.retrieval_status === 'not_ready') {
      let t3
      if ($[30] === Symbol.for('react.memo_cache_sentinel')) {
        t3 = (
          <MessageResponse>
            <Text dimColor>Task is still running…</Text>
          </MessageResponse>
        )
        $[30] = t3
      } else {
        t3 = $[30]
      }
      return t3
    }
    let t3
    if ($[31] === Symbol.for('react.memo_cache_sentinel')) {
      t3 = (
        <MessageResponse>
          <Text dimColor>Task not ready</Text>
        </MessageResponse>
      )
      $[31] = t3
    } else {
      t3 = $[31]
    }
    return t3
  }

  if (task.task_type === 'remote_agent') {
    let t3
    if ($[32] !== task.description || $[33] !== task.status) {
      t3 = (
        <Text>
          {'  '}
          {task.description} [{task.status}]
        </Text>
      )
      $[32] = task.description
      $[33] = task.status
      $[34] = t3
    } else {
      t3 = $[34]
    }
    let t4
    if ($[35] !== task.output || $[36] !== verbose) {
      t4 = task.output && verbose && (
        <Box paddingLeft={4} marginTop={1}>
          <Text>{task.output}</Text>
        </Box>
      )
      $[35] = task.output
      $[36] = verbose
      $[37] = t4
    } else {
      t4 = $[37]
    }
    let t5
    if ($[38] !== expandShortcut || $[39] !== task.output || $[40] !== verbose) {
      t5 = !verbose && task.output && (
        <Text dimColor>
          {'     '}({expandShortcut} to expand)
        </Text>
      )
      $[38] = expandShortcut
      $[39] = task.output
      $[40] = verbose
      $[41] = t5
    } else {
      t5 = $[41]
    }
    let t6
    if ($[42] !== t3 || $[43] !== t4 || $[44] !== t5) {
      t6 = (
        <Box flexDirection="column">
          {t3}
          {t4}
          {t5}
        </Box>
      )
      $[42] = t3
      $[43] = t4
      $[44] = t5
      $[45] = t6
    } else {
      t6 = $[45]
    }
    return t6
  }

  // Generic fallback
  let t3
  if ($[46] !== task.description || $[47] !== task.status) {
    t3 = (
      <Text>
        {'  '}
        {task.description} [{task.status}]
      </Text>
    )
    $[46] = task.description
    $[47] = task.status
    $[48] = t3
  } else {
    t3 = $[48]
  }
  let t4
  if ($[49] !== task.output) {
    t4 = task.output && (
      <Box paddingLeft={4}>
        <Text>{task.output.slice(0, 500)}</Text>
      </Box>
    )
    $[49] = task.output
    $[50] = t4
  } else {
    t4 = $[50]
  }
  let t5
  if ($[51] !== t3 || $[52] !== t4) {
    t5 = (
      <Box flexDirection="column">
        {t3}
        {t4}
      </Box>
    )
    $[51] = t3
    $[52] = t4
    $[53] = t5
  } else {
    t5 = $[53]
  }
  return t5
}
