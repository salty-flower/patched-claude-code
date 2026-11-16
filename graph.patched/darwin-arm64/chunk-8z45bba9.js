// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{qo}from"./chunk-v7hbfjc2.js";import{B,hm}from"./chunk-m507bxk0.js";var Kq=qo({kind:"mcp_elicitation",payload:p(()=>hm((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>hm((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),jRe=qo({kind:"mcp_elicitation_waiting",payload:p(()=>hm((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>B(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function r_s(t){return t===Kq.kind||t===jRe.kind}
export{Kq,jRe,r_s};
