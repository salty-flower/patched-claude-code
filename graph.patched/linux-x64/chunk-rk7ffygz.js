// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Nt}from"./chunk-7gz0pfve.js";var s=null;function Tms(e){let n=s;return s=e,n}function lDn(){return s}var r=null;function Ams(e){let n=r;return r=e,n}async function pZ(e){return await r?.(e)??!1}class U$e extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function Cms(e){let n=t;return t=e,n}function BYe(){return t}function dDn(e){let n=Nt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function vlo(){let e=Nt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function Rms(){let e=vlo();if(e)process.stderr.write(`${e}
`)}
export{Tms,lDn,Ams,pZ,U$e,Cms,BYe,dDn,vlo,Rms};
