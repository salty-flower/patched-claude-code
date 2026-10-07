// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{cn}from"./chunk-pey4mmsy.js";import{btn}from"./chunk-wd6qtxhm.js";import{Gt,Qt,L}from"./chunk-bkksmm2y.js";import{w}from"./chunk-k8a9av7b.js";import{ck,o2}from"./chunk-0x4ch5gg.js";import{Y,e}from"./chunk-mq8eg5v4.js";L();import{PassThrough as u}from"stream";function m(){}var Tat=Gt(!1);function mx(r){let i=w(5),{children:t}=r,{exit:n}=ck(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Qt(a,o);let c;if(i[3]!==t)c=e(Y,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function gx(r,t){r.render(e(mx,{children:t})),await r.waitUntilExit()}async function rFe(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await o2(e(mx,{children:e(Tat.Provider,{value:!0,children:e(btn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function Oen(r,t){let n=await rFe(r,t);return cn(n)}
export{Tat,mx,gx,rFe,Oen};
