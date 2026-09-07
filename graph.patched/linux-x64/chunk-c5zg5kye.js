// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Zw}from"./chunk-bkvzfc5q.js";import{tt}from"./chunk-bmd6b82m.js";import{eo}from"./chunk-z5y4sbn3.js";import{Tx}from"./chunk-kbr4tezh.js";import{Sh}from"./chunk-9khf71ak.js";import{re,z,d,N}from"./chunk-vm1tjjym.js";N();function ls(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=z(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return tt(a,{context:"Global",isActive:e}),o}function Q7t(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:z(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=Zw(),[n,t]=d({pending:!1,keyName:null}),o=z(()=>r??e,[r,e]),a=Sh(),l=eo("app:interrupt","Global","Ctrl-C"),p=eo("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=Tx((s)=>t({pending:s,keyName:m}),o),x=Tx((s)=>t({pending:s,keyName:y}),o),b=re(()=>{if(i?.())return;u()},[u,i]),C=re(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{ls,Q7t};
