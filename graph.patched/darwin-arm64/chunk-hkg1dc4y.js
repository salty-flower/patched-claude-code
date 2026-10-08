// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Oe}from"./chunk-63vja5td.js";import{z,Ix,F}from"./chunk-vd0a9d2s.js";var r=new z(()=>Oe());function i(){return r.of(F().host)}var sHe=Ix(i);function kAn(e){return{setMode(t){sHe.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){sHe.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){sHe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var CAn="Running SessionStart hooks\u2026",iHe={setSpinnerMessage(e){sHe.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){sHe.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{sHe,kAn,CAn,iHe};
