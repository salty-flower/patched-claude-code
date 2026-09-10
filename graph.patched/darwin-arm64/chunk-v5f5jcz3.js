// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{gp}from"./chunk-r0mh1pvg.js";import{y}from"./chunk-jy8hazaz.js";import{H}from"./chunk-e02s7cks.js";import{n}from"./chunk-ykvaeqdn.js";import{e,r}from"./chunk-qs39f0kj.js";import{L}from"./chunk-j227jy4h.js";var bdt={success:{icon:L.tick,color:"success",ariaLabel:"done:"},error:{icon:L.cross,color:"error",ariaLabel:"failed:"},warning:{icon:L.warning,color:"warning",ariaLabel:"warning:"},info:{icon:L.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:L.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function nt(m){let d=y(8),{status:S,withSpace:u}=m,w=u===void 0?!1:u,o=bdt[S];const c=!o.color;let t;if(d[0]!==o.ariaLabel||d[1]!==o.icon)t=e(n,{"aria-label":o.ariaLabel,children:o.icon}),d[0]=o.ariaLabel,d[1]=o.icon,d[2]=t;else t=d[2];const s=w&&" ";let f;if(d[3]!==o.color||d[4]!==c||d[5]!==t||d[6]!==s)f=r(n,{color:o.color,dimColor:c,children:[t,s]}),d[3]=o.color,d[4]=c,d[5]=t,d[6]=s,d[7]=f;else f=d[7];return f}function wu(i){if(i)return!0;return gp()&&H("tengu_cedar_marsh",!1)}
export{bdt,nt,wu};
