import React from 'react'
import { jsonParse } from '../../utils/slowOperations.js'
import type { Output } from './TeamDeleteTool.js'

// jac=1, cos=1 — verbatim from v88
export function renderToolUseMessage(
  _input: Record<string, unknown>,
): React.ReactNode {
  return 'cleanup team: current'
}

// jac=1, cos=1 — verbatim from v88
export function renderToolResultMessage(
  content: Output | string,
  _progressMessages: unknown,
  { verbose: _verbose }: { verbose: boolean },
): React.ReactNode {
  const result: Output =
    typeof content === 'string' ? jsonParse(content) : content

  // Suppress cleanup result - the batched shutdown message covers this
  if ('success' in result && 'team_name' in result && 'message' in result) {
    return null
  }
  return null
}
