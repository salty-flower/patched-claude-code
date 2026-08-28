// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ql}from"./chunk-5x73xcbp.js";import{kt}from"./chunk-d4940r2z.js";import{B,E,ir,Zn,T,u,N}from"./chunk-5752v0zq.js";N();function Be(e,i,s={}){let{context:n="Global",isActive:o=!0}=s,r=ql(),[t]=u(()=>({handler:i}));Zn(()=>{t.handler=i}),E(()=>{if(!r||!o)return;return r.registerHandler({action:e,context:n,handler:()=>t.handler(),singleKey:!0})},[e,n,r,o,t])}function dt(e,i={}){let{context:s="Global",isActive:n=!0}=i,o=ql(),[r]=u(()=>({handlers:e})),t=Object.keys(e).sort().join("|");Zn(()=>{r.handlers=e}),E(()=>{if(!o||!n)return;let d=Object.keys(r.handlers).map((c)=>o.registerHandler({action:c,context:s,handler:()=>r.handlers[c]?.(),singleKey:!0}));return()=>{for(let c of d)c()}},[s,t,o,n,r])}function b8(e,{isActive:i=!0}={}){let s=ql(),[n]=u(()=>({handler:e}));Zn(()=>{n.handler=e}),E(()=>{if(!i||!s)return;return s.registerPreDispatch({handler:(o,r,t)=>n.handler(o,r,t)})},[i,s,n])}N();var a=800;function kP(e,i,s,n=a){let o=kt(),r=T(0),t=T(void 0),d=ir(()=>e(!1)),c=B(()=>{if(t.current)t.current(),t.current=void 0},[]);return E(()=>()=>{if(t.current)c(),d()},[c]),B(()=>{let l=Date.now();if(l-r.current<=n&&t.current!==void 0)c(),e(!1),i();else s?.(),e(!0),c(),t.current=o.setTimeout(()=>{e(!1),t.current=void 0},n);r.current=l},[e,i,s,c,o,n])}
export{Be,dt,b8,kP};
