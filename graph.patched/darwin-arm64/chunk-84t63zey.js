// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{Xo}from"./chunk-tq54kehp.js";import{B,Dc}from"./chunk-82bgdty3.js";var Vre=Xo({kind:"mcp_elicitation",payload:f(()=>Dc((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>Dc((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Zde=Xo({kind:"mcp_elicitation_waiting",payload:f(()=>Dc((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>B(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function W9r(t){return t===Vre.kind||t===Zde.kind}
export{Vre,Zde,W9r};
