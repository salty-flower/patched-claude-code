// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{wc}from"./chunk-jnz6ntmk.js";import{xt}from"./chunk-bpwteezm.js";import{B,A,br,qn,C,u,F}from"./chunk-w6mhhrt2.js";F();function Be(e,i,s={}){let{context:n="Global",isActive:o=!0}=s,r=wc(),[t]=u(()=>({handler:i}));qn(()=>{t.handler=i}),A(()=>{if(!r||!o)return;return r.registerHandler({action:e,context:n,handler:()=>t.handler(),singleKey:!0})},[e,n,r,o,t])}function ht(e,i={}){let{context:s="Global",isActive:n=!0}=i,o=wc(),[r]=u(()=>({handlers:e})),t=Object.keys(e).sort().join("|");qn(()=>{r.handlers=e}),A(()=>{if(!o||!n)return;let d=Object.keys(r.handlers).map((c)=>o.registerHandler({action:c,context:s,handler:()=>r.handlers[c]?.(),singleKey:!0}));return()=>{for(let c of d)c()}},[s,t,o,n,r])}function w8(e,{isActive:i=!0}={}){let s=wc(),[n]=u(()=>({handler:e}));qn(()=>{n.handler=e}),A(()=>{if(!i||!s)return;return s.registerPreDispatch({handler:(o,r,t)=>n.handler(o,r,t)})},[i,s,n])}F();var a=800;function YP(e,i,s,n=a){let o=xt(),r=C(0),t=C(void 0),d=br(()=>e(!1)),c=B(()=>{if(t.current)t.current(),t.current=void 0},[]);return A(()=>()=>{if(t.current)c(),d()},[c]),B(()=>{let l=Date.now();if(l-r.current<=n&&t.current!==void 0)c(),e(!1),i();else s?.(),e(!0),c(),t.current=o.setTimeout(()=>{e(!1),t.current=void 0},n);r.current=l},[e,i,s,c,o,n])}
export{Be,ht,w8,YP};
