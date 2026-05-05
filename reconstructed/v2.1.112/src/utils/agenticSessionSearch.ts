import type { LogOption, SerializedMessage } from '../types/logs.js'
import { count } from './array.js'
import { logForDebugging } from './debug.js'
import { getLogDisplayTitle, logError } from './log.js'
import { getSmallFastModel } from './model/model.js'
import { isLiteLog, loadFullLog } from './sessionStorage.js'
import { sideQuery } from './sideQuery.js'
import { jsonParse } from './slowOperations.js'

// Limits for transcript extraction
// TODO(lift): FRK at byte ~11110145 — max chars for formatted transcript line
const MAX_TRANSCRIPT_LINE_CHARS = 2000 // FRK
// TODO(lift): UcK at byte ~11470770 — half of max messages to scan
const MAX_MESSAGES_HALF = 50 // UcK (half)
// TODO(lift): fQY at byte ~11096302 — threshold for messages array length check
const MAX_MESSAGES_TO_SCAN = 100 // fQY
// TODO(lift): QcK at byte ~11096632 — max combined metadata + transcript chars
const MAX_COMBINED_CHARS = 2000 // QcK

const SESSION_SEARCH_SYSTEM_PROMPT = `Your goal is to find relevant sessions based on a user's search query.

You will be given a list of sessions with their metadata and a search query. Identify which sessions are most relevant to the query.

Each session may include:
- Title (display name or custom title)
- Tag (user-assigned category, shown as [tag: name] - users tag sessions with /tag command to categorize them)
- Branch (git branch name, shown as [branch: name])
- Summary (AI-generated summary)
- First message (beginning of the conversation)
- Transcript (excerpt of conversation content)

IMPORTANT: Tags are user-assigned labels that indicate the session's topic or category. If the query matches a tag exactly or partially, those sessions should be highly prioritized.

For each session, consider (in order of priority):
1. Exact tag matches (highest priority - user explicitly categorized this session)
2. Partial tag matches or tag-related terms
3. Title matches (custom titles or first message content)
4. Branch name matches
5. Summary and transcript content matches
6. Semantic similarity and related concepts

CRITICAL: Be VERY inclusive in your matching. Include sessions that:
- Contain the query term anywhere in any field
- Are semantically related to the query (e.g., "testing" matches sessions about "tests", "unit tests", "QA", etc.)
- Discuss topics that could be related to the query
- Have transcripts that mention the concept even in passing

When in doubt, INCLUDE the session. It's better to return too many results than too few. The user can easily scan through results, but missing relevant sessions is frustrating.

Return sessions ordered by relevance (most relevant first). If truly no sessions have ANY connection to the query, return an empty array - but this should be rare.

Respond with ONLY the JSON object, no markdown formatting:
{"relevant_indices": [2, 5, 0]}`

type AgenticSearchResult = {
  relevant_indices: number[]
}

/**
 * Extracts searchable text content from a message.
 */
function extractMessageText(message: SerializedMessage): string {
  if (message.type !== 'user' && message.type !== 'assistant') {
    return ''
  }

  const content = 'message' in message ? message.message?.content : undefined
  if (!content) return ''

  if (typeof content === 'string') {
    return content
  }

  if (Array.isArray(content)) {
    return content
      .map(block => {
        if (typeof block === 'string') return block
        if ('text' in block && typeof block.text === 'string') return block.text
        return ''
      })
      .filter(Boolean)
      .join(' ')
  }

  return ''
}

/**
 * v112: Formats a transcript excerpt from a log, prefixed with "$ ".
 * Lines are individually trimmed/collapsed, then joined with newlines.
 * Truncated to MAX_TRANSCRIPT_LINE_CHARS.
 *
 * Replaces the v88 extractTranscript (which joined with spaces and had
 * its own slice logic) — v112 uses a newline-separated format.
 */
function formatTranscriptExcerpt(log: LogOption): string {
  const messages =
    log.messages.length <= MAX_MESSAGES_TO_SCAN
      ? log.messages
      : [
          ...log.messages.slice(0, MAX_MESSAGES_HALF),
          ...log.messages.slice(-MAX_MESSAGES_HALF),
        ]

  const text =
    '$ ' +
    messages
      .map(extractMessageText)
      .map(line => line.replace(/\s+/g, ' ').trim())
      .filter(line => line !== '')
      .join('\n')

  return text.length > MAX_TRANSCRIPT_LINE_CHARS
    ? text.slice(0, MAX_TRANSCRIPT_LINE_CHARS - 1) + '…'
    : text
}

