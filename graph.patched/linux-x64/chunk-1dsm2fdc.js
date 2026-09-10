// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{Rr}from"./chunk-2byjyg85.js";import{s,se,T,c,C}from"./chunk-wvjc3h2t.js";var W4n="Resumed agent. Its final report is not in this message.",G4n="Resumed agent. Its final report follows this JSON, framed by the harness.";function Iun({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Rr(n,`
`)||"(no text output)"}`}var Pun=m(()=>c({message:s().optional(),display:s().optional(),inlineHandback:c({displayName:s(),content:T(c({type:C("text"),text:s()}))}).optional().catch(void 0),routing:se().optional(),request_id:se().optional(),target:se().optional()}));function Hun(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?Iun(e.inlineHandback):e.message)}function q4n(e){let n=Pun().safeParse(e);return n.success?Hun(n.data)??"":""}
export{W4n,G4n,Iun,Pun,Hun,q4n};
