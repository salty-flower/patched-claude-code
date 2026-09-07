// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{Er}from"./chunk-1692k4g5.js";import{s,ie,v,c,k}from"./chunk-zd09sacr.js";var PUn="Resumed agent. Its final report is not in this message.",OUn="Resumed agent. Its final report follows this JSON, framed by the harness.";function dnn({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Er(n,`
`)||"(no text output)"}`}var pnn=m(()=>c({message:s().optional(),display:s().optional(),inlineHandback:c({displayName:s(),content:v(c({type:k("text"),text:s()}))}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function fnn(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?dnn(e.inlineHandback):e.message)}function DUn(e){let n=pnn().safeParse(e);return n.success?fnn(n.data)??"":""}
export{PUn,OUn,dnn,pnn,fnn,DUn};
