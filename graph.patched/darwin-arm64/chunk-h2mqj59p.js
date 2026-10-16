// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Nt}from"./chunk-718k5xe7.js";var s=null;function Yes(e){let n=s;return s=e,n}function zAn(){return s}var r=null;function Xes(e){let n=r;return r=e,n}async function cQ(e){return await r?.(e)??!1}class mLe extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function Jes(e){let n=t;return t=e,n}function IVe(){return t}function VAn(e){let n=Nt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function GYr(){let e=Nt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function Qes(){let e=GYr();if(e)process.stderr.write(`${e}
`)}
export{Yes,zAn,Xes,cQ,mLe,Jes,IVe,VAn,GYr,Qes};
