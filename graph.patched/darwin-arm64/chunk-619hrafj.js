// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Qo}from"./chunk-w5484khd.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),i3s=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function WR(t,e){return`${t}=${e}`}function sBr(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[WR(t,n)];return[t,n]}function Gpn(t,e,n){t.push(...sBr(`--${e}`,n))}function m4n(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!Qo(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")Gpn(t,r,s),i++}return i}
export{i3s,WR,sBr,Gpn,m4n};
