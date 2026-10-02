// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Wt}from"./chunk-fmk5eq99.js";var s=null;function Puo(e){let n=s;return s=e,n}function YXt(){return s}var r=null;function Iuo(e){let n=r;return r=e,n}async function TK(e){return await r?.(e)??!1}class BEe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function Huo(e){let n=t;return t=e,n}function wOe(){return t}function XXt(e){let n=Wt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function qhr(){let e=Wt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function Ouo(){let e=qhr();if(e)process.stderr.write(`${e}
`)}
export{Puo,YXt,Iuo,TK,BEe,Huo,wOe,XXt,qhr,Ouo};
