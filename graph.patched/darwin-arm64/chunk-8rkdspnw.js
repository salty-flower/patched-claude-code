// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{o,n}from"./chunk-hrm5smjv.js";import{xe}from"./chunk-p3tp3g47.js";import{e,r}from"./chunk-smtaex5n.js";import{Lt}from"./chunk-nzcy74j6.js";function x0t(){return e(xe,{height:1,children:e(n,{dimColor:!0,children:"Fetching\u2026"})})}function nHe(P){let g=_(7),{bytes:u,status:R}=P,a;if(g[0]!==u)a=Lt(u),g[0]=u,g[1]=a;else a=g[1];let m;if(g[2]!==a)m=e(n,{bold:!0,children:a}),g[2]=a,g[3]=m;else m=g[3];const i=R!==void 0&&` (${R})`;let y;if(g[4]!==m||g[5]!==i)y=e(xe,{height:1,children:r(n,{children:["Received ",m,i]})}),g[4]=m,g[5]=i,g[6]=y;else y=g[6];return y}function $1n({bytes:t,code:s,codeText:c,result:l},d,{verbose:f}){let p=e(nHe,{bytes:t,status:`${s} ${c}`});if(f)return r(o,{flexDirection:"column",children:[p,e(o,{flexDirection:"column",children:e(n,{children:l})})]});return p}
export{x0t,nHe,$1n};
