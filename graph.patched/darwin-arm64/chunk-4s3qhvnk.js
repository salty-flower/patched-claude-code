// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{hIn}from"./chunk-zhtwayh2.js";import{Le}from"./chunk-fkz3e4t3.js";import{ja}from"./chunk-rpg2kszv.js";var o={notice:null,shownLoggedForDraftId:null,promptedCount:0,sessionDraftCount:0,seededFromDisk:!1,seedStarted:!1,toolCallCount:0};class n{autoDenyPresence=Le();mainLoopBusy=ja({busy:!1});blockingToolProgress=ja({active:!1});dialogHostUnmounted=ja({unmounted:!1});onScreenBlockingDialog=ja({surfaceMounted:!1,kind:null});pendingSurveyFeedbackSource=null;terminalFocus="unknown";terminalFocusGainedAt=Number.NEGATIVE_INFINITY;terminalFocusChanged=Le();feedbackNotice=ja(o);clawdEntranceTaken=!1;startupUpdateSummary=void 0;experimentEnrollmentsUnseen=void 0;orgMemoryWritesRowSeen=!1;orgMemoryReadRowSeen=!1;remoteHomeSettingsRowSeen=!1}var zs=new n;function Thn(e){if(e)zs.terminalFocusGainedAt=Date.now();zs.terminalFocus=e?"focused":"blurred",hIn(e),zs.terminalFocusChanged.emit()}function qne(){return zs.terminalFocus!=="blurred"}function xI(){return zs.terminalFocus}function Y8n(){return zs.terminalFocusGainedAt}function S3(e){return zs.terminalFocusChanged.subscribe(e)}
export{zs,Thn,qne,xI,Y8n,S3};
