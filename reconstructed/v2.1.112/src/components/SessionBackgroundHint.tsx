import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { useCallback, useState } from 'react';
import { useDoublePress } from '../hooks/useDoublePress.js';
import { Box, Text } from '../ink.js';
import { useKeybinding } from '../keybindings/useKeybinding.js';
import { useShortcutDisplay } from '../keybindings/useShortcutDisplay.js';
import { useAppState, useAppStateStore, useSetAppState } from '../state/AppState.js';
import { backgroundAll, hasForegroundTasks } from '../tasks/LocalShellTask/LocalShellTask.js';
import { getGlobalConfig, saveGlobalConfig, useGlobalConfig } from '../utils/config.js'; // TODO: verify useGlobalConfig import
import { env } from '../utils/env.js';
import { isEnvTruthy } from '../utils/envUtils.js';
import { Chords } from './design-system/Chords.js'; // TODO: verify import path (was KeyboardShortcutHint in v88)

type Props = {
  onBackgroundSession: () => void;
  isLoading: boolean;
};

/**
 * Shows a hint when user presses Ctrl+B to background the current session.
 * Uses double-press pattern: first press shows hint, second press within 800ms backgrounds.
 *
 * Only activates when:
 * 1. isLoading is true (a query is in progress)
 * 2. No foreground tasks (bash/agent) are running (those take priority for Ctrl+B)
 */
export function SessionBackgroundHint(t0: Props) {
  const $ = _c(12);
  const {
    onBackgroundSession,
    isLoading
  } = t0;
  const setAppState = useSetAppState();
  const appStateStore = useAppStateStore();
  const globalConfig = useGlobalConfig();
  const [showSessionHint, setShowSessionHint] = useState(false);
  const handleDoublePress = useDoublePress(setShowSessionHint, onBackgroundSession, _temp);
  let t1;
  if ($[0] !== appStateStore || $[1] !== handleDoublePress || $[2] !== isLoading || $[3] !== setAppState || $[4] !== globalConfig) {
    t1 = () => {
      if (isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS)) {
        return;
      }
      const state = appStateStore.getState();
      if (hasForegroundTasks(state)) {
        backgroundAll(globalConfig, () => appStateStore.getState(), setAppState);
        if (!getGlobalConfig().hasUsedBackgroundTask) {
          saveGlobalConfig(_temp2);
        }
      } else {
        if (isEnvTruthy("false") && isLoading) {
          handleDoublePress();
        }
      }
    };
    $[0] = appStateStore;
    $[1] = handleDoublePress;
    $[2] = isLoading;
    $[3] = setAppState;
    $[4] = globalConfig;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  const handleBackground = t1;
  const hasForeground = useAppState(hasForegroundTasks);
  let t2;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = isEnvTruthy("false");
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const sessionBgEnabled = t2;
  const t3 = hasForeground || sessionBgEnabled && isLoading;
  let t4;
  if ($[7] !== t3) {
    t4 = {
      context: "Task",
      isActive: t3
    };
    $[7] = t3;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  useKeybinding("task:background", handleBackground, t4);
  const baseShortcut = useShortcutDisplay("task:background", "Task", "ctrl+b");
  const shortcut = env.terminal === "tmux" && baseShortcut === "ctrl+b" ? "ctrl+b ctrl+b" : baseShortcut;
  if (!isLoading || !showSessionHint) {
    return null;
  }
  let t5;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = { keyCase: "lower" };
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  const format = t5;
  let t6;
  if ($[10] !== shortcut) {
    t6 = <Box paddingLeft={2}><Text dimColor={true}><Chords chord={shortcut} action="background" format={format} /></Text></Box>;
    $[10] = shortcut;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  return t6;
}
function _temp2(c: { hasUsedBackgroundTask?: boolean }) {
  return c.hasUsedBackgroundTask ? c : {
    ...c,
    hasUsedBackgroundTask: true
  };
}
function _temp() {}
