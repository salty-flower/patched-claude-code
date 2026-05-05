import type { Message, UserMessage } from '../types/message.js'

// jac=1, cos=1 — verbatim match
export function isHumanTurn(m: Message): m is UserMessage {
  return m.type === 'user' && !m.isMeta && m.toolUseResult === undefined
}
