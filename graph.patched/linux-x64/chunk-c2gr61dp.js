// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Le}from"./chunk-732yb76j.js";import{t}from"./chunk-ray9kegj.js";import{qe}from"./chunk-2xv5yvxr.js";function u(){let r=Le(),e=new Map,o=0;return{emit(i,s){if(o===0){e.set(i,s);return}r.emit(i,s)},subscribe(i){o++;let s=[...e];e.clear();for(let[g,l]of s)i(g,l);let c=r.subscribe(i),n=!0;return()=>{if(n)n=!1,o--,c()}}}}var cQr=new qe(u),H9t="device-mcp-not-now";function lir(r){return(e,o)=>{t(`[remote-tools] ${e}: ${o}`),cQr.of(r).emit(e,o)}}
export{cQr,H9t,lir};
