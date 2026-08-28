// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-8mr77ghb.js";import{o,t}from"./chunk-htcaw08y.js";import{Ie}from"./chunk-h5x3jsqp.js";import{e,r}from"./chunk-80eepr01.js";import{Ht}from"./chunk-pc331h5y.js";function BEt(){return e(Ie,{height:1,children:e(t,{dimColor:!0,children:"Fetching\u2026"})})}function XEe(h){let i=g(7),{bytes:u,status:y}=h,n;if(i[0]!==u)n=Ht(u),i[0]=u,i[1]=n;else n=i[1];let m;if(i[2]!==n)m=e(t,{bold:!0,children:n}),i[2]=n,i[3]=m;else m=i[3];const c=y!==void 0&&` (${y})`;let d;if(i[4]!==m||i[5]!==c)d=e(Ie,{height:1,children:r(t,{children:["Received ",m,c]})}),i[4]=m,i[5]=c,i[6]=d;else d=i[6];return d}function rxn({bytes:a,code:s,codeText:l,result:f},x,{verbose:R}){let p=e(XEe,{bytes:a,status:`${s} ${l}`});if(R)return r(o,{flexDirection:"column",children:[p,e(o,{flexDirection:"column",children:e(t,{children:f})})]});return p}
export{BEt,XEe,rxn};
