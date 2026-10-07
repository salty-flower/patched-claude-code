// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{uo}from"./chunk-9wqh5j7s.js";import{o,ie,C,u,R}from"./chunk-6kgnb6mn.js";var kCo="Resumed agent. Its final report is not in this message.",TCo="Resumed agent. Its final report follows this JSON, framed by the harness.";function PCr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${uo(n,`
`)||"(no text output)"}`}var ICr=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:C(u({type:R("text"),text:o()}))}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function OCr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?PCr(e.inlineHandback):e.message)}function ACo(e){let n=ICr().safeParse(e);return n.success?OCr(n.data)??"":""}
export{kCo,TCo,PCr,ICr,OCr,ACo};
