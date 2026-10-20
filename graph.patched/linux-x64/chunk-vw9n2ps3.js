// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{fn}from"./chunk-n5v91jc3.js";import{bkn}from"./chunk-e6yhnrk5.js";import{w}from"./chunk-eg40vngy.js";import{qC,pU}from"./chunk-wfsayads.js";import{J,e}from"./chunk-8d2nhg02.js";import{Kt,Xt,B}from"./chunk-a2fszd78.js";B();import{PassThrough as u}from"stream";function m(){}var rkt=Kt(!1);function DO(r){let i=w(5),{children:t}=r,{exit:n}=qC(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Xt(a,o);let c;if(i[3]!==t)c=e(J,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function LO(r,t){r.render(e(DO,{children:t})),await r.waitUntilExit()}async function YVe(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await pU(e(DO,{children:e(rkt.Provider,{value:!0,children:e(bkn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function CEn(r,t){let n=await YVe(r,t);return fn(n)}
export{rkt,DO,LO,YVe,CEn};
