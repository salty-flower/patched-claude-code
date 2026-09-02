// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Hc}from"./chunk-73qfv3w2.js";import{Rt}from"./chunk-393r0e96.js";import{U,A,Sr,Gn,v,u,F}from"./chunk-v59pjxqq.js";F();function Ue(e,i,s={}){let{context:n="Global",isActive:o=!0}=s,r=Hc(),[t]=u(()=>({handler:i}));Gn(()=>{t.handler=i}),A(()=>{if(!r||!o)return;return r.registerHandler({action:e,context:n,handler:()=>t.handler(),singleKey:!0})},[e,n,r,o,t])}function ht(e,i={}){let{context:s="Global",isActive:n=!0}=i,o=Hc(),[r]=u(()=>({handlers:e})),t=Object.keys(e).sort().join("|");Gn(()=>{r.handlers=e}),A(()=>{if(!o||!n)return;let d=Object.keys(r.handlers).map((c)=>o.registerHandler({action:c,context:s,handler:()=>r.handlers[c]?.(),singleKey:!0}));return()=>{for(let c of d)c()}},[s,t,o,n,r])}function _6(e,{isActive:i=!0}={}){let s=Hc(),[n]=u(()=>({handler:e}));Gn(()=>{n.handler=e}),A(()=>{if(!i||!s)return;return s.registerPreDispatch({handler:(o,r,t)=>n.handler(o,r,t)})},[i,s,n])}F();var a=800;function VP(e,i,s,n=a){let o=Rt(),r=v(0),t=v(void 0),d=Sr(()=>e(!1)),c=U(()=>{if(t.current)t.current(),t.current=void 0},[]);return A(()=>()=>{if(t.current)c(),d()},[c]),U(()=>{let l=Date.now();if(l-r.current<=n&&t.current!==void 0)c(),e(!1),i();else s?.(),e(!0),c(),t.current=o.setTimeout(()=>{e(!1),t.current=void 0},n);r.current=l},[e,i,s,c,o,n])}
export{Ue,ht,_6,VP};
