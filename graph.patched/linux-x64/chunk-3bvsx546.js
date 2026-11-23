// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{kt}from"./chunk-f3qkad07.js";var s=null;function JBi(e){let n=s;return s=e,n}function QBi(){return s}var r=null;function ZBi(e){let n=r;return r=e,n}async function ONe(e){return await r?.(e)??!1}class Zwr extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function eji(e){let n=t;return t=e,n}function _po(){return t}function tji(e){let n=kt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function Y_s(){let e=kt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function nji(){let e=Y_s();if(e)process.stderr.write(`${e}
`)}
export{JBi,QBi,ZBi,ONe,Zwr,eji,_po,tji,Y_s,nji};
