// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{la}from"./chunk-fcb9ddnr.js";import{lRt}from"./chunk-167xpx5m.js";import{dt}from"./chunk-dd07ew42.js";import{Zg}from"./chunk-7ax1ky5d.js";import{A,ir,E,N}from"./chunk-q0z49y3j.js";N();function iW(e,o,t){let s=la(e-t+1,0,Math.max(0,o-t)),i=Math.min(s+t,o);return{windowStart:s,windowEnd:i,moreAbove:s,moreBelow:o-i}}function Rxn({count:e,visibleCount:o,isDisabled:t=!1,onAccept:s,onRowKeyDown:i,onCursorChange:w,edge:v="clamp"}){let l=E(null),[b,u,y]=Zg(0),d=lRt(l),m=Math.max(0,e-1),n=la(b,0,m);function a(r){u((c)=>{let p=la(c,0,m)+r;if(v==="wrap"&&e>0)return(p%e+e)%e;return la(p,0,m)})}A(()=>{if(b!==n)u(n)},[b,n,u]);let x=ir((r)=>w?.(r)),f=E(null);A(()=>{if(e===0){f.current=null;return}if(f.current!==n)f.current=n,x(n)},[n,e]),dt({"select:next":()=>a(1),"select:previous":()=>a(-1),"select:pageDown":()=>a(o),"select:pageUp":()=>a(-o),"select:first":()=>u(0),"select:last":()=>u(m)},{context:"Select",isActive:d&&!t&&e>0});function R(r){if(t||e===0)return;let c=la(y(),0,m);if(r.key==="return"&&s){s(c),r.preventDefault(),r.stopImmediatePropagation();return}i?.(r,c)}let k=iW(n,e,o);return{cursor:n,...k,isCursor:(r)=>r===n&&e>0,hasFocus:d,setCursor:(r)=>u(la(r,0,m)),containerRef:l,bind:{ref:l,tabIndex:0,onKeyDown:R}}}
export{iW,Rxn};
