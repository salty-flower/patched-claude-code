// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Je}from"./chunk-yhqjr2er.js";import{Zk,cs}from"./chunk-rmhn6c3w.js";function Fit(){let e=Je().defaultShell;if(e==="bash"&&!cs())return"powershell";if(e==="powershell"&&!Zk())return"bash";return e??(cs()?"bash":"powershell")}
export{Fit};
