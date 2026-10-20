// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{He}from"./chunk-bjnpzyk4.js";import{OO,j}from"./chunk-kpqr86hf.js";import{W}from"./chunk-cne7d53x.js";var r=new W(()=>He());function i(){return r.of(j().host)}var RBe=OO(i);function G2n(e){return{setMode(t){RBe.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){RBe.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){RBe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var z2n="Running SessionStart hooks\u2026",xBe={setSpinnerMessage(e){RBe.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){RBe.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{RBe,G2n,z2n,xBe};
