import { c as _c } from "react/compiler-runtime";
import chalk from 'chalk';
import type { UUID } from 'crypto';
import type { RefObject } from 'react';
import * as React from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { every } from 'src/utils/set.js';
import { getIsRemoteMode } from '../bootstrap/state.js';
import type { Command } from '../commands.js';
import { BLACK_CIRCLE } from '../constants/figures.js';
import { useTerminalSize } from '../hooks/useTerminalSize.js';
import type { ScrollBoxHandle } from '../ink/components/ScrollBox.js';
import { useTerminalNotification } from '../ink/useTerminalNotification.js';
import { Box, Text } from '../ink.js';
import { useShortcutDisplay } from '../keybindings/useShortcutDisplay.js';
import type { Screen } from '../screens/REPL.js';
import type { Tools } from '../Tool.js';
import { findToolByName } from '../Tool.js';
import type { AgentDefinitionsResult } from '../tools/AgentTool/loadAgentsDir.js';
import type { Message as MessageType, NormalizedMessage, ProgressMessage as ProgressMessageType, RenderableMessage } from '../types/message.js';
import { type AdvisorBlock, isAdvisorBlock } from '../utils/advisor.js';
import { collapseBackgroundBashNotifications } from '../utils/collapseBackgroundBashNotifications.js';
import { collapseHookSummaries } from '../utils/collapseHookSummaries.js';
import { collapseReadSearchGroups } from '../utils/collapseReadSearch.js';
import { collapseTeammateShutdowns } from '../utils/collapseTeammateShutdowns.js';
import { getGlobalConfig } from '../utils/config.js';
import { isEnvTruthy } from '../utils/envUtils.js';
import { isFullscreenEnvEnabled } from '../utils/fullscreen.js';
import { applyGrouping } from '../utils/groupToolUses.js';
import { buildMessageLookups, createAssistantMessage, deriveUUID, getMessagesAfterCompactBoundary, getToolUseID, getToolUseIDs, hasUnresolvedHooksFromLookup, isNotEmptyMessage, normalizeMessages, reorderMessagesInUI, type StreamingThinking, type StreamingToolUse, shouldShowUserMessage } from '../utils/messages.js';
import { plural } from '../utils/stringUtils.js';
import { renderableSearchText } from '../utils/transcriptSearch.js';
import { Divider } from './design-system/Divider.js';
import type { UnseenDivider } from './FullscreenLayout.js';
import { LogoV2 } from './LogoV2/LogoV2.js';
import { StreamingMarkdown } from './Markdown.js';
import { hasContentAfterIndex, MessageRow } from './MessageRow.js';
import { InVirtualListContext, type MessageActionsNav, MessageActionsSelectedContext, type MessageActionsState } from './messageActions.js';
import { AssistantThinkingMessage } from './messages/AssistantThinkingMessage.js';
import { isNullRenderingAttachment } from './messages/nullRenderingAttachments.js';
import { OffscreenFreeze } from './OffscreenFreeze.js';
import type { ToolUseConfirm } from './permissions/PermissionRequest.js';
import { StatusNotices } from './StatusNotices.js';
import type { JumpHandle } from './VirtualMessageList.js';

// Memoed logo header: this box is the FIRST sibling before all MessageRows
// in main-screen mode. If it becomes dirty on every Messages re-render,
// renderChildren's seenDirtyChild cascade disables prevScreen (blit) for
// ALL subsequent siblings — every MessageRow re-writes from scratch instead
// of blitting. In long sessions (~2800 messages) this is 150K+ writes/frame
// and pegs CPU at 100%. Memo on agentDefinitions so a new messages array
// doesn't invalidate the logo subtree. LogoV2/StatusNotices internally
// subscribe to useAppState/useSettings for their own updates.
const LogoHeader = React.memo(function LogoHeader(t0: { agentDefinitions?: AgentDefinitionsResult }) {
  const $ = _c(3);
  const { agentDefinitions } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <LogoV2 />;
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== agentDefinitions) {
    t2 = <OffscreenFreeze><Box flexDirection="column" gap={1}>{t1}<React.Suspense fallback={null}><StatusNotices agentDefinitions={agentDefinitions} /></React.Suspense></Box></OffscreenFreeze>;
    $[1] = agentDefinitions;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
});

// Dead code elimination: conditional import for proactive mode
/* eslint-disable @typescript-eslint/no-require-imports */
const proactiveModule = feature('PROACTIVE') || feature('KAIROS') ? require('../proactive/index.js') : null;
const BRIEF_TOOL_NAME: string | null = feature('KAIROS') || feature('KAIROS_BRIEF') ? (require('../tools/BriefTool/prompt.js') as typeof import('../tools/BriefTool/prompt.js')).BRIEF_TOOL_NAME : null;
const SEND_USER_FILE_TOOL_NAME: string | null = feature('KAIROS') ? (require('../tools/SendUserFileTool/prompt.js') as typeof import('../tools/SendUserFileTool/prompt.js')).SEND_USER_FILE_TOOL_NAME : null;

