// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Ge}from"./chunk-k515hq0v.js";import{jH,ki}from"./chunk-j391hx3t.js";function xEt(){let e=Ge().defaultShell;if(e==="bash"&&!ki())return"powershell";if(e==="powershell"&&!jH())return"bash";return e??(ki()?"bash":"powershell")}
export{xEt};
