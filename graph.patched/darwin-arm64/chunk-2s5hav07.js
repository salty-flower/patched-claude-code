// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{zt}from"./chunk-7736psqb.js";var s=null;function i9n(e){let n=s;return s=e,n}function Adt(){return s}var r=null;function s9n(e){let n=r;return r=e,n}async function DF(e){return await r?.(e)??!1}class $te extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function a9n(e){let n=t;return t=e,n}function iue(){return t}function Cdt(e){let n=zt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function tan(){let e=zt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function l9n(){let e=tan();if(e)process.stderr.write(`${e}
`)}
export{i9n,Adt,s9n,DF,$te,a9n,iue,Cdt,tan,l9n};
