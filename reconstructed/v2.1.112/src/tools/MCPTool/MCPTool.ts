import { z } from 'zod/v4'
import { buildTool, type ToolDef } from '../../Tool.js'
import { lazySchema } from '../../utils/lazySchema.js'
import type { PermissionResult } from '../../utils/permissions/PermissionResult.js'
import { isOutputLineTruncated } from '../../utils/terminal.js'
import { DESCRIPTION, PROMPT } from './prompt.js'
import {
  renderToolResultMessage,
  renderToolUseMessage,
  renderToolUseProgressMessage,
} from './UI.js'

// Allow any input object since MCP tools define their own schemas
export const inputSchema = lazySchema(() => z.object({}).passthrough())
type InputSchema = ReturnType<typeof inputSchema>

export const outputSchema = lazySchema(() =>
  z.string().describe('MCP tool execution result'),
)
type OutputSchema = ReturnType<typeof outputSchema>

export type Output = z.infer<OutputSchema>

// Re-export MCPProgress from centralized types to break import cycles
export type { MCPProgress } from '../../types/tools.js'

export const MCPTool = buildTool({
  isMcp: true,
  // Overridden in mcpClient.ts with the real MCP tool name + args
  isOpenWorld() {
    return false
  },
  // Overridden in mcpClient.ts
  name: 'mcp',
  maxResultSizeChars: 100_000,
  // Overridden in mcpClient.ts
  async description() {
    return DESCRIPTION
  },
  // Overridden in mcpClient.ts
  async prompt() {
    return PROMPT
  },
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  // Overridden in mcpClient.ts
  async call() {
    return {
      data: '',
    }
  },
  async checkPermissions(): Promise<PermissionResult> {
    return {
      behavior: 'passthrough',
      message: 'MCPTool requires permission.',
    }
  },
  renderToolUseMessage,
  // Overridden in mcpClient.ts
  userFacingName: () => 'mcp',
  renderToolUseProgressMessage,
  renderToolResultMessage,
  // v112: isResultTruncated now handles both string and array content block results
  isResultTruncated(output: Output): boolean {
    // Cast to unknown since output may actually be a string or array of content blocks
    const content: unknown = output
    if (typeof content === 'string') return isOutputLineTruncated(content)
    if (Array.isArray(content)) {
      return content.some(
        (block: unknown) =>
          typeof block === 'object' &&
          block !== null &&
          (block as Record<string, unknown>).type === 'text' &&
          isOutputLineTruncated((block as Record<string, unknown>).text as string),
      )
    }
    return false
  },
  mapToolResultToToolResultBlockParam(content, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result',
      // v112: wraps content through serializer (i38) before passing to API
      // i38 appears to handle both string and structured content block arrays
      // TODO(lift): i38 at byte ~9673900 — content serializer for MCP results
      content: serializeMcpContent_V112(content),
    }
  },
} satisfies ToolDef<InputSchema, Output>)

/**
 * v112: stub for i38() — content serializer for MCP tool results.
 * In v88, content was passed through directly. In v112, it goes through a
 * serializer that may convert content block arrays to the appropriate format.
 * TODO(lift): i38 at byte ~9673900
 */
function serializeMcpContent_V112(content: unknown): unknown {
  // TODO(lift): i38 at byte ~9673900 — MCP result content serializer
  return content
}
