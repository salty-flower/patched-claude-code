// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{gc}from"./chunk-drdzaj23.js";import{t}from"./chunk-5nh49npx.js";import{Pr,Nyt}from"./chunk-km6bp290.js";var r=/^[a-zA-Z0-9_-]{1,64}$/;function n4n(i,n=gc){if(!("tools"in i)||i.tools===void 0)return[];if(!Array.isArray(i.tools))return t("[bridge:meta-mcp] meta tools[] is not an array",{level:"warn"}),null;let e=[];for(let o of i.tools){if(o===null||typeof o!=="object"||!("name"in o)||typeof o.name!=="string"||!r.test(o.name))return t("[bridge:meta-mcp] injected tools[] entry is malformed",{level:"warn"}),null;e.push({name:o.name,..."permission_policy"in o&&typeof o.permission_policy==="string"&&{permission_policy:o.permission_policy}})}let{allow:s}=Nyt({[n]:{type:"http",tools:e}}),l=Pr(n,"");return s.map((o)=>o.startsWith(l)?o.slice(l.length):o)}
export{n4n};
