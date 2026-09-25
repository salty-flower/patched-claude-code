// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{f}from"./chunk-1y7zyxh8.js";import{Xr}from"./chunk-h3bc7dkc.js";import{o,ae,T,d,R}from"./chunk-rvnav1yx.js";var eWr="Resumed agent. Its final report is not in this message.",tWr="Resumed agent. Its final report follows this JSON, framed by the harness.";function B4n({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Xr(n,`
`)||"(no text output)"}`}var j4n=f(()=>d({message:o().optional(),display:o().optional(),inlineHandback:d({displayName:o(),content:T(d({type:R("text"),text:o()}))}).optional().catch(void 0),routing:ae().optional(),request_id:ae().optional(),target:ae().optional()}));function W4n(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?B4n(e.inlineHandback):e.message)}function nWr(e){let n=j4n().safeParse(e);return n.success?W4n(n.data)??"":""}
export{eWr,tWr,B4n,j4n,W4n,nWr};
