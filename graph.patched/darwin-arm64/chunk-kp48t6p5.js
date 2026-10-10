// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ft}from"./chunk-c0aaqg7t.js";var s=null;function b6o(e){let n=s;return s=e,n}function Eyn(){return s}var r=null;function w6o(e){let n=r;return r=e,n}async function kX(e){return await r?.(e)??!1}class JOe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function E6o(e){let n=t;return t=e,n}function nWe(){return t}function vyn(e){let n=Ft();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function W2r(){let e=Ft(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function v6o(){let e=W2r();if(e)process.stderr.write(`${e}
`)}
export{b6o,Eyn,w6o,kX,JOe,E6o,nWe,vyn,W2r,v6o};
