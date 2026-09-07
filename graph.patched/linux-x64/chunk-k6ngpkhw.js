// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Oxn}from"./chunk-bj7g1p32.js";import{$e}from"./chunk-mnk1rjxv.js";import{ja}from"./chunk-j22dybre.js";var o={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=$e();mainLoopBusy=ja({busy:!1});blockingToolProgress=ja({active:!1});dialogHostUnmounted=ja({unmounted:!1});onScreenBlockingDialog=ja({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=$e();feedbackNotice=ja(o);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1}var Vs=new n;function Jgn(e){if(e)Vs.terminalFocusGainedAt=Date.now();Vs.terminalFocus=e?"focused":"blurred",Oxn(e),Vs.terminalFocusChanged.emit()}function Nne(){return Vs.terminalFocus!=="blurred"}function yL(){return Vs.terminalFocus}function _6n(){return Vs.terminalFocusGainedAt}function cV(e){return Vs.terminalFocusChanged.subscribe(e)}
export{Vs,Jgn,Nne,yL,_6n,cV};
