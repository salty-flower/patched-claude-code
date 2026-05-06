// biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
import { useMemo } from 'react'
import type { Tools } from '../Tool.js'
import { mergeAndFilterTools } from '../utils/toolPool.js'

/**
 * React hook that assembles the full tool pool for the REPL.
 *
 * Combines initial tools (built-in + startup MCP from props) with
 * dynamically discovered MCP tools, applying deny rules and deduplication.
 * Any extra initialTools are merged on top.
 *
 * @param initialTools - Extra tools to include (built-in + startup MCP from props).
 *   These are merged with the assembled pool and take precedence in deduplication.
 * @param mcpTools - MCP tools discovered dynamically (from mcp state)
 */
export function useMergedTools(initialTools: Tools, mcpTools: Tools): Tools {
  return useMemo(() => {
    return mergeAndFilterTools(initialTools, mcpTools)
  }, [initialTools, mcpTools])
}
