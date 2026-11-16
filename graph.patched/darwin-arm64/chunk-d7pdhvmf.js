// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{jr,Xwn,Ze}from"./chunk-jhh9hbv6.js";import{ah}from"./chunk-a0s0k7pm.js";import{hg}from"./chunk-apc08a8f.js";import{basename as a,dirname as c}from"path";var lGs=6;function AIe(e){return e.endsWith(".meta.json")?nw(e):void 0}function nw(e){let i=a(e);if(Xwn(i))return;let o=ah(),t=[i],n=c(e);while(n!==o&&t.length<=lGs+1){let f=c(n);if(f===n)return;t.unshift(a(n)),n=f}if(n!==o||t.length<3)return;let[s,d,...r]=t;if(!jr(s)||!jr(d)||r.length===0||!r.every(jr))return;let u=Ze.sidecar(s,d,r);return hg(u)===void 0?u:void 0}function o3n(e){return typeof e==="string"?nw(e):e.key}
export{lGs,AIe,nw,o3n};
