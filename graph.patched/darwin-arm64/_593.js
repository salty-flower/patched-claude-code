// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{fZc as S,gYc as g}from"./_757.js";import{L1c as K,u1c as y}from"./_766.js";import{W1c as r,Y1c as p,b2c as l,j2c as j}from"./_768.js";import{Exd as h}from"./_839.js";import{basename as m,dirname as c}from"path";function x(n){return n.endsWith(".meta.json")?k(n):void 0}function k(n){let o=m(n);if(p(o))return;let s=y(),t=[o],e=c(n);while(e!==s&&t.length<=V+1){let a=c(e);if(a===e)return;t.unshift(m(e)),e=a}if(e!==s||t.length<3)return;let[d,f,...i]=t;if(!r(d)||!r(f)||i.length===0||!i.every(r))return;let u=l.sidecar(d,f,i);return g(u)===void 0?u:void 0}var V=6;var E=h(()=>{j();S();K()});
export{x as USb,k as VSb,E as WSb};
