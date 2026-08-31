// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_}from"./chunk-rykc5fv4.js";import{t}from"./chunk-hm4dvvtr.js";import{Oue,Rht,g_}from"./chunk-xg48ycpt.js";import{xt}from"./chunk-bpwteezm.js";import{M}from"./chunk-bv4zd4cw.js";import{e}from"./chunk-wk3xnwvn.js";import{B,A,C,u,F}from"./chunk-w6mhhrt2.js";import{d}from"./chunk-rqyyny1n.js";F();var g=2000,x=2000;function Xj(r){let s=xt(),[P,a]=u(null),n=C(null),l=C(null),o=C(null),p=C(0),f=C(!0),m=B(()=>{p.current+=1,o.current?.(),o.current=null,l.current=null,n.current?.(),n.current=null,a(null)},[]);A(()=>{if(m(),r!==null)Rht()},[r,m]),A(()=>(f.current=!0,()=>{f.current=!1,o.current?.(),o.current=null,l.current=null,n.current?.(),n.current=null}),[]);let v=B((b)=>{if(l.current===b)return;l.current=b,o.current?.(),o.current=s.setTimeout(()=>{o.current=null,l.current=null},g);let y=Oue(),R=p.current;g_(b).then((h)=>{if(!f.current||R!==p.current)return;if(h)process.stdout.write(h);if(n.current?.(),n.current=null,a(y),y==="native")n.current=s.setTimeout(()=>{n.current=null,a(null)},x)})},[s]);return{copiedVia:P,copy:v,reset:m}}function lL(W){let L=_(2),{via:k}=W;if(k==="native"){let c;if(L[0]===d)c=e(t,{color:"success",children:"(Copied!)"}),L[0]=c;else c=L[0];return c}if(k===null){let c;if(L[1]===d)c=e(t,{dimColor:!0,children:e(M,{chord:"c",action:"copy",parens:!0})}),L[1]=c;else c=L[1];return c}return null}function cL(G){let E=_(2),{via:U}=G;if(U==="tmux-buffer"){let i;if(E[0]===d)i=e(t,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),E[0]=i;else i=E[0];return i}if(U==="osc52"){let i;if(E[1]===d)i=e(t,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),E[1]=i;else i=E[1];return i}return null}
export{Xj,lL,cL};
