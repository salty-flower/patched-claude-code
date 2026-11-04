// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{b}from"./chunk-6r9k9nrd.js";import{s,n}from"./chunk-v5qk8x3w.js";import{Ke}from"./chunk-2j18wt5c.js";import{e,r}from"./chunk-6n4z8qxn.js";import{en}from"./chunk-r3bztxeh.js";function k$r(){return e(Ke,{height:1,children:e(n,{dimColor:!0,children:"Fetching\u2026"})})}function Ojt(g){let u=b(7),{bytes:a,status:p}=g,m;if(u[0]!==a)m=en(a),u[0]=a,u[1]=m;else m=u[1];let t;if(u[2]!==m)t=e(n,{bold:!0,children:m}),u[2]=m,u[3]=t;else t=u[3];const o=p!==void 0&&` (${p})`;let c;if(u[4]!==t||u[5]!==o)c=e(Ke,{height:1,children:r(n,{children:["Received ",t,o]})}),u[4]=t,u[5]=o,u[6]=c;else c=u[6];return c}function G6s({bytes:g,code:a,codeText:p,result:u},m,{verbose:t}){let o=e(Ojt,{bytes:g,status:`${a} ${p}`});if(t)return r(s,{flexDirection:"column",children:[o,e(s,{flexDirection:"column",children:e(n,{children:u})})]});return o}
export{k$r,Ojt,G6s};
