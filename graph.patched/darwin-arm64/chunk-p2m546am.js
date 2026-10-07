// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Vt}from"./chunk-6pm26t04.js";var s=null;function lIo(e){let n=s;return s=e,n}function _an(){return s}var r=null;function cIo(e){let n=r;return r=e,n}async function B9(e){return await r?.(e)??!1}class uRe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function dIo(e){let n=t;return t=e,n}function U$e(){return t}function San(e){let n=Vt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function AIr(){let e=Vt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function uIo(){let e=AIr();if(e)process.stderr.write(`${e}
`)}
export{lIo,_an,cIo,B9,uRe,dIo,U$e,San,AIr,uIo};
