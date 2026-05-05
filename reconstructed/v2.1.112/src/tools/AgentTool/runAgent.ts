import type { UUID } from 'crypto'
import { randomUUID } from 'crypto'
import uniqBy from 'lodash-es/uniqBy.js'
import { logForDebugging } from 'src/utils/debug.js'
import { getProjectRoot, getSessionId } from '../../bootstrap/state.js'
import { getCommand, getSkillToolCommands, hasCommand } from '../../commands.js'
import {
  DEFAULT_AGENT_PROMPT,
  enhanceSystemPromptWithEnvDetails,
} from '../../constants/prompts.js'
import type { QuerySource } from '../../constants/querySource.js'
import { getSystemContext, getUserContext } from '../../context.js'
import type { CanUseToolFn } from '../../hooks/useCanUseTool.js'
import { query } from '../../query.js'
import { getFeatureValue_CACHED_MAY_BE_STALE } from '../../services/analytics/growthbook.js'
import { getDumpPromptsPath } from '../../services/api/dumpPrompts.js'
import {
  connectToServer,
  fetchToolsForClient,
} from '../../services/mcp/client.js'
import { getMcpConfigByName } from '../../services/mcp/config.js'
import type {
  MCPServerConnection,
  ScopedMcpServerConfig,
} from '../../services/mcp/types.js'
import type { Tool, Tools, ToolUseContext } from '../../Tool.js'
import type { Command } from '../../types/command.js'
import type { AgentId } from '../../types/ids.js'
import type {
  AssistantMessage,
  Message,
  ProgressMessage,
  RequestStartEvent,
  StreamEvent,
  SystemCompactBoundaryMessage,
  TombstoneMessage,
  ToolUseSummaryMessage,
  UserMessage,
} from '../../types/message.js'
import { createAttachmentMessage } from '../../utils/attachments.js'
import { AbortError } from '../../utils/errors.js'
import { getDisplayPath } from '../../utils/file.js'
import {
  cloneFileStateCache,
  createFileStateCacheWithSizeLimit,
  READ_FILE_STATE_CACHE_SIZE,
} from '../../utils/fileStateCache.js'
import {
  type CacheSafeParams,
  createSubagentContext,
} from '../../utils/forkedAgent.js'
import { registerFrontmatterHooks } from '../../utils/hooks/registerFrontmatterHooks.js'
import { executeSubagentStartHooks } from '../../utils/hooks.js'
import { createUserMessage } from '../../utils/messages.js'
import { getAgentModel } from '../../utils/model/agent.js'
import type { ModelAlias } from '../../utils/model/aliases.js'
import {
  clearAgentTranscriptSubdir,
  recordSidechainTranscript,
  setAgentTranscriptSubdir,
  writeAgentMetadata,
} from '../../utils/sessionStorage.js'
import {
  isRestrictedToPluginOnly,
  isSourceAdminTrusted,
} from '../../utils/settings/pluginOnlyPolicy.js'
import {
  asSystemPrompt,
  type SystemPrompt,
} from '../../utils/systemPromptType.js'
import {
  isPerfettoTracingEnabled,
  registerAgent as registerPerfettoAgent,
  unregisterAgent as unregisterPerfettoAgent,
} from '../../utils/telemetry/perfettoTracing.js'
import type { ContentReplacementState } from '../../utils/toolResultStorage.js'
import { createAgentId } from '../../utils/uuid.js'
import { resolveAgentTools } from './agentToolUtils.js'
import { type AgentDefinition, isBuiltInAgent } from './loadAgentsDir.js'
import { isEnvTruthy } from '../../utils/envUtils.js'

/**
 * Initialize agent-specific MCP servers.
 * Additive to the parent's MCP clients.
 */