/* eslint-enable @typescript-eslint/no-require-imports */
import { VirtualMessageList } from './VirtualMessageList.js';

/**
 * In brief-only mode, filter messages to show ONLY Brief tool_use blocks,
 * their tool_results, and real user input. All assistant text is dropped —
 * if the model forgets to call Brief, the user sees nothing for that turn.
 * That's on the model to get right; the filter does not second-guess it.
 */
export function filterForBriefTool<T extends {
  type: string;
  subtype?: string;
  isMeta?: boolean;
  isApiErrorMessage?: boolean;
  message?: {
    content: Array<{
      type: string;
      name?: string;
      tool_use_id?: string;
    }>;
  };
  attachment?: {
    type: string;
    isMeta?: boolean;
    origin?: unknown;
    commandMode?: string;
  };
}>(messages: T[], briefToolNames: string[]): T[] {
  const nameSet = new Set(briefToolNames);
  // tool_use always precedes its tool_result in the array, so we can collect
  // IDs and match against them in a single pass.
  const briefToolUseIDs = new Set<string>();
  return messages.filter(msg => {
    // System messages (attach confirmation, remote errors, compact boundaries)
    // must stay visible — dropping them leaves the viewer with no feedback.
    // Exception: api_metrics is per-turn debug noise (TTFT, config writes,
    // hook timing) that defeats the point of brief mode. Still visible in
    // transcript mode (ctrl+o) which bypasses this filter.
    if (msg.type === 'system') return msg.subtype !== 'api_metrics';
    const block = msg.message?.content[0];
    if (msg.type === 'assistant') {
      // API error messages (auth failures, rate limits, etc.) must stay visible
      if (msg.isApiErrorMessage) return true;
      // Keep Brief tool_use blocks (renders with standard tool call chrome,
      // and must be in the list so buildMessageLookups can resolve tool results)
      if (block?.type === 'tool_use' && block.name && nameSet.has(block.name)) {
        if ('id' in block) {
          briefToolUseIDs.add((block as { id: string }).id);
        }
        return true;
      }
      return false;
    }
    if (msg.type === 'user') {
      if (block?.type === 'tool_result') {
        return block.tool_use_id !== undefined && briefToolUseIDs.has(block.tool_use_id);
      }
      // Real user input only — drop meta/tick messages.
      // v112: allow meta messages with matching origin (GP6 check)
      return !msg.isMeta || isMatchingOrigin(msg.origin);
    }
    if (msg.type === 'attachment') {
      // Human input drained mid-turn arrives as a queued_command attachment
      // (query.ts mid-chain drain → getQueuedCommandAttachments). Keep it —
      // it's what the user typed. commandMode === 'prompt' positively
      // identifies human-typed input; task-notification callers set
      // mode: 'task-notification' but not origin/isMeta, so the positive
      // commandMode check is required to exclude them.
      // v112: also allow attachments with matching origin
      const att = msg.attachment;
      return att?.type === 'queued_command' && att.commandMode === 'prompt' &&
        (isMatchingOrigin(att.origin) || !att.isMeta && att.origin === undefined);
    }
    return false;
  });
}

// TODO(lift): v112 uses GP6 for origin matching in filterForBriefTool.
// Exact predicate semantics not recovered from minified.
function isMatchingOrigin(origin: unknown): boolean {
  return false; // stub
}

/**
 * Full-transcript companion to filterForBriefTool. When the Brief tool is
 * in use, the model's text output is redundant with the SendUserMessage
 * content it wrote right after — drop the text so only the SendUserMessage
 * block shows. Tool calls and their results stay visible.
 *
 * Per-turn: only drops text in turns that actually called Brief. If the
 * model forgets, text still shows — otherwise the user would see nothing.
 */
export function dropTextInBriefTurns<T extends {
  type: string;
  isMeta?: boolean;
  message?: {
    content: Array<{
      type: string;
      name?: string;
    }>;
  };
}>(messages: T[], briefToolNames: string[]): T[] {
  const nameSet = new Set(briefToolNames);
  // First pass: find which turns (bounded by non-meta user messages) contain
  // a Brief tool_use. Tag each assistant text block with its turn index.
  const turnsWithBrief = new Set<number>();
  const textIndexToTurn: number[] = [];
  let turn = 0;
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i]!;
    const block = msg.message?.content[0];
    if (msg.type === 'user' && block?.type !== 'tool_result' && !msg.isMeta) {
      turn++;
      continue;
    }
    if (msg.type === 'assistant') {
      if (block?.type === 'text') {
        textIndexToTurn[i] = turn;
      } else if (block?.type === 'tool_use' && block.name && nameSet.has(block.name)) {
        turnsWithBrief.add(turn);
      }
    }
  }
  if (turnsWithBrief.size === 0) return messages;
  // Second pass: drop text blocks whose turn called Brief.
  return messages.filter((_, i) => {
    const t = textIndexToTurn[i];
    return t === undefined || !turnsWithBrief.has(t);
  });
}

