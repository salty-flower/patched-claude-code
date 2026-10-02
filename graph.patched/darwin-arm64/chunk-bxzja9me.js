// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Xqt}from"./chunk-f82pemx1.js";import{Vt}from"./chunk-ya4yfeap.js";import{Ut,nn,M}from"./chunk-757fgf90.js";import{w}from"./chunk-naky2abr.js";import{Sv,W1}from"./chunk-behv2vm9.js";import{K,e}from"./chunk-ne6sbmea.js";M();import{PassThrough as u}from"stream";function m(){}var fQe=Ut(!1);function gk(r){let i=w(5),{children:t}=r,{exit:n}=Sv(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];nn(a,o);let c;if(i[3]!==t)c=e(K,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function CO(r,t){r.render(e(gk,{children:t})),await r.waitUntilExit()}async function d0e(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await W1(e(gk,{children:e(fQe.Provider,{value:!0,children:e(Xqt,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function rqt(r,t){let n=await d0e(r,t);return Vt(n)}
export{fQe,gk,CO,d0e,rqt};
