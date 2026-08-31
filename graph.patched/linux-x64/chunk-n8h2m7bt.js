// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{zt}from"./chunk-0me3rg21.js";var s=null;function z1n(e){let n=s;return s=e,n}function mst(){return s}var r=null;function G1n(e){let n=r;return r=e,n}async function TN(e){return await r?.(e)??!1}class gZ extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function W1n(e){let n=t;return t=e,n}function dae(){return t}function gst(e){let n=zt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function etn(){let e=zt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function V1n(){let e=etn();if(e)process.stderr.write(`${e}
`)}
export{z1n,mst,G1n,TN,gZ,W1n,dae,gst,etn,V1n};
