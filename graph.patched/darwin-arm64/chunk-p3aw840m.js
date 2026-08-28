// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{t}from"./chunk-htcaw08y.js";import{e,r}from"./chunk-80eepr01.js";import{L}from"./chunk-xbhjxa6g.js";var fZe={success:{icon:L.tick,color:"success",ariaLabel:"done:"},error:{icon:L.cross,color:"error",ariaLabel:"failed:"},warning:{icon:L.warning,color:"warning",ariaLabel:"warning:"},info:{icon:L.info,color:"suggestion",ariaLabel:"note:"},pending:{icon:L.circle,color:void 0,ariaLabel:"pending:"},loading:{icon:"\u2026",color:void 0,ariaLabel:"loading:"}};function Qe(S){let u=g(8),{status:m,withSpace:d}=S,R=d===void 0?!1:d,o=fZe[m];const i=!o.color;let a;if(u[0]!==o.ariaLabel||u[1]!==o.icon)a=e(t,{"aria-label":o.ariaLabel,children:o.icon}),u[0]=o.ariaLabel,u[1]=o.icon,u[2]=a;else a=u[2];const c=R&&" ";let f;if(u[3]!==o.color||u[4]!==i||u[5]!==a||u[6]!==c)f=r(t,{color:o.color,dimColor:i,children:[a,c]}),u[3]=o.color,u[4]=i,u[5]=a,u[6]=c,u[7]=f;else f=u[7];return f}
export{fZe,Qe};
