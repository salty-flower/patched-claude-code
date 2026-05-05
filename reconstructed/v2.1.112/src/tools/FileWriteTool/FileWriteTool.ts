import { dirname, sep } from 'path'
import { logEvent } from 'src/services/analytics/index.js'
import { z } from 'zod/v4'
import { getFeatureValue_CACHED_MAY_BE_STALE } from '../../services/analytics/growthbook.js'
import { diagnosticTracker } from '../../services/diagnosticTracking.js'
import { clearDeliveredDiagnosticsForFile } from '../../services/lsp/LSPDiagnosticRegistry.js'
import { getLspServerManager } from '../../services/lsp/manager.js'
import { notifyVscodeFileUpdated } from '../../services/mcp/vscodeSdkMcp.js'
import { checkTeamMemSecrets } from '../../services/teamMemorySync/teamMemSecretGuard.js'
import {
  activateConditionalSkillsForPaths,
  addSkillDirectories,
  discoverSkillDirsForPaths,
} from '../../skills/loadSkillsDir.js'
import type { ToolUseContext } from '../../Tool.js'
import { buildTool, type ToolDef } from '../../Tool.js'
import { getCwd } from '../../utils/cwd.js'
import { logForDebugging } from '../../utils/debug.js'
import { countLinesChanged, getPatchForDisplay } from '../../utils/diff.js'
import { isEnvTruthy } from '../../utils/envUtils.js'
import { isENOENT } from '../../utils/errors.js'
import { getFileModificationTime, writeTextContent } from '../../utils/file.js'
import {
  fileHistoryEnabled,
  fileHistoryTrackEdit,
} from '../../utils/fileHistory.js'
import { logFileOperation } from '../../utils/fileOperationAnalytics.js'
import { readFileSyncWithMetadata } from '../../utils/fileRead.js'
import { getFsImplementation } from '../../utils/fsOperations.js'
import {
  fetchSingleFileGitDiff,
  type ToolUseDiff,
} from '../../utils/gitDiff.js'
import { hasBinaryFileMode } from '../../utils/permissions/filesystem.js' // TODO(lift): gf6 at byte ~8688900 — binary mode check
import { lazySchema } from '../../utils/lazySchema.js'
import { logError } from '../../utils/log.js'
import { expandPath } from '../../utils/path.js'
import {
  checkWritePermissionForTool,
  matchingRuleForInput,
} from '../../utils/permissions/filesystem.js'
import type { PermissionDecision } from '../../utils/permissions/PermissionResult.js'
import { matchWildcardPattern } from '../../utils/permissions/shellRuleMatching.js'
import { normalizeLineEndings } from '../../utils/lineEndings.js' // TODO(lift): XR8 at byte ~8691500 — normalize line endings before write
import { basename } from 'path'
import {
  FILE_CONTENT_CHANGED_ERROR,
  FILE_NOT_READ_ERROR,
} from '../FileEditTool/constants.js'
import { gitDiffSchema, hunkSchema } from '../FileEditTool/types.js'
import { FILE_WRITE_TOOL_NAME, getWriteToolDescription } from './prompt.js'
import {
  getToolUseSummary,
  isResultTruncated,
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseRejectedMessage,
  userFacingName,
} from './UI.js'

