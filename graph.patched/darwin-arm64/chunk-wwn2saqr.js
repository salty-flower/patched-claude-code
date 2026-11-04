// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{U5,c}from"./chunk-ad5ya8vz.js";import{t}from"./chunk-5nh49npx.js";import{x}from"./chunk-zmmnrc9r.js";import{nd}from"./chunk-x38ad2xg.js";var EXt=(o)=>o.mcpInfo?.effectiveMaxPermission==="ask"?{ceiling:"ask"}:{};var s$=(o)=>({tool:o.name,ceiling:EXt(o).ceiling});function Zct(o){return o.hook.type==="callback"&&o.hook.internal===!0}function ixi(o,n){if(nd()){let r=o.filter(Zct),e=o.length-r.length;if(e>0)t(`Hooks: ${e} ${n} ${x(e,"hook")} from settings or plugins not run: claude mcp serve --transport http never runs them (intended)`,{level:"warn"}),c(U5(n),"not_run_in_tool_server_daemon",{num_dropped:e});return r}return o}
export{EXt,s$,Zct,ixi};