type Props = {
  messages: MessageType[];
  tools: Tools;
  commands: Command[];
  verbose: boolean;
  toolJSX: {
    jsx: React.ReactNode | null;
    shouldHidePromptInput: boolean;
    shouldContinueAnimation?: true;
  } | null;
  toolUseConfirmQueue: ToolUseConfirm[];
  inProgressToolUseIDs: Set<string>;
  isMessageSelectorVisible: boolean;
  conversationId: string;
  screen: Screen;
  streamingToolUses: StreamingToolUse[];
  showAllInTranscript?: boolean;
  agentDefinitions?: AgentDefinitionsResult;
  onOpenRateLimitOptions?: () => void;
  /** Hide the logo/header - used for subagent zoom view */
  hideLogo?: boolean;
  isLoading: boolean;
  /** In transcript mode, hide all thinking blocks except the last one */
  hidePastThinking?: boolean;
  /** Streaming thinking content (live updates, not frozen) */
  streamingThinking?: StreamingThinking | null;
  /** Streaming text preview (rendered as last item so transition to final message is positionally seamless) */
  streamingText?: string | null;
  /** v112: show a thinking hint indicator */
  showThinkingHint?: boolean;
  /** When true, only show Brief tool output (hide everything else) */
  isBriefOnly?: boolean;
  /** Fullscreen-mode "─── N new ───" divider. Renders before the first
   *  renderableMessage derived from firstUnseenUuid (matched by the 24-char
   *  prefix that deriveUUID preserves). */
  unseenDivider?: UnseenDivider;
  /** Fullscreen-mode ScrollBox handle. Enables React-level virtualization when present. */
  scrollRef?: RefObject<ScrollBoxHandle | null>;
  /** Fullscreen-mode: enable sticky-prompt tracking (writes via ScrollChromeContext). */
  trackStickyPrompt?: boolean;
  /** Transcript search: jump-to-index + setSearchQuery/nextMatch/prevMatch. */
  jumpRef?: RefObject<JumpHandle | null>;
  /** Transcript search: fires when match count/position changes. */
  onSearchMatchesChange?: (count: number, current: number) => void;
  /** Paint an existing DOM subtree to fresh Screen, scan. Element comes
   *  from the main tree (all real providers). Message-relative positions. */
  scanElement?: (el: import('../ink/dom.js').DOMElement) => import('../ink/render-to-screen.js').MatchPosition[];
  /** Position-based CURRENT highlight. positions stable (msg-relative),
   *  rowOffset tracks scroll. null clears. */
  setPositions?: (state: {
    positions: import('../ink/render-to-screen.js').MatchPosition[];
    rowOffset: number;
    currentIdx: number;
  } | null) => void;
  /** Bypass MAX_MESSAGES_WITHOUT_VIRTUALIZATION. For one-shot headless renders
   *  (e.g. /export via renderToString) where the memory concern doesn't apply
   *  and the "already in scrollback" justification doesn't hold. */
  disableRenderCap?: boolean;
  /** In-transcript cursor; expanded overrides verbose for selected message. */
  cursor?: MessageActionsState | null;
  setCursor?: (cursor: MessageActionsState | null) => void;
  /** Passed through to VirtualMessageList (heightCache owns visibility). */
  cursorNavRef?: React.Ref<MessageActionsNav>;
  /** Render only collapsed.slice(start, end). For chunked headless export
   *  (streamRenderedMessages in exportRenderer.tsx): prep runs on the FULL
   *  messages array so grouping/lookups are correct, but only this slice
   *  chunk instead of the full session. The logo renders only for chunk 0
   *  (start === 0); later chunks are mid-stream continuations.
   *  Measured Mar 2026: 538-msg session, 20 slices → −55% plateau RSS. */
  renderRange?: readonly [start: number, end: number];
};

const MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE = 30;

