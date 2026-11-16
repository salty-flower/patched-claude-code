// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{y6}from"./chunk-84hfcbts.js";import{Ce}from"./chunk-ckyg68b0.js";import{tpt,f7t,s,b6,Vo}from"./chunk-bzk3ayzm.js";import{S$}from"./chunk-jbhh68e1.js";import{e}from"./chunk-zrhzz8fw.js";import{ve,an,x,y,j}from"./chunk-mp0bjfh5.js";j();function wq({children:R,lock:o="always",restartKey:i}){let[w,{isVisible:H},d]=b6(),{rows:r,columns:m}=Ce(),c=x(null),[t,u]=y({minHeight:0,rows:r,columns:m,restartKey:i}),l=o==="always"&&(t.rows!==r||t.columns!==m||t.restartKey!==i),P=ve(S$),C=ve(tpt),p=(o==="always"||!H&&!(P&&f7t(C)==="fullscreen"))&&!l,a=x(0),g=Math.max(t.minHeight,a.current),E=ve(y6)!==null;return an(()=>{if(!c.current)return;let{height:h}=Vo(c.current),n=Math.min(h,r);if(l){u({minHeight:n,rows:r,columns:m,restartKey:i});return}if(h>g){if(E&&o==="offscreen"&&!p&&n>=t.minHeight&&d()){a.current=n;return}a.current=0,u((f)=>f.minHeight===n?f:{...f,minHeight:n})}}),e(s,{minHeight:p?g:void 0,ref:w,children:e(s,{ref:c,flexDirection:"column",children:R})})}
export{wq};
