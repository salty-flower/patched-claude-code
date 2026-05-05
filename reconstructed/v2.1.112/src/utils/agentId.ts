/**
 * Deterministic Agent ID System
 *
 * This module provides helper functions for formatting and parsing deterministic
 * agent IDs used in the swarm/teammate system.
 *
 * ## ID Formats
 *
 * **Agent IDs**: `agentName@teamName`
 * - Example: `team-lead@my-project`, `researcher@my-project`
 * - The @ symbol acts as a separator between agent name and team name
 *
 * **Request IDs**: `{requestType}-{timestamp}@{agentId}`
 * - Example: `shutdown-1702500000000@researcher@my-project`
 * - Used for shutdown requests, plan approvals, etc.
 *
 * ## Why Deterministic IDs?
 *
 * Deterministic IDs provide several benefits:
 *
 * 1. **Reproducibility**: The same agent spawned with the same name in the same team
 *    always gets the same ID, enabling reconnection after crashes/restarts.
 *
 * 2. **Human-readable**: IDs are meaningful and debuggable (e.g., `tester@my-project`).
 *
 * 3. **Predictable**: Team leads can compute a teammate's ID without looking it up,
 *    simplifying message routing and task assignment.
 *
 * ## Constraints
 *
 * - Agent names must NOT contain `@` (it's used as the separator)
 * - Use `sanitizeAgentName()` from TeammateTool.ts to strip @ from names
 */

// v112: word list for agent name generation (new addition)
export const AGENT_NAME_WORDS = [
  'Baked',
  'Brewed',
  'Churned',
  'Cogitated',
  'Cooked',
  'Crunched',
  'Sautéed',
  'Worked',
]

// v112: formatAgentId removed (not present in v112_min)
// v112: generateRequestId removed (not present in v112_min)
// v112: parseRequestId removed (not present in v112_min)

/**
 * Parses an agent ID into its components.
 * Returns null if the ID doesn't contain the @ separator.
 */
export function parseAgentId(
  agentId: string,
): { agentName: string; teamName: string } | null {
  const atIndex = agentId.indexOf('@')
  if (atIndex === -1) {
    return null
  }
  return {
    agentName: agentId.slice(0, atIndex),
    teamName: agentId.slice(atIndex + 1),
  }
}
