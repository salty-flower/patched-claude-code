// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ce}from"./chunk-waw2sr63.js";import{oX,zkr,h_o,r1e}from"./chunk-na9nw575.js";import{Va,WCe}from"./chunk-6wcw8b1j.js";function Xoe(){return r1e()||oX(Va,WCe())}function AQr(){if(!Xoe())return null;if(h_o()&&!oX(Va,WCe()))return zkr;return"--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry)."}function QAn(r){let{mode:e,isBypassPermissionsModeAvailable:o}=ce(r);return e==="bypassPermissions"||e==="plan"&&o}
export{Xoe,AQr,QAn};
