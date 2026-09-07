// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{jt}from"./chunk-nfmdzyhb.js";var s=null;function sUn(e){let n=s;return s=e,n}function ict(){return s}var r=null;function iUn(e){let n=r;return r=e,n}async function BN(e){return await r?.(e)??!1}class iee extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function aUn(e){let n=t;return t=e,n}function Ile(){return t}function act(e){let n=jt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function Jnn(){let e=jt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function lUn(){let e=Jnn();if(e)process.stderr.write(`${e}
`)}
export{sUn,ict,iUn,BN,iee,aUn,Ile,act,Jnn,lUn};
