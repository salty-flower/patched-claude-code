// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-ras5x31x.js";import{ho}from"./chunk-g263vvvn.js";import{o,ie,A,u,R}from"./chunk-w8db6ytr.js";var qHo="Resumed agent. Its final report is not in this message.",VHo="Resumed agent. Its final report follows this JSON, framed by the harness.";function vHr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${ho(n,`
`)||"(no text output)"}`}var EHr=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:A(u({type:R("text"),text:o()}))}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function kHr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?vHr(e.inlineHandback):e.message)}function KHo(e){let n=EHr().safeParse(e);return n.success?kHr(n.data)??"":""}
export{qHo,VHo,vHr,EHr,kHr,KHo};
