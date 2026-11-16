// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{Ko}from"./chunk-5y050cdx.js";import{B,Om}from"./chunk-xrhk683g.js";var B6=Ko({kind:"mcp_elicitation",payload:p(()=>Om((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>Om((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),BRe=Ko({kind:"mcp_elicitation_waiting",payload:p(()=>Om((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>B(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function R_s(t){return t===B6.kind||t===BRe.kind}
export{B6,BRe,R_s};
