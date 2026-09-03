// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Qdt}from"./chunk-z5w7grep.js";import{Tt}from"./chunk-akratr0p.js";import{_}from"./chunk-0jrfbepr.js";import{_H,vI}from"./chunk-t50adtrb.js";import{U,e}from"./chunk-v5r13aq1.js";import{hn,Dn,j}from"./chunk-xyxaqzpf.js";j();import{PassThrough as R}from"stream";function l(){}var r0e=hn(!1);function Yb(k){let u=_(5),{children:s}=k,{exit:a}=_H(),m,p;if(u[0]!==a)m=()=>{let y=setTimeout(a,0);return()=>clearTimeout(y)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];Dn(m,p);let f;if(u[3]!==s)f=e(U,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function Dv(r,t){r.render(e(Yb,{children:t})),await r.waitUntilExit()}async function tle(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await vI(e(Yb,{children:e(r0e.Provider,{value:!0,children:e(Qdt,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function Zit(r,t){let n=await tle(r,t);return Tt(n)}
export{r0e,Yb,Dv,tle,Zit};
