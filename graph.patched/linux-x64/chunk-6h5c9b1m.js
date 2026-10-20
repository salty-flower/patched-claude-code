// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-949csv87.js";import{Mo}from"./chunk-rncrmfyt.js";import{o,oe,T,u,A}from"./chunk-mqaa2rrp.js";var hos="Resumed agent. Its final report is not in this message.",yos="Resumed agent. Its final report follows this JSON, framed by the harness.";function _Qr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Mo(n,`
`)||"(no text output)"}`}var bQr=p(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:T(u({type:A("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function SQr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?_Qr(e.inlineHandback):e.message)}function _os(e){let n=bQr().safeParse(e);return n.success?SQr(n.data)??"":""}
export{hos,yos,_Qr,bQr,SQr,_os};
