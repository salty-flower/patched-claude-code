// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Zt,BO,we}from"./chunk-wsjwtx5h.js";import{sa}from"./chunk-vv42w3zb.js";import{Kn}from"./chunk-cn7kmt56.js";import{basename as a,dirname as m}from"path";var c=6;function s7e(n){return n.endsWith(".meta.json")?kH(n):void 0}function kH(n){let i=a(n);if(BO(i))return;let o=sa(),t=[i],e=m(n);while(e!==o&&t.length<=c+1){let u=m(e);if(u===e)return;t.unshift(a(e)),e=u}if(e!==o||t.length<3)return;let[s,d,...r]=t;if(!Zt(s)||!Zt(d)||r.length===0||!r.every(Zt))return;let f=we.sidecar(s,d,r);return Kn(f)===void 0?f:void 0}
export{s7e,kH};
