import { feature } from 'bun:bundle'
import type { ContentBlockParam, TextBlockParam } from '@anthropic-ai/sdk/resources'
import { randomUUID } from 'crypto'
import { setPromptId } from 'src/bootstrap/state.js'
import { builtInCommandNames, type Command, type CommandBase, findCommand, getCommand, getCommandName, hasCommand, type PromptCommand } from 'src/commands.js'
import { NO_CONTENT_MESSAGE } from 'src/constants/messages.js'
import type { SetToolJSXFn, ToolUseContext } from 'src/Tool.js'
import type { AssistantMessage, AttachmentMessage, Message, NormalizedUserMessage, ProgressMessage, UserMessage } from 'src/types/message.js'
import { addInvokedSkill, getSessionId } from '../../bootstrap/state.js'
import { COMMAND_MESSAGE_TAG, COMMAND_NAME_TAG } from '../../constants/xml.js'
import type { CanUseToolFn } from '../../hooks/useCanUseTool.js'
import { type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, type AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED, logEvent } from '../../services/analytics/index.js'
import { getDumpPromptsPath } from '../../services/api/dumpPrompts.js'
import { buildPostCompactMessages } from '../../services/compact/compact.js'
import { resetMicrocompactState } from '../../services/compact/microCompact.js'
import type { Progress as AgentProgress } from '../../tools/AgentTool/AgentTool.js'
import { runAgent } from '../../tools/AgentTool/runAgent.js'
import { renderToolUseProgressMessage } from '../../tools/AgentTool/UI.js'
import type { CommandResultDisplay } from '../../types/command.js'
import { createAbortController } from '../abortController.js'
import { getAgentContext } from '../agentContext.js'
import { createAttachmentMessage, getAttachmentMessages } from '../attachments.js'
import { logForDebugging } from '../debug.js'
import { isEnvTruthy } from '../envUtils.js'
import { AbortError, MalformedCommandError } from '../errors.js'
import { getDisplayPath } from '../file.js'
import { extractResultText, prepareForkedCommandContext } from '../forkedAgent.js'
import { getFsImplementation } from '../fsOperations.js'
import { isFullscreenEnvEnabled } from '../fullscreen.js'
import { toArray } from '../generators.js'
import { registerSkillHooks } from '../hooks/registerSkillHooks.js'
import { logError } from '../log.js'
import { enqueuePendingNotification } from '../messageQueueManager.js'
import { createCommandInputMessage, createSyntheticUserCaveatMessage, createSystemMessage, createUserInterruptionMessage, createUserMessage, formatCommandInputTags, isCompactBoundaryMessage, isSystemLocalCommandMessage, normalizeMessages, prepareUserContent } from '../messages.js'
import type { ModelAlias } from '../model/aliases.js'
import { parseToolListFromCLI } from '../permissions/permissionSetup.js'
import { hasPermissionsToUseTool } from '../permissions/permissions.js'
import { isOfficialMarketplaceName, parsePluginIdentifier } from '../plugins/pluginIdentifier.js'
import { isRestrictedToPluginOnly, isSourceAdminTrusted } from '../settings/pluginOnlyPolicy.js'
import { parseSlashCommand } from '../slashCommandParsing.js'
import { sleep } from '../sleep.js'
import { recordSkillUsage } from '../suggestions/skillUsageTracking.js'
import { logOTelEvent, redactIfDisabled } from '../telemetry/events.js'
import { buildPluginCommandTelemetryFields } from '../telemetry/pluginTelemetry.js'
import { getAssistantMessageContentLength } from '../tokens.js'
import { createAgentId } from '../uuid.js'
import { getWorkload } from '../workloadContext.js'
import type { ProcessUserInputBaseResult, ProcessUserInputContext } from './processUserInput.js'

type SlashCommandResult = ProcessUserInputBaseResult & {
  command: Command
}

// Poll interval and deadline for MCP settle before launching a background
// forked subagent. MCP servers typically connect within 1-3s of startup;
// 10s headroom covers slow SSE handshakes.
const MCP_SETTLE_POLL_MS = 200
const MCP_SETTLE_TIMEOUT_MS = 10_000

/**
 * Executes a slash command with context: fork in a sub-agent.
 */
