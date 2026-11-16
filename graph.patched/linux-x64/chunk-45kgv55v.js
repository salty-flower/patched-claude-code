// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{Ds}from"./chunk-zaxe68t4.js";import{o,ie,C,u,T}from"./chunk-xrhk683g.js";var VPi="Resumed agent. Its final report is not in this message.",qPi="Resumed agent. Its final report follows this JSON, framed by the harness.",KPi="Agent was not resumed, and your message was not delivered. It can still be resumed. Its final report is not in this message.",YPi="Agent was not resumed, and your message was not delivered. It can still be resumed. Its final report, read from its saved transcript, follows this JSON, framed by the harness.";function Sos({displayName:e,content:t,stored:s}){let n=Ds(t,`
`)||"(no text output)";return s?`Agent ${e} was not resumed, and your message was not delivered. It can still be resumed. Its final report, read from its saved transcript:

${n}`:`Resumed agent ${e}. Result:

${n}`}var wos=p(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:C(u({type:T("text"),text:o()})),stored:T(!0).optional()}).optional().catch(void 0),routing:ie().optional(),request_id:ie().optional(),target:ie().optional()}));function vos(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?Sos(e.inlineHandback):e.message)}function XPi(e){let t=wos().safeParse(e);return t.success?vos(t.data)??"":""}
export{VPi,qPi,KPi,YPi,Sos,wos,vos,XPi};
