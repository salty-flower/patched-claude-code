// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{IT}from"./chunk-bzk3ayzm.js";import{Tn,Ote}from"./chunk-aqqwxzw9.js";import{Fi}from"./chunk-a6xd2cbq.js";import{WP}from"./chunk-k4t0y76a.js";import{ce,J,y,j}from"./chunk-mp0bjfh5.js";j();function ei(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=Glr(r,i),a=J(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return Tn(a,{context:"Global",isActive:e}),o}function r7t(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=Glr(r,i);return{entries:J(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function Glr(i,r){let{exit:e}=IT(),[n,t]=y({pending:!1,keyName:null}),o=J(()=>r??e,[r,e]),a=WP(),l=Fi("app:interrupt","Global","Ctrl-C"),p=Fi("app:exit","Global","Ctrl-D"),c=a&&l?l:"Ctrl-C",d=a&&p?p:"Ctrl-D",u=Ote((s)=>t({pending:s,keyName:c}),o),x=Ote((s)=>t({pending:s,keyName:d}),o),m=ce(()=>{if(i?.())return;u()},[u,i]),b=ce(()=>{x()},[x]);return{handleInterrupt:m,handleExit:b,exitState:n}}
export{ei,r7t,Glr};
