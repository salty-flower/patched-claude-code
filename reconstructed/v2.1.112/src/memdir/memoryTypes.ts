/**
 * Types for the memory directory system.
 */

export type MemoryEntry = {
  id: string
  content: string
  timestamp: number
  source: string
}

export type MemoryDirectory = {
  entries: MemoryEntry[]
  lastUpdated: number
}

export const MEMORY_TYPES = [
  'user',
  'feedback',
  'project',
  'reference',
] as const

export type MemoryType = (typeof MEMORY_TYPES)[number]

export function parseMemoryType(raw: unknown): MemoryType | undefined {
  if (typeof raw !== 'string') return undefined
  return MEMORY_TYPES.find(t => t === raw)
}

const USER_TYPE = [
  '<type>',
  '    <name>user</name>',
  "    <description>Contain information about the user's role, goals, responsibilities, and knowledge. Use these memories to tailor future behavior to the user's preferences and perspective.</description>",
  "    <when_to_save>When you learn details about the user's role, preferences, responsibilities, or knowledge.</when_to_save>",
  '</type>',
]

const FEEDBACK_TYPE = [
  '<type>',
  '    <name>feedback</name>',
  '    <description>Guidance the user has given about how to approach work, including what to avoid and what to keep doing.</description>',
  '    <when_to_save>When the user corrects your approach or confirms a non-obvious approach worked.</when_to_save>',
  '</type>',
]

const PROJECT_TYPE = [
  '<type>',
  '    <name>project</name>',
  '    <description>Information about ongoing work, goals, initiatives, bugs, incidents, or constraints not derivable from current project state.</description>',
  '    <when_to_save>When you learn who is doing what, why, or by when.</when_to_save>',
  '</type>',
]

const REFERENCE_TYPE = [
  '<type>',
  '    <name>reference</name>',
  '    <description>Pointers to where information can be found in external systems.</description>',
  '    <when_to_save>When you learn about resources in external systems and their purpose.</when_to_save>',
  '</type>',
]

export const TYPES_SECTION_COMBINED: readonly string[] = [
  '## Types of memory',
  '',
  'There are several discrete types of memory that you can store in your memory system. Choose private or team scope based on whether the information is personal to the user or useful to the whole project.',
  '',
  '<types>',
  ...USER_TYPE,
  ...FEEDBACK_TYPE,
  ...PROJECT_TYPE,
  ...REFERENCE_TYPE,
  '</types>',
  '',
]

export const TYPES_SECTION_INDIVIDUAL: readonly string[] = [
  '## Types of memory',
  '',
  'There are several discrete types of memory that you can store in your memory system:',
  '',
  '<types>',
  ...USER_TYPE,
  ...FEEDBACK_TYPE,
  ...PROJECT_TYPE,
  ...REFERENCE_TYPE,
  '</types>',
  '',
]

export const WHAT_NOT_TO_SAVE_SECTION: readonly string[] = [
  '## What NOT to save in memory',
  '',
  '- Code patterns, conventions, architecture, file paths, or project structure - these can be derived by reading the current project state.',
  '- Git history, recent changes, or who-changed-what - git commands are authoritative.',
  '- Debugging solutions or fix recipes - the fix is in the code and commit history.',
  '- Anything already documented in CLAUDE.md files.',
  '- Ephemeral task details, temporary state, or current conversation context.',
  '',
]

export const MEMORY_DRIFT_CAVEAT =
  '- Memory records can become stale over time. Use memory as context for what was true at a given point in time, and verify against current state before acting on it.'

export const WHEN_TO_ACCESS_SECTION: readonly string[] = [
  '## When to access memories',
  '- When memories seem relevant, or the user references prior-conversation work.',
  '- You MUST access memory when the user explicitly asks you to check, recall, or remember.',
  '- If the user says to ignore or not use memory, proceed as if MEMORY.md were empty.',
  MEMORY_DRIFT_CAVEAT,
]

export const TRUSTING_RECALL_SECTION: readonly string[] = [
  '## Before recommending from memory',
  '',
  'A memory that names a specific function, file, or flag is a claim that it existed when the memory was written. It may have been renamed, removed, or never merged. Verify before recommending it.',
  '',
]

export const MEMORY_FRONTMATTER_EXAMPLE: readonly string[] = [
  '```markdown',
  '---',
  'name: {{memory name}}',
  'description: {{one-line description used to decide relevance in future conversations}}',
  `type: {{${MEMORY_TYPES.join(', ')}}}`,
  '---',
  '',
  '{{memory content - for feedback/project types, structure as: rule/fact, then Why and How to apply lines}}',
  '```',
]
