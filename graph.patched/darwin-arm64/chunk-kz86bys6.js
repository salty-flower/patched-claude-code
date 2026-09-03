// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{m}from"./chunk-ffgkv432.js";import{Pr}from"./chunk-darxmw8c.js";import{i,de,R,c,x}from"./chunk-rwtwjs93.js";var c6n="Resumed agent. Its final report is not in this message.",u6n="Resumed agent. Its final report follows this JSON, framed by the harness.";function don({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Pr(n,`
`)||"(no text output)"}`}var pon=m(()=>c({message:i().optional(),display:i().optional(),inlineHandback:c({displayName:i(),content:R(c({type:x("text"),text:i()}))}).optional().catch(void 0),routing:de().optional(),request_id:de().optional(),target:de().optional()}));function fon(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?don(e.inlineHandback):e.message)}function d6n(e){let n=pon().safeParse(e);return n.success?fon(n.data)??"":""}
export{c6n,u6n,don,pon,fon,d6n};
