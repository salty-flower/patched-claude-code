// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Me}from"./chunk-8nra9hkj.js";import{RO,j}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";var r=new W(()=>Me());function i(){return r.of(j().host)}var b1e=RO(i);function CGn(e){return{setMode(t){b1e.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){b1e.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){b1e.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var RGn="Running SessionStart hooks\u2026",S1e={setSpinnerMessage(e){b1e.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){b1e.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{b1e,CGn,RGn,S1e};
