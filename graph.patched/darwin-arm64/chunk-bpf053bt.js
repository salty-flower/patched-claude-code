// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Nvt}from"./chunk-2k39abte.js";import{yt}from"./chunk-nxhd1nfq.js";import{b}from"./chunk-mvpw0rjp.js";import{XC,$D}from"./chunk-cskdt2sa.js";import{U,e}from"./chunk-437ab22y.js";import{Qt,dn,M}from"./chunk-ncc6kxz8.js";M();import{PassThrough as R}from"stream";function l(){}var qUe=Qt(!1);function hv(k){let u=b(5),{children:s}=k,{exit:a}=XC(),m,p;if(u[0]!==a)m=()=>{let y=setTimeout(a,0);return()=>clearTimeout(y)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];dn(m,p);let f;if(u[3]!==s)f=e(U,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function cx(r,t){r.render(e(hv,{children:t})),await r.waitUntilExit()}async function tye(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await $D(e(hv,{children:e(qUe.Provider,{value:!0,children:e(Nvt,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function ovt(r,t){let n=await tye(r,t);return yt(n)}
export{qUe,hv,cx,tye,ovt};
