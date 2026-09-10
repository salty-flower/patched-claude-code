// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{BA}from"./chunk-dqjxa0y4.js";import{Qe}from"./chunk-cd603a74.js";import{Gr}from"./chunk-3jkh0a5j.js";import{NI}from"./chunk-g4cz2kbt.js";import{Yh}from"./chunk-p3vet30y.js";import{re,V,d,N}from"./chunk-w8p0f9k6.js";N();function cs(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=V(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return Qe(a,{context:"Global",isActive:e}),o}function Bon(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:V(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=BA(),[n,t]=d({pending:!1,keyName:null}),o=V(()=>r??e,[r,e]),a=Yh(),l=Gr("app:interrupt","Global","Ctrl-C"),p=Gr("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=NI((s)=>t({pending:s,keyName:m}),o),x=NI((s)=>t({pending:s,keyName:y}),o),b=re(()=>{if(i?.())return;u()},[u,i]),C=re(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{cs,Bon};
