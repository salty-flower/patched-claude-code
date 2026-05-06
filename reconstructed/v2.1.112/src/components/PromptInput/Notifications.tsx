import { feature } from 'bun:bundle';
import * as React from 'react';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { type Notification, useNotifications } from 'src/context/notifications.js';
import { logEvent } from 'src/services/analytics/index.js';
import { useAppState } from 'src/state/AppState.js';
import { useVoiceState } from '../../context/voice.js';
import type { VerificationStatus } from '../../hooks/useApiKeyVerification.js';
import { useIdeConnectionStatus } from '../../hooks/useIdeConnectionStatus.js';
import type { IDESelection } from '../../hooks/useIdeSelection.js';
import { useMainLoopModel } from '../../hooks/useMainLoopModel.js';
import { useVoiceEnabled } from '../../hooks/useVoiceEnabled.js';
import { Box, Text } from '../../ink.js';
import { useClaudeAiLimits } from '../../services/claudeAiLimitsHook.js';
import { calculateTokenWarningState } from '../../services/compact/autoCompact.js';
import type { MCPServerConnection } from '../../services/mcp/types.js';
import type { Message } from '../../types/message.js';
import { getApiKeyHelperElapsedMs, getConfiguredApiKeyHelper, getSubscriptionType } from '../../utils/auth.js';
import type { AutoUpdaterResult } from '../../utils/autoUpdater.js';
import { getExternalEditor } from '../../utils/editor.js';
import { isEnvTruthy } from '../../utils/envUtils.js';
import { formatDuration } from '../../utils/format.js';
import { setEnvHookNotifier } from '../../utils/hooks/fileChangedWatcher.js';
import { toIDEDisplayName } from '../../utils/ide.js';
import { getMessagesAfterCompactBoundary } from '../../utils/messages.js';
import { tokenCountFromLastAPIResponse } from '../../utils/tokens.js';
import { AutoUpdaterWrapper } from '../AutoUpdaterWrapper.js';
import { ConfigurableShortcutHint } from '../ConfigurableShortcutHint.js';
import { IdeStatusIndicator } from '../IdeStatusIndicator.js';
import { MemoryUsageIndicator } from '../MemoryUsageIndicator.js';
import { SentryErrorBoundary } from '../SentryErrorBoundary.js';
import { TokenWarning } from '../TokenWarning.js';
import { SandboxPromptFooterHint } from './SandboxPromptFooterHint.js';

/* eslint-disable @typescript-eslint/no-require-imports */
const VoiceIndicator: typeof import('./VoiceIndicator.js').VoiceIndicator = feature('VOICE_MODE') ? require('./VoiceIndicator.js').VoiceIndicator : () => null;
/* eslint-enable @typescript-eslint/no-require-imports */

