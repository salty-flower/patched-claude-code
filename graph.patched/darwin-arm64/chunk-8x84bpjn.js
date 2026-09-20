// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{XC}from"./chunk-cskdt2sa.js";import{st,ND}from"./chunk-9sc1d0qs.js";import{wo}from"./chunk-h4abyyr0.js";import{h_}from"./chunk-1m0y5ybw.js";import{re,q,d,M}from"./chunk-ncc6kxz8.js";M();function Ts(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=q(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return st(a,{context:"Global",isActive:e}),o}function Kvn(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:q(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=XC(),[n,t]=d({pending:!1,keyName:null}),o=q(()=>r??e,[r,e]),a=h_(),l=wo("app:interrupt","Global","Ctrl-C"),p=wo("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=ND((s)=>t({pending:s,keyName:m}),o),x=ND((s)=>t({pending:s,keyName:y}),o),b=re(()=>{if(i?.())return;u()},[u,i]),C=re(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Ts,Kvn};
