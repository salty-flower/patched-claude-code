// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{HUn}from"./chunk-sgyvc67j.js";import{Me}from"./chunk-8yfx63va.js";import{Ai}from"./chunk-afacp8ga.js";var o={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Me();mainLoopBusy=Ai({busy:!1});blockingToolProgress=Ai({active:!1});dialogHostUnmounted=Ai({unmounted:!1});onScreenBlockingDialog=Ai({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Me();feedbackNotice=Ai(o);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1}var ni=new n;function RCn(e){if(e)ni.terminalFocusGainedAt=Date.now();ni.terminalFocus=e?"focused":"blurred",HUn(e),ni.terminalFocusChanged.emit()}function Bse(){return ni.terminalFocus!=="blurred"}function VI(){return ni.terminalFocus}function Yor(){return ni.terminalFocusGainedAt}function IV(e){return ni.terminalFocusChanged.subscribe(e)}
export{ni,RCn,Bse,VI,Yor,IV};
