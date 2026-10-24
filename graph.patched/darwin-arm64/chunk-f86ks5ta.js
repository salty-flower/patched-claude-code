// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{V,Wxe}from"./chunk-ersar6wn.js";import{FDe,Pwt,T6e,Iwt,Owt}from"./chunk-bxg8d6dd.js";import{vU}from"./chunk-7pf88165.js";import{iXn}from"./chunk-w8x996zn.js";import{Zq,NXe,DLt,xMe,q6,D_}from"./chunk-31gxg38t.js";import{jZe}from"./chunk-zw7phs3y.js";import{uB}from"./chunk-v6a4kxre.js";import{Pxn}from"./chunk-njy6ye5w.js";import{nEe}from"./chunk-k00kepx1.js";import{l6e}from"./chunk-w16mfxd9.js";function X5t(e,o,t,i){uB("conversation_reset"),vU("conversation_reset"),D_(q6),Iwt(),T6e(),FDe(),Owt(),Pwt(),jZe();let r=V();for(let s of l6e(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),NXe(),e.markConversationRemote?.(),iXn(e.readFileState),Zq(e.memorySelector),Wxe(),xMe(o),Pxn(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:DLt(o)}),nEe(!0)}
export{X5t};