async function executeForkedSlashCommand(
  command: CommandBase & PromptCommand,
  args: string,
  context: ProcessUserInputContext,
  precedingInputBlocks: ContentBlockParam[],
  setToolJSX: SetToolJSXFn,
  canUseTool: CanUseToolFn,
): Promise<SlashCommandResult> {
  const agentId = createAgentId()
  const pluginMarketplace = command.pluginInfo
    ? parsePluginIdentifier(command.pluginInfo.repository).marketplace
    : undefined
  logEvent('tengu_slash_command_forked', {
    command_name: command.name as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    invocation_trigger: 'user-slash' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    ...(command.pluginInfo && {
      _PROTO_plugin_name: command.pluginInfo.pluginManifest.name as AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED,
      ...(pluginMarketplace && {
        _PROTO_marketplace_name: pluginMarketplace as AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED,
      }),
      ...buildPluginCommandTelemetryFields(command.pluginInfo),
    }),
  })

  const {
    skillContent,
    modifiedGetAppState,
    baseAgent,
    promptMessages,
  } = await prepareForkedCommandContext(command, args, context)

  // Merge skill's effort into the agent definition so runAgent applies it
  const agentDefinition =
    command.effort !== undefined
      ? { ...baseAgent, effort: command.effort }
      : baseAgent
  logForDebugging(
    `Executing forked slash command /${command.name} with agent ${agentDefinition.agentType}`,
  )

  // v112: KAIROS background fork logic removed entirely.
  // The minified dKY no longer contains the kairosEnabled branch.
  // All forked commands now run synchronously with progress UI.

  // Collect messages from the forked agent
  const agentMessages: Message[] = []

  // Build progress messages for the agent progress UI
  const progressMessages: ProgressMessage<AgentProgress>[] = []
  const parentToolUseID = `forked-command-${command.name}`
  let toolUseCounter = 0

  // Helper to create a progress message from an agent message
  const createProgressMessage = (
    message: AssistantMessage | NormalizedUserMessage,
  ): ProgressMessage<AgentProgress> => {
    toolUseCounter++
    return {
      type: 'progress',
      data: {
        message,
        type: 'agent_progress',
        prompt: skillContent,
        agentId,
      },
      parentToolUseID,
      toolUseID: `${parentToolUseID}-${toolUseCounter}`,
      timestamp: new Date().toISOString(),
      uuid: randomUUID(),
    }
  }

  // Helper to update progress display using agent progress UI
  const updateProgress = (): void => {
    setToolJSX({
      jsx: renderToolUseProgressMessage(progressMessages, {
        tools: context.options.tools,
        verbose: false,
      }),
      shouldHidePromptInput: false,
      shouldContinueAnimation: true,
      showSpinner: true,
    })
    // v112: emit tool progress for external consumers
    context.emitToolProgress?.({
      kind: 'agent_progress',
      toolUseId: parentToolUseID,
      progressMessages: [...progressMessages],
    })
  }

  // Show initial "Initializing…" state
  updateProgress()

  // Run the sub-agent
  try {
    for await (const message of runAgent({
      agentDefinition,
      promptMessages,
      toolUseContext: {
        ...context,
        getAppState: modifiedGetAppState,
      },
      canUseTool,
      isAsync: false,
      querySource: 'agent:custom',
      model: command.model as ModelAlias | undefined,
      availableTools: context.options.tools,
    })) {
      agentMessages.push(message)
      const normalizedNew = normalizeMessages([message])

      // Add progress message for assistant messages (which contain tool uses)
      if (message.type === 'assistant') {
        // Increment token count in spinner for assistant messages
        const contentLength = getAssistantMessageContentLength(message)
        if (contentLength > 0) {
          context.addResponseLength(len => len + contentLength)
        }
        const normalizedMsg = normalizedNew[0]
        if (normalizedMsg && normalizedMsg.type === 'assistant') {
          progressMessages.push(createProgressMessage(message))
          updateProgress()
        }
      }

      // Add progress message for user messages (which contain tool results)
      if (message.type === 'user') {
        const normalizedMsg = normalizedNew[0]
        if (normalizedMsg && normalizedMsg.type === 'user') {
          progressMessages.push(createProgressMessage(normalizedMsg))
          updateProgress()
        }
      }
    }
  } finally {
    // Clear the progress display
    setToolJSX(null)
    // v112: clear tool progress
    context.emitToolProgress?.({ kind: 'clear', toolUseId: parentToolUseID })
  }

  let resultText = extractResultText(agentMessages, 'Command completed')
  logForDebugging(
    `Forked slash command /${command.name} completed with agent ${agentId}`,
  )

  // Return the result as a user message (simulates the agent's output)
  const messages: UserMessage[] = [
    createUserMessage({
      content: prepareUserContent({
        inputString: `/${getCommandName(command)} ${args}`.trim(),
        precedingInputBlocks,
      }),
    }),
    createUserMessage({
      content: `<local-command-stdout>\n${resultText}\n</local-command-stdout>`,
    }),
  ]
  return {
    messages,
    shouldQuery: false,
    command,
    resultText,
  }
}

