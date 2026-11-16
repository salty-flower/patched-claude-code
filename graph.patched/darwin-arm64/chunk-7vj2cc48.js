// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Su}from"./chunk-6g42pyr2.js";function c$i(t){if(Su())return;return t.remoteSessionName??t.standaloneAgentContext?.name}function Nze(t,e){let n=t.standaloneAgentContext;if(!Object.keys(e).some((o)=>n?.[o]!==e[o]))return t;return{...t,standaloneAgentContext:{...n,name:n?.name??"",...e}}}
export{c$i,Nze};
