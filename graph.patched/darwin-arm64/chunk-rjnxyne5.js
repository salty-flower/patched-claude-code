// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Kt}from"./chunk-630hazsp.js";var s=null;function n$o(e){let n=s;return s=e,n}function Wun(){return s}var r=null;function r$o(e){let n=r;return r=e,n}async function X8(e){return await r?.(e)??!1}class yPe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function o$o(e){let n=t;return t=e,n}function lBe(){return t}function Gun(e){let n=Kt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function QNr(){let e=Kt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function s$o(){let e=QNr();if(e)process.stderr.write(`${e}
`)}
export{n$o,Wun,r$o,X8,yPe,o$o,lBe,Gun,QNr,s$o};
