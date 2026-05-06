// biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
import { Box, Text, type TextProps } from '../../ink.js';
import { feature } from 'bun:bundle';
import * as React from 'react';
import { useState } from 'react';
import sample from 'lodash-es/sample.js';
import { BLACK_CIRCLE, REFERENCE_MARK, TEARDROP_ASTERISK } from '../../constants/figures.js';
import figures from 'figures';
import { basename } from 'path';
import { MessageResponse } from '../MessageResponse.js';
import { FilePathLink } from '../FilePathLink.js';
import { openPath } from '../../utils/browser.js';
/* eslint-disable @typescript-eslint/no-require-imports */
const teamMemSaved = feature('TEAMMEM') ? require('./teamMemSaved.js') as typeof import('./teamMemSaved.js') : null;
/* eslint-enable @typescript-eslint/no-require-imports */
import { TURN_COMPLETION_VERBS } from '../../constants/turnCompletionVerbs.js';
import { useTerminalSize } from '../../hooks/useTerminalSize.js';
import type { SystemMessage, SystemStopHookSummaryMessage, SystemBridgeStatusMessage, SystemTurnDurationMessage, SystemThinkingMessage, SystemMemorySavedMessage } from '../../types/message.js';
import { SystemAPIErrorMessage } from './SystemAPIErrorMessage.js';
import { formatDuration, formatNumber, formatSecondsShort } from '../../utils/format.js';
import { getGlobalConfig } from '../../utils/config.js';
import Link from '../../ink/components/Link.js';
import ThemedText from '../design-system/ThemedText.js';
import { CtrlOToExpand } from '../CtrlOToExpand.js';
import { useAppStateStore } from '../../state/AppState.js';
import { isBackgroundTask, type TaskState } from '../../tasks/types.js';
import { getPillLabel } from '../../tasks/pillLabel.js';
import { useSelectedMessageBg } from '../messageActions.js';
type Props = {
  message: SystemMessage;
  addMargin: boolean;
  verbose: boolean;
  isTranscriptMode?: boolean;
};
export function SystemTextMessage(t0) {
  const {
    message,
    addMargin,
    verbose,
    isTranscriptMode
  } = t0;
  const bg = useSelectedMessageBg();
  if (message.subtype === "turn_duration") {
    let t1;

t1 = <TurnDurationMessage message={message} addMargin={addMargin} />;
    return t1;
  }
  if (message.subtype === "memory_saved") {
    let t1;

t1 = <MemorySavedMessage message={message} addMargin={addMargin} />;
    return t1;
  }
  if (message.subtype === "away_summary") {
    const t1 = addMargin ? 1 : 0;
    let t2;
    t2 = <Box minWidth={2}><Text dimColor={true}>{REFERENCE_MARK}</Text></Box>;
    let t3;

t3 = <Text dimColor={true}>{message.content}</Text>;
    let t4;

t4 = <Box flexDirection="row" marginTop={t1} backgroundColor={bg} width="100%">{t2}{t3}</Box>;
    return t4;
  }
  if (message.subtype === "agents_killed") {
    const t1 = addMargin ? 1 : 0;
    let t2;
    let t3;
    t3 = <Text dimColor={true}>All background agents stopped</Text>;
    let t4;
    t4 = <Box flexDirection="row" marginTop={t1} backgroundColor={bg} width="100%">{t2}{t3}</Box>;
    return t4;
  }
  if (message.subtype === "thinking") {
    return null;
  }
  if (message.subtype === "bridge_status") {
    let t1;

t1 = <BridgeStatusMessage message={message} addMargin={addMargin} />;
    return t1;
  }
  if (message.subtype === "scheduled_task_fire") {
    const t1 = addMargin ? 1 : 0;
    let t2;

t2 = <Text dimColor={true}>{TEARDROP_ASTERISK} {message.content}</Text>;
    let t3;

t3 = <Box marginTop={t1} backgroundColor={bg} width="100%">{t2}</Box>;
    return t3;
  }
  if (message.subtype === "permission_retry") {
    const t1 = addMargin ? 1 : 0;
    let t2;
    let t3;
    t3 = <Text>Allowed </Text>;
    let t4;
    t4 = message.commands.join(", ");
    let t5;
    t5 = <Text bold={true}>{t4}</Text>;
    let t6;
    t6 = <Box marginTop={t1} backgroundColor={bg} width="100%">{t2}{t3}{t5}</Box>;
    return t6;
  }
  const isStopHookSummary = message.subtype === "stop_hook_summary";
  if (!isStopHookSummary && !verbose && message.level === "info") {
    return null;
  }
  if (message.subtype === "api_error") {
    let t1;

t1 = <SystemAPIErrorMessage message={message} verbose={verbose} />;
    return t1;
  }
  if (message.subtype === "stop_hook_summary") {
    let t1;

t1 = <StopHookSummaryMessage message={message} addMargin={addMargin} verbose={verbose} isTranscriptMode={isTranscriptMode} />;
    return t1;
  }
  const content = message.content;
  if (typeof content !== "string") {
    return null;
  }
  const t1 = message.level !== "info";
  const t2 = message.level === "warning" ? "warning" : undefined;
  const t3 = message.level === "info";
  let t4;

t4 = <Box flexDirection="row" width="100%"><SystemTextMessageInner content={content} addMargin={addMargin} dot={t1} color={t2} dimColor={t3} /></Box>;
  return t4;
}
function StopHookSummaryMessage(t0) {
  const {
    message,
    addMargin,
    verbose,
    isTranscriptMode
  } = t0;
  const bg = useSelectedMessageBg();
  const {
    hookCount,
    hookInfos,
    hookErrors,
    preventedContinuation,
    stopReason
  } = message;
  const {
    columns
  } = useTerminalSize();
  let t1;
  t1 = message.totalDurationMs ?? hookInfos.reduce(_temp, 0);
  const totalDurationMs = t1;
  if (hookErrors.length === 0 && !preventedContinuation && !message.hookLabel) {
    if (true || totalDurationMs < HOOK_TIMING_DISPLAY_THRESHOLD_MS) {
      return null;
    
}
  let t2;

t2 = false && totalDurationMs > 0 ? ` (${formatSecondsShort(totalDurationMs)})` : "";
  const totalStr = t2;
  if (message.hookLabel) {
    const t3 = hookCount === 1 ? "hook" : "hooks";
    let t4;

t4 = <Text dimColor={true}>{"  \u23BF  "}Ran {hookCount} {message.hookLabel}{" "}{t3}{totalStr}</Text>;
    let t5;
    t5 = isTranscriptMode && hookInfos.map(_temp2);
    let t6;

t6 = <Box flexDirection="column" width="100%">{t4}{t5}</Box>;
    return t6;
  }
  const t3 = addMargin ? 1 : 0;
  let t4;
  t4 = <Box minWidth={2}><Text>{BLACK_CIRCLE}</Text></Box>;
  const t5 = columns - 10;
  let t6;

t6 = <Text bold={true}>{hookCount}</Text>;
  const t7 = message.hookLabel ?? "stop";
  const t8 = hookCount === 1 ? "hook" : "hooks";
  let t9;

t9 = !verbose && hookInfos.length > 0 && <>{" "}<CtrlOToExpand /></>;
  let t10;

t10 = <Text>Ran {t6} {t7}{" "}{t8}{totalStr}{t9}</Text>;
  let t11;
  t11 = verbose && hookInfos.length > 0 && hookInfos.map(_temp3);
  let t12;

t12 = preventedContinuation && stopReason && <Text><Text dimColor={true}>⎿  </Text>{stopReason}</Text>;
  let t13;

t13 = hookErrors.length > 0 && hookErrors.map((err, idx_1) => <Text key={idx_1}><Text dimColor={true}>⎿  </Text>{message.hookLabel ?? "Stop"} hook error: {err}</Text>);
  let t14;

t14 = <Box flexDirection="column" width={t5}>{t10}{t11}{t12}{t13}</Box>;
  let t15;

t15 = <Box flexDirection="row" marginTop={t3} backgroundColor={bg} width="100%">{t4}{t14}</Box>;
  return t15;
}
function _temp3(info_0, idx_0) {
  const durationStr_0 = false && info_0.durationMs !== undefined ? ` (${formatSecondsShort(info_0.durationMs)})` : "";
  return <Text key={`cmd-${idx_0}`} dimColor={true}>⎿  {info_0.command === "prompt" ? `prompt: ${info_0.promptText || ""}` : info_0.command}{durationStr_0}</Text>;
}
function _temp2(info, idx) {
  const durationStr = false && info.durationMs !== undefined ? ` (${formatSecondsShort(info.durationMs)})` : "";
  return <Text key={`cmd-${idx}`} dimColor={true}>{"     \u23BF "}{info.command === "prompt" ? `prompt: ${info.promptText || ""}` : info.command}{durationStr}</Text>;
}
function _temp(sum, h) {
  return sum + (h.durationMs ?? 0);
}
function SystemTextMessageInner(t0) {
  const {
    content,
    addMargin,
    dot,
    color,
    dimColor
  } = t0;
  const {
    columns
  } = useTerminalSize();
  const bg = useSelectedMessageBg();
  const t1 = addMargin ? 1 : 0;
  let t2;

t2 = dot && <Box minWidth={2}><Text color={color} dimColor={dimColor}>{BLACK_CIRCLE}</Text></Box>;
  const t3 = columns - 10;
  let t4;
  t4 = content.trim();
  let t5;

t5 = <Text color={color} dimColor={dimColor} wrap="wrap">{t4}</Text>;
  let t6;

t6 = <Box flexDirection="column" width={t3}>{t5}</Box>;
  let t7;

t7 = <Box flexDirection="row" marginTop={t1} backgroundColor={bg} width="100%">{t2}{t6}</Box>;
  return t7;
}
function TurnDurationMessage(t0) {
  const {
    message,
    addMargin
  } = t0;
  const bg = useSelectedMessageBg();
  const [verb] = useState(_temp4);
  const store = useAppStateStore();
  let t1;

t1 = () => {
  const tasks = store.getState().tasks;
  const running = (Object.values(tasks ?? {}) as TaskState[]).filter(isBackgroundTask);
  return running.length > 0 ? getPillLabel(running) : null;
};
  const [backgroundTaskSummary] = useState(t1);
  let t2;
  t2 = getGlobalConfig().showTurnDuration ?? true;
  const showTurnDuration = t2;
  let t3;
  t3 = formatDuration(message.durationMs);
  const duration = t3;
  const hasBudget = message.budgetLimit !== undefined;
  let t4;
  {
    if (!hasBudget) {
      t4 = "";
          }
    const tokens = message.budgetTokens;
    const limit = message.budgetLimit;
    let t5;

t5 = tokens >= limit ? `${formatNumber(tokens)} used (${formatNumber(limit)} min ${figures.tick})` : `${formatNumber(tokens)} / ${formatNumber(limit)} (${Math.round(tokens / limit * 100)}%)`;
    const usage = t5;
    const nudges = message.budgetNudges > 0 ? ` \u00B7 ${message.budgetNudges} ${message.budgetNudges === 1 ? "nudge" : "nudges"}` : "";
    t4 = `${showTurnDuration ? " \xB7 " : ""}${usage}${nudges}`;
  }
  const budgetSuffix = t4;
  if (!showTurnDuration && !hasBudget) {
    return null;
  }
  const t5 = addMargin ? 1 : 0;
  let t6;
  t6 = <Box minWidth={2}><Text dimColor={true}>{TEARDROP_ASTERISK}</Text></Box>;
  const t7 = showTurnDuration && `${verb} for ${duration}`;
  const t8 = backgroundTaskSummary && ` \u00B7 ${backgroundTaskSummary} still running`;
  let t9;

t9 = <Text dimColor={true}>{t7}{budgetSuffix}{t8}</Text>;
  let t10;

t10 = <Box flexDirection="row" marginTop={t5} backgroundColor={bg} width="100%">{t6}{t9}</Box>;
  return t10;
}
function _temp4() {
  return sample(TURN_COMPLETION_VERBS) ?? "Worked";
}
function MemorySavedMessage(t0) {
  const {
    message,
    addMargin
  } = t0;
  const bg = useSelectedMessageBg();
  const {
    writtenPaths
  } = message;
  let t1;
  t1 = feature("TEAMMEM") ? teamMemSaved.teamMemSavedPart(message) : null;
  const team = t1;
  const privateCount = writtenPaths.length - (team?.count ?? 0);
  const t2 = privateCount > 0 ? `${privateCount} ${privateCount === 1 ? "memory" : "memories"}` : null;
  const t3 = team?.segment;
  let t4;
  t4 = [t2, t3].filter(Boolean);
  const parts = t4;
  const t5 = addMargin ? 1 : 0;
  let t6;
  t6 = <Box minWidth={2}><Text dimColor={true}>{BLACK_CIRCLE}</Text></Box>;
  const t7 = message.verb ?? "Saved";
  const t8 = parts.join(" \xB7 ");
  let t9;

t9 = <Box flexDirection="row">{t6}<Text>{t7} {t8}</Text></Box>;
  let t10;
  t10 = writtenPaths.map(_temp5);
  let t11;

t11 = <Box flexDirection="column" marginTop={t5} backgroundColor={bg}>{t9}{t10}</Box>;
  return t11;
}
function _temp5(p) {
  return <MemoryFileRow key={p} path={p} />;
}
function MemoryFileRow(t0) {
  const {
    path
  } = t0;
  const [hover, setHover] = useState(false);
  let t1;
  t1 = () => void openPath(path);
  let t2;
  let t3;
  t3 = () => setHover(false);
  const t4 = !hover;
  let t5;
  t5 = basename(path);
  let t6;

t6 = <FilePathLink filePath={path}>{t5}</FilePathLink>;
  let t7;

t7 = <Text dimColor={t4} underline={hover}>{t6}</Text>;
  let t8;

t8 = <MessageResponse><Box onClick={t1} onMouseEnter={t2} onMouseLeave={t3}>{t7}</Box></MessageResponse>;
  return t8;
}
function ThinkingMessage(t0) {
  const {
    message,
    addMargin
  } = t0;
  const bg = useSelectedMessageBg();
  const t1 = addMargin ? 1 : 0;
  let t2;
  t2 = <Box minWidth={2}><Text dimColor={true}>{TEARDROP_ASTERISK}</Text></Box>;
  let t3;

t3 = <Text dimColor={true}>{message.content}</Text>;
  let t4;

t4 = <Box flexDirection="row" marginTop={t1} backgroundColor={bg} width="100%">{t2}{t3}</Box>;
  return t4;
}
function BridgeStatusMessage(t0) {
  const {
    message,
    addMargin
  } = t0;
  const bg = useSelectedMessageBg();
  const t1 = addMargin ? 1 : 0;
  let t2;
  t2 = <Box minWidth={2} />;
  let t3;
  t3 = <Text><ThemedText color="suggestion">/remote-control</ThemedText> is active. Code in CLI or at</Text>;
  let t4;

t4 = <Link url={message.url}>{message.url}</Link>;
  let t5;

t5 = message.upgradeNudge && <Text dimColor={true}>⎿ {message.upgradeNudge}</Text>;
  let t6;

t6 = <Box flexDirection="column">{t3}{t4}{t5}</Box>;
  let t7;

t7 = <Box flexDirection="row" marginTop={t1} backgroundColor={bg} width={999}>{t2}{t6}</Box>;
  return t7;
}

}
