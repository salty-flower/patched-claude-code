// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ct}from"./chunk-861a7whf.js";import{ib,rl}from"./chunk-ax2crbgp.js";function _en(){let e=ct().defaultShell;if(e==="bash"&&!rl())return"powershell";if(e==="powershell"&&!ib())return"bash";return e??(rl()?"bash":"powershell")}
export{_en};
