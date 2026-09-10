// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Ut}from"./chunk-hndhb8as.js";var s=null;function mVn(e){let n=s;return s=e,n}function Zft(){return s}var r=null;function gVn(e){let n=r;return r=e,n}async function R$(e){return await r?.(e)??!1}class mne extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function hVn(e){let n=t;return t=e,n}function pde(){return t}function emt(e){let n=Ut();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function gcn(){let e=Ut(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function yVn(){let e=gcn();if(e)process.stderr.write(`${e}
`)}
export{mVn,Zft,gVn,R$,mne,hVn,pde,emt,gcn,yVn};