// Safety cap for the non-virtualized render path (fullscreen off or
// explicitly disabled). Ink mounts a full fiber tree per message (~250 KB
// RSS each); yoga layout height grows unbounded; the screen buffer is sized
// to fit every line. At ~2000 messages this is ~3000-line screens, ~500 MB
// of fibers, and per-frame write costs that push the process into a GC
// death spiral (observed: 59 GB RSS, 14k mmap/munmap/sec). Content dropped
// from this slice has already been printed to terminal scrollback — users
// can still scroll up natively. VirtualMessageList (the default ant path)
// bypasses this cap entirely. Headless one-shot renders (e.g. /export)
// pass disableRenderCap to opt out — they have no scrollback and the
// memory concern doesn't apply to renderToString.
//
// The slice boundary is tracked as a UUID anchor, not a count-derived
// index. Count-based slicing (slice(-200)) drops one message from the
// front on every append, shifting scrollback content and forcing a full
// terminal reset per turn (CC-941). Quantizing to 50-message steps
// (CC-1154) helped but still shifted on compaction and collapse regrouping
// since those change collapsed.length without adding messages. The UUID
// anchor only advances when rendered count genuinely exceeds CAP+STEP —
// immune to length churn from grouping/compaction (CC-1174).
//
// The anchor stores BOTH uuid and index. Some uuids are unstable between
// renders: collapseHookSummaries derives the merged uuid from the first
// summary in a group, but reorderMessagesInUI reshuffles hook adjacency
// as tool results stream in, changing which summary is first. When the
// uuid vanishes, falling back to the stored index (clamped) keeps the
// slice roughly where it was instead of resetting to 0 — which would
// jump from ~200 rendered messages to the full history, orphaning
// in-progress badge snapshots in scrollback.
const MAX_MESSAGES_WITHOUT_VIRTUALIZATION = 200;
const MESSAGE_CAP_STEP = 50;

export type SliceAnchor = {
  uuid: string;
  idx: number;
} | null;

/** Exported for testing. Mutates anchorRef when the window needs to advance. */
export function computeSliceStart(
  collapsed: ReadonlyArray<{ uuid: string }>,
  anchorRef: { current: SliceAnchor },
  cap = MAX_MESSAGES_WITHOUT_VIRTUALIZATION,
  step = MESSAGE_CAP_STEP,
): number {
  const anchor = anchorRef.current;
  // v112: fast-path check using stored idx before findIndex
  const anchorIdx = anchor
    ? collapsed[anchor.idx]?.uuid === anchor.uuid
      ? anchor.idx
      : collapsed.findIndex(m => m.uuid === anchor.uuid)
    : -1;
  // Anchor found → use it. Anchor lost → fall back to stored index
  // (clamped) so collapse-regrouping uuid churn doesn't reset to 0.
  let start = anchorIdx >= 0
    ? anchorIdx
    : anchor
      ? Math.min(anchor.idx, Math.max(0, collapsed.length - cap))
      : 0;
  if (collapsed.length - start > cap + step) {
    start = collapsed.length - cap;
  }
  // Refresh anchor from whatever lives at the current start — heals a
  // stale uuid after fallback and captures a new one after advancement.
  const msgAtStart = collapsed[start];
  if (msgAtStart && (anchor?.uuid !== msgAtStart.uuid || anchor.idx !== start)) {
    anchorRef.current = { uuid: msgAtStart.uuid, idx: start };
  } else if (!msgAtStart && anchor) {
    anchorRef.current = null;
  }
  return start;
}

// TODO(lift): v112 uses jQY(rows) to compute a row-based cap instead of
// the constant MAX_MESSAGES_WITHOUT_VIRTUALIZATION. Exact formula not
// recovered from minified.
function computeRowBasedCap(_rows: number): number {
  return MAX_MESSAGES_WITHOUT_VIRTUALIZATION;
}

// TODO(lift): v112 uses aP(messages, includeSnipped) for normalize+filter.
// This may be a combined normalizeMessages+isNotEmptyMessage helper.
function normalizeAndFilter(messages: MessageType[]): ReturnType<typeof normalizeMessages> {
  return normalizeMessages(messages).filter(isNotEmptyMessage);
}

