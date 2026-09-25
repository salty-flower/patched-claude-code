// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{_E}from"./chunk-hkhfvq8c.js";import{tB,Pt}from"./chunk-7gskgqd7.js";import{Uo}from"./chunk-xjv6c8nk.js";import{mb}from"./chunk-m1cs5hwd.js";import{oe,J,g,L}from"./chunk-1cnhgfv0.js";L();function $r(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=J(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return Pt(a,{context:"Global",isActive:e}),o}function y8e(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:J(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=_E(),[n,t]=g({pending:!1,keyName:null}),o=J(()=>r??e,[r,e]),a=mb(),l=Uo("app:interrupt","Global","Ctrl-C"),p=Uo("app:exit","Global","Ctrl-D"),d=a&&l?l:"Ctrl-C",m=a&&p?p:"Ctrl-D",u=tB((s)=>t({pending:s,keyName:d}),o),x=tB((s)=>t({pending:s,keyName:m}),o),y=oe(()=>{if(i?.())return;u()},[u,i]),b=oe(()=>{x()},[x]);return{handleInterrupt:y,handleExit:b,exitState:n}}
export{$r,y8e};
