// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{xt}from"./chunk-fewhvqt5.js";var s=null;function exs(e){let n=s;return s=e,n}function iBn(){return s}var r=null;function txs(e){let n=r;return r=e,n}async function Bte(e){return await r?.(e)??!1}class EBe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function nxs(e){let n=t;return t=e,n}function gYe(){return t}function aBn(e){let n=xt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function pbo(){let e=xt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function rxs(){let e=pbo();if(e)process.stderr.write(`${e}
`)}
export{exs,iBn,txs,Bte,EBe,nxs,gYe,aBn,pbo,rxs};
