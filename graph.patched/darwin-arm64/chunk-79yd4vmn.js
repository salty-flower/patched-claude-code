// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Px}from"./chunk-hm4dvvtr.js";import{ht,YP}from"./chunk-ff8pzgc2.js";import{Ro}from"./chunk-djq70ckx.js";import{lv}from"./chunk-wr08517q.js";import{B,z,u,F}from"./chunk-w6mhhrt2.js";F();function Hi(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i),a=z(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return ht(a,{context:"Global",isActive:e}),o}function Vrn(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=d(r,i);return{entries:z(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function d(i,r){let{exit:e}=Px(),[n,t]=u({pending:!1,keyName:null}),o=z(()=>r??e,[r,e]),a=lv(),l=Ro("app:interrupt","Global","Ctrl-C"),p=Ro("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",x=YP((s)=>t({pending:s,keyName:m}),o),c=YP((s)=>t({pending:s,keyName:y}),o),b=B(()=>{if(i?.())return;x()},[x,i]),C=B(()=>{c()},[c]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Hi,Vrn};
