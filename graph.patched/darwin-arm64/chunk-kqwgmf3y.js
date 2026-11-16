// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{zPe,NK}from"./chunk-zx9k5583.js";function Dr(e,r,o="foreground"){return(t)=>{if(!e)return t;if(e.startsWith("rgb(")||e.startsWith("#")||e.startsWith("ansi256(")||e.startsWith("ansi:"))return zPe(t,e,o);let i=typeof r==="string"?NK(r):r;return zPe(t,i[e],o)}}
export{Dr};
