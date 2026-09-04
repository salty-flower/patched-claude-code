// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{ul}from"./chunk-ztevm5d3.js";import{Ht}from"./chunk-e1zgk7f7.js";import{B,C,Nr,Mn,v,p,j}from"./chunk-8wk5q2vw.js";j();function Ge(e,i,s={}){let{context:n="Global",isActive:o=!0}=s,r=ul(),[t]=p(()=>({handler:i}));Mn(()=>{t.handler=i}),C(()=>{if(!r||!o)return;return r.registerHandler({action:e,context:n,handler:()=>t.handler(),singleKey:!0})},[e,n,r,o,t])}function ft(e,i={}){let{context:s="Global",isActive:n=!0}=i,o=ul(),[r]=p(()=>({handlers:e})),t=Object.keys(e).sort().join("|");Mn(()=>{r.handlers=e}),C(()=>{if(!o||!n)return;let u=Object.keys(r.handlers).map((c)=>o.registerHandler({action:c,context:s,handler:()=>r.handlers[c]?.(),singleKey:!0}));return()=>{for(let c of u)c()}},[s,t,o,n,r])}function ece(e,{isActive:i=!0}={}){let s=ul(),[n]=p(()=>({handler:e}));Mn(()=>{n.handler=e}),C(()=>{if(!i||!s)return;return s.registerPreDispatch({handler:(o,r,t)=>n.handler(o,r,t)})},[i,s,n])}j();var l=800;function TI(e,i,s,n=l){let o=Ht(),r=v(0),t=v(void 0),u=Nr(()=>e(!1)),c=B(()=>{if(t.current)t.current(),t.current=void 0},[]);return C(()=>()=>{if(t.current)c(),u()},[c]),B(()=>{let d=Date.now();if(d-r.current<=n&&t.current!==void 0)c(),e(!1),i();else s?.(),e(!0),c(),t.current=o.setTimeout(()=>{e(!1),t.current=void 0},n);r.current=d},[e,i,s,c,o,n])}
export{Ge,ft,ece,TI};
