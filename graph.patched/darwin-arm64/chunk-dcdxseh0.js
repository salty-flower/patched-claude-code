// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{fn}from"./chunk-tdxkq523.js";import{Hkn}from"./chunk-9g0xctkw.js";import{w}from"./chunk-mjaw4h5n.js";import{JA,yU}from"./chunk-t3eqa5fc.js";import{Q,e}from"./chunk-q4w894bt.js";import{Vt,Xt,B}from"./chunk-2txtxkxk.js";B();import{PassThrough as u}from"stream";function m(){}var ckt=Vt(!1);function $O(r){let i=w(5),{children:t}=r,{exit:n}=JA(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Xt(a,o);let c;if(i[3]!==t)c=e(Q,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function UO(r,t){r.render(e($O,{children:t})),await r.waitUntilExit()}async function tKe(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await yU(e($O,{children:e(ckt.Provider,{value:!0,children:e(Hkn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function jvn(r,t){let n=await tKe(r,t);return fn(n)}
export{ckt,$O,UO,tKe,jvn};
