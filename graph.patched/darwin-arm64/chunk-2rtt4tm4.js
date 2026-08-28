// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,KE,W}from"./chunk-g4zaymy2.js";import{$e}from"./chunk-vpkz5m05.js";var r=new K(()=>$e());function i(){return r.of(W().host)}var CIe=KE(i);function Eut(e){return{setMode(n){CIe.emit({kind:"agent-mode",agentId:e,mode:n})},setRetryStatus(n){CIe.emit({kind:"agent-retry-status",agentId:e,retryStatus:n})},setTurnEffort(n,t=null){CIe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:n,turnModel:t})}}}var WMt={setSpinnerMessage(e){CIe.emit({kind:"main-message",message:e})},setSpinnerColors(e,n){CIe.emit({kind:"main-colors",color:e,shimmerColor:n})}};
export{CIe,Eut,WMt};
