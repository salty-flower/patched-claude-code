/**
 * Side Question ("/btw") feature - allows asking quick questions without
 * interrupting the main agent context.
 *
 * Uses runForkedAgent to leverage prompt caching from the parent context
 * while keeping the side question response separate from main conversation.
 */

import { formatAPIError } from '../services/api/errorUtils.js'
import type { NonNullableUsage } from '../services/api/logging.js'
import type { Message, SystemAPIErrorMessage } from '../types/message.js'
import { type CacheSafeParams, runForkedAgent } from './forkedAgent.js'
import { createUserMessage, extractTextContent } from './messages.js'

// Pattern to detect "/btw" at start of input (case-insensitive, word boundary)
const BTW_PATTERN = /^\/btw\b/gi

/**
 * Find positions of "/btw" keyword at the start of text for highlighting.
 * Similar to findThinkingTriggerPositions in thinking.ts.
 */
export function findBtwTriggerPositions(text: string): Array<{
  word: string
  start: number
  end: number
}> {
  const positions: Array<{ word: string; start: number; end: number }> = []
  const matches = text.matchAll(BTW_PATTERN)

  for (const match of matches) {
    if (match.index !== undefined) {
      positions.push({
        word: match[0],
        start: match.index,
        end: match.index + match[0].length,
      })
    }
  }

  return positions
}

export type SideQuestionResult = {
  response: string | null
  synthetic: boolean
  usage: NonNullableUsage
  aborted?: boolean
}

/**
 * Run a side question using a forked agent.
 * Shares the parent's prompt cache — no thinking override, no cache write.
 * All tools are blocked and we cap at 1 turn.
 */
export async function runSideQuestion({
  question,
  cacheSafeParams,
  parentController,
  onRetry,
  threadHistory = true,
}: {
  question: string
  cacheSafeParams: CacheSafeParams
  parentController?: AbortController
  onRetry?: (info: {
    retryAttempt: number
    maxRetries: number
    retryInMs: number
    status: number
  }) => void
  threadHistory?: boolean
}): Promise<SideQuestionResult> {
  // Wrap the question with instructions to answer without tools
  const wrappedQuestion = `<system-reminder>This is a side question from the user. You must answer this question directly in a single response.

IMPORTANT CONTEXT:
- You are a separate, lightweight agent spawned to answer this one question
- The main agent is NOT interrupted - it continues working independently in the background
- You share the conversation context but are a completely separate instance
- Do NOT reference being interrupted or what you were "previously doing" - that framing is incorrect

CRITICAL CONSTRAINTS:
- You have NO tools available - you cannot read files, run commands, search, or take any actions
- This is a one-off response - there will be no follow-up turns
- You can ONLY provide information based on what you already know from the conversation context
- NEVER say things like "Let me try...", "I'll now...", "Let me check...", or promise to take any action
- If you don't know the answer, say so - do not offer to look it up or investigate

Simply answer the question with the information you have.</system-reminder>

${question}`

  const abortController = parentController
    ? // TODO(lift): deriveAbortController at byte ~10074400
      parentController
    : new AbortController()

  const historyMessages = threadHistory
    ? // TODO(lift): sideQuestionHistory at byte ~10074400
      []
    : []

  try {
    const agentResult = await runForkedAgent({
      promptMessages: [
        ...historyMessages,
        createUserMessage({ content: wrappedQuestion }),
      ],
      // Do NOT override thinkingConfig — thinking is part of the API cache key,
      // and diverging from the main thread's config busts the prompt cache.
      // Adaptive thinking on a quick Q&A has negligible overhead.
      cacheSafeParams,
      canUseTool: async () => ({
        behavior: 'deny' as const,
        message: 'Side questions cannot use tools',
        decisionReason: { type: 'other' as const, reason: 'side_question' },
      }),
      querySource: 'side_question',
      forkLabel: 'side_question',
      maxTurns: 1, // Single turn only - no tool use loops
      // No future request shares this suffix; skip writing cache entries.
      skipCacheWrite: true,
      skipTranscript: true,
      overrides: {
        abortController,
      },
      onMessage: onRetry
        ? (msg) => {
            if (isRetryMessage(msg)) {
              onRetry({
                retryAttempt: msg.retryAttempt,
                maxRetries: msg.maxRetries,
                retryInMs: msg.retryInMs,
                status: msg.error.status,
              })
            }
          }
        : undefined,
    })

    const { response, synthetic } = extractSideQuestionResponse(
      agentResult.messages,
    )

    // TODO(lift): sideQuestionHistory store update at byte ~10074400

    return {
      response,
      synthetic,
      usage: agentResult.totalUsage,
    }
  } catch (e) {
    // TODO(lift): APIUserAbortError check at byte ~10074400
    if (abortController.signal.aborted) {
      return {
        response: null,
        synthetic: false,
        usage: { inputTokens: 0, outputTokens: 0 },
        aborted: true,
      }
    }
    throw e
  }
}

// TODO(lift): isRetryMessage type guard at byte ~10074400
function isRetryMessage(
  _msg: Message,
): _msg is {
  retryAttempt: number
  maxRetries: number
  retryInMs: number
  error: { status: number }
} {
  return false
}

/**
 * Extract a display string from forked agent messages.
 *
 * IMPORTANT: claude.ts yields one AssistantMessage PER CONTENT BLOCK, not one
 * per API response. With adaptive thinking enabled (inherited from the main
 * thread to preserve the cache key), a thinking response arrives as:
 *   messages[0] = assistant { content: [thinking_block] }
 *   messages[1] = assistant { content: [text_block] }
 *
 * The old code used `.find(m => m.type === 'assistant')` which grabbed the
 * first (thinking-only) message, found no text block, and returned null →
 * "No response received". Repos with large context (many skills, big CLAUDE.md)
 * trigger thinking more often, which is why this reproduced in the monorepo
 * but not here.
 *
 * Secondary failure modes also surfaced as "No response received":
 *   - Model attempts tool_use → content = [thinking, tool_use], no text.
 *     Rare — the system-reminder usually prevents this, but handled here.
 *   - API error exhausts retries → query yields system api_error + user
 *     interruption, no assistant message at all.
 */
function extractSideQuestionResponse(
  messages: Message[],
): { response: string | null; synthetic: boolean } {
  // Flatten all assistant content blocks across the per-block messages.
  const assistantBlocks = messages.flatMap(m =>
    m.type === 'assistant' ? m.message.content : [],
  )

  if (assistantBlocks.length > 0) {
    // Concatenate all text blocks (there's normally at most one, but be safe).
    const text = extractTextContent(assistantBlocks, '\n\n').trim()
    if (text) return { response: text, synthetic: false }

    // No text — check if the model tried to call a tool despite instructions.
    const toolUse = assistantBlocks.find(b => b.type === 'tool_use')
    if (toolUse) {
      const toolName = 'name' in toolUse ? toolUse.name : 'a tool'
      return {
        response: `(The model tried to call ${toolName} instead of answering directly. Try rephrasing or ask in the main conversation.)`,
        synthetic: true,
      }
    }
  }

  // No assistant content — likely API error exhausted retries. Surface the
  // first system api_error message so the user sees what happened.
  const apiErr = messages.find(
    (m): m is SystemAPIErrorMessage =>
      m.type === 'system' && 'subtype' in m && m.subtype === 'api_error',
  )
  if (apiErr) {
    return {
      response: `(API error: ${formatAPIError(apiErr.error)})`,
      synthetic: true,
    }
  }

  return { response: null, synthetic: false }
}
