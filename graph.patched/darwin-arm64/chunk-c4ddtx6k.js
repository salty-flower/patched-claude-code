// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{K,yCe}from"./chunk-xzypj06m.js";import{qIe,qft,CBe,Kft,Yft}from"./chunk-h07kk1k6.js";import{EF}from"./chunk-1kmjytm1.js";import{cV,e3e,JRt,WRe,tG,OS}from"./chunk-996thspe.js";import{C2n}from"./chunk-p7cgc2rk.js";import{u8e}from"./chunk-drk88dg1.js";import{U$}from"./chunk-eq3jpjn9.js";import{Yyn}from"./chunk-c34twv9d.js";import{zye}from"./chunk-akw9sqj6.js";import{rBe}from"./chunk-wzvqhd4w.js";function MWt(e,o,t,i){U$("conversation_reset"),EF("conversation_reset"),OS(tG),Kft(),CBe(),qIe(),Yft(),qft(),u8e();let r=K();for(let s of rBe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),e3e(),e.markConversationRemote?.(),C2n(e.readFileState),cV(e.memorySelector),yCe(),WRe(o),Yyn(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:JRt(o)}),zye(!0)}
export{MWt};
