// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{o9e,r1e}from"./chunk-12dg8qqx.js";import{Et,X0t}from"./chunk-0zk06b7d.js";import{dst}from"./chunk-91bpgyyn.js";async function Ep(r,e,o,t){let a=Et(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([dst(r,e.abortController.signal,e.credentials,t),r1e()?o9e(r,e.abortController.signal):void 0]);X0t(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function dxn(r,e,o){let t=Date.now(),a=await dst(r,e.abortController.signal,e.credentials);X0t(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{Ep,dxn};
