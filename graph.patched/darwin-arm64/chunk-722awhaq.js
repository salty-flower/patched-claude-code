// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{jt}from"./chunk-6pky15m5.js";var s=null;function jBn(e){let n=s;return s=e,n}function Tct(){return s}var r=null;function WBn(e){let n=r;return r=e,n}async function X1(e){return await r?.(e)??!1}class mee extends Error{consent;constructor(e){super("first-party design MCP server requires consent");this.consent=e;this.name="FirstPartyDesignNeedsConsentError"}}var t=null;function GBn(e){let n=t;return t=e,n}function Nle(){return t}function Ect(e){let n=jt();if(n.scopeExpansionDisclosed)return;n.scopeExpansionDisclosed=!0,n.pendingScopeExpansionNotice=e}function Arn(){let e=jt(),n=e.pendingScopeExpansionNotice;return e.pendingScopeExpansionNotice=void 0,n}function qBn(){let e=Arn();if(e)process.stderr.write(`${e}
`)}
export{jBn,Tct,WBn,X1,mee,GBn,Nle,Ect,Arn,qBn};
