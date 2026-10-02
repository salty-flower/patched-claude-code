// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{ht,Nct}from"./chunk-3mqr1j25.js";import{qNe,vTe}from"./chunk-ycbt62r5.js";import{wze}from"./chunk-ad0eh8az.js";async function np(r,e,o,t){let a=ht(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([wze(r,e.abortController.signal,e.credentials,t),vTe()?qNe(r,e.abortController.signal):void 0]);Nct(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function S9t(r,e,o){let t=Date.now(),a=await wze(r,e.abortController.signal,e.credentials);Nct(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{np,S9t};
