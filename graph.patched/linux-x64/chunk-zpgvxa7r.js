// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K,hwe}from"./chunk-ctt36bn8.js";import{HCe,oat,BNe,sat,iat}from"./chunk-499b1h1a.js";import{XL}from"./chunk-gr4a0fky.js";import{c2,s2e,Fwt,$ke,s4,uv}from"./chunk-kasbfbhj.js";import{g0n}from"./chunk-pfdtn0nk.js";import{XKe}from"./chunk-7q005g04.js";import{n$}from"./chunk-8y1m7sq5.js";import{Hln}from"./chunk-8qvsxxv0.js";import{Xfe}from"./chunk-9mqn6drc.js";import{ANe}from"./chunk-0g49c63m.js";function GLt(e,o,t,i){n$("conversation_reset"),XL("conversation_reset"),uv(s4),sat(),BNe(),HCe(),iat(),oat(),XKe();let r=K();for(let s of ANe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),s2e(),e.markConversationRemote?.(),g0n(e.readFileState),c2(e.memorySelector),hwe(),$ke(o),Hln(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:Fwt(o)}),Xfe(!0)}
export{GLt};
