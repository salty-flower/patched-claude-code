// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{uJe,CWe}from"./chunk-7tjk1tfk.js";import{At,sFt}from"./chunk-p6wn2sv1.js";import{Cat}from"./chunk-d5w2pran.js";async function Np(r,e,o,t){let a=At(r.slug);if(!!e.toolUseId&&a?.lastProbeToolUseId===e.toolUseId)return;let s=Date.now(),[l]=await Promise.all([Cat(r,e.abortController.signal,e.credentials,t),CWe()?uJe(r,e.abortController.signal):void 0]);sFt(r.slug,l,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:s,debugLabel:o})}async function rPn(r,e,o){let t=Date.now(),a=await Cat(r,e.abortController.signal,e.credentials);sFt(r.slug,a,{consumedByCheck:!1,toolUseId:e.toolUseId,issuedAt:t,debugLabel:o})}
export{Np,rPn};
