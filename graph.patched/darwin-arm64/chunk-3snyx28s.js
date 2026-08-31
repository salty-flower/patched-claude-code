// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,BC,G}from"./chunk-38213y7h.js";import{Ue}from"./chunk-5b2g0bc6.js";var r=new J(()=>Ue());function i(){return r.of(G().host)}var vDe=BC(i);function Imt(e){return{setMode(n){vDe.emit({kind:"agent-mode",agentId:e,mode:n})},setRetryStatus(n){vDe.emit({kind:"agent-retry-status",agentId:e,retryStatus:n})},setTurnEffort(n,t=null){vDe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:n,turnModel:t})}}}var b2t={setSpinnerMessage(e){vDe.emit({kind:"main-message",message:e})},setSpinnerColors(e,n){vDe.emit({kind:"main-colors",color:e,shimmerColor:n})}};
export{vDe,Imt,b2t};
