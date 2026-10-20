// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-949csv87.js";import{ss}from"./chunk-sc0p1c6h.js";import{N,Tu}from"./chunk-mqaa2rrp.js";var bse=ss({kind:"mcp_elicitation",payload:p(()=>Tu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>Tu((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Gue=ss({kind:"mcp_elicitation_waiting",payload:p(()=>Tu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>N(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function ilo(t){return t===bse.kind||t===Gue.kind}
export{bse,Gue,ilo};