const MessagesImpl = ({
  messages,
  tools,
  commands,
  verbose,
  toolJSX,
  toolUseConfirmQueue,
  inProgressToolUseIDs,
  isMessageSelectorVisible,
  conversationId,
  screen,
  streamingToolUses,
  showAllInTranscript = false,
  agentDefinitions,
  onOpenRateLimitOptions,
  hideLogo = false,
  isLoading,
  hidePastThinking = false,
  streamingThinking,
  streamingText,
  showThinkingHint = false,
  isBriefOnly = false,
  unseenDivider,
  scrollRef,
  trackStickyPrompt,
  jumpRef,
  onSearchMatchesChange,
  scanElement,
  setPositions,
  disableRenderCap = false,
  cursor = null,
  setCursor,
  cursorNavRef,
  renderRange
}: Props): React.ReactNode => {
  const { columns, rows } = useTerminalSize();
  const toggleShowAllShortcut = useShortcutDisplay('transcript:toggleShowAll', 'Transcript', 'Ctrl+E');

  // v112: disableVirtualScroll moved earlier; also briefTranscript state
  const disableVirtualScroll = useMemo(() => isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL), []);
  // TODO(lift): v112 uses M8((g8)=>g8.briefTranscript) — verify store selector
  const briefTranscript = false; // stub
  // TODO(lift): v112 uses H9() — likely useStore() or similar; verify
  const store = null; // stub

  const normalizedMessages = useMemo(() => normalizeAndFilter(messages), [messages]);

  // Check if streaming thinking should be visible (streaming or within 30s timeout)
  const isStreamingThinkingVisible = useMemo(() => {
    if (!streamingThinking) return false;
    if (streamingThinking.isStreaming) return true;
    if (streamingThinking.streamingEndedAt) {
      return Date.now() - streamingThinking.streamingEndedAt < 30000;
    }
    return false;
  }, [streamingThinking]);

  // Find the last thinking block (message UUID + content index) for hiding past thinking in transcript mode
  const lastThinkingBlockId = useMemo(() => {
    if (!hidePastThinking) return null;
    if (isStreamingThinkingVisible) return 'streaming';
    for (let i = normalizedMessages.length - 1; i >= 0; i--) {
      const msg = normalizedMessages[i];
      if (msg?.type === 'assistant') {
        const content = msg.message.content;
        for (let j = content.length - 1; j >= 0; j--) {
          if (content[j]?.type === 'thinking') {
            return `${msg.uuid}:${j}`;
          }
        }
      } else if (msg?.type === 'user') {
        const hasToolResult = msg.message.content.some(block => block.type === 'tool_result');
        if (!hasToolResult) {
          return 'no-thinking';
        }
      }
    }
    return null;
  }, [normalizedMessages, hidePastThinking, isStreamingThinkingVisible]);

  // Find the latest user bash output message (from ! commands)
  const latestBashOutputUUID = useMemo(() => {
    for (let i = normalizedMessages.length - 1; i >= 0; i--) {
      const msg = normalizedMessages[i];
      if (msg?.type === 'user') {
        const content = msg.message.content;
        for (const block of content) {
          if (block.type === 'text') {
            const text = block.text;
            if (text.startsWith('<bash-stdout') || text.startsWith('<bash-stderr')) {
              return msg.uuid;
            }
          }
        }
      }
    }
    return null;
  }, [normalizedMessages]);

  // v112: deduplicate streaming tool uses
  const normalizedToolUseIDs = useMemo(() => getToolUseIDs(normalizedMessages), [normalizedMessages]);
  const streamingToolUsesWithoutInProgress = useMemo(() => {
    const seen = new Set<string>();
    return streamingToolUses.filter(stu => {
      if (inProgressToolUseIDs.has(stu.contentBlock.id)) return false;
      if (normalizedToolUseIDs.has(stu.contentBlock.id)) return false;
      if (seen.has(stu.contentBlock.id)) return false;
      seen.add(stu.contentBlock.id);
      return true;
    });
  }, [streamingToolUses, inProgressToolUseIDs, normalizedToolUseIDs]);

  const syntheticStreamingToolUseMessages = useMemo(() => streamingToolUsesWithoutInProgress.flatMap(streamingToolUse => {
    const msg = createAssistantMessage({ content: [streamingToolUse.contentBlock] });
    msg.uuid = deriveUUID(streamingToolUse.contentBlock.id as UUID, 0);
    return normalizeMessages([msg]);
  }), [streamingToolUsesWithoutInProgress]);

  const isTranscriptMode = screen === 'transcript';
  const virtualScrollRuntimeGate = scrollRef != null && !disableVirtualScroll;
  const shouldTruncate = isTranscriptMode && !showAllInTranscript && !virtualScrollRuntimeGate;

  // v112: row-based cap instead of constant
  const rowBasedCap = computeRowBasedCap(rows);

  // v112: dual anchor refs for input messages vs collapsed messages
  const sliceAnchorRef = useRef<SliceAnchor>(null);
  const collapsedAnchorRef = useRef<SliceAnchor>(null);

  // v112: null memo workaround
  const nullMemo = useMemo(() => null, [messages, false]);

  // Expensive message transforms — filter, reorder, group, collapse, lookups.
  const {
    collapsed: collapsed_0,
    lookups: lookups_0,
    hasTruncatedMessages: hasTruncatedMessages_0,
    hiddenMessageCount: hiddenMessageCount_0
  } = useMemo(() => {
    const compactAwareMessages = verbose || isFullscreenEnvEnabled()
      ? normalizedMessages
      : getMessagesAfterCompactBoundary(normalizedMessages, { includeSnipped: true });
    const messagesToShowNotTruncated = reorderMessagesInUI(
      compactAwareMessages
        .filter((msg): msg is Exclude<NormalizedMessage, ProgressMessageType> => msg.type !== 'progress')
        .filter(msg => !isNullRenderingAttachment(msg))
        .filter(_ => shouldShowUserMessage(_, isTranscriptMode)),
      syntheticStreamingToolUseMessages
    );

    const briefToolNames = [BRIEF_TOOL_NAME, SEND_USER_FILE_TOOL_NAME].filter((n): n is string => n !== null);
    const dropTextToolNames = [BRIEF_TOOL_NAME].filter((n): n is string => n !== null);
    const briefFiltered = briefToolNames.length > 0 && !isTranscriptMode
      ? isBriefOnly
        ? filterForBriefTool(messagesToShowNotTruncated, briefToolNames)
        : dropTextToolNames.length > 0
          ? dropTextInBriefTurns(messagesToShowNotTruncated, dropTextToolNames)
          : messagesToShowNotTruncated
      : messagesToShowNotTruncated;

    const messagesToShow = shouldTruncate
      ? briefFiltered.slice(-MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE)
      : briefFiltered;
    const hasTruncatedMessages = shouldTruncate && briefFiltered.length > MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE;

    const { messages: groupedMessages } = applyGrouping(messagesToShow, tools, verbose);
    const collapsed = collapseBackgroundBashNotifications(
      collapseHookSummaries(
        collapseTeammateShutdowns(
          collapseReadSearchGroups(groupedMessages, tools)
        )
      ),
      verbose
    );

    // v112: brief transcript tool stats overlay
    // TODO(lift): rRK function not recovered from minified
    const collapsedWithStats = collapsed;

    const lookups = buildMessageLookups(normalizedMessages, messagesToShow);
    // v112: hiddenMessageCount uses messagesToShowNotTruncated length (bugfix)
    const hiddenMessageCount = messagesToShowNotTruncated.length - MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE;
    return {
      collapsed: collapsedWithStats,
      lookups,
      hasTruncatedMessages,
      hiddenMessageCount
    };
  }, [verbose, normalizedMessages, isTranscriptMode, syntheticStreamingToolUseMessages, shouldTruncate, tools, isBriefOnly]);

  // Cheap slice — only runs when scroll range or slice config changes.
  const renderableMessages = useMemo(() => {
    const capApplies = !virtualScrollRuntimeGate && !disableRenderCap;
    // v112: uses row-based cap and dual anchors
    const sliceStart = capApplies ? computeSliceStart(collapsed_0, collapsedAnchorRef, rowBasedCap) : 0;
    return renderRange
      ? collapsed_0.slice(renderRange[0], renderRange[1])
      : sliceStart > 0
        ? collapsed_0.slice(sliceStart)
        : collapsed_0;
  }, [collapsed_0, renderRange, virtualScrollRuntimeGate, disableRenderCap, rowBasedCap]);

  const streamingToolUseIDs = useMemo(() => new Set(streamingToolUses.map(stu => stu.contentBlock.id)), [streamingToolUses]);

  // v112: unused null memo
  const _nullMemo2 = useMemo(() => null, [renderableMessages, nullMemo]);

  const dividerBeforeIndex = useMemo(() => {
    if (!unseenDivider) return -1;
    const prefix = unseenDivider.firstUnseenUuid.slice(0, 24);
    return renderableMessages.findIndex(m => m.uuid.slice(0, 24) === prefix);
  }, [unseenDivider, renderableMessages]);

  const selectedIdx = useMemo(() => {
    if (!cursor) return -1;
    return renderableMessages.findIndex(m => m.uuid === cursor.uuid);
  }, [cursor, renderableMessages]);

  const [expandedKeys, setExpandedKeys] = useState<ReadonlySet<string>>(() => new Set());
  const onItemClick = useCallback((msg: RenderableMessage) => {
    const k = expandKey(msg);
    setExpandedKeys(prev => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k); else next.add(k);
      return next;
    });
  }, []);
  const isItemExpanded = useCallback((msg: RenderableMessage) => expandedKeys.size > 0 && expandedKeys.has(expandKey(msg)), [expandedKeys]);

  const lookupsRef = useRef(lookups_0);
  lookupsRef.current = lookups_0;
  const columnsRef = useRef(columns);
  columnsRef.current = columns;

  const isItemClickable = useCallback((msg: RenderableMessage): boolean => {
    if (msg.type === 'collapsed_read_search') return true;
    if (msg.type === 'assistant') {
      const b = msg.message.content[0] as unknown as AdvisorBlock | undefined;
      return b != null && isAdvisorBlock(b) && b.type === 'advisor_tool_result' && b.content.type === 'advisor_result';
    }
    if (msg.type !== 'user') return false;
    const b = msg.message.content[0];
    if (b?.type !== 'tool_result' || b.is_error || !msg.toolUseResult) return false;
    const name = lookupsRef.current.toolUseByToolUseID.get(b.tool_use_id)?.name;
    const tool = name ? findToolByName(tools, name) : undefined;
    // v112: passes columns to isResultTruncated
    return tool?.isResultTruncated?.(msg.toolUseResult as never, { columns: columnsRef.current }) ?? false;
  }, [tools]);

  const canAnimate = (!toolJSX || !!toolJSX.shouldContinueAnimation) && !toolUseConfirmQueue.length && !isMessageSelectorVisible;
  const hasToolsInProgress = inProgressToolUseIDs.size > 0;

  const { progress } = useTerminalNotification();
  const prevProgressState = useRef<string | null>(null);
  const progressEnabled = getGlobalConfig().terminalProgressBarEnabled && !getIsRemoteMode() && !(proactiveModule?.isProactiveActive() ?? false);
  useEffect(() => {
    const state = progressEnabled ? hasToolsInProgress ? 'indeterminate' : 'completed' : null;
    if (prevProgressState.current === state) return;
    prevProgressState.current = state;
    progress(state);
  }, [progress, progressEnabled, hasToolsInProgress]);
  useEffect(() => {
    return () => progress(null);
  }, [progress]);

  const messageKey = useCallback((msg: RenderableMessage) => `${msg.uuid}-${conversationId}`, [conversationId]);

  const renderMessageRow = (msg: RenderableMessage, index: number) => {
    const prevType = index > 0 ? renderableMessages[index - 1]?.type : undefined;
    const isUserContinuation = msg.type === 'user' && prevType === 'user';
    const hasContentAfter = msg.type === 'collapsed_read_search' &&
      (!!streamingText || hasContentAfterIndex(renderableMessages, index, tools, streamingToolUseIDs));
    const k = messageKey(msg);
    const row = <MessageRow
      key={k}
      message={msg}
      isUserContinuation={isUserContinuation}
      hasContentAfter={hasContentAfter}
      tools={tools}
      commands={commands}
      verbose={verbose || isItemExpanded(msg) || cursor?.expanded === true && index === selectedIdx}
      inProgressToolUseIDs={inProgressToolUseIDs}
      streamingToolUseIDs={streamingToolUseIDs}
      screen={screen}
      canAnimate={canAnimate}
      onOpenRateLimitOptions={onOpenRateLimitOptions}
      lastThinkingBlockId={lastThinkingBlockId}
      latestBashOutputUUID={latestBashOutputUUID}
      columns={columns}
      isLoading={isLoading}
      lookups={lookups_0}
    />;

    const wrapped = <MessageActionsSelectedContext.Provider key={k} value={index === selectedIdx}>
      {row}
    </MessageActionsSelectedContext.Provider>;
    if (unseenDivider && index === dividerBeforeIndex) {
      return [
        <Box key="unseen-divider" marginTop={1}>
          <Divider title={`${unseenDivider.count} new ${plural(unseenDivider.count, 'message')}`} width={columns} color="inactive" />
        </Box>,
        wrapped
      ];
    }
    return wrapped;
  };

  const searchTextCache = useRef(new WeakMap<RenderableMessage, string>());
  const extractSearchText = useCallback((msg: RenderableMessage): string => {
    const cached = searchTextCache.current.get(msg);
    if (cached !== undefined) return cached;
    let text = renderableSearchText(msg);
    if (msg.type === 'user' && msg.toolUseResult && Array.isArray(msg.message.content)) {
      const tr = msg.message.content.find(b => b.type === 'tool_result');
      if (tr && 'tool_use_id' in tr) {
        const tu = lookups_0.toolUseByToolUseID.get(tr.tool_use_id);
        const tool = tu && findToolByName(tools, tu.name);
        const extracted = tool?.extractSearchText?.(msg.toolUseResult as never);
        if (extracted !== undefined) text = extracted;
      }
    }
    const lowered = text.toLowerCase();
    searchTextCache.current.set(msg, lowered);
    return lowered;
  }, [tools, lookups_0]);

  return <>
    {/* Logo */}
    {!hideLogo && !(renderRange && renderRange[0] > 0) && <LogoHeader agentDefinitions={agentDefinitions} />}

    {/* Truncation indicator */}
    {hasTruncatedMessages_0 && <Divider title={`${toggleShowAllShortcut} to show ${chalk.bold(hiddenMessageCount_0)} previous messages`} width={columns} />}

    {/* Show all indicator */}
    {isTranscriptMode && showAllInTranscript && hiddenMessageCount_0 > 0 && !disableRenderCap &&
      <Divider title={`${toggleShowAllShortcut} to hide ${chalk.bold(hiddenMessageCount_0)} previous messages`} width={columns} />}

    {/* Messages */}
    {virtualScrollRuntimeGate
      ? <InVirtualListContext.Provider value={true}>
        <VirtualMessageList
          messages={renderableMessages}
          scrollRef={scrollRef}
          columns={columns}
          itemKey={messageKey}
          renderItem={renderMessageRow}
          onItemClick={onItemClick}
          isItemClickable={isItemClickable}
          isItemExpanded={isItemExpanded}
          trackStickyPrompt={trackStickyPrompt}
          selectedIndex={selectedIdx >= 0 ? selectedIdx : undefined}
          cursorNavRef={cursorNavRef}
          setCursor={setCursor}
          jumpRef={jumpRef}
          onSearchMatchesChange={onSearchMatchesChange}
          scanElement={scanElement}
          setPositions={setPositions}
          extractSearchText={extractSearchText}
        />
      </InVirtualListContext.Provider>
      : renderableMessages.flatMap(renderMessageRow)}

    {/* v112: thinking hint */}
    {showThinkingHint && <ShowThinkingHint isLoading={isLoading} />}

    {/* Streaming text */}
    {streamingText && !isBriefOnly && <Box alignItems="flex-start" flexDirection="row" marginTop={1} width="100%">
      <Box flexDirection="row">
        <Box minWidth={2}>
          <Text color="text">{BLACK_CIRCLE}</Text>
        </Box>
        <Box flexDirection="column">
          <StreamingMarkdown>{streamingText}</StreamingMarkdown>
        </Box>
      </Box>
    </Box>}

    {/* Streaming thinking */}
    {isStreamingThinkingVisible && streamingThinking && !isBriefOnly && <Box marginTop={1}>
      <AssistantThinkingMessage param={{ type: 'thinking', thinking: streamingThinking.thinking }} addMargin={false} isTranscriptMode={true} verbose={verbose} hideInTranscript={false} />
    </Box>}
  </>;
};

