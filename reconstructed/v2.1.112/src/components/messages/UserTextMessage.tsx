import { feature } from 'bun:bundle';
import type { TextBlockParam } from '@anthropic-ai/sdk/resources/index.mjs';
import * as React from 'react';
import { NO_CONTENT_MESSAGE } from '../../constants/messages.js';
import { COMMAND_MESSAGE_TAG, LOCAL_COMMAND_CAVEAT_TAG, TASK_NOTIFICATION_TAG, TEAMMATE_MESSAGE_TAG, TICK_TAG } from '../../constants/xml.js';
import { isAgentSwarmsEnabled } from '../../utils/agentSwarmsEnabled.js';
import { extractTag, INTERRUPT_MESSAGE, INTERRUPT_MESSAGE_FOR_TOOL_USE } from '../../utils/messages.js';
import { InterruptedByUser } from '../InterruptedByUser.js';
import { MessageResponse } from '../MessageResponse.js';
import { UserAgentNotificationMessage } from './UserAgentNotificationMessage.js';
import { UserBashInputMessage } from './UserBashInputMessage.js';
import { UserBashOutputMessage } from './UserBashOutputMessage.js';
import { UserCommandMessage } from './UserCommandMessage.js';
import { UserLocalCommandOutputMessage } from './UserLocalCommandOutputMessage.js';
import { UserMemoryInputMessage } from './UserMemoryInputMessage.js';
import { UserPlanMessage } from './UserPlanMessage.js';
import { UserPromptMessage } from './UserPromptMessage.js';
import { UserResourceUpdateMessage } from './UserResourceUpdateMessage.js';
import { UserTeammateMessage } from './UserTeammateMessage.js';
type Props = {
  addMargin: boolean;
  param: TextBlockParam;
  verbose: boolean;
  planContent?: string;
  isTranscriptMode?: boolean;
  timestamp?: string;
};
export function UserTextMessage(t0) {
  const {
    addMargin,
    param,
    verbose,
    planContent,
    isTranscriptMode,
    timestamp
  } = t0;
  if (param.text.trim() === NO_CONTENT_MESSAGE) {
    return null;
  }
  if (planContent) {
    let t1;

t1 = <UserPlanMessage addMargin={addMargin} planContent={planContent} />;
    return t1;
  }
  if (extractTag(param.text, TICK_TAG)) {
    return null;
  }
  if (param.text.includes(`<${LOCAL_COMMAND_CAVEAT_TAG}>`)) {
    return null;
  }
  if (param.text.startsWith("<bash-stdout") || param.text.startsWith("<bash-stderr")) {
    let t1;

t1 = <UserBashOutputMessage content={param.text} verbose={verbose} />;
    return t1;
  }
  if (param.text.startsWith("<local-command-stdout") || param.text.startsWith("<local-command-stderr")) {
    let t1;

t1 = <UserLocalCommandOutputMessage content={param.text} />;
    return t1;
  }
  if (param.text === INTERRUPT_MESSAGE || param.text === INTERRUPT_MESSAGE_FOR_TOOL_USE) {
    let t1;
    t1 = <MessageResponse height={1}><InterruptedByUser /></MessageResponse>;
    return t1;
  }
  if (feature("KAIROS_GITHUB_WEBHOOKS")) {
    if (param.text.startsWith("<github-webhook-activity>")) {
      let t1;
      t1 = require("./UserGitHubWebhookMessage.js");
      const {
        UserGitHubWebhookMessage
      } = t1 as typeof import('./UserGitHubWebhookMessage.js');
      let t2;

t2 = <UserGitHubWebhookMessage addMargin={addMargin} param={param} />;
      return t2;
    
}
  if (param.text.includes("<bash-input>")) {
    let t1;

t1 = <UserBashInputMessage addMargin={addMargin} param={param} />;
    return t1;
  }
  if (param.text.includes(`<${COMMAND_MESSAGE_TAG}>`)) {
    let t1;

t1 = <UserCommandMessage addMargin={addMargin} param={param} />;
    return t1;
  }
  if (param.text.includes("<user-memory-input>")) {
    let t1;

t1 = <UserMemoryInputMessage addMargin={addMargin} text={param.text} />;
    return t1;
  }
  if (isAgentSwarmsEnabled() && param.text.includes(`<${TEAMMATE_MESSAGE_TAG}`)) {
    let t1;

t1 = <UserTeammateMessage addMargin={addMargin} param={param} isTranscriptMode={isTranscriptMode} />;
    return t1;
  }
  if (param.text.includes(`<${TASK_NOTIFICATION_TAG}`)) {
    let t1;

t1 = <UserAgentNotificationMessage addMargin={addMargin} param={param} />;
    return t1;
  }
  if (param.text.includes("<mcp-resource-update") || param.text.includes("<mcp-polling-update")) {
    let t1;

t1 = <UserResourceUpdateMessage addMargin={addMargin} param={param} />;
    return t1;
  }
  if (feature("FORK_SUBAGENT")) {
    if (param.text.includes("<fork-boilerplate>")) {
      let t1;
      t1 = require("./UserForkBoilerplateMessage.js");
      const {
        UserForkBoilerplateMessage
      } = t1 as typeof import('./UserForkBoilerplateMessage.js');
      let t2;

t2 = <UserForkBoilerplateMessage addMargin={addMargin} param={param} />;
      return t2;
    }
  }
  if (feature("UDS_INBOX")) {
    if (param.text.includes("<cross-session-message")) {
      let t1;
      t1 = require("./UserCrossSessionMessage.js");
      const {
        UserCrossSessionMessage
      } = t1 as typeof import('./UserCrossSessionMessage.js');
      let t2;
      t2 = <UserCrossSessionMessage addMargin={addMargin} param={param} />;
      return t2;
    }
  }
  if (feature("KAIROS") || feature("KAIROS_CHANNELS")) {
    if (param.text.includes("<channel source=\"")) {
      let t1;
      t1 = require("./UserChannelMessage.js");
      const {
        UserChannelMessage
      } = t1 as typeof import('./UserChannelMessage.js');
      let t2;
      t2 = <UserChannelMessage addMargin={addMargin} param={param} />;
      return t2;
    }
  }
  let t1;
  t1 = <UserPromptMessage addMargin={addMargin} param={param} isTranscriptMode={isTranscriptMode} timestamp={timestamp} />;
  return t1;
}
}
