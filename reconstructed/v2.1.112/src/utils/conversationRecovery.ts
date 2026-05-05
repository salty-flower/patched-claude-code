import type { UUID } from 'crypto'
import { relative } from 'path'
import { getCwd } from 'src/utils/cwd.js'
import { addInvokedSkill } from '../bootstrap/state.js'
import { asSessionId } from '../types/ids.js'
import type {
  AttributionSnapshotMessage,
  ContextCollapseCommitEntry,
  ContextCollapseSnapshotEntry,
  LogOption,
  PersistedWorktreeSession,
  SerializedMessage,
} from '../types/logs.js'
import type {
  Message,
  NormalizedMessage,
  NormalizedUserMessage,
} from '../types/message.js'
import { PERMISSION_MODES } from '../types/permissions.js'
import { suppressNextSkillListing } from './attachments.js'
import {
  copyFileHistoryForResume,
  type FileHistorySnapshot,
} from './fileHistory.js'
import { logError } from './log.js'
import {
  createAssistantMessage,
  createUserMessage,
  filterOrphanedThinkingOnlyMessages,
  filterUnresolvedToolUses,
  filterWhitespaceOnlyAssistantMessages,
  isToolUseResultMessage,
  NO_RESPONSE_REQUESTED,
  normalizeMessages,
} from './messages.js'
import { copyPlanForResume } from './plans.js'
import { processSessionStartHooks } from './sessionStart.js'
import {
  buildConversationChain,
  checkResumeConsistency,
  getLastSessionLog,
  getSessionIdFromLog,
  isLiteLog,
  loadFullLog,
  loadMessageLogs,
  loadTranscriptFile,
  removeExtraFields,
} from './sessionStorage.js'
import type { ContentReplacementRecord } from './toolResultStorage.js'

/**
 * Transforms legacy attachment types to current types for backward compatibility.
 * v112: filters out unknown attachment types entirely (returns null) rather than
 * backfilling displayPath. The `Q1Y` set in v112_min gates the null-return path.
 */
function migrateLegacyAttachmentTypes(message: Message): Message | null {
  if (message.type !== 'attachment') {
    return message
  }

  const attachment = message.attachment as {
    type: string
    [key: string]: unknown
  }

  // v112: unknown types are dropped entirely
  // TODO(lift): Q1Y at byte ~8399643 — set of known attachment types
  // if (UNKNOWN_ATTACHMENT_TYPES.has(attachment.type)) return null

  // Transform legacy attachment types
  if (attachment.type === 'new_file') {
    return {
      ...message,
      attachment: {
        ...attachment,
        type: 'file',
        displayPath: relative(getCwd(), attachment.filename as string),
      },
    } as SerializedMessage
  }

  if (attachment.type === 'new_directory') {
    return {
      ...message,
      attachment: {
        ...attachment,
        type: 'directory',
        displayPath: relative(getCwd(), attachment.path as string),
      },
    } as SerializedMessage
  }

  return message
}

export type TeleportRemoteResponse = {
  log: Message[]
  branch?: string
}

export type TurnInterruptionState =
  | { kind: 'none' }
  | { kind: 'interrupted_prompt'; message: NormalizedUserMessage }

export type DeserializeResult = {
  messages: Message[]
  turnInterruptionState: TurnInterruptionState
}

/**
 * Deserializes messages from a log file into the format expected by the REPL.
 * Filters unresolved tool uses, orphaned thinking messages, and appends a
 * synthetic assistant sentinel when the last message is from the user.
 * @internal Exported for testing - use loadConversationForResume instead
 */
export function deserializeMessages(serializedMessages: Message[]): Message[] {
  return deserializeMessagesWithInterruptDetection(serializedMessages).messages
}

/**
 * Like deserializeMessages, but also detects whether the session was
 * interrupted mid-turn. Used by the SDK resume path to auto-continue
 * interrupted turns after a gateway-triggered restart.
 * @internal Exported for testing
 */
