import * as React from 'react'
import { buildTool, type ToolDef, toolMatchesName } from 'src/Tool.js'
import type {
  Message as MessageType,
  NormalizedUserMessage,
} from 'src/types/message.js'
import { getQuerySourceForAgent } from 'src/utils/promptCategory.js'
import { z } from 'zod/v4'
import {
  clearInvokedSkillsForAgent,
  getSdkAgentProgressSummariesEnabled,
} from '../../bootstrap/state.js'
import {
  enhanceSystemPromptWithEnvDetails,
  getSystemPrompt,
} from '../../constants/prompts.js'
import { isCoordinatorMode } from '../../coordinator/coordinatorMode.js'
import { startAgentSummarization } from '../../services/AgentSummary/agentSummary.js'
import { getFeatureValue_CACHED_MAY_BE_STALE } from '../../services/analytics/growthbook.js'
import {
  type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  logEvent,
} from '../../services/analytics/index.js'
import { clearDumpState } from '../../services/api/dumpPrompts.js'
import {
  completeAgentTask as completeAsyncAgent,
  createActivityDescriptionResolver,
  createProgressTracker,
  enqueueAgentNotification,
  failAgentTask as failAsyncAgent,
  getProgressUpdate,
  getTokenCountFromTracker,
  isLocalAgentTask,
  killAsyncAgent,
  registerAgentForeground,
  registerAsyncAgent,
  unregisterAgentForeground,
  updateAgentProgress as updateAsyncAgentProgress,
  updateProgressFromMessage,
} from '../../tasks/LocalAgentTask/LocalAgentTask.js'
import { assembleToolPool } from '../../tools.js'
import { asAgentId } from '../../types/ids.js'
import { runWithAgentContext } from '../../utils/agentContext.js'
import { isAgentSwarmsEnabled } from '../../utils/agentSwarmsEnabled.js'
import { getCwd, runWithCwdOverride } from '../../utils/cwd.js'
import { logForDebugging } from '../../utils/debug.js'
import { isEnvTruthy } from '../../utils/envUtils.js'
import { AbortError, errorMessage, toError } from '../../utils/errors.js'
import type { CacheSafeParams } from '../../utils/forkedAgent.js'
import { lazySchema } from '../../utils/lazySchema.js'
import {
  createUserMessage,
  extractTextContent,
  isSyntheticMessage,
  normalizeMessages,
} from '../../utils/messages.js'
import { getAgentModel } from '../../utils/model/agent.js'
import { permissionModeSchema } from '../../utils/permissions/PermissionMode.js'
import type { PermissionResult } from '../../utils/permissions/PermissionResult.js'
import {
  filterDeniedAgents,
  getDenyRuleForAgent,
} from '../../utils/permissions/permissions.js'
import { enqueueSdkEvent } from '../../utils/sdkEventQueue.js'
import { writeAgentMetadata } from '../../utils/sessionStorage.js'
import { sleep } from '../../utils/sleep.js'
import { buildEffectiveSystemPrompt } from '../../utils/systemPrompt.js'
import { asSystemPrompt } from '../../utils/systemPromptType.js'
import { getTaskOutputPath } from '../../utils/task/diskOutput.js'
import { getParentSessionId, isTeammate } from '../../utils/teammate.js'
import { isInProcessTeammate } from '../../utils/teammateContext.js'
import { getAssistantMessageContentLength } from '../../utils/tokens.js'
import { createAgentId } from '../../utils/uuid.js'
import {
  createAgentWorktree,
  hasWorktreeChanges,
  removeAgentWorktree,
} from '../../utils/worktree.js'
import { BASH_TOOL_NAME } from '../BashTool/toolName.js'
import { BackgroundHint } from '../BashTool/UI.js'
import { FILE_READ_TOOL_NAME } from '../FileReadTool/prompt.js'
import { spawnTeammate } from '../shared/spawnMultiAgent.js'
import { setAgentColor } from './agentColorManager.js'
import {
  agentToolResultSchema,
  classifyHandoffIfNeeded,
  emitTaskProgress,
  extractPartialResult,
  finalizeAgentTool,
  getLastToolUseName,
  runAsyncAgentLifecycle,
} from './agentToolUtils.js'
import { GENERAL_PURPOSE_AGENT } from './built-in/generalPurposeAgent.js'
import {
  AGENT_TOOL_NAME,
  LEGACY_AGENT_TOOL_NAME,
  ONE_SHOT_BUILTIN_AGENT_TYPES,
} from './constants.js'
import {
  buildForkedMessages,
  buildWorktreeNotice,
  FORK_AGENT,
  isForkSubagentEnabled,
  isInForkChild,
} from './forkSubagent.js'
import type { AgentDefinition } from './loadAgentsDir.js'
import {
  filterAgentsByMcpRequirements,
  hasRequiredMcpServers,
  isBuiltInAgent,
} from './loadAgentsDir.js'
import { getPrompt } from './prompt.js'
import { runAgent } from './runAgent.js'
import {
  renderGroupedAgentToolUse,
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseProgressMessage,
  renderToolUseRejectedMessage,
  renderToolUseTag,
  userFacingName,
  userFacingNameBackgroundColor,
} from './UI.js'

import type { AgentToolProgress, ShellProgress } from '../../types/tools.js'

// Progress display constants (for showing background hint)
const PROGRESS_THRESHOLD_MS = 2000

// Check if background tasks are disabled at module load time
const isBackgroundTasksDisabled = isEnvTruthy(
  process.env.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS,
)

// Auto-background agent tasks after this many ms (0 = disabled)
// jac=cos=1 verbatim from v88.
function getAutoBackgroundMs(): number {
  if (
    isEnvTruthy(process.env.CLAUDE_AUTO_BACKGROUND_TASKS) ||
    getFeatureValue_CACHED_MAY_BE_STALE('tengu_auto_background_agents', false)
  ) {
    return 120_000
  }
  return 0
}

// Base input schema (jac=cos=1 verbatim from v88)
const baseInputSchema = lazySchema(() =>
  z.object({
    description: z.string().describe('A short (3-5 word) description of the task'),
    prompt: z.string().describe('The task for the agent to perform'),
    subagent_type: z
      .string()
      .optional()
      .describe('The type of specialized agent to use for this task'),
    model: z
      .enum(['sonnet', 'opus', 'haiku'])
      .optional()
      .describe(
        "Optional model override for this agent. Takes precedence over the agent definition's model frontmatter. If omitted, uses the agent definition's model, or inherits from the parent.",
      ),
    run_in_background: z
      .boolean()
      .optional()
      .describe(
        'Set to true to run this agent in the background. You will be notified when it completes.',
      ),
  }),
)

