// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{J}from"./chunk-cet8na02.js";import{jQ,Ake,Xse,Cke,vke}from"./chunk-9vax8jy6.js";import{qR,DAe,_3,sS,xpe}from"./chunk-tavwd3sq.js";import{Sie}from"./chunk-8gge0ryh.js";import{sge}from"./chunk-ab45j50j.js";import{FH}from"./chunk-6ncymkhw.js";import{BSe}from"./chunk-tzyj5h47.js";function yGe(o,e,r,i){FH("conversation_reset"),qR("conversation_reset"),sS(_3),Cke(),Xse(),jQ(),vke(),Ake(),sge();let s=J();for(let t of Sie(o.sessionHooksRegistry,s))o.sessionHooksRegistry.remove(s,"Stop",t);r(),xpe(),DAe(e),BSe.of(i).emit(s,e.map((t)=>t.uuid)),o.applyMessageOp({type:"replace-all",messages:e})}
export{yGe};
