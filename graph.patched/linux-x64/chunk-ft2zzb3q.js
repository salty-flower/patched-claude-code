// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_m}from"./chunk-pjehsasc.js";import{randomUUID as s}from"crypto";var WDi=(e,t)=>({type:"system",subtype:"informational",content:`Started in the background: ${t}`,isMeta:!1,timestamp:new Date().toISOString(),uuid:s(),level:"info",launchedAgentId:e});function GDi(e){let n=e.type==="system"&&e.subtype==="informational"?e.launchedAgentId:void 0;return n!==void 0&&_m(n)!==null?n:void 0}
export{WDi,GDi};
