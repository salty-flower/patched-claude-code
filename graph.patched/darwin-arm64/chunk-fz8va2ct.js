// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Sv}from"./chunk-behv2vm9.js";import{pj,zt}from"./chunk-5yk60hm3.js";import{$o}from"./chunk-t7js1m1k.js";import{ie,Y,g,M}from"./chunk-757fgf90.js";import{yw}from"./chunk-atdkrpvs.js";M();function mo(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=Y(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return zt(a,{context:"Global",isActive:e}),o}function RQe(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:Y(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=Sv(),[n,t]=g({pending:!1,keyName:null}),o=Y(()=>r??e,[r,e]),a=yw(),l=$o("app:interrupt","Global","Ctrl-C"),p=$o("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=pj((s)=>t({pending:s,keyName:d}),o),x=pj((s)=>t({pending:s,keyName:m}),o),y=ie(()=>{if(i?.())return;u()},[u,i]),b=ie(()=>{x()},[x]);return{handleInterrupt:y,handleExit:b,exitState:n}}
export{mo,RQe};
