// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Me}from"./chunk-rs6p8dg3.js";import{iO,j}from"./chunk-eqmywwjn.js";import{G}from"./chunk-pzq28dp7.js";var r=new G(()=>Me());function i(){return r.of(j().host)}var CFe=iO(i);function F$n(e){return{setMode(t){CFe.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){CFe.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){CFe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var U$n="Running SessionStart hooks\u2026",RFe={setSpinnerMessage(e){CFe.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){CFe.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{CFe,F$n,U$n,RFe};
