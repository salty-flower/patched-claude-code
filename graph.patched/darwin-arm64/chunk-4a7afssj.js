// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{m}from"./chunk-asme1eq2.js";import{zr}from"./chunk-fy12d89p.js";import{i,_e,H,f,N}from"./chunk-skrj2yn0.js";var uUn="Resumed agent. Its final report is not in this message.",dUn="Resumed agent. Its final report follows this JSON, framed by the harness.",pUn="Resumed agent. Its final report was withheld: a hook rewrote this result and dropped the framed hand-back.";function ken({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${zr(n,`
`)||"(no text output)"}`}var Hen=m(()=>f({message:i().optional(),display:i().optional(),inlineHandback:f({displayName:i(),content:H(f({type:N("text"),text:i()}))}).optional().catch(void 0),routing:_e().optional(),request_id:_e().optional(),target:_e().optional()}));function xen(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?ken(e.inlineHandback):e.message)}function fUn(e){let n=Hen().safeParse(e);return n.success?xen(n.data)??"":""}
export{uUn,dUn,pUn,ken,Hen,xen,fUn};
