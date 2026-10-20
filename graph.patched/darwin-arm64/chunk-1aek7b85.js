// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{K,WTe}from"./chunk-kpqr86hf.js";import{kMe,Iht,KWe,Oht,Mht}from"./chunk-eb6svdsk.js";import{o$}from"./chunk-sds9hbaf.js";import{XVn}from"./chunk-y573qe02.js";import{ZV,_5e,zIt,vPe,WG,n_}from"./chunk-na9nw575.js";import{hXe}from"./chunk-93cpt9zq.js";import{PU}from"./chunk-th1ha6kr.js";import{yEn}from"./chunk-8t66cabe.js";import{iSe}from"./chunk-nvgshpmf.js";import{CWe}from"./chunk-yv1m6b4m.js";function m6t(e,o,t,i){PU("conversation_reset"),o$("conversation_reset"),n_(WG),Oht(),KWe(),kMe(),Mht(),Iht(),hXe();let r=K();for(let s of CWe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),_5e(),e.markConversationRemote?.(),XVn(e.readFileState),ZV(e.memorySelector),WTe(),vPe(o),yEn(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:zIt(o)}),iSe(!0)}
export{m6t};
