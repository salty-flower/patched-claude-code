// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-y575z4xw.js";import{ho}from"./chunk-nwqfvmza.js";import{o,ie,A,u,R}from"./chunk-hcyr0654.js";var EMo="Resumed agent. Its final report is not in this message.",vMo="Resumed agent. Its final report follows this JSON, framed by the harness.";function FHr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${ho(n,`
`)||"(no text output)"}`}var $Hr=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:A(u({type:R("text"),text:o()}))}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function UHr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?FHr(e.inlineHandback):e.message)}function kMo(e){let n=$Hr().safeParse(e);return n.success?UHr(n.data)??"":""}
export{EMo,vMo,FHr,$Hr,UHr,kMo};
