// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function Tve(e){return typeof e==="string"&&e.startsWith("mcprs")?`mcpsrv${e.slice(5)}`:e}function cv(e){return e.type==="claudeai-proxy"&&e.scope==="claudeai"&&e.id?Tve(e.id):void 0}
export{Tve,cv};
