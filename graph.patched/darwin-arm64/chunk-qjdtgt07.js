// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ie}from"./chunk-29aedz4e.js";import{$s}from"./chunk-2wnf6kz9.js";import{qe}from"./chunk-5qeme8w3.js";var t={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Ie();mainLoopBusy=$s({busy:!1});blockingToolProgress=$s({active:!1});dialogHostUnmounted=$s({unmounted:!1});onScreenBlockingDialog=$s({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Ie();feedbackNotice=$s(t);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1;configRowsSeen=new Set;configRowNotices=new Map}var Ji=qe(new n,(e)=>{e.configRowsSeen.clear(),e.configRowNotices.clear(),e.mainLoopBusy.setState((o)=>o.busy?{busy:!1}:o)});
export{Ji};
