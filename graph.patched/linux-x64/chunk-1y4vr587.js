// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Ge}from"./chunk-ggjhe3cp.js";import{MP,Ci}from"./chunk-qxsf33a1.js";function Vwt(){let e=Ge().defaultShell;if(e==="bash"&&!Ci())return"powershell";if(e==="powershell"&&!MP())return"bash";return e??(Ci()?"bash":"powershell")}
export{Vwt};
