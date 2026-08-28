// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{fx}from"./chunk-167xpx5m.js";import{dt,ER}from"./chunk-dd07ew42.js";import{po}from"./chunk-sp59xx29.js";import{lk}from"./chunk-m8vba42x.js";import{U,W,u,N}from"./chunk-q0z49y3j.js";N();function hi(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i),a=W(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return dt(a,{context:"Global",isActive:e}),o}function MQt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i);return{entries:W(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function d(i,r){let{exit:e}=fx(),[n,t]=u({pending:!1,keyName:null}),o=W(()=>r??e,[r,e]),a=lk(),l=po("app:interrupt","Global","Ctrl-C"),p=po("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",x=ER((s)=>t({pending:s,keyName:m}),o),c=ER((s)=>t({pending:s,keyName:y}),o),b=U(()=>{if(i?.())return;x()},[x,i]),C=U(()=>{c()},[c]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{hi,MQt};
