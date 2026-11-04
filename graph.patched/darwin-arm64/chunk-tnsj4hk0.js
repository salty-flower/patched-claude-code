// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{hc}from"./chunk-t6k5f52q.js";function ati(t){if(hc())return;return t.remoteSessionName??t.standaloneAgentContext?.name}function Dot(t,e){let n=t.standaloneAgentContext;if(!Object.keys(e).some((o)=>n?.[o]!==e[o]))return t;return{...t,standaloneAgentContext:{...n,name:n?.name??"",...e}}}
export{ati,Dot};
