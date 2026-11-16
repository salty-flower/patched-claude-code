// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{Ds}from"./chunk-wqb2b4v0.js";import{o,ie,A,u,T}from"./chunk-m507bxk0.js";var uOi="Resumed agent. Its final report is not in this message.",fOi="Resumed agent. Its final report follows this JSON, framed by the harness.",pOi="Agent was not resumed, and your message was not delivered. It can still be resumed. Its final report is not in this message.",mOi="Agent was not resumed, and your message was not delivered. It can still be resumed. Its final report, read from its saved transcript, follows this JSON, framed by the harness.";function Los({displayName:e,content:t,stored:s}){let n=Ds(t,`
`)||"(no text output)";return s?`Agent ${e} was not resumed, and your message was not delivered. It can still be resumed. Its final report, read from its saved transcript:

${n}`:`Resumed agent ${e}. Result:

${n}`}var Hos=p(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:A(u({type:T("text"),text:o()})),stored:T(!0).optional()}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function Nos(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?Los(e.inlineHandback):e.message)}function hOi(e){let t=Hos().safeParse(e);return t.success?Nos(t.data)??"":""}
export{uOi,fOi,pOi,mOi,Los,Hos,Nos,hOi};
