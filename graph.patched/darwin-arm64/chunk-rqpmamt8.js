// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{qt}from"./chunk-pfd7xc5y.js";var s=null;function z6n(e){let n=s;return s=e,n}function eut(){return s}var r=null;function V6n(e){let n=r;return r=e,n}async function hF(e){return await r?.(e)??!1}class Xee extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function K6n(e){let n=t;return t=e,n}function uce(){return t}function tut(e){let n=qt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function Fon(){let e=qt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function X6n(){let e=Fon();if(e)process.stderr.write(`${e}
`)}
export{z6n,eut,V6n,hF,Xee,K6n,uce,tut,Fon,X6n};
