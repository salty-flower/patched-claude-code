// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ye}from"./chunk-je0c1kfp.js";import{jS,aa}from"./chunk-6vzgd4sc.js";function p2t(){let e=Ye().defaultShell;if(e==="bash"&&!aa())return"powershell";if(e==="powershell"&&!jS())return"bash";return e??(aa()?"bash":"powershell")}
export{p2t};
