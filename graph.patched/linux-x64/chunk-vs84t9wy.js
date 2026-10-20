// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{qC}from"./chunk-wfsayads.js";import{nn,GY}from"./chunk-by9bnwxb.js";import{Ds}from"./chunk-83z2h1a9.js";import{CT}from"./chunk-3rmhjxwr.js";import{le,ee,y,B}from"./chunk-a2fszd78.js";B();function Qo(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=ee(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return nn(a,{context:"Global",isActive:e}),o}function akt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:ee(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=qC(),[n,t]=y({pending:!1,keyName:null}),o=ee(()=>r??e,[r,e]),a=CT(),l=Ds("app:interrupt","Global","Ctrl-C"),p=Ds("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=GY((s)=>t({pending:s,keyName:d}),o),x=GY((s)=>t({pending:s,keyName:m}),o),b=le(()=>{if(i?.())return;u()},[u,i]),C=le(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Qo,akt};
