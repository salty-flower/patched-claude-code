import { isPDFSupported } from '../../utils/pdfUtils.js'
import { isReReadAfterEditEnabled, isSlateReefEnabled } from '../../utils/features.js' // TODO(lift): qN6/Iy_/by_ at byte ~3766100
import { BASH_TOOL_NAME } from '../BashTool/toolName.js'

// Use a string constant for tool names to avoid circular dependencies
export const FILE_READ_TOOL_NAME = 'Read'

// v112: new stub message for file unchanged (same text as v88)
export const FILE_UNCHANGED_STUB =
  'File unchanged since last read. The content from the earlier Read tool_result in this conversation is still current — refer to that instead of re-reading.'

// v112: new "wasted call" variant stub (added in v112)
export const FILE_UNCHANGED_STUB_WASTED =
  'Wasted call — file unchanged since your last Read. Refer to that earlier tool_result instead.'

// v112: inline note appended to write/edit tool_result when file is current (qN6 gate)
export const FILE_STATE_CURRENT_NOTE =
  ' (file state is current in your context — no need to Read it back)'

export const MAX_LINES_TO_READ = 2000

export const DESCRIPTION = 'Read a file from the local filesystem.'

export const LINE_FORMAT_INSTRUCTION =
  '- Results are returned using cat -n format, with line numbers starting at 1'

// v112: offset/limit description changed under tengu_slate_reef flag
export const OFFSET_INSTRUCTION_DEFAULT =
  '- You can optionally specify a line offset and limit (especially handy for long files), but it\'s recommended to read the whole file by not providing these parameters'

export const OFFSET_INSTRUCTION_TARGETED =
  '- When you already know which part of the file you need, only read that part. This can be important for larger files.'

// v112 note appended when re-read-after-edit feature is enabled
const RE_READ_AFTER_EDIT_NOTE =
  `\n- Do NOT re-read a file you just edited to verify — Edit/Write would have errored if the change failed, and the harness tracks file state for you.`

/**
 * Renders the Read tool prompt template.  The caller (FileReadTool) supplies
 * the runtime-computed parts.
 *
 * v112: appends re-read-after-edit note when qN6() feature is enabled,
 * and appends Iy_() suffix (TODO: unknown additional suffix at byte ~3767000).
 */
export function renderPromptTemplate(
  lineFormat: string,
  maxSizeInstruction: string,
  offsetInstruction: string,
): string {
  // v112: tengu_slate_reef flag changes offset/limit param descriptions inline
  // (handled by caller via OFFSET_INSTRUCTION_DEFAULT/TARGETED selection)
  return `Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${MAX_LINES_TO_READ} lines starting from the beginning of the file${maxSizeInstruction}
${offsetInstruction}
${lineFormat}
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${
    isPDFSupported()
      ? '\n- This tool can read PDF files (.pdf). For large PDFs (more than 10 pages), you MUST provide the pages parameter to read specific page ranges (e.g., pages: "1-5"). Reading a large PDF without the pages parameter will fail. Maximum 20 pages per request.'
      : ''
  }
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To read a directory, use an ls command via the ${BASH_TOOL_NAME} tool.
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.${isReReadAfterEditEnabled() ? RE_READ_AFTER_EDIT_NOTE : ''}${getAdditionalPromptSuffix()}`
}

// TODO(lift): Iy_() at byte ~3767000 — unknown additional prompt suffix function,
// returns '' or a string based on some flag. Stubbed as empty string.
function getAdditionalPromptSuffix(): string {
  return ''
}