async function initializeAgentMcpServers(
  agentDefinition: AgentDefinition,
  parentClients: MCPServerConnection[],
): Promise<{
  clients: MCPServerConnection[]
  tools: Tools
  cleanup: () => Promise<void>
}> {
  if (!agentDefinition.mcpServers?.length) {
    return {
      clients: parentClients,
      tools: [],
      cleanup: async () => {},
    }
  }

  const agentIsAdminTrusted = isSourceAdminTrusted(agentDefinition.source)
  if (isRestrictedToPluginOnly('mcp') && !agentIsAdminTrusted) {
    logForDebugging(
      `[Agent: ${agentDefinition.agentType}] Skipping MCP servers: strictPluginOnlyCustomization locks MCP to plugin-only (agent source: ${agentDefinition.source})`,
    )
    return {
      clients: parentClients,
      tools: [],
      cleanup: async () => {},
    }
  }

  const agentClients: MCPServerConnection[] = []
  const newlyCreatedClients: MCPServerConnection[] = []
  const agentTools: Tool[] = []

  for (const spec of agentDefinition.mcpServers) {
    let config: ScopedMcpServerConfig | null = null
    let name: string
    let isNewlyCreated = false

    if (typeof spec === 'string') {
      name = spec
      config = getMcpConfigByName(spec)
      if (!config) {
        logForDebugging(
          `[Agent: ${agentDefinition.agentType}] MCP server not found: ${spec}`,
          { level: 'warn' },
        )
        continue
      }
    } else {
      const entries = Object.entries(spec)
      if (entries.length !== 1) {
        logForDebugging(
          `[Agent: ${agentDefinition.agentType}] Invalid MCP server spec: expected exactly one key`,
          { level: 'warn' },
        )
        continue
      }
      const [serverName, serverConfig] = entries[0]!
      name = serverName
      config = {
        ...serverConfig,
        scope: 'dynamic' as const,
      } as ScopedMcpServerConfig
      isNewlyCreated = true
    }

    const client = await connectToServer(name, config)
    agentClients.push(client)
    if (isNewlyCreated) {
      newlyCreatedClients.push(client)
    }

    if (client.type === 'connected') {
      const tools = await fetchToolsForClient(client)
      agentTools.push(...tools)
      logForDebugging(
        `[Agent: ${agentDefinition.agentType}] Connected to MCP server '${name}' with ${tools.length} tools`,
      )
    } else {
      logForDebugging(
        `[Agent: ${agentDefinition.agentType}] Failed to connect to MCP server '${name}': ${client.type}`,
        { level: 'warn' },
      )
    }
  }

  const cleanup = async () => {
    for (const client of newlyCreatedClients) {
      if (client.type === 'connected') {
        try {
          await client.cleanup()
        } catch (error) {
          logForDebugging(
            `[Agent: ${agentDefinition.agentType}] Error cleaning up MCP server '${client.name}': ${error}`,
            { level: 'warn' },
          )
        }
      }
    }
  }

  return {
    clients: [...parentClients, ...agentClients],
    tools: agentTools,
    cleanup,
  }
}

type QueryMessage =
  | StreamEvent
  | RequestStartEvent
  | Message
  | ToolUseSummaryMessage
  | TombstoneMessage

function isRecordableMessage(
  msg: QueryMessage,
): msg is
  | AssistantMessage
  | UserMessage
  | ProgressMessage
  | SystemCompactBoundaryMessage {
  return (
    msg.type === 'assistant' ||
    msg.type === 'user' ||
    msg.type === 'progress' ||
    (msg.type === 'system' &&
      'subtype' in msg &&
      msg.subtype === 'compact_boundary')
  )
}

