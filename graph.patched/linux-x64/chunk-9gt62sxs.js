// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Gt}from"./chunk-nf00mahq.js";var s=null;function I3n(e){let n=s;return s=e,n}function ygt(){return s}var r=null;function P3n(e){let n=r;return r=e,n}async function NU(e){return await r?.(e)??!1}class Fne extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function H3n(e){let n=t;return t=e,n}function Zde(){return t}function _gt(e){let n=Gt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function adn(){let e=Gt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function M3n(){let e=adn();if(e)process.stderr.write(`${e}
`)}
export{I3n,ygt,P3n,NU,Fne,H3n,Zde,_gt,adn,M3n};
