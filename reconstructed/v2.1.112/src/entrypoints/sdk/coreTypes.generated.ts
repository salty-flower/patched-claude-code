import type { z } from 'zod/v4'
import type * as schemas from './coreSchemas.js'

type InferSchema<T extends () => z.ZodType> = z.infer<ReturnType<T>>

export type ModelUsage = InferSchema<typeof schemas.ModelUsageSchema>
export type OutputFormatType = InferSchema<
  typeof schemas.OutputFormatTypeSchema
>
export type BaseOutputFormat = InferSchema<typeof schemas.BaseOutputFormatSchema>
export type JsonSchemaOutputFormat = InferSchema<
  typeof schemas.JsonSchemaOutputFormatSchema
>
export type OutputFormat = InferSchema<typeof schemas.OutputFormatSchema>
export type ApiKeySource = InferSchema<typeof schemas.ApiKeySourceSchema>
export type ConfigScope = InferSchema<typeof schemas.ConfigScopeSchema>
export type SdkBeta = InferSchema<typeof schemas.SdkBetaSchema>
export type ThinkingAdaptive = InferSchema<typeof schemas.ThinkingAdaptiveSchema>
export type ThinkingEnabled = InferSchema<typeof schemas.ThinkingEnabledSchema>
export type ThinkingDisabled = InferSchema<typeof schemas.ThinkingDisabledSchema>
export type ThinkingConfig = InferSchema<typeof schemas.ThinkingConfigSchema>
export type McpStdioServerConfig = InferSchema<
  typeof schemas.McpStdioServerConfigSchema
>
export type McpSSEServerConfig = InferSchema<
  typeof schemas.McpSSEServerConfigSchema
>
export type McpHttpServerConfig = InferSchema<
  typeof schemas.McpHttpServerConfigSchema
>
export type McpSdkServerConfig = InferSchema<
  typeof schemas.McpSdkServerConfigSchema
>
export type McpServerConfigForProcessTransport = InferSchema<
  typeof schemas.McpServerConfigForProcessTransportSchema
>
export type McpClaudeAIProxyServerConfig = InferSchema<
  typeof schemas.McpClaudeAIProxyServerConfigSchema
>
export type McpServerStatusConfig = InferSchema<
  typeof schemas.McpServerStatusConfigSchema
>
export type McpServerStatus = InferSchema<typeof schemas.McpServerStatusSchema>
export type McpSetServersResult = InferSchema<
  typeof schemas.McpSetServersResultSchema
>
export type PermissionUpdateDestination = InferSchema<
  typeof schemas.PermissionUpdateDestinationSchema
>
export type PermissionBehavior = InferSchema<
  typeof schemas.PermissionBehaviorSchema
>
export type PermissionRuleValue = InferSchema<
  typeof schemas.PermissionRuleValueSchema
>
export type PermissionUpdate = InferSchema<
  typeof schemas.PermissionUpdateSchema
>
export type PermissionDecisionClassification = InferSchema<
  typeof schemas.PermissionDecisionClassificationSchema
>
export type PermissionResult = InferSchema<typeof schemas.PermissionResultSchema>
export type PermissionMode = InferSchema<typeof schemas.PermissionModeSchema>
export type HookEvent = InferSchema<typeof schemas.HookEventSchema>
export type BaseHookInput = InferSchema<typeof schemas.BaseHookInputSchema>
export type PreToolUseHookInput = InferSchema<
  typeof schemas.PreToolUseHookInputSchema
>
export type PermissionRequestHookInput = InferSchema<
  typeof schemas.PermissionRequestHookInputSchema
>
export type PostToolUseHookInput = InferSchema<
  typeof schemas.PostToolUseHookInputSchema
>
export type PostToolUseFailureHookInput = InferSchema<
  typeof schemas.PostToolUseFailureHookInputSchema
>
export type PermissionDeniedHookInput = InferSchema<
  typeof schemas.PermissionDeniedHookInputSchema
>
export type NotificationHookInput = InferSchema<
  typeof schemas.NotificationHookInputSchema
>
export type UserPromptSubmitHookInput = InferSchema<
  typeof schemas.UserPromptSubmitHookInputSchema
