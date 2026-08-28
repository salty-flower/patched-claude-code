// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{qt,y1,Se}from"./chunk-3vs63y6b.js";import{Ms}from"./chunk-71nbrcp0.js";import{Mn}from"./chunk-chrc29xz.js";import{basename as a,dirname as m}from"path";var c=6;function DKe(n){return n.endsWith(".meta.json")?BS(n):void 0}function BS(n){let i=a(n);if(y1(i))return;let o=Ms(),t=[i],e=m(n);while(e!==o&&t.length<=c+1){let u=m(e);if(u===e)return;t.unshift(a(e)),e=u}if(e!==o||t.length<3)return;let[s,d,...r]=t;if(!qt(s)||!qt(d)||r.length===0||!r.every(qt))return;let f=Se.sidecar(s,d,r);return Mn(f)===void 0?f:void 0}
export{DKe,BS};
