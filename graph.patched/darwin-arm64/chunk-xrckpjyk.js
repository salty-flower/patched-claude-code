// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Pa}from"./chunk-dxy3a77e.js";import{FLt}from"./chunk-hm4dvvtr.js";import{ht}from"./chunk-ff8pzgc2.js";import{Dy}from"./chunk-bkjpsvyg.js";import{A,br,C,F}from"./chunk-w6mhhrt2.js";F();function yq(e,o,t){let s=Pa(e-t+1,0,Math.max(0,o-t)),i=Math.min(s+t,o);return{windowStart:s,windowEnd:i,moreAbove:s,moreBelow:o-i}}function SMn({count:e,visibleCount:o,isDisabled:t=!1,onAccept:s,onRowKeyDown:i,onCursorChange:w,edge:v="clamp"}){let l=C(null),[b,u,y]=Dy(0),d=FLt(l),m=Math.max(0,e-1),n=Pa(b,0,m);function a(r){u((c)=>{let p=Pa(c,0,m)+r;if(v==="wrap"&&e>0)return(p%e+e)%e;return Pa(p,0,m)})}A(()=>{if(b!==n)u(n)},[b,n,u]);let E=br((r)=>w?.(r)),f=C(null);A(()=>{if(e===0){f.current=null;return}if(f.current!==n)f.current=n,E(n)},[n,e]),ht({"select:next":()=>a(1),"select:previous":()=>a(-1),"select:pageDown":()=>a(o),"select:pageUp":()=>a(-o),"select:first":()=>u(0),"select:last":()=>u(m)},{context:"Select",isActive:d&&!t&&e>0});function x(r){if(t||e===0)return;let c=Pa(y(),0,m);if(r.key==="return"&&s){s(c),r.preventDefault(),r.stopImmediatePropagation();return}i?.(r,c)}let R=yq(n,e,o);return{cursor:n,...R,isCursor:(r)=>r===n&&e>0,hasFocus:d,setCursor:(r)=>u(Pa(r,0,m)),containerRef:l,bind:{ref:l,tabIndex:0,onKeyDown:x}}}
export{yq,SMn};