>
export type SessionStartHookInput = InferSchema<
  typeof schemas.SessionStartHookInputSchema
>
export type SetupHookInput = InferSchema<typeof schemas.SetupHookInputSchema>
export type StopHookInput = InferSchema<typeof schemas.StopHookInputSchema>
export type StopFailureHookInput = InferSchema<
  typeof schemas.StopFailureHookInputSchema
>
export type SubagentStartHookInput = InferSchema<
  typeof schemas.SubagentStartHookInputSchema
>
export type SubagentStopHookInput = InferSchema<
  typeof schemas.SubagentStopHookInputSchema
>
export type PreCompactHookInput = InferSchema<
  typeof schemas.PreCompactHookInputSchema
>
export type PostCompactHookInput = InferSchema<
  typeof schemas.PostCompactHookInputSchema
>
export type TeammateIdleHookInput = InferSchema<
  typeof schemas.TeammateIdleHookInputSchema
>
export type TaskCreatedHookInput = InferSchema<
  typeof schemas.TaskCreatedHookInputSchema
>
export type TaskCompletedHookInput = InferSchema<
  typeof schemas.TaskCompletedHookInputSchema
>
export type ElicitationHookInput = InferSchema<
  typeof schemas.ElicitationHookInputSchema
>
export type ElicitationResultHookInput = InferSchema<
  typeof schemas.ElicitationResultHookInputSchema
>
export type ConfigChangeHookInput = InferSchema<
  typeof schemas.ConfigChangeHookInputSchema
>
export type InstructionsLoadedHookInput = InferSchema<
  typeof schemas.InstructionsLoadedHookInputSchema
>
export type WorktreeCreateHookInput = InferSchema<
  typeof schemas.WorktreeCreateHookInputSchema
>
export type WorktreeRemoveHookInput = InferSchema<
  typeof schemas.WorktreeRemoveHookInputSchema
>
export type CwdChangedHookInput = InferSchema<
  typeof schemas.CwdChangedHookInputSchema
>
export type FileChangedHookInput = InferSchema<
  typeof schemas.FileChangedHookInputSchema
>
export type ExitReason = InferSchema<typeof schemas.ExitReasonSchema>
export type SessionEndHookInput = InferSchema<
  typeof schemas.SessionEndHookInputSchema
>
export type HookInput = InferSchema<typeof schemas.HookInputSchema>
export type AsyncHookJSONOutput = InferSchema<
  typeof schemas.AsyncHookJSONOutputSchema
>
export type HookJSONOutput = InferSchema<typeof schemas.HookJSONOutputSchema>
export type PromptRequestOption = InferSchema<
  typeof schemas.PromptRequestOptionSchema
>
export type PromptRequest = InferSchema<typeof schemas.PromptRequestSchema>
export type PromptResponse = InferSchema<typeof schemas.PromptResponseSchema>
export type SlashCommand = InferSchema<typeof schemas.SlashCommandSchema>
export type AgentInfo = InferSchema<typeof schemas.AgentInfoSchema>
export type ModelInfo = InferSchema<typeof schemas.ModelInfoSchema>
export type AccountInfo = InferSchema<typeof schemas.AccountInfoSchema>
export type AgentMcpServerSpec = InferSchema<
  typeof schemas.AgentMcpServerSpecSchema
>
export type AgentDefinition = InferSchema<typeof schemas.AgentDefinitionSchema>
export type SettingSource = InferSchema<typeof schemas.SettingSourceSchema>
export type SdkPluginConfig = InferSchema<
  typeof schemas.SdkPluginConfigSchema
>
export type RewindFilesResult = InferSchema<
  typeof schemas.RewindFilesResultSchema
>
export type APIUserMessage = InferSchema<typeof schemas.APIUserMessagePlaceholder>
export type APIAssistantMessage = InferSchema<
  typeof schemas.APIAssistantMessagePlaceholder
>
export type RawMessageStreamEvent = InferSchema<
  typeof schemas.RawMessageStreamEventPlaceholder
>
export type UUID = InferSchema<typeof schemas.UUIDPlaceholder>
export type SDKAssistantMessageError = InferSchema<
  typeof schemas.SDKAssistantMessageErrorSchema
