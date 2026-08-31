// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_}from"./chunk-rykc5fv4.js";import{t}from"./chunk-hm4dvvtr.js";import{e,r}from"./chunk-wk3xnwvn.js";import{L}from"./chunk-wtn7d4j4.js";var Hnt={success:{icon:L.tick,color:"success",ariaLabel:"done:"},error:{icon:L.cross,color:"error",ariaLabel:"failed:"},warning:{icon:L.warning,color:"warning",ariaLabel:"warning:"},info:{icon:L.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:L.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function tt(w){let d=_(8),{status:S,withSpace:g}=w,m=g===void 0?!1:g,o=Hnt[S];const i=!o.color;let a;if(d[0]!==o.ariaLabel||d[1]!==o.icon)a=e(t,{"aria-label":o.ariaLabel,children:o.icon}),d[0]=o.ariaLabel,d[1]=o.icon,d[2]=a;else a=d[2];const c=m&&" ";let u;if(d[3]!==o.color||d[4]!==i||d[5]!==a||d[6]!==c)u=r(t,{color:o.color,dimColor:i,children:[a,c]}),d[3]=o.color,d[4]=i,d[5]=a,d[6]=c,d[7]=u;else u=d[7];return u}
export{Hnt,tt};
