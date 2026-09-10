// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{Rr}from"./chunk-e55d0yhx.js";import{s,se,T,c,k}from"./chunk-asdfkk3x.js";var wqn="Resumed agent. Its final report is not in this message.",Eqn="Resumed agent. Its final report follows this JSON, framed by the harness.";function tdn({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Rr(n,`
`)||"(no text output)"}`}var ndn=m(()=>c({message:s().optional(),display:s().optional(),inlineHandback:c({displayName:s(),content:T(c({type:k("text"),text:s()}))}).optional().catch(void 0),routing:se().optional(),request_id:se().optional(),target:se().optional()}));function rdn(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?tdn(e.inlineHandback):e.message)}function Aqn(e){let n=ndn().safeParse(e);return n.success?rdn(n.data)??"":""}
export{wqn,Eqn,tdn,ndn,rdn,Aqn};
