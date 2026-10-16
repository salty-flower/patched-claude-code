// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Qre,m8}from"./chunk-rzt5sadb.js";import{Zre}from"./chunk-jyjyggm8.js";function rA(o,e){let n={name:e.client.name,config:o};return{...e,client:Qre(e.client,o),...e.tools!==void 0&&{tools:m8(n,e.tools)},...e.commands!==void 0&&{commands:Zre(n,e.commands)}}}
export{rA};
