// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{jot}from"./chunk-vbtj2k8h.js";import{g}from"./chunk-yhctzac5.js";import{bt}from"./chunk-3fgza2mw.js";import{fx,hx}from"./chunk-167xpx5m.js";import{O,e}from"./chunk-azctepqx.js";import{fn,Zn,N}from"./chunk-q0z49y3j.js";N();import{PassThrough as R}from"stream";function l(){}var Cke=fn(!1);function F_(y){let u=g(5),{children:s}=y,{exit:a}=fx(),m,p;if(u[0]!==a)m=()=>{let h=setTimeout(a,0);return()=>clearTimeout(h)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];Zn(m,p);let f;if(u[3]!==s)f=e(O,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function ek(r,t){r.render(e(F_,{children:t})),await r.waitUntilExit()}async function $re(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await hx(e(F_,{children:e(Cke.Provider,{value:!0,children:e(jot,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function oZe(r,t){let n=await $re(r,t);return bt(n)}
export{Cke,F_,ek,$re,oZe};
