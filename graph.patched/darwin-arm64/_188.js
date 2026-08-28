// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{S3a as r,T3a as l,V3a as s}from"./_458.js";import{GFc as o,uGc as t}from"./_701.js";t();s();function a(){let e=o().defaultShell;if(e==="bash"&&!l())return"powershell";if(e==="powershell"&&!r())return"bash";return e??(l()?"bash":"powershell")}
export{a as nt};