// Full schema combining base + multi-agent params + isolation
// v112: isolation enum is always `['worktree']` (the ant-only `remote` value
// has been dropped, matching loadAgentsDir.ts notes).
const fullInputSchema = lazySchema(() => {
  const multiAgentInputSchema = z.object({
    name: z
      .string()
      .optional()
      .describe(
        'Name for the spawned agent. Makes it addressable via SendMessage({to: name}) while running.',
      ),
    team_name: z
      .string()
      .optional()
      .describe('Team name for spawning. Uses current team context if omitted.'),
    mode: permissionModeSchema()
      .optional()
      .describe(
        'Permission mode for spawned teammate (e.g., "plan" to require plan approval).',
      ),
  })
  return baseInputSchema()
    .merge(multiAgentInputSchema)
    .extend({
      isolation: z
        .enum(['worktree'])
        .optional()
        .describe(
          'Isolation mode. "worktree" creates a temporary git worktree so the agent works on an isolated copy of the repo.',
        ),
      cwd: z
        .string()
        .optional()
        .describe(
          'Absolute path to run the agent in. Overrides the working directory for all filesystem and shell operations within this agent. Mutually exclusive with isolation: "worktree".',
        ),
    })
})

// v112: top-level KAIROS gate is gone — schema directly omits cwd, then
// optionally omits run_in_background based on background-tasks gate.
export const inputSchema = lazySchema(() => {
  const schema = fullInputSchema().omit({ cwd: true })
  return isBackgroundTasksDisabled || isForkSubagentEnabled()
    ? schema.omit({ run_in_background: true })
    : schema
})
type InputSchema = ReturnType<typeof inputSchema>

// Explicit type widens the schema inference to always include all optional
// fields even when .omit() strips them for gating (cwd, run_in_background).
type AgentToolInput = z.infer<ReturnType<typeof baseInputSchema>> & {
  name?: string
  team_name?: string
  mode?: z.infer<ReturnType<typeof permissionModeSchema>>
  isolation?: 'worktree'
  cwd?: string
}

// Output schema (jac=cos=1 verbatim)
export const outputSchema = lazySchema(() => {
  const syncOutputSchema = agentToolResultSchema().extend({
    status: z.literal('completed'),
    prompt: z.string(),
  })
  const asyncOutputSchema = z.object({
    status: z.literal('async_launched'),
    agentId: z.string().describe('The ID of the async agent'),
    description: z.string().describe('The description of the task'),
    prompt: z.string().describe('The prompt for the agent'),
    outputFile: z
      .string()
      .describe('Path to the output file for checking agent progress'),
    canReadOutputFile: z
      .boolean()
      .optional()
      .describe(
        'Whether the calling agent has Read/Bash tools to check progress',
      ),
  })
  return z.union([syncOutputSchema, asyncOutputSchema])
})
type OutputSchema = ReturnType<typeof outputSchema>
type Output = z.input<OutputSchema>

// Private type for teammate spawn results — excluded from the exported schema.
type TeammateSpawnedOutput = {
  status: 'teammate_spawned'
  prompt: string
  teammate_id: string
  agent_id: string
  agent_type?: string
  model?: string
  name: string
  color?: string
  tmux_session_name: string
  tmux_window_name: string
  tmux_pane_id: string
  team_name?: string
  is_splitpane?: boolean
  plan_mode_required?: boolean
}

// v112: RemoteLaunchedOutput type is retained even though the remote-launch
// path is gone from call() (ant-only block dropped). The type is still
// surfaced through InternalOutput for downstream UI narrowing.
export type RemoteLaunchedOutput = {
  status: 'remote_launched'
  taskId: string
  sessionUrl: string
  description: string
  prompt: string
  outputFile: string
}
type InternalOutput = Output | TeammateSpawnedOutput | RemoteLaunchedOutput

// AgentTool forwards both its own progress events and shell progress events
// from the sub-agent so the SDK receives tool_progress updates during
// bash/powershell runs.
export type Progress = AgentToolProgress | ShellProgress

// v112: Helper used in two places (in `prompt` and in MCP-required-server
// resolution inside `call`) to extract the server name from a tool name of
// shape `mcp__<server>__<tool>`. Inlined in v88; v112 hoists into a tiny
// helper, here approximated as `extractMcpServerName`.
// TODO(lift): real symbol name `iH6` — confirm import location once decl
// elsewhere is identified.
function extractMcpServerName(tool: { name?: string }): string | undefined {
  if (!tool.name?.startsWith('mcp__')) return undefined
  const parts = tool.name.split('__')
  return parts[1]
}

