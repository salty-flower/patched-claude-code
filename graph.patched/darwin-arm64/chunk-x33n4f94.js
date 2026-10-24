// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{yn}from"./chunk-d7b0m8qy.js";import{JIn}from"./chunk-s6pst8p2.js";import{w}from"./chunk-zqxc4qtb.js";import{GR,J1}from"./chunk-7car90a2.js";import{Q,e}from"./chunk-f790ajz4.js";import{Gt,Xt,j}from"./chunk-s8vmszp2.js";j();import{PassThrough as u}from"stream";function m(){}var tPt=Gt(!1);function e0(r){let i=w(5),{children:t}=r,{exit:n}=GR(),a,o;if(i[0]!==n)a=()=>{let d=setTimeout(n,0);return()=>clearTimeout(d)},o=[n],i[0]=n,i[1]=a,i[2]=o;else a=i[1],o=i[2];Xt(a,o);let c;if(i[3]!==t)c=e(Q,{children:t}),i[3]=t,i[4]=c;else c=i[4];return c}async function t0(r,t){r.render(e(e0,{children:t})),await r.waitUntilExit()}async function S5e(r,{columns:t,storageV5:n}){let i="",a=!1,o=new u;if(t!==void 0)o.columns=t;return o.on("data",(c)=>{if(a)return;a=!0,i=c.toString()}),await(await J1(e(e0,{children:e(tPt.Provider,{value:!0,children:e(JIn,{value:m,children:r})})}),{stdout:o,patchConsole:!1},{storageV5:n})).waitUntilExit(),i}async function yIn(r,t){let n=await S5e(r,t);return yn(n)}
export{tPt,e0,t0,S5e,yIn};
