// v112: jac=0.841, cos=0.999. The second v88 decl [9196846,9197502] has no v112
// match (boundary artifact from sourcemap slicing). Body is effectively identical
// to v88 — cos=0.999 confirms only whitespace-level drift.

export function getPrompt(): string {
  return `
# TeamDelete

Remove team and task directories when the swarm work is complete.

This operation:
- Removes the team directory (\`~/.claude/teams/{team-name}/\`)
- Removes the task directory (\`~/.claude/tasks/{team-name}/\`)
- Clears team context from the current session

**IMPORTANT**: TeamDelete will fail if the team still has active members. Gracefully terminate teammates first, then call TeamDelete after all teammates have shut down.

Use this when all teammates have finished their work and you want to clean up the team resources. The team name is automatically determined from the current session's team context.
`.trim()
}
