// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{En,KSn,O7e,Upe,Mre}from"./chunk-40zfdkve.js";async function R_(e,r,o){let t=En(e.slug);if(!!r.toolUseId&&t?.lastProbeToolUseId===r.toolUseId)return;let a=Date.now(),[s]=await Promise.all([O7e(e,r.abortController.signal,r.credentials),Mre()?Upe(e,r.abortController.signal):void 0]);KSn(e.slug,s,{consumedByCheck:!0,toolUseId:r.toolUseId,issuedAt:a,debugLabel:o})}
export{R_};