const inputSchema = lazySchema(() =>
  z.strictObject({
    file_path: z
      .string()
      .describe(
        'The absolute path to the file to write (must be absolute, not relative)',
      ),
    content: z.string().describe('The content to write to the file'),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

// v112: output schema adds `userModified` field
const outputSchema = lazySchema(() =>
  z.object({
    type: z
      .enum(['create', 'update'])
      .describe(
        'Whether a new file was created or an existing file was updated',
      ),
    filePath: z.string().describe('The path to the file that was written'),
    content: z.string().describe('The content that was written to the file'),
    structuredPatch: z
      .array(hunkSchema())
      .describe('Diff patch showing the changes'),
    originalFile: z
      .string()
      .nullable()
      .describe(
        'The original file content before the write (null for new files)',
      ),
    gitDiff: gitDiffSchema().optional(),
    // v112: new field — true when user edited proposed content in permission dialog
    userModified: z
      .boolean()
      .optional()
      .describe(
        'True when the user edited the proposed content in the permission dialog before accepting',
      ),
  }),
)
type OutputSchema = ReturnType<typeof outputSchema>

export type Output = z.infer<OutputSchema>
export type FileWriteToolInput = InputSchema

export const FileWriteTool = buildTool({
  name: FILE_WRITE_TOOL_NAME,
  searchHint: 'create or overwrite files',
  maxResultSizeChars: 100_000,
  strict: true,
  async description() {
    return 'Write a file to the local filesystem.'
  },
  userFacingName,
  getToolUseSummary,
  getActivityDescription(input) {
    const summary = getToolUseSummary(input)
    return summary ? `Writing ${summary}` : 'Writing file'
  },
  async prompt() {
    return getWriteToolDescription()
  },
  renderToolUseMessage,
  isResultTruncated,
  get inputSchema(): InputSchema {
    return inputSchema()
  },
  get outputSchema(): OutputSchema {
    return outputSchema()
  },
  // v112: new stripForStorage — strips content/originalFile from update results
  stripForStorage(data) {
    if (typeof data !== 'object' || data === null) return data
    const typed = data as Output
    if (typed.type !== 'update') return data
    if (typed.content === '' && (typed.originalFile ?? '') === '') return data
    return { ...typed, content: '', originalFile: null }
  },
  toAutoClassifierInput(input) {
    return `${input.file_path}: ${input.content}`
  },
  getPath(input): string {
    return input.file_path
  },
  // v112: new inputsEquivalent — trims trailing newlines before comparison
  inputsEquivalent(a, b) {
    if (a.file_path !== b.file_path) return false
    if (a.content === b.content) return true
    return (
      a.content.replace(/\n+$/, '') === b.content.replace(/\n+$/, '')
    )
  },
  backfillObservableInput(input) {
    // hooks.mdx documents file_path as absolute; expand so hook allowlists
    // can't be bypassed via ~ or relative paths.
    if (typeof input.file_path === 'string') {
      input.file_path = expandPath(input.file_path)
    }
  },
  async preparePermissionMatcher({ file_path }) {
    return pattern => matchWildcardPattern(pattern, file_path)
  },
  async checkPermissions(input, context): Promise<PermissionDecision> {
    const appState = context.getAppState()
    return checkWritePermissionForTool(
      FileWriteTool,
      input,
      appState.toolPermissionContext,
    )
  },
  renderToolUseRejectedMessage,
  renderToolUseErrorMessage,
  renderToolResultMessage,
  extractSearchText() {
    return ''
  },
  async validateInput({ file_path, content }, toolUseContext: ToolUseContext) {
    const fullFilePath = expandPath(file_path)

    // v112: new subagent report block — blocks subagents from writing .md report files
    if (
      getFeatureValue_CACHED_MAY_BE_STALE('tengu_sub_nomdrep_q7k', false) &&
      toolUseContext.agentId &&
      /^(REPORT|SUMMARY|FINDINGS|ANALYSIS).*\.md$/i.test(basename(fullFilePath))
    ) {
      logEvent('tengu_subagent_md_report_blocked', {
        contentBytes: Buffer.byteLength(content),
      } as any)
      return {
        result: false,
        message:
          'Subagents should return findings as text, not write report files. Include this content in your final response instead.',
        errorCode: 5,
      }
    }

    // Reject writes to team memory files that contain secrets
    const secretError = checkTeamMemSecrets(fullFilePath, content)
    if (secretError) {
      return { result: false, message: secretError, errorCode: 0 }
    }

    // Check if path should be ignored based on permission settings
    const appState = toolUseContext.getAppState()
    const denyRule = matchingRuleForInput(
      fullFilePath,
      appState.toolPermissionContext,
      'edit',
      'deny',
    )
    if (denyRule !== null) {
      return {
        result: false,
        message:
          'File is in a directory that is denied by your permission settings.',
        errorCode: 1,
      }
    }

    // SECURITY: Skip filesystem operations for UNC paths to prevent NTLM credential leaks.
    if (fullFilePath.startsWith('\\\\') || fullFilePath.startsWith('//')) {
      return { result: true }
    }

    const fs = getFsImplementation()
    let fileMtimeMs: number
    try {
      const fileStat = await fs.stat(fullFilePath)
      fileMtimeMs = fileStat.mtimeMs
      // v112: check for binary file mode (new check added)
      if (hasBinaryFileMode(fileStat.mode)) {
        return {
          result: false,
          message: 'Cannot write to binary files.',
          errorCode: 6,
        }
      }
    } catch (e) {
      if (isENOENT(e)) {
        return { result: true }
      }
      throw e
    }

    const readTimestamp = toolUseContext.readFileState.get(fullFilePath)
    if (!readTimestamp || readTimestamp.isPartialView) {
      return {
        result: false,
        message: FILE_NOT_READ_ERROR,
        errorCode: 2,
      }
    }

    if (Math.floor(fileMtimeMs) > readTimestamp.timestamp) {
      // v112: check if it's a full read and content matches (same as FileEditTool)
      const isFullRead =
        (readTimestamp.offset ?? 1) <= 1 && readTimestamp.limit === undefined
      let contentMatches = false
      if (isFullRead) {
        const currentBytes = await fs.readFileBytes(fullFilePath)
        const currentContent = currentBytes
          .toString('utf8')
          .replaceAll('\r\n', '\n')
        contentMatches = contentMatchesReadState(readTimestamp, currentContent)
      }
      if (!contentMatches) {
        return {
          result: false,
          message:
            'File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.',
          errorCode: 3,
        }
      }
    }

    return { result: true }
  },
  async call(
    { file_path, content },
    {
      readFileState,
      userModified,
      getFileHistoryState,
      applyFileHistoryOp,
      dynamicSkillDirTriggers,
    },
    _,
    parentMessage,
  ) {
    const fullFilePath = expandPath(file_path)
    const dir = dirname(fullFilePath)

    // Discover skills from this file's path (fire-and-forget, non-blocking)
    const cwd = getCwd()
    const newSkillDirs = await discoverSkillDirsForPaths([fullFilePath], cwd)
    if (newSkillDirs.length > 0) {
      for (const skillDir of newSkillDirs) {
        dynamicSkillDirTriggers?.add(skillDir)
      }
      addSkillDirectories(newSkillDirs).catch(() => {})
    }

    // Activate conditional skills whose path patterns match this file
    activateConditionalSkillsForPaths([fullFilePath], cwd)

    await diagnosticTracker.beforeFileEdited(fullFilePath)

    await getFsImplementation().mkdir(dir)

    // v112: uses getFileHistoryState/applyFileHistoryOp instead of updateFileHistoryState
    if (fileHistoryEnabled()) {
      await fileHistoryTrackEdit(
        getFileHistoryState,
        applyFileHistoryOp,
        fullFilePath,
        parentMessage.uuid,
      )
    }

    // Load current state and confirm no changes since last read.
    let meta: ReturnType<typeof readFileSyncWithMetadata> | null
    try {
      meta = readFileSyncWithMetadata(fullFilePath)
    } catch (e) {
      if (isENOENT(e)) {
        meta = null
      } else {
        throw e
      }
    }

    if (meta !== null) {
      const lastRead = readFileState.get(fullFilePath)
      if (!lastRead) throw new Error(FILE_NOT_READ_ERROR)
      if (getFileModificationTime(fullFilePath) > lastRead.timestamp) {
        // v112: content-based fallback check for full reads
        const isFullRead =
          (lastRead.offset ?? 1) <= 1 && lastRead.limit === undefined
        if (!(isFullRead && contentMatchesReadState(lastRead, meta.content))) {
          throw new Error(FILE_CONTENT_CHANGED_ERROR)
        }
      }
    }

    const enc = meta?.encoding ?? 'utf8'
    const oldContent = meta?.content ?? null

    // v112: normalize line endings before write via XR8 equivalent
    const normalizedContent = normalizeLineEndings_V112(fullFilePath, content)
    writeTextContent(fullFilePath, normalizedContent, enc, 'LF')

    // Notify LSP servers about file modification (didChange) and save (didSave)
    const lspManager = getLspServerManager()
    if (lspManager) {
      clearDeliveredDiagnosticsForFile(`file://${fullFilePath}`)
      // v112: calls kI8 (clearDeliveredDiagnosticsForFile) and NI8 before changeFile
      // (already handled above for kI8; NI8 is a separate notification)
      // TODO(lift): NI8 at byte ~8692500 — additional LSP notification call
      lspManager.changeFile(fullFilePath, normalizedContent).catch((err: Error) => {
        logForDebugging(
          `LSP: Failed to notify server of file change for ${fullFilePath}: ${err.message}`,
        )
        logError(err)
      })
      lspManager.saveFile(fullFilePath).catch((err: Error) => {
        logForDebugging(
          `LSP: Failed to notify server of file save for ${fullFilePath}: ${err.message}`,
        )
        logError(err)
      })
    }

    // Notify VSCode about the file change for diff view
    notifyVscodeFileUpdated(fullFilePath, oldContent, normalizedContent)

    // Update read timestamp, to invalidate stale writes
    readFileState.set(fullFilePath, {
      content: normalizedContent,
      timestamp: getFileModificationTime(fullFilePath),
      offset: undefined,
      limit: undefined,
    })

    // Log when writing to CLAUDE.md
    if (fullFilePath.endsWith(`${sep}CLAUDE.md`)) {
      logEvent('tengu_write_claudemd', {})
    }

    let gitDiff: ToolUseDiff | undefined
    if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
      const startTime = Date.now()
      const diff = await fetchSingleFileGitDiff(fullFilePath)
      if (diff) gitDiff = diff
      logEvent('tengu_tool_use_diff_computed', {
        isWriteTool: true,
        durationMs: Date.now() - startTime,
        hasDiff: !!diff,
      } as any)
    }

    if (oldContent) {
      const patch = getPatchForDisplay({
        filePath: file_path,
        fileContents: oldContent,
        edits: [
          {
            old_string: oldContent,
            new_string: normalizedContent,
            replace_all: false,
          },
        ],
      })

      const data = {
        type: 'update' as const,
        filePath: file_path,
        content: normalizedContent,
        structuredPatch: patch,
        originalFile: oldContent,
        userModified: userModified ?? false,
        ...(gitDiff && { gitDiff }),
      }
      countLinesChanged(patch)

      logFileOperation({
        operation: 'write',
        tool: 'FileWriteTool',
        filePath: fullFilePath,
        type: 'update',
      })

      return { data }
    }

    const data = {
      type: 'create' as const,
      filePath: file_path,
      content: normalizedContent,
      structuredPatch: [],
      originalFile: null,
      userModified: userModified ?? false,
      ...(gitDiff && { gitDiff }),
    }

    countLinesChanged([], normalizedContent)

    logFileOperation({
      operation: 'write',
      tool: 'FileWriteTool',
      filePath: fullFilePath,
      type: 'create',
    })

    return { data }
  },
  mapToolResultToToolResultBlockParam({ filePath, type, userModified }, toolUseID) {
    // v112: appends user-modified suffix and file-state-current note
    const userModifiedNote = userModified
      ? ' The user modified your proposed content before accepting it.'
      : ''
    // TODO(lift): ok8 / qN6 at byte ~8694000 — file-state-current note appended
    // when re-read-after-edit feature is enabled and user did NOT modify content.
    const fileStateSuffix = getFileStateCurrentSuffix_V112(userModified)
    switch (type) {
      case 'create':
        return {
          tool_use_id: toolUseID,
          type: 'tool_result',
          content: `File created successfully at: ${filePath}${userModifiedNote}${fileStateSuffix}`,
        }
      case 'update':
        return {
          tool_use_id: toolUseID,
          type: 'tool_result',
          content: `The file ${filePath} has been updated successfully.${userModifiedNote}${fileStateSuffix}`,
        }
    }
  },
} satisfies ToolDef<InputSchema, Output>)

/**
 * Check if a read state entry's content matches a given file content string.
 * Used to determine if a file was truly changed or just had its mtime bumped.
 */
function contentMatchesReadState(
  readState: { content?: string },
  currentContent: string,
): boolean {
  return readState.content === currentContent
}

/**
 * v112: stub for XR8() — normalize line endings before write.
 * In v112, the file content may be transformed before writing (e.g. CRLF normalization).
 * TODO(lift): XR8 at byte ~8691500 — line ending normalizer / content transformer
 */
function normalizeLineEndings_V112(
  _filePath: string,
  content: string,
): string {
  // TODO(lift): XR8 at byte ~8691500 — content normalizer before write
  return content
}

/**
 * v112: stub for file-state-current note appended to tool_result.
 * Returns ' (file state is current in your context — no need to Read it back)'
 * when the re-read-after-edit feature is enabled and user did not modify content.
 * TODO(lift): qN6/ok8 at byte ~8694000
 */
function getFileStateCurrentSuffix_V112(userModified?: boolean): string {
  // TODO(lift): qN6 at byte ~8694000 — isReReadAfterEditEnabled() gate
  return ''
}
