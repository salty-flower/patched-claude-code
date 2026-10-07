// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{Vo}from"./chunk-9gh21bjz.js";import{z,yu}from"./chunk-6kgnb6mn.js";var _Q=Vo({kind:"mcp_elicitation",payload:f(()=>yu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>yu((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),dre=Vo({kind:"mcp_elicitation_waiting",payload:f(()=>yu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>z(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function NRr(t){return t===_Q.kind||t===dre.kind}
export{_Q,dre,NRr};
