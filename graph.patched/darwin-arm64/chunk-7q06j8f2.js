// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{_r,Ymn}from"./chunk-5e9qk3ys.js";import{Tze}from"./chunk-1exfvrtm.js";async function HC(r,e,o){let t=_r(r.slug);if(!!e.toolUseId&&t?.lastProbeToolUseId===e.toolUseId)return;let a=Date.now(),s=await Tze(r,e.abortController.signal,e.credentials);Ymn(r.slug,s,{consumedByCheck:!0,toolUseId:e.toolUseId,issuedAt:a,debugLabel:o})}
export{HC};
