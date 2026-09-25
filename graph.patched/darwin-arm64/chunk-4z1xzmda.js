// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{o2t}from"./chunk-35z18qft.js";import{_t}from"./chunk-z2w95mdn.js";import{w}from"./chunk-1qj92kzv.js";import{_E,GF}from"./chunk-hkhfvq8c.js";import{G,e}from"./chunk-srmsc891.js";import{Vt,cn,L}from"./chunk-1cnhgfv0.js";L();import{PassThrough as u}from"stream";function m(){}var Z9e=Vt(!1);function rk(r){let i=w(5),{children:t}=r,{exit:n}=_E(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];cn(a,o);let c;if(i[3]!==t)c=e(G,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function Q0(r,t){r.render(e(rk,{children:t})),await r.waitUntilExit()}async function RTe(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await GF(e(rk,{children:e(Z9e.Provider,{value:!0,children:e(o2t,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function QUt(r,t){let n=await RTe(r,t);return _t(n)}
export{Z9e,rk,Q0,RTe,QUt};
