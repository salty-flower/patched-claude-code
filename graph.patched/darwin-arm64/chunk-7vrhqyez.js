// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{dn}from"./chunk-bnfhb7sj.js";import{own}from"./chunk-y0c8sw6x.js";import{w}from"./chunk-d6ktxc5j.js";import{_T,v6}from"./chunk-sm4gyzj8.js";import{Q,e}from"./chunk-esdbx0br.js";import{zt,Jt,F}from"./chunk-57p87fb1.js";F();import{PassThrough as u}from"stream";function m(){}var ywt=zt(!1);function _O(r){let i=w(5),{children:t}=r,{exit:n}=_T(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Jt(a,o);let c;if(i[3]!==t)c=e(Q,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function SO(r,t){r.render(e(_O,{children:t})),await r.waitUntilExit()}async function $ze(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await v6(e(_O,{children:e(ywt.Provider,{value:!0,children:e(own,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function bSn(r,t){let n=await $ze(r,t);return dn(n)}
export{ywt,_O,SO,$ze,bSn};
