// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ie}from"./chunk-29aedz4e.js";import{z,ax,F}from"./chunk-8mvda08c.js";var r=new z(()=>Ie());function i(){return r.of(F().host)}var JIe=ax(i);function Ywn(e){return{setMode(t){JIe.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){JIe.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){JIe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var Xwn="Running SessionStart hooks\u2026",QIe={setSpinnerMessage(e){JIe.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){JIe.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{JIe,Ywn,Xwn,QIe};
