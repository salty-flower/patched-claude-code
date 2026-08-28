// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Wt,gO,ve}from"./chunk-fz00m7zs.js";import{Os}from"./chunk-6ypvgjr3.js";import{On}from"./chunk-gxpna0zj.js";import{basename as a,dirname as m}from"path";var c=6;function IKe(n){return n.endsWith(".meta.json")?Bv(n):void 0}function Bv(n){let i=a(n);if(gO(i))return;let o=Os(),t=[i],e=m(n);while(e!==o&&t.length<=c+1){let u=m(e);if(u===e)return;t.unshift(a(e)),e=u}if(e!==o||t.length<3)return;let[s,d,...r]=t;if(!Wt(s)||!Wt(d)||r.length===0||!r.every(Wt))return;let f=ve.sidecar(s,d,r);return On(f)===void 0?f:void 0}
export{IKe,Bv};
