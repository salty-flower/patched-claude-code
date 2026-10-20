// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{pt}from"./chunk-merbp8kx.js";import{mv,td}from"./chunk-h3dn4j2q.js";function pEn(){let e=pt().defaultShell;if(e==="bash"&&!td())return"powershell";if(e==="powershell"&&!mv())return"bash";return e??(td()?"bash":"powershell")}
export{pEn};
