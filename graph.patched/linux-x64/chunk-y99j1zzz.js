// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{y}from"./chunk-spjasdq6.js";import{n}from"./chunk-q8bwyp41.js";import{uge,VEt,v_}from"./chunk-8ja6zyc8.js";import{Et}from"./chunk-g0jk30qp.js";import{O}from"./chunk-tgbkem1t.js";import{e}from"./chunk-qs39f0kj.js";import{re,v,k,d,L}from"./chunk-kt4npzgg.js";import{p}from"./chunk-3anr60sp.js";L();var x=2000,U=2000;function Tq(r){let i=Et(),[P,s]=d(null),t=k(null),l=k(null),o=k(null),a=k(0),f=k(!0),C=re(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);v(()=>{if(C(),r!==null)VEt()},[r,C]),v(()=>(f.current=!0,()=>{f.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let R=re((m)=>{if(l.current===m)return;l.current=m,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},x);let b=uge(),g=a.current;v_(m).then((h)=>{if(!f.current||g!==a.current)return;if(h)process.stdout.write(h);if(t.current?.(),t.current=null,s(b),b==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},U)})},[i]);return{copiedVia:P,copy:R,reset:C}}function f$(W){let S=y(2),{via:E}=W;if(E==="native"){let u;if(S[0]===p)u=e(n,{color:"success",children:"(Copied!)"}),S[0]=u;else u=S[0];return u}if(E===null){let u;if(S[1]===p)u=e(n,{dimColor:!0,children:e(O,{chord:"c",action:"copy",parens:!0})}),S[1]=u;else u=S[1];return u}return null}function m$(B){let D=y(2),{via:_}=B;if(_==="tmux-buffer"){let c;if(D[0]===p)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),D[0]=c;else c=D[0];return c}if(_==="osc52"){let c;if(D[1]===p)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),D[1]=c;else c=D[1];return c}return null}
export{Tq,f$,m$};
