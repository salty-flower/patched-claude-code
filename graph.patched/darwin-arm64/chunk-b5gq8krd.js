// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{ll}from"./chunk-0w6p8bt5.js";import{xt}from"./chunk-f48rwwbk.js";import{B,C,Nr,Dn,v,d,j}from"./chunk-xyxaqzpf.js";j();function je(e,i,s={}){let{context:n="Global",isActive:o=!0}=s,r=ll(),[t]=d(()=>({handler:i}));Dn(()=>{t.handler=i}),C(()=>{if(!r||!o)return;return r.registerHandler({action:e,context:n,handler:()=>t.handler(),singleKey:!0})},[e,n,r,o,t])}function pt(e,i={}){let{context:s="Global",isActive:n=!0}=i,o=ll(),[r]=d(()=>({handlers:e})),t=Object.keys(e).sort().join("|");Dn(()=>{r.handlers=e}),C(()=>{if(!o||!n)return;let u=Object.keys(r.handlers).map((c)=>o.registerHandler({action:c,context:s,handler:()=>r.handlers[c]?.(),singleKey:!0}));return()=>{for(let c of u)c()}},[s,t,o,n,r])}function jce(e,{isActive:i=!0}={}){let s=ll(),[n]=d(()=>({handler:e}));Dn(()=>{n.handler=e}),C(()=>{if(!i||!s)return;return s.registerPreDispatch({handler:(o,r,t)=>n.handler(o,r,t)})},[i,s,n])}j();var a=800;function CI(e,i,s,n=a){let o=xt(),r=v(0),t=v(void 0),u=Nr(()=>e(!1)),c=B(()=>{if(t.current)t.current(),t.current=void 0},[]);return C(()=>()=>{if(t.current)c(),u()},[c]),B(()=>{let l=Date.now();if(l-r.current<=n&&t.current!==void 0)c(),e(!1),i();else s?.(),e(!0),c(),t.current=o.setTimeout(()=>{e(!1),t.current=void 0},n);r.current=l},[e,i,s,c,o,n])}
export{je,pt,jce,CI};
