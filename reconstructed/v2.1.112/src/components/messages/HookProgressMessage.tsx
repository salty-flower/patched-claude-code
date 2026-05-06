import * as React from 'react';
import type { HookEvent } from 'src/entrypoints/agentSdkTypes.js';
import type { buildMessageLookups } from 'src/utils/messages.js';
import { Box, Text } from '../../ink.js';
import { MessageResponse } from '../MessageResponse.js';
type Props = {
  hookEvent: HookEvent;
  lookups: ReturnType<typeof buildMessageLookups>;
  toolUseID: string;
  verbose: boolean;
  isTranscriptMode?: boolean;
};
export function HookProgressMessage(t0) {

  const {
    hookEvent,
    lookups,
    toolUseID,
    isTranscriptMode
  } = t0;
  let t1;
  t1 = lookups.inProgressHookCounts.get(toolUseID)?.get(hookEvent) ?? 0;
  const inProgressHookCount = t1;
  const resolvedHookCount = lookups.resolvedHookCounts.get(toolUseID)?.get(hookEvent) ?? 0;
  if (inProgressHookCount === 0) {
    return null;
  }
  if (hookEvent === "PreToolUse" || hookEvent === "PostToolUse") {
    if (isTranscriptMode) {
      let t2;

  t2 = <Text dimColor={true}>{inProgressHookCount} </Text>;

      let t3;

  t3 = <Text dimColor={true} bold={true}>{hookEvent}</Text>;

      const t4 = inProgressHookCount === 1 ? " hook" : " hooks";
      let t5;

  t5 = <Text dimColor={true}>{t4} ran</Text>;

      let t6;

  t6 = <MessageResponse><Box flexDirection="row">{t2}{t3}{t5}</Box></MessageResponse>;

      return t6;
    }
    return null;
  }
  if (resolvedHookCount === inProgressHookCount) {
    return null;
  }
  let t2;
  t2 = <Text dimColor={true}>Running </Text>;
  let t3;

  t3 = <Text dimColor={true} bold={true}>{hookEvent}</Text>;

  const t4 = inProgressHookCount === 1 ? " hook\u2026" : " hooks\u2026";
  let t5;

  t5 = <Text dimColor={true}>{t4}</Text>;

  let t6;

  t6 = <MessageResponse><Box flexDirection="row">{t2}{t3}{t5}</Box></MessageResponse>;

  return t6;
}