export const AgentTool = buildTool({
  async prompt({
    agents,
    tools,
    getToolPermissionContext,
    allowedAgentTypes,
  }) {
    const toolPermissionContext = await getToolPermissionContext()

    // v112: MCP server name extraction goes through the helper.
    const mcpServersWithTools: string[] = []
    for (const tool of tools) {
      const serverName = extractMcpServerName(tool)
      if (serverName && !mcpServersWithTools.includes(serverName)) {
        mcpServersWithTools.push(serverName)
      }
    }

    const agentsWithMcpRequirementsMet = filterAgentsByMcpRequirements(
      agents,
      mcpServersWithTools,
    )
    const filteredAgents = filterDeniedAgents(
      agentsWithMcpRequirementsMet,
      toolPermissionContext,
      AGENT_TOOL_NAME,
    )

    // v112: COORDINATOR_MODE feature gate dropped from `prompt`; passes false
    // for `isCoordinator` directly.
    return await getPrompt(filteredAgents, false, allowedAgentTypes)
  },
  name: AGENT_TOOL_NAME,
  searchHint: 'delegate work to a subagent',
  aliases: [LEGACY_AGENT_TOOL_NAME],
  maxResultSizeChars: 100_000,
  async description() {
    return 'Launch a new agent'
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  async call(
    {
      prompt,
      subagent_type,
      description,
      model: modelParam,
      run_in_background,
      name,
      team_name,
      mode: spawnMode,
      isolation,
      cwd,
    }: AgentToolInput,
    toolUseContext,
    canUseTool,
    assistantMessage,
    onProgress?,
  ) {
    const startTime = Date.now()
    const model = isCoordinatorMode() ? undefined : modelParam

    const appState = toolUseContext.getAppState()
    const permissionMode = appState.toolPermissionContext.mode

    // v112: taskRegistry destructured from toolUseContext; replaces the
    // `setAppStateForTasks ?? setAppState` rootSetAppState pattern. Used as
    // the new state surface for task registration / completion / kill.
    // TODO(lift): ToolUseContext type doesn't (yet) carry taskRegistry,
    // agentLifecycle, or abortSpeculation. Cast inline pending the
    // chunk-126 / Tool.ts type update — same pattern as runAgent.ts.
    const { taskRegistry } = toolUseContext as unknown as {
      taskRegistry: unknown
    }

    if (team_name && !isAgentSwarmsEnabled()) {
      throw new Error('Agent Teams is not yet available on your plan.')
    }

    const teamName = resolveTeamName({ team_name }, appState)
    if (isTeammate() && teamName && name) {
      throw new Error(
        'Teammates cannot spawn other teammates — the team roster is flat. To spawn a subagent instead, omit the `name` parameter.',
      )
    }
    if (isInProcessTeammate() && teamName && run_in_background === true) {
      throw new Error(
        'In-process teammates cannot spawn background agents. Use run_in_background=false for synchronous subagents.',
      )
    }

    // Multi-agent spawn request (teammate)
    if (teamName && name) {
      const agentDef = subagent_type
        ? toolUseContext.options.agentDefinitions.activeAgents.find(
            a => a.agentType === subagent_type,
          )
        : undefined
      if (agentDef?.color) {
        setAgentColor(subagent_type!, agentDef.color)
      }
      const result = await spawnTeammate(
        {
          name,
          prompt,
          description,
          team_name: teamName,
          use_splitpane: true,
          plan_mode_required: spawnMode === 'plan',
          model: model ?? agentDef?.model,
          agent_type: subagent_type,
          invokingRequestId: assistantMessage?.requestId,
        },
        toolUseContext,
      )

      const spawnResult: TeammateSpawnedOutput = {
        status: 'teammate_spawned' as const,
        prompt,
        ...result.data,
      }
      return {
        data: spawnResult,
      } as unknown as { data: Output }
    }

    // Fork subagent experiment routing
    const effectiveType =
      subagent_type ??
      (isForkSubagentEnabled() ? undefined : GENERAL_PURPOSE_AGENT.agentType)
    const isForkPath = effectiveType === undefined
    let selectedAgent: AgentDefinition
    if (isForkPath) {
      if (
        toolUseContext.options.querySource ===
          `agent:builtin:${FORK_AGENT.agentType}` ||
        isInForkChild(toolUseContext.messages)
      ) {
        throw new Error(
          'Fork is not available inside a forked worker. Complete your task directly using your tools.',
        )
      }
      selectedAgent = FORK_AGENT
    } else {
      const allAgents = toolUseContext.options.agentDefinitions.activeAgents
      const { allowedAgentTypes } =
        toolUseContext.options.agentDefinitions
      const agents = filterDeniedAgents(
        allowedAgentTypes
          ? allAgents.filter(a => allowedAgentTypes.includes(a.agentType))
          : allAgents,
        appState.toolPermissionContext,
        AGENT_TOOL_NAME,
      )
      const found = agents.find(agent => agent.agentType === effectiveType)
      if (!found) {
        const agentExistsButDenied = allAgents.find(
          agent => agent.agentType === effectiveType,
        )
        if (agentExistsButDenied) {
          const denyRule = getDenyRuleForAgent(
            appState.toolPermissionContext,
            AGENT_TOOL_NAME,
            effectiveType,
          )
          throw new Error(
            `Agent type '${effectiveType}' has been denied by permission rule '${AGENT_TOOL_NAME}(${effectiveType})' from ${denyRule?.source ?? 'settings'}.`,
          )
        }
        throw new Error(
          `Agent type '${effectiveType}' not found. Available agents: ${agents.map(a => a.agentType).join(', ')}`,
        )
      }
      selectedAgent = found
    }

    if (
      isInProcessTeammate() &&
      teamName &&
      selectedAgent.background === true
    ) {
      throw new Error(
        `In-process teammates cannot spawn background agents. Agent '${selectedAgent.agentType}' has background: true in its definition.`,
      )
    }

    const requiredMcpServers = selectedAgent.requiredMcpServers

    // v112: filter the parent's tool list down to "supplemental tools" used
    // for MCP-server availability checks AND added to the worker's tool pool
    // (assembleToolPool merges them in alongside mcp.tools).
    // TODO(lift): predicate `yJ` not resolved — likely
    // `isSupplementalTool` or `isMcpDelegationTool`. Treats the parent tool
    // list as the source for the supplemental subset (~byte 8523920 in v112).
    const supplementalTools = toolUseContext.options.tools.filter(
      isSupplementalTool_V112,
    )

    if (requiredMcpServers?.length) {
      const hasPendingRequiredServers = appState.mcp.clients.some(
        c =>
          c.type === 'pending' &&
          requiredMcpServers.some(pattern =>
            c.name.toLowerCase().includes(pattern.toLowerCase()),
          ),
      )
      let currentAppState = appState
      if (hasPendingRequiredServers) {
        const MAX_WAIT_MS = 30_000
        const POLL_INTERVAL_MS = 500
        const deadline = Date.now() + MAX_WAIT_MS
        while (Date.now() < deadline) {
          await sleep(POLL_INTERVAL_MS)
          currentAppState = toolUseContext.getAppState()
          const hasFailedRequiredServer = currentAppState.mcp.clients.some(
            c =>
              c.type === 'failed' &&
              requiredMcpServers.some(pattern =>
                c.name.toLowerCase().includes(pattern.toLowerCase()),
              ),
          )
          if (hasFailedRequiredServer) break
          const stillPending = currentAppState.mcp.clients.some(
            c =>
              c.type === 'pending' &&
              requiredMcpServers.some(pattern =>
                c.name.toLowerCase().includes(pattern.toLowerCase()),
              ),
          )
          if (!stillPending) break
        }
      }

      // v112: server-name set is computed across mcp.tools concat with
      // supplementalTools (the parent's filtered tool list).
      const serversWithTools: string[] = []
      for (const tool of currentAppState.mcp.tools.concat(supplementalTools)) {
        const serverName = extractMcpServerName(tool)
        if (serverName && !serversWithTools.includes(serverName)) {
          serversWithTools.push(serverName)
        }
      }
      if (!hasRequiredMcpServers(selectedAgent, serversWithTools)) {
        const missing = requiredMcpServers.filter(
          pattern =>
            !serversWithTools.some(server =>
              server.toLowerCase().includes(pattern.toLowerCase()),
            ),
        )
        throw new Error(
          `Agent '${selectedAgent.agentType}' requires MCP servers matching: ${missing.join(', ')}. ` +
            `MCP servers with tools: ${serversWithTools.length > 0 ? serversWithTools.join(', ') : 'none'}. ` +
            `Use /mcp to configure and authenticate the required MCP servers.`,
        )
      }
    }

    if (selectedAgent.color) {
      setAgentColor(selectedAgent.agentType, selectedAgent.color)
    }

    const resolvedAgentModel = getAgentModel(
      selectedAgent.model,
      toolUseContext.options.mainLoopModel,
      isForkPath ? undefined : model,
      permissionMode,
    )

    // v112: agentLifecycle.markTypeInvoked is a new bookkeeping call that
    // tracks which agent types have been used during this session. Replaces
    // the old in-AppState set manipulation.
    ;(
      toolUseContext as unknown as {
        agentLifecycle: { markTypeInvoked: (type: string) => void }
      }
    ).agentLifecycle.markTypeInvoked(selectedAgent.agentType)

    logEvent('tengu_agent_tool_selected', {
      agent_type:
        selectedAgent.agentType as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      model:
        resolvedAgentModel as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      source:
        selectedAgent.source as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      color:
        selectedAgent.color as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      is_built_in_agent: isBuiltInAgent(selectedAgent),
      is_resume: false,
      is_async:
        (run_in_background === true || selectedAgent.background === true) &&
        !isBackgroundTasksDisabled,
      is_fork: isForkPath,
    })

    const effectiveIsolation = isolation ?? selectedAgent.isolation

    // v112: remote-isolation block dropped (ant-only path; no longer in
    // external builds). Falls straight through to the worktree/cwd path.

    // System prompt + prompt messages: branch on fork path.
    let enhancedSystemPrompt: string[] | undefined
    let forkParentSystemPrompt:
      | ReturnType<typeof buildEffectiveSystemPrompt>
      | undefined
    let promptMessages: MessageType[]
    if (isForkPath) {
      if (toolUseContext.renderedSystemPrompt) {
        forkParentSystemPrompt = toolUseContext.renderedSystemPrompt
      } else {
        const mainThreadAgentDefinition = appState.agent
          ? appState.agentDefinitions.activeAgents.find(
              a => a.agentType === appState.agent,
            )
          : undefined
        const additionalWorkingDirectories = Array.from(
          appState.toolPermissionContext.additionalWorkingDirectories.keys(),
        )
        // v112: getSystemPrompt drops the mcpClients 4th arg (matches
        // resumeAgent.ts note from chunk #105).
        const defaultSystemPrompt = await getSystemPrompt(
          toolUseContext.options.tools,
          toolUseContext.options.mainLoopModel,
          additionalWorkingDirectories,
        )
        forkParentSystemPrompt = buildEffectiveSystemPrompt({
          mainThreadAgentDefinition,
          toolUseContext,
          customSystemPrompt: toolUseContext.options.customSystemPrompt,
          defaultSystemPrompt,
          appendSystemPrompt: toolUseContext.options.appendSystemPrompt,
        })
      }
      promptMessages = buildForkedMessages(prompt, assistantMessage)
    } else {
      try {
        const additionalWorkingDirectories = Array.from(
          appState.toolPermissionContext.additionalWorkingDirectories.keys(),
        )
        const agentPrompt = selectedAgent.getSystemPrompt({ toolUseContext })

        if (selectedAgent.memory) {
          logEvent('tengu_agent_memory_loaded', {
            // v112: spread of `false` (the ant-only object literal compiled
            // out via DCE) so no agent_type leakage on external builds.
            ...(false as unknown as object),
            scope:
              selectedAgent.memory as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
            source:
              'subagent' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
          })
        }

        enhancedSystemPrompt = await enhanceSystemPromptWithEnvDetails(
          [agentPrompt],
          resolvedAgentModel,
          additionalWorkingDirectories,
        )
      } catch (error) {
        logForDebugging(
          `Failed to get system prompt for agent ${selectedAgent.agentType}: ${errorMessage(error)}`,
        )
      }
      promptMessages = [createUserMessage({ content: prompt })]
    }

    const metadata = {
      prompt,
      resolvedAgentModel,
      isBuiltInAgent: isBuiltInAgent(selectedAgent),
      startTime,
      agentType: selectedAgent.agentType,
      isAsync:
        (run_in_background === true || selectedAgent.background === true) &&
        !isBackgroundTasksDisabled,
    }

    // v112: COORDINATOR_MODE feature gate dropped — directly false in
    // shouldRunAsync. KAIROS / proactiveModule paths also gone.
    const isCoordinator = false
    const forceAsync = isForkSubagentEnabled()
    const assistantForceAsync = false
    const shouldRunAsync =
      (run_in_background === true ||
        selectedAgent.background === true ||
        isCoordinator ||
        forceAsync ||
        assistantForceAsync) &&
      !isBackgroundTasksDisabled

    const workerPermissionContext = {
      ...appState.toolPermissionContext,
      mode: selectedAgent.permissionMode ?? 'acceptEdits',
    }
    // v112: assembleToolPool now takes (ctx, mcpTools, options).
    //  - mcpTools: pulled from `getAppState().mcp.tools` (re-read for
    //    freshness after the wait loop above) and concatenated with
    //    supplementalTools (parent tools that survived the yJ filter).
    //  - options: { skipReplFilter: true } — matches resumeAgent.ts (#105).
    const workerTools = assembleToolPool(
      workerPermissionContext,
      toolUseContext.getAppState().mcp.tools.concat(supplementalTools),
      { skipReplFilter: true },
    )

    const earlyAgentId = createAgentId()

    let worktreeInfo: {
      worktreePath: string
      worktreeBranch?: string
      headCommit?: string
      gitRoot?: string
      hookBased?: boolean
    } | null = null
    if (effectiveIsolation === 'worktree') {
      const slug = `agent-${earlyAgentId.slice(0, 8)}`
      worktreeInfo = await createAgentWorktree(slug)
    }

    if (isForkPath && worktreeInfo) {
      promptMessages.push(
        createUserMessage({
          content: buildWorktreeNotice(getCwd(), worktreeInfo.worktreePath),
        }),
      )
    }

    const runAgentParams: Parameters<typeof runAgent>[0] = {
      agentDefinition: selectedAgent,
      promptMessages,
      toolUseContext,
      canUseTool,
      isAsync: shouldRunAsync,
      querySource:
        toolUseContext.options.querySource ??
        getQuerySourceForAgent(
          selectedAgent.agentType,
          isBuiltInAgent(selectedAgent),
        ),
      model: isForkPath ? undefined : model,
      // v112: fork override carries a `replHydration` payload built from the
      // parent's REPL replay log so the fork child can resume REPL state.
      // TODO(lift): `Aa6` fallback id constant unresolved.
      override: isForkPath
        ? {
            systemPrompt: forkParentSystemPrompt,
            replHydration: {
              kind: 'fork' as const,
              log: [
                ...(((
                  toolUseContext.getAppState() as unknown as {
                    replContexts: Record<
                      string,
                      { replayLog?: unknown[] } | undefined
                    >
                  }
                ).replContexts[
                  (toolUseContext.agentId ??
                    DEFAULT_REPL_CONTEXT_ID_V112) as unknown as string
                ]?.replayLog as unknown[] | undefined) ?? []),
              ],
            },
          }
        : enhancedSystemPrompt && !worktreeInfo && !cwd
          ? { systemPrompt: asSystemPrompt(enhancedSystemPrompt) }
          : undefined,
      availableTools: isForkPath ? toolUseContext.options.tools : workerTools,
      // v112: forkContextMessages now also honours the agent definition's
      // `forksParentContext` flag — `'turn'` slices the parent message log
      // from `turnStartIndex`, `true` passes the full log, undefined keeps
      // the legacy behaviour of "fork = pass parent messages, normal = none".
      forkContextMessages: isForkPath
        ? toolUseContext.messages
        : (selectedAgent as unknown as { forksParentContext?: 'turn' | true })
              .forksParentContext === 'turn'
          ? toolUseContext.messages.slice(
              (toolUseContext as unknown as { turnStartIndex: number })
                .turnStartIndex,
            )
          : (selectedAgent as unknown as { forksParentContext?: 'turn' | true })
                .forksParentContext === true
            ? toolUseContext.messages
            : undefined,
      ...(isForkPath && { useExactTools: true }),
      worktreePath: worktreeInfo?.worktreePath,
      description,
    }

    // v112: cwd helper inlined as a wrapper around runWithCwdOverride; the
    // generic <T,> wrapper is gone — call sites now invoke `eU6(i, fn)` aka
    // `runWithCwdOverride(cwdOverridePath, fn)` directly. We retain the
    // helper for readability since the call shapes match.
    const cwdOverridePath = cwd ?? worktreeInfo?.worktreePath
    const wrapWithCwd = <T,>(fn: () => T): T =>
      cwdOverridePath ? runWithCwdOverride(cwdOverridePath, fn) : fn()

    const cleanupWorktreeIfNeeded = async (): Promise<{
      worktreePath?: string
      worktreeBranch?: string
    }> => {
      if (!worktreeInfo) return {}
      const { worktreePath, worktreeBranch, headCommit, gitRoot, hookBased } =
        worktreeInfo
      worktreeInfo = null
      if (hookBased) {
        logForDebugging(`Hook-based agent worktree kept at: ${worktreePath}`)
        return { worktreePath }
      }
      if (headCommit) {
        const changed = await hasWorktreeChanges(worktreePath, headCommit)
        if (!changed) {
          // v112: removeAgentWorktree picks up two extra args: a boolean
          // `force` flag (passed false) and a `reason` string ("agent_tool")
          // used for telemetry / debugging.
          await removeAgentWorktree(
            worktreePath,
            worktreeBranch,
            gitRoot,
            false,
            'agent_tool',
          )
          void writeAgentMetadata(asAgentId(earlyAgentId), {
            agentType: selectedAgent.agentType,
            description,
          }).catch(_err =>
            logForDebugging(`Failed to clear worktree metadata: ${_err}`),
          )
          return {}
        }
      }
      logForDebugging(`Agent worktree has changes, keeping: ${worktreePath}`)
      return { worktreePath, worktreeBranch }
    }

    if (shouldRunAsync) {
      const asyncAgentId = earlyAgentId
      // v112: registerAsyncAgent takes `taskRegistry` instead of
      // `setAppState`, plus a new `cwd` arg.
      const agentBackgroundTask = registerAsyncAgent({
        agentId: asyncAgentId,
        description,
        prompt,
        selectedAgent,
        taskRegistry,
        toolUseId: toolUseContext.toolUseId,
        cwd: cwdOverridePath,
      } as unknown as Parameters<typeof registerAsyncAgent>[0])

      // v112: name-> agentId registration delegates to
      // `agentLifecycle.registerName` instead of mutating AppState through
      // rootSetAppState's agentNameRegistry map.
      if (name) {
        ;(
          toolUseContext as unknown as {
            agentLifecycle: {
              registerName: (name: string, id: ReturnType<typeof asAgentId>) => void
            }
          }
        ).agentLifecycle.registerName(name, asAgentId(asyncAgentId))
      }

      const asyncAgentContext = {
        agentId: asyncAgentId,
        parentSessionId: getParentSessionId(),
        agentType: 'subagent' as const,
        subagentName: selectedAgent.agentType,
        isBuiltIn: isBuiltInAgent(selectedAgent),
        invokingRequestId: assistantMessage?.requestId,
        invocationKind: 'spawn' as const,
        invocationEmitted: false,
      }

      // v112: lifecycle wrapper threads `taskRegistry` through (replaces
      // `rootSetAppState`).
      void runWithAgentContext(asyncAgentContext, () =>
        wrapWithCwd(() =>
          runAsyncAgentLifecycle({
            taskId: agentBackgroundTask.agentId,
            abortController: agentBackgroundTask.abortController!,
            makeStream: onCacheSafeParams =>
              runAgent({
                ...runAgentParams,
                override: {
                  ...runAgentParams.override,
                  agentId: asAgentId(agentBackgroundTask.agentId),
                  abortController: agentBackgroundTask.abortController!,
                },
                onCacheSafeParams,
              }),
            metadata,
            description,
            toolUseContext,
            taskRegistry,
            agentIdForCleanup: asyncAgentId,
            enableSummarization:
              isCoordinator ||
              isForkSubagentEnabled() ||
              getSdkAgentProgressSummariesEnabled(),
            getWorktreeResult: cleanupWorktreeIfNeeded,
          } as unknown as Parameters<typeof runAsyncAgentLifecycle>[0]),
        ),
      )
      const canReadOutputFile = toolUseContext.options.tools.some(
        t =>
          toolMatchesName(t, FILE_READ_TOOL_NAME) ||
          toolMatchesName(t, BASH_TOOL_NAME),
      )
      return {
        data: {
          isAsync: true as const,
          status: 'async_launched' as const,
          agentId: agentBackgroundTask.agentId,
          description,
          prompt,
          outputFile: getTaskOutputPath(agentBackgroundTask.agentId),
          canReadOutputFile,
        },
      }
    } else {
      const syncAgentId = asAgentId(earlyAgentId)

      const syncAgentContext = {
        agentId: syncAgentId,
        parentSessionId: getParentSessionId(),
        agentType: 'subagent' as const,
        subagentName: selectedAgent.agentType,
        isBuiltIn: isBuiltInAgent(selectedAgent),
        invokingRequestId: assistantMessage?.requestId,
        invocationKind: 'spawn' as const,
        invocationEmitted: false,
      }

      return runWithAgentContext(syncAgentContext, () =>
        wrapWithCwd(async () => {
          const agentMessages: MessageType[] = []
          const agentStartTime = Date.now()
          const syncTracker = createProgressTracker()
          const syncResolveActivity = createActivityDescriptionResolver(
            toolUseContext.options.tools,
          )

          if (promptMessages.length > 0) {
            const normalizedPromptMessages = normalizeMessages(promptMessages)
            const normalizedFirstMessage = normalizedPromptMessages.find(
              (m): m is NormalizedUserMessage => m.type === 'user',
            )
            if (
              normalizedFirstMessage &&
              normalizedFirstMessage.type === 'user' &&
              onProgress
            ) {
              onProgress({
                toolUseID: `agent_${assistantMessage.message.id}`,
                data: {
                  message: normalizedFirstMessage,
                  type: 'agent_progress',
                  prompt,
                  agentId: syncAgentId,
                },
              })
            }
          }

          let foregroundTaskId: string | undefined
          let backgroundPromise:
            | Promise<{ type: 'background' }>
            | undefined
          let cancelAutoBackground: (() => void) | undefined
          if (!isBackgroundTasksDisabled) {
            // v112: registerAgentForeground takes `taskRegistry` (no
            // setAppState) plus the new `cwd` arg.
            const registration = registerAgentForeground({
              agentId: syncAgentId,
              description,
              prompt,
              selectedAgent,
              taskRegistry,
              toolUseId: toolUseContext.toolUseId,
              autoBackgroundMs: getAutoBackgroundMs() || undefined,
              cwd: cwdOverridePath,
            } as unknown as Parameters<typeof registerAgentForeground>[0])
            foregroundTaskId = registration.taskId
            backgroundPromise = registration.backgroundSignal.then(() => ({
              type: 'background' as const,
            }))
            cancelAutoBackground = registration.cancelAutoBackground
          }

          let backgroundHintShown = false
          let wasBackgrounded = false
          let stopForegroundSummarization: (() => void) | undefined
          const summaryTaskId = foregroundTaskId

          const agentIterator = runAgent({
            ...runAgentParams,
            override: {
              ...runAgentParams.override,
              agentId: syncAgentId,
            },
            onCacheSafeParams:
              summaryTaskId && getSdkAgentProgressSummariesEnabled()
                ? (params: CacheSafeParams) => {
                    // v112: startAgentSummarization gets `taskRegistry`
                    // instead of `rootSetAppState`.
                    const { stop } = startAgentSummarization(
                      summaryTaskId,
                      syncAgentId,
                      params,
                      taskRegistry as Parameters<
                        typeof startAgentSummarization
                      >[3],
                    )
                    stopForegroundSummarization = stop
                  }
                : undefined,
          })[Symbol.asyncIterator]()

          let syncAgentError: Error | undefined
          let wasAborted = false
          let worktreeResult: {
            worktreePath?: string
            worktreeBranch?: string
          } = {}
          try {
            while (true) {
              const elapsed = Date.now() - agentStartTime

              if (
                !isBackgroundTasksDisabled &&
                !backgroundHintShown &&
                elapsed >= PROGRESS_THRESHOLD_MS
              ) {
                backgroundHintShown = true
                // v112: setToolJSX is called optionally (`?.`), and a paired
                // emitToolProgress({kind:'background_hint',toolUseId})
                // event fires so the SDK reflects the hint state.
                toolUseContext.setToolJSX?.({
                  jsx: <BackgroundHint />,
                  shouldHidePromptInput: false,
                  shouldContinueAnimation: true,
                  showSpinner: true,
                })
                if (toolUseContext.toolUseId) {
                  ;(
                    toolUseContext as unknown as {
                      emitToolProgress?: (e: {
                        kind: string
                        toolUseId: string
                      }) => void
                    }
                  ).emitToolProgress?.({
                    kind: 'background_hint',
                    toolUseId: toolUseContext.toolUseId,
                  })
                }
              }

              const nextMessagePromise = agentIterator.next()
              const raceResult = backgroundPromise
                ? await Promise.race([
                    nextMessagePromise.then(r => ({
                      type: 'message' as const,
                      result: r,
                    })),
                    backgroundPromise,
                  ])
                : {
                    type: 'message' as const,
                    result: await nextMessagePromise,
                  }

              if (raceResult.type === 'background' && foregroundTaskId) {
                const appState2 = toolUseContext.getAppState()
                const task = appState2.tasks[foregroundTaskId]
                if (isLocalAgentTask(task) && task.isBackgrounded) {
                  const backgroundedTaskId = foregroundTaskId
                  wasBackgrounded = true
                  stopForegroundSummarization?.()

                  void runWithAgentContext(syncAgentContext, async () => {
                    let stopBackgroundedSummarization: (() => void) | undefined
                    try {
                      await Promise.race([
                        agentIterator.return(undefined).catch(() => {}),
                        sleep(1000),
                      ])
                      const tracker = createProgressTracker()
                      const resolveActivity2 =
                        createActivityDescriptionResolver(
                          toolUseContext.options.tools,
                        )
                      for (const existingMsg of agentMessages) {
                        updateProgressFromMessage(
                          tracker,
                          existingMsg,
                          resolveActivity2,
                          toolUseContext.options.tools,
                        )
                      }
                      for await (const msg of runAgent({
                        ...runAgentParams,
                        isAsync: true,
                        override: {
                          ...runAgentParams.override,
                          agentId: asAgentId(backgroundedTaskId),
                          abortController: task.abortController,
                        },
                        onCacheSafeParams: getSdkAgentProgressSummariesEnabled()
                          ? (params: CacheSafeParams) => {
                              const { stop } = startAgentSummarization(
                                backgroundedTaskId,
                                asAgentId(backgroundedTaskId),
                                params,
                                taskRegistry as Parameters<
                                  typeof startAgentSummarization
                                >[3],
                              )
                              stopBackgroundedSummarization = stop
                            }
                          : undefined,
                      })) {
                        agentMessages.push(msg)
                        updateProgressFromMessage(
                          tracker,
                          msg,
                          resolveActivity2,
                          toolUseContext.options.tools,
                        )
                        // v112: updateAsyncAgentProgress uses taskRegistry.
                        updateAsyncAgentProgress(
                          backgroundedTaskId,
                          getProgressUpdate(tracker),
                          taskRegistry as Parameters<
                            typeof updateAsyncAgentProgress
                          >[2],
                        )
                        const lastToolName = getLastToolUseName(msg)
                        if (lastToolName) {
                          emitTaskProgress(
                            tracker,
                            backgroundedTaskId,
                            toolUseContext.toolUseId,
                            description,
                            startTime,
                            lastToolName,
                          )
                        }
                      }
                      const agentResult = finalizeAgentTool(
                        agentMessages,
                        backgroundedTaskId,
                        metadata,
                      )

                      // v112: completeAsyncAgent uses taskRegistry.
                      completeAsyncAgent(
                        agentResult,
                        taskRegistry as Parameters<typeof completeAsyncAgent>[1],
                      )

                      let finalMessage = extractTextContent(
                        agentResult.content,
                        '\n',
                      )
                      // v112: TRANSCRIPT_CLASSIFIER feature gate dropped —
                      // classifyHandoffIfNeeded always runs.
                      {
                        const backgroundedAppState =
                          toolUseContext.getAppState()
                        const handoffWarning = await classifyHandoffIfNeeded({
                          agentMessages,
                          tools: toolUseContext.options.tools,
                          toolPermissionContext:
                            backgroundedAppState.toolPermissionContext,
                          abortSignal: task.abortController!.signal,
                          subagentType: selectedAgent.agentType,
                          totalToolUseCount: agentResult.totalToolUseCount,
                        })
                        if (handoffWarning) {
                          finalMessage = `${handoffWarning}\n\n${finalMessage}`
                        }
                      }

                      const worktreeResult = await cleanupWorktreeIfNeeded()
                      // v112: enqueueAgentNotification swaps `setAppState`
                      // for `taskRegistry` and adds an `abortSpeculation`
                      // signal piped from the tool-use context.
                      enqueueAgentNotification({
                        taskId: backgroundedTaskId,
                        description,
                        status: 'completed',
                        taskRegistry,
                        abortSpeculation: (
                          toolUseContext as unknown as {
                            abortSpeculation: unknown
                          }
                        ).abortSpeculation,
                        finalMessage,
                        usage: {
                          totalTokens: getTokenCountFromTracker(tracker),
                          toolUses: agentResult.totalToolUseCount,
                          durationMs: agentResult.totalDurationMs,
                        },
                        toolUseId: toolUseContext.toolUseId,
                        ...worktreeResult,
                      } as unknown as Parameters<
                        typeof enqueueAgentNotification
                      >[0])
                    } catch (error) {
                      if (error instanceof AbortError) {
                        // v112: killAsyncAgent uses taskRegistry.
                        killAsyncAgent(
                          backgroundedTaskId,
                          taskRegistry as Parameters<typeof killAsyncAgent>[1],
                        )
                        logEvent('tengu_agent_tool_terminated', {
                          agent_type:
                            metadata.agentType as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
                          model:
                            metadata.resolvedAgentModel as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
                          duration_ms: Date.now() - metadata.startTime,
                          is_async: true,
                          is_built_in_agent: metadata.isBuiltInAgent,
                          reason:
                            'user_cancel_background' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
                        })
                        const worktreeResult = await cleanupWorktreeIfNeeded()
                        const partialResult = extractPartialResult(agentMessages)
                        enqueueAgentNotification({
                          taskId: backgroundedTaskId,
                          description,
                          status: 'killed',
                          taskRegistry,
                          abortSpeculation: (
                            toolUseContext as unknown as {
                              abortSpeculation: unknown
                            }
                          ).abortSpeculation,
                          toolUseId: toolUseContext.toolUseId,
                          finalMessage: partialResult,
                          ...worktreeResult,
                        } as unknown as Parameters<
                          typeof enqueueAgentNotification
                        >[0])
                        return
                      }
                      const errMsg = errorMessage(error)
                      // v112: failAsyncAgent uses taskRegistry.
                      failAsyncAgent(
                        backgroundedTaskId,
                        errMsg,
                        taskRegistry as Parameters<typeof failAsyncAgent>[2],
                      )
                      const worktreeResult = await cleanupWorktreeIfNeeded()
                      // v112: failed-path notification now also includes a
                      // `finalMessage: extractPartialResult(agentMessages)`
                      // so partial output is forwarded with the failure.
                      enqueueAgentNotification({
                        taskId: backgroundedTaskId,
                        description,
                        status: 'failed',
                        error: errMsg,
                        taskRegistry,
                        abortSpeculation: (
                          toolUseContext as unknown as {
                            abortSpeculation: unknown
                          }
                        ).abortSpeculation,
                        toolUseId: toolUseContext.toolUseId,
                        finalMessage: extractPartialResult(agentMessages),
                        ...worktreeResult,
                      } as unknown as Parameters<
                        typeof enqueueAgentNotification
                      >[0])
                    } finally {
                      stopBackgroundedSummarization?.()
                      clearInvokedSkillsForAgent(syncAgentId)
                      clearDumpState(syncAgentId)
                    }
                  })

                  const canReadOutputFile = toolUseContext.options.tools.some(
                    t =>
                      toolMatchesName(t, FILE_READ_TOOL_NAME) ||
                      toolMatchesName(t, BASH_TOOL_NAME),
                  )
                  return {
                    data: {
                      isAsync: true as const,
                      status: 'async_launched' as const,
                      agentId: backgroundedTaskId,
                      description,
                      prompt,
                      outputFile: getTaskOutputPath(backgroundedTaskId),
                      canReadOutputFile,
                    },
                  }
                }
              }

              if (raceResult.type !== 'message') {
                continue
              }
              const { result } = raceResult
              if (result.done) break
              const message = result.value
              agentMessages.push(message)

              updateProgressFromMessage(
                syncTracker,
                message,
                syncResolveActivity,
                toolUseContext.options.tools,
              )
              if (foregroundTaskId) {
                const lastToolName = getLastToolUseName(message)
                if (lastToolName) {
                  emitTaskProgress(
                    syncTracker,
                    foregroundTaskId,
                    toolUseContext.toolUseId,
                    description,
                    agentStartTime,
                    lastToolName,
                  )
                  if (getSdkAgentProgressSummariesEnabled()) {
                    updateAsyncAgentProgress(
                      foregroundTaskId,
                      getProgressUpdate(syncTracker),
                      taskRegistry as Parameters<
                        typeof updateAsyncAgentProgress
                      >[2],
                    )
                  }
                }
              }

              if (
                message.type === 'progress' &&
                (message.data.type === 'bash_progress' ||
                  message.data.type === 'powershell_progress') &&
                onProgress
              ) {
                onProgress({
                  toolUseID: message.toolUseID,
                  data: message.data,
                })
              }
              if (message.type !== 'assistant' && message.type !== 'user') {
                continue
              }

              if (message.type === 'assistant') {
                const contentLength = getAssistantMessageContentLength(message)
                if (contentLength > 0) {
                  // v112: ToolUseContext exposes `addResponseLength(n)`
                  // helper that internally folds into setResponseLength.
                  ;(
                    toolUseContext as unknown as {
                      addResponseLength: (n: number) => void
                    }
                  ).addResponseLength(contentLength)
                }
              }
              const normalizedNew = normalizeMessages([message])
              for (const m of normalizedNew) {
                for (const content of m.message.content) {
                  if (
                    content.type !== 'tool_use' &&
                    content.type !== 'tool_result'
                  ) {
                    continue
                  }
                  if (onProgress) {
                    onProgress({
                      toolUseID: `agent_${assistantMessage.message.id}`,
                      data: {
                        message: m,
                        type: 'agent_progress',
                        prompt: '',
                        agentId: syncAgentId,
                      },
                    })
                  }
                }
              }
            }
          } catch (error) {
            if (error instanceof AbortError) {
              wasAborted = true
              logEvent('tengu_agent_tool_terminated', {
                agent_type:
                  metadata.agentType as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
                model:
                  metadata.resolvedAgentModel as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
                duration_ms: Date.now() - metadata.startTime,
                is_async: false,
                is_built_in_agent: metadata.isBuiltInAgent,
                reason:
                  'user_cancel_sync' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
              })
              throw error
            }

            logForDebugging(`Sync agent error: ${errorMessage(error)}`, {
              level: 'error',
            })

            syncAgentError = toError(error)
          } finally {
            if (toolUseContext.setToolJSX) {
              toolUseContext.setToolJSX(null)
            }
            // v112: paired clear event so the SDK takes down the hint state.
            if (toolUseContext.toolUseId) {
              ;(
                toolUseContext as unknown as {
                  emitToolProgress?: (e: {
                    kind: string
                    toolUseId: string
                  }) => void
                }
              ).emitToolProgress?.({
                kind: 'clear',
                toolUseId: toolUseContext.toolUseId,
              })
            }

            stopForegroundSummarization?.()

            if (foregroundTaskId) {
              // v112: unregisterAgentForeground takes taskRegistry.
              unregisterAgentForeground(
                foregroundTaskId,
                taskRegistry as Parameters<typeof unregisterAgentForeground>[1],
              )
              if (!wasBackgrounded) {
                const progress = getProgressUpdate(syncTracker)
                enqueueSdkEvent({
                  type: 'system',
                  subtype: 'task_notification',
                  task_id: foregroundTaskId,
                  tool_use_id: toolUseContext.toolUseId,
                  status: syncAgentError
                    ? 'failed'
                    : wasAborted
                      ? 'stopped'
                      : 'completed',
                  output_file: '',
                  summary: description,
                  usage: {
                    total_tokens: progress.tokenCount,
                    tool_uses: progress.toolUseCount,
                    duration_ms: Date.now() - agentStartTime,
                  },
                })
              }
            }

            clearInvokedSkillsForAgent(syncAgentId)

            if (!wasBackgrounded) {
              clearDumpState(syncAgentId)
            }

            cancelAutoBackground?.()

            if (!wasBackgrounded) {
              worktreeResult = await cleanupWorktreeIfNeeded()
            }
          }

          const lastMessage = agentMessages.findLast(
            _ => _.type !== 'system' && _.type !== 'progress',
          )
          if (lastMessage && isSyntheticMessage(lastMessage)) {
            logEvent('tengu_agent_tool_terminated', {
              agent_type:
                metadata.agentType as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
              model:
                metadata.resolvedAgentModel as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
              duration_ms: Date.now() - metadata.startTime,
              is_async: false,
              is_built_in_agent: metadata.isBuiltInAgent,
              reason:
                'user_cancel_sync' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
            })
            throw new AbortError()
          }

          if (syncAgentError) {
            const hasAssistantMessages = agentMessages.some(
              msg => msg.type === 'assistant',
            )
            if (!hasAssistantMessages) {
              throw syncAgentError
            }
            logForDebugging(
              `Sync agent recovering from error with ${agentMessages.length} messages`,
            )
          }
          const agentResult = finalizeAgentTool(
            agentMessages,
            syncAgentId,
            metadata,
          )
          // v112: TRANSCRIPT_CLASSIFIER feature gate dropped from sync path
          // too — classifyHandoffIfNeeded always runs.
          {
            const currentAppState = toolUseContext.getAppState()
            const handoffWarning = await classifyHandoffIfNeeded({
              agentMessages,
              tools: toolUseContext.options.tools,
              toolPermissionContext: currentAppState.toolPermissionContext,
              abortSignal: toolUseContext.abortController.signal,
              subagentType: selectedAgent.agentType,
              totalToolUseCount: agentResult.totalToolUseCount,
            })
            if (handoffWarning) {
              agentResult.content = [
                { type: 'text' as const, text: handoffWarning },
                ...agentResult.content,
              ]
            }
          }
          return {
            data: {
              status: 'completed' as const,
              prompt,
              ...agentResult,
              ...worktreeResult,
            },
          }
        }),
      )
    }
  },
  isReadOnly() {
    return true
  },
  toAutoClassifierInput(input) {
    const i = input as AgentToolInput
    const tags = [
      i.subagent_type,
      i.mode ? `mode=${i.mode}` : undefined,
    ].filter((t): t is string => t !== undefined)
    const prefix = tags.length > 0 ? `(${tags.join(', ')}): ` : ': '
    return `${prefix}${i.prompt}`
  },
  isConcurrencySafe() {
    return true
  },
  userFacingName,
  userFacingNameBackgroundColor,
  getActivityDescription(input) {
    return input?.description ?? 'Running task'
  },
  // v112: external-build auto-mode passthrough block dropped — always allow.
  async checkPermissions(input, context): Promise<PermissionResult> {
    // Read app state for parity with v88's signature; result currently unused.
    void context.getAppState()
    return {
      behavior: 'allow',
      updatedInput: input,
    }
  },
  mapToolResultToToolResultBlockParam(data, toolUseID) {
    const internalData = data as InternalOutput
    if (
      typeof internalData === 'object' &&
      internalData !== null &&
      'status' in internalData &&
      internalData.status === 'teammate_spawned'
    ) {
      const spawnData = internalData as TeammateSpawnedOutput
      return {
        tool_use_id: toolUseID,
        type: 'tool_result',
        content: [
          {
            type: 'text',
            text: `Spawned successfully.
agent_id: ${spawnData.teammate_id}
name: ${spawnData.name}
team_name: ${spawnData.team_name}
The agent is now running and will receive instructions via mailbox.`,
          },
        ],
      }
    }
    if ('status' in internalData && internalData.status === 'remote_launched') {
      const r = internalData
      return {
        tool_use_id: toolUseID,
        type: 'tool_result',
        content: [
          {
            type: 'text',
            text: `Remote agent launched in CCR.
taskId: ${r.taskId}
session_url: ${r.sessionUrl}
output_file: ${r.outputFile}
The agent is running remotely. You will be notified automatically when it completes.
Briefly tell the user what you launched and end your response.`,
          },
        ],
      }
    }
    if (data.status === 'async_launched') {
      const prefix = `Async agent launched successfully.
agentId: ${data.agentId} (internal ID - do not mention to user. Use SendMessage with to: '${data.agentId}' to continue this agent.)
The agent is working in the background. You will be notified automatically when it completes.`
      // v112: instruction for sync agents with read tools rewritten — they
      // are now told NOT to read the output file (it is the full sub-agent
      // JSONL transcript and would overflow context). The fallback string
      // for agents without read tools is unchanged.
      const instructions = data.canReadOutputFile
        ? `Do not duplicate this agent's work — avoid working with the same files or topics it is using. Work on non-overlapping tasks, or briefly tell the user what you launched and end your response.
output_file: ${data.outputFile}
Do NOT ${FILE_READ_TOOL_NAME} or ${BASH_TOOL_NAME} tail this file — it is the full sub-agent JSONL transcript and reading it will overflow your context. If the user asks for progress, say the agent is still running; you'll get a completion notification.`
        : `Briefly tell the user what you launched and end your response. Do not generate any other text — agent results will arrive in a subsequent message.`
      const text = `${prefix}\n${instructions}`
      return {
        tool_use_id: toolUseID,
        type: 'tool_result',
        content: [{ type: 'text', text }],
      }
    }
    if (data.status === 'completed') {
      const worktreeData = data as Record<string, unknown>
      const worktreeInfoText = worktreeData.worktreePath
        ? `\nworktreePath: ${worktreeData.worktreePath}\nworktreeBranch: ${worktreeData.worktreeBranch}`
        : ''
      const contentOrMarker =
        data.content.length > 0
          ? data.content
          : [
              {
                type: 'text' as const,
                text: '(Subagent completed but returned no output.)',
              },
            ]
      if (
        data.agentType &&
        ONE_SHOT_BUILTIN_AGENT_TYPES.has(data.agentType) &&
        !worktreeInfoText
      ) {
        return {
          tool_use_id: toolUseID,
          type: 'tool_result',
          content: contentOrMarker,
        }
      }
      return {
        tool_use_id: toolUseID,
        type: 'tool_result',
        content: [
          ...contentOrMarker,
          {
            type: 'text',
            text: `agentId: ${data.agentId} (use SendMessage with to: '${data.agentId}' to continue this agent)${worktreeInfoText}
<usage>total_tokens: ${data.totalTokens}
tool_uses: ${data.totalToolUseCount}
duration_ms: ${data.totalDurationMs}</usage>`,
          },
        ],
      }
    }
    data satisfies never
    throw new Error(
      `Unexpected agent tool result status: ${(data as { status: string }).status}`,
    )
  },
  renderToolResultMessage,
  renderToolUseMessage,
  renderToolUseTag,
  renderToolUseProgressMessage,
  renderToolUseRejectedMessage,
  renderToolUseErrorMessage,
  renderGroupedToolUse: renderGroupedAgentToolUse,
} satisfies ToolDef<InputSchema, Output, Progress>)

// Helper hoisted in v112 to gate `prompt` callback / `call` MCP server
// resolution (jac=cos=1 path; verbatim from v88).
function resolveTeamName(
  input: { team_name?: string },
  appState: { teamContext?: { teamName: string } },
): string | undefined {
  if (!isAgentSwarmsEnabled()) return undefined
  return input.team_name || appState.teamContext?.teamName
}

// --- file-bottom stubs (TODO unresolved symbols) -----------------------------

// TODO(lift): predicate `yJ` unresolved at v112 byte ~8523920. Splits the
// parent's tool list into "supplemental tools" that survive into the
// sub-agent's pool (in addition to MCP tools). Likely something like
// `isSupplementalTool` or `isCrossAgentTool`. Placeholder stub returns false
// (degrades to v88 behavior of "no supplemental tools merged").
function isSupplementalTool_V112(_tool: unknown): boolean {
  return false
}

// TODO(lift): `Aa6` constant — default REPL context id used as fallback in
// the fork override's replHydration log lookup. Unresolved.
const DEFAULT_REPL_CONTEXT_ID_V112 = '__default__'

// (getFeatureValue_CACHED_MAY_BE_STALE imported at top from
// '../../services/analytics/growthbook.js' — same path as runAgent.ts and
// other v112 lifted files.)
