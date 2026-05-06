import { c as _c } from "react/compiler-runtime";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, logEvent } from 'src/services/analytics/index.js';
import { installOAuthTokens } from '../cli/handlers/auth.js';
import { useTerminalSize } from '../hooks/useTerminalSize.js';
import { setClipboard } from '../ink/termio/osc.js';
import { useTerminalNotification } from '../ink/useTerminalNotification.js';
import { Box, Link, Text } from '../ink.js';
import { useKeybinding } from '../keybindings/useKeybinding.js';
import { getSSLErrorHint } from '../services/api/errorUtils.js';
import { sendNotification } from '../services/notifier.js';
import { OAuthService } from '../services/oauth/index.js';
import { getOauthAccountInfo, validateForceLoginOrg } from '../utils/auth.js';
import { logError } from '../utils/log.js';
import { getSettings_DEPRECATED } from '../utils/settings/settings.js';
import { Select } from './CustomSelect/select.js';
import { KeyboardShortcutHint } from './design-system/KeyboardShortcutHint.js';
import { Spinner } from './Spinner.js';
import TextInput from './TextInput.js';
type Props = {
  onDone(): void;
  startingMessage?: string;
  mode?: 'login' | 'setup-token';
  forceLoginMethod?: 'claudeai' | 'console';
  urlOutdent?: number;
};
type OAuthStatus = {
  state: 'idle';
} // Initial state, waiting to select login method
| {
  state: 'platform_setup';
} // Show platform setup info (Bedrock/Vertex/Foundry)
| {
  state: 'ready_to_start';
} // Flow started, waiting for browser to open
| {
  state: 'waiting_for_login';
  url: string;
} // Browser opened, waiting for user to login
| {
  state: 'creating_api_key';
} // Got access token, creating API key
| {
  state: 'about_to_retry';
  nextState: OAuthStatus;
} | {
  state: 'success';
  token?: string;
} | {
  state: 'error';
  message: string;
  toRetry?: OAuthStatus;
} | {
  state: 'bedrock_wizard';
} | {
  state: 'bedrock_done';
  message: string;
} | {
  state: 'vertex_wizard';
} | {
  state: 'vertex_done';
  message: string;
};
const PASTE_HERE_MSG = 'Paste code here if prompted > ';
export function ConsoleOAuthFlow({
  onDone,
  startingMessage,
  mode = 'login',
  forceLoginMethod: forceLoginMethodProp,
  urlOutdent = 0
}: Props): React.ReactNode {
  const urlOutdentTotal = (isBun() ? 4 : 0) + urlOutdent;
  const settings = getSettings_DEPRECATED() || {};
  const forceLoginMethod = forceLoginMethodProp ?? settings.forceLoginMethod;
  const orgUUID = typeof settings.forceLoginOrgUUID === 'string' ? settings.forceLoginOrgUUID : void 0;
  const forcedMethodMessage = forceLoginMethod === 'claudeai' ? 'Login method pre-selected: Subscription Plan (Claude Pro/Max)' : forceLoginMethod === 'console' ? 'Login method pre-selected: API Usage Billing (Anthropic Console)' : null;
  const terminal = useTerminalNotification();
  const [oauthStatus, setOAuthStatus] = useState<OAuthStatus>(() => {
    if (mode === 'setup-token') {
      return {
        state: 'ready_to_start'
      };
    }
    if (forceLoginMethod === 'claudeai' || forceLoginMethod === 'console') {
      return {
        state: 'ready_to_start'
      };
    }
    return {
      state: 'idle'
    };
  });
  const [pastedCode, setPastedCode] = useState('');
  const [cursorOffset, setCursorOffset] = useState(0);
  const [oauthService] = useState(() => new OAuthService());
  const [loginWithClaudeAi, setLoginWithClaudeAi] = useState(() => {
    return mode === 'setup-token' || forceLoginMethod === 'claudeai';
  });
  const [showPastePrompt, setShowPastePrompt] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);
  const textInputColumns = useTerminalSize().columns - PASTE_HERE_MSG.length - 1;

  // Log forced login method on mount
  useEffect(() => {
    if (forceLoginMethod === 'claudeai') {
      logEvent('tengu_oauth_claudeai_forced', {});
    } else if (forceLoginMethod === 'console') {
      logEvent('tengu_oauth_console_forced', {});
    }
  }, [forceLoginMethod]);

  // Retry logic
  useEffect(() => {
    if (oauthStatus.state === 'about_to_retry') {
      const timer = setTimeout(setOAuthStatus, 1000, oauthStatus.nextState);
      return () => clearTimeout(timer);
    }
  }, [oauthStatus]);

  // Handle Enter to continue on success state
  useKeybinding('confirm:yes', () => {
    logEvent('tengu_oauth_success', {
      loginWithClaudeAi
    });
    onDone();
  }, {
    context: 'Confirmation',
    isActive: oauthStatus.state === 'success' && mode !== 'setup-token'
  });

  // Handle Enter to restart after bedrock/vertex done
  useKeybinding('confirm:yes', () => {
    saveGlobalConfig((S) => ({
      ...S,
      hasCompletedOnboarding: true,
      lastOnboardingVersion: {
        ISSUES_EXPLAINER: 'report the issue at https://github.com/anthropics/claude-code/issues',
        PACKAGE_URL: '@anthropic-ai/claude-code',
        README_URL: 'https://code.claude.com/docs/en/overview',
        VERSION: '2.1.112',
        FEEDBACK_CHANNEL: 'https://github.com/anthropics/claude-code/issues',
        BUILD_TIME: '2026-04-16T18:33:19Z'
      }.VERSION
    }));
    terminal.exit();
    Promise.resolve().then(() => (bC6(), d48)).then((S) => S.execRelaunch());
  }, {
    context: 'Confirmation',
    isActive: oauthStatus.state === 'bedrock_done' || oauthStatus.state === 'vertex_done'
  });

  // Handle Enter to retry on error state
  useKeybinding('confirm:yes', () => {
    if (oauthStatus.state === 'error' && oauthStatus.toRetry) {
      setPastedCode('');
      setOAuthStatus({
        state: 'about_to_retry',
        nextState: oauthStatus.toRetry
      });
    }
  }, {
    context: 'Confirmation',
    isActive: oauthStatus.state === 'error' && !!oauthStatus.toRetry
  });

  useEffect(() => {
    if (pastedCode === 'c' && oauthStatus.state === 'waiting_for_login' && showPastePrompt && !urlCopied) {
      void setClipboard(oauthStatus.url).then((raw) => {
        if (raw) process.stdout.write(raw);
        setUrlCopied(true);
        setTimeout(setUrlCopied, 2000, false);
      });
      setPastedCode('');
    }
  }, [pastedCode, oauthStatus, showPastePrompt, urlCopied]);

  async function handleSubmitCode(value: string, url: string) {
    try {
      const [authorizationCode, state] = value.split('#');
      if (!authorizationCode || !state) {
        setOAuthStatus({
          state: 'error',
          message: 'Invalid code. Please make sure the full code was copied',
          toRetry: {
            state: 'waiting_for_login',
            url
          }
        });
        return;
      }
      logEvent('tengu_oauth_manual_entry', {});
      oauthService.handleManualAuthCodeInput({
        authorizationCode,
        state
      });
    } catch (err: unknown) {
      logError(err);
      setOAuthStatus({
        state: 'error',
        message: (err as Error).message,
        toRetry: {
          state: 'waiting_for_login',
          url
        }
      });
    }
  }

  const startOAuth = useCallback(async () => {
    try {
      logEvent('tengu_oauth_flow_start', {
        loginWithClaudeAi
      });
      const result = await oauthService.startOAuthFlow(async (url_0) => {
        setOAuthStatus({
          state: 'waiting_for_login',
          url: url_0
        });
        setTimeout(setShowPastePrompt, 3000, true);
      }, {
        loginWithClaudeAi,
        inferenceOnly: mode === 'setup-token',
        expiresIn: mode === 'setup-token' ? 31536000 : void 0,
        orgUUID
      }).catch((err_1) => {
        const isTokenExchangeError = err_1.message.includes('Token exchange failed');
        const sslHint_0 = getSSLErrorHint(err_1);
        setOAuthStatus({
          state: 'error',
          message: sslHint_0 ?? (isTokenExchangeError ? 'Failed to exchange authorization code for access token. Please try again.' : err_1.message),
          toRetry: mode === 'setup-token' ? {
            state: 'ready_to_start'
          } : {
            state: 'idle'
          }
        });
        logEvent('tengu_oauth_token_exchange_error', {
          error: err_1.message,
          ssl_error: sslHint_0 !== null
        });
        throw err_1;
      });
      if (mode === 'setup-token') {
        setOAuthStatus({
          state: 'success',
          token: result.accessToken
        });
      } else {
        await installOAuthTokens(result);
        const orgResult = await validateForceLoginOrg();
        if (!orgResult.valid) {
          throw new Error(orgResult.message);
        }
        setOAuthStatus({
          state: 'success'
        });
        void sendNotification({
          message: 'Claude Code login successful',
          notificationType: 'auth_success'
        }, terminal);
      }
    } catch (err_0) {
      const errorMessage = (err_0 as Error).message;
      const sslHint = getSSLErrorHint(err_0);
      setOAuthStatus({
        state: 'error',
        message: sslHint ?? errorMessage,
        toRetry: {
          state: mode === 'setup-token' ? 'ready_to_start' : 'idle'
        }
      });
      logEvent('tengu_oauth_error', {
        error: errorMessage as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
        ssl_error: sslHint !== null
      });
    }
  }, [oauthService, setShowPastePrompt, loginWithClaudeAi, mode, orgUUID]);

  const pendingOAuthStartRef = useRef(false);
  useEffect(() => {
    if (oauthStatus.state === 'ready_to_start' && !pendingOAuthStartRef.current) {
      pendingOAuthStartRef.current = true;
      process.nextTick((startOAuth_0, pendingOAuthStartRef_0) => {
        startOAuth_0().finally(() => {
          pendingOAuthStartRef_0.current = false;
        });
      }, startOAuth, pendingOAuthStartRef);
    }
  }, [oauthStatus.state, startOAuth]);

  // Auto-exit for setup-token mode
  useEffect(() => {
    if (mode === 'setup-token' && oauthStatus.state === 'success') {
      const timer_0 = setTimeout((loginWithClaudeAi_0, onDone_0) => {
        logEvent('tengu_oauth_success', {
          loginWithClaudeAi: loginWithClaudeAi_0
        });
        onDone_0();
      }, 500, loginWithClaudeAi, onDone);
      return () => clearTimeout(timer_0);
    }
  }, [mode, oauthStatus, loginWithClaudeAi, onDone]);

  // Cleanup OAuth service when component unmounts
  useEffect(() => {
    return () => {
      oauthService.cleanup();
    };
  }, [oauthService]);

  return <Box flexDirection="column" gap={1}>
      {oauthStatus.state === 'waiting_for_login' && showPastePrompt && <Box flexDirection="column" key="urlToCopy" gap={1} paddingBottom={1}>
          <Box paddingX={1}>
            <Text dimColor>
              Browser didn&apos;t open? Use the url below to sign in{' '}
            </Text>
            {urlCopied ? <Text color="success">(Copied!)</Text> : <Text dimColor>
                <KeyboardShortcutHint chord="c" action="copy" parens />
              </Text>}
          </Box>
          <Box marginX={urlOutdentTotal ? -urlOutdentTotal : void 0}>
            <Link url={oauthStatus.url}>
              <Text dimColor>{oauthStatus.url}</Text>
            </Link>
          </Box>
        </Box>}
      {mode === 'setup-token' && oauthStatus.state === 'success' && oauthStatus.token && <Box key="tokenOutput" flexDirection="column" gap={1} paddingTop={1}>
            <Text color="success">
              ✓ Long-lived authentication token created successfully!
            </Text>
            <Box flexDirection="column" gap={1}>
              <Text>Your OAuth token (valid for 1 year):</Text>
              <Text color="warning">{oauthStatus.token}</Text>
              <Text dimColor>
                Store this token securely. You won&apos;t be able to see it
                again.
              </Text>
              <Text dimColor>
                Use this token by setting: export
                CLAUDE_CODE_OAUTH_TOKEN=&lt;token&gt;
              </Text>
            </Box>
          </Box>}
      <Box paddingLeft={1} flexDirection="column" gap={1}>
        <OAuthStatusMessage oauthStatus={oauthStatus} mode={mode} startingMessage={startingMessage} forcedMethodMessage={forcedMethodMessage} showPastePrompt={showPastePrompt} pastedCode={pastedCode} setPastedCode={setPastedCode} cursorOffset={cursorOffset} setCursorOffset={setCursorOffset} textInputColumns={textInputColumns} handleSubmitCode={handleSubmitCode} setOAuthStatus={setOAuthStatus} setLoginWithClaudeAi={setLoginWithClaudeAi} />
      </Box>
    </Box>;
}

