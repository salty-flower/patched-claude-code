// In its own file to avoid circular dependencies
export const FILE_EDIT_TOOL_NAME = 'Edit'

// Permission pattern for granting session-level access to the project's .claude/ folder
export const CLAUDE_FOLDER_PERMISSION_PATTERN = '/.claude/**'

// Permission pattern for granting session-level access to the global ~/.claude/ folder
export const GLOBAL_CLAUDE_FOLDER_PERMISSION_PATTERN = '~/.claude/**'

// v112: error message text changed — "has not been read yet" replaces v88's "unexpectedly modified"
export const FILE_NOT_READ_ERROR =
  'File has not been read yet. Read it first before writing to it.'

// v112: new error for content changed since last read (e.g. linter rewrote the file)
export const FILE_CONTENT_CHANGED_ERROR =
  'File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.'

// v88 compat alias (used in FileEditTool.ts and FileWriteTool.ts)
export const FILE_UNEXPECTEDLY_MODIFIED_ERROR = FILE_NOT_READ_ERROR
