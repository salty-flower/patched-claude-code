// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bX,c}from"./chunk-f8g4f3e3.js";import{t}from"./chunk-bdfv2ky4.js";import{I}from"./chunk-b5xhmzas.js";import{d$}from"./chunk-qpnykh6b.js";import{Dd}from"./chunk-cjs3tffq.js";var Odn=(o,e)=>d$(o,e)?{ceiling:"ask"}:{};var PB=(o)=>({tool:o.name,ceiling:Odn(o).ceiling});function dwt(o){return o.hook.type==="callback"&&o.hook.internal===!0}function Iia(o,e){if(Dd()){let r=o.filter(dwt),n=o.length-r.length;if(n>0)t(`Hooks: ${n} ${e} ${I(n,"hook")} from settings or plugins not run: claude mcp serve --transport http never runs them (intended)`,{level:"warn"}),c(bX(e),"not_run_in_tool_server_daemon",{num_dropped:n});return r}return o}
export{Odn,PB,dwt,Iia};
