// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ft}from"./chunk-qwytg6a7.js";import{gE,ed}from"./chunk-f4yykyp9.js";function Ukn(){let e=ft().defaultShell;if(e==="bash"&&!ed())return"powershell";if(e==="powershell"&&!gE())return"bash";return e??(ed()?"bash":"powershell")}
export{Ukn};
