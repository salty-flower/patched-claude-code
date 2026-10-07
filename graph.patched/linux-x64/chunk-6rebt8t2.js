// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{w}from"./chunk-fetrqmkr.js";import{an,n}from"./chunk-c66e3zm1.js";import{nfe,M_n,lv,le,x,A,g,L}from"./chunk-1mwacejt.js";import{W}from"./chunk-032j5f79.js";import{e}from"./chunk-mq8eg5v4.js";import{S}from"./chunk-grvgfqgm.js";L();var h=2000,P=2000;function Gne(i){let o=an(),[u,r]=g(null),t=A(null),c=A(null),l=A(null),a=A(0),s=A(!0),p=le(()=>{a.current+=1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null,r(null)},[]);x(()=>{if(p(),i!==null)M_n()},[i,p]),x(()=>(s.current=!0,()=>{s.current=!1,l.current?.(),l.current=null,c.current=null,t.current?.(),t.current=null}),[]);let b=le((d)=>{if(c.current===d)return;c.current=d,l.current?.(),l.current=o.setTimeout(()=>{l.current=null,c.current=null},h);let f=nfe(),y=a.current;lv(d).then((C)=>{if(!s.current||y!==a.current)return;if(C)process.stdout.write(C);if(t.current?.(),t.current=null,r(f),f==="native")t.current=o.setTimeout(()=>{t.current=null,r(null)},P)})},[o]);return{copiedVia:u,copy:b,reset:p}}function WK(i){let u=w(2),{via:o}=i;if(o==="native"){let r;if(u[0]===S)r=e(n,{color:"success",children:"(Copied!)"}),u[0]=r;else r=u[0];return r}if(o===null){let r;if(u[1]===S)r=e(n,{dimColor:!0,children:e(W,{chord:"c",action:"copy",parens:!0})}),u[1]=r;else r=u[1];return r}return null}function zK(i){let u=w(2),{via:o}=i;if(o==="tmux-buffer"){let r;if(u[0]===S)r=e(n,{dimColor:!0,children:"(Copied to tmux buffer \xB7 select the URL manually if paste fails)"}),u[0]=r;else r=u[0];return r}if(o==="osc52"){let r;if(u[1]===S)r=e(n,{dimColor:!0,children:"(Sent via OSC 52 \xB7 select the URL manually if paste fails)"}),u[1]=r;else r=u[1];return r}return null}
export{Gne,WK,zK};
