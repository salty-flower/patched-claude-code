// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{_T}from"./chunk-sm4gyzj8.js";import{rn,d3}from"./chunk-f7pe2z4t.js";import{Es}from"./chunk-w51et6hp.js";import{lC}from"./chunk-qwn9zd7h.js";import{ae,Z,y,F}from"./chunk-57p87fb1.js";F();function qo(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=Z(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return rn(a,{context:"Global",isActive:e}),o}function jwt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:Z(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=_T(),[n,t]=y({pending:!1,keyName:null}),o=Z(()=>r??e,[r,e]),a=lC(),l=Es("app:interrupt","Global","Ctrl-C"),p=Es("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=d3((s)=>t({pending:s,keyName:d}),o),x=d3((s)=>t({pending:s,keyName:m}),o),b=ae(()=>{if(i?.())return;u()},[u,i]),C=ae(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{qo,jwt};
