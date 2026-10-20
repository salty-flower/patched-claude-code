// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{T7e,WWe}from"./chunk-gcq2zy5h.js";import{Tt,x$t}from"./chunk-c7ypkxk9.js";import{Dat}from"./chunk-67kwemb3.js";async function Lp(r,e,o,t){let a=Tt(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([Dat(r,e.abortController.signal,e.credentials,t),WWe()?T7e(r,e.abortController.signal):void 0]);x$t(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function _Pn(r,e,o){let t=Date.now(),a=await Dat(r,e.abortController.signal,e.credentials);x$t(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{Lp,_Pn};