export function deserializeMessagesWithInterruptDetection(
  serializedMessages: Message[],
  deferredToolUseSize?: { size: number },
): DeserializeResult {
  try {
    // Transform legacy attachment types before processing
    const migratedMessages = serializedMessages
      .map(migrateLegacyAttachmentTypes)
      .filter((m): m is Message => m !== null)

    // Strip invalid permissionMode values from deserialized user messages.
    const validModes = new Set<string>(PERMISSION_MODES)
    for (const msg of migratedMessages) {
      if (
        msg.type === 'user' &&
        msg.permissionMode !== undefined &&
        !validModes.has(msg.permissionMode)
      ) {
        msg.permissionMode = undefined
      }
    }

    // Filter out unresolved tool uses and any synthetic messages that follow them
    const filteredToolUses = filterUnresolvedToolUses(
      migratedMessages,
    ) as NormalizedMessage[]

    // Filter out orphaned thinking-only assistant messages
    const filteredThinking = filterOrphanedThinkingOnlyMessages(
      filteredToolUses,
    ) as NormalizedMessage[]

    // Filter out assistant messages with only whitespace text content
    const filteredMessages = filterWhitespaceOnlyAssistantMessages(
      filteredThinking,
    ) as NormalizedMessage[]

    const internalState = detectTurnInterruption(filteredMessages)

    // Transform mid-turn interruptions into interrupted_prompt
    let turnInterruptionState: TurnInterruptionState
    if (internalState.kind === 'interrupted_turn') {
      const [continuationMessage] = normalizeMessages([
        createUserMessage({
          content: 'Continue from where you left off.',
          isMeta: true,
        }),
      ])
      filteredMessages.push(continuationMessage!)
      turnInterruptionState = {
        kind: 'interrupted_prompt',
        message: continuationMessage!,
      }
    } else {
      turnInterruptionState = internalState
    }

    // Append synthetic assistant sentinel after last user message
    const lastRelevantIdx = filteredMessages.findLastIndex(
      m => m.type !== 'system' && m.type !== 'progress',
    )
    if (
      lastRelevantIdx !== -1 &&
      filteredMessages[lastRelevantIdx]!.type === 'user'
    ) {
      filteredMessages.splice(
        lastRelevantIdx + 1,
        0,
        createAssistantMessage({
          content: NO_RESPONSE_REQUESTED,
        }) as NormalizedMessage,
      )
    }

    return { messages: filteredMessages, turnInterruptionState }
  } catch (error) {
    logError(error as Error)
    throw error
  }
}

/**
 * Internal 3-way result from detection, before transforming interrupted_turn
 * into interrupted_prompt with a synthetic continuation message.
 */
type InternalInterruptionState =
  | TurnInterruptionState
  | { kind: 'interrupted_turn' }

/**
 * Determines whether the conversation was interrupted mid-turn.
 */
function detectTurnInterruption(
  messages: NormalizedMessage[],
): InternalInterruptionState {
  if (messages.length === 0) {
    return { kind: 'none' }
  }

  const lastMessageIdx = messages.findLastIndex(
    m =>
      m.type !== 'system' &&
      m.type !== 'progress' &&
      !(m.type === 'assistant' && m.isApiErrorMessage),
  )
  const lastMessage =
    lastMessageIdx !== -1 ? messages[lastMessageIdx] : undefined

  if (!lastMessage) {
    return { kind: 'none' }
  }

  if (lastMessage.type === 'assistant') {
    return { kind: 'none' }
  }

  if (lastMessage.type === 'user') {
    if (lastMessage.isMeta || lastMessage.isCompactSummary) {
      return { kind: 'none' }
    }
    if (isToolUseResultMessage(lastMessage)) {
      if (isTerminalToolResult(lastMessage, messages, lastMessageIdx)) {
        return { kind: 'none' }
      }
      return { kind: 'interrupted_turn' }
    }
    return { kind: 'interrupted_prompt', message: lastMessage }
  }

  if (lastMessage.type === 'attachment') {
    return { kind: 'interrupted_turn' }
  }

  return { kind: 'none' }
}

/**
 * Is this tool_result the output of a tool that legitimately terminates a turn?
 * v112: BRIEF_TOOL_NAME / LEGACY_BRIEF_TOOL_NAME / SEND_USER_FILE_TOOL_NAME
 * constants are inlined or resolved differently; the minified shows F1Y, g1Y, U1Y.
 */
function isTerminalToolResult(
  result: NormalizedUserMessage,
  messages: NormalizedMessage[],
  resultIdx: number,
): boolean {
  const content = result.message.content
  if (!Array.isArray(content)) return false
  const block = content[0]
  if (block?.type !== 'tool_result') return false
  const toolUseId = block.tool_use_id

  for (let i = resultIdx - 1; i >= 0; i--) {
    const msg = messages[i]!
    if (msg.type !== 'assistant') continue
    for (const b of msg.message.content) {
      if (b.type === 'tool_use' && b.id === toolUseId) {
        // TODO(lift): F1Y, g1Y, U1Y at byte ~8401841 — brief tool name constants
        return false // stub — actual names unresolved
      }
    }
  }
  return false
}

/**
 * Restores skill state from invoked_skills attachments in messages.
 */
export function restoreSkillStateFromMessages(messages: Message[]): void {
  for (const message of messages) {
    if (message.type !== 'attachment') {
      continue
    }
    if (message.attachment.type === 'invoked_skills') {
      for (const skill of message.attachment.skills) {
        if (skill.name && skill.path && skill.content) {
          addInvokedSkill(skill.name, skill.path, skill.content, null)
        }
      }
    }
    if (message.attachment.type === 'skill_listing') {
      suppressNextSkillListing()
    }
  }
}

/**
 * Chain-walk a transcript jsonl by path.
 */
