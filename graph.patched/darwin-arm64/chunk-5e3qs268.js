// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Nt}from"./chunk-prq01t47.js";var s=null;function cgs(e){let n=s;return s=e,n}function AHn(){return s}var r=null;function ugs(e){let n=r;return r=e,n}async function bZ(e){return await r?.(e)??!1}class YFe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function pgs(e){let n=t;return t=e,n}function Y3e(){return t}function RHn(e){let n=Nt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function Jlo(){let e=Nt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function fgs(){let e=Jlo();if(e)process.stderr.write(`${e}
`)}
export{cgs,AHn,ugs,bZ,YFe,pgs,Y3e,RHn,Jlo,fgs};
