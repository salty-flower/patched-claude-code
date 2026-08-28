// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Nt}from"./chunk-pws3zj07.js";var s=null;function tMn(e){let n=s;return s=e,n}function Fnt(){return s}var t=null;function nMn(e){let n=t;return t=e,n}async function yR(e){return await t?.(e)??!1}class GX extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var r=null;function rMn(e){let n=r;return r=e,n}function Foe(){return r}function Bnt(e){let n=Nt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function j7t(){let e=Nt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function oMn(){let e=j7t();if(e)process.stderr.write(`${e}
`)}
export{tMn,Fnt,nMn,yR,GX,rMn,Foe,Bnt,j7t,oMn};
