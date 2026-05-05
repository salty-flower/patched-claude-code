import { getFeatureValue_CACHED_MAY_BE_STALE } from '../../services/analytics/growthbook.js'
import type { Tool } from '../../Tool.js'

export { TOOL_SEARCH_TOOL_NAME } from './constants.js'

import { TOOL_SEARCH_TOOL_NAME } from './constants.js'

// v112: BRIEF_TOOL_NAME and SEND_USER_FILE_TOOL_NAME are now imported from their
// respective modules via a lazy init block (Kc). FORK_SUBAGENT gate is gone.
// A new ScheduleWakeup gate replaces the SendUserFile gate (T04).
// The KAIROS/KAIROS_BRIEF feature() checks are replaced with a module-level
// lazy reference — BRIEF_TOOL_NAME is still never deferred; SCHEDULE_WAKEUP is
// also not deferred when its loop is in dynamic mode.
//
// v112 lazy-init names:
//   v04 → BRIEF_TOOL_NAME (from BriefTool/prompt.js)
//   T04 → SCHEDULE_WAKEUP_TOOL_NAME (from ScheduleWakeupTool — new in v112)
// These are populated by the module init block (Kc).

// TODO(lift): v04 — BRIEF_TOOL_NAME lazy ref at byte ~4955060
let _BRIEF_TOOL_NAME_V112: string | null = null
// TODO(lift): T04 — SCHEDULE_WAKEUP_TOOL_NAME lazy ref at byte ~4955283
let _SCHEDULE_WAKEUP_TOOL_NAME_V112: string | null = null

/**
 * Called by module init to populate lazy tool name references.
 * @internal
 */
export function _initToolNameRefs_V112(
  briefToolName: string | null,
  scheduleWakeupToolName: string | null,
): void {
  _BRIEF_TOOL_NAME_V112 = briefToolName
  _SCHEDULE_WAKEUP_TOOL_NAME_V112 = scheduleWakeupToolName
}

const PROMPT_HEAD = `Fetches full schema definitions for deferred tools so they can be called.

`

// v112: getToolLocationHint still checks tengu_glacier_2xr flag but the
// USER_TYPE === 'ant' branch was dropped; now purely flag-driven.
function getToolLocationHint(): string {
  const deltaEnabled = getFeatureValue_CACHED_MAY_BE_STALE(
    'tengu_glacier_2xr',
    false,
  )
  return deltaEnabled
    ? 'Deferred tools appear by name in <system-reminder> messages.'
    : 'Deferred tools appear by name in <available-deferred-tools> messages.'
}

const PROMPT_TAIL = ` Until fetched, only the name is known — there is no parameter schema, so the tool cannot be invoked. This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block — the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" — fetch these exact tools by name
- "notebook jupyter" — keyword search, up to max_results best matches
- "+slack send" — require "slack" in the name, rank by remaining terms`

/**
 * Check if a tool should be deferred (requires ToolSearch to load).
 *
 * v112 changes vs v88:
 * - FORK_SUBAGENT gate removed entirely.
 * - KAIROS/KAIROS_BRIEF/isReplBridgeActive gates removed.
 * - BRIEF_TOOL_NAME still never deferred (via lazy module ref v04).
 * - New: SCHEDULE_WAKEUP_TOOL_NAME not deferred when its loop is in
 *   dynamic mode (isLoopDynamicEnabled check via T04 ref).
 */
export function isDeferredTool(tool: Tool): boolean {
  // Explicit opt-out — tool appears in initial prompt with full schema.
  if (tool.alwaysLoad === true) return false

  // MCP tools are always deferred (workflow-specific)
  if (tool.isMcp === true) return true

  // Never defer ToolSearch itself
  if (tool.name === TOOL_SEARCH_TOOL_NAME) return false

  // Brief is the primary communication channel — must be immediately available.
  if (_BRIEF_TOOL_NAME_V112 && tool.name === _BRIEF_TOOL_NAME_V112) return false

  // ScheduleWakeup (new in v112): not deferred when loop is in dynamic mode.
  // TODO(lift): T04 isLoopDynamicEnabled check at byte ~4955283 — the minified
  // guard is `(cR8(),B7(dR8)).isLoopDynamicEnabled()`. When true, tool is NOT
  // deferred. When false, falls through to shouldDefer check below.
  if (
    _SCHEDULE_WAKEUP_TOOL_NAME_V112 &&
    tool.name === _SCHEDULE_WAKEUP_TOOL_NAME_V112
  ) {
    // TODO(lift): cR8 / dR8 / isLoopDynamicEnabled — schedule wakeup loop
    // dynamic mode check at byte ~4955200. Stub returns false (always deferred
    // when schedule wakeup module hasn't been resolved).
    const isLoopDynamic = false // TODO(lift): wire to actual isLoopDynamicEnabled()
    if (isLoopDynamic) return false
  }

  return tool.shouldDefer === true
}

/**
 * Format one deferred-tool line for the <available-deferred-tools> user message.
 */
export function formatDeferredToolLine(tool: Tool): string {
  return tool.name
}

export function getPrompt(): string {
  return PROMPT_HEAD + getToolLocationHint() + PROMPT_TAIL
}
