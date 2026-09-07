// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{y}from"./chunk-wdpeygc3.js";import{n}from"./chunk-bkvzfc5q.js";import{jde,Hyt,$y}from"./chunk-5m0srdpp.js";import{vt}from"./chunk-6wv5bpfy.js";import{D}from"./chunk-ymd1zt21.js";import{e}from"./chunk-smtaex5n.js";import{re,E,v,d,N}from"./chunk-vm1tjjym.js";import{p}from"./chunk-55pqc2de.js";N();var x=2000,k=2000;function SW(r){let i=vt(),[P,s]=d(null),t=v(null),l=v(null),o=v(null),a=v(0),f=v(!0),C=re(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);E(()=>{if(C(),r!==null)Hyt()},[r,C]),E(()=>(f.current=!0,()=>{f.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let R=re((m)=>{if(l.current===m)return;l.current=m,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},x);let b=jde(),g=a.current;$y(m).then((h)=>{if(!f.current||g!==a.current)return;if(h)process.stdout.write(h);if(t.current?.(),t.current=null,s(b),b==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},k)})},[i]);return{copiedVia:P,copy:R,reset:C}}function E$(W){let U=y(2),{via:L}=W;if(L==="native"){let u;if(U[0]===p)u=e(n,{color:"success",children:"(Copied!)"}),U[0]=u;else u=U[0];return u}if(L===null){let u;if(U[1]===p)u=e(n,{dimColor:!0,children:e(D,{chord:"c",action:"copy",parens:!0})}),U[1]=u;else u=U[1];return u}return null}function A$(B){let S=y(2),{via:O}=B;if(O==="tmux-buffer"){let c;if(S[0]===p)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),S[0]=c;else c=S[0];return c}if(O==="osc52"){let c;if(S[1]===p)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),S[1]=c;else c=S[1];return c}return null}
export{SW,E$,A$};
