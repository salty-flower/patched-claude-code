// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{m}from"./chunk-ffgkv432.js";import{io}from"./chunk-m29m10xn.js";import{ee,Wd}from"./chunk-rwtwjs93.js";var g2=io({kind:"mcp_elicitation",payload:m(()=>Wd((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>Wd((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),n9=io({kind:"mcp_elicitation_waiting",payload:m(()=>Wd((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>ee(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function Tnn(t){return t===g2.kind||t===n9.kind}
export{g2,n9,Tnn};
