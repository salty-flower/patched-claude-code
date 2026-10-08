// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{un}from"./chunk-cy0s0eq1.js";import{Nsn}from"./chunk-sp36y8cp.js";import{Vt,Qt,N}from"./chunk-f6geyac8.js";import{w}from"./chunk-p3sxj9wz.js";import{RC,mW}from"./chunk-8pkmgy8b.js";import{Y,e}from"./chunk-efrp9dmx.js";N();import{PassThrough as u}from"stream";function m(){}var Vdt=Vt(!1);function Fx(r){let i=w(5),{children:t}=r,{exit:n}=RC(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Qt(a,o);let c;if(i[3]!==t)c=e(Y,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function $x(r,t){r.render(e(Fx,{children:t})),await r.waitUntilExit()}async function b1e(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await mW(e(Fx,{children:e(Vdt.Provider,{value:!0,children:e(Nsn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function asn(r,t){let n=await b1e(r,t);return un(n)}
export{Vdt,Fx,$x,b1e,asn};
