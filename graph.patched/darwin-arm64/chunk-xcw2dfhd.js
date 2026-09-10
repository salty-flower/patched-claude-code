// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{Xr}from"./chunk-8ntdkyww.js";import{X,ap}from"./chunk-asdfkk3x.js";var Lj=Xr({kind:"mcp_elicitation",payload:m(()=>ap((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>ap((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),XG=Xr({kind:"mcp_elicitation_waiting",payload:m(()=>ap((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>X(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function Ocn(t){return t===Lj.kind||t===XG.kind}
export{Lj,XG,Ocn};
