// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{uo}from"./chunk-y0b3kvx1.js";import{o,ie,T,u,R}from"./chunk-seb9y51t.js";var ZTo="Resumed agent. Its final report is not in this message.",eRo="Resumed agent. Its final report follows this JSON, framed by the harness.";function VTr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${uo(n,`
`)||"(no text output)"}`}var qTr=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:T(u({type:R("text"),text:o()}))}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function KTr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?VTr(e.inlineHandback):e.message)}function tRo(e){let n=qTr().safeParse(e);return n.success?KTr(n.data)??"":""}
export{ZTo,eRo,VTr,qTr,KTr,tRo};