/**
 * Determines if a string looks like a valid command name.
 * Valid command names only contain letters, numbers, colons, hyphens, and underscores.
 *
 * @param commandName - The potential command name to check
 * @returns true if it looks like a command name, false if it contains non-command characters
 */
export function looksLikeCommand(commandName: string): boolean {
  // Command names should only contain [a-zA-Z0-9:_-]
  // If it contains other characters, it's probably a file path or other input
  return !/[^a-zA-Z0-9:\-_]/.test(commandName)
}

export async function processSlashCommand(
  inputString: string,
  precedingInputBlocks: ContentBlockParam[],
  imageContentBlocks: ContentBlockParam[],
  attachmentMessages: AttachmentMessage[],
  context: ProcessUserInputContext,
  setToolJSX: SetToolJSXFn,
  uuid?: string,
  isAlreadyProcessing?: boolean,
  canUseTool?: CanUseToolFn,
): Promise<ProcessUserInputBaseResult> {
  const parsed = parseSlashCommand(inputString)
  if (!parsed) {
    logEvent('tengu_input_slash_missing', {})
    const errorMessage = 'Commands are in the form `/command [args]`'
    return {
      messages: [
        createSyntheticUserCaveatMessage(),
        ...attachmentMessages,
        createUserMessage({
          content: prepareUserContent({
            inputString: errorMessage,
            precedingInputBlocks,
          }),
        }),
      ],
      shouldQuery: false,
      resultText: errorMessage,
    }
  }

  const { commandName, args: parsedArgs, isMcp } = parsed
  const sanitizedCommandName = isMcp
    ? 'mcp'
    : !builtInCommandNames().has(commandName)
      ? 'custom'
      : commandName

  // Check if it's a real command before processing
  if (!hasCommand(commandName, context.options.commands)) {
    // Check if this looks like a command name vs a file path or other input
    // Also check if it's an actual file path that exists
    let isFilePath = false
    try {
      await getFsImplementation().stat(`/${commandName}`)
      isFilePath = true
    } catch {
      // Not a file path — treat as command name
    }

    if (looksLikeCommand(commandName) && !isFilePath) {
      // v112: In non-interactive sessions, built-in commands that are unavailable
      // get a specific message instead of "Unknown skill".
      if (
        context.options.isNonInteractiveSession &&
        builtInCommandNames().has(commandName)
      ) {
        const msg = `/${commandName} isn't available in this environment.`
        logEvent('tengu_input_slash_invalid', {
          input: commandName,
          had_suggestion: false,
        })
        return {
          messages: [
            createCommandInputMessage(
              `/${commandName}${parsedArgs ? ` ${parsedArgs}` : ''}`,
            ),
            createCommandInputMessage(
              `<local-command-stdout>${msg}</local-command-stdout>`,
            ),
          ],
          shouldQuery: false,
          resultText: msg,
        }
      }

      // v112: Added fuzzy command suggestion (Yb6 / suggestCommand)
      const suggestion = suggestCommand(
        commandName,
        context.options.commands
          .filter(c => !c.isHidden)
          .map(c => ({ name: getCommandName(c), aliases: c.aliases })),
        { maxEditDistance: 2 },
      )

      logEvent('tengu_input_slash_invalid', {
        input: commandName,
        had_suggestion: Boolean(suggestion),
      })

      const unknownMessage = suggestion
        ? `Unknown command: /${commandName}. Did you mean /${suggestion}?`
        : `Unknown command: /${commandName}`
      return {
        messages: [
          createSyntheticUserCaveatMessage(),
          ...attachmentMessages,
          createUserMessage({
            content: prepareUserContent({
              inputString: unknownMessage,
              precedingInputBlocks,
            }),
          }),
          // gh-32591: preserve args so the user can copy/resubmit without
          // retyping. System warning is UI-only (filtered before API).
          ...(parsedArgs
            ? [
                createSystemMessage(
                  `Args from unknown skill: ${parsedArgs}`,
                  'warning',
                ),
              ]
            : []),
        ],
        shouldQuery: false,
        resultText: unknownMessage,
      }
    }

    const promptId = randomUUID()
    setPromptId(promptId)
    logEvent('tengu_input_prompt', {})
    // Log user prompt event for OTLP
    void logOTelEvent('user_prompt', {
      prompt_length: String(inputString.length),
      prompt: redactIfDisabled(inputString),
      'prompt.id': promptId,
    })
    return {
      messages: [
        createUserMessage({
          content: prepareUserContent({
            inputString,
            precedingInputBlocks,
          }),
          uuid: uuid,
        }),
        ...attachmentMessages,
      ],
      shouldQuery: true,
    }
  }

  // Track slash command usage for feature discovery
  const {
    messages: newMessages,
    shouldQuery: messageShouldQuery,
    allowedTools,
    model,
    effort,
    command: returnedCommand,
    resultText,
    nextInput,
    submitNextInput,
  } = await getMessagesForSlashCommand(
    commandName,
    parsedArgs,
    setToolJSX,
    context,
    precedingInputBlocks,
    imageContentBlocks,
    isAlreadyProcessing,
    canUseTool,
    uuid,
  )

  // Local slash commands that skip messages
  if (newMessages.length === 0) {
    const eventData: Record<string, boolean | number | undefined> = {
      input: sanitizedCommandName as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    }

    // Add plugin metadata if this is a plugin command
    if (returnedCommand.type === 'prompt' && returnedCommand.pluginInfo) {
      const { pluginManifest, repository } = returnedCommand.pluginInfo
      const { marketplace } = parsePluginIdentifier(repository)
      const isOfficial = isOfficialMarketplaceName(marketplace)
      // _PROTO_* routes to PII-tagged plugin_name/marketplace_name BQ columns
      // (unredacted, all users); plugin_name/plugin_repository stay in
      // additional_metadata as redacted variants for general-access dashboards.
      eventData._PROTO_plugin_name = pluginManifest.name as AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED
      if (marketplace) {
        eventData._PROTO_marketplace_name = marketplace as AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED
      }
      eventData.plugin_repository = (
        isOfficial ? repository : 'third-party'
      ) as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
      eventData.plugin_name = (
        isOfficial ? pluginManifest.name : 'third-party'
      ) as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
      if (isOfficial && pluginManifest.version) {
        eventData.plugin_version = pluginManifest.version as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
      }
      Object.assign(
        eventData,
        buildPluginCommandTelemetryFields(returnedCommand.pluginInfo),
      )
    }

    // v112: telemetry fields simplified — removed ant-only skill_* fields
    logEvent('tengu_input_command', {
      ...eventData,
      invocation_trigger: 'user-slash' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      ...false, // ant-only block removed in v112
    })

    return {
      messages: [],
      shouldQuery: false,
      model,
      nextInput,
      submitNextInput,
    }
  }

  // For invalid commands, preserve both the user message and error
  if (
    newMessages.length === 2 &&
    newMessages[1]!.type === 'user' &&
    typeof newMessages[1]!.message.content === 'string' &&
    newMessages[1]!.message.content.startsWith('Unknown command:')
  ) {
    // Don't log as invalid if it looks like a common file path
    const looksLikeFilePath =
      inputString.startsWith('/var') ||
      inputString.startsWith('/tmp') ||
      inputString.startsWith('/private')
    if (!looksLikeFilePath) {
      logEvent('tengu_input_slash_invalid', {
        input: commandName,
        had_suggestion: false,
      })
    }
    return {
      messages: [createSyntheticUserCaveatMessage(), ...newMessages],
      shouldQuery: messageShouldQuery,
      allowedTools,
      model,
    }
  }

  // A valid command
  const eventData: Record<string, boolean | number | undefined> = {
    input: sanitizedCommandName as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
  }

  // Add plugin metadata if this is a plugin command
  if (returnedCommand.type === 'prompt' && returnedCommand.pluginInfo) {
    const { pluginManifest, repository } = returnedCommand.pluginInfo
    const { marketplace } = parsePluginIdentifier(repository)
    const isOfficial = isOfficialMarketplaceName(marketplace)
    eventData._PROTO_plugin_name = pluginManifest.name as AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED
    if (marketplace) {
      eventData._PROTO_marketplace_name = marketplace as AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED
    }
    eventData.plugin_repository = (
      isOfficial ? repository : 'third-party'
    ) as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
    eventData.plugin_name = (
      isOfficial ? pluginManifest.name : 'third-party'
    ) as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
    if (isOfficial && pluginManifest.version) {
      eventData.plugin_version = pluginManifest.version as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
    }
    Object.assign(
      eventData,
      buildPluginCommandTelemetryFields(returnedCommand.pluginInfo),
    )
  }

  // v112: telemetry fields simplified — removed ant-only skill_* fields
  logEvent('tengu_input_command', {
    ...eventData,
    invocation_trigger: 'user-slash' as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    ...false, // ant-only block removed in v112
  })

  // Check if this is a compact result which handle their own synthetic caveat message ordering
  const isCompactResult =
    newMessages.length > 0 &&
    newMessages[0] &&
    isCompactBoundaryMessage(newMessages[0])
  return {
    messages:
      messageShouldQuery ||
      newMessages.every(isSystemLocalCommandMessage) ||
      isCompactResult
        ? newMessages
        : [createSyntheticUserCaveatMessage(), ...newMessages],
    shouldQuery: messageShouldQuery,
    allowedTools,
    model,
    effort,
    resultText,
    nextInput,
    submitNextInput,
  }
}

