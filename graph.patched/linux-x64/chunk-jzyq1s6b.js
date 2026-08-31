// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{flt}from"./chunk-d4fzrbr9.js";import{Et}from"./chunk-1nj7y1sr.js";import{y}from"./chunk-a5ahs27a.js";import{Cx,Rx}from"./chunk-snr8xejh.js";import{B,e}from"./chunk-ys8dsnqt.js";import{_n,Gn,F}from"./chunk-v59pjxqq.js";F();import{PassThrough as R}from"stream";function l(){}var TCe=_n(!1);function kS(k){let u=y(5),{children:s}=k,{exit:a}=Cx(),m,p;if(u[0]!==a)m=()=>{let N=setTimeout(a,0);return()=>clearTimeout(N)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];Gn(m,p);let f;if(u[3]!==s)f=e(B,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function Zv(r,t){r.render(e(kS,{children:t})),await r.waitUntilExit()}async function cse(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await Rx(e(kS,{children:e(TCe.Provider,{value:!0,children:e(flt,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function Nnt(r,t){let n=await cse(r,t);return Et(n)}
export{TCe,kS,Zv,cse,Nnt};
