// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{m}from"./chunk-55w4bsdv.js";import{Or}from"./chunk-5e9qk3ys.js";import{i,de,R,c,x}from"./chunk-7a4adv8j.js";var kjn="Resumed agent. Its final report is not in this message.",xjn="Resumed agent. Its final report follows this JSON, framed by the harness.";function Cin({displayName:e,content:n}){return`Resumed agent ${e}. Result:

${Or(n,`
`)||"(no text output)"}`}var vin=m(()=>c({message:i().optional(),display:i().optional(),inlineHandback:c({displayName:i(),content:R(c({type:x("text"),text:i()}))}).optional().catch(void 0),routing:de().optional(),request_id:de().optional(),target:de().optional()}));function Rin(e){if(e.routing)return;if(e.request_id!==void 0&&e.target!==void 0)return;return e.display??(e.inlineHandback?Cin(e.inlineHandback):e.message)}function Hjn(e){let n=vin().safeParse(e);return n.success?Rin(n.data)??"":""}
export{kjn,xjn,Cin,vin,Rin,Hjn};