async function getMessagesForSlashCommand(
  commandName: string,
  args: string,
  setToolJSX: SetToolJSXFn,
  context: ProcessUserInputContext,
  precedingInputBlocks: ContentBlockParam[],
  imageContentBlocks: ContentBlockParam[],
  _isAlreadyProcessing?: boolean,
  canUseTool?: CanUseToolFn,
  uuid?: string,
): Promise<SlashCommandResult> {
  const command = getCommand(commandName, context.options.commands)

  // Track skill usage for ranking (only for prompt commands that are user-invocable)
  if (command.type === 'prompt' && command.userInvocable !== false) {
    recordSkillUsage(commandName)
  }

  // Check if the command is user-invocable
  // Skills with userInvocable === false can only be invoked by the model via SkillTool
  if (command.userInvocable === false) {
    return {
      messages: [
        createUserMessage({
          content: prepareUserContent({
            inputString: `/${commandName}`,
            precedingInputBlocks,
          }),
        }),
        createUserMessage({
          content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${commandName}" skill for you.`,
        }),
      ],
      shouldQuery: false,
      command,
    }
  }

  // v112: local-jsx commands are blocked in non-interactive sessions
  if (command.type === 'local-jsx' && context.options.isNonInteractiveSession) {
    const msg = `/${getCommandName(command)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`
    return {
      messages: [
        createCommandInputMessage(formatCommandInput(command, args)),
        createCommandInputMessage(
          `<local-command-stdout>${msg}</local-command-stdout>`,
        ),
      ],
      shouldQuery: false,
      command,
      resultText: msg,
    }
  }

  try {
    switch (command.type) {
      case 'local-jsx': {
        return new Promise<SlashCommandResult>(resolve => {
          let doneWasCalled = false
          const onDone = (
            result?: string,
            options?: {
              display?: CommandResultDisplay
              shouldQuery?: boolean
              metaMessages?: string[]
              nextInput?: string
              submitNextInput?: boolean
            },
          ) => {
            doneWasCalled = true
            // If display is 'skip', don't add any messages to the conversation
            if (options?.display === 'skip') {
              void resolve({
                messages: [],
                shouldQuery: false,
                command,
                nextInput: options?.nextInput,
                submitNextInput: options?.submitNextInput,
              })
              return
            }

            // Meta messages are model-visible but hidden from the user
            const metaMessages = (options?.metaMessages ?? []).map(
              (content: string) =>
                createUserMessage({
                  content,
                  isMeta: true,
                }),
            )

            // v112: fullscreen check uses isFullscreenEnvEnabled (lq)
            const skipTranscript =
              isFullscreenEnvEnabled() &&
              typeof result === 'string' &&
              result.endsWith(' dismissed')
            void resolve({
              messages:
                options?.display === 'system'
                  ? skipTranscript
                    ? metaMessages
                    : [
                        createCommandInputMessage(
                          formatCommandInput(command, args),
                        ),
                        createCommandInputMessage(
                          `<local-command-stdout>${result}</local-command-stdout>`,
                        ),
                        ...metaMessages,
                      ]
                  : [
                      createUserMessage({
                        content: prepareUserContent({
                          inputString: formatCommandInput(command, args),
                          precedingInputBlocks,
                        }),
                      }),
                      result
                        ? createUserMessage({
                            content: `<local-command-stdout>${result}</local-command-stdout>`,
                          })
                        : createUserMessage({
                            content: `<local-command-stdout>${NO_CONTENT_MESSAGE}</local-command-stdout>`,
                          }),
                      ...metaMessages,
                    ],
              shouldQuery: options?.shouldQuery ?? false,
              command,
              nextInput: options?.nextInput,
              submitNextInput: options?.submitNextInput,
            })
          }

          void command
            .load()
            .then(mod =>
              mod.call(onDone, { ...context, canUseTool }, args),
            )
            .then(jsx => {
              if (jsx == null) return
              // v112: non-interactive guard moved earlier (above), but keep
              // the early return here for safety.
              if (context.options.isNonInteractiveSession) {
                void resolve({
                  messages: [],
                  shouldQuery: false,
                  command,
                })
                return
              }
              // Guard: if onDone fired during mod.call() (early-exit path
              // that calls onDone then returns JSX), skip setToolJSX. This
              // chain is fire-and-forget — the outer Promise resolves when
              // onDone is called, so executeUserInput may have already run
              // its setToolJSX({clearLocalJSX: true}) before we get here.
              // Setting isLocalJSXCommand after clear leaves it stuck true,
              // blocking useQueueProcessor and TextInput focus.
              if (doneWasCalled) return
              setToolJSX({
                jsx,
                shouldHidePromptInput: true,
                showSpinner: false,
                isLocalJSXCommand: true,
                isImmediate: command.immediate === true,
              })
            })
            .catch(e => {
              // If load()/call() throws and onDone never fired, the outer
              // Promise hangs forever, leaving queryGuard stuck in
              // 'dispatching' and deadlocking the queue processor.
              logError(e)
              if (doneWasCalled) return
              doneWasCalled = true
              setToolJSX({
                jsx: null,
                shouldHidePromptInput: false,
                clearLocalJSX: true,
              })
              void resolve({
                messages: [],
                shouldQuery: false,
                command,
              })
            })
        })
      }
      case 'local': {
        const displayArgs =
          command.isSensitive && args.trim() ? '***' : args
        const userMessage = createUserMessage({
          content: prepareUserContent({
            inputString: formatCommandInput(command, displayArgs),
            precedingInputBlocks,
          }),
        })
        try {
          // v112: synthetic caveat message creation
          const syntheticCaveatMessage = createSyntheticUserCaveatMessage()
          const mod = await command.load()
          const result = await mod.call(args, context)
          if (result.type === 'skip') {
            return {
              messages: [],
              shouldQuery: false,
              command,
            }
          }

          // Use discriminated union to handle different result types
          if (result.type === 'compact') {
            // Append slash command messages to messagesToKeep so that
            // attachments and hookResults come after user messages
            const slashCommandMessages = [
              syntheticCaveatMessage,
              userMessage,
              ...(result.displayText
                ? [
                    createUserMessage({
                      content: `<local-command-stdout>${result.displayText}</local-command-stdout>`,
                      // --resume looks at latest timestamp message to determine which message to resume from
                      // This is a perf optimization to avoid having to recaculcate the leaf node every time
                      // Since we're creating a bunch of synthetic messages for compact, it's important to set
                      // the timestamp of the last message to be slightly after the current time
                      // This is mostly important for sdk / -p mode
                      timestamp: new Date(Date.now() + 100).toISOString(),
                    }),
                  ]
                : []),
            ]
            const compactionResultWithSlashMessages = {
              ...result.compactionResult,
              messagesToKeep: [
                ...(result.compactionResult.messagesToKeep ?? []),
                ...slashCommandMessages,
              ],
            }
            // Reset microcompact state since full compact replaces all
            // messages — old tool IDs are no longer relevant. Budget state
            // (on toolUseContext) needs no reset: stale entries are inert
            // (UUIDs never repeat, so they're never looked up).
            resetMicrocompactState()
            return {
              messages: buildPostCompactMessages(
                compactionResultWithSlashMessages,
              ),
              shouldQuery: false,
              command,
            }
          }

          // Text result — use system message so it doesn't render as a user bubble
          return {
            messages: [
              userMessage,
              createCommandInputMessage(
                `<local-command-stdout>${result.value}</local-command-stdout>`,
              ),
            ],
            shouldQuery: false,
            command,
            resultText: result.value,
          }
        } catch (e) {
          logError(e)
          return {
            messages: [
              userMessage,
              createCommandInputMessage(
                `<local-command-stderr>${String(e)}</local-command-stderr>`,
              ),
            ],
            shouldQuery: false,
            command,
          }
        }
      }
      case 'prompt': {
        try {
          // Check if command should run as forked sub-agent
          if (command.context === 'fork') {
            return await executeForkedSlashCommand(
              command,
              args,
              context,
              precedingInputBlocks,
              setToolJSX,
              canUseTool ?? hasPermissionsToUseTool,
            )
          }
          return await getMessagesForPromptSlashCommand(
            command,
            args,
            context,
            precedingInputBlocks,
            imageContentBlocks,
            uuid,
          )
        } catch (e) {
          // Handle abort errors specially to show proper "Interrupted" message
          if (e instanceof AbortError) {
            return {
              messages: [
                createUserMessage({
                  content: prepareUserContent({
                    inputString: formatCommandInput(command, args),
                    precedingInputBlocks,
                  }),
                }),
                createUserInterruptionMessage({
                  toolUse: false,
                }),
              ],
              shouldQuery: false,
              command,
            }
          }
          return {
            messages: [
              createUserMessage({
                content: prepareUserContent({
                  inputString: formatCommandInput(command, args),
                  precedingInputBlocks,
                }),
              }),
              createUserMessage({
                content: `<local-command-stderr>${String(e)}</local-command-stderr>`,
              }),
            ],
            shouldQuery: false,
            command,
          }
        }
      }
    }
  } catch (e) {
    if (e instanceof MalformedCommandError) {
      return {
        messages: [
          createUserMessage({
            content: prepareUserContent({
              inputString: e.message,
              precedingInputBlocks,
            }),
          }),
        ],
        shouldQuery: false,
        command,
      }
    }
    throw e
  }
}