export async function* runAgent({
  agentDefinition,
  promptMessages,
  toolUseContext,
  canUseTool,
  isAsync,
  canShowPermissionPrompts,
  forkContextMessages,
  querySource,
  override,
  model,
  maxTurns,
  preserveToolUseResults,
  availableTools,
  allowedTools,
  onCacheSafeParams,
  contentReplacementState,
  useExactTools,
  worktreePath,
  description,
  transcriptSubdir,
  onQueryProgress,
  isTeammate = false,
}: {
  agentDefinition: AgentDefinition
  promptMessages: Message[]
  toolUseContext: ToolUseContext
  canUseTool: CanUseToolFn
  isAsync: boolean
  canShowPermissionPrompts?: boolean
  forkContextMessages?: Message[]
  querySource: QuerySource
  override?: {
    userContext?: { [k: string]: string }
    systemContext?: { [k: string]: string }
    systemPrompt?: SystemPrompt
    abortController?: AbortController
    agentId?: AgentId
    replHydration?: unknown
  }
  model?: ModelAlias
  maxTurns?: number
  preserveToolUseResults?: boolean
  availableTools: Tools
  allowedTools?: string[]
  onCacheSafeParams?: (params: CacheSafeParams) => void
  contentReplacementState?: ContentReplacementState
  useExactTools?: boolean
  worktreePath?: string
  description?: string
  transcriptSubdir?: string
  onQueryProgress?: () => void
  /** Whether this agent is a teammate. Affects tool filtering and other behavior. */
  isTeammate?: boolean
}): AsyncGenerator<Message, void> {
  const appState = toolUseContext.getAppState()
  const permissionMode = appState.toolPermissionContext.mode

  const resolvedAgentModel = getAgentModel(
    agentDefinition.model,
    toolUseContext.options.mainLoopModel,
    model,
    permissionMode,
  )

  const agentId = override?.agentId ? override.agentId : createAgentId()

  if (transcriptSubdir) {
    setAgentTranscriptSubdir(agentId, transcriptSubdir)
  }

  if (isPerfettoTracingEnabled()) {
    const parentId = toolUseContext.agentId ?? getSessionId()
    registerPerfettoAgent(agentId, agentDefinition.agentType, parentId)
  }

  if (process.env.USER_TYPE === 'ant') {
    logForDebugging(
      `[Subagent ${agentDefinition.agentType}] API calls: ${getDisplayPath(getDumpPromptsPath(agentId))}`,
    )
  }

  const contextMessages: Message[] = forkContextMessages
    ? filterIncompleteToolCalls(forkContextMessages)
    : []
  const initialMessages: Message[] = [...contextMessages, ...promptMessages]

  const agentReadFileState =
    forkContextMessages !== undefined
      ? cloneFileStateCache(toolUseContext.readFileState)
      : createFileStateCacheWithSizeLimit(READ_FILE_STATE_CACHE_SIZE)

  const [baseUserContext, baseSystemContext] = await Promise.all([
    override?.userContext ?? getUserContext(),
    override?.systemContext ?? getSystemContext(toolUseContext.getAppState().cacheBreakerPhrase),
  ])

  const shouldOmitClaudeMd =
    agentDefinition.omitClaudeMd &&
    !override?.userContext &&
    getFeatureValue_CACHED_MAY_BE_STALE('tengu_slim_subagent_claudemd', true)
  const { claudeMd: _omittedClaudeMd, ...userContextNoClaudeMd } =
    baseUserContext
  const resolvedUserContext = shouldOmitClaudeMd
    ? userContextNoClaudeMd
    : baseUserContext

  const { gitStatus: _omittedGitStatus, ...systemContextNoGit } =
    baseSystemContext
  const resolvedSystemContext =
    agentDefinition.agentType === 'Explore' ||
    agentDefinition.agentType === 'Plan'
      ? systemContextNoGit
      : baseSystemContext

  // v112: memoized permission context computation (avoids re-deriving when context unchanged)
  const agentPermissionMode = agentDefinition.permissionMode
  let cachedToolPermCtx: (typeof appState)['toolPermissionContext'] | undefined
  let cachedDerivedCtx: (typeof appState)['toolPermissionContext'] | undefined

  function derivePermissionContext(
    toolPermCtx: (typeof appState)['toolPermissionContext'],
  ): (typeof appState)['toolPermissionContext'] {
    if (toolPermCtx === cachedToolPermCtx && cachedDerivedCtx !== undefined) {
      return cachedDerivedCtx
    }
    cachedToolPermCtx = toolPermCtx
    let ctx = toolPermCtx

    // v112: drops feature('TRANSCRIPT_CLASSIFIER') — auto mode blocks directly
    if (
      agentPermissionMode &&
      toolPermCtx.mode !== 'bypassPermissions' &&
      toolPermCtx.mode !== 'acceptEdits' &&
      toolPermCtx.mode !== 'auto'
    ) {
      ctx = { ...ctx, mode: agentPermissionMode }
    }

    const shouldAvoidPrompts =
      canShowPermissionPrompts !== undefined
        ? !canShowPermissionPrompts
        : agentPermissionMode === 'bubble'
          ? false
          : isAsync
    if (shouldAvoidPrompts) {
      ctx = { ...ctx, shouldAvoidPermissionPrompts: true }
    }
    if (isAsync && !shouldAvoidPrompts) {
      ctx = { ...ctx, awaitAutomatedChecksBeforeDialog: true }
    }
    if (allowedTools !== undefined) {
      ctx = {
        ...ctx,
        alwaysAllowRules: {
          cliArg: toolPermCtx.alwaysAllowRules.cliArg,
          session: [...allowedTools],
        },
      }
    }
    // v112: register worktreePath in additionalWorkingDirectories
    if (worktreePath && !ctx.additionalWorkingDirectories.has(worktreePath)) {
      ctx = {
        ...ctx,
        additionalWorkingDirectories: new Map([
          ...ctx.additionalWorkingDirectories,
          [worktreePath, { path: worktreePath, source: 'session' as const }],
        ]),
      }
    }

    return (cachedDerivedCtx = ctx)
  }

  const agentGetAppState = () => {
    const state = toolUseContext.getAppState()
    const toolPermissionContext = derivePermissionContext(
      state.toolPermissionContext,
    )
    const effortValue = agentDefinition.effort ?? state.effortValue
    if (
      toolPermissionContext === state.toolPermissionContext &&
      effortValue === state.effortValue
    ) {
      return state
    }
    return { ...state, toolPermissionContext, effortValue }
  }

  const resolvedTools = useExactTools
    ? availableTools
    : resolveAgentTools(agentDefinition, availableTools, isAsync).resolvedTools

  // v112: filter teammate-excluded tools when running as a teammate
  // TODO [v112 byte range ~9351000-9351200]: c2K/d2K not resolved; isTeammate
  // mode filters a known set of tools unavailable in teammate context.
  const effectiveResolvedTools =
    !useExactTools && isTeammateMode(isTeammate)
      ? resolvedTools.filter(t => !TEAMMATE_EXCLUDED_TOOLS.has(t.name))
      : resolvedTools

  const additionalWorkingDirectories = Array.from(
    appState.toolPermissionContext.additionalWorkingDirectories.keys(),
  )

  const agentSystemPrompt = override?.systemPrompt
    ? override.systemPrompt
    : asSystemPrompt(
        await getAgentSystemPrompt(
          agentDefinition,
          toolUseContext,
          resolvedAgentModel,
          additionalWorkingDirectories,
          effectiveResolvedTools,
        ),
      )

  // v112: optionally append a subagent-specific system prompt suffix
  const effectiveSystemPrompt =
    !useExactTools &&
    isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT) &&
    (toolUseContext.options as { appendSubagentSystemPrompt?: string })
      .appendSubagentSystemPrompt
      ? asSystemPrompt([
          ...agentSystemPrompt,
          (toolUseContext.options as { appendSubagentSystemPrompt: string })
            .appendSubagentSystemPrompt,
        ])
      : agentSystemPrompt

  const agentAbortController = override?.abortController
    ? override.abortController
    : isAsync
      ? new AbortController()
      : toolUseContext.abortController

  const additionalContexts: string[] = []
  for await (const hookResult of executeSubagentStartHooks(
    agentId,
    agentDefinition.agentType,
    agentAbortController.signal,
  )) {
    if (
      hookResult.additionalContexts &&
      hookResult.additionalContexts.length > 0
    ) {
      additionalContexts.push(...hookResult.additionalContexts)
    }
  }

  if (additionalContexts.length > 0) {
    const contextMessage = createAttachmentMessage({
      type: 'hook_additional_context',
      content: additionalContexts,
      hookName: 'SubagentStart',
      toolUseID: randomUUID(),
      hookEvent: 'SubagentStart',
    })
    initialMessages.push(contextMessage)
  }

  // v112: hooks registered via sessionHooksRegistry on context (not rootSetAppState)
  const hooksAllowedForThisAgent =
    !isRestrictedToPluginOnly('hooks') ||
    isSourceAdminTrusted(agentDefinition.source)
  if (agentDefinition.hooks && hooksAllowedForThisAgent) {
    registerFrontmatterHooks(
      (toolUseContext as unknown as { sessionHooksRegistry: unknown })
        .sessionHooksRegistry,
      agentId,
      agentDefinition.hooks,
      `agent '${agentDefinition.agentType}'`,
      true,
    )
  }

  const skillsToPreload = agentDefinition.skills ?? []
  if (skillsToPreload.length > 0) {
    const allSkills = await getSkillToolCommands(getProjectRoot())

    const validSkills: Array<{
      skillName: string
      skill: (typeof allSkills)[0] & { type: 'prompt' }
    }> = []

    for (const skillName of skillsToPreload) {
      const resolvedName = resolveSkillName(
        skillName,
        allSkills,
        agentDefinition,
      )
      if (!resolvedName) {
        logForDebugging(
          `[Agent: ${agentDefinition.agentType}] Warning: Skill '${skillName}' specified in frontmatter was not found`,
          { level: 'warn' },
        )
        continue
      }

      const skill = getCommand(resolvedName, allSkills)
      if (skill.type !== 'prompt') {
        logForDebugging(
          `[Agent: ${agentDefinition.agentType}] Warning: Skill '${skillName}' is not a prompt-based skill`,
          { level: 'warn' },
        )
        continue
      }
      validSkills.push({ skillName, skill })
    }

    const { formatSkillLoadingMetadata } = await import(
      '../../utils/processUserInput/processSlashCommand.js'
    )
    const loaded = await Promise.all(
      validSkills.map(async ({ skillName, skill }) => ({
        skillName,
        skill,
        content: await skill.getPromptForCommand('', toolUseContext),
      })),
    )
    for (const { skillName, skill, content } of loaded) {
      logForDebugging(
        `[Agent: ${agentDefinition.agentType}] Preloaded skill '${skillName}'`,
      )

      const metadata = formatSkillLoadingMetadata(
        skillName,
        skill.progressMessage,
      )

      initialMessages.push(
        createUserMessage({
          content: [{ type: 'text', text: metadata }, ...content],
          isMeta: true,
        }),
      )
    }
  }

  const {
    clients: mergedMcpClients,
    tools: agentMcpTools,
    cleanup: mcpCleanup,
  } = await initializeAgentMcpServers(
    agentDefinition,
    toolUseContext.options.mcpClients,
  )

  const allTools =
    agentMcpTools.length > 0
      ? uniqBy([...effectiveResolvedTools, ...agentMcpTools], 'name')
      : effectiveResolvedTools

  const agentOptions: ToolUseContext['options'] = {
    isNonInteractiveSession: useExactTools
      ? toolUseContext.options.isNonInteractiveSession
      : isAsync
        ? true
        : (toolUseContext.options.isNonInteractiveSession ?? false),
    appendSystemPrompt: toolUseContext.options.appendSystemPrompt,
    // v112: propagate appendSubagentSystemPrompt to nested agents
    ...(
      (toolUseContext.options as { appendSubagentSystemPrompt?: string })
        .appendSubagentSystemPrompt
        ? { appendSubagentSystemPrompt: (toolUseContext.options as { appendSubagentSystemPrompt: string }).appendSubagentSystemPrompt }
        : {}
    ),
    tools: allTools,
    commands: [],
    debug: toolUseContext.options.debug,
    verbose: toolUseContext.options.verbose,
    mainLoopModel: resolvedAgentModel,
    thinkingConfig: useExactTools
      ? toolUseContext.options.thinkingConfig
      : { type: 'disabled' as const },
    mcpClients: mergedMcpClients,
    mcpResources: toolUseContext.options.mcpResources,
    agentDefinitions: toolUseContext.options.agentDefinitions,
    ...(useExactTools && { querySource }),
  }

  const agentToolUseContext = createSubagentContext(toolUseContext, {
    options: agentOptions,
    agentId,
    agentType: agentDefinition.agentType,
    messages: initialMessages,
    readFileState: agentReadFileState,
    abortController: agentAbortController,
    getAppState: agentGetAppState,
    shareSetAppState: !isAsync,
    shareSetResponseLength: true,
    criticalSystemReminder_EXPERIMENTAL:
      agentDefinition.criticalSystemReminder_EXPERIMENTAL,
    contentReplacementState,
  })

  // v112: propagate replHydration from override if present
  if (override?.replHydration) {
    ;(agentToolUseContext as unknown as { replHydration: unknown }).replHydration =
      override.replHydration
  }

  if (preserveToolUseResults) {
    agentToolUseContext.preserveToolUseResults = true
  }

  if (onCacheSafeParams) {
    onCacheSafeParams({
      systemPrompt: effectiveSystemPrompt,
      userContext: resolvedUserContext,
      systemContext: resolvedSystemContext,
      toolUseContext: agentToolUseContext,
      forkContextMessages: initialMessages,
    })
  }

  void recordSidechainTranscript(initialMessages, agentId).catch(_err =>
    logForDebugging(`Failed to record sidechain transcript: ${_err}`),
  )
  void writeAgentMetadata(agentId, {
    agentType: agentDefinition.agentType,
    ...(worktreePath && { worktreePath }),
    ...(description && { description }),
  }).catch(_err => logForDebugging(`Failed to write agent metadata: ${_err}`))

  let lastRecordedUuid: UUID | null = initialMessages.at(-1)?.uuid ?? null

  // v112: track whether SubagentStop was emitted during normal execution
  let subagentStopEmitted = false
  // v112: track current request ID for paired start/end metrics
  let currentRequestId: UUID | undefined

  try {
    for await (const message of query({
      messages: initialMessages,
      systemPrompt: effectiveSystemPrompt,
      userContext: resolvedUserContext,
      systemContext: resolvedSystemContext,
      canUseTool,
      toolUseContext: agentToolUseContext,
      querySource,
      maxTurns: maxTurns ?? agentDefinition.maxTurns,
    })) {
      onQueryProgress?.()

      // v112: detect SubagentStop hook events to decide if finally needs to fire them
      if (
        (message.type === 'attachment' &&
          'hookEvent' in message.attachment &&
          (message.attachment as { hookEvent?: string }).hookEvent ===
            'SubagentStop') ||
        (message.type === 'progress' &&
          (message as { data?: { type?: string; hookEvent?: string } }).data
            ?.type === 'hook_progress' &&
          (message as { data?: { hookEvent?: string } }).data?.hookEvent ===
            'SubagentStop')
      ) {
        subagentStopEmitted = true
      }

      // v112: emit paired start/end metrics entries (API changed from single ttftMs number)
      if (
        message.type === 'stream_event' &&
        message.event.type === 'message_start' &&
        message.ttftMs != null
      ) {
        currentRequestId = randomUUID()
        toolUseContext.pushApiMetricsEntry?.({
          type: 'start',
          ttftMs: message.ttftMs,
          id: currentRequestId,
        } as unknown as Parameters<NonNullable<typeof toolUseContext.pushApiMetricsEntry>>[0])
        continue
      }
      if (
        message.type === 'stream_event' &&
        message.event.type === 'message_delta' &&
        (message.event.usage as { output_tokens?: number }).output_tokens !=
          null &&
        currentRequestId != null
      ) {
        toolUseContext.pushApiMetricsEntry?.({
          type: 'end',
          outputTokens: (message.event.usage as { output_tokens: number })
            .output_tokens,
          id: currentRequestId,
        } as unknown as Parameters<NonNullable<typeof toolUseContext.pushApiMetricsEntry>>[0])
        currentRequestId = undefined
      }

      if (message.type === 'attachment') {
        if (message.attachment.type === 'max_turns_reached') {
          logForDebugging(
            `[Agent: ${agentDefinition.agentType}] Reached max turns limit (${message.attachment.maxTurns})`,
          )
          break
        }
        yield message
        continue
      }

      if (isRecordableMessage(message)) {
        await recordSidechainTranscript(
          [message],
          agentId,
          lastRecordedUuid,
        ).catch(err =>
          logForDebugging(`Failed to record sidechain transcript: ${err}`),
        )
        if (message.type !== 'progress') {
          lastRecordedUuid = message.uuid
        }
        yield message
      }
    }

    // v112: mark stop as emitted (normal completion) then check abort
    subagentStopEmitted = true
    if (agentAbortController.signal.aborted) {
      throw new AbortError()
    }

    if (isBuiltInAgent(agentDefinition) && agentDefinition.callback) {
      agentDefinition.callback()
    }
  } finally {
    // v112: run SubagentStop hooks if they weren't emitted during normal execution
    if (!subagentStopEmitted) {
      try {
        // TODO [v112 byte range ~9354000-9354200]: w_6 = SubagentStop hook execution fn
        // Signature: runSubagentStopHooks(undefined, undefined, 5000, false, agentId, toolUseContext, undefined, agentType)
        for await (const _ of executeSubagentStopHooksOnInterrupt(
          agentId,
          agentToolUseContext,
          agentDefinition.agentType,
        )) {
          // consume iterator
        }
      } catch (err) {
        logForDebugging(
          `[runAgent] SubagentStop on interrupted query failed: ${err}`,
        )
      }
    }

    await mcpCleanup()
    // v112: clear hooks via sessionHooksRegistry on context
    if (agentDefinition.hooks) {
      ;(
        agentToolUseContext as unknown as {
          sessionHooksRegistry: { clear: (id: unknown) => void }
        }
      ).sessionHooksRegistry.clear(agentId)
    }
    // v112: conditional perfetto unregister
    if (isPerfettoTracingEnabled()) {
      unregisterPerfettoAgent(agentId)
    }
    agentToolUseContext.readFileState.clear()
    initialMessages.length = 0
    clearAgentTranscriptSubdir(agentId)
    // TODO [v112 byte range ~9354400]: G97(agentId) — unknown cleanup fn, likely
    // cleanupAgentTracking or similar (PROMPT_CACHE_BREAK_DETECTION now unconditional)
    // v112: agentLifecycle.clearTodos replaces rootSetAppState todos manipulation
    ;(
      toolUseContext as unknown as {
        agentLifecycle: { clearTodos: (id: unknown) => void }
      }
    ).agentLifecycle.clearTodos(agentId)
    // v112: REPL context cleanup
    const replContexts = (
      toolUseContext.getAppState() as unknown as {
        replContexts?: Record<
          string,
          { clearAllTimers: () => void } | undefined
        >
      }
    ).replContexts
    const replCtx = replContexts?.[agentId as unknown as string]
    if (replCtx) {
      replCtx.clearAllTimers()
      ;(
        toolUseContext as unknown as {
          setReplContext: (id: unknown, val: unknown) => void
        }
      ).setReplContext(agentId, undefined)
    }
    // v112: kill shell tasks via taskRegistry (not getAppState fn)
    // TODO [v112 byte range ~9354600]: aTK(agentId, taskRegistry)
    killAgentShellTasksViaTaskRegistry(
      agentId,
      (toolUseContext as unknown as { taskRegistry: unknown }).taskRegistry,
    )
  }
}

