// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{f}from"./chunk-67jj8qay.js";import{to}from"./chunk-r5naxekh.js";import{V,op}from"./chunk-s6d8yza1.js";var Qz=to({kind:"mcp_elicitation",payload:f(()=>op((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>op((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),kq=to({kind:"mcp_elicitation_waiting",payload:f(()=>op((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>V(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function Dkn(t){return t===Qz.kind||t===kq.kind}
export{Qz,kq,Dkn};
