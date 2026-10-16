// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{gC}from"./chunk-hey8xzq2.js";import{rn,Z4}from"./chunk-b2r8b3aj.js";import{vs}from"./chunk-f6vdahmn.js";import{sT}from"./chunk-nmr0awp6.js";import{ae,Z,y,F}from"./chunk-zx300qjj.js";F();function Ko(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=Z(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return rn(a,{context:"Global",isActive:e}),o}function Fwt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:Z(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=gC(),[n,t]=y({pending:!1,keyName:null}),o=Z(()=>r??e,[r,e]),a=sT(),l=vs("app:interrupt","Global","Ctrl-C"),p=vs("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=Z4((s)=>t({pending:s,keyName:d}),o),x=Z4((s)=>t({pending:s,keyName:m}),o),b=ae(()=>{if(i?.())return;u()},[u,i]),C=ae(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Ko,Fwt};
