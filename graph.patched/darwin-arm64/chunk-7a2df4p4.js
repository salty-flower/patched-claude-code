// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mlt}from"./chunk-3mehx43h.js";import{Et}from"./chunk-nag2zkkq.js";import{_}from"./chunk-rykc5fv4.js";import{Px,Ox}from"./chunk-hm4dvvtr.js";import{U,e}from"./chunk-wk3xnwvn.js";import{yn,qn,F}from"./chunk-w6mhhrt2.js";F();import{PassThrough as R}from"stream";function l(){}var bke=yn(!1);function Cb(k){let u=_(5),{children:s}=k,{exit:a}=Px(),m,p;if(u[0]!==a)m=()=>{let y=setTimeout(a,0);return()=>clearTimeout(y)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];qn(m,p);let f;if(u[3]!==s)f=e(U,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function ev(r,t){r.render(e(Cb,{children:t})),await r.waitUntilExit()}async function cse(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await Ox(e(Cb,{children:e(bke.Provider,{value:!0,children:e(mlt,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function knt(r,t){let n=await cse(r,t);return Et(n)}
export{bke,Cb,ev,cse,knt};
