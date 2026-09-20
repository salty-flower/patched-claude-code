// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{S}from"./chunk-6qjhsn35.js";import{n}from"./chunk-g8n1e3fe.js";import{Cwe,nLt,aS}from"./chunk-mcfs9shb.js";import{xt}from"./chunk-enjx468k.js";import{D}from"./chunk-bk6xhf5q.js";import{e}from"./chunk-437ab22y.js";import{re,k,T,d,L}from"./chunk-cf8g1269.js";import{y}from"./chunk-bbmh8g33.js";L();var R=2000,g=2000;function Q4(r){let i=xt(),[h,s]=d(null),t=T(null),l=T(null),o=T(null),a=T(0),p=T(!0),f=re(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);k(()=>{if(f(),r!==null)nLt()},[r,f]),k(()=>(p.current=!0,()=>{p.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let P=re((C)=>{if(l.current===C)return;l.current=C,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},R);let m=Cwe(),v=a.current;aS(C).then((b)=>{if(!p.current||v!==a.current)return;if(b)process.stdout.write(b);if(t.current?.(),t.current=null,s(m),m==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},g)})},[i]);return{copiedVia:h,copy:P,reset:f}}function QF(W){let U=S(2),{via:x}=W;if(x==="native"){let u;if(U[0]===y)u=e(n,{color:"success",children:"(Copied!)"}),U[0]=u;else u=U[0];return u}if(x===null){let u;if(U[1]===y)u=e(n,{dimColor:!0,children:e(D,{chord:"c",action:"copy",parens:!0})}),U[1]=u;else u=U[1];return u}return null}function ZF(B){let O=S(2),{via:E}=B;if(E==="tmux-buffer"){let c;if(O[0]===y)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),O[0]=c;else c=O[0];return c}if(E==="osc52"){let c;if(O[1]===y)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),O[1]=c;else c=O[1];return c}return null}
export{Q4,QF,ZF};
