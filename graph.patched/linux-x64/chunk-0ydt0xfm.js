// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{t}from"./chunk-167xpx5m.js";import{e,r}from"./chunk-azctepqx.js";import{M}from"./chunk-9xfehjen.js";var iZe={success:{icon:M.tick,color:"success",ariaLabel:"done:"},error:{icon:M.cross,color:"error",ariaLabel:"failed:"},warning:{icon:M.warning,color:"warning",ariaLabel:"warning:"},info:{icon:M.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:M.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function Qe(w){let u=g(8),{status:S,withSpace:d}=w,m=d===void 0?!1:d,o=iZe[S];const i=!o.color;let a;if(u[0]!==o.ariaLabel||u[1]!==o.icon)a=e(t,{"aria-label":o.ariaLabel,children:o.icon}),u[0]=o.ariaLabel,u[1]=o.icon,u[2]=a;else a=u[2];const c=m&&" ";let f;if(u[3]!==o.color||u[4]!==i||u[5]!==a||u[6]!==c)f=r(t,{color:o.color,dimColor:i,children:[a,c]}),u[3]=o.color,u[4]=i,u[5]=a,u[6]=c,u[7]=f;else f=u[7];return f}
export{iZe,Qe};
