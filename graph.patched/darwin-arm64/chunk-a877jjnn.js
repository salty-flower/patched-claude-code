// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ise,H3}from"./chunk-w4yaq9v5.js";import{pZ}from"./chunk-0dvmr1jq.js";function Ck(o,e){let n={name:e.client.name,config:o};return{...e,client:ise(e.client,o),...e.tools!==void 0&&{tools:H3(n,e.tools)},...e.commands!==void 0&&{commands:pZ(n,e.commands)}}}
export{Ck};
