// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Oe}from"./chunk-ndcqd6bh.js";import{G,Rx,F}from"./chunk-g79wjybr.js";var r=new G(()=>Oe());function i(){return r.of(F().host)}var XMe=Rx(i);function fAn(e){return{setMode(t){XMe.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){XMe.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){XMe.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var mAn="Running SessionStart hooks\u2026",JMe={setSpinnerMessage(e){XMe.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){XMe.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{XMe,fAn,mAn,JMe};
