/**
 * Prompts for team memory operations.
 */

export const TEAM_MEM_SYSTEM_PROMPT = `You are a team memory assistant. Help the team capture and retrieve important context.`

export function formatTeamMemQuery(query: string): string {
  return `Search team memories for: ${query}`
}
