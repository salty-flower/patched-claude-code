// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{sp}from"./chunk-fj5t20j0.js";import{y}from"./chunk-hshe4789.js";import{H}from"./chunk-vryy7b5x.js";import{n}from"./chunk-dqjxa0y4.js";import{e,r}from"./chunk-zhg3ync1.js";import{L}from"./chunk-rdwm4e1t.js";var Jct={success:{icon:L.tick,color:"success",ariaLabel:"done:"},error:{icon:L.cross,color:"error",ariaLabel:"failed:"},warning:{icon:L.warning,color:"warning",ariaLabel:"warning:"},info:{icon:L.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:L.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function rt(m){let d=y(8),{status:S,withSpace:u}=m,w=u===void 0?!1:u,o=Jct[S];const c=!o.color;let t;if(d[0]!==o.ariaLabel||d[1]!==o.icon)t=e(n,{"aria-label":o.ariaLabel,children:o.icon}),d[0]=o.ariaLabel,d[1]=o.icon,d[2]=t;else t=d[2];const s=w&&" ";let f;if(d[3]!==o.color||d[4]!==c||d[5]!==t||d[6]!==s)f=r(n,{color:o.color,dimColor:c,children:[t,s]}),d[3]=o.color,d[4]=c,d[5]=t,d[6]=s,d[7]=f;else f=d[7];return f}function yu(i){if(i)return!0;return sp()&&H("tengu_cedar_marsh",!1)}
export{Jct,rt,yu};
