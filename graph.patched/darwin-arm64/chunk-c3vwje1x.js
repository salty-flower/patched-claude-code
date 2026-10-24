// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{os}from"./chunk-98em9746.js";import{B,Eu}from"./chunk-k395ayhm.js";var v7=os({kind:"mcp_elicitation",payload:f(()=>Eu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>Eu((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),xme=os({kind:"mcp_elicitation_waiting",payload:f(()=>Eu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>B(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function tbo(t){return t===v7.kind||t===xme.kind}
export{v7,xme,tbo};
