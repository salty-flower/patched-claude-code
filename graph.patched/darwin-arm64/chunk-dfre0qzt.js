// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{oFn}from"./chunk-cet8na02.js";import{Me}from"./chunk-3k7pa7mk.js";import{da}from"./chunk-n68c1hqr.js";var o={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Me();mainLoopBusy=da({busy:!1});blockingToolProgress=da({active:!1});dialogHostUnmounted=da({unmounted:!1});onScreenBlockingDialog=da({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Me();feedbackNotice=da(o);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1}var Ys=new n;function KEn(e){if(e)Ys.terminalFocusGainedAt=Date.now();Ys.terminalFocus=e?"focused":"blurred",oFn(e),Ys.terminalFocusChanged.emit()}function nse(){return Ys.terminalFocus!=="blurred"}function HP(){return Ys.terminalFocus}function Itr(){return Ys.terminalFocusGainedAt}function cV(e){return Ys.terminalFocusChanged.subscribe(e)}
export{Ys,KEn,nse,HP,Itr,cV};
