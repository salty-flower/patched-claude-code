// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{Kr}from"./chunk-6yvw59be.js";import{Y,Ud}from"./chunk-zd09sacr.js";var PB=Kr({kind:"mcp_elicitation",payload:m(()=>Ud((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>Ud((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),WW=Kr({kind:"mcp_elicitation_waiting",payload:m(()=>Ud((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:m(()=>Y(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function wtn(t){return t===PB.kind||t===WW.kind}
export{PB,WW,wtn};
