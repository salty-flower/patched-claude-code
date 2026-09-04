// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{y}from"./chunk-pqa42v56.js";import{n}from"./chunk-86a8apqx.js";import{xfe,hbt,_y}from"./chunk-8k2rbn5p.js";import{Ht}from"./chunk-e1zgk7f7.js";import{F}from"./chunk-fhvktrb2.js";import{e}from"./chunk-6ccz96s4.js";import{B,C,v,p,j}from"./chunk-8wk5q2vw.js";import{f}from"./chunk-agfzafth.js";j();var k=2000,L=2000;function h9(r){let i=Ht(),[R,s]=p(null),t=v(null),l=v(null),o=v(null),a=v(0),d=v(!0),m=B(()=>{a.current+=1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null,s(null)},[]);C(()=>{if(m(),r!==null)hbt()},[r,m]),C(()=>(d.current=!0,()=>{d.current=!1,o.current?.(),o.current=null,l.current=null,t.current?.(),t.current=null}),[]);let g=B((b)=>{if(l.current===b)return;l.current=b,o.current?.(),o.current=i.setTimeout(()=>{o.current=null,l.current=null},k);let h=xfe(),x=a.current;_y(b).then((P)=>{if(!d.current||x!==a.current)return;if(P)process.stdout.write(P);if(t.current?.(),t.current=null,s(h),h==="native")t.current=i.setTimeout(()=>{t.current=null,s(null)},L)})},[i]);return{copiedVia:R,copy:g,reset:m}}function yM(M){let E=y(2),{via:U}=M;if(U==="native"){let u;if(E[0]===f)u=e(n,{color:"success",children:"(Copied!)"}),E[0]=u;else u=E[0];return u}if(U===null){let u;if(E[1]===f)u=e(n,{dimColor:!0,children:e(F,{chord:"c",action:"copy",parens:!0})}),E[1]=u;else u=E[1];return u}return null}function SM(W){let S=y(2),{via:O}=W;if(O==="tmux-buffer"){let c;if(S[0]===f)c=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),S[0]=c;else c=S[0];return c}if(O==="osc52"){let c;if(S[1]===f)c=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),S[1]=c;else c=S[1];return c}return null}
export{h9,yM,SM};
