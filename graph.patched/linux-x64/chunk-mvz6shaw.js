// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{La}from"./chunk-rwc09rdb.js";import{N$t}from"./chunk-snr8xejh.js";import{ht}from"./chunk-x95ptz29.js";import{P_}from"./chunk-z9frxzzs.js";import{A,Sr,v,F}from"./chunk-v59pjxqq.js";F();function gK(e,o,t){let s=La(e-t+1,0,Math.max(0,o-t)),i=Math.min(s+t,o);return{windowStart:s,windowEnd:i,moreAbove:s,moreBelow:o-i}}function mMn({count:e,visibleCount:o,isDisabled:t=!1,onAccept:s,onRowKeyDown:i,onCursorChange:w,edge:y="clamp"}){let l=v(null),[b,u,E]=P_(0),d=N$t(l),m=Math.max(0,e-1),n=La(b,0,m);function a(r){u((c)=>{let p=La(c,0,m)+r;if(y==="wrap"&&e>0)return(p%e+e)%e;return La(p,0,m)})}A(()=>{if(b!==n)u(n)},[b,n,u]);let x=Sr((r)=>w?.(r)),f=v(null);A(()=>{if(e===0){f.current=null;return}if(f.current!==n)f.current=n,x(n)},[n,e]),ht({"select:next":()=>a(1),"select:previous":()=>a(-1),"select:pageDown":()=>a(o),"select:pageUp":()=>a(-o),"select:first":()=>u(0),"select:last":()=>u(m)},{context:"Select",isActive:d&&!t&&e>0});function R(r){if(t||e===0)return;let c=La(E(),0,m);if(r.key==="return"&&s){s(c),r.preventDefault(),r.stopImmediatePropagation();return}i?.(r,c)}let k=gK(n,e,o);return{cursor:n,...k,isCursor:(r)=>r===n&&e>0,hasFocus:d,setCursor:(r)=>u(La(r,0,m)),containerRef:l,bind:{ref:l,tabIndex:0,onKeyDown:R}}}
export{gK,mMn};
