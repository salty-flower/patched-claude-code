// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pn}from"./chunk-gyf58rwf.js";import{aun}from"./chunk-z7whhrje.js";import{qt,en,N}from"./chunk-kexg5hxg.js";import{w}from"./chunk-2mxgft48.js";import{bC,MG}from"./chunk-1r9zp6s1.js";import{X,e}from"./chunk-d5st5fww.js";N();import{PassThrough as u}from"stream";function m(){}var Omt=qt(!1);function XP(r){let i=w(5),{children:t}=r,{exit:n}=bC(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];en(a,o);let c;if(i[3]!==t)c=e(X,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function JP(r,t){r.render(e(XP,{children:t})),await r.waitUntilExit()}async function uje(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await MG(e(XP,{children:e(Omt.Provider,{value:!0,children:e(aun,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function _dn(r,t){let n=await uje(r,t);return pn(n)}
export{Omt,XP,JP,uje,_dn};
