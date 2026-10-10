// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{Co}from"./chunk-sfn1dbxq.js";import{o,oe,A,u,C}from"./chunk-9cmjz7j9.js";var Cjo="Resumed agent. Its final report is not in this message.",Tjo="Resumed agent. Its final report follows this JSON, framed by the harness.";function IUr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Co(n,`
`)||"(no text output)"}`}var OUr=p(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:A(u({type:C("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function HUr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?IUr(e.inlineHandback):e.message)}function Rjo(e){let n=OUr().safeParse(e);return n.success?HUr(n.data)??"":""}
export{Cjo,Tjo,IUr,OUr,HUr,Rjo};
