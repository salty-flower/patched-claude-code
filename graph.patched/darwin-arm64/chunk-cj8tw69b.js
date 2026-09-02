// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{qt}from"./chunk-pdpxsvxg.js";var s=null;function KUn(e){let n=s;return s=e,n}function _st(){return s}var r=null;function XUn(e){let n=r;return r=e,n}async function H1(e){return await r?.(e)??!1}class SZ extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function YUn(e){let n=t;return t=e,n}function mae(){return t}function yst(e){let n=qt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function ntn(){let e=qt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function JUn(){let e=ntn();if(e)process.stderr.write(`${e}
`)}
export{KUn,_st,XUn,H1,SZ,YUn,mae,yst,ntn,JUn};
