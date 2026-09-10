// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Kdt}from"./chunk-r0mh1pvg.js";import{ft}from"./chunk-q87va14m.js";import{y}from"./chunk-jy8hazaz.js";import{tv,ZP}from"./chunk-ykvaeqdn.js";import{F,e}from"./chunk-qs39f0kj.js";import{qt,un,M}from"./chunk-xgsrj7pc.js";M();import{PassThrough as R}from"stream";function l(){}var ZOe=qt(!1);function kw(k){let u=y(5),{children:s}=k,{exit:a}=tv(),m,p;if(u[0]!==a)m=()=>{let N=setTimeout(a,0);return()=>clearTimeout(N)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];un(m,p);let f;if(u[3]!==s)f=e(F,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function dk(r,t){r.render(e(kw,{children:t})),await r.waitUntilExit()}async function que(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await ZP(e(kw,{children:e(ZOe.Provider,{value:!0,children:e(Kdt,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function Sdt(r,t){let n=await que(r,t);return ft(n)}
export{ZOe,kw,dk,que,Sdt};
