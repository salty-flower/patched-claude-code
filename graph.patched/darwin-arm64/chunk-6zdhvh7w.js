// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-bdfv2ky4.js";import{CDn}from"./chunk-6mxx9khc.js";import{AAr,Nks}from"./chunk-wqb2b4v0.js";import{L}from"./chunk-zqmjz0gj.js";import{randomUUID as p}from"crypto";function EDn(e){let o=Nks(e,AAr(e,e));return o===null?e:[...e,n(o)]}function F1i(e,o){let r=s(e),a=L([...r.ended??[],...o]);return[...e,n(a.length>0?{...r,ended:a}:r)]}var Wuo=(e)=>n(s(e)),s=(e)=>Nks(e,AAr(e,e))??{type:"session_cron_carry",tasks:[]};function $1i(e){return CDn.subscribe(()=>{try{e.append(Wuo(e.getSnapshot()))}catch(o){t(`[loop] cancel note not written: ${o instanceof Error?o.name:"unknown"}`,{level:"error"})}})}var n=(e)=>({attachment:e,type:"attachment",uuid:p(),timestamp:new Date().toISOString()});
export{EDn,F1i,Wuo,$1i};
