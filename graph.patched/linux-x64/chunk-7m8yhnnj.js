// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{jr,Lwn,Ze}from"./chunk-fqmzf5r4.js";import{ah}from"./chunk-ya2m8d4c.js";import{hg}from"./chunk-1fka5x2f.js";import{basename as a,dirname as c}from"path";var CGs=6;function kOe(e){return e.endsWith(".meta.json")?tw(e):void 0}function tw(e){let i=a(e);if(Lwn(i))return;let o=ah(),t=[i],n=c(e);while(n!==o&&t.length<=CGs+1){let f=c(n);if(f===n)return;t.unshift(a(n)),n=f}if(n!==o||t.length<3)return;let[s,d,...r]=t;if(!jr(s)||!jr(d)||r.length===0||!r.every(jr))return;let u=Ze.sidecar(s,d,r);return hg(u)===void 0?u:void 0}function HKn(e){return typeof e==="string"?tw(e):e.key}
export{CGs,kOe,tw,HKn};
