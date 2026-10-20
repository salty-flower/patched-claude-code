// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{ts}from"./chunk-8m0vgrb8.js";import{N,au}from"./chunk-xv841za9.js";var Rse=ts({kind:"mcp_elicitation",payload:f(()=>au((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>au((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Xue=ts({kind:"mcp_elicitation_waiting",payload:f(()=>au((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>N(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function zlo(t){return t===Rse.kind||t===Xue.kind}
export{Rse,Xue,zlo};
