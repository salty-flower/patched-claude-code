// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{zt}from"./chunk-vwjr2pkc.js";var s=null;function ffr(e){let n=s;return s=e,n}function Okt(){return s}var r=null;function mfr(e){let n=r;return r=e,n}async function J2(e){return await r?.(e)??!1}class _le extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function gfr(e){let n=t;return t=e,n}function y_e(){return t}function Dkt(e){let n=zt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function e0n(){let e=zt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function hfr(){let e=e0n();if(e)process.stderr.write(`${e}
`)}
export{ffr,Okt,mfr,J2,_le,gfr,y_e,Dkt,e0n,hfr};
