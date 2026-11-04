// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{I6}from"./chunk-9ydebr8y.js";import{Ae}from"./chunk-vgz7sq7p.js";import{s,Xq,xs}from"./chunk-v5qk8x3w.js";import{e}from"./chunk-6n4z8qxn.js";import{Ee,Zt,R,y,j}from"./chunk-rt5zqm44.js";j();function K2({children:w,lock:o="always",restartKey:i}){let[H,{isVisible:x},d]=Xq(),{rows:r,columns:c}=Ae(),m=R(null),[t,u]=y({minHeight:0,rows:r,columns:c,restartKey:i}),l=o==="always"&&(t.rows!==r||t.columns!==c||t.restartKey!==i),p=(o==="always"||!x)&&!l,a=R(0),g=Math.max(t.minHeight,a.current),E=Ee(I6)!==null;return Zt(()=>{if(!m.current)return;let{height:h}=xs(m.current),n=Math.min(h,r);if(l){u({minHeight:n,rows:r,columns:c,restartKey:i});return}if(h>g){if(E&&o==="offscreen"&&!p&&n>=t.minHeight&&d()){a.current=n;return}a.current=0,u((f)=>f.minHeight===n?f:{...f,minHeight:n})}}),e(s,{minHeight:p?g:void 0,ref:H,children:e(s,{ref:m,flexDirection:"column",children:w})})}
export{K2};
