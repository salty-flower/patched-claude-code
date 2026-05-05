import type { ContentBlockParam } from '@anthropic-ai/sdk/resources';
import * as React from 'react';
import { BashModeProgress } from 'src/components/BashModeProgress.js';
import type { SetToolJSXFn } from 'src/Tool.js';
import { BashTool } from 'src/tools/BashTool/BashTool.js';
import type { AttachmentMessage, SystemMessage, UserMessage } from 'src/types/message.js';
import type { ShellProgress } from 'src/types/tools.js';
import { logEvent } from '../../services/analytics/index.js';
import { errorMessage, ShellError } from '../errors.js';
import { createSyntheticUserCaveatMessage, createUserInterruptionMessage, createUserMessage, prepareUserContent } from '../messages.js';
import { resolveDefaultShell } from '../shell/resolveDefaultShell.js';
import { isPowerShellToolEnabled } from '../shell/shellToolUtils.js';
import { processToolResultBlock } from '../toolResultStorage.js';
import { escapeXml } from '../xml.js';
import type { ProcessUserInputContext } from './processUserInput.js';

// v112: signature reduced to 4 params; attachmentMessages removed from args
// and is now accessed via context. Progress reporting moved to emitToolProgress.
export async function processBashCommand(
  inputString: string,
  precedingInputBlocks: ContentBlockParam[],
  context: ProcessUserInputContext,
  setToolJSX: SetToolJSXFn,
): Promise<{
  messages: (UserMessage | AttachmentMessage | SystemMessage)[];
  shouldQuery: boolean;
}> {
  // Shell routing (docs/design/ps-shell-selection.md §5.2): consult
  // defaultShell, fall back to bash. isPowerShellToolEnabled() applies the
  // same platform + env-var gate as tools.ts so input-box routing matches
  // tool-list visibility. Computed up front so telemetry records the
  // actual shell, not the raw setting.
  const usePowerShell = isPowerShellToolEnabled() && resolveDefaultShell() === 'powershell';
  logEvent('tengu_input_bash', {
    powershell: usePowerShell
  });
  const userMessage = createUserMessage({
    content: prepareUserContent({
      inputString: `<bash-input>${inputString}</bash-input>`,
      precedingInputBlocks
    })
  });

  // v112: toolUseId generated up front for progress tracking
  const toolUseId = generateToolUseId();
  const { emitToolProgress } = context;

  // v112: emit initial progress event
  emitToolProgress?.({
    kind: 'bash_mode_progress',
    toolUseId,
    input: inputString,
    progress: null,
    verbose: context.options.verbose,
  });

  // Just show initial UI
  setToolJSX({
    jsx: <BashModeProgress input={inputString} progress={null} verbose={context.options.verbose} />,
    shouldHidePromptInput: false
  });

  try {
    // v112: bashModeContext now carries toolUseId for inner tracking
    const bashModeContext: ProcessUserInputContext = {
      ...context,
      toolUseId: `${toolUseId}:inner`,
      // TODO: Clean up this hack
      setToolJSX: _ => {
        // TODO(lift): _?.jsx pattern at byte ~12484250
      },
    };

    // Progress UI — shared across both shell backends (both emit ShellProgress)
    // v112: progress now flows through emitToolProgress instead of setToolJSX
    const onProgress = (progress: {
      data: ShellProgress;
    }) => {
      emitToolProgress?.({
        kind: 'bash_mode_progress',
        toolUseId,
        input: inputString,
        progress: progress.data,
        verbose: context.options.verbose,
      });
      setToolJSX({
        jsx: <>
            <BashModeProgress input={inputString!} progress={progress.data} verbose={context.options.verbose} />
            {/* TODO(lift): accumulated JSX from setToolJSX hack */}
          </>,
        shouldHidePromptInput: false,
        showSpinner: false
      });
    };

    // User-initiated `!` commands run outside sandbox. Both shell tools honor
    // dangerouslyDisableSandbox (checked against areUnsandboxedCommandsAllowed()
    // in shouldUseSandbox.ts). PS sandbox is Linux/macOS/WSL2 only — on Windows
    // native, shouldUseSandbox() returns false regardless (unsupported platform).
    // Lazy-require PowerShellTool so its ~300KB chunk only loads when the
    // user has actually selected the powershell default shell.
    type PSMod = typeof import('src/tools/PowerShellTool/PowerShellTool.js');
    let PowerShellTool: PSMod['PowerShellTool'] | null = null;
    if (usePowerShell) {
      /* eslint-disable @typescript-eslint/no-require-imports */
      PowerShellTool = (require('src/tools/PowerShellTool/PowerShellTool.js') as PSMod).PowerShellTool;
      /* eslint-enable @typescript-eslint/no-require-imports */
    }
    const shellTool = PowerShellTool ?? BashTool;
    const response = PowerShellTool ? await PowerShellTool.call({
      command: inputString,
      dangerouslyDisableSandbox: true
    }, bashModeContext, undefined, undefined, onProgress) : await BashTool.call({
      command: inputString,
      dangerouslyDisableSandbox: true
    }, bashModeContext, undefined, undefined, onProgress);
    const data = response.data;
    if (!data) {
      throw new Error('No result received from shell command');
    }
    const stderr = data.stderr;
    // Reuse the same formatting pipeline as inline !`cmd` bash (promptShellExecution)
    // and model-initiated Bash. When BashTool.call() persists large output to disk,
    // data.persistedOutputPath is set and the formatter wraps in <persisted-output>.
    // Pass stderr:'' to keep it separate for the <bash-stderr> UI tag.
    const mapped = await processToolResultBlock(shellTool, {
      ...data,
      stderr: ''
    }, generateToolUseId());
    // mapped.content may contain our own <persisted-output> wrapper (trusted
    // XML from buildLargeToolResultMessage). Escaping it would turn structural
    // tags into &lt;persisted-output&gt;, breaking the model's parse and
    // UserBashOutputMessage's extractTag. Escape the raw fallback only.
    const stdout = typeof mapped.content === 'string' ? mapped.content : escapeXml(data.stdout);
    // v112: attachmentMessages no longer spread into returned messages
    return {
      messages: [createSyntheticUserCaveatMessage(), userMessage, createUserMessage({
        content: `<bash-stdout>${stdout}</bash-stdout><bash-stderr>${escapeXml(stderr)}</bash-stderr>`
      })],
      shouldQuery: false
    };
  } catch (e) {
    if (e instanceof ShellError) {
      if (e.interrupted) {
        // v112: attachmentMessages removed from interruption path too
        return {
          messages: [createSyntheticUserCaveatMessage(), userMessage, createUserInterruptionMessage({
            toolUse: false
          })],
          shouldQuery: false
        };
      }
      return {
        messages: [createSyntheticUserCaveatMessage(), userMessage, createUserMessage({
          content: `<bash-stdout>${escapeXml(e.stdout)}</bash-stdout><bash-stderr>${escapeXml(e.stderr)}</bash-stderr>`
        })],
        shouldQuery: false
      };
    }
    return {
      messages: [createSyntheticUserCaveatMessage(), userMessage, createUserMessage({
        content: `<bash-stderr>Command failed: ${escapeXml(errorMessage(e))}</bash-stderr>`
      })],
      shouldQuery: false
    };
  } finally {
    // v112: clear via emitToolProgress instead of setToolJSX(null)
    emitToolProgress?.({
      kind: 'clear',
      toolUseId,
    });
    setToolJSX(null);
  }
}

// TODO(lift): generateToolUseId at byte ~12484124
function generateToolUseId(): string {
  // Minified: _z5() — likely randomUUID() or similar
  // Placeholder: actual implementation lives in another chunk
  throw new Error('generateToolUseId: unresolved cross-chunk symbol');
}
