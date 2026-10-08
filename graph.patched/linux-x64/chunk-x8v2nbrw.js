// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{dn}from"./chunk-j6z0j5vh.js";import{wsn}from"./chunk-kg86xn7n.js";import{qt,Qt,N}from"./chunk-y6zm4y48.js";import{w}from"./chunk-c74pxqn1.js";import{TT,rz}from"./chunk-13cxqtms.js";import{Y,e}from"./chunk-efrp9dmx.js";N();import{PassThrough as u}from"stream";function m(){}var Odt=qt(!1);function Hx(r){let i=w(5),{children:t}=r,{exit:n}=TT(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Qt(a,o);let c;if(i[3]!==t)c=e(Y,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function Dx(r,t){r.render(e(Hx,{children:t})),await r.waitUntilExit()}async function lUe(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await rz(e(Hx,{children:e(Odt.Provider,{value:!0,children:e(wsn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function Hon(r,t){let n=await lUe(r,t);return dn(n)}
export{Odt,Hx,Dx,lUe,Hon};
