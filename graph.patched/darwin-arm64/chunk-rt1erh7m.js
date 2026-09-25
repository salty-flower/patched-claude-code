// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ut}from"./chunk-emn764wn.js";var s=null;function Sqr(e){let n=s;return s=e,n}function S6t(){return s}var r=null;function bqr(e){let n=r;return r=e,n}async function hV(e){return await r?.(e)??!1}class Wye extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function wqr(e){let n=t;return t=e,n}function VRe(){return t}function b6t(e){let n=Ut();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function yJn(){let e=Ut(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function Eqr(){let e=yJn();if(e)process.stderr.write(`${e}
`)}
export{Sqr,S6t,bqr,hV,Wye,wqr,VRe,b6t,yJn,Eqr};
