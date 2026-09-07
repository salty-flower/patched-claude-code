// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{Yr}from"./chunk-jxnzkwn8.js";import{X,lf}from"./chunk-krs3sfpb.js";var EU=Yr({kind:"mcp_elicitation",payload:m(()=>lf((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>lf((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),xW=Yr({kind:"mcp_elicitation_waiting",payload:m(()=>lf((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>X(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function Qen(t){return t===EU.kind||t===xW.kind}
export{EU,xW,Qen};
