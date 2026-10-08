// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{wc}from"./chunk-fevw8e4j.js";import{ln,Ka}from"./chunk-8pkmgy8b.js";import{le,P,yo,Qt,T,g,N}from"./chunk-f6geyac8.js";N();function Ye(e,o,r={}){let{context:t="Global",isActive:s=!0}=r,n=wc(),[i]=g(()=>({handler:o}));Qt(()=>{i.handler=o}),P(()=>{if(!n||!s)return;return n.registerHandler({action:e,context:t,handler:()=>i.handler(),singleKey:!0})},[e,t,n,s,i])}function nn(e,o={}){let{context:r="Global",isActive:t=!0}=o,s=wc(),[n]=g(()=>({handlers:e})),i=Object.keys(e).sort().join("|");Qt(()=>{n.handlers=e}),P(()=>{if(!s||!t)return;let c=Object.keys(n.handlers).map((u)=>s.registerHandler({action:u,context:r,handler:()=>n.handlers[u]?.(),singleKey:!0}));return()=>{for(let u of c)u()}},[r,i,s,t,n])}function vS(e,{isActive:o=!0}={}){let r=wc(),[t]=g(()=>({handler:e}));Qt(()=>{t.handler=e}),P(()=>{if(!o||!r)return;return r.registerPreDispatch({handler:(s,n,i)=>t.handler(s,n,i)})},[o,r,t])}N();var a=800;function jz(e,o,r,t=a){let s=ln(),n=Ka(),i=T(0),c=T(void 0),u=yo(()=>e(!1)),l=le(()=>{if(c.current)c.current(),c.current=void 0},[]);return P(()=>()=>{if(c.current)l(),u()},[l]),le(()=>{let d=n();if(d-i.current<=t&&c.current!==void 0)l(),e(!1),o();else r?.(),e(!0),l(),c.current=s.setTimeout(()=>{e(!1),c.current=void 0},t);i.current=d},[e,o,r,l,s,n,t])}
export{Ye,nn,vS,jz};