export const FOOTER_TEMPORARY_STATUS_TIMEOUT = 5000;
type Props = {
  apiKeyStatus: VerificationStatus;
  debug: boolean;
  isAutoUpdating: boolean;
  verbose: boolean;
  messages: Message[];
  onChangeIsUpdating: (isUpdating: boolean) => void;
  ideSelection: IDESelection | undefined;
  mcpClients?: MCPServerConnection[];
  isInputWrapped?: boolean;
};
export function Notifications(t0) {
  const $ = _c(34);
  const {
    apiKeyStatus,
    debug,
    isAutoUpdating,
    verbose,
    messages,
    onChangeIsUpdating,
    ideSelection,
    mcpClients,
    isInputWrapped: t1,
  } = t0;
  const isInputWrapped = t1 === undefined ? false : t1;

  // v112: tokenUsage computed via useMemo + sI(H2(messages)) pattern
  const tokenUsage = useMemo(() => {
    const messagesForTokenCount = getMessagesAfterCompactBoundary(messages);
    return tokenCountFromLastAPIResponse(messagesForTokenCount);
  }, [messages]);

  const mainLoopModel = useMainLoopModel();
  const isShowingCompactMessage = calculateTokenWarningState(tokenUsage, mainLoopModel).isAboveWarningThreshold;

  const {
    status: ideStatus
  } = useIdeConnectionStatus(mcpClients);

  // v112: notifications from useAppState selector
  const notifications = useAppState(_temp);
  const {
    addNotification,
    removeNotification
  } = useNotifications();
  const claudeAiLimits = useClaudeAiLimits();

  // v112: env hook notifier effect (simplified from v88 compiler output)
  useEffect(() => {
    setEnvHookNotifier((text, isError) => {
      addNotification({
        key: "env-hook",
        text,
        color: isError ? "error" : undefined,
        priority: isError ? "medium" : "low",
        timeoutMs: isError ? 8000 : 5000
      });
    });
    return () => setEnvHookNotifier(null);
  }, [addNotification]);

  const shouldShowIdeSelection = ideStatus === "connected" && (ideSelection?.filePath || ideSelection?.text && ideSelection.lineCount > 0);

  // v112: autoUpdater props removed from Notifications; shouldShowAutoUpdater computed internally
  const autoUpdaterResult = useAppState(s => s.autoUpdaterResult);
  const shouldShowAutoUpdater = !(ideStatus === "connected" && (ideSelection?.filePath || ideSelection?.text && ideSelection.lineCount > 0)) || isAutoUpdating || autoUpdaterResult?.status !== "success";

  const isInOverageMode = claudeAiLimits.isUsingOverage;
  const subscriptionType = getSubscriptionType();
  const isTeamOrEnterprise = subscriptionType === "team" || subscriptionType === "enterprise";

  // v112: external editor hint
  const editor = getExternalEditor();
  const shouldShowExternalEditorHint = isInputWrapped && !isShowingCompactMessage && apiKeyStatus !== "invalid" && apiKeyStatus !== "missing" && editor !== undefined;

  useEffect(() => {
    if (shouldShowExternalEditorHint && editor) {
      logEvent("tengu_external_editor_hint_shown", {});
      addNotification({
        key: "external-editor-hint",
        jsx: <Text dimColor={true}><ConfigurableShortcutHint action="chat:externalEditor" context="Chat" fallback="ctrl+g" description={`edit in ${toIDEDisplayName(editor)}`} /></Text>,
        priority: "immediate",
        timeoutMs: 5000
      });
    } else {
      removeNotification("external-editor-hint");
    }
  }, [shouldShowExternalEditorHint, editor, addNotification, removeNotification]);

  // v112: token warning notification effect (moved from NotificationContent)
  const isBriefOnly = useAppState(s => s.isBriefOnly);
  useEffect(() => {
    if (isShowingCompactMessage && !isBriefOnly) {
      addNotification({
        key: "token-warning",
        jsx: <TokenWarning tokenUsage={tokenUsage} model={mainLoopModel} />,
        priority: "medium",
        timeoutMs: 18000000,
        fold: (a, b) => b,
      });
    } else {
      removeNotification("token-warning");
    }
  }, [isShowingCompactMessage, isBriefOnly, tokenUsage, mainLoopModel, addNotification, removeNotification]);

  const alignItems = "flex-end";

  let t13;
  if ($[15] !== apiKeyStatus || $[16] !== debug || $[17] !== ideSelection || $[18] !== isAutoUpdating || $[19] !== isShowingCompactMessage || $[20] !== mainLoopModel || $[21] !== mcpClients || $[22] !== notifications || $[23] !== isInOverageMode || $[24] !== isTeamOrEnterprise || $[25] !== tokenUsage || $[26] !== verbose) {
    t13 = <NotificationContent
      ideSelection={ideSelection}
      mcpClients={mcpClients}
      notifications={notifications}
      isInOverageMode={isInOverageMode}
      isTeamOrEnterprise={isTeamOrEnterprise}
      apiKeyStatus={apiKeyStatus}
      debug={debug}
      verbose={verbose}
      tokenUsage={tokenUsage}
      mainLoopModel={mainLoopModel}
      shouldShowAutoUpdater={shouldShowAutoUpdater}
      autoUpdaterResult={autoUpdaterResult}
      isAutoUpdating={isAutoUpdating}
      isShowingCompactMessage={isShowingCompactMessage}
      onChangeIsUpdating={onChangeIsUpdating}
    />;
    $[15] = apiKeyStatus;
    $[16] = debug;
    $[17] = ideSelection;
    $[18] = isAutoUpdating;
    $[19] = isShowingCompactMessage;
    $[20] = mainLoopModel;
    $[21] = mcpClients;
    $[22] = notifications;
    $[23] = isInOverageMode;
    $[24] = isTeamOrEnterprise;
    $[25] = tokenUsage;
    $[26] = verbose;
    $[27] = t13;
  } else {
    t13 = $[27];
  }

  let t14;
  if ($[28] !== alignItems || $[29] !== t13) {
    t14 = <SentryErrorBoundary><Box flexDirection="column" alignItems={alignItems} flexShrink={0} overflowX="hidden">{t13}</Box></SentryErrorBoundary>;
    $[28] = alignItems;
    $[29] = t13;
    $[30] = t14;
  } else {
    t14 = $[30];
  }
  return t14;
}

function _temp(s: { notifications: { current: Notification | null; queue: Notification[] } }) {
  return s.notifications;
}

