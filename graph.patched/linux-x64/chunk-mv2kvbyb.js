// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{eEt}from"./chunk-jnhqj9rz.js";import{yt}from"./chunk-b48ax99g.js";import{S}from"./chunk-6qjhsn35.js";import{KA,TM}from"./chunk-g8n1e3fe.js";import{U,e}from"./chunk-437ab22y.js";import{Jt,dn,L}from"./chunk-cf8g1269.js";L();import{PassThrough as R}from"stream";function l(){}var RUe=Jt(!1);function fE(y){let u=S(5),{children:s}=y,{exit:a}=KA(),m,p;if(u[0]!==a)m=()=>{let N=setTimeout(a,0);return()=>clearTimeout(N)},p=[a],u[0]=a,u[1]=m,u[2]=p;else m=u[1],p=u[2];dn(m,p);let f;if(u[3]!==s)f=e(U,{children:s}),u[3]=s,u[4]=f;else f=u[4];return f}async function sx(r,t){r.render(e(fE,{children:t})),await r.waitUntilExit()}async function zhe(r,{columns:t,storageV5:n}){let i="",c=!1,o=new R;if(t!==void 0)o.columns=t;return o.on("data",(d)=>{if(c)return;c=!0,i=d.toString()}),await(await TM(e(fE,{children:e(RUe.Provider,{value:!0,children:e(eEt,{value:l,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function wvt(r,t){let n=await zhe(r,t);return yt(n)}
export{RUe,fE,sx,zhe,wvt};
