// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{h}from"./chunk-s0y4aasp.js";import{Nr}from"./chunk-j5h9ds58.js";import{i,ye,k,m,F}from"./chunk-ca00k0wg.js";var SDn="Resumed agent. Its final report is not in this message.",vDn="Resumed agent. Its final report follows this JSON, framed by the harness.",wDn="Resumed agent. Its final report was withheld: a hook rewrote this result and dropped the framed hand-back.";function uYt({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Nr(n,`
`)||"(no text output)"}`}var dYt=h(()=>m({message:i().optional(),display:i().optional(),inlineHandback:m({displayName:i(),content:k(m({type:F("text"),text:i()}))}).optional().catch(void 0),routing:ye().optional(),request_id:ye().optional(),target:ye().optional()}));function pYt(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?uYt(e.inlineHandback):e.message)}function TDn(e){let n=dYt().safeParse(e);return n.success?pYt(n.data)??"":""}
export{SDn,vDn,wDn,uYt,dYt,pYt,TDn};
