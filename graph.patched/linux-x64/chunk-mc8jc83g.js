// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{lGe,LMe}from"./chunk-3kg9enxw.js";import{bt,Gwt}from"./chunk-xfkchvr6.js";import{m8e}from"./chunk-pfhjptjf.js";async function Vu(r,e,o,t){let a=bt(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([m8e(r,e.abortController.signal,e.credentials,t),LMe()?lGe(r,e.abortController.signal):void 0]);Gwt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function lcn(r,e,o){let t=Date.now(),a=await m8e(r,e.abortController.signal,e.credentials);Gwt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{Vu,lcn};
