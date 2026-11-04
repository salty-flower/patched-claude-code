// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{se}from"./chunk-7jy1wcvq.js";import{wQ,vZr,oZo,r9e}from"./chunk-0x9x817t.js";import{qa,gHe}from"./chunk-jncb2bh3.js";function vme(){return r9e()||wQ(qa,gHe())}function MUo(){if(!vme())return null;if(oZo()&&!wQ(qa,gHe()))return vZr;return"--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry)."}function f8n(r){let{mode:e,isBypassPermissionsModeAvailable:o}=se(r);return e==="bypassPermissions"||e==="plan"&&o}
export{vme,MUo,f8n};
