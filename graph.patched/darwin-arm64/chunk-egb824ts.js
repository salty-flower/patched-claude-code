// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{z,YSe}from"./chunk-a7cah040.js";import{Qhe,n5e,xTe,r5e,o5e}from"./chunk-gvckezfq.js";import{EH}from"./chunk-jfbsd9e8.js";import{xU,$De,Mme,dW,xb,Nst}from"./chunk-59zy4j10.js";import{pun}from"./chunk-6hf0xkkq.js";import{cFe}from"./chunk-4earbj0y.js";import{OO}from"./chunk-fzts3nq7.js";import{J2e}from"./chunk-vc7h0p3r.js";import{Moe}from"./chunk-54mfb9gt.js";import{nke}from"./chunk-1km7hqtn.js";function I_t(e,o,t,i){OO("conversation_reset"),EH("conversation_reset"),xb(dW),r5e(),xTe(),Qhe(),o5e(),n5e(),cFe();let r=z();for(let s of nke(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),$De(),e.markConversationRemote?.(),pun(e.readFileState,e.loadedNestedMemoryPaths),xU(e.memorySelector),YSe(),Mme(o),J2e.of(i).emit(r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:Nst(o)}),Moe(!0)}
export{I_t};
