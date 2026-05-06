import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Box, Text } from '../../ink.js';
import { PromptInputHelpMenu } from '../PromptInput/PromptInputHelpMenu.js';

const MIN_ROWS_FOR_POWERUP = 24; // vbY in v112 minified

export function General() {
  const $ = _c(8);
  const { rows } = useTerminalSize_V112();
  const isCompact = rows < MIN_ROWS_FOR_POWERUP;
  const paddingY = isCompact ? 0 : 1;
  const gap = isCompact ? 0 : 1;
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = <Box flexShrink={0}><Text>Claude understands your codebase, makes edits with your permission, and executes commands — right from your terminal.</Text></Box>;
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] !== isCompact) {
    t1 = !isCompact && <Box><Text dimColor={true}>New here? Run <Text color="suggestion">/powerup</Text> to learn the features most people miss.</Text></Box>;
    $[1] = isCompact;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = <Box flexDirection="column"><Box flexShrink={0}><Text bold={true}>Shortcuts</Text></Box><PromptInputHelpMenu gap={2} fixedWidth={true} /></Box>;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== paddingY || $[5] !== gap || $[6] !== t1) {
    t3 = <Box flexDirection="column" paddingY={paddingY} gap={gap}>{t0}{t1}{t2}</Box>;
    $[4] = paddingY;
    $[5] = gap;
    $[6] = t1;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
}

// TODO: unresolved symbol useTerminalSize_V112 — v112 uses s1() directly
// but the General component now reads rows from terminal size (new in v112)
// Byte range: 10564182-10565120
