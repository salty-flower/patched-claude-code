// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{$o}from"./chunk-31gxg38t.js";import{o,oe,C,u,T}from"./chunk-k395ayhm.js";var N_s="Resumed agent. Its final report is not in this message.",F_s="Resumed agent. Its final report follows this JSON, framed by the harness.";function Ylo({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${$o(n,`
`)||"(no text output)"}`}var Xlo=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:C(u({type:T("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function Jlo(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?Ylo(e.inlineHandback):e.message)}function $_s(e){let n=Xlo().safeParse(e);return n.success?Jlo(n.data)??"":""}
export{N_s,F_s,Ylo,Xlo,Jlo,$_s};
