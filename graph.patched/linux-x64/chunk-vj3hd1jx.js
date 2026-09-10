// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{sn,TRn,iet,nhe,vie}from"./chunk-1j0ppntz.js";async function Sm(e,r,o){let t=sn(e.slug);if(!!r.toolUseId&&t?.lastProbeToolUseId===r.toolUseId)return;let a=Date.now(),[s]=await Promise.all([iet(e,r.abortController.signal,r.credentials),vie()?nhe(e,r.abortController.signal):void 0]);TRn(e.slug,s,{consumedByCheck:!0,toolUseId:r.toolUseId,issuedAt:a,debugLabel:o})}
export{Sm};
