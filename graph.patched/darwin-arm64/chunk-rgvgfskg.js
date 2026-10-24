// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{He}from"./chunk-9s1z8ttt.js";import{DR,U}from"./chunk-ersar6wn.js";import{W}from"./chunk-3y73jbfr.js";var r=new W(()=>He());function i(){return r.of(U().host)}var Y2e=DR(i);function k4n(e){return{setMode(t){Y2e.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){Y2e.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){Y2e.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var C4n="Running SessionStart hooks\u2026",X2e={setSpinnerMessage(e){Y2e.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){Y2e.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{Y2e,k4n,C4n,X2e};
