// v112: prompt updated to document the new `path` parameter for entering
// existing worktrees. The full prompt body is referenced via PvK() in v112_min.
// The v88 decl has no v112 match (region status: no-v112-match) — reconstructed
// from semantic analysis of the v112 tool changes.
export function getEnterWorktreeToolPrompt(): string {
  return `Use this tool ONLY when the user explicitly asks to work in a worktree. This tool creates an isolated git worktree (or enters an existing one) and switches the current session into it.

## When to Use

- The user explicitly says "worktree" (e.g., "start a worktree", "work in a worktree", "create a worktree", "use a worktree", "enter a worktree")

## When NOT to Use

- The user asks to create a branch, switch branches, or work on a different branch — use git commands instead
- The user asks to fix a bug or work on a feature — use normal git workflow unless they specifically mention worktrees
- Never use this tool unless the user explicitly mentions "worktree"

## Requirements

- Must be in a git repository, OR have WorktreeCreate/WorktreeRemove hooks configured in settings.json
- Must not already be in a worktree

## Behavior

- In a git repository: creates a new git worktree inside \`.claude/worktrees/\` with a new branch based on HEAD, or enters an existing worktree if \`path\` is provided
- Outside a git repository: delegates to WorktreeCreate/WorktreeRemove hooks for VCS-agnostic isolation
- Switches the session's working directory to the new or existing worktree
- Use ExitWorktree to leave the worktree mid-session (keep or remove). On session exit, if still in the worktree, the user will be prompted to keep or remove it

## Parameters

- \`name\` (optional): A name for a new worktree. If not provided, a random name is generated. Mutually exclusive with \`path\`.
- \`path\` (optional): Path to an existing worktree to switch into instead of creating a new one. Must appear in \`git worktree list\` for the current repo. Mutually exclusive with \`name\`.
`
}
