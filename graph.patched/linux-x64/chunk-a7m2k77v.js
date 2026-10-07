// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ie}from"./chunk-918t5khf.js";import{G,ox,F}from"./chunk-aywwjcwq.js";var r=new G(()=>Ie());function i(){return r.of(F().host)}var WIe=ox(i);function Awn(e){return{setMode(t){WIe.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){WIe.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){WIe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var Cwn="Running SessionStart hooks\u2026",zIe={setSpinnerMessage(e){WIe.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){WIe.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{WIe,Awn,Cwn,zIe};
