// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{n3e,VNe}from"./chunk-ywt9ek0j.js";import{Et,Pxt}from"./chunk-ypbkhaky.js";import{RZe}from"./chunk-zzcgzkve.js";async function rp(r,e,o,t){let a=Et(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([RZe(r,e.abortController.signal,e.credentials,t),VNe()?n3e(r,e.abortController.signal):void 0]);Pxt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function X_n(r,e,o){let t=Date.now(),a=await RZe(r,e.abortController.signal,e.credentials);Pxt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{rp,X_n};
