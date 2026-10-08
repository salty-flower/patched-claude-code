// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-y575z4xw.js";import{Do}from"./chunk-qgm2bara.js";import{W,uu}from"./chunk-hcyr0654.js";var tZ=Do({kind:"mcp_elicitation",payload:f(()=>uu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>uu((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),zoe=Do({kind:"mcp_elicitation_waiting",payload:f(()=>uu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>W(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function ODr(t){return t===tZ.kind||t===zoe.kind}
export{tZ,zoe,ODr};
