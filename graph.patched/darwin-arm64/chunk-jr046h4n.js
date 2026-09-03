// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{_H}from"./chunk-t50adtrb.js";import{pt,CI}from"./chunk-b5gq8krd.js";import{go}from"./chunk-zprkjn5g.js";import{Z_}from"./chunk-3thk0mv0.js";import{B,z,d,j}from"./chunk-xyxaqzpf.js";j();function Hi(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i),a=z(()=>({"app:interrupt":n,"app:exit":t}),[n,t]);return pt(a,{context:"Global",isActive:e}),o}function bln(i,r,e=!0){let{handleInterrupt:n,handleExit:t,exitState:o}=c(r,i);return{entries:z(()=>e?[{action:"app:interrupt",run:n},{action:"app:exit",run:t}]:[],[e,n,t]),exitState:o}}function c(i,r){let{exit:e}=_H(),[n,t]=d({pending:!1,keyName:null}),o=z(()=>r??e,[r,e]),a=Z_(),l=go("app:interrupt","Global","Ctrl-C"),p=go("app:exit","Global","Ctrl-D"),m=a&&l?l:"Ctrl-C",y=a&&p?p:"Ctrl-D",u=CI((s)=>t({pending:s,keyName:m}),o),x=CI((s)=>t({pending:s,keyName:y}),o),b=B(()=>{if(i?.())return;u()},[u,i]),C=B(()=>{x()},[x]);return{handleInterrupt:b,handleExit:C,exitState:n}}
export{Hi,bln};