/**
 * Filters out assistant messages with incomplete tool calls.
 */
export function filterIncompleteToolCalls(messages: Message[]): Message[] {
  const toolUseIdsWithResults = new Set<string>()

  for (const message of messages) {
    if (message?.type === 'user') {
      const userMessage = message as UserMessage
      const content = userMessage.message.content
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === 'tool_result' && block.tool_use_id) {
            toolUseIdsWithResults.add(block.tool_use_id)
          }
        }
      }
    }
  }

  return messages.filter(message => {
    if (message?.type === 'assistant') {
      const assistantMessage = message as AssistantMessage
      const content = assistantMessage.message.content
      if (Array.isArray(content)) {
        const hasIncompleteToolCall = content.some(
          block =>
            block.type === 'tool_use' &&
            block.id &&
            !toolUseIdsWithResults.has(block.id),
        )
        return !hasIncompleteToolCall
      }
    }
    return true
  })
}

async function getAgentSystemPrompt(
  agentDefinition: AgentDefinition,
  toolUseContext: Pick<ToolUseContext, 'options'>,
  resolvedAgentModel: string,
  additionalWorkingDirectories: string[],
  resolvedTools: readonly Tool[],
): Promise<string[]> {
  const enabledToolNames = new Set(resolvedTools.map(t => t.name))
  try {
    const agentPrompt = agentDefinition.getSystemPrompt({ toolUseContext })
    const prompts = [agentPrompt]

    return await enhanceSystemPromptWithEnvDetails(
      prompts,
      resolvedAgentModel,
      additionalWorkingDirectories,
      enabledToolNames,
    )
  } catch (_error) {
    return enhanceSystemPromptWithEnvDetails(
      [DEFAULT_AGENT_PROMPT],
      resolvedAgentModel,
      additionalWorkingDirectories,
      enabledToolNames,
    )
  }
}