/** Key for click-to-expand: tool_use_id where available (so tool_use + its
 *  tool_result expand together), else uuid for groups/thinking. */
function expandKey(msg: RenderableMessage): string {
  return (msg.type === 'assistant' || msg.type === 'user' ? getToolUseID(msg) : null) ?? msg.uuid;
}

function setsEqual<T>(a: Set<T>, b: Set<T>): boolean {
  if (a.size !== b.size) return false;
  for (const item of a) {
    if (!b.has(item)) return false;
  }
  return true;
}

export const Messages = React.memo(MessagesImpl, (prev, next) => {
  const keys = Object.keys(prev) as (keyof typeof prev)[];
  for (const key of keys) {
    if (key === 'onOpenRateLimitOptions' || key === 'scrollRef' || key === 'trackStickyPrompt' || key === 'setCursor' || key === 'cursorNavRef' || key === 'jumpRef' || key === 'onSearchMatchesChange' || key === 'scanElement' || key === 'setPositions') continue;
    if (prev[key] !== next[key]) {
      if (key === 'streamingToolUses') {
        const p = prev.streamingToolUses;
        const n = next.streamingToolUses;
        if (p.length === n.length && p.every((item, i) => item.contentBlock === n[i]?.contentBlock)) {
          continue;
        }
      }
      if (key === 'inProgressToolUseIDs') {
        if (setsEqual(prev.inProgressToolUseIDs, next.inProgressToolUseIDs)) {
          continue;
        }
      }
      if (key === 'unseenDivider') {
        const p = prev.unseenDivider;
        const n = next.unseenDivider;
        if (p?.firstUnseenUuid === n?.firstUnseenUuid && p?.count === n?.count) {
          continue;
        }
      }
      if (key === 'tools') {
        const p = prev.tools;
        const n = next.tools;
        if (p.length === n.length && p.every((tool, i) => tool.name === n[i]?.name)) {
          continue;
        }
      }
      return false;
    }
  }
  return true;
});

