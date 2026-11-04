// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{wt}from"./chunk-pna2vbye.js";var s=null;function Xoi(e){let n=s;return s=e,n}function snr(){return s}var r=null;function Joi(e){let n=r;return r=e,n}async function Jae(e){return await r?.(e)??!1}class M3e extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function Qoi(e){let n=t;return t=e,n}function Kst(){return t}function inr(e){let n=wt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function vqo(){let e=wt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function Zoi(){let e=vqo();if(e)process.stderr.write(`${e}
`)}
export{Xoi,snr,Joi,Jae,M3e,Qoi,Kst,inr,vqo,Zoi};
