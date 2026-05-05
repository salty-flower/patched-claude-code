/**
 * Classify an MCP tool as a search/read operation for UI collapsing, and
 * summarize collapse activity for display.
 *
 * Uses explicit per-tool allowlists for the most common MCP servers.
 * Tool names are stable across installs (even when the server name varies,
 * e.g., "slack" vs "claude_ai_Slack"), so matching is keyed on the tool
 * name alone after normalizing camelCase/kebab-case to snake_case.
 * Unknown tool names don't collapse (conservative).
 *
 * v112: classifyMcpToolForCollapse and SEARCH_TOOLS/READ_TOOLS were dropped
 * from this module. Only the normalize helper and a new summarize helper
 * survive. The large set-based classification appears to have moved or been
 * refactored. See v88 source for the full tool lists.
 */

// TODO(lift): SEARCH_TOOLS Set at byte ~9020480 — large set (~80 entries)
//   moved/removed; no v112 match in region.json. v88 SEARCH_TOOLS was
//   initialized in the module init thunk.
// TODO(lift): READ_TOOLS Set at byte ~9020480 — large set (~400 entries)
//   similarly dropped; no v112 match.
// TODO(lift): classifyMcpToolForCollapse at byte ~9838520 — the v88 export
//   was renamed/refactored in v112. v112 jac=0.5 match is a different fn.

// jac=1, cos=1 — normalize() matched verbatim at v112 offset 9020391–9020480.
// v112 uses a different normalize: slugify (lowercase + replace non-alnum with
// dash + trim dashes), not the camelCase→snake_case from v88.
/** Normalize a tool name to a canonical slug for comparison. */
function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// v112-only: summarizeMcpCollapseActivity — processes the last N consecutive
// search/read MCP results and produces a compact summary string.
// jac=0.5 decl at v112 offset 9838520–9838790 corresponds to v88's
// classifyMcpToolForCollapse slot but is a wholly new function.
// TODO(lift): OU8 at byte ~9838650 — formatMcpCollapseSummary(searchCount,
//   readCount, collapsed:bool) — produces the display string; unresolved.
/**
 * Summarize MCP activity for collapsed tool-use display.
 * Counts trailing consecutive search/read MCP calls and returns a summary
 * string. Returns undefined if there are fewer than 2 collapsible calls or
 * if an activityDescription from the last non-search/non-read call is
 * available.
 */
export function summarizeMcpCollapseActivity(
  results: Array<{
    isSearch: boolean
    isRead: boolean
    activityDescription?: string
  }>,
): string | undefined {
  if (results.length === 0) return undefined
  let searchCount = 0
  let readCount = 0
  for (let i = results.length - 1; i >= 0; i--) {
    const item = results[i]!
    if (item.isSearch) searchCount++
    else if (item.isRead) readCount++
    else break
  }
  if (searchCount + readCount >= 2) {
    // TODO(lift): OU8 at byte ~9838650 — formatMcpCollapseSummary
    return undefined as unknown as string // OU8(searchCount, readCount, true)
  }
  // Fallback: find the last result with an activityDescription
  for (let i = results.length - 1; i >= 0; i--) {
    if (results[i]?.activityDescription) return results[i]!.activityDescription
  }
  return undefined
}

export function classifyMcpToolForCollapse(
  _serverName: string,
  toolName: string,
): { isSearch: boolean; isRead: boolean } {
  const normalized = normalize(toolName)
  // TODO(lift): SEARCH_TOOLS/READ_TOOLS at byte ~9020480 — dropped from v112.
  //   Returning safe defaults (no collapse) until the replacement mechanism
  //   is located.
  return {
    isSearch: false, // SEARCH_TOOLS.has(normalized)
    isRead: false, // READ_TOOLS.has(normalized)
  }
}