>
export type SDKStatus = InferSchema<typeof schemas.SDKStatusSchema>
export type SDKUserMessage = InferSchema<typeof schemas.SDKUserMessageSchema>
export type SDKUserMessageReplay = InferSchema<
  typeof schemas.SDKUserMessageReplaySchema
>
export type SDKRateLimitInfo = InferSchema<
  typeof schemas.SDKRateLimitInfoSchema
>
export type SDKAssistantMessage = InferSchema<
  typeof schemas.SDKAssistantMessageSchema
>
export type SDKRateLimitEvent = InferSchema<
  typeof schemas.SDKRateLimitEventSchema
>
export type SDKStreamlinedTextMessage = InferSchema<
  typeof schemas.SDKStreamlinedTextMessageSchema
>
export type SDKStreamlinedToolUseSummaryMessage = InferSchema<
  typeof schemas.SDKStreamlinedToolUseSummaryMessageSchema
>
export type SDKPermissionDenial = InferSchema<
  typeof schemas.SDKPermissionDenialSchema
>
export type SDKResultSuccess = InferSchema<
  typeof schemas.SDKResultSuccessSchema
>
export type SDKResultError = InferSchema<typeof schemas.SDKResultErrorSchema>
export type SDKResultMessage = InferSchema<
  typeof schemas.SDKResultMessageSchema
>
export type SDKSystemMessage = InferSchema<typeof schemas.SDKSystemMessageSchema>
export type SDKPartialAssistantMessage = InferSchema<
  typeof schemas.SDKPartialAssistantMessageSchema
>
export type SDKCompactBoundaryMessage = InferSchema<
  typeof schemas.SDKCompactBoundaryMessageSchema
>
export type SDKStatusMessage = InferSchema<
  typeof schemas.SDKStatusMessageSchema
>
export type SDKPostTurnSummaryMessage = InferSchema<
  typeof schemas.SDKPostTurnSummaryMessageSchema
>
export type SDKAPIRetryMessage = InferSchema<
  typeof schemas.SDKAPIRetryMessageSchema
>
export type SDKLocalCommandOutputMessage = InferSchema<
  typeof schemas.SDKLocalCommandOutputMessageSchema
>
export type SDKHookStartedMessage = InferSchema<
  typeof schemas.SDKHookStartedMessageSchema
>
export type SDKHookProgressMessage = InferSchema<
  typeof schemas.SDKHookProgressMessageSchema
>
export type SDKHookResponseMessage = InferSchema<
  typeof schemas.SDKHookResponseMessageSchema
>
export type SDKToolProgressMessage = InferSchema<
  typeof schemas.SDKToolProgressMessageSchema
>
export type SDKAuthStatusMessage = InferSchema<
  typeof schemas.SDKAuthStatusMessageSchema
>
export type SDKFilesPersistedEvent = InferSchema<
  typeof schemas.SDKFilesPersistedEventSchema
>
export type SDKTaskNotificationMessage = InferSchema<
  typeof schemas.SDKTaskNotificationMessageSchema
>
export type SDKTaskStartedMessage = InferSchema<
  typeof schemas.SDKTaskStartedMessageSchema
>
export type SDKSessionStateChangedMessage = InferSchema<
  typeof schemas.SDKSessionStateChangedMessageSchema
>
export type SDKTaskProgressMessage = InferSchema<
  typeof schemas.SDKTaskProgressMessageSchema
>
export type SDKToolUseSummaryMessage = InferSchema<
  typeof schemas.SDKToolUseSummaryMessageSchema
>
export type SDKElicitationCompleteMessage = InferSchema<
  typeof schemas.SDKElicitationCompleteMessageSchema
>
export type SDKPromptSuggestionMessage = InferSchema<
  typeof schemas.SDKPromptSuggestionMessageSchema
>
export type SDKSessionInfo = InferSchema<typeof schemas.SDKSessionInfoSchema>
export type SDKMessage = InferSchema<typeof schemas.SDKMessageSchema>
export type FastModeState = InferSchema<typeof schemas.FastModeStateSchema>
