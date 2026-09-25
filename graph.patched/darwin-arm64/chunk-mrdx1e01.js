// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{w}from"./chunk-1qj92kzv.js";import{s,n}from"./chunk-hkhfvq8c.js";import{Me}from"./chunk-mt1kq2vd.js";import{e,r}from"./chunk-srmsc891.js";import{Mt}from"./chunk-s2y7je9b.js";function tmn(){return e(Me,{height:1,children:e(n,{dimColor:!0,children:"Fetching\u2026"})})}function I9e(g){let u=w(7),{bytes:a,status:p}=g,m;if(u[0]!==a)m=Mt(a),u[0]=a,u[1]=m;else m=u[1];let t;if(u[2]!==m)t=e(n,{bold:!0,children:m}),u[2]=m,u[3]=t;else t=u[3];const o=p!==void 0&&` (${p})`;let c;if(u[4]!==t||u[5]!==o)c=e(Me,{height:1,children:r(n,{children:["Received ",t,o]})}),u[4]=t,u[5]=o,u[6]=c;else c=u[6];return c}function aWr({bytes:g,code:a,codeText:p,result:u},m,{verbose:t}){let o=e(I9e,{bytes:g,status:`${a} ${p}`});if(t)return r(s,{flexDirection:"column",children:[o,e(s,{flexDirection:"column",children:e(n,{children:u})})]});return o}
export{tmn,I9e,aWr};
