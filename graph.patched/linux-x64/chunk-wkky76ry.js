// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{h}from"./chunk-s0y4aasp.js";import{$r}from"./chunk-hrvkymct.js";import{i,ye,H,m,F}from"./chunk-kfr3f08h.js";var hPn="Resumed agent. Its final report is not in this message.",gPn="Resumed agent. Its final report follows this JSON, framed by the harness.",yPn="Resumed agent. Its final report was withheld: a hook rewrote this result and dropped the framed hand-back.";function l7t({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${$r(n,`
`)||"(no text output)"}`}var c7t=h(()=>m({message:i().optional(),display:i().optional(),inlineHandback:m({displayName:i(),content:H(m({type:F("text"),text:i()}))}).optional().catch(void 0),routing:ye().optional(),request_id:ye().optional(),target:ye().optional()}));function u7t(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?l7t(e.inlineHandback):e.message)}function bPn(e){let n=c7t().safeParse(e);return n.success?u7t(n.data)??"":""}
export{hPn,gPn,yPn,l7t,c7t,u7t,bPn};
