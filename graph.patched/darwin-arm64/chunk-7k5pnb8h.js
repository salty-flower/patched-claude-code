// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Xe}from"./chunk-e561d543.js";import{Yb,Ta}from"./chunk-q01dwdda.js";function s3t(){let e=Xe().defaultShell;if(e==="bash"&&!Ta())return"powershell";if(e==="powershell"&&!Yb())return"bash";return e??(Ta()?"bash":"powershell")}
export{s3t};
