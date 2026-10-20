// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{F1}from"./chunk-gzebjdrm.js";import{Ee}from"./chunk-eetwze2w.js";import{s,j8,Qs}from"./chunk-wfsayads.js";import{e}from"./chunk-8d2nhg02.js";import{ke,Xt,C,y,B}from"./chunk-a2fszd78.js";B();function BY({children:R,lock:o="always",restartKey:i}){let[w,{isVisible:H},x]=j8(),{rows:r,columns:c}=Ee(),m=C(null),[t,u]=y({minHeight:0,rows:r,columns:c,restartKey:i}),l=o==="always"&&(t.rows!==r||t.columns!==c||t.restartKey!==i),p=(o==="always"||!H)&&!l,a=C(0),g=Math.max(t.minHeight,a.current),d=ke(F1)!==null;return Xt(()=>{if(!m.current)return;let{height:h}=Qs(m.current),n=Math.min(h,r);if(l){u({minHeight:n,rows:r,columns:c,restartKey:i});return}if(h>g){if(d&&o==="offscreen"&&!p&&n>=t.minHeight&&x()){a.current=n;return}a.current=0,u((f)=>f.minHeight===n?f:{...f,minHeight:n})}}),e(s,{minHeight:p?g:void 0,ref:w,children:e(s,{ref:m,flexDirection:"column",children:R})})}
export{BY};
