// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,qA,z}from"./chunk-2vv5hpw3.js";import{Ne}from"./chunk-gqqx2ybk.js";var r=new K(()=>Ne());function i(){return r.of(z().host)}var xIe=qA(i);function Vut(e){return{setMode(n){xIe.emit({kind:"agent-mode",agentId:e,mode:n})},setRetryStatus(n){xIe.emit({kind:"agent-retry-status",agentId:e,retryStatus:n})},setTurnEffort(n,t=null){xIe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:n,turnModel:t})}}}var f1t={setSpinnerMessage(e){xIe.emit({kind:"main-message",message:e})},setSpinnerColors(e,n){xIe.emit({kind:"main-colors",color:e,shimmerColor:n})}};
export{xIe,Vut,f1t};
