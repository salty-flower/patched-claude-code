// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{jo}from"./chunk-vzsbp1c0.js";import{G,tu}from"./chunk-seb9y51t.js";var kJ=jo({kind:"mcp_elicitation",payload:f(()=>tu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>tu((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),_re=jo({kind:"mcp_elicitation_waiting",payload:f(()=>tu((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:f(()=>G(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function uxr(t){return t===kJ.kind||t===_re.kind}
export{kJ,_re,uxr};
