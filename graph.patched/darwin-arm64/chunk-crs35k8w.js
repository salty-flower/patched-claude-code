// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import{Co}from"./chunk-ngwqd9jr.js";import{G,Jd}from"./chunk-g4gq2k0z.js";var lY=Co({kind:"mcp_elicitation",payload:p(()=>Jd((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>Jd((t)=>typeof t==="object"&&t!==null)),default:{action:"cancel"},holdsTop:!0}),_Z=Co({kind:"mcp_elicitation_waiting",payload:p(()=>Jd((t)=>typeof t==="object"&&t!==null&&("serverName"in t)&&("params"in t))),result:p(()=>G(["dismiss","retry","cancel","cancelled"])),default:"cancelled"});function Pyr(t){return t===lY.kind||t===_Z.kind}
export{lY,_Z,Pyr};
