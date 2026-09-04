// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Je}from"./chunk-03hrg0m9.js";import{mx,us}from"./chunk-2f05fs7x.js";function fat(){let e=Je().defaultShell;if(e==="bash"&&!us())return"powershell";if(e==="powershell"&&!mx())return"bash";return e??(us()?"bash":"powershell")}
export{fat};
