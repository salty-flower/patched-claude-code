// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ft}from"./chunk-5frxw1j3.js";var s=null;function cLn(e){let n=s;return s=e,n}function Unt(){return s}var t=null;function uLn(e){let n=t;return t=e,n}async function vP(e){return await t?.(e)??!1}class KX extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var r=null;function dLn(e){let n=r;return r=e,n}function qoe(){return r}function jnt(e){let n=Ft();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function zYt(){let e=Ft(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function pLn(){let e=zYt();if(e)process.stderr.write(`${e}
`)}
export{cLn,Unt,uLn,vP,KX,dLn,qoe,jnt,zYt,pLn};
