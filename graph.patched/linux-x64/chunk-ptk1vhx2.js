// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ut}from"./chunk-a502zyxr.js";import{Kw,Vl}from"./chunk-dpk0tdne.js";function cbn(){let e=ut().defaultShell;if(e==="bash"&&!Vl())return"powershell";if(e==="powershell"&&!Kw())return"bash";return e??(Vl()?"bash":"powershell")}
export{cbn};
