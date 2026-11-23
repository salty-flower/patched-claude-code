// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{uX,c}from"./chunk-ztxp0r5w.js";import{t}from"./chunk-ray9kegj.js";import{O}from"./chunk-h4js79s0.js";import{aU}from"./chunk-nyqc2ee5.js";import{Ld}from"./chunk-tfbxyjsx.js";var fdn=(o,e)=>aU(o,e)?{ceiling:"ask"}:{};var CB=(o)=>({tool:o.name,ceiling:fdn(o).ceiling});function nwt(o){return o.hook.type==="callback"&&o.hook.internal===!0}function Lsa(o,e){if(Ld()){let r=o.filter(nwt),n=o.length-r.length;if(n>0)t(`Hooks: ${n} ${e} ${O(n,"hook")} from settings or plugins not run: claude mcp serve --transport http never runs them (intended)`,{level:"warn"}),c(uX(e),"not_run_in_tool_server_daemon",{num_dropped:n});return r}return o}
export{fdn,CB,nwt,Lsa};
