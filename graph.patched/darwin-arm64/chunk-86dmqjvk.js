// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Oe}from"./chunk-fdxhcr6b.js";import{q,WP,B}from"./chunk-4bw62nzm.js";var r=new q(()=>Oe());function i(){return r.of(B().host)}var $De=WP(i);function ZIn(e){return{setMode(t){$De.emit({kind:"agent-mode",agentId:e,mode:t})},setRetryStatus(t){$De.emit({kind:"agent-retry-status",agentId:e,retryStatus:t})},setTurnEffort(t,n=null){$De.emit({kind:"agent-turn-effort",agentId:e,turnEffort:t,turnModel:n})}}}var eOn="Running SessionStart hooks\u2026",UDe={setSpinnerMessage(e){$De.emit({kind:"main-message",message:e})},setSpinnerColors(e,t){$De.emit({kind:"main-colors",color:e,shimmerColor:t})}};
export{$De,ZIn,eOn,UDe};