/**
 * Resolve a skill name from agent frontmatter to a registered command name.
 * v112: uses a split helper instead of direct .split(':')[0].
 */
function resolveSkillName(
  skillName: string,
  allSkills: Command[],
  agentDefinition: AgentDefinition,
): string | null {
  if (hasCommand(skillName, allSkills)) {
    return skillName
  }

  const pluginPrefix = agentDefinition.agentType.split(':')[0]
  if (pluginPrefix) {
    const qualifiedName = `${pluginPrefix}:${skillName}`
    if (hasCommand(qualifiedName, allSkills)) {
      return qualifiedName
    }
  }

  const suffix = `:${skillName}`
  const match = allSkills.find(cmd => cmd.name.endsWith(suffix))
  if (match) {
    return match.name
  }

  return null
}

// TODO [v112]: isTeammateMode and TEAMMATE_EXCLUDED_TOOLS not resolved from v112_min.
// isTeammateMode likely wraps the isTeammate boolean parameter check.
declare function isTeammateMode(isTeammate: boolean): boolean
declare const TEAMMATE_EXCLUDED_TOOLS: Set<string>

// TODO [v112 byte range ~9354000]: executeSubagentStopHooksOnInterrupt wraps
// the 8-arg w_6 function; signature approximated from call site.
declare function executeSubagentStopHooksOnInterrupt(
  agentId: AgentId,
  toolUseContext: ToolUseContext,
  agentType: string,
): AsyncIterable<unknown>

// TODO [v112 byte range ~9354600]: killAgentShellTasksViaTaskRegistry wraps aTK.
declare function killAgentShellTasksViaTaskRegistry(
  agentId: AgentId,
  taskRegistry: unknown,
): void
