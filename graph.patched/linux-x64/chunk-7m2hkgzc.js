// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bu}from"./chunk-t459j1s5.js";function L$i(t){if(bu())return;return t.remoteSessionName??t.standaloneAgentContext?.name}function OVe(t,e){let n=t.standaloneAgentContext;if(!Object.keys(e).some((o)=>n?.[o]!==e[o]))return t;return{...t,standaloneAgentContext:{...n,name:n?.name??"",...e}}}
export{L$i,OVe};
