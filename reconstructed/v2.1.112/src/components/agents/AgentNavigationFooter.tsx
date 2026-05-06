import * as React from 'react';
import { useExitOnCtrlCDWithKeybindings } from '../../hooks/useExitOnCtrlCDWithKeybindings.js';
import { Box, Text } from '../../ink.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';

type Props = {
  instructions?: React.ReactNode;
};

export function AgentNavigationFooter({
  instructions = (
    <>
      Press{' '}
      <KeyboardShortcutHint chord={['up', 'down']} format={{ arrowSep: '' }} action="navigate" />
      <KeyboardShortcutHint chord="enter" action="select" />
      <KeyboardShortcutHint chord="escape" action="go back" />
    </>
  ),
}: Props): React.ReactNode {
  const exitState = useExitOnCtrlCDWithKeybindings();

  return (
    <Box marginLeft={2} marginTop={1}>
      <Text dimColor>
        {exitState.pending
          ? `Press ${exitState.keyName} again to exit`
          : instructions}
      </Text>
    </Box>
  );
}
