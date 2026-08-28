// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{yx}from"./chunk-htcaw08y.js";import{dt,kP}from"./chunk-0nm8e5dp.js";import{po}from"./chunk-yysd2p9z.js";import{dC}from"./chunk-k081pm9j.js";import{B,q,u,N}from"./chunk-5752v0zq.js";N();function hi(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i),a=q(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return dt(a,{context:"Global",isActive:e}),o}function zQt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i);return{entries:q(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function d(i,r){let{exit:e}=yx(),[n,t]=u({pending:!1,keyName:null}),o=q(()=>r??e,[r,e]),a=dC(),l=po("app:interrupt","Global","Ctrl-C"),p=po("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",x=kP((s)=>t({pending:s,keyName:m}),o),c=kP((s)=>t({pending:s,keyName:y}),o),b=B(()=>{if(i?.())return;x()},[x,i]),C=B(()=>{c()},[c]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{hi,zQt};