export async function loadMessagesFromJsonlPath(path: string): Promise<{
  messages: SerializedMessage[]
  sessionId: UUID | undefined
}> {
  const { messages: byUuid, leafUuids } = await loadTranscriptFile(path)
  let tip: (typeof byUuid extends Map<UUID, infer T> ? T : never) | null = null
  let tipTs = 0
  for (const m of byUuid.values()) {
    if (m.isSidechain || !leafUuids.has(m.uuid)) continue
    const ts = new Date(m.timestamp).getTime()
    if (ts > tipTs) {
      tipTs = ts
      tip = m
    }
  }
  if (!tip) return { messages: [], sessionId: undefined }
  const chain = buildConversationChain(byUuid, tip)
  return {
    messages: removeExtraFields(chain),
    sessionId: tip.sessionId as UUID | undefined,
  }
}

// TODO(lift): z77 at byte ~8403205 — deferred tool use resolver from fullPath

/**
 * Loads a conversation for resume from various sources.
 * v112 changes:
 *  - BG_SESSIONS live-session skip removed (skip set always empty)
 *  - copyFileHistoryForResume and copyPlanForResume no longer called
 *  - Returns `deferredToolUse` and `permissionMode` fields
 *  - checkResumeConsistency no longer called explicitly
 */
export async function loadConversationForResume(
  source: string | LogOption | undefined,
  sourceJsonlFile: string | undefined,
): Promise<{
  messages: Message[]
  turnInterruptionState: TurnInterruptionState
  fileHistorySnapshots?: FileHistorySnapshot[]
  attributionSnapshots?: AttributionSnapshotMessage[]
  contentReplacements?: ContentReplacementRecord[]
  contextCollapseCommits?: ContextCollapseCommitEntry[]
  contextCollapseSnapshot?: ContextCollapseSnapshotEntry
  sessionId: UUID | undefined
  agentName?: string
  agentColor?: string
  agentSetting?: string
  customTitle?: string
  tag?: string
  mode?: 'coordinator' | 'normal'
  worktreeSession?: PersistedWorktreeSession | null
  prNumber?: number
  prUrl?: string
  prRepository?: string
  fullPath?: string
  deferredToolUse?: unknown
  permissionMode?: string
} | null> {
  try {
    let log: LogOption | null = null
    let messages: Message[] | null = null
    let sessionId: UUID | undefined

    if (source === undefined) {
      // v112: live-session skip (BG_SESSIONS) removed — always empty skip set
      const logs = await loadMessageLogs()
      log = logs.find(l => {
        const id = getSessionIdFromLog(l)
        return !id // skip only has session IDs, but set is always empty in v112
      }) ?? null
    } else if (sourceJsonlFile) {
      const loaded = await loadMessagesFromJsonlPath(sourceJsonlFile)
      messages = loaded.messages
      sessionId = loaded.sessionId
    } else if (typeof source === 'string') {
      log = await getLastSessionLog(source as UUID)
      sessionId = source as UUID
    } else {
      log = source
    }

    if (!log && !messages) {
      return null
    }

    if (log) {
      if (isLiteLog(log)) {
        log = await loadFullLog(log)
      }

      if (!sessionId) {
        sessionId = getSessionIdFromLog(log) as UUID
      }

      // v112: copyPlanForResume and copyFileHistoryForResume no longer called

      messages = log.messages
      // v112: checkResumeConsistency no longer called
    }

    restoreSkillStateFromMessages(messages!)

    const deserialized = deserializeMessagesWithInterruptDetection(messages!)
    messages = deserialized.messages

    const hookMessages = await processSessionStartHooks('resume', { sessionId })
    messages.push(...hookMessages)

    // v112: deferredToolUse resolved from fullPath via z77
    const fullPath = log?.fullPath ?? sourceJsonlFile
    // TODO(lift): z77 at byte ~8403205 — deferred tool use lookup
    const deferredToolUse = undefined

    return {
      messages,
      turnInterruptionState: deserialized.turnInterruptionState,
      fileHistorySnapshots: log?.fileHistorySnapshots,
      attributionSnapshots: log?.attributionSnapshots,
      contentReplacements: log?.contentReplacements,
      contextCollapseCommits: log?.contextCollapseCommits,
      contextCollapseSnapshot: log?.contextCollapseSnapshot,
      sessionId,
      agentName: log?.agentName,
      agentColor: log?.agentColor,
      agentSetting: log?.agentSetting,
      customTitle: log?.customTitle,
      tag: log?.tag,
      mode: log?.mode,
      worktreeSession: log?.worktreeSession,
      prNumber: log?.prNumber,
      prUrl: log?.prUrl,
      prRepository: log?.prRepository,
      fullPath,
      deferredToolUse,
      permissionMode: log?.permissionMode,
    }
  } catch (error) {
    logError(error as Error)
    throw error
  }
}
