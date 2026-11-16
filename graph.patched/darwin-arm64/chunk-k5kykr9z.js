// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{E}from"./chunk-xysnb9s9.js";import{s,n}from"./chunk-b2f7pn4f.js";import{Xe}from"./chunk-hm975b5a.js";import{e,r}from"./chunk-zrhzz8fw.js";import{nn}from"./chunk-sjk3kdyw.js";function veo(){return e(Xe,{height:1,children:e(n,{dimColor:!0,children:"Fetching\u2026"})})}function U7t(g){let u=E(7),{bytes:a,status:p}=g,m;if(u[0]!==a)m=nn(a),u[0]=a,u[1]=m;else m=u[1];let t;if(u[2]!==m)t=e(n,{bold:!0,children:m}),u[2]=m,u[3]=t;else t=u[3];const o=p!==void 0&&` (${p})`;let c;if(u[4]!==t||u[5]!==o)c=e(Xe,{height:1,children:r(n,{children:["Received ",t,o]})}),u[4]=t,u[5]=o,u[6]=c;else c=u[6];return c}function NEi({bytes:g,code:a,codeText:p,result:u},m,{verbose:t}){let o=e(U7t,{bytes:g,status:`${a} ${p}`});if(t)return r(s,{flexDirection:"column",children:[o,e(s,{flexDirection:"column",children:e(n,{children:u})})]});return o}
export{veo,U7t,NEi};
