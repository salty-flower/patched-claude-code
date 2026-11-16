// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Cl}from"./chunk-5eewsfgr.js";import{t}from"./chunk-bdfv2ky4.js";import{tr,xxt}from"./chunk-s0ve5p66.js";var r=/^[a-zA-Z0-9_-]{1,64}$/;function Qdr(i,n=Cl){if(!("tools"in i)||i.tools===void 0)return[];if(!Array.isArray(i.tools))return t("[bridge:meta-mcp] meta tools[] is not an array",{level:"warn"}),null;let e=[];for(let o of i.tools){if(o===null||typeof o!=="object"||!("name"in o)||typeof o.name!=="string"||!r.test(o.name))return t("[bridge:meta-mcp] injected tools[] entry is malformed",{level:"warn"}),null;e.push({name:o.name,..."permission_policy"in o&&typeof o.permission_policy==="string"&&{permission_policy:o.permission_policy}})}let{allow:s}=xxt({[n]:{type:"http",tools:e}}),l=tr(n,"");return s.map((o)=>o.startsWith(l)?o.slice(l.length):o)}
export{Qdr};
