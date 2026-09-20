// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Ip}from"./chunk-2eend1pj.js";import{S}from"./chunk-6qjhsn35.js";import{P}from"./chunk-30p0nwys.js";import{n}from"./chunk-g8n1e3fe.js";import{e,r}from"./chunk-437ab22y.js";import{N}from"./chunk-e82fscam.js";var vvt={success:{icon:N.tick,color:"success",ariaLabel:"done:"},error:{icon:N.cross,color:"error",ariaLabel:"failed:"},warning:{icon:N.warning,color:"warning",ariaLabel:"warning:"},info:{icon:N.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:N.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function ct(m){let d=S(8),{status:L,withSpace:u}=m,w=u===void 0?!1:u,o=vvt[L];const c=!o.color;let t;if(d[0]!==o.ariaLabel||d[1]!==o.icon)t=e(n,{"aria-label":o.ariaLabel,children:o.icon}),d[0]=o.ariaLabel,d[1]=o.icon,d[2]=t;else t=d[2];const s=w&&" ";let f;if(d[3]!==o.color||d[4]!==c||d[5]!==t||d[6]!==s)f=r(n,{color:o.color,dimColor:c,children:[t,s]}),d[3]=o.color,d[4]=c,d[5]=t,d[6]=s,d[7]=f;else f=d[7];return f}function bd(i){if(i)return!0;return Ip()&&P("tengu_cedar_marsh",!1)}
export{vvt,ct,bd};
