// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ck}from"./chunk-0x4ch5gg.js";import{Zt,I6}from"./chunk-cqe7yayr.js";import{Ko}from"./chunk-fkezjdeq.js";import{le,J,g,L}from"./chunk-bkksmm2y.js";import{nv}from"./chunk-3pzysh4a.js";L();function Do(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=J(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return Zt(a,{context:"Global",isActive:e}),o}function Rat(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:J(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=ck(),[n,t]=g({pending:!1,keyName:null}),o=J(()=>r??e,[r,e]),a=nv(),l=Ko("app:interrupt","Global","Ctrl-C"),p=Ko("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=I6((s)=>t({pending:s,keyName:d}),o),x=I6((s)=>t({pending:s,keyName:m}),o),y=le(()=>{if(i?.())return;u()},[u,i]),b=le(()=>{x()},[x]);return{handleInterrupt:y,handleExit:b,exitState:n}}
export{Do,Rat};
