// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{fut}from"./chunk-fj5t20j0.js";import{ft}from"./chunk-wtkjh5e3.js";import{y}from"./chunk-hshe4789.js";import{BA,FI}from"./chunk-dqjxa0y4.js";import{U,e}from"./chunk-zhg3ync1.js";import{Yt,fn,N}from"./chunk-w8p0f9k6.js";N();import{PassThrough as R}from"stream";function l(){}var MPe=Yt(!1);function yw(k){let u=y(5),{children:s}=k,{exit:a}=BA(),m,p;if(u[0]!==a)m=()=>{let h=setTimeout(a,0);return()=>clearTimeout(h)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];fn(m,p);let f;if(u[3]!==s)f=e(U,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function KT(r,t){r.render(e(yw,{children:t})),await r.waitUntilExit()}async function rue(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await FI(e(yw,{children:e(MPe.Provider,{value:!0,children:e(fut,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function Xct(r,t){let n=await rue(r,t);return ft(n)}
export{MPe,yw,KT,rue,Xct};
