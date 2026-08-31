// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{o,t}from"./chunk-snr8xejh.js";import{Le}from"./chunk-70qxt2tf.js";import{e,r}from"./chunk-ys8dsnqt.js";import{Nt}from"./chunk-7bqj7ctw.js";function QCt(){return e(Le,{height:1,children:e(t,{dimColor:!0,children:"Fetching\u2026"})})}function BTe(h){let g=y(7),{bytes:u,status:R}=h,n;if(g[0]!==u)n=Nt(u),g[0]=u,g[1]=n;else n=g[1];let m;if(g[2]!==n)m=e(t,{bold:!0,children:n}),g[2]=n,g[3]=m;else m=g[3];const i=R!==void 0&&` (${R})`;let d;if(g[4]!==m||g[5]!==i)d=e(Le,{height:1,children:r(t,{children:["Received ",m,i]})}),g[4]=m,g[5]=i,g[6]=d;else d=g[6];return d}function P$n({bytes:a,code:s,codeText:c,result:l},x,{verbose:f}){let p=e(BTe,{bytes:a,status:`${s} ${c}`});if(f)return r(o,{flexDirection:"column",children:[p,e(o,{flexDirection:"column",children:e(t,{children:l})})]});return p}
export{QCt,BTe,P$n};
