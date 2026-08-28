// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{t}from"./chunk-167xpx5m.js";import{r}from"./chunk-azctepqx.js";function Yh(m){let u=g(10),{added:o,removed:f,bold:e}=m;if(o===0&&f===0){return null}let p;if(u[0]!==o||u[1]!==e)p=o>0&&r(t,{color:"diffAddedWord",bold:e,children:["+",o]}),u[0]=o,u[1]=e,u[2]=p;else p=u[2];const R=o>0&&f>0&&" ";let b;if(u[3]!==e||u[4]!==f)b=f>0&&r(t,{color:"diffRemovedWord",bold:e,children:["-",f]}),u[3]=e,u[4]=f,u[5]=b;else b=u[5];let d;if(u[6]!==p||u[7]!==R||u[8]!==b)d=r(t,{children:[p,R,b]}),u[6]=p,u[7]=R,u[8]=b,u[9]=d;else d=u[9];return d}
export{Yh};