export function shouldRenderStatically(
  message: RenderableMessage,
  streamingToolUseIDs: Set<string>,
  inProgressToolUseIDs: Set<string>,
  siblingToolUseIDs: ReadonlySet<string>,
  screen: Screen,
  lookups: ReturnType<typeof buildMessageLookups>
): boolean {
  if (screen === 'transcript') {
    return true;
  }
  switch (message.type) {
    case 'attachment':
    case 'user':
    case 'assistant': {
      if (message.type === 'assistant') {
        const block = message.message.content[0];
        if (block?.type === 'server_tool_use') {
          return lookups.resolvedToolUseIDs.has(block.id);
        }
      }
      const toolUseID = getToolUseID(message);
      if (!toolUseID) {
        return true;
      }
      if (streamingToolUseIDs.has(toolUseID)) {
        return false;
      }
      if (inProgressToolUseIDs.has(toolUseID)) {
        return false;
      }
      if (hasUnresolvedHooksFromLookup(toolUseID, 'PostToolUse', lookups)) {
        return false;
      }
      return every(siblingToolUseIDs, lookups.resolvedToolUseIDs);
    }
    case 'system': {
      return message.subtype !== 'api_error';
    }
    case 'grouped_tool_use': {
      const allResolved = message.messages.every(msg => {
        const content = msg.message.content[0];
        return content?.type === 'tool_use' && lookups.resolvedToolUseIDs.has(content.id);
      });
      return allResolved;
    }
    case 'collapsed_read_search': {
      return false;
    }
  }
}

// TODO(lift): v112 component JcK — ShowThinkingHint. Exact props/implementation
// not recovered from minified.
function ShowThinkingHint(_props: { isLoading: boolean }): React.ReactNode {
  return null;
}

// TODO(lift): feature() is used for conditional imports but not imported in v88.
// v112 may have changed the import pattern.
function feature(_name: string): boolean {
  return false;
}
