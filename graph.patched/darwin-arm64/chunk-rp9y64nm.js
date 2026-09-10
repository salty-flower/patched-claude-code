// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{rn,ATn,zQe,wge,qse}from"./chunk-aertbmaz.js";async function Dp(e,r,o){let t=rn(e.slug);if(!!r.toolUseId&&t?.lastProbeToolUseId===r.toolUseId)return;let a=Date.now(),[s]=await Promise.all([zQe(e,r.abortController.signal,r.credentials),qse()?wge(e,r.abortController.signal):void 0]);ATn(e.slug,s,{consumedByCheck:!0,toolUseId:r.toolUseId,issuedAt:a,debugLabel:o})}
export{Dp};
