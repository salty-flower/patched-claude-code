// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{dn}from"./chunk-cwsn6mdf.js";import{WSn}from"./chunk-wtrt1yea.js";import{w}from"./chunk-j2ak5p7d.js";import{gC,mV}from"./chunk-hey8xzq2.js";import{Q,e}from"./chunk-esdbx0br.js";import{Gt,Jt,F}from"./chunk-zx300qjj.js";F();import{PassThrough as u}from"stream";function m(){}var lwt=Gt(!1);function gO(r){let i=w(5),{children:t}=r,{exit:n}=gC(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Jt(a,o);let c;if(i[3]!==t)c=e(Q,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function hO(r,t){r.render(e(gO,{children:t})),await r.waitUntilExit()}async function P2e(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await mV(e(gO,{children:e(lwt.Provider,{value:!0,children:e(WSn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function rbn(r,t){let n=await P2e(r,t);return dn(n)}
export{lwt,gO,hO,P2e,rbn};
