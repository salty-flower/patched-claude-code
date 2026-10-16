// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Xl}from"./chunk-2w0qg9st.js";import{cn,Ta}from"./chunk-hey8xzq2.js";import{ae,P,Io,Jt,R,y,F}from"./chunk-zx300qjj.js";F();function rt(e,o,r={}){let{context:t="Global",isActive:s=!0}=r,n=Xl(),[i]=y(()=>({handler:o}));Jt(()=>{i.handler=o}),P(()=>{if(!n||!s)return;return n.registerHandler({action:e,context:t,handler:()=>i.handler(),singleKey:!0})},[e,t,n,s,i])}function rn(e,o={}){let{context:r="Global",isActive:t=!0}=o,s=Xl(),[n]=y(()=>({handlers:e})),i=Object.keys(e).sort().join("|");Jt(()=>{n.handlers=e}),P(()=>{if(!s||!t)return;let c=Object.keys(n.handlers).map((u)=>s.registerHandler({action:u,context:r,handler:()=>n.handlers[u]?.(),singleKey:!0}));return()=>{for(let u of c)u()}},[r,i,s,t,n])}function Tg(e,{isActive:o=!0}={}){let r=Xl(),[t]=y(()=>({handler:e}));Jt(()=>{t.handler=e}),P(()=>{if(!o||!r)return;return r.registerPreDispatch({handler:(s,n,i)=>t.handler(s,n,i)})},[o,r,t])}F();var a=800;function Z4(e,o,r,t=a){let s=cn(),n=Ta(),i=R(0),c=R(void 0),u=Io(()=>e(!1)),l=ae(()=>{if(c.current)c.current(),c.current=void 0},[]);return P(()=>()=>{if(c.current)l(),u()},[l]),ae(()=>{let d=n();if(d-i.current<=t&&c.current!==void 0)l(),e(!1),o();else r?.(),e(!0),l(),c.current=s.setTimeout(()=>{e(!1),c.current=void 0},t);i.current=d},[e,o,r,l,s,n,t])}
export{rt,rn,Tg,Z4};
