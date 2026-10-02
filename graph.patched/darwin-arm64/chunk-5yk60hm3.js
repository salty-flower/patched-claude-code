// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ya}from"./chunk-4e9k3gjg.js";import{Zt,va}from"./chunk-behv2vm9.js";import{ie,T,qr,nn,C,g,M}from"./chunk-757fgf90.js";M();function Ge(e,o,r={}){let{context:t="Global",isActive:s=!0}=r,n=Ya(),[i]=g(()=>({handler:o}));nn(()=>{i.handler=o}),T(()=>{if(!n||!s)return;return n.registerHandler({action:e,context:t,handler:()=>i.handler(),singleKey:!0})},[e,t,n,s,i])}function zt(e,o={}){let{context:r="Global",isActive:t=!0}=o,s=Ya(),[n]=g(()=>({handlers:e})),i=Object.keys(e).sort().join("|");nn(()=>{n.handlers=e}),T(()=>{if(!s||!t)return;let c=Object.keys(n.handlers).map((u)=>s.registerHandler({action:u,context:r,handler:()=>n.handlers[u]?.(),singleKey:!0}));return()=>{for(let u of c)u()}},[r,i,s,t,n])}function sS(e,{isActive:o=!0}={}){let r=Ya(),[t]=g(()=>({handler:e}));nn(()=>{t.handler=e}),T(()=>{if(!o||!r)return;return r.registerPreDispatch({handler:(s,n,i)=>t.handler(s,n,i)})},[o,r,t])}M();var a=800;function pj(e,o,r,t=a){let s=Zt(),n=va(),i=C(0),c=C(void 0),u=qr(()=>e(!1)),l=ie(()=>{if(c.current)c.current(),c.current=void 0},[]);return T(()=>()=>{if(c.current)l(),u()},[l]),ie(()=>{let d=n();if(d-i.current<=t&&c.current!==void 0)l(),e(!1),o();else r?.(),e(!0),l(),c.current=s.setTimeout(()=>{e(!1),c.current=void 0},t);i.current=d},[e,o,r,l,s,n,t])}
export{pj,Ge,zt,sS};
