// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ym}from"./chunk-28n1q6sq.js";import{randomUUID as s}from"crypto";var yLi=(e,t)=>({type:"system",subtype:"informational",content:`Started in the background: ${t}`,isMeta:!1,timestamp:new Date().toISOString(),uuid:s(),level:"info",launchedAgentId:e});function SLi(e){let n=e.type==="system"&&e.subtype==="informational"?e.launchedAgentId:void 0;return n!==void 0&&ym(n)!==null?n:void 0}
export{yLi,SLi};
