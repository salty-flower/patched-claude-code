// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{t}from"./chunk-snr8xejh.js";import{vue,cht,my}from"./chunk-p8h7ypa5.js";import{Rt}from"./chunk-393r0e96.js";import{O}from"./chunk-kzjewftw.js";import{e}from"./chunk-ys8dsnqt.js";import{U,A,v,u,F}from"./chunk-v59pjxqq.js";import{d}from"./chunk-5nnrmmhw.js";F();var x=2000,k=2000;function Vz(r){let s=Rt(),[P,a]=u(null),n=v(null),l=v(null),o=v(null),p=v(0),f=v(!0),C=U(()=>{p.current+=1,o.current?.(),o.current=null,l.current=null,n.current?.(),n.current=null,a(null)},[]);A(()=>{if(C(),r!==null)cht()},[r,C]),A(()=>(f.current=!0,()=>{f.current=!1,o.current?.(),o.current=null,l.current=null,n.current?.(),n.current=null}),[]);let R=U((m)=>{if(l.current===m)return;l.current=m,o.current?.(),o.current=s.setTimeout(()=>{o.current=null,l.current=null},x);let b=vue(),g=p.current;my(m).then((h)=>{if(!f.current||g!==p.current)return;if(h)process.stdout.write(h);if(n.current?.(),n.current=null,a(b),b==="native")n.current=s.setTimeout(()=>{n.current=null,a(null)},k)})},[s]);return{copiedVia:P,copy:R,reset:C}}function a$(B){let E=y(2),{via:L}=B;if(L==="native"){let c;if(E[0]===d)c=e(t,{color:"success",children:"(Copied!)"}),E[0]=c;else c=E[0];return c}if(L===null){let c;if(E[1]===d)c=e(t,{dimColor:!0,children:e(O,{chord:"c",action:"copy",parens:!0})}),E[1]=c;else c=E[1];return c}return null}function l$(G){let _=y(2),{via:S}=G;if(S==="tmux-buffer"){let i;if(_[0]===d)i=e(t,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),_[0]=i;else i=_[0];return i}if(S==="osc52"){let i;if(_[1]===d)i=e(t,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),_[1]=i;else i=_[1];return i}return null}
export{Vz,a$,l$};
