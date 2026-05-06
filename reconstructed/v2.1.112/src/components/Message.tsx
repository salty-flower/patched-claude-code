import { c as _c } from "react/compiler-runtime";
import { feature } from 'bun:bundle';
import type { BetaContentBlock } from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs';
import type { ImageBlockParam, TextBlockParam, ThinkingBlockParam, ToolResultBlockParam, ToolUseBlockParam } from '@anthropic-ai/sdk/resources/index.mjs';
import * as React from 'react';
import type { Command } from '../commands.js';
import { useTerminalSize } from '../hooks/useTerminalSize.js';
import { Box } from '../ink.js';
import type { Tools } from '../Tool.js';
import { type ConnectorTextBlock, isConnectorTextBlock } from '../types/connectorText.js';
import type { AssistantMessage, AttachmentMessage as AttachmentMessageType, CollapsedReadSearchGroup as CollapsedReadSearchGroupType, GroupedToolUseMessage as GroupedToolUseMessageType, NormalizedUserMessage, ProgressMessage, SystemMessage } from '../types/message.js';
import { type AdvisorBlock, isAdvisorBlock } from '../utils/advisor.js';
import { isFullscreenEnvEnabled } from '../utils/fullscreen.js';
import { logError } from '../utils/log.js';
import type { buildMessageLookups } from '../utils/messages.js';
import { CompactSummary } from './CompactSummary.js';
import { AdvisorMessage } from './messages/AdvisorMessage.js';
import { AssistantRedactedThinkingMessage } from './messages/AssistantRedactedThinkingMessage.js';
import { AssistantTextMessage } from './messages/AssistantTextMessage.js';
import { AssistantThinkingMessage } from './messages/AssistantThinkingMessage.js';
import { AssistantToolUseMessage } from './messages/AssistantToolUseMessage.js';
import { AttachmentMessage } from './messages/AttachmentMessage.js';
import { CollapsedReadSearchContent } from './messages/CollapsedReadSearchContent.js';
import { CompactBoundaryMessage } from './messages/CompactBoundaryMessage.js';
import { GroupedToolUseContent } from './messages/GroupedToolUseContent.js';
import { SystemTextMessage } from './messages/SystemTextMessage.js';
import { UserImageMessage } from './messages/UserImageMessage.js';
import { UserTextMessage } from './messages/UserTextMessage.js';
import { UserToolResultMessage } from './messages/UserToolResultMessage/UserToolResultMessage.js';
import { OffscreenFreeze } from './OffscreenFreeze.js';
import { ExpandShellOutputProvider } from './shell/ExpandShellOutputContext.js';
export type Props = {
  message: NormalizedUserMessage | AssistantMessage | AttachmentMessageType | SystemMessage | GroupedToolUseMessageType | CollapsedReadSearchGroupType;
  lookups: ReturnType<typeof buildMessageLookups>;
  // TODO: Find a way to remove this, and leave spacing to the consumer
  /** Absolute width for the container Box. When provided, eliminates a wrapper Box in the caller. */
  containerWidth?: number;
  addMargin: boolean;
  tools: Tools;
  commands: Command[];
  verbose: boolean;
  inProgressToolUseIDs: Set<string>;
  progressMessagesForMessage: ProgressMessage[];
  shouldAnimate: boolean;
  shouldShowDot: boolean;
  style?: 'condensed';
  width?: number | string;
  isTranscriptMode: boolean;
  isStatic: boolean;
  onOpenRateLimitOptions?: () => void;
  isActiveCollapsedGroup?: boolean;
  isUserContinuation?: boolean;
  /** ID of the last thinking block (uuid:index) to show, used for hiding past thinking in transcript mode */
  lastThinkingBlockId?: string | null;
  /** UUID of the latest user bash output message (for auto-expanding) */
  latestBashOutputUUID?: string | null;
};
function MessageImpl(t0) {
  const $ = _c(95);
  const {
    message,
    lookups,
    containerWidth,
    addMargin,
    tools,
    commands,
    verbose,
    inProgressToolUseIDs,
    progressMessagesForMessage,
    shouldAnimate,
    shouldShowDot,
    style,
    width,
    isTranscriptMode,
    onOpenRateLimitOptions,
    isActiveCollapsedGroup,
    isUserContinuation: t1,
    lastThinkingBlockId,
    latestBashOutputUUID
  } = t0;
  const isUserContinuation = t1 === undefined ? false : t1;
  switch (message.type) {
    case "attachment":
      {
        let t2;
        if ($[0] !== addMargin || $[1] !== isTranscriptMode || $[2] !== message.attachment || $[3] !== message.uuid || $[4] !== verbose) {
          t2 = <AttachmentMessage addMargin={addMargin} attachment={message.attachment} verbose={verbose} isTranscriptMode={isTranscriptMode} messageUuid={message.uuid} />;
          $[0] = addMargin;
          $[1] = isTranscriptMode;
          $[2] = message.attachment;
          $[3] = message.uuid;
          $[4] = verbose;
          $[5] = t2;
        } else {
          t2 = $[5];
        }
        return t2;
      }
    case "assistant":
      {
        const t2 = containerWidth ?? "100%";
        let t3;
        if ($[6] !== addMargin || $[7] !== commands || $[8] !== inProgressToolUseIDs || $[9] !== isTranscriptMode || $[10] !== lastThinkingBlockId || $[11] !== lookups || $[12] !== message.advisorModel || $[13] !== message.message.content || $[14] !== message.uuid || $[15] !== onOpenRateLimitOptions || $[16] !== progressMessagesForMessage || $[17] !== shouldAnimate || $[18] !== shouldShowDot || $[19] !== tools || $[20] !== verbose || $[21] !== width) {
          let t4;
          if ($[23] !== addMargin || $[24] !== commands || $[25] !== inProgressToolUseIDs || $[26] !== isTranscriptMode || $[27] !== lastThinkingBlockId || $[28] !== lookups || $[29] !== message.advisorModel || $[30] !== message.uuid || $[31] !== onOpenRateLimitOptions || $[32] !== progressMessagesForMessage || $[33] !== shouldAnimate || $[34] !== shouldShowDot || $[35] !== tools || $[36] !== verbose || $[37] !== width) {
            t4 = (_, index_0) => <AssistantMessageBlock key={index_0} param={_} addMargin={addMargin} tools={tools} commands={commands} verbose={verbose} inProgressToolUseIDs={inProgressToolUseIDs} progressMessagesForMessage={progressMessagesForMessage} shouldAnimate={shouldAnimate} shouldShowDot={shouldShowDot} width={width} inProgressToolCallCount={inProgressToolUseIDs.size} isTranscriptMode={isTranscriptMode} lookups={lookups} onOpenRateLimitOptions={onOpenRateLimitOptions} thinkingBlockId={`${message.uuid}:${index_0}`} lastThinkingBlockId={lastThinkingBlockId} advisorModel={message.advisorModel} messageUuid={message.uuid} />;
            $[23] = addMargin;
            $[24] = commands;
            $[25] = inProgressToolUseIDs;
            $[26] = isTranscriptMode;
            $[27] = lastThinkingBlockId;
            $[28] = lookups;
            $[29] = message.advisorModel;
            $[30] = message.uuid;
            $[31] = onOpenRateLimitOptions;
            $[32] = progressMessagesForMessage;
            $[33] = shouldAnimate;
            $[34] = shouldShowDot;
            $[35] = tools;
            $[36] = verbose;
            $[37] = width;
            $[38] = t4;
          } else {
            t4 = $[38];
          }
          t3 = message.message.content.map(t4);
          $[6] = addMargin;
          $[7] = commands;
          $[8] = inProgressToolUseIDs;
          $[9] = isTranscriptMode;
          $[10] = lastThinkingBlockId;
          $[11] = lookups;
          $[12] = message.advisorModel;
          $[13] = message.message.content;
          $[14] = message.uuid;
          $[15] = onOpenRateLimitOptions;
          $[16] = progressMessagesForMessage;
          $[17] = shouldAnimate;
          $[18] = shouldShowDot;
          $[19] = tools;
          $[20] = verbose;
          $[21] = width;
          $[22] = t3;
        } else {
          t3 = $[22];
        }
        let t4;
        if ($[39] !== t2 || $[40] !== t3) {
          t4 = <Box flexDirection="column" width={t2}>{t3}</Box>;
          $[39] = t2;
          $[40] = t3;
          $[41] = t4;
        } else {
          t4 = $[41];
        }
        return t4;
      }
    case "user":
      {
        if (message.isCompactSummary) {
          const t2 = isTranscriptMode ? "transcript" : "prompt";
          let t3;
          if ($[42] !== message || $[43] !== t2) {
            t3 = <CompactSummary message={message} screen={t2} />;
            $[42] = message;
            $[43] = t2;
            $[44] = t3;
          } else {
            t3 = $[44];
          }
          return t3;
        }
        let imageIndices;
        if ($[45] !== message.imagePasteIds || $[46] !== message.message.content) {
          imageIndices = [];
          let imagePosition = 0;
          for (const param of message.message.content) {
            if (param.type === "image") {
              const id = message.imagePasteIds?.[imagePosition];
              imagePosition++;
              imageIndices.push(id ?? imagePosition);
            } else {
              imageIndices.push(imagePosition);
            }
          }
          $[45] = message.imagePasteIds;
          $[46] = message.message.content;
          $[47] = imageIndices;
        } else {
          imageIndices = $[47];
        }
        const isLatestBashOutput = latestBashOutputUUID === message.uuid;
        const t2 = containerWidth ?? "100%";
        let t3;
        if ($[48] !== addMargin || $[49] !== imageIndices || $[50] !== isTranscriptMode || $[51] !== isUserContinuation || $[52] !== lookups || $[53] !== message || $[54] !== progressMessagesForMessage || $[55] !== style || $[56] !== tools || $[57] !== verbose) {
          t3 = message.message.content.map((param_0, index) => <UserMessage key={index} message={message} addMargin={addMargin} tools={tools} progressMessagesForMessage={progressMessagesForMessage} param={param_0} style={style} verbose={verbose} imageIndex={imageIndices[index]} isUserContinuation={isUserContinuation} lookups={lookups} isTranscriptMode={isTranscriptMode} />);
          $[48] = addMargin;
          $[49] = imageIndices;
          $[50] = isTranscriptMode;
          $[51] = isUserContinuation;
          $[52] = lookups;
          $[53] = message;
          $[54] = progressMessagesForMessage;
          $[55] = style;
          $[56] = tools;
          $[57] = verbose;
          $[58] = t3;
        } else {
          t3 = $[58];
        }
        let t4;
        if ($[59] !== t2 || $[60] !== t3) {
          t4 = <Box flexDirection="column" width={t2}>{t3}</Box>;
          $[59] = t2;
          $[60] = t3;
          $[61] = t4;
        } else {
          t4 = $[61];
        }
        const content = t4;
        let t5;
        if ($[62] !== content || $[63] !== isLatestBashOutput) {
          t5 = isLatestBashOutput ? <ExpandShellOutputProvider>{content}</ExpandShellOutputProvider> : content;
          $[62] = content;
          $[63] = isLatestBashOutput;
          $[64] = t5;
        } else {
          t5 = $[64];
        }
        return t5;
      }
    case "system":
      {
        if (message.subtype === "compact_boundary") {
          if (isFullscreenEnvEnabled()) {
            return null;
          }
          let t2;
          if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = <CompactBoundaryMessage />;
            $[65] = t2;
          } else {
            t2 = $[65];
          }
          return t2;
        }
        if (message.subtype === "microcompact_boundary") {
          return null;
        }
        if (feature("HISTORY_SNIP")) {
          const {
            isSnipBoundaryMessage
          } = require("../services/compact/snipProjection.js") as typeof import('../services/compact/snipProjection.js');
          const {
            isSnipMarkerMessage
          } = require("../services/compact/snipCompact.js") as typeof import('../services/compact/snipCompact.js');
          if (isSnipBoundaryMessage(message)) {
            let t2;
            if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
              t2 = require("./messages/SnipBoundaryMessage.js");
              $[66] = t2;
            } else {
              t2 = $[66];
            }
            const {
              SnipBoundaryMessage
            } = t2 as typeof import('./messages/SnipBoundaryMessage.js');
            let t3;
            if ($[67] !== message) {
              t3 = <SnipBoundaryMessage message={message} />;
              $[67] = message;
              $[68] = t3;
            } else {
              t3 = $[68];
            }
            return t3;
          }
          if (isSnipMarkerMessage(message)) {
            return null;
          }
        }
        if (message.subtype === "local_command") {
          let t2;
          if ($[69] !== message.content) {
            t2 = {
              type: "text",
              text: message.content
            };
            $[69] = message.content;
            $[70] = t2;
          } else {
            t2 = $[70];
          }
          let t3;
          if ($[71] !== addMargin || $[72] !== isTranscriptMode || $[73] !== t2 || $[74] !== verbose) {
            t3 = <UserTextMessage addMargin={addMargin} param={t2} verbose={verbose} isTranscriptMode={isTranscriptMode} />;
            $[71] = addMargin;
            $[72] = isTranscriptMode;
            $[73] = t2;
            $[74] = verbose;
            $[75] = t3;
          } else {
            t3 = $[75];
          }
          return t3;
        }
        let t2;
        if ($[76] !== addMargin || $[77] !== isTranscriptMode || $[78] !== message || $[79] !== verbose) {
          t2 = <SystemTextMessage message={message} addMargin={addMargin} verbose={verbose} isTranscriptMode={isTranscriptMode} />;
          $[76] = addMargin;
          $[77] = isTranscriptMode;
          $[78] = message;
          $[79] = verbose;
          $[80] = t2;
        } else {
          t2 = $[80];
        }
        return t2;
      }
    case "grouped_tool_use":
      {
        let t2;
        if ($[81] !== inProgressToolUseIDs || $[82] !== lookups || $[83] !== message || $[84] !== shouldAnimate || $[85] !== tools) {
          t2 = <GroupedToolUseContent message={message} tools={tools} lookups={lookups} inProgressToolUseIDs={inProgressToolUseIDs} shouldAnimate={shouldAnimate} />;
          $[81] = inProgressToolUseIDs;
          $[82] = lookups;
          $[83] = message;
          $[84] = shouldAnimate;
          $[85] = tools;
          $[86] = t2;
        } else {
          t2 = $[86];
        }
        return t2;
      }
    case "collapsed_read_search":
      {
        const t2 = verbose || isTranscriptMode;
        let t3;
        if ($[87] !== inProgressToolUseIDs || $[88] !== isActiveCollapsedGroup || $[89] !== lookups || $[90] !== message || $[91] !== shouldAnimate || $[92] !== t2 || $[93] !== tools) {
          t3 = <OffscreenFreeze><CollapsedReadSearchContent message={message} inProgressToolUseIDs={inProgressToolUseIDs} shouldAnimate={shouldAnimate} verbose={t2} tools={tools} lookups={lookups} isActiveGroup={isActiveCollapsedGroup} /></OffscreenFreeze>;
          $[87] = inProgressToolUseIDs;
          $[88] = isActiveCollapsedGroup;
          $[89] = lookups;
          $[90] = message;
          $[91] = shouldAnimate;
          $[92] = t2;
          $[93] = tools;
          $[94] = t3;
        } else {
          t3 = $[94];
        }
        return t3;
      }
  }
}
function UserMessage(t0) {
  const $ = _c(20);
  const {
    message,
    addMargin,
    tools,
    progressMessagesForMessage,
    param,
    style,
    verbose,
    imageIndex,
    isUserContinuation,
    lookups,
    isTranscriptMode
  } = t0;
  const {
    columns
  } = useTerminalSize();
  switch (param.type) {
    case "text":
      {
        let t1;
        if ($[0] !== addMargin || $[1] !== isTranscriptMode || $[2] !== message.planContent || $[3] !== message.timestamp || $[4] !== param || $[5] !== verbose) {
          t1 = <UserTextMessage addMargin={addMargin} param={param} verbose={verbose} planContent={message.planContent} isTranscriptMode={isTranscriptMode} timestamp={message.timestamp} />;
          $[0] = addMargin;
          $[1] = isTranscriptMode;
          $[2] = message.planContent;
          $[3] = message.timestamp;
          $[4] = param;
          $[5] = verbose;
          $[6] = t1;
        } else {
          t1 = $[6];
        }
        return t1;
      }
    case "image":
      {
        const t1 = addMargin && !isUserContinuation;
        let t2;
        if ($[7] !== imageIndex || $[8] !== t1) {
          t2 = <UserImageMessage imageId={imageIndex} addMargin={t1} />;
          $[7] = imageIndex;
          $[8] = t1;
          $[9] = t2;
        } else {
          t2 = $[9];
        }
        return t2;
      }
    case "tool_result":
      {
        const t1 = columns - 5;
        let t2;
        if ($[10] !== isTranscriptMode || $[11] !== lookups || $[12] !== message || $[13] !== param || $[14] !== progressMessagesForMessage || $[15] !== style || $[16] !== t1 || $[17] !== tools || $[18] !== verbose) {
          t2 = <UserToolResultMessage param={param} message={message} lookups={lookups} progressMessagesForMessage={progressMessagesForMessage} style={style} tools={tools} verbose={verbose} width={t1} isTranscriptMode={isTranscriptMode} />;
          $[10] = isTranscriptMode;
          $[11] = lookups;
          $[12] = message;
          $[13] = param;
          $[14] = progressMessagesForMessage;
          $[15] = style;
          $[16] = t1;
          $[17] = tools;
          $[18] = verbose;
          $[19] = t2;
        } else {
          t2 = $[19];
        }
        return t2;
      }
    default:
      {
        return;
      }
  }
}
function AssistantMessageBlock(t0) {
  const $ = _c(48);
  const {
    param,
    addMargin,
    tools,
    commands,
    verbose,
    inProgressToolUseIDs,
    progressMessagesForMessage,
    shouldAnimate,
    shouldShowDot,
    width,
    inProgressToolCallCount,
    isTranscriptMode,
    lookups,
    onOpenRateLimitOptions,
    thinkingBlockId,
    lastThinkingBlockId,
    advisorModel,
    messageUuid
  } = t0;
  switch (param.type) {
    case "tool_use":
      {
        let t1;
        if ($[10] !== addMargin || $[11] !== commands || $[12] !== inProgressToolCallCount || $[13] !== inProgressToolUseIDs || $[14] !== isTranscriptMode || $[15] !== lookups || $[16] !== messageUuid || $[17] !== param || $[18] !== progressMessagesForMessage || $[19] !== shouldAnimate || $[20] !== shouldShowDot || $[21] !== tools || $[22] !== verbose) {
          t1 = <AssistantToolUseMessage param={param} addMargin={addMargin} tools={tools} commands={commands} verbose={verbose} inProgressToolUseIDs={inProgressToolUseIDs} progressMessagesForMessage={progressMessagesForMessage} shouldAnimate={shouldAnimate} shouldShowDot={shouldShowDot} inProgressToolCallCount={inProgressToolCallCount} lookups={lookups} isTranscriptMode={isTranscriptMode} messageUuid={messageUuid} />;
          $[10] = addMargin;
          $[11] = commands;
          $[12] = inProgressToolCallCount;
          $[13] = inProgressToolUseIDs;
          $[14] = isTranscriptMode;
          $[15] = lookups;
          $[16] = messageUuid;
          $[17] = param;
          $[18] = progressMessagesForMessage;
          $[19] = shouldAnimate;
          $[20] = shouldShowDot;
          $[21] = tools;
          $[22] = verbose;
          $[23] = t1;
        } else {
          t1 = $[23];
        }
        return t1;
      }
    case "text":
      {
        let t1;
        if ($[24] !== addMargin || $[25] !== messageUuid || $[26] !== onOpenRateLimitOptions || $[27] !== param || $[28] !== shouldShowDot || $[29] !== verbose || $[30] !== width) {
          t1 = <AssistantTextMessage param={param} addMargin={addMargin} shouldShowDot={shouldShowDot} verbose={verbose} width={width} onOpenRateLimitOptions={onOpenRateLimitOptions} messageUuid={messageUuid} />;
          $[24] = addMargin;
          $[25] = messageUuid;
          $[26] = onOpenRateLimitOptions;
          $[27] = param;
          $[28] = shouldShowDot;
          $[29] = verbose;
          $[30] = width;
          $[31] = t1;
        } else {
          t1 = $[31];
        }
        return t1;
      }
    case "redacted_thinking":
      {
        if (!isTranscriptMode && !verbose) {
          return null;
        }
        let t1;
        if ($[32] !== addMargin) {
          t1 = <AssistantRedactedThinkingMessage addMargin={addMargin} />;
          $[32] = addMargin;
          $[33] = t1;
        } else {
          t1 = $[33];
        }
        return t1;
      }
    case "thinking":
      {
        if (!isTranscriptMode && !verbose) {
          return null;
        }
        const isLastThinking = !lastThinkingBlockId || thinkingBlockId === lastThinkingBlockId;
        const t1 = isTranscriptMode && !isLastThinking;
        let t2;
        if ($[34] !== addMargin || $[35] !== isTranscriptMode || $[36] !== param || $[37] !== t1 || $[38] !== verbose) {
          t2 = <AssistantThinkingMessage addMargin={addMargin} param={param} isTranscriptMode={isTranscriptMode} verbose={verbose} hideInTranscript={t1} />;
          $[34] = addMargin;
          $[35] = isTranscriptMode;
          $[36] = param;
          $[37] = t1;
          $[38] = verbose;
          $[39] = t2;
        } else {
          t2 = $[39];
        }
        return t2;
      }
    case "server_tool_use":
    case "advisor_tool_result":
      {
        if (isAdvisorBlock(param)) {
          const t1 = verbose || isTranscriptMode;
          let t2;
          if ($[40] !== addMargin || $[41] !== advisorModel || $[42] !== lookups.erroredToolUseIDs || $[43] !== lookups.resolvedToolUseIDs || $[44] !== param || $[45] !== shouldAnimate || $[46] !== t1) {
            t2 = <AdvisorMessage block={param} addMargin={addMargin} resolvedToolUseIDs={lookups.resolvedToolUseIDs} erroredToolUseIDs={lookups.erroredToolUseIDs} shouldAnimate={shouldAnimate} verbose={t1} advisorModel={advisorModel} />;
            $[40] = addMargin;
            $[41] = advisorModel;
            $[42] = lookups.erroredToolUseIDs;
            $[43] = lookups.resolvedToolUseIDs;
            $[44] = param;
            $[45] = shouldAnimate;
            $[46] = t1;
            $[47] = t2;
          } else {
            t2 = $[47];
          }
          return t2;
        }
        logError(new Error(`Unable to render server tool block: ${param.type}`));
        return null;
      }
    default:
      {
        logError(new Error(`Unable to render message type: ${param.type}`));
        return null;
      }
  }
}
export function hasThinkingContent(m: {
  type: string;
  message?: {
    content: Array<{
      type: string;
    }>;
  };
}): boolean {
  if (m.type !== 'assistant' || !m.message) return false;
  return m.message.content.some(b => b.type === 'thinking' || b.type === 'redacted_thinking');
}

