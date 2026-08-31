// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{t}from"./chunk-snr8xejh.js";import{e,r}from"./chunk-ys8dsnqt.js";import{M}from"./chunk-kd55bhf8.js";var knt={success:{icon:M.tick,color:"success",ariaLabel:"done:"},error:{icon:M.cross,color:"error",ariaLabel:"failed:"},warning:{icon:M.warning,color:"warning",ariaLabel:"warning:"},info:{icon:M.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:M.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function tt(L){let d=y(8),{status:w,withSpace:g}=L,S=g===void 0?!1:g,o=knt[w];const i=!o.color;let a;if(d[0]!==o.ariaLabel||d[1]!==o.icon)a=e(t,{"aria-label":o.ariaLabel,children:o.icon}),d[0]=o.ariaLabel,d[1]=o.icon,d[2]=a;else a=d[2];const c=S&&" ";let u;if(d[3]!==o.color||d[4]!==i||d[5]!==a||d[6]!==c)u=r(t,{color:o.color,dimColor:i,children:[a,c]}),d[3]=o.color,d[4]=i,d[5]=a,d[6]=c,d[7]=u;else u=d[7];return u}
export{knt,tt};
