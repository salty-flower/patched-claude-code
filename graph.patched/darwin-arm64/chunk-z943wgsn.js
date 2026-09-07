// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{nit}from"./chunk-9m8t8c8c.js";import{ft}from"./chunk-t4hc7q7h.js";import{_}from"./chunk-c8ey99v5.js";import{eE,B0}from"./chunk-hrm5smjv.js";import{F,e}from"./chunk-smtaex5n.js";import{Jt,vn,N}from"./chunk-jegfnmzv.js";N();import{PassThrough as R}from"stream";function l(){}var xHe=Jt(!1);function Ib(k){let u=_(5),{children:s}=k,{exit:a}=eE(),m,p;if(u[0]!==a)m=()=>{let y=setTimeout(a,0);return()=>clearTimeout(y)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];vn(m,p);let f;if(u[3]!==s)f=e(F,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function rv(r,t){r.render(e(Ib,{children:t})),await r.waitUntilExit()}async function Hae(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await B0(e(Ib,{children:e(xHe.Provider,{value:!0,children:e(nit,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function vst(r,t){let n=await Hae(r,t);return ft(n)}
export{xHe,Ib,rv,Hae,vst};
