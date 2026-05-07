import type {
  CallToolResult,
  ToolAnnotations,
} from '@modelcontextprotocol/sdk/types.js'
import type { z } from 'zod/v4'
import type {
  McpSdkServerConfig,
  SDKMessage,
  SDKResultMessage,
  SDKSessionInfo,
} from './coreTypes.js'

export type EffortLevel = 'low' | 'medium' | 'high' | 'max'

export type AnyZodRawShape = z.ZodRawShape
export type InferShape<Schema extends AnyZodRawShape> = z.infer<
  z.ZodObject<Schema>
>

export type SdkMcpToolDefinition<
  Schema extends AnyZodRawShape = AnyZodRawShape,
> = {
  name: string
  description: string
  inputSchema: Schema
  handler: (
    args: InferShape<Schema>,
    extra: unknown,
  ) => Promise<CallToolResult>
  annotations?: ToolAnnotations
  searchHint?: string
  alwaysLoad?: boolean
}

export type McpSdkServerConfigWithInstance = McpSdkServerConfig & {
  version?: string
  tools?: Array<SdkMcpToolDefinition>
  instance?: unknown
}

export type Options = Record<string, unknown>

/** @internal */
export type InternalOptions = Options & {
  __internal?: true
}

export type Query = AsyncGenerator<SDKMessage, void>

/** @internal */
export type InternalQuery = AsyncGenerator<SDKMessage, void>

export type SDKSessionOptions = Options

export type SDKSession = AsyncIterable<SDKMessage> & {
  id?: string
  abort?: () => void
}

export type SessionMessage = SDKMessage

export type GetSessionMessagesOptions = {
  dir?: string
  limit?: number
  offset?: number
  includeSystemMessages?: boolean
}

export type ListSessionsOptions = {
  dir?: string
  limit?: number
  offset?: number
  includeWorktrees?: boolean
}

export type GetSessionInfoOptions = {
  dir?: string
}

export type SessionMutationOptions = {
  dir?: string
}

export type ForkSessionOptions = {
  dir?: string
  upToMessageId?: string
  title?: string
}

export type ForkSessionResult = {
  sessionId: string
}

export type SDKPromptResult = SDKResultMessage
export type SDKSessionList = SDKSessionInfo[]
