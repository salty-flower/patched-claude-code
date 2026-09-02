// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Cx}from"./chunk-snr8xejh.js";import{ht,VP}from"./chunk-x95ptz29.js";import{To}from"./chunk-mtyvkm9k.js";import{sk}from"./chunk-haak6pxr.js";import{U,V,u,F}from"./chunk-v59pjxqq.js";F();function Ii(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i),a=V(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return ht(a,{context:"Global",isActive:e}),o}function Wrn(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i);return{entries:V(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function d(i,r){let{exit:e}=Cx(),[n,t]=u({pending:!1,keyName:null}),o=V(()=>r??e,[r,e]),a=sk(),l=To("app:interrupt","Global","Ctrl-C"),p=To("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",x=VP((s)=>t({pending:s,keyName:m}),o),c=VP((s)=>t({pending:s,keyName:y}),o),b=U(()=>{if(i?.())return;x()},[x,i]),C=U(()=>{c()},[c]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Ii,Wrn};
