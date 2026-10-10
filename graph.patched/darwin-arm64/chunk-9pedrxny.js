// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{bC}from"./chunk-1r9zp6s1.js";import{nn,iq}from"./chunk-am9mebpw.js";import{us}from"./chunk-t8vb436n.js";import{le,Z,y,N}from"./chunk-kexg5hxg.js";import{ik}from"./chunk-nhnx1tam.js";N();function Xo(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=Z(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return nn(a,{context:"Global",isActive:e}),o}function Dmt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:Z(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=bC(),[n,t]=y({pending:!1,keyName:null}),o=Z(()=>r??e,[r,e]),a=ik(),l=us("app:interrupt","Global","Ctrl-C"),p=us("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=iq((s)=>t({pending:s,keyName:d}),o),x=iq((s)=>t({pending:s,keyName:m}),o),b=le(()=>{if(i?.())return;u()},[u,i]),C=le(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Xo,Dmt};
