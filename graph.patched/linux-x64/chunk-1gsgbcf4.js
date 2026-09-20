// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{f}from"./chunk-67jj8qay.js";import{$r}from"./chunk-v4zgc4qd.js";import{o,ae,C,u,R}from"./chunk-ehsmc9ae.js";var lpr="Resumed agent. Its final report is not in this message.",cpr="Resumed agent. Its final report follows this JSON, framed by the harness.";function oxn({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${$r(n,`
`)||"(no text output)"}`}var sxn=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:C(u({type:R("text"),text:o()}))}).optional().catch(void 0),routing:ae().optional(),request_id:ae().optional(),target:ae().optional()}));function ixn(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?oxn(e.inlineHandback):e.message)}function upr(e){let n=sxn().safeParse(e);return n.success?ixn(n.data)??"":""}
export{lpr,cpr,oxn,sxn,ixn,upr};
