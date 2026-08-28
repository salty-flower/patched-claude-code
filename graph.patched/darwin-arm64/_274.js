// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{r_a as r,s_a as m}from"./_480.js";import{ecb as R,nbb as n}from"./_488.js";import{ieb as u,jeb as g}from"./_496.js";import{leb as e,meb as c,neb as l}from"./_497.js";import{Exd as S}from"./_839.js";function x(k){let L=u(8),{status:C,withSpace:b}=k,N=b===void 0?!1:b,o=d[C];const t=!o.color;let i;if(L[0]!==o.ariaLabel||L[1]!==o.icon)i=e(n,{"aria-label":o.ariaLabel,children:o.icon}),L[0]=o.ariaLabel,L[1]=o.icon,L[2]=i;else i=L[2];const s=N&&" ";let w;if(L[3]!==o.color||L[4]!==t||L[5]!==i||L[6]!==s)w=c(n,{color:o.color,dimColor:t,children:[i,s]}),L[3]=o.color,L[4]=t,L[5]=i,L[6]=s,L[7]=w;else w=L[7];return w}var d;var y=S(()=>{m();R();l();g();d={success:{icon:r.tick,color:"success",ariaLabel:"done:"},error:{icon:r.cross,color:"error",ariaLabel:"failed:"},warning:{icon:r.warning,color:"warning",ariaLabel:"warning:"},info:{icon:r.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:r.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}}});
export{d as hC,x as iC,y as jC};
