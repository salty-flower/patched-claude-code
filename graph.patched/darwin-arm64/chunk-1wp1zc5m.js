// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{m}from"./chunk-55w4bsdv.js";import{ro}from"./chunk-q2gm8d5d.js";import{ee,tp}from"./chunk-7a4adv8j.js";var M2=ro({kind:"mcp_elicitation",payload:m(()=>tp((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>tp((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),x9=ro({kind:"mcp_elicitation_waiting",payload:m(()=>tp((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>ee(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function Uon(t){return t===M2.kind||t===x9.kind}
export{M2,x9,Uon};
