// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Le}from"./chunk-5p4f0tx0.js";import{t}from"./chunk-bdfv2ky4.js";import{qe}from"./chunk-hqh4zzjp.js";function u(){let r=Le(),e=new Map,o=0;return{emit(i,s){if(o===0){e.set(i,s);return}r.emit(i,s)},subscribe(i){o++;let s=[...e];e.clear();for(let[g,l]of s)i(g,l);let c=r.subscribe(i),n=!0;return()=>{if(n)n=!1,o--,c()}}}}var IQr=new qe(u),q8t="device-mcp-not-now";function Oir(r){return(e,o)=>{t(`[remote-tools] ${e}: ${o}`),IQr.of(r).emit(e,o)}}
export{IQr,q8t,Oir};
