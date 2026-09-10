// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{ek}from"./chunk-q8bwyp41.js";import{Qe,UH}from"./chunk-vyymj2t0.js";import{qr}from"./chunk-ecm9hphz.js";import{ey}from"./chunk-hck788yr.js";import{re,G,d,L}from"./chunk-kt4npzgg.js";L();function ps(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=G(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return Qe(a,{context:"Global",isActive:e}),o}function Tin(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:G(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=ek(),[n,t]=d({pending:!1,keyName:null}),o=G(()=>r??e,[r,e]),a=ey(),l=qr("app:interrupt","Global","Ctrl-C"),p=qr("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=UH((s)=>t({pending:s,keyName:m}),o),x=UH((s)=>t({pending:s,keyName:y}),o),b=re(()=>{if(i?.())return;u()},[u,i]),C=re(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{ps,Tin};
