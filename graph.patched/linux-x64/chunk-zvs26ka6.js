// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Kt}from"./chunk-wdbbywcf.js";var s=null;function _$o(e){let n=s;return s=e,n}function Eun(){return s}var r=null;function b$o(e){let n=r;return r=e,n}async function W8(e){return await r?.(e)??!1}class iPe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function S$o(e){let n=t;return t=e,n}function ZBe(){return t}function kun(e){let n=Kt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function SNr(){let e=Kt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function w$o(){let e=SNr();if(e)process.stderr.write(`${e}
`)}
export{_$o,Eun,b$o,W8,iPe,S$o,ZBe,kun,SNr,w$o};