function formatCommandInput(command: CommandBase, args: string): string {
  return formatCommandInputTags(getCommandName(command), args)
}

/**
 * Formats the metadata for a skill loading message.
 * Used by the Skill tool and for subagent skill preloading.
 */
export function formatSkillLoadingMetadata(
  skillName: string,
  _progressMessage: string = 'loading',
): string {
  // Use skill name only - UserCommandMessage renders as "Skill(name)"
  return [
    `<${COMMAND_MESSAGE_TAG}>${skillName}</${COMMAND_MESSAGE_TAG}>`,
    `<${COMMAND_NAME_TAG}>${skillName}</${COMMAND_NAME_TAG}>`,
    `<skill-format>true</skill-format>`,
  ].join('\n')
}

/**
 * Formats the metadata for a slash command loading message.
 */
function formatSlashCommandLoadingMetadata(
  commandName: string,
  args?: string,
): string {
  return [
    `<${COMMAND_MESSAGE_TAG}>${commandName}</${COMMAND_MESSAGE_TAG}>`,
    `<${COMMAND_NAME_TAG}>/${commandName}</${COMMAND_NAME_TAG}>`,
    args ? `<command-args>${args}</command-args>` : null,
  ]
    .filter(Boolean)
    .join('\n')
}

/**
 * Formats the loading metadata for a command (skill or slash command).
 * User-invocable skills use slash command format (/name), while model-only
 * skills use the skill format ("The X skill is running").
 */
