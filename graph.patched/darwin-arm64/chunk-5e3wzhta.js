// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{oe}from"./chunk-j9jm69dt.js";import{tre,nvo,DAs,att}from"./chunk-wqb2b4v0.js";import{Ri,Hje}from"./chunk-n75e8dzn.js";function Hbe(){return att()||tre(Ri,Hje())}function sas(){if(!Hbe())return null;if(DAs()&&!tre(Ri,Hje()))return nvo;return"--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry)."}function lIn(r){let{mode:e,isBypassPermissionsModeAvailable:o}=oe(r);return e==="bypassPermissions"||e==="plan"&&o}
export{Hbe,sas,lIn};
