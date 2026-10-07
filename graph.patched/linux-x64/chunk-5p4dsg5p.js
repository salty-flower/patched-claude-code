// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{de}from"./chunk-qgg9rxyr.js";import{Boe,vXn,WWr,IPe}from"./chunk-9wqh5j7s.js";import{sl,ghe}from"./chunk-v4w1ky6f.js";function g_e(){return IPe()||Boe(sl,ghe())}function tTr(){if(!g_e())return null;if(WWr()&&!Boe(sl,ghe()))return vXn;return"--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry)."}function Hnn(r){let{mode:e,isBypassPermissionsModeAvailable:o}=de(r);return e==="bypassPermissions"||e==="plan"&&o}
export{g_e,tTr,Hnn};
