// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{lt}from"./chunk-2c0pkjse.js";import{sS,nl}from"./chunk-1xqd80pz.js";function ctn(){let e=lt().defaultShell;if(e==="bash"&&!nl())return"powershell";if(e==="powershell"&&!sS())return"bash";return e??(nl()?"bash":"powershell")}
export{ctn};
