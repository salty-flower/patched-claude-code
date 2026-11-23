// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-ray9kegj.js";import{cDn}from"./chunk-mbnj9tfb.js";import{YAr,Zks}from"./chunk-zaxe68t4.js";import{L}from"./chunk-m55q213p.js";import{randomUUID as p}from"crypto";function iDn(e){let o=Zks(e,YAr(e,e));return o===null?e:[...e,n(o)]}function d$i(e,o){let r=s(e),a=L([...r.ended??[],...o]);return[...e,n(a.length>0?{...r,ended:a}:r)]}var vuo=(e)=>n(s(e)),s=(e)=>Zks(e,YAr(e,e))??{type:"session_cron_carry",tasks:[]};function c$i(e){return cDn.subscribe(()=>{try{e.append(vuo(e.getSnapshot()))}catch(o){t(`[loop] cancel note not written: ${o instanceof Error?o.name:"unknown"}`,{level:"error"})}})}var n=(e)=>({attachment:e,type:"attachment",uuid:p(),timestamp:new Date().toISOString()});
export{iDn,d$i,vuo,c$i};
