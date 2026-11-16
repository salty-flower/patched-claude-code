// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ws}from"./chunk-5p4f0tx0.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),Gki=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function qP(t,e){return`${t}=${e}`}function xno(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[qP(t,n)];return[t,n]}function Exn(t,e,n){t.push(...xno(`--${e}`,n))}function dcr(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!ws(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")Exn(t,r,s),i++}return i}
export{Gki,qP,xno,Exn,dcr};
