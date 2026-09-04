// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{SH}from"./chunk-86a8apqx.js";import{ft,TI}from"./chunk-zwn31ffx.js";import{bo}from"./chunk-0c6pdtvr.js";import{ny}from"./chunk-fdtw052f.js";import{B,K,p,j}from"./chunk-8wk5q2vw.js";j();function Oi(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i),a=K(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return ft(a,{context:"Global",isActive:e}),o}function gnn(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i);return{entries:K(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function d(i,r){let{exit:e}=SH(),[n,t]=p({pending:!1,keyName:null}),o=K(()=>r??e,[r,e]),a=ny(),l=bo("app:interrupt","Global","Ctrl-C"),u=bo("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&u?u:"Ctrl-D",x=TI((s)=>t({pending:s,keyName:m}),o),c=TI((s)=>t({pending:s,keyName:y}),o),b=B(()=>{if(i?.())return;x()},[x,i]),C=B(()=>{c()},[c]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Oi,gnn};
