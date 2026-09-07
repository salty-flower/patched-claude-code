// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Gst}from"./chunk-0312mgjz.js";import{pt}from"./chunk-nnhhr1jx.js";import{y}from"./chunk-wdpeygc3.js";import{Zw,Cx}from"./chunk-bkvzfc5q.js";import{F,e}from"./chunk-smtaex5n.js";import{Jt,kn,N}from"./chunk-vm1tjjym.js";N();import{PassThrough as R}from"stream";function l(){}var HRe=Jt(!1);function RS(k){let u=y(5),{children:s}=k,{exit:a}=Zw(),m,p;if(u[0]!==a)m=()=>{let h=setTimeout(a,0);return()=>clearTimeout(h)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];kn(m,p);let f;if(u[3]!==s)f=e(F,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function tk(r,t){r.render(e(RS,{children:t})),await r.waitUntilExit()}async function Aae(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await Cx(e(RS,{children:e(HRe.Provider,{value:!0,children:e(Gst,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function mst(r,t){let n=await Aae(r,t);return pt(n)}
export{HRe,RS,tk,Aae,mst};
