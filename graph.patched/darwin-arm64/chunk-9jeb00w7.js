// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{Bat}from"./chunk-hm8z9h7j.js";import{pt}from"./chunk-jjr7hzzf.js";import{_}from"./chunk-zhnvc798.js";import{uE,J0}from"./chunk-k8hr56nm.js";import{N,e}from"./chunk-kwtapczy.js";import{Qt,dn,F}from"./chunk-j03jpdbn.js";F();import{PassThrough as R}from"stream";function l(){}var A0e=Qt(!1);function Gb(k){let u=_(5),{children:s}=k,{exit:a}=uE(),m,p;if(u[0]!==a)m=()=>{let y=setTimeout(a,0);return()=>clearTimeout(y)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];dn(m,p);let f;if(u[3]!==s)f=e(N,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function bv(r,t){r.render(e(Gb,{children:t})),await r.waitUntilExit()}async function yle(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await J0(e(Gb,{children:e(A0e.Provider,{value:!0,children:e(Bat,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function uat(r,t){let n=await yle(r,t);return pt(n)}
export{A0e,Gb,bv,yle,uat};
