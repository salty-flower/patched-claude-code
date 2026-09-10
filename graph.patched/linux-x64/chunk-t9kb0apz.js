// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{sBn}from"./chunk-6n7yk222.js";import{Le}from"./chunk-d8qjp6nk.js";import{Ei}from"./chunk-cxhjnr5a.js";var o={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Le();mainLoopBusy=Ei({busy:!1});blockingToolProgress=Ei({active:!1});dialogHostUnmounted=Ei({unmounted:!1});onScreenBlockingDialog=Ei({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Le();feedbackNotice=Ei(o);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1}var ni=new n;function rAn(e){if(e)ni.terminalFocusGainedAt=Date.now();ni.terminalFocus=e?"focused":"blurred",sBn(e),ni.terminalFocusChanged.emit()}function Ose(){return ni.terminalFocus!=="blurred"}function D0(){return ni.terminalFocus}function _or(){return ni.terminalFocusGainedAt}function vK(e){return ni.terminalFocusChanged.subscribe(e)}
export{ni,rAn,Ose,D0,_or,vK};
