// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{_s}from"./chunk-0x9x817t.js";import{o,oe,T,u,C}from"./chunk-97je7cvf.js";var J9s="Resumed agent. Its final report is not in this message.",Q9s="Resumed agent. Its final report follows this JSON, framed by the harness.";function hFo({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${_s(n,`
`)||"(no text output)"}`}var gFo=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:T(u({type:C("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function yFo(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?hFo(e.inlineHandback):e.message)}function Z9s(e){let n=gFo().safeParse(e);return n.success?yFo(n.data)??"":""}
export{J9s,Q9s,hFo,gFo,yFo,Z9s};