type OAuthStatusMessageProps = {
  oauthStatus: OAuthStatus;
  mode: 'login' | 'setup-token';
  startingMessage: string | undefined;
  forcedMethodMessage: string | null;
  showPastePrompt: boolean;
  pastedCode: string;
  setPastedCode: (value: string) => void;
  cursorOffset: number;
  setCursorOffset: (offset: number) => void;
  textInputColumns: number;
  handleSubmitCode: (value: string, url: string) => void;
  setOAuthStatus: (status: OAuthStatus) => void;
  setLoginWithClaudeAi: (value: boolean) => void;
};

function OAuthStatusMessage(t0) {
  const $ = _c(61);
  const {
    oauthStatus,
    mode,
    startingMessage,
    forcedMethodMessage,
    showPastePrompt,
    pastedCode,
    setPastedCode,
    cursorOffset,
    setCursorOffset,
    textInputColumns,
    handleSubmitCode,
    setOAuthStatus,
    setLoginWithClaudeAi
  } = t0;
  switch (oauthStatus.state) {
    case "idle":
      {
        const W = startingMessage ? startingMessage : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
        let D;
        if ($[0] !== W) {
          D = <Text bold={true}>{W}</Text>;
          $[0] = W;
          $[1] = D;
        } else {
          D = $[1];
        }
        let Z;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
          Z = <Text>Select login method:</Text>;
          $[2] = Z;
        } else {
          Z = $[2];
        }
        let G;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
          G = {
            label: <Text>Claude account with subscription ·{" "}<Text dimColor={true}>Pro, Max, Team, or Enterprise</Text></Text>,
            value: "claudeai"
          };
          $[3] = G;
        } else {
          G = $[3];
        }
        let f;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
          f = {
            label: <Text>Anthropic Console account ·{" "}<Text dimColor={true}>API usage billing</Text></Text>,
            value: "console"
          };
          $[4] = f;
        } else {
          f = $[4];
        }
        let v;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
          v = [G, f, {
            label: <Text>3rd-party platform ·{" "}<Text dimColor={true}>Amazon Bedrock, Microsoft Foundry, or Vertex AI</Text></Text>,
            value: "platform"
          }];
          $[5] = v;
        } else {
          v = $[5];
        }
        let V;
        if ($[6] !== setLoginWithClaudeAi || $[7] !== setOAuthStatus) {
          V = <Box><Select options={v} onChange={(N) => {
              if (N === "platform") {
                logEvent("tengu_oauth_platform_selected", {});
                setOAuthStatus({
                  state: "platform_setup"
                });
              } else {
                setOAuthStatus({
                  state: "ready_to_start"
                });
                if (N === "claudeai") {
                  logEvent("tengu_oauth_claudeai_selected", {});
                  setLoginWithClaudeAi(true);
                } else {
                  logEvent("tengu_oauth_console_selected", {});
                  setLoginWithClaudeAi(false);
                }
              }
            }} /></Box>;
          $[6] = setLoginWithClaudeAi;
          $[7] = setOAuthStatus;
          $[8] = V;
        } else {
          V = $[8];
        }
        let k;
        if ($[9] !== D || $[10] !== V) {
          k = <Box flexDirection="column" gap={1} marginTop={1}>{D}{Z}{V}</Box>;
          $[9] = D;
          $[10] = V;
          $[11] = k;
        } else {
          k = $[11];
        }
        return k;
      }
    case "platform_setup":
      {
        let W;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
          W = <Text bold={true}>Using 3rd-party platforms</Text>;
          $[12] = W;
        } else {
          W = $[12];
        }
        let D;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
          D = {
            label: <Text>Amazon Bedrock · <Text dimColor={true}>interactive setup</Text></Text>,
            value: "bedrock"
          };
          $[13] = D;
        } else {
          D = $[13];
        }
        let Z;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
          Z = {
            label: <Text>Microsoft Foundry · <Text dimColor={true}>opens docs</Text></Text>,
            value: "foundry"
          };
          $[14] = Z;
        } else {
          Z = $[14];
        }
        let G;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
          G = [D, Z, {
            label: <Text>Google Vertex AI · <Text dimColor={true}>interactive setup</Text></Text>,
            value: "vertex"
          }, {
            label: "Go back",
            value: "back"
          }];
          $[15] = G;
        } else {
          G = $[15];
        }
        let f;
        if ($[16] !== setOAuthStatus) {
          f = <Select options={G} onChange={(k) => {
              q: switch (k) {
                case "bedrock": {
                  logEvent("tengu_oauth_bedrock_wizard_launched", {});
                  setOAuthStatus({
                    state: "bedrock_wizard"
                  });
                  break q;
                }
                case "foundry": {
                  logEvent("tengu_oauth_platform_docs_opened", {
                    platform: "foundry"
                  });
                  openURL("https://code.claude.com/docs/en/microsoft-foundry");
                  setOAuthStatus({
                    state: "idle"
                  });
                  break q;
                }
                case "vertex": {
                  logEvent("tengu_oauth_vertex_wizard_launched", {});
                  setOAuthStatus({
                    state: "vertex_wizard"
                  });
                  break q;
                }
                default:
                  setOAuthStatus({
                    state: "idle"
                  });
              }
            }} onCancel={() => setOAuthStatus({
              state: "idle"
            })} />;
          $[16] = setOAuthStatus;
          $[17] = f;
        } else {
          f = $[17];
        }
        let v;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
          v = <Text dimColor={true}>Foundry: <Link url="https://code.claude.com/docs/en/microsoft-foundry">https://code.claude.com/docs/en/microsoft-foundry</Link></Text>;
          $[18] = v;
        } else {
          v = $[18];
        }
        let V;
        if ($[19] !== f) {
          V = <Box flexDirection="column" gap={1} marginTop={1}>{W}{f}{v}</Box>;
          $[19] = f;
          $[20] = V;
        } else {
          V = $[20];
        }
        return V;
      }
    case "bedrock_wizard":
      {
        let W;
        if ($[21] !== setOAuthStatus) {
          W = <BedrockWizard onComplete={(D) => setOAuthStatus({
              state: "bedrock_done",
              message: D
            })} onCancel={() => setOAuthStatus({
              state: "platform_setup"
            })} />;
          $[21] = setOAuthStatus;
          $[22] = W;
        } else {
          W = $[22];
        }
        return W;
      }
    case "bedrock_done":
    case "vertex_done":
      {
        let W;
        if ($[23] !== oauthStatus.message) {
          W = <Text color="success">{oauthStatus.message}</Text>;
          $[23] = oauthStatus.message;
          $[24] = W;
        } else {
          W = $[24];
        }
        let D;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
          D = <Text dimColor={true}>Press <Text bold={true}>Enter</Text> to restart Claude Code.</Text>;
          $[25] = D;
        } else {
          D = $[25];
        }
        let Z;
        if ($[26] !== W) {
          Z = <Box flexDirection="column" gap={1} marginTop={1}>{W}{D}</Box>;
          $[26] = W;
          $[27] = Z;
        } else {
          Z = $[27];
        }
        return Z;
      }
    case "vertex_wizard":
      {
        let W;
        if ($[28] !== setOAuthStatus) {
          W = <VertexWizard onComplete={(D) => setOAuthStatus({
              state: "vertex_done",
              message: D
            })} onCancel={() => setOAuthStatus({
              state: "platform_setup"
            })} />;
          $[28] = setOAuthStatus;
          $[29] = W;
        } else {
          W = $[29];
        }
        return W;
      }
    case "waiting_for_login":
      {
        let W;
        if ($[30] !== forcedMethodMessage) {
          W = forcedMethodMessage && <Box><Text dimColor={true}>{forcedMethodMessage}</Text></Box>;
          $[30] = forcedMethodMessage;
          $[31] = W;
        } else {
          W = $[31];
        }
        let D;
        if ($[32] !== showPastePrompt) {
          D = !showPastePrompt && <Box><Spinner /><Text>Opening browser to sign in…</Text></Box>;
          $[32] = showPastePrompt;
          $[33] = D;
        } else {
          D = $[33];
        }
        let Z;
        if ($[34] !== cursorOffset || $[35] !== handleSubmitCode || $[36] !== oauthStatus.url || $[37] !== pastedCode || $[38] !== setCursorOffset || $[39] !== setPastedCode || $[40] !== showPastePrompt || $[41] !== textInputColumns) {
          Z = showPastePrompt && <Box><Text>{PASTE_HERE_MSG}</Text><TextInput value={pastedCode} onChange={setPastedCode} onSubmit={(f) => handleSubmitCode(f, oauthStatus.url)} cursorOffset={cursorOffset} onChangeCursorOffset={setCursorOffset} columns={textInputColumns} mask="*" /></Box>;
          $[34] = cursorOffset;
          $[35] = handleSubmitCode;
          $[36] = oauthStatus.url;
          $[37] = pastedCode;
          $[38] = setCursorOffset;
          $[39] = setPastedCode;
          $[40] = showPastePrompt;
          $[41] = textInputColumns;
          $[42] = Z;
        } else {
          Z = $[42];
        }
        let G;
        if ($[43] !== W || $[44] !== D || $[45] !== Z) {
          G = <Box flexDirection="column" gap={1}>{W}{D}{Z}</Box>;
          $[43] = W;
          $[44] = D;
          $[45] = Z;
          $[46] = G;
        } else {
          G = $[46];
        }
        return G;
      }
    case "creating_api_key":
      {
        let W;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
          W = <Box flexDirection="column" gap={1}><Box><Spinner /><Text>Creating API key for Claude Code…</Text></Box></Box>;
          $[47] = W;
        } else {
          W = $[47];
        }
        return W;
      }
    case "about_to_retry":
      {
        let W;
        if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
          W = <Box flexDirection="column" gap={1}><Text color="permission">Retrying…</Text></Box>;
          $[48] = W;
        } else {
          W = $[48];
        }
        return W;
      }
    case "success":
      {
        let W;
        if ($[49] !== mode || $[50] !== oauthStatus.token) {
          W = mode === "setup-token" && oauthStatus.token ? null : <>{getOauthAccountInfo()?.emailAddress ? <Text dimColor={true}>Logged in as{" "}<Text>{getOauthAccountInfo()?.emailAddress}</Text></Text> : null}<Text color="success">Login successful. Press <Text bold={true}>Enter</Text> to continue…</Text></>;
          $[49] = mode;
          $[50] = oauthStatus.token;
          $[51] = W;
        } else {
          W = $[51];
        }
        let D;
        if ($[52] !== W) {
          D = <Box flexDirection="column">{W}</Box>;
          $[52] = W;
          $[53] = D;
        } else {
          D = $[53];
        }
        return D;
      }
    case "error":
      {
        let W;
        if ($[54] !== oauthStatus.message) {
          W = <Text color="error">OAuth error: {oauthStatus.message}</Text>;
          $[54] = oauthStatus.message;
          $[55] = W;
        } else {
          W = $[55];
        }
        let D;
        if ($[56] !== oauthStatus.toRetry) {
          D = oauthStatus.toRetry && <Box marginTop={1}><Text color="permission">Press <Text bold={true}>Enter</Text> to retry.</Text></Box>;
          $[56] = oauthStatus.toRetry;
          $[57] = D;
        } else {
          D = $[57];
        }
        let Z;
        if ($[58] !== W || $[59] !== D) {
          Z = <Box flexDirection="column" gap={1}>{W}{D}</Box>;
          $[58] = W;
          $[59] = D;
          $[60] = Z;
        } else {
          Z = $[60];
        }
        return Z;
      }
    default:
      {
        return null;
      }
  }
}
