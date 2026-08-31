// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,Nv,W}from"./chunk-30zk17wm.js";import{Be}from"./chunk-7s3c5qqq.js";var r=new J(()=>Be());function i(){return r.of(W().host)}var A0e=Nv(i);function xmt(e){return{setMode(n){A0e.emit({kind:"agent-mode",agentId:e,mode:n})},setRetryStatus(n){A0e.emit({kind:"agent-retry-status",agentId:e,retryStatus:n})},setTurnEffort(n,t=null){A0e.emit({kind:"agent-turn-effort",agentId:e,turnEffort:n,turnModel:t})}}}var Ajt={setSpinnerMessage(e){A0e.emit({kind:"main-message",message:e})},setSpinnerColors(e,n){A0e.emit({kind:"main-colors",color:e,shimmerColor:n})}};
export{A0e,xmt,Ajt};