/**
 * v112: Builds a combined searchable string from all log metadata + transcript.
 * Used as the single text blob for a log entry in the session list.
 * Replaces separate logContainsQuery + extractTranscript helpers.
 */
function buildLogSearchText(log: LogOption): string {
  const transcriptText =
    log.messages && log.messages.length > 0
      ? formatTranscriptExcerpt(log)
      : ''

  const combined = [
    log.customTitle,
    log.summary,
    log.firstPrompt,
    log.gitBranch,
    log.tag,
    log.prNumber ? `PR #${log.prNumber}` : undefined,
    (log as unknown as { prRepository?: string }).prRepository,
    transcriptText,
  ]
    .filter(Boolean)
    .join(' ')
    .trim()

  return combined.length > MAX_COMBINED_CHARS
    ? combined.slice(0, MAX_COMBINED_CHARS)
    : combined
}

/**
 * Performs an agentic search using Claude to find relevant sessions
 * based on semantic understanding of the query.
 *
 * v112: Simplified — no separate logContainsQuery pre-filter. The log
 * list is built directly and sent to the model.
 */
export async function agenticSessionSearch(
  query: string,
  logs: LogOption[],
  signal?: AbortSignal,
): Promise<LogOption[]> {
  if (!query.trim() || logs.length === 0) {
    return []
  }

  const queryLower = query.toLowerCase()

  // Load full logs for lite logs to get transcript content
  const logsWithTranscriptsPromises = logs.map(async log => {
    if (isLiteLog(log)) {
      try {
        return await loadFullLog(log)
      } catch (error) {
        logError(error as Error)
        return log
      }
    }
    return log
  })
  const logsWithTranscripts = await Promise.all(logsWithTranscriptsPromises)

  logForDebugging(
    `Agentic search: ${logsWithTranscripts.length}/${logs.length} logs, query="${query}", ` +
      `with messages: ${count(logsWithTranscripts, l => l.messages?.length > 0)}`,
  )

  // Build session list for the prompt with all searchable metadata
  const sessionList = logsWithTranscripts
    .map((log, index) => {
      const parts: string[] = [`${index}:`]

      // Title (display title, may be custom or from first prompt)
      const displayTitle = getLogDisplayTitle(log)
      parts.push(displayTitle)

      // Custom title if different from display title
      if (log.customTitle && log.customTitle !== displayTitle) {
        parts.push(`[custom title: ${log.customTitle}]`)
      }

      // Tag
      if (log.tag) {
        parts.push(`[tag: ${log.tag}]`)
      }

      // Git branch
      if (log.gitBranch) {
        parts.push(`[branch: ${log.gitBranch}]`)
      }

      // Summary
      if (log.summary) {
        parts.push(`- Summary: ${log.summary}`)
      }

      // First prompt content (truncated)
      if (log.firstPrompt && log.firstPrompt !== 'No prompt') {
        parts.push(`- First message: ${log.firstPrompt.slice(0, 300)}`)
      }

      // Transcript excerpt (if messages are available)
      if (log.messages && log.messages.length > 0) {
        const transcript = formatTranscriptExcerpt(log)
        if (transcript) {
          parts.push(`- Transcript: ${transcript}`)
        }
      }

      return parts.join(' ')
    })
    .join('\n')

  const userMessage = `Sessions:
${sessionList}

Search query: "${query}"

Find the sessions that are most relevant to this query.`

  logForDebugging(
    `Agentic search prompt (first 500 chars): ${userMessage.slice(0, 500)}...`,
  )

  // Suppress unused variable warning — queryLower kept for potential future use
  void queryLower

  try {
    const model = getSmallFastModel()
    logForDebugging(`Agentic search using model: ${model}`)

    const response = await sideQuery({
      model,
      system: SESSION_SEARCH_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
      signal,
      querySource: 'session_search',
    })

    // Extract the text content from the response
    const textContent = response.content.find(block => block.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      logForDebugging('No text content in agentic search response')
      return []
    }

    logForDebugging(`Agentic search response: ${textContent.text}`)

    // Parse the JSON response
    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      logForDebugging('Could not find JSON in agentic search response')
      return []
    }

    const result: AgenticSearchResult = jsonParse(jsonMatch[0])
    const relevantIndices = result.relevant_indices || []

    // Map indices back to logs
    const relevantLogs = relevantIndices
      .filter(index => index >= 0 && index < logsWithTranscripts.length)
      .map(index => logsWithTranscripts[index]!)

    logForDebugging(
      `Agentic search found ${relevantLogs.length} relevant sessions`,
    )

    return relevantLogs
  } catch (error) {
    logError(error as Error)
    logForDebugging(`Agentic search error: ${error}`)
    return []
  }
}
