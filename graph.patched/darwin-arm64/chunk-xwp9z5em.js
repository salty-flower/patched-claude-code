// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{eE}from"./chunk-hrm5smjv.js";import{tt}from"./chunk-eg7c0qsb.js";import{eo}from"./chunk-adtmqc0e.js";import{U0}from"./chunk-8eqywbty.js";import{Th}from"./chunk-yc07zm05.js";import{re,q,d,N}from"./chunk-jegfnmzv.js";N();function ls(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=q(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return tt(a,{context:"Global",isActive:e}),o}function bQt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:q(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=eE(),[n,t]=d({pending:!1,keyName:null}),o=q(()=>r??e,[r,e]),a=Th(),l=eo("app:interrupt","Global","Ctrl-C"),p=eo("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=U0((s)=>t({pending:s,keyName:m}),o),x=U0((s)=>t({pending:s,keyName:y}),o),b=re(()=>{if(i?.())return;u()},[u,i]),C=re(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{ls,bQt};
