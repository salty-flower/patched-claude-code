// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{q,cTe}from"./chunk-eqmywwjn.js";import{HIe,vft,l1e,Eft,kft}from"./chunk-6hv6bqxx.js";import{w$}from"./chunk-qx925reg.js";import{tK,V4e,URt,LRe,zz,Ib}from"./chunk-38nf1dnm.js";import{azn}from"./chunk-0py9k5tb.js";import{o8e}from"./chunk-2bjbhv1t.js";import{HF}from"./chunk-wg0anxwe.js";import{Dyn}from"./chunk-zmgh7qt7.js";import{Uye}from"./chunk-1arm2mst.js";import{KBe}from"./chunk-6wcgd04f.js";function EWt(e,o,t,i){HF("conversation_reset"),w$("conversation_reset"),Ib(zz),Eft(),l1e(),HIe(),kft(),vft(),o8e();let r=q();for(let s of KBe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),V4e(),e.markConversationRemote?.(),azn(e.readFileState),tK(e.memorySelector),cTe(),LRe(o),Dyn(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:URt(o)}),Uye(!0)}
export{EWt};
