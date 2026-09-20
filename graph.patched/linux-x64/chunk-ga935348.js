// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{KA}from"./chunk-g8n1e3fe.js";import{st,kM}from"./chunk-vgqr8c6e.js";import{wo}from"./chunk-xchyxnyn.js";import{g_}from"./chunk-qm4szm8a.js";import{re,V,d,L}from"./chunk-cf8g1269.js";L();function Ts(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=V(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return st(a,{context:"Global",isActive:e}),o}function Zvn(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:V(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=KA(),[n,t]=d({pending:!1,keyName:null}),o=V(()=>r??e,[r,e]),a=g_(),l=wo("app:interrupt","Global","Ctrl-C"),p=wo("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=kM((s)=>t({pending:s,keyName:m}),o),x=kM((s)=>t({pending:s,keyName:y}),o),b=re(()=>{if(i?.())return;u()},[u,i]),C=re(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Ts,Zvn};
