// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{He}from"./chunk-3mdayxq0.js";import{dO,j}from"./chunk-xzypj06m.js";import{z}from"./chunk-r0a9v21k.js";var r=new z(()=>He());function i(){return r.of(j().host)}var H$e=dO(i);function WFn(e){return{setMode(t){H$e.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){H$e.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){H$e.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var GFn="Running SessionStart hooks\u2026",M$e={setSpinnerMessage(e){H$e.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){H$e.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{H$e,WFn,GFn,M$e};
