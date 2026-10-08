// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nVe,nDe}from"./chunk-052pc1wz.js";import{vt,CCt}from"./chunk-dbn96mhk.js";import{b7e}from"./chunk-qhntym07.js";async function Wu(r,e,o,t){let a=vt(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([b7e(r,e.abortController.signal,e.credentials,t),nDe()?nVe(r,e.abortController.signal):void 0]);CCt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function Mmn(r,e,o){let t=Date.now(),a=await b7e(r,e.abortController.signal,e.credentials);CCt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{Wu,Mmn};
