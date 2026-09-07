// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{yf}from"./chunk-0312mgjz.js";import{y}from"./chunk-wdpeygc3.js";import{x}from"./chunk-3e93vkg3.js";import{n}from"./chunk-bkvzfc5q.js";import{e,r}from"./chunk-smtaex5n.js";import{M}from"./chunk-axc6wfft.js";var gst={success:{icon:M.tick,color:"success",ariaLabel:"done:"},error:{icon:M.cross,color:"error",ariaLabel:"failed:"},warning:{icon:M.warning,color:"warning",ariaLabel:"warning:"},info:{icon:M.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:M.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function Qe(m){let d=y(8),{status:L,withSpace:u}=m,S=u===void 0?!1:u,o=gst[L];const c=!o.color;let t;if(d[0]!==o.ariaLabel||d[1]!==o.icon)t=e(n,{"aria-label":o.ariaLabel,children:o.icon}),d[0]=o.ariaLabel,d[1]=o.icon,d[2]=t;else t=d[2];const s=S&&" ";let f;if(d[3]!==o.color||d[4]!==c||d[5]!==t||d[6]!==s)f=r(n,{color:o.color,dimColor:c,children:[t,s]}),d[3]=o.color,d[4]=c,d[5]=t,d[6]=s,d[7]=f;else f=d[7];return f}function rd(i){if(i)return!0;return yf()&&x("tengu_cedar_marsh",!1)}
export{gst,Qe,rd};
