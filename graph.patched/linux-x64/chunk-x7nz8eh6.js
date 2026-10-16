// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-he0s6sfd.js";import{Po}from"./chunk-38nf1dnm.js";import{o,oe,T,u,A}from"./chunk-zypddzr3.js";var bXo="Resumed agent. Its final report is not in this message.",SXo="Resumed agent. Its final report follows this JSON, framed by the harness.";function b6r({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Po(n,`
`)||"(no text output)"}`}var S6r=p(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:T(u({type:A("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function w6r(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?b6r(e.inlineHandback):e.message)}function wXo(e){let n=S6r().safeParse(e);return n.success?w6r(n.data)??"":""}
export{bXo,SXo,b6r,S6r,w6r,wXo};
