import { c as _c } from "react/compiler-runtime";
import chalk from 'chalk';
import React, { useContext } from 'react';
import { Text } from '../ink.js';
import { getShortcutDisplay } from '../keybindings/shortcutFormat.js';
import { useShortcutDisplay } from '../keybindings/useShortcutDisplay.js';
import { KeyboardChordHint } from './design-system/KeyboardChordHint.js';
import { InVirtualListContext } from './messageActions.js';

// Context to track if we're inside a sub agent
// Similar to MessageResponseContext, this helps us avoid showing
// too many "(ctrl+o to expand)" hints in sub agent output
const SubAgentContext = React.createContext(false);
export function SubAgentProvider(t0) {
  const $ = _c(2);
  const {
    children
  } = t0;
  let t1;
  if ($[0] !== children) {
    t1 = <SubAgentContext.Provider value={true}>{children}</SubAgentContext.Provider>;
    $[0] = children;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
export function CtrlOToExpand() {
  const $ = _c(3);
  const isInSubAgent = useContext(SubAgentContext);
  const inVirtualList = useContext(InVirtualListContext);
  const expandShortcut = useShortcutDisplay("app:toggleTranscript", "Global", "ctrl+o");
  if (isInSubAgent || inVirtualList) {
    return null;
  }
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      keyCase: "lower"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] !== expandShortcut) {
    t1 = <Text dimColor={true}><KeyboardChordHint chord={expandShortcut} action="expand" parens={true} format={t0} /></Text>;
    $[1] = expandShortcut;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
export function ctrlOToExpand(): string {
  const shortcut = getShortcutDisplay('app:toggleTranscript', 'Global', 'ctrl+o');
  return chalk.dim(`(${shortcut} to expand)`);
}
