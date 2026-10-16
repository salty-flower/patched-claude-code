// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{Po}from"./chunk-996thspe.js";import{o,oe,C,u,A}from"./chunk-82bgdty3.js";var XXo="Resumed agent. Its final report is not in this message.",JXo="Resumed agent. Its final report follows this JSON, framed by the harness.";function F4r({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Po(n,`
`)||"(no text output)"}`}var $4r=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:C(u({type:A("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function U4r(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?F4r(e.inlineHandback):e.message)}function QXo(e){let n=$4r().safeParse(e);return n.success?U4r(n.data)??"":""}
export{XXo,JXo,F4r,$4r,U4r,QXo};