function formatCommandLoadingMetadata(
  command: CommandBase & PromptCommand,
  args?: string,
): string {
  // Use command.name (the qualified name including plugin prefix, e.g.
  // "product-management:feature-spec") instead of userFacingName() which may
  // strip the plugin prefix via displayName fallback.
  // User-invocable skills should show as /command-name like regular slash commands
  if (command.userInvocable !== false) {
    return formatSlashCommandLoadingMetadata(command.name, args)
  }
  // Model-only skills (userInvocable: false) show as "The X skill is running"
  if (
    command.loadedFrom === 'skills' ||
    command.loadedFrom === 'plugin' ||
    command.loadedFrom === 'mcp'
  ) {
    return formatSkillLoadingMetadata(command.name, command.progressMessage)
  }
  return formatSlashCommandLoadingMetadata(command.name, args)
}

export async function processPromptSlashCommand(
  commandName: string,
  args: string,
  commands: Command[],
  context: ToolUseContext,
  imageContentBlocks: ContentBlockParam[] = [],
): Promise<SlashCommandResult> {
  const command = findCommand(commandName, commands)
  if (!command) {
    throw new MalformedCommandError(`Unknown command: ${commandName}`)
  }
  if (command.type !== 'prompt') {
    throw new Error(
      `Unexpected ${command.type} command. Expected 'prompt' command. Use /${commandName} directly in the main conversation.`,
    )
  }
  return getMessagesForPromptSlashCommand(
    command,
    args,
    context,
    [],
    imageContentBlocks,
  )
}

