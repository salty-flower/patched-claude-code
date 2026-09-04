// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{bLn}from"./chunk-yhfssb7x.js";import{Be}from"./chunk-h4q6j5r2.js";import{rl}from"./chunk-19ykvtp4.js";var o={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Be();mainLoopBusy=rl({busy:!1});blockingToolProgress=rl({active:!1});dialogHostUnmounted=rl({unmounted:!1});onScreenBlockingDialog=rl({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Be();feedbackNotice=rl(o);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1}var os=new n;function ybn(e){if(e)os.terminalFocusGainedAt=Date.now();os.terminalFocus=e?"focused":"blurred",bLn(e),os.terminalFocusChanged.emit()}function woe(){return os.terminalFocus!=="blurred"}function W$(){return os.terminalFocus}function Ter(){return os.terminalFocusGainedAt}function TJ(e){return os.terminalFocusChanged.subscribe(e)}
export{os,ybn,woe,W$,Ter,TJ};
