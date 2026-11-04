// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Xir,DXo}from"./chunk-0x9x817t.js";import{randomUUID as n}from"crypto";function e3e(t){let e=DXo(t,Xir(t,t));return e===null?t:[...t,r(e)]}var Lzo=(t)=>r(DXo(t,Xir(t,t))??{type:"session_cron_carry",tasks:[]}),r=(t)=>({attachment:t,type:"attachment",uuid:n(),timestamp:new Date().toISOString()});
export{e3e,Lzo};
