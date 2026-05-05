import React from 'react'
import type { Input } from './TeamCreateTool.js'

// jac=1, cos=1 — verbatim from v88
export function renderToolUseMessage(input: Partial<Input>): React.ReactNode {
  return `create team: ${input.team_name}`
}
