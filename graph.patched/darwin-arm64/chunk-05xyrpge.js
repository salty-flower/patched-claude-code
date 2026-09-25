// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{rOe}from"./chunk-rfyck8wc.js";import{gt,Dze}from"./chunk-db6kxt0j.js";import{QHe}from"./chunk-1pwn1qkj.js";import{uEe}from"./chunk-06f4vbjk.js";async function Tu(r,e,o){let t=gt(r.slug);if(!!e.toolUseId&&t?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([rOe(r,e.abortController.signal,e.credentials),uEe()?QHe(r,e.abortController.signal):void 0]);Dze(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function s3t(r,e,o){let t=Date.now(),a=await rOe(r,e.abortController.signal,e.credentials);Dze(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{Tu,s3t};
