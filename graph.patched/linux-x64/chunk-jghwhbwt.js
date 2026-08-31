// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{m}from"./chunk-asme1eq2.js";import{Vr}from"./chunk-h6btyxas.js";import{i,ye,I,p,N}from"./chunk-kjzc23zf.js";var cBn="Resumed agent. Its final report is not in this message.",uBn="Resumed agent. Its final report follows this JSON, framed by the harness.",dBn="Resumed agent. Its final report was withheld: a hook rewrote this result and dropped the framed hand-back.";function den({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Vr(n,`
`)||"(no text output)"}`}var fen=m(()=>p({message:i().optional(),display:i().optional(),inlineHandback:p({displayName:i(),content:I(p({type:N("text"),text:i()}))}).optional().catch(void 0),routing:ye().optional(),request_id:ye().optional(),target:ye().optional()}));function pen(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?den(e.inlineHandback):e.message)}function fBn(e){let n=fen().safeParse(e);return n.success?pen(n.data)??"":""}
export{cBn,uBn,dBn,den,fen,pen,fBn};
