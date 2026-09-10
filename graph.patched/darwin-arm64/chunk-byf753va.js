// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{tv}from"./chunk-ykvaeqdn.js";import{Qe,QP}from"./chunk-ncdpy2yz.js";import{Vr}from"./chunk-yraygbbb.js";import{ty}from"./chunk-qfvvhdcr.js";import{re,G,d,M}from"./chunk-xgsrj7pc.js";M();function ps(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=G(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return Qe(a,{context:"Global",isActive:e}),o}function Sin(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:G(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=tv(),[n,t]=d({pending:!1,keyName:null}),o=G(()=>r??e,[r,e]),a=ty(),l=Vr("app:interrupt","Global","Ctrl-C"),p=Vr("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=QP((s)=>t({pending:s,keyName:m}),o),x=QP((s)=>t({pending:s,keyName:y}),o),b=re(()=>{if(i?.())return;u()},[u,i]),C=re(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{ps,Sin};
