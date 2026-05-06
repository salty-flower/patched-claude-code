import type { LocalJSXCommandOnDone } from '../../types/command.js';
import { switchToClaudeDesktop } from '../../utils/desktopSwitch.js';
export async function call(onDone: LocalJSXCommandOnDone): Promise<undefined> {
  onDone('Session transferred to Claude Desktop', {
    display: 'system'
  });
  await switchToClaudeDesktop(0, 'other');
}
