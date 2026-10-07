// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{gGe,z0e}from"./chunk-q8h5gr14.js";import{St,nEt}from"./chunk-xztgk69v.js";import{v8e}from"./chunk-4vafg3h5.js";async function qu(r,e,o,t){let a=St(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([v8e(r,e.abortController.signal,e.credentials,t),z0e()?gGe(r,e.abortController.signal):void 0]);nEt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function udn(r,e,o){let t=Date.now(),a=await v8e(r,e.abortController.signal,e.credentials);nEt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{qu,udn};
