// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K,Xhe}from"./chunk-aywwjcwq.js";import{hEe,Oet,WMe,Met,Het}from"./chunk-ad49p3yb.js";import{AD}from"./chunk-0fybab08.js";import{MW,MBe,Emt,SSe,Oq,av}from"./chunk-9wqh5j7s.js";import{LTn}from"./chunk-k0nmkyef.js";import{hze}from"./chunk-hc9g4tqd.js";import{lL}from"./chunk-1h5pqaph.js";import{Y7t}from"./chunk-art1vf64.js";import{qce}from"./chunk-4sv1p0qd.js";import{CMe}from"./chunk-wm13622a.js";function jxt(e,o,t,i){lL("conversation_reset"),AD("conversation_reset"),av(Oq),Met(),WMe(),hEe(),Het(),Oet(),hze();let r=K();for(let s of CMe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),MBe(),e.markConversationRemote?.(),LTn(e.readFileState),MW(e.memorySelector),Xhe(),SSe(o),Y7t(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:Emt(o)}),qce(!0)}
export{jxt};
