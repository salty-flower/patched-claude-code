// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{n}from"./chunk-cskdt2sa.js";import{Lwe,vMt,cb}from"./chunk-g9tg0b5y.js";import{xt}from"./chunk-x7b02cpq.js";import{L}from"./chunk-kbj067kk.js";import{e}from"./chunk-437ab22y.js";import{re,A,T,d,M}from"./chunk-ncc6kxz8.js";import{y}from"./chunk-y8wd7we8.js";M();var g=2000,x=2000;function lq(r){let i=xt(),[P,s]=d(null),t=T(null),l=T(null),o=T(null),a=T(0),p=T(!0),f=re(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);A(()=>{if(f(),r!==null)vMt()},[r,f]),A(()=>(p.current=!0,()=>{p.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let v=re((C)=>{if(l.current===C)return;l.current=C,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},g);let m=Lwe(),R=a.current;cb(C).then((h)=>{if(!p.current||R!==a.current)return;if(h)process.stdout.write(h);if(t.current?.(),t.current=null,s(m),m==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},x)})},[i]);return{copiedVia:P,copy:v,reset:f}}function l$(W){let U=b(2),{via:k}=W;if(k==="native"){let u;if(U[0]===y)u=e(n,{color:"success",children:"(Copied!)"}),U[0]=u;else u=U[0];return u}if(k===null){let u;if(U[1]===y)u=e(n,{dimColor:!0,children:e(L,{chord:"c",action:"copy",parens:!0})}),U[1]=u;else u=U[1];return u}return null}function c$(B){let O=b(2),{via:E}=B;if(E==="tmux-buffer"){let c;if(O[0]===y)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),O[0]=c;else c=O[0];return c}if(E==="osc52"){let c;if(O[1]===y)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),O[1]=c;else c=O[1];return c}return null}
export{lq,l$,c$};
