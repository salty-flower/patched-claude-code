// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{f}from"./chunk-67jj8qay.js";import{io}from"./chunk-xks3bk6d.js";import{q,Cp}from"./chunk-ehsmc9ae.js";var GG=io({kind:"mcp_elicitation",payload:f(()=>Cp((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>Cp((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),h3=io({kind:"mcp_elicitation_waiting",payload:f(()=>Cp((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>q(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function qTn(t){return t===GG.kind||t===h3.kind}
export{GG,h3,qTn};
