// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Cq}from"./chunk-8q61qac6.js";import{Ae}from"./chunk-bwmknbfj.js";import{dpt,kYt,s,Aq,Vo}from"./chunk-b2f7pn4f.js";import{E1}from"./chunk-e4txnfzt.js";import{e}from"./chunk-zrhzz8fw.js";import{Ee,an,x,y,j}from"./chunk-07a1744w.js";j();function EV({children:R,lock:o="always",restartKey:i}){let[w,{isVisible:H},d]=Aq(),{rows:r,columns:m}=Ae(),c=x(null),[t,u]=y({minHeight:0,rows:r,columns:m,restartKey:i}),l=o==="always"&&(t.rows!==r||t.columns!==m||t.restartKey!==i),P=Ee(E1),C=Ee(dpt),p=(o==="always"||!H&&!(P&&kYt(C)==="fullscreen"))&&!l,a=x(0),g=Math.max(t.minHeight,a.current),E=Ee(Cq)!==null;return an(()=>{if(!c.current)return;let{height:h}=Vo(c.current),n=Math.min(h,r);if(l){u({minHeight:n,rows:r,columns:m,restartKey:i});return}if(h>g){if(E&&o==="offscreen"&&!p&&n>=t.minHeight&&d()){a.current=n;return}a.current=0,u((f)=>f.minHeight===n?f:{...f,minHeight:n})}}),e(s,{minHeight:p?g:void 0,ref:w,children:e(s,{ref:c,flexDirection:"column",children:R})})}
export{EV};
