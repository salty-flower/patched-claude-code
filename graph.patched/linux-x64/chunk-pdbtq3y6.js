// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{TT}from"./chunk-13cxqtms.js";import{nn,Mq}from"./chunk-w30cc9yh.js";import{Zo}from"./chunk-yz9w2eb7.js";import{le,X,g,N}from"./chunk-y6zm4y48.js";import{TE}from"./chunk-dk5jdbcf.js";N();function $o(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=X(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return nn(a,{context:"Global",isActive:e}),o}function Ddt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:X(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=TT(),[n,t]=g({pending:!1,keyName:null}),o=X(()=>r??e,[r,e]),a=TE(),l=Zo("app:interrupt","Global","Ctrl-C"),p=Zo("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=Mq((s)=>t({pending:s,keyName:d}),o),x=Mq((s)=>t({pending:s,keyName:m}),o),y=le(()=>{if(i?.())return;u()},[u,i]),b=le(()=>{x()},[x]);return{handleInterrupt:y,handleExit:b,exitState:n}}
export{$o,Ddt};
