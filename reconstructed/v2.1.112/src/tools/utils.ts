import type {
  AssistantMessage,
  AttachmentMessage,
  SystemMessage,
  UserMessage,
} from '../types/message.js'

// v112: jac=0.75, cos=0.995. The main decl drift (jac=0.75) is a sourcemap
// boundary artifact — the v112 decl [8282333,8283188] overlaps with
// RemoteAgentTask module init code. The actual utils.ts functions at
// [8541057,8541297] are both jac=1/cos=1 (verbatim).

/**
 * Tags user messages with a sourceToolUseID so they stay transient until the tool resolves.
 * This prevents the "is running" message from being duplicated in the UI.
 */
export function tagMessagesWithToolUseID(
  messages: (UserMessage | AttachmentMessage | SystemMessage)[],
  toolUseID: string | undefined,
): (UserMessage | AttachmentMessage | SystemMessage)[] {
  if (!toolUseID) {
    return messages
  }
  return messages.map(m => {
    if (m.type === 'user') {
      return { ...m, sourceToolUseID: toolUseID }
    }
    return m
  })
}

/**
 * Extracts the tool use ID from a parent message for a given tool name.
 */
export function getToolUseIDFromParentMessage(
  parentMessage: AssistantMessage,
  toolName: string,
): string | undefined {
  const toolUseBlock = parentMessage.message.content.find(
    block => block.type === 'tool_use' && block.name === toolName,
  )
  return toolUseBlock && toolUseBlock.type === 'tool_use'
    ? toolUseBlock.id
    : undefined
}
