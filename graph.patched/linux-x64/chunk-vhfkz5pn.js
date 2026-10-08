// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K,X_e}from"./chunk-g79wjybr.js";import{STe,Grt,ZDe,qrt,Vrt}from"./chunk-zq84ct3s.js";import{f0}from"./chunk-aqh2c7wz.js";import{Wz,dWe,zyt,vve,jV,Ow}from"./chunk-g263vvvn.js";import{MPn}from"./chunk-eqtqzzv6.js";import{eqe}from"./chunk-c54jw4xk.js";import{KL}from"./chunk-60xq8hs0.js";import{drn}from"./chunk-4nx3ebm5.js";import{xue}from"./chunk-3sd2nf8h.js";import{$De}from"./chunk-5jwwwj98.js";function kMt(e,o,t,i){KL("conversation_reset"),f0("conversation_reset"),Ow(jV),qrt(),ZDe(),STe(),Vrt(),Grt(),eqe();let r=K();for(let s of $De(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),dWe(),e.markConversationRemote?.(),MPn(e.readFileState),Wz(e.memorySelector),X_e(),vve(o),drn(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:zyt(o)}),xue(!0)}
export{kMt};
