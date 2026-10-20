// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{Mo}from"./chunk-na9nw575.js";import{o,oe,C,u,T}from"./chunk-xv841za9.js";var Yos="Resumed agent. Its final report is not in this message.",Xos="Resumed agent. Its final report follows this JSON, framed by the harness.";function VJr({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Mo(n,`
`)||"(no text output)"}`}var KJr=f(()=>u({message:o().optional(),display:o().optional(),inlineHandback:u({displayName:o(),content:C(u({type:T("text"),text:o()}))}).optional().catch(void 0),routing:oe().optional(),request_id:oe().optional(),target:oe().optional()}));function qJr(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?VJr(e.inlineHandback):e.message)}function Jos(e){let n=KJr().safeParse(e);return n.success?qJr(n.data)??"":""}
export{Yos,Xos,VJr,KJr,qJr,Jos};