function NotificationContent({
  ideSelection,
  mcpClients,
  notifications,
  isInOverageMode,
  isTeamOrEnterprise,
  apiKeyStatus,
  debug,
  verbose,
  tokenUsage,
  mainLoopModel,
  shouldShowAutoUpdater,
  autoUpdaterResult,
  isAutoUpdating,
  isShowingCompactMessage,
  onChangeIsUpdating,
}: {
  ideSelection: IDESelection | undefined;
  mcpClients?: MCPServerConnection[];
  notifications: {
    current: Notification | null;
    queue: Notification[];
  };
  isInOverageMode: boolean;
  isTeamOrEnterprise: boolean;
  apiKeyStatus: VerificationStatus;
  debug: boolean;
  verbose: boolean;
  tokenUsage: number;
  mainLoopModel: string;
  shouldShowAutoUpdater: boolean;
  autoUpdaterResult: AutoUpdaterResult | null;
  isAutoUpdating: boolean;
  isShowingCompactMessage: boolean;
  onChangeIsUpdating: (isUpdating: boolean) => void;
}): ReactNode {
  // v112: Pro-tier slow-apiKeyHelper polling (new in v112)
  const [apiKeyHelperSlow, setApiKeyHelperSlow] = useState<string | null>(null);
  useEffect(() => {
    if (getSubscriptionType() !== "pro" || !feature("tengu_amber_swift", false)) {
      setApiKeyHelperSlow(prev => prev === null ? prev : null);
      return;
    }
    const checkSlow = () => {
      const ms = getApiKeyHelperElapsedMs();
      const next = ms >= 10_000 ? formatDuration(ms) : null;
      setApiKeyHelperSlow(prev => next === prev ? prev : next);
    };
    checkSlow();
    const interval = setInterval(checkSlow, 30000);
    return () => clearInterval(interval);
  }, [tokenUsage]);

  // Poll apiKeyHelper inflight state to show slow-helper notice.
  // Gated on configuration — most users never set apiKeyHelper, so the
  // effect is a no-op for them (no interval allocated).
  const [legacyApiKeyHelperSlow, setLegacyApiKeyHelperSlow] = useState<string | null>(null);
  useEffect(() => {
    if (!getConfiguredApiKeyHelper()) return;
    const interval = setInterval((setSlow: React.Dispatch<React.SetStateAction<string | null>>) => {
      const ms = getApiKeyHelperElapsedMs();
      const next = ms >= 10_000 ? formatDuration(ms) : null;
      setSlow(prev => next === prev ? prev : next);
    }, 1000, setLegacyApiKeyHelperSlow);
    return () => clearInterval(interval);
  }, []);

  // Voice state (VOICE_MODE builds only, runtime-gated by GrowthBook)
  const voiceState = feature('VOICE_MODE') ?
    // biome-ignore lint/correctness/useHookAtTopLevel: feature() is a compile-time constant
    useVoiceState(s => s.voiceState) : 'idle' as const;
  // biome-ignore lint/correctness/useHookAtTopLevel: feature() is a compile-time constant
  const voiceEnabled = feature('VOICE_MODE') ? useVoiceEnabled() : false;
  const voiceError = feature('VOICE_MODE') ?
    // biome-ignore lint/correctness/useHookAtTopLevel: feature() is a compile-time constant
    useVoiceState(s_0 => s_0.voiceError) : null;

  // When voice is actively recording or processing, replace all
  // notifications with just the voice indicator.
  if (feature('VOICE_MODE') && voiceEnabled && (voiceState === 'recording' || voiceState === 'processing')) {
    return <VoiceIndicator voiceState={voiceState} />;
  }

  // v112: notification rendering moved before other indicators
  return <>
      <IdeStatusIndicator ideSelection={ideSelection} mcpClients={mcpClients} />
      {isInOverageMode && !isTeamOrEnterprise && <Box>
          <Text dimColor wrap="truncate">
            Now using extra usage
          </Text>
        </Box>}
      {legacyApiKeyHelperSlow && <Box>
          <Text color="warning" wrap="truncate">
            apiKeyHelper is taking a while{' '}
          </Text>
          <Text dimColor wrap="truncate">
            ({legacyApiKeyHelperSlow})
          </Text>
        </Box>}
      {(apiKeyStatus === 'invalid' || apiKeyStatus === 'missing') && <Box>
          <Text color="error" wrap="truncate">
            {isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) ? 'Authentication error · Try again' : 'Not logged in · Run /login'}
          </Text>
        </Box>}
      {debug && <Box>
          <Text color="warning" wrap="truncate">
            Debug mode
          </Text>
        </Box>}
      {apiKeyStatus !== 'invalid' && apiKeyStatus !== 'missing' && verbose && <Box>
          <Text dimColor wrap="truncate">
            {tokenUsage} tokens
          </Text>
        </Box>}
      {/* v112: pro-tier apiKeyHelper slow indicator */}
      {apiKeyHelperSlow && <Box>
          <Text dimColor wrap="truncate">
            {apiKeyHelperSlow}
          </Text>
        </Box>}
      {shouldShowAutoUpdater && <AutoUpdaterWrapper
        verbose={verbose}
        onAutoUpdaterResult={() => {}} // TODO: v112 uses internal dispatch
        autoUpdaterResult={autoUpdaterResult}
        isUpdating={isAutoUpdating}
        onChangeIsUpdating={onChangeIsUpdating}
        showSuccessMessage={!isShowingCompactMessage}
      />}
      {feature('VOICE_MODE') ? voiceEnabled && voiceError && <Box>
              <Text color="error" wrap="truncate">
                {voiceError}
              </Text>
            </Box> : null}
      <MemoryUsageIndicator />
      <SandboxPromptFooterHint />
      {/* v112: notifications.current rendered last */}
      {notifications.current && ('jsx' in notifications.current ? <Text wrap="truncate" key={notifications.current.key}>
            {notifications.current.jsx}
          </Text> : <Text color={notifications.current.color} dimColor={!notifications.current.color} wrap="truncate">
            {notifications.current.text}
          </Text>)}
    </>;
}
