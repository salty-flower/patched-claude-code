// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{vt}from"./chunk-e4gnt8y9.js";var s=null;function n2i(e){let n=s;return s=e,n}function r2i(){return s}var r=null;function o2i(e){let n=r;return r=e,n}async function DNe(e){return await r?.(e)??!1}class Hwr extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function s2i(e){let n=t;return t=e,n}function wpo(){return t}function i2i(e){let n=vt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function D_s(){let e=vt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function a2i(){let e=D_s();if(e)process.stderr.write(`${e}
`)}
export{n2i,r2i,o2i,DNe,Hwr,s2i,wpo,i2i,D_s,a2i};
