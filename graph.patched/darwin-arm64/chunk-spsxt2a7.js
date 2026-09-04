// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Zat}from"./chunk-npzr9fk5.js";import{wt}from"./chunk-mtyvzmw4.js";import{y}from"./chunk-pqa42v56.js";import{SH,EI}from"./chunk-86a8apqx.js";import{U,e}from"./chunk-6ccz96s4.js";import{yn,Mn,j}from"./chunk-8wk5q2vw.js";j();import{PassThrough as R}from"stream";function l(){}var FIe=yn(!1);function iw(k){let u=y(5),{children:s}=k,{exit:a}=SH(),m,p;if(u[0]!==a)m=()=>{let N=setTimeout(a,0);return()=>clearTimeout(N)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];Mn(m,p);let f;if(u[3]!==s)f=e(U,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function Vv(r,t){r.render(e(iw,{children:t})),await r.waitUntilExit()}async function rce(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await EI(e(iw,{children:e(FIe.Provider,{value:!0,children:e(Zat,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function Uat(r,t){let n=await rce(r,t);return wt(n)}
export{FIe,iw,Vv,rce,Uat};
