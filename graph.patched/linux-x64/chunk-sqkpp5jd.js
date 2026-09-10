// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ddt}from"./chunk-13mcxq6s.js";import{ft}from"./chunk-jwp1p5wz.js";import{y}from"./chunk-spjasdq6.js";import{ek,BH}from"./chunk-q8bwyp41.js";import{F,e}from"./chunk-qs39f0kj.js";import{Vt,un,L}from"./chunk-kt4npzgg.js";L();import{PassThrough as R}from"stream";function l(){}var JMe=Vt(!1);function Cw(k){let u=y(5),{children:s}=k,{exit:a}=ek(),m,p;if(u[0]!==a)m=()=>{let N=setTimeout(a,0);return()=>clearTimeout(N)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];un(m,p);let f;if(u[3]!==s)f=e(F,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function lC(r,t){r.render(e(Cw,{children:t})),await r.waitUntilExit()}async function zue(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await BH(e(Cw,{children:e(JMe.Provider,{value:!0,children:e(Ddt,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function ydt(r,t){let n=await zue(r,t);return ft(n)}
export{JMe,Cw,lC,zue,ydt};
