// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{SPn}from"./chunk-hdbxv3pp.js";import{Be}from"./chunk-5e3knf27.js";import{Ja}from"./chunk-he4p48dc.js";var o={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Be();mainLoopBusy=Ja({busy:!1});blockingToolProgress=Ja({active:!1});dialogHostUnmounted=Ja({unmounted:!1});onScreenBlockingDialog=Ja({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Be();feedbackNotice=Ja(o);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1}var rs=new n;function cbn(e){if(e)rs.terminalFocusGainedAt=Date.now();rs.terminalFocus=e?"focused":"blurred",SPn(e),rs.terminalFocusChanged.emit()}function loe(){return rs.terminalFocus!=="blurred"}function M$(){return rs.terminalFocus}function ler(){return rs.terminalFocusGainedAt}function gJ(e){return rs.terminalFocusChanged.subscribe(e)}
export{rs,cbn,loe,M$,ler,gJ};
