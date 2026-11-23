// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{DT}from"./chunk-b2f7pn4f.js";import{Tn,Ute}from"./chunk-wgs1m56y.js";import{$i}from"./chunk-d2t7xz13.js";import{zP}from"./chunk-xgebd77k.js";import{ce,J,y,j}from"./chunk-07a1744w.js";j();function ei(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=Xlr(r,i),a=J(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return Tn(a,{context:"Global",isActive:e}),o}function tYt(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=Xlr(r,i);return{entries:J(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function Xlr(i,r){let{exit:e}=DT(),[n,t]=y({pending:!1,keyName:null}),o=J(()=>r??e,[r,e]),a=zP(),l=$i("app:interrupt","Global","Ctrl-C"),p=$i("app:exit","Global","Ctrl-D"),c=a&&l?l:"Ctrl-C",d=a&&p?p:"Ctrl-D",u=Ute((s)=>t({pending:s,keyName:c}),o),x=Ute((s)=>t({pending:s,keyName:d}),o),m=ce(()=>{if(i?.())return;u()},[u,i]),b=ce(()=>{x()},[x]);return{handleInterrupt:m,handleExit:b,exitState:n}}
export{ei,tYt,Xlr};
