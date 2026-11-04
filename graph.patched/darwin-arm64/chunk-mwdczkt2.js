// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Me}from"./chunk-w5484khd.js";import{t}from"./chunk-5nh49npx.js";import{Je}from"./chunk-k6s5je75.js";function u(){let r=Me(),e=new Map,o=0;return{emit(i,s){if(o===0){e.set(i,s);return}r.emit(i,s)},subscribe(i){o++;let s=[...e];e.clear();for(let[g,l]of s)i(g,l);let c=r.subscribe(i),n=!0;return()=>{if(n)n=!1,o--,c()}}}}var kNr=new Je(u),IBt="device-mcp-not-now";function uVn(r){return(e,o)=>{t(`[remote-tools] ${e}: ${o}`),kNr.of(r).emit(e,o)}}
export{kNr,IBt,uVn};
