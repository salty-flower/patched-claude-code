// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Qa}from"./chunk-ttwn6n1g.js";import{E,kn,d,N}from"./chunk-vm1tjjym.js";N();function Oe(t,o,r={}){let{context:n="Global",isActive:i=!0}=r,e=Qa(),[s]=d(()=>({handler:o}));kn(()=>{s.handler=o}),E(()=>{if(!e||!i)return;return e.registerHandler({action:t,context:n,handler:()=>s.handler(),singleKey:!0})},[t,n,e,i,s])}function tt(t,o={}){let{context:r="Global",isActive:n=!0}=o,i=Qa(),[e]=d(()=>({handlers:t})),s=Object.keys(t).sort().join("|");kn(()=>{e.handlers=t}),E(()=>{if(!i||!n)return;let c=Object.keys(e.handlers).map((a)=>i.registerHandler({action:a,context:r,handler:()=>e.handlers[a]?.(),singleKey:!0}));return()=>{for(let a of c)a()}},[r,s,i,n,e])}function AN(t,{isActive:o=!0}={}){let r=Qa(),[n]=d(()=>({handler:t}));kn(()=>{n.handler=t}),E(()=>{if(!o||!r)return;return r.registerPreDispatch({handler:(i,e,s)=>n.handler(i,e,s)})},[o,r,n])}
export{Oe,tt,AN};
