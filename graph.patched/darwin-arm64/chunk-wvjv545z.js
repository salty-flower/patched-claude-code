// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{ae}from"./chunk-hx3hkv7r.js";import{nJ,Y0r,Hxo,MWe}from"./chunk-31gxg38t.js";import{Va,NRe}from"./chunk-ny0f62md.js";function bae(){return MWe()||nJ(Va,NRe())}function Ddo(){if(!bae())return null;if(Hxo()&&!nJ(Va,NRe()))return Y0r;return"--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry)."}function wHn(r){let{mode:e,isBypassPermissionsModeAvailable:o}=ae(r);return e==="bypassPermissions"||e==="plan"&&o}
export{bae,Ddo,wHn};
