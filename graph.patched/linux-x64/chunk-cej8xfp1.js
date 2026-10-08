// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Oe}from"./chunk-ndcqd6bh.js";import{rs}from"./chunk-qf3g3s52.js";import{We}from"./chunk-gwj7v27h.js";var t={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Oe();mainLoopBusy=rs({busy:!1});blockingToolProgress=rs({active:!1});dialogHostUnmounted=rs({unmounted:!1});onScreenBlockingDialog=rs({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Oe();feedbackNotice=rs(t);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1;configRowsSeen=new Set;configRowNotices=new Map}var sa=We(new n,(e)=>{e.configRowsSeen.clear(),e.configRowNotices.clear(),e.mainLoopBusy.setState((o)=>o.busy?{busy:!1}:o)});
export{sa};
