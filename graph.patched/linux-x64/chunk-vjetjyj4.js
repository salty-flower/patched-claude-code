// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-ras5x31x.js";import{jo}from"./chunk-hvcb9nnd.js";import{j,Cu}from"./chunk-w8db6ytr.js";var V7=jo({kind:"mcp_elicitation",payload:f(()=>Cu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>Cu((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Noe=jo({kind:"mcp_elicitation_waiting",payload:f(()=>Cu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>j(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function i0r(t){return t===V7.kind||t===Noe.kind}
export{V7,Noe,i0r};
