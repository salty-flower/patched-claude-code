// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ws}from"./chunk-732yb76j.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),eEi=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function GP(t,e){return`${t}=${e}`}function tno(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[GP(t,n)];return[t,n]}function QRn(t,e,n){t.push(...tno(`--${e}`,n))}function Ldr(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!ws(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")QRn(t,r,s),i++}return i}
export{eEi,GP,tno,QRn,Ldr};