/** Exported for testing */
export function areMessagePropsEqual(prev: Props, next: Props): boolean {
  if (prev.message.uuid !== next.message.uuid) return false;
  // Only re-render on lastThinkingBlockId change if this message actually
  // has thinking content — otherwise every message in scrollback re-renders
  // whenever streaming thinking starts/stops (CC-941).
  if (prev.lastThinkingBlockId !== next.lastThinkingBlockId && hasThinkingContent(next.message)) {
    return false;
  }
  // Verbose toggle changes thinking block visibility/expansion
  if (prev.verbose !== next.verbose) return false;
  // Only re-render if this message's "is latest bash output" status changed,
  // not when the global latestBashOutputUUID changes to a different message
  const prevIsLatest = prev.latestBashOutputUUID === prev.message.uuid;
  const nextIsLatest = next.latestBashOutputUUID === next.message.uuid;
  if (prevIsLatest !== nextIsLatest) return false;
  if (prev.isTranscriptMode !== next.isTranscriptMode) return false;
  // containerWidth is an absolute number in the no-metadata path (wrapper
  // Box is skipped). Static messages must re-render on terminal resize.
  if (prev.containerWidth !== next.containerWidth) return false;
  if (prev.isStatic && next.isStatic) return true;
  return false;
}
export const Message = React.memo(MessageImpl, areMessagePropsEqual);
