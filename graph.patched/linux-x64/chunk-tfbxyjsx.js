// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe}from"./chunk-732yb76j.js";function M7e(){return Pe(process.env.CLAUDE_CODE_REMOTE)&&String(process.env.CLAUDE_CODE_ENVIRONMENT_KIND??"").trim()===""}var s=/^(?:--port(?:=\d+)?|\d+|--result-format(?:=(?:raw|rendered))?|raw|rendered|--session-tunnel|--debug|-d|--verbose)$/;function Ld(){{let e=process.argv;if(e[2]!=="mcp"||e[3]!=="serve")return!1;let[,,t,...r]=e.slice(2),n=t==="--transport=http"?r:t==="--transport"&&r[0]==="http"?r.slice(1):void 0;return M7e()&&n!==void 0&&n.every((o)=>s.test(o))}return!1}
export{M7e,Ld};
