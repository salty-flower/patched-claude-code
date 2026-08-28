// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Au as u,Cu as v,rt as a,st as M,vt as m,wt as O}from"./_190.js";import{QSa as n,RSa as L}from"./_444.js";import{ecb as R,kbb as s}from"./_488.js";import{ieb as S,jeb as P}from"./_496.js";import{leb as e,meb as i,neb as y}from"./_497.js";import{Dxd as x,Exd as T}from"./_839.js";var z={};x(z,{BashModeProgress:()=>b});function b(q){let c=S(8),{input:w,progress:t,verbose:r}=q;const d=`<bash-input>${w}</bash-input>`;let p;if(c[0]!==d)p=e(a,{addMargin:!1,param:{text:d,type:"text"}}),c[0]=d,c[1]=p;else p=c[1];let l;if(c[2]!==t||c[3]!==r)l=t?e(m,{fullOutput:t.fullOutput,output:t.output,elapsedTimeSeconds:t.elapsedTimeSeconds,totalLines:t.totalLines,verbose:r}):u(n,"renderToolUseProgressMessage")?.([],{verbose:r,tools:[],terminalSize:void 0}),c[2]=t,c[3]=r,c[4]=l;else l=c[4];let h;if(c[5]!==p||c[6]!==l)h=i(s,{flexDirection:"column",marginTop:1,children:[p,l]}),c[5]=p,c[6]=l,c[7]=h;else h=c[7];return h}var B=T(()=>{R();L();M();O();v();y();P()});
export{b as ot,z as pt,B as qt};
