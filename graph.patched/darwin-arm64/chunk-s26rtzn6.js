// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{SYe,bBe}from"./chunk-5ptkkcjq.js";import{vt,CLt}from"./chunk-rxv43z7x.js";import{Sst}from"./chunk-agpbxp7z.js";async function Ep(r,e,o,t){let a=vt(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([Sst(r,e.abortController.signal,e.credentials,t),bBe()?SYe(r,e.abortController.signal):void 0]);CLt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function yRn(r,e,o){let t=Date.now(),a=await Sst(r,e.abortController.signal,e.credentials);CLt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{Ep,yRn};
