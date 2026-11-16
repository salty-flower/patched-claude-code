// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{jg,un}from"./chunk-a5a37ds7.js";import{Vli}from"./chunk-bqqn1m18.js";function Je(t,{safe:e}){try{let{value:n,source:r}=un(t,e),o=!jg();return Vli({value:n,source:r,defaultHost:o},e)}catch{return e}}function ezr(t,{safe:e,others:n}){try{let{value:r,source:o}=un(t,e),u=n.find((i)=>i===r);return u!==void 0&&o==="payload"&&!jg()?u:e}catch{return e}}
export{Je,ezr};
