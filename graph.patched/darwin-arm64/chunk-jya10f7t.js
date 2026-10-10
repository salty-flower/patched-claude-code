// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{Ko}from"./chunk-pa2d6xdm.js";import{U,nu}from"./chunk-9cmjz7j9.js";var Jee=Ko({kind:"mcp_elicitation",payload:p(()=>nu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>nu((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),Bie=Ko({kind:"mcp_elicitation_waiting",payload:p(()=>nu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>U(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function QBr(t){return t===Jee.kind||t===Bie.kind}
export{Jee,Bie,QBr};