async function getMessagesForPromptSlashCommand(
  command: CommandBase & PromptCommand,
  args: string,
  context: ToolUseContext,
  precedingInputBlocks: ContentBlockParam[] = [],
  imageContentBlocks: ContentBlockParam[] = [],
  uuid?: string,
): Promise<SlashCommandResult> {
  // v112: COORDINATOR_MODE block removed entirely.
  // The minified MJK no longer contains the coordinator mode gate.

  const result = await command.getPromptForCommand(args, context)

  // Register skill hooks if defined. Under ["hooks"]-only (skills not locked),
  // user skills still load and reach this point — block hook REGISTRATION here
  // where source is known. Mirrors the agent frontmatter gate in runAgent.ts.
  const hooksAllowedForThisSkill =
    !isRestrictedToPluginOnly('hooks') ||
    isSourceAdminTrusted(command.source)
  if (command.hooks && hooksAllowedForThisSkill) {
    const sessionId = getSessionId()
    registerSkillHooks(
      context.setAppState,
      sessionId,
      command.hooks,
      command.name,
      command.type === 'prompt' ? command.skillRoot : undefined,
    )
  }

  // Record skill invocation for compaction preservation, scoped by agent context.
  // Skills are tagged with their agentId so only skills belonging to the current
  // agent are restored during compaction (preventing cross-agent leaks).
  const skillPath = command.source
    ? `${command.source}:${command.name}`
    : command.name
  const skillContent = result
    .filter((b): b is TextBlockParam => b.type === 'text')
    .map(b => b.text)
    .join('\n\n')
  addInvokedSkill(
    command.name,
    skillPath,
    skillContent,
    getAgentContext()?.agentId ?? null,
  )

  const metadata = formatCommandLoadingMetadata(command, args)
  const additionalAllowedTools = parseToolListFromCLI(
    command.allowedTools ?? [],
  )

  // Create content for the main message, including any pasted images
  const mainMessageContent: ContentBlockParam[] =
    imageContentBlocks.length > 0 || precedingInputBlocks.length > 0
      ? [...imageContentBlocks, ...precedingInputBlocks, ...result]
      : result

  // Extract attachments from command arguments (@-mentions, MCP resources,
  // agent mentions in SKILL.md). skipSkillDiscovery prevents the SKILL.md
  // content itself from triggering discovery — it's meta-content, not user
  // intent, and a large SKILL.md (e.g. 110KB) would fire chunked AKI queries
  // adding seconds of latency to every skill invocation.
  // v112: getAttachmentMessages no longer takes querySource; planSlugSeed removed.
  const attachmentMessages = await toArray(
    getAttachmentMessages(
      result
        .filter((block): block is TextBlockParam => block.type === 'text')
        .map(block => block.text)
        .join(' '),
      context,
      null,
      [],
      // queuedCommands - handled by query.ts for mid-turn attachments
      context.messages,
      'repl_main_thread',
      {
        skipSkillDiscovery: true,
      },
    ),
  )

  const messages = [
    createUserMessage({
      content: metadata,
      uuid,
    }),
    createUserMessage({
      content: mainMessageContent,
      isMeta: true,
    }),
    ...attachmentMessages,
    createAttachmentMessage({
      type: 'command_permissions',
      allowedTools: additionalAllowedTools,
      model: command.model,
    }),
  ]

  return {
    messages,
    shouldQuery: true,
    allowedTools: additionalAllowedTools,
    model: command.model,
    effort: command.effort,
    command,
  }
}

// TODO(lift): unresolved cross-chunk symbols from v112 minified bundle
// - Yb6 / suggestCommand at byte ~8548529
// - lq / isFullscreenEnvEnabled (already imported, verify alias)
