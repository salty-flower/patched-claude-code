// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Da}from"./chunk-m6vh0652.js";import{Al}from"./chunk-hkhfvq8c.js";import{jt}from"./chunk-v1jfv1hk.js";import{oe,k,Br,cn,A,g,L}from"./chunk-1cnhgfv0.js";L();function ze(e,o,r={}){let{context:t="Global",isActive:s=!0}=r,n=Da(),[i]=g(()=>({handler:o}));cn(()=>{i.handler=o}),k(()=>{if(!n||!s)return;return n.registerHandler({action:e,context:t,handler:()=>i.handler(),singleKey:!0})},[e,t,n,s,i])}function Pt(e,o={}){let{context:r="Global",isActive:t=!0}=o,s=Da(),[n]=g(()=>({handlers:e})),i=Object.keys(e).sort().join("|");cn(()=>{n.handlers=e}),k(()=>{if(!s||!t)return;let c=Object.keys(n.handlers).map((u)=>s.registerHandler({action:u,context:r,handler:()=>n.handlers[u]?.(),singleKey:!0}));return()=>{for(let u of c)u()}},[r,i,s,t,n])}function m_(e,{isActive:o=!0}={}){let r=Da(),[t]=g(()=>({handler:e}));cn(()=>{t.handler=e}),k(()=>{if(!o||!r)return;return r.registerPreDispatch({handler:(s,n,i)=>t.handler(s,n,i)})},[o,r,t])}L();var a=800;function tB(e,o,r,t=a){let s=jt(),n=Al(),i=A(0),c=A(void 0),u=Br(()=>e(!1)),l=oe(()=>{if(c.current)c.current(),c.current=void 0},[]);return k(()=>()=>{if(c.current)l(),u()},[l]),oe(()=>{let d=n();if(d-i.current<=t&&c.current!==void 0)l(),e(!1),o();else r?.(),e(!0),l(),c.current=s.setTimeout(()=>{e(!1),c.current=void 0},t);i.current=d},[e,o,r,l,s,n,t])}
export{tB,ze,Pt,m_};
