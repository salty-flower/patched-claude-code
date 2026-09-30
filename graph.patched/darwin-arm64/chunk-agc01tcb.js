// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import{io}from"./chunk-59zy4j10.js";import{o,ae,k,d,R}from"./chunk-g4gq2k0z.js";var Zto="Resumed agent. Its final report is not in this message.",eno="Resumed agent. Its final report follows this JSON, framed by the harness.";function jsr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${io(n,`
`)||"(no text output)"}`}var Wsr=p(()=>d({message:o().optional(),display:o().optional(),inlineHandback:d({displayName:o(),content:k(d({type:R("text"),text:o()}))}).optional().catch(void 0),routing:ae().optional(),request_id:ae().optional(),target:ae().optional()}));function Gsr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?jsr(e.inlineHandback):e.message)}function tno(e){let n=Wsr().safeParse(e);return n.success?Gsr(n.data)??"":""}
export{Zto,eno,jsr,Wsr,Gsr,tno};
