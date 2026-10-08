// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Yqe,qDe}from"./chunk-7bbha6es.js";import{vt,mTt}from"./chunk-e3b8232z.js";import{cJe}from"./chunk-qecx6c5f.js";async function zu(r,e,o,t){let a=vt(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([cJe(r,e.abortController.signal,e.credentials,t),qDe()?Yqe(r,e.abortController.signal):void 0]);mTt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function Pfn(r,e,o){let t=Date.now(),a=await cJe(r,e.abortController.signal,e.credentials);mTt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{zu,Pfn};
