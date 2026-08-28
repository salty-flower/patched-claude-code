// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{zot}from"./chunk-8myrmvax.js";import{g}from"./chunk-8mr77ghb.js";import{_t}from"./chunk-j4jfcs5p.js";import{yx,bx}from"./chunk-htcaw08y.js";import{M,e}from"./chunk-80eepr01.js";import{fn,Zn,N}from"./chunk-5752v0zq.js";N();import{PassThrough as R}from"stream";function l(){}var UCe=fn(!1);function $b(y){let u=g(5),{children:s}=y,{exit:a}=yx(),m,p;if(u[0]!==a)m=()=>{let h=setTimeout(a,0);return()=>clearTimeout(h)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];Zn(m,p);let f;if(u[3]!==s)f=e(M,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function rC(r,t){r.render(e($b,{children:t})),await r.waitUntilExit()}async function Gre(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await bx(e($b,{children:e(UCe.Provider,{value:!0,children:e(zot,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function yZe(r,t){let n=await Gre(r,t);return _t(n)}
export{UCe,$b,rC,Gre,yZe};
