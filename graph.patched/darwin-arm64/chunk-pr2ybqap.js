// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{qB}from"./chunk-kcfessqd.js";import{ve}from"./chunk-zq3940cv.js";import{s,J8,Qs}from"./chunk-t3eqa5fc.js";import{e}from"./chunk-q4w894bt.js";import{ke,Xt,A,y,B}from"./chunk-2txtxkxk.js";B();function X3({children:R,lock:o="always",restartKey:i}){let[w,{isVisible:H},x]=J8(),{rows:r,columns:c}=ve(),m=A(null),[t,u]=y({minHeight:0,rows:r,columns:c,restartKey:i}),l=o==="always"&&(t.rows!==r||t.columns!==c||t.restartKey!==i),p=(o==="always"||!H)&&!l,a=A(0),g=Math.max(t.minHeight,a.current),d=ke(qB)!==null;return Xt(()=>{if(!m.current)return;let{height:h}=Qs(m.current),n=Math.min(h,r);if(l){u({minHeight:n,rows:r,columns:c,restartKey:i});return}if(h>g){if(d&&o==="offscreen"&&!p&&n>=t.minHeight&&x()){a.current=n;return}a.current=0,u((f)=>f.minHeight===n?f:{...f,minHeight:n})}}),e(s,{minHeight:p?g:void 0,ref:w,children:e(s,{ref:m,flexDirection:"column",children:R})})}
export{X3};
