// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{Jr}from"./chunk-ab6p4xn0.js";import{Y,Fp}from"./chunk-wvjc3h2t.js";var A2=Jr({kind:"mcp_elicitation",payload:m(()=>Fp((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>Fp((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Uq=Jr({kind:"mcp_elicitation_waiting",payload:m(()=>Fp((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>Y(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function Icn(t){return t===A2.kind||t===Uq.kind}
export{A2,Uq,Icn};
